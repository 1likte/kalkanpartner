"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  CheckCircle2,
  ExternalLink,
  FileText,
  Globe,
  Home,
  Layers,
  LogOut,
  Plus,
  RotateCcw,
  Save,
  Search,
  Settings,
  Shield,
  Trash2,
} from "lucide-react";
import type { Locale } from "@/i18n/config";
import { SERVICE_SLUGS, type ServiceSlug } from "@/content/services/types";
import type { CmsOverrides, SiteSettings } from "@/lib/cms";
import type { Dictionary } from "@/content/types";
import type {
  ServiceDetailContent,
  ServicesOverviewContent,
} from "@/content/services/types";
import type { CorporatePagesContent } from "@/content/pages/types";
import type { LocaleLegalDictionary } from "@/content/legal/types";
import { BrandLogo } from "@/components/brand/BrandLogo";

interface FullCmsState {
  site: SiteSettings;
  dictionary: Record<Locale, Dictionary>;
  servicesOverview: Record<Locale, ServicesOverviewContent>;
  services: Record<Locale, Record<ServiceSlug, ServiceDetailContent>>;
  pages: Record<Locale, CorporatePagesContent>;
  legal: Record<Locale, LocaleLegalDictionary>;
}

type AdminSectionId =
  | "site"
  | "nav-footer"
  | "home"
  | "services-overview"
  | "service-detail"
  | "about"
  | "network"
  | "how-we-work"
  | "faq"
  | "insights"
  | "contact"
  | "legal";

const FIELD_LABELS: Record<string, string> = {
  brandName: "Marka Adı",
  descriptor: "Marka Alt Tanımı",
  domain: "Alan Adı (Domain)",
  owner: "İşletme Sahibi (Inhaberin)",
  companyLegalName: "Hukuki Şirket Türü / Unvan Notu",
  streetAddress: "Sokak ve Bina No",
  postalCodeCity: "Posta Kodu ve Şehir",
  country: "Ülke",
  email: "E-posta Adresi",
  phone: "Telefon & WhatsApp Görünüm",
  phoneHref: "Telefon Arama Kodu (+49...)",
  whatsappUrl: "WhatsApp Bağlantısı (https://wa.me/...)",
  telegramUrl: "Telegram Bağlantısı (https://t.me/...)",
  mstvResponsible: "§ 18 Abs. 2 MStV İçerik Sorumlusu",
  commercialRegister: "Ticaret Sicili (Boş bırakılırsa gizlenir)",
  vatId: "USt-IdNr. (Boş bırakılırsa gizlenir)",
  supervisoryAuthority: "Denetim Kurumu (Boş bırakılırsa gizlenir)",
  title: "Başlık",
  seoTitle: "SEO Sayfa Başlığı",
  seoDescription: "SEO Açıklaması (Meta Description)",
  description: "Açıklama Metni",
  subtitle: "Alt Başlık",
  eyebrow: "Üst Küçük Başlık (Rozet)",
  headline: "Ana Manşet (H1)",
  slogan: "Slogan",
  lead: "Giriş Özeti (Lead)",
  summary: "Özet",
  primaryCta: "Ana Buton Yazısı",
  secondaryCta: "İkinci Buton Yazısı",
  primaryCtaLabel: "Ana Talep Butonu Yazısı",
  secondaryCtaLabel: "İkincil Buton Yazısı",
  ctaLabel: "Buton Yazısı",
  ctaTitle: "Çağrı Kutusu Başlığı",
  ctaSubtitle: "Çağrı Kutusu Alt Metni",
  ctaButton: "Çağrı Kutusu Butonu",
  complianceBadge: "Hukuki Kapsam Rozeti",
  legalNote: "Hukuki Sınır Notu",
  legalDisclaimer: "Yasal Uyarı Notu",
  audience: "Hedef Kitle",
  audienceBadge: "Hedef Kitle Rozeti",
  highlights: "Öne Çıkan Maddeler",
  paragraphs: "Paragraflar",
  scopeTitle: "Kapsam Listesi Başlığı",
  scopeItems: "Kapsam Maddeleri",
  bullets: "Madde İşaretleri",
  points: "Maddeler",
  heading: "Bölüm Başlığı",
  intro: "Bölüm Giriş Yazısı",
  problem: "Karşılaşılan Sorun",
  solution: "Çözümümüz",
  question: "Soru",
  answer: "Cevap",
  label: "Görünür Yazı / Etiket",
  value: "Değer",
  href: "Bağlantı Yolu (URL)",
  todoBadge: "Rozet (Boş bırakılırsa gizlenir)",
  tagline: "Footer Tanıtım Yazısı",
  coordinationNotice: "Footer Koordinasyon & Hukuk Notu",
  copyright: "Telif Yazısı",
  futureLanguageNote: "Footer Dil Bilgisi",
  keywords: "SEO Anahtar Kelimeler",
  warningTitle: "Üst Uyarı Kutusu Başlığı",
  warningBody: "Üst Uyarı Kutusu Açıklaması",
  badge: "Üst Rozet Metni",
  excerpt: "Kısa Özet",
  readTime: "Okuma Süresi",
  category: "Kategori",
  takeaway: "Sonuç / Özet Kutusu",
};

const READONLY_KEYS = new Set([
  "slug",
  "icon",
  "inquiryTopic",
  "topic",
  "id",
  "relatedSlugs",
  "relatedServiceSlug",
  "defaultDepartment",
]);

function humanizeKey(key: string): string {
  if (FIELD_LABELS[key]) return FIELD_LABELS[key];
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase());
}

function deepMergeLocal<T>(base: T, override: unknown): T {
  if (override === undefined || override === null) return base;
  if (Array.isArray(base)) {
    return (Array.isArray(override) ? override : base) as T;
  }
  if (
    typeof base === "object" &&
    base !== null &&
    typeof override === "object" &&
    override !== null &&
    !Array.isArray(override)
  ) {
    const out: Record<string, unknown> = {
      ...(base as Record<string, unknown>),
    };
    for (const k of Object.keys(override as Record<string, unknown>)) {
      const ov = (override as Record<string, unknown>)[k];
      if (ov !== undefined) {
        out[k] = k in out ? deepMergeLocal(out[k], ov) : ov;
      }
    }
    return out as T;
  }
  return (typeof override === typeof base ? override : base) as T;
}

function createEmptyClone(sample: unknown): unknown {
  if (typeof sample === "string") return "";
  if (typeof sample === "boolean") return false;
  if (typeof sample === "number") return 0;
  if (Array.isArray(sample)) {
    return sample.length > 0 && typeof sample[0] === "string" ? [""] : [];
  }
  if (typeof sample === "object" && sample !== null) {
    const obj: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(sample)) {
      obj[k] = READONLY_KEYS.has(k) ? v : createEmptyClone(v);
    }
    return obj;
  }
  return "";
}

function matchesSearch(value: unknown, query: string): boolean {
  if (!query) return true;
  const q = query.toLowerCase();
  if (typeof value === "string") return value.toLowerCase().includes(q);
  if (Array.isArray(value)) return value.some((item) => matchesSearch(item, q));
  if (typeof value === "object" && value !== null) {
    return Object.entries(value).some(
      ([k, v]) =>
        k.toLowerCase().includes(q) ||
        humanizeKey(k).toLowerCase().includes(q) ||
        matchesSearch(v, q)
    );
  }
  return false;
}

interface VisualEditorProps {
  label?: string;
  fieldKey?: string;
  value: unknown;
  onChange: (next: unknown) => void;
  searchQuery?: string;
  depth?: number;
}

function VisualObjectEditor({
  label,
  fieldKey,
  value,
  onChange,
  searchQuery = "",
  depth = 0,
}: VisualEditorProps) {
  if (fieldKey && READONLY_KEYS.has(fieldKey)) {
    return (
      <div className="flex items-center gap-2 text-xs text-muted">
        <span className="font-semibold text-navy">{humanizeKey(fieldKey)}:</span>
        <code className="rounded bg-ivory px-2 py-0.5 text-[11px] text-navy">
          {Array.isArray(value) ? value.join(", ") : String(value)}
        </code>
      </div>
    );
  }

  if (searchQuery && !matchesSearch({ [fieldKey || ""]: value }, searchQuery)) {
    return null;
  }

  // Primitive: boolean
  if (typeof value === "boolean") {
    return (
      <label className="inline-flex items-center gap-2.5 cursor-pointer py-1">
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          className="h-4 w-4 rounded border-border-subtle text-navy focus:ring-gold"
        />
        <span className="text-xs font-semibold text-navy">
          {label || humanizeKey(fieldKey || "")}
        </span>
      </label>
    );
  }

  // Primitive: string / number
  if (typeof value === "string" || typeof value === "number") {
    const strVal = String(value);
    const isLong = strVal.length > 85 || strVal.includes("\n");
    return (
      <div className="space-y-1.5">
        {label && (
          <label className="block text-xs font-semibold text-navy">
            {label}
          </label>
        )}
        {isLong ? (
          <textarea
            rows={Math.min(6, Math.max(3, Math.ceil(strVal.length / 95)))}
            value={strVal}
            onChange={(e) =>
              onChange(typeof value === "number" ? Number(e.target.value) : e.target.value)
            }
            className="block w-full rounded-lg border border-border-subtle bg-surface px-3.5 py-2.5 text-sm leading-relaxed text-ink focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
          />
        ) : (
          <input
            type="text"
            value={strVal}
            onChange={(e) =>
              onChange(typeof value === "number" ? Number(e.target.value) : e.target.value)
            }
            className="block w-full rounded-lg border border-border-subtle bg-surface px-3.5 py-2 text-sm text-ink focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
          />
        )}
      </div>
    );
  }

  // Array
  if (Array.isArray(value)) {
    const isStringArray = value.every((item) => typeof item === "string");

    const moveItem = (idx: number, dir: -1 | 1) => {
      const target = idx + dir;
      if (target < 0 || target >= value.length) return;
      const copy = [...value];
      const temp = copy[idx];
      copy[idx] = copy[target];
      copy[target] = temp;
      onChange(copy);
    };

    const removeItem = (idx: number) => {
      onChange(value.filter((_, i) => i !== idx));
    };

    const addItem = () => {
      const template =
        value.length > 0 ? createEmptyClone(value[0]) : "";
      onChange([...value, template]);
    };

    return (
      <div className="space-y-3 rounded-xl border border-border-subtle bg-ivory/50 p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-navy">
            {label || humanizeKey(fieldKey || "")} ({value.length})
          </span>
          <button
            type="button"
            onClick={addItem}
            className="inline-flex items-center gap-1 rounded-md border border-navy/20 bg-surface px-2.5 py-1 text-xs font-semibold text-navy hover:border-gold hover:bg-navy hover:text-white transition-colors"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>Yeni Ekle</span>
          </button>
        </div>

        {isStringArray ? (
          <div className="space-y-2">
            {(value as string[]).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <input
                  type="text"
                  value={item}
                  onChange={(e) => {
                    const copy = [...value];
                    copy[idx] = e.target.value;
                    onChange(copy);
                  }}
                  className="block w-full rounded-lg border border-border-subtle bg-surface px-3 py-2 text-sm text-ink focus:border-gold focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => moveItem(idx, -1)}
                  disabled={idx === 0}
                  className="rounded-md border border-border-subtle bg-surface p-2 text-muted hover:text-navy disabled:opacity-30"
                  title="Yukarı taşı"
                >
                  <ArrowUp className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => moveItem(idx, 1)}
                  disabled={idx === value.length - 1}
                  className="rounded-md border border-border-subtle bg-surface p-2 text-muted hover:text-navy disabled:opacity-30"
                  title="Aşağı taşı"
                >
                  <ArrowDown className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => removeItem(idx)}
                  className="rounded-md border border-red-200 bg-surface p-2 text-red-600 hover:bg-red-50"
                  title="Sil"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {value.map((item, idx) => {
              const previewTitle =
                typeof item === "object" && item !== null
                  ? ((item as Record<string, unknown>).title as string) ||
                    ((item as Record<string, unknown>).question as string) ||
                    ((item as Record<string, unknown>).heading as string) ||
                    ((item as Record<string, unknown>).label as string) ||
                    ((item as Record<string, unknown>).name as string) ||
                    `Öğe #${idx + 1}`
                  : `Öğe #${idx + 1}`;

              return (
                <div
                  key={idx}
                  className="rounded-xl border border-border-subtle bg-surface p-4 shadow-2xs space-y-3"
                >
                  <div className="flex items-center justify-between gap-2 border-b border-border-subtle pb-2.5">
                    <span className="text-xs font-semibold text-navy truncate">
                      {idx + 1}. {previewTitle}
                    </span>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => moveItem(idx, -1)}
                        disabled={idx === 0}
                        className="rounded border border-border-subtle p-1 text-muted hover:text-navy disabled:opacity-30"
                        title="Yukarı"
                      >
                        <ArrowUp className="h-3.5 w-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => moveItem(idx, 1)}
                        disabled={idx === value.length - 1}
                        className="rounded border border-border-subtle p-1 text-muted hover:text-navy disabled:opacity-30"
                        title="Aşağı"
                      >
                        <ArrowDown className="h-3.5 w-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeItem(idx)}
                        className="rounded border border-red-200 p-1 text-red-600 hover:bg-red-50"
                        title="Sil"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                  <VisualObjectEditor
                    value={item}
                    onChange={(nextItem) => {
                      const copy = [...value];
                      copy[idx] = nextItem;
                      onChange(copy);
                    }}
                    searchQuery={searchQuery}
                    depth={depth + 1}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // Plain Object
  if (typeof value === "object" && value !== null) {
    const entries = Object.entries(value as Record<string, unknown>);
    return (
      <div
        className={
          depth === 0
            ? "space-y-6"
            : "space-y-4 rounded-xl border border-border-subtle/80 bg-ivory/35 p-4"
        }
      >
        {label && depth > 0 && (
          <h4 className="text-sm font-serif font-semibold text-navy border-b border-border-subtle pb-2">
            {label}
          </h4>
        )}
        {entries.map(([k, v]) => (
          <VisualObjectEditor
            key={k}
            fieldKey={k}
            label={humanizeKey(k)}
            value={v}
            onChange={(nextVal) =>
              onChange({
                ...(value as Record<string, unknown>),
                [k]: nextVal,
              })
            }
            searchQuery={searchQuery}
            depth={depth + 1}
          />
        ))}
      </div>
    );
  }

  return null;
}

export function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [storageMode, setStorageMode] = useState<string>("local");
  const [defaults, setDefaults] = useState<FullCmsState | null>(null);
  const [overrides, setOverrides] = useState<CmsOverrides>({});
  const [locale, setLocale] = useState<Locale>("de");
  const [activeSection, setActiveSection] = useState<AdminSectionId>("site");
  const [selectedService, setSelectedService] =
    useState<ServiceSlug>("restaurant-kitchen");
  const [searchQuery, setSearchQuery] = useState("");
  const [banner, setBanner] = useState<{
    type: "success" | "warning" | "error";
    text: string;
  } | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch("/api/admin/content", { cache: "no-store" })
      .then(async (res) => {
        if (res.status === 401) {
          router.refresh();
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (!mounted || !data) return;
        setDefaults(data.defaults as FullCmsState);
        setOverrides((data.overrides as CmsOverrides) || {});
        setStorageMode(data.storageMode || "local");
        setLoading(false);
      })
      .catch(() => {
        if (mounted) {
          setBanner({
            type: "error",
            text: "İçerik verileri yüklenemedi.",
          });
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [router]);

  const mergedState: FullCmsState | null = useMemo(() => {
    if (!defaults) return null;
    return {
      site: deepMergeLocal(defaults.site, overrides.site),
      dictionary: {
        de: deepMergeLocal(defaults.dictionary.de, overrides.dictionary?.de),
        tr: deepMergeLocal(defaults.dictionary.tr, overrides.dictionary?.tr),
        en: deepMergeLocal(defaults.dictionary.en, overrides.dictionary?.en),
      },
      servicesOverview: {
        de: deepMergeLocal(
          defaults.servicesOverview.de,
          overrides.servicesOverview?.de
        ),
        tr: deepMergeLocal(
          defaults.servicesOverview.tr,
          overrides.servicesOverview?.tr
        ),
        en: deepMergeLocal(
          defaults.servicesOverview.en,
          overrides.servicesOverview?.en
        ),
      },
      services: {
        de: deepMergeLocal(defaults.services.de, overrides.services?.de),
        tr: deepMergeLocal(defaults.services.tr, overrides.services?.tr),
        en: deepMergeLocal(defaults.services.en, overrides.services?.en),
      },
      pages: {
        de: deepMergeLocal(defaults.pages.de, overrides.pages?.de),
        tr: deepMergeLocal(defaults.pages.tr, overrides.pages?.tr),
        en: deepMergeLocal(defaults.pages.en, overrides.pages?.en),
      },
      legal: {
        de: deepMergeLocal(defaults.legal.de, overrides.legal?.de),
        tr: deepMergeLocal(defaults.legal.tr, overrides.legal?.tr),
        en: deepMergeLocal(defaults.legal.en, overrides.legal?.en),
      },
    };
  }, [defaults, overrides]);

  const handleSave = async () => {
    setSaving(true);
    setBanner(null);

    try {
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ overrides }),
      });

      const data = (await res.json()) as { status?: string; message?: string };
      if (res.ok) {
        setBanner({
          type: "success",
          text: data.message || "Değişiklikler başarıyla kaydedildi.",
        });
      } else if (res.status === 503) {
        setBanner({
          type: "warning",
          text:
            data.message ||
            "Canlı kayıt için Vercel ortam değişkenlerine GITHUB_CMS_TOKEN eklenmelidir.",
        });
      } else {
        setBanner({
          type: "error",
          text: data.message || "Kaydetme sırasında hata oluştu.",
        });
      }
    } catch {
      setBanner({
        type: "error",
        text: "Sunucu bağlantı hatası oluştu.",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleResetCurrentSection = () => {
    if (
      !window.confirm(
        "Bu bölümdeki tüm özel düzenlemeleri varsayılan orijinal metinlere sıfırlamak istediğinize emin misiniz?"
      )
    ) {
      return;
    }

    setOverrides((prev) => {
      const next: CmsOverrides = { ...prev };
      if (activeSection === "site") {
        delete next.site;
      } else if (activeSection === "nav-footer" || activeSection === "home") {
        if (next.dictionary?.[locale]) {
          const copy = { ...next.dictionary };
          delete copy[locale];
          next.dictionary = copy;
        }
      } else if (activeSection === "services-overview") {
        if (next.servicesOverview?.[locale]) {
          const copy = { ...next.servicesOverview };
          delete copy[locale];
          next.servicesOverview = copy;
        }
      } else if (activeSection === "service-detail") {
        if (next.services?.[locale]?.[selectedService]) {
          const locCopy = { ...next.services[locale] };
          delete locCopy[selectedService];
          next.services = { ...next.services, [locale]: locCopy };
        }
      } else if (activeSection === "legal") {
        if (next.legal?.[locale]) {
          const copy = { ...next.legal };
          delete copy[locale];
          next.legal = copy;
        }
      } else {
        if (next.pages?.[locale]) {
          const copy = { ...next.pages };
          delete copy[locale];
          next.pages = copy;
        }
      }
      return next;
    });

    setBanner({
      type: "warning",
      text: "Bölüm varsayılana döndürüldü. Kalıcı olması için sağ üstten 'Değişiklikleri Kaydet' butonuna basın.",
    });
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  };

  if (loading || !mergedState) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center text-sm font-medium text-navy">
        Yönetim paneli yükleniyor...
      </div>
    );
  }

  const sidebarItems: {
    id: AdminSectionId;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    { id: "site", label: "Genel & İletişim", icon: Settings },
    { id: "nav-footer", label: "Menü, SEO & Footer", icon: Globe },
    { id: "home", label: "Ana Sayfa Bölümleri", icon: Home },
    { id: "services-overview", label: "Hizmetler Genel Sayfa", icon: Layers },
    { id: "service-detail", label: "9 Hizmet Detay Sayfaları", icon: Layers },
    { id: "about", label: "Hakkımızda Sayfası", icon: FileText },
    { id: "network", label: "Uluslararası Ağ", icon: FileText },
    { id: "how-we-work", label: "Nasıl Çalışıyoruz", icon: FileText },
    { id: "faq", label: "SSS (FAQ) Yönetimi", icon: FileText },
    { id: "insights", label: "Insights / Blog", icon: FileText },
    { id: "contact", label: "İletişim & Form Metinleri", icon: FileText },
    { id: "legal", label: "Yasal Sayfalar (Künye/Gizlilik)", icon: Shield },
  ];

  const updateDictionarySlice = (patch: Partial<Dictionary>) => {
    setOverrides((prev) => ({
      ...prev,
      dictionary: {
        ...prev.dictionary,
        [locale]: {
          ...(mergedState.dictionary[locale] || {}),
          ...patch,
        },
      },
    }));
  };

  const updatePageSlice = <K extends keyof CorporatePagesContent>(
    key: K,
    val: CorporatePagesContent[K]
  ) => {
    setOverrides((prev) => ({
      ...prev,
      pages: {
        ...prev.pages,
        [locale]: {
          ...mergedState.pages[locale],
          [key]: val,
        },
      },
    }));
  };

  return (
    <div className="min-h-screen bg-ivory text-ink flex flex-col">
      {/* Top Sticky Admin Bar */}
      <header className="sticky top-0 z-40 border-b border-border-subtle bg-surface shadow-xs">
        <div className="mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <BrandLogo variant="compact" theme="dark" />
            <span className="rounded-md bg-navy px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-light">
              CMS Admin
            </span>
            <span
              className={`hidden md:inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${
                storageMode === "github"
                  ? "border-emerald-300 bg-emerald-50 text-emerald-900"
                  : storageMode === "vercel_unconfigured"
                    ? "border-amber-400 bg-amber-50 text-amber-900"
                    : "border-border-subtle bg-ivory text-navy"
              }`}
            >
              {storageMode === "github"
                ? "GitHub Otomatik Kayıt Aktif"
                : storageMode === "vercel_unconfigured"
                  ? "GITHUB_CMS_TOKEN Bekleniyor"
                  : "Yerel Kayıt Modu"}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Language Selector */}
            {activeSection !== "site" && (
              <div className="inline-flex items-center rounded-lg border border-border-subtle bg-ivory p-1 text-xs font-semibold">
                {(["de", "tr", "en"] as const).map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => setLocale(loc)}
                    className={`rounded-md px-3 py-1 transition-colors ${
                      locale === loc
                        ? "bg-navy text-white"
                        : "text-muted hover:text-navy"
                    }`}
                  >
                    {loc.toUpperCase()}
                  </button>
                ))}
              </div>
            )}

            {/* Search */}
            <div className="relative hidden sm:block">
              <Search className="pointer-events-none absolute left-3 top-2.5 h-3.5 w-3.5 text-muted" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Metin ara..."
                className="w-44 rounded-lg border border-border-subtle bg-ivory pl-8 pr-3 py-1.5 text-xs text-ink focus:border-gold focus:bg-surface focus:outline-none"
              />
            </div>

            <a
              href={`/${locale}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border-subtle bg-surface px-3 py-1.5 text-xs font-semibold text-navy hover:border-gold"
            >
              <span>Siteyi Gör</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <button
              type="button"
              onClick={handleResetCurrentSection}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border-subtle bg-surface px-3 py-1.5 text-xs font-semibold text-muted hover:border-amber-400 hover:text-navy"
              title="Bu bölümü varsayılana döndür"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span className="hidden xl:inline">Sıfırla</span>
            </button>

            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="inline-flex items-center gap-1.5 rounded-lg bg-navy px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-navy-mid disabled:opacity-60"
            >
              <Save className="h-3.5 w-3.5 text-gold-light" />
              <span>{saving ? "Kaydediliyor..." : "Değişiklikleri Kaydet"}</span>
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1 rounded-lg border border-border-subtle bg-surface px-2.5 py-2 text-xs font-semibold text-muted hover:text-red-700"
              title="Çıkış Yap"
            >
              <LogOut className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Banner Notification */}
      {banner && (
        <div className="mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6">
          <div
            className={`flex items-start gap-3 rounded-xl border p-4 text-xs sm:text-sm ${
              banner.type === "success"
                ? "border-emerald-300 bg-emerald-50 text-emerald-950"
                : banner.type === "warning"
                  ? "border-amber-400 bg-amber-50 text-amber-950"
                  : "border-red-300 bg-red-50 text-red-950"
            }`}
          >
            {banner.type === "success" ? (
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
            ) : (
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
            )}
            <span>{banner.text}</span>
          </div>
        </div>
      )}

      {/* Main Content Layout */}
      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-12">
        {/* Sidebar */}
        <aside className="lg:col-span-3 space-y-1.5">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const active = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveSection(item.id)}
                className={`flex w-full items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-left text-xs font-semibold transition-all ${
                  active
                    ? "border-navy bg-navy text-white shadow-xs"
                    : "border-border-subtle bg-surface text-navy hover:border-gold"
                }`}
              >
                <Icon
                  className={`h-4 w-4 shrink-0 ${
                    active ? "text-gold-light" : "text-gold-dark"
                  }`}
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </aside>

        {/* Visual Form Workspace */}
        <main className="lg:col-span-9">
          <div className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8 shadow-xs space-y-6">
            {activeSection === "site" && (
              <>
                <div className="border-b border-border-subtle pb-4">
                  <h1 className="font-serif text-2xl font-semibold text-navy">
                    Genel Marka, İletişim & Yasal Kimlik Bilgileri
                  </h1>
                  <p className="mt-1 text-xs text-muted">
                    Buradaki telefon, e-posta, adres, WhatsApp ve Telegram bilgileri tüm dillerdeki Header, Footer, İletişim ve Künye sayfalarında ortak kullanılır.
                  </p>
                </div>
                <VisualObjectEditor
                  value={mergedState.site}
                  onChange={(next) =>
                    setOverrides((prev) => ({
                      ...prev,
                      site: next as SiteSettings,
                    }))
                  }
                  searchQuery={searchQuery}
                />
              </>
            )}

            {activeSection === "nav-footer" && (
              <>
                <div className="border-b border-border-subtle pb-4">
                  <h1 className="font-serif text-2xl font-semibold text-navy">
                    Menü, Ana SEO & Footer ({locale.toUpperCase()})
                  </h1>
                  <p className="mt-1 text-xs text-muted">
                    Seçili dil ({locale.toUpperCase()}) için üst navigasyon butonları, ana sayfa SEO ayarları ve dil bazlı Footer bağlantıları.
                  </p>
                </div>
                <VisualObjectEditor
                  label="Ana SEO Bilgileri"
                  value={mergedState.dictionary[locale].meta}
                  onChange={(next) =>
                    updateDictionarySlice({
                      meta: next as Dictionary["meta"],
                    })
                  }
                  searchQuery={searchQuery}
                  depth={1}
                />
                <VisualObjectEditor
                  label="Üst Menü (Header) Etiketleri"
                  value={mergedState.dictionary[locale].nav}
                  onChange={(next) =>
                    updateDictionarySlice({
                      nav: next as Dictionary["nav"],
                    })
                  }
                  searchQuery={searchQuery}
                  depth={1}
                />
                <VisualObjectEditor
                  label="Alt Bilgi (Footer) & Yasal Linkler"
                  value={mergedState.dictionary[locale].footer}
                  onChange={(next) =>
                    updateDictionarySlice({
                      footer: next as Dictionary["footer"],
                    })
                  }
                  searchQuery={searchQuery}
                  depth={1}
                />
              </>
            )}

            {activeSection === "home" && (
              <>
                <div className="border-b border-border-subtle pb-4">
                  <h1 className="font-serif text-2xl font-semibold text-navy">
                    Ana Sayfa Bölümleri ({locale.toUpperCase()})
                  </h1>
                  <p className="mt-1 text-xs text-muted">
                    Hero, 9 departman vitrin kartı, Neden Biz, 4 adımlı çalışma modeli, Restoran vitrini ve Talep çağrısı alanları.
                  </p>
                </div>
                <VisualObjectEditor
                  label="1. Hero (Üst Karşılama) Bölümü"
                  value={mergedState.dictionary[locale].hero}
                  onChange={(next) =>
                    updateDictionarySlice({
                      hero: next as Dictionary["hero"],
                    })
                  }
                  searchQuery={searchQuery}
                  depth={1}
                />
                <VisualObjectEditor
                  label="2. Dokuz Hizmet Departmanı Kartları"
                  value={mergedState.dictionary[locale].departmentsSection}
                  onChange={(next) =>
                    updateDictionarySlice({
                      departmentsSection:
                        next as Dictionary["departmentsSection"],
                    })
                  }
                  searchQuery={searchQuery}
                  depth={1}
                />
                <VisualObjectEditor
                  label="3. Neden Kalkan Partner Bölümü"
                  value={mergedState.dictionary[locale].whySection}
                  onChange={(next) =>
                    updateDictionarySlice({
                      whySection: next as Dictionary["whySection"],
                    })
                  }
                  searchQuery={searchQuery}
                  depth={1}
                />
                <VisualObjectEditor
                  label="4. Nasıl Çalışıyoruz (4 Adım)"
                  value={mergedState.dictionary[locale].howWeWork}
                  onChange={(next) =>
                    updateDictionarySlice({
                      howWeWork: next as Dictionary["howWeWork"],
                    })
                  }
                  searchQuery={searchQuery}
                  depth={1}
                />
                <VisualObjectEditor
                  label="5. Uluslararası Konumlandırma"
                  value={mergedState.dictionary[locale].internationalSection}
                  onChange={(next) =>
                    updateDictionarySlice({
                      internationalSection:
                        next as Dictionary["internationalSection"],
                    })
                  }
                  searchQuery={searchQuery}
                  depth={1}
                />
                <VisualObjectEditor
                  label="6. Restaurant & Kitchen Solutions Özel Vitrin"
                  value={mergedState.dictionary[locale].restaurantSpotlight}
                  onChange={(next) =>
                    updateDictionarySlice({
                      restaurantSpotlight:
                        next as Dictionary["restaurantSpotlight"],
                    })
                  }
                  searchQuery={searchQuery}
                  depth={1}
                />
                <VisualObjectEditor
                  label="7. Alt Talep Çağrısı (CTA) Bölümü"
                  value={mergedState.dictionary[locale].contactCta}
                  onChange={(next) =>
                    updateDictionarySlice({
                      contactCta: next as Dictionary["contactCta"],
                    })
                  }
                  searchQuery={searchQuery}
                  depth={1}
                />
              </>
            )}

            {activeSection === "services-overview" && (
              <>
                <div className="border-b border-border-subtle pb-4">
                  <h1 className="font-serif text-2xl font-semibold text-navy">
                    Hizmetler Genel Bakış Sayfası ({locale.toUpperCase()})
                  </h1>
                </div>
                <VisualObjectEditor
                  value={mergedState.servicesOverview[locale]}
                  onChange={(next) =>
                    setOverrides((prev) => ({
                      ...prev,
                      servicesOverview: {
                        ...prev.servicesOverview,
                        [locale]: next as ServicesOverviewContent,
                      },
                    }))
                  }
                  searchQuery={searchQuery}
                />
              </>
            )}

            {activeSection === "service-detail" && (
              <>
                <div className="border-b border-border-subtle pb-4 space-y-3">
                  <h1 className="font-serif text-2xl font-semibold text-navy">
                    Hizmet Departmanı Detay Sayfası ({locale.toUpperCase()})
                  </h1>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_SLUGS.map((slug) => (
                      <button
                        key={slug}
                        type="button"
                        onClick={() => setSelectedService(slug)}
                        className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
                          selectedService === slug
                            ? "border-navy bg-navy text-white"
                            : "border-border-subtle bg-ivory text-navy hover:border-gold"
                        }`}
                      >
                        {mergedState.services[locale][slug].title}
                      </button>
                    ))}
                  </div>
                </div>
                <VisualObjectEditor
                  value={mergedState.services[locale][selectedService]}
                  onChange={(next) =>
                    setOverrides((prev) => ({
                      ...prev,
                      services: {
                        ...prev.services,
                        [locale]: {
                          ...(prev.services?.[locale] || {}),
                          [selectedService]: next as ServiceDetailContent,
                        },
                      },
                    }))
                  }
                  searchQuery={searchQuery}
                />
              </>
            )}

            {activeSection === "about" && (
              <>
                <h1 className="font-serif text-2xl font-semibold text-navy border-b border-border-subtle pb-4">
                  Hakkımızda Sayfası ({locale.toUpperCase()})
                </h1>
                <VisualObjectEditor
                  value={mergedState.pages[locale].about}
                  onChange={(next) =>
                    updatePageSlice(
                      "about",
                      next as CorporatePagesContent["about"]
                    )
                  }
                  searchQuery={searchQuery}
                />
              </>
            )}

            {activeSection === "network" && (
              <>
                <h1 className="font-serif text-2xl font-semibold text-navy border-b border-border-subtle pb-4">
                  Uluslararası Ağ Sayfası ({locale.toUpperCase()})
                </h1>
                <VisualObjectEditor
                  value={mergedState.pages[locale].network}
                  onChange={(next) =>
                    updatePageSlice(
                      "network",
                      next as CorporatePagesContent["network"]
                    )
                  }
                  searchQuery={searchQuery}
                />
              </>
            )}

            {activeSection === "how-we-work" && (
              <>
                <h1 className="font-serif text-2xl font-semibold text-navy border-b border-border-subtle pb-4">
                  Nasıl Çalışıyoruz Sayfası ({locale.toUpperCase()})
                </h1>
                <VisualObjectEditor
                  value={mergedState.pages[locale].howWeWork}
                  onChange={(next) =>
                    updatePageSlice(
                      "howWeWork",
                      next as CorporatePagesContent["howWeWork"]
                    )
                  }
                  searchQuery={searchQuery}
                />
              </>
            )}

            {activeSection === "faq" && (
              <>
                <h1 className="font-serif text-2xl font-semibold text-navy border-b border-border-subtle pb-4">
                  Sık Sorulan Sorular – SSS ({locale.toUpperCase()})
                </h1>
                <VisualObjectEditor
                  value={mergedState.pages[locale].faq}
                  onChange={(next) =>
                    updatePageSlice("faq", next as CorporatePagesContent["faq"])
                  }
                  searchQuery={searchQuery}
                />
              </>
            )}

            {activeSection === "insights" && (
              <>
                <h1 className="font-serif text-2xl font-semibold text-navy border-b border-border-subtle pb-4">
                  Insights & Blog Makaleleri ({locale.toUpperCase()})
                </h1>
                <VisualObjectEditor
                  value={mergedState.pages[locale].insights}
                  onChange={(next) =>
                    updatePageSlice(
                      "insights",
                      next as CorporatePagesContent["insights"]
                    )
                  }
                  searchQuery={searchQuery}
                />
              </>
            )}

            {activeSection === "contact" && (
              <>
                <h1 className="font-serif text-2xl font-semibold text-navy border-b border-border-subtle pb-4">
                  İletişim Sayfası & Form Metinleri ({locale.toUpperCase()})
                </h1>
                <VisualObjectEditor
                  value={mergedState.pages[locale].contact}
                  onChange={(next) =>
                    updatePageSlice(
                      "contact",
                      next as CorporatePagesContent["contact"]
                    )
                  }
                  searchQuery={searchQuery}
                />
              </>
            )}

            {activeSection === "legal" && (
              <>
                <div className="border-b border-border-subtle pb-4">
                  <h1 className="font-serif text-2xl font-semibold text-navy">
                    Yasal Sayfalar ({locale.toUpperCase()})
                  </h1>
                  <p className="mt-1 text-xs text-muted">
                    DE: /de/impressum · /de/datenschutzerklaerung · /de/agb | TR: /tr/kuenye · /tr/gizlilik-ve-kisisel-verilerin-korunmasi-beyani · /tr/hizmet-sartlari-ve-cayma-haklari | EN: /en/imprint · /en/privacy-policy · /en/terms-and-withdrawal
                  </p>
                </div>
                <VisualObjectEditor
                  label="1. Künye / Impressum / Imprint"
                  value={mergedState.legal[locale].imprint}
                  onChange={(next) =>
                    setOverrides((prev) => ({
                      ...prev,
                      legal: {
                        ...prev.legal,
                        [locale]: {
                          ...mergedState.legal[locale],
                          imprint:
                            next as LocaleLegalDictionary["imprint"],
                        },
                      },
                    }))
                  }
                  searchQuery={searchQuery}
                  depth={1}
                />
                <VisualObjectEditor
                  label="2. Gizlilik Beyanı / Datenschutzerklärung / Privacy Policy"
                  value={mergedState.legal[locale].privacy}
                  onChange={(next) =>
                    setOverrides((prev) => ({
                      ...prev,
                      legal: {
                        ...prev.legal,
                        [locale]: {
                          ...mergedState.legal[locale],
                          privacy:
                            next as LocaleLegalDictionary["privacy"],
                        },
                      },
                    }))
                  }
                  searchQuery={searchQuery}
                  depth={1}
                />
                <VisualObjectEditor
                  label="3. Hizmet Şartları & Cayma / AGB / Terms & Withdrawal"
                  value={mergedState.legal[locale].terms}
                  onChange={(next) =>
                    setOverrides((prev) => ({
                      ...prev,
                      legal: {
                        ...prev.legal,
                        [locale]: {
                          ...mergedState.legal[locale],
                          terms: next as LocaleLegalDictionary["terms"],
                        },
                      },
                    }))
                  }
                  searchQuery={searchQuery}
                  depth={1}
                />
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
