import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE_NAME,
  createSessionToken,
  getAdminEnvConfig,
  safeCompare,
} from "@/lib/admin-auth";

const failedAttempts = new Map<string, { count: number; resetAt: number }>();

export async function POST(request: Request) {
  const { username, password, secret, configured } = getAdminEnvConfig();

  if (!configured) {
    return NextResponse.json(
      {
        status: "not_configured",
        message:
          "Admin ortam değişkenleri (ADMIN_USERNAME, ADMIN_PASSWORD, ADMIN_SESSION_SECRET) henüz sunucuda tanımlanmamış.",
      },
      { status: 503 }
    );
  }

  const clientIp =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const now = Date.now();
  const record = failedAttempts.get(clientIp);
  if (record && now < record.resetAt && record.count >= 6) {
    return NextResponse.json(
      {
        status: "rate_limited",
        message:
          "Çok fazla hatalı giriş denemesi yapıldı. Lütfen birkaç dakika bekleyip tekrar deneyin.",
      },
      { status: 429 }
    );
  }

  let body: { username?: string; password?: string };
  try {
    body = (await request.json()) as { username?: string; password?: string };
  } catch {
    return NextResponse.json(
      { status: "error", message: "Geçersiz istek." },
      { status: 400 }
    );
  }

  const inputUser = typeof body.username === "string" ? body.username.trim() : "";
  const inputPass = typeof body.password === "string" ? body.password : "";

  const userOk = safeCompare(inputUser, username);
  const passOk = safeCompare(inputPass, password);

  if (!userOk || !passOk) {
    const nextCount = record && now < record.resetAt ? record.count + 1 : 1;
    failedAttempts.set(clientIp, {
      count: nextCount,
      resetAt: now + 5 * 60 * 1000,
    });
    return NextResponse.json(
      {
        status: "invalid_credentials",
        message: "Kullanıcı adı veya şifre hatalı.",
      },
      { status: 401 }
    );
  }

  failedAttempts.delete(clientIp);

  const token = createSessionToken(username, secret);
  const response = NextResponse.json({ status: "ok" }, { status: 200 });

  response.cookies.set(ADMIN_COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 12 * 60 * 60,
  });

  return response;
}
