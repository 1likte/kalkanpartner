import fs from "node:fs/promises";
import path from "node:path";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import {
  CMS_OVERRIDES_REL_PATH,
  getDefaultSiteSettings,
  readCmsOverridesFromDisk,
  type CmsOverrides,
} from "@/lib/cms";
import { baseDictionaries } from "@/content";
import { baseServicesByLocale, baseServicesOverview } from "@/content/services";
import { basePagesByLocale } from "@/content/pages";
import { legalContentDefault } from "@/content/legal";

function getGithubConfig() {
  const token = process.env.GITHUB_CMS_TOKEN || "";
  const repo = process.env.GITHUB_CMS_REPO || "1likte/kalkanpartner";
  const branch = process.env.GITHUB_CMS_BRANCH || "main";
  return { token, repo, branch, enabled: token.length > 0 };
}

async function fetchOverridesFromGithub(
  token: string,
  repo: string,
  branch: string
): Promise<{ overrides: CmsOverrides; sha?: string } | null> {
  const url = `https://api.github.com/repos/${repo}/contents/${CMS_OVERRIDES_REL_PATH}?ref=${encodeURIComponent(
    branch
  )}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    cache: "no-store",
  });

  if (res.status === 404) {
    return { overrides: {} };
  }

  if (!res.ok) {
    return null;
  }

  const data = (await res.json()) as { content?: string; sha?: string };
  if (!data.content) {
    return { overrides: {}, sha: data.sha };
  }

  try {
    const raw = Buffer.from(data.content.replace(/\n/g, ""), "base64").toString(
      "utf8"
    );
    return { overrides: JSON.parse(raw) as CmsOverrides, sha: data.sha };
  } catch {
    return { overrides: {}, sha: data.sha };
  }
}

export async function GET() {
  const authed = await isAdminAuthenticated();
  if (!authed) {
    return NextResponse.json({ status: "unauthorized" }, { status: 401 });
  }

  const gh = getGithubConfig();
  const isVercel = process.env.VERCEL === "1";

  let overrides: CmsOverrides = readCmsOverridesFromDisk();
  if (gh.enabled) {
    const remote = await fetchOverridesFromGithub(gh.token, gh.repo, gh.branch);
    if (remote) {
      overrides = remote.overrides;
    }
  }

  const storageMode = gh.enabled
    ? "github"
    : isVercel
      ? "vercel_unconfigured"
      : "local";

  return NextResponse.json({
    status: "ok",
    storageMode,
    defaults: {
      site: getDefaultSiteSettings(),
      dictionary: baseDictionaries,
      servicesOverview: baseServicesOverview,
      services: baseServicesByLocale,
      pages: basePagesByLocale,
      legal: legalContentDefault,
    },
    overrides,
  });
}

export async function PUT(request: Request) {
  const authed = await isAdminAuthenticated();
  if (!authed) {
    return NextResponse.json({ status: "unauthorized" }, { status: 401 });
  }

  let body: { overrides?: CmsOverrides };
  try {
    body = (await request.json()) as { overrides?: CmsOverrides };
  } catch {
    return NextResponse.json(
      { status: "error", message: "Geçersiz JSON verisi." },
      { status: 400 }
    );
  }

  if (!body.overrides || typeof body.overrides !== "object") {
    return NextResponse.json(
      { status: "error", message: "Geçersiz içerik verisi." },
      { status: 400 }
    );
  }

  const serialized = JSON.stringify(body.overrides, null, 2) + "\n";
  const gh = getGithubConfig();
  const isVercel = process.env.VERCEL === "1";

  if (gh.enabled) {
    const existing = await fetchOverridesFromGithub(
      gh.token,
      gh.repo,
      gh.branch
    );
    const putUrl = `https://api.github.com/repos/${gh.repo}/contents/${CMS_OVERRIDES_REL_PATH}`;

    const ghRes = await fetch(putUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${gh.token}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      body: JSON.stringify({
        message: "chore(cms): update website content via Admin Panel",
        content: Buffer.from(serialized, "utf8").toString("base64"),
        branch: gh.branch,
        ...(existing?.sha ? { sha: existing.sha } : {}),
      }),
    });

    if (!ghRes.ok) {
      const errText = await ghRes.text();
      return NextResponse.json(
        {
          status: "error",
          message: `GitHub kayıt hatası (${ghRes.status}): GITHUB_CMS_TOKEN yetkilerini (Contents: Read & Write) kontrol edin. Detay: ${errText.slice(0, 200)}`,
        },
        { status: 502 }
      );
    }

    if (!isVercel) {
      try {
        const diskPath = path.join(
          process.cwd(),
          "src",
          "content",
          "cms-overrides.json"
        );
        await fs.writeFile(diskPath, serialized, "utf8");
      } catch {
        // Ignore local disk write if read-only
      }
    }

    revalidatePath("/", "layout");
    return NextResponse.json({
      status: "saved_github",
      message:
        "Değişiklikler GitHub deponuza kaydedildi! Vercel otomatik olarak yeni sürümü (~30-45 sn içinde) yayına alıyor.",
    });
  }

  if (isVercel) {
    return NextResponse.json(
      {
        status: "github_token_missing",
        message:
          "Canlı Vercel sunucusunda kalıcı kayıt yapabilmek için Vercel → Settings → Environment Variables bölümüne GITHUB_CMS_TOKEN eklenmelidir.",
      },
      { status: 503 }
    );
  }

  // Local development / local server persistence
  try {
    const diskPath = path.join(
      process.cwd(),
      "src",
      "content",
      "cms-overrides.json"
    );
    await fs.writeFile(diskPath, serialized, "utf8");
    revalidatePath("/", "layout");
    return NextResponse.json({
      status: "saved_local",
      message:
        "Değişiklikler yerel dosyaya (src/content/cms-overrides.json) kaydedildi ve anında aktif edildi!",
    });
  } catch {
    return NextResponse.json(
      { status: "error", message: "Yerel dosyaya yazılırken hata oluştu." },
      { status: 500 }
    );
  }
}
