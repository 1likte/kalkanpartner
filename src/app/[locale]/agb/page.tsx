import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle } from "lucide-react";
import { isValidLocale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  return {
    title:
      locale === "tr"
        ? "Genel Şartlar (AGB – Taslak / TODO) | KALKAN PARTNER"
        : "Allgemeine Geschäftsbedingungen (AGB – Entwurf / TODO) | KALKAN PARTNER",
    robots: { index: false, follow: true },
    alternates: {
      canonical: `/${locale}/agb`,
      languages: {
        "de-DE": "/de/agb",
        "tr-TR": "/tr/agb",
      },
    },
  };
}

export default async function AgbPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const isTr = locale === "tr";

  return (
    <div className="bg-surface">
      <section className="bg-navy-deep text-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex rounded bg-gold/20 px-2.5 py-1 text-xs font-semibold tracking-wider text-gold-light">
            TODO · {isTr ? "HUKUKİ İNCELEME BEKLİYOR" : "RECHTLICHE PRÜFUNG AUSSTEHEND"}
          </span>
          <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
            {isTr
              ? "Genel İşlem Şartları (AGB – Taslak)"
              : "Allgemeine Geschäftsbedingungen (AGB – Entwurf)"}
          </h1>
        </div>
      </section>

      <section className="bg-ivory py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-start gap-3.5 rounded-xl border border-amber-400/70 bg-amber-50 p-5 text-amber-950">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
            <p className="text-xs sm:text-sm leading-relaxed">
              {isTr
                ? "Bu sayfa, Almanya'da yetkili bir avukat tarafından hazırlanıp onaylanacak nihai AGB metni için ayrılmış taslak yer tutucudur. Canlı yayından önce kesin metinle değiştirilmelidir."
                : "Diese Seite ist ein Platzhalter-Entwurf. Die verbindlichen AGB für B2B- und B2C-Kunden werden vor der Veröffentlichung durch eine zugelassene Rechtsanwaltskanzlei erstellt und geprüft."}
            </p>
          </div>

          <div className="rounded-2xl border border-border-subtle bg-surface p-7 sm:p-10 space-y-6 text-sm leading-relaxed text-muted">
            <h2 className="font-serif text-2xl font-semibold text-navy">
              {isTr
                ? "Temel Hizmet Çerçevesi (Taslak Notu)"
                : "Grundsätze der Leistungsabgrenzung (Entwurfshinweis)"}
            </h2>
            <ul className="list-disc pl-5 space-y-2.5">
              <li>
                {isTr
                  ? "KALKAN PARTNER organizasyon, iletişim, araştırma ve süreç koordinasyonu hizmetleri sunar."
                  : "KALKAN PARTNER erbringt organisatorische, kommunikative, recherchierende und koordinierende Dienstleistungen."}
              </li>
              <li>
                {isTr
                  ? "Hukuki danışmanlık (RDG), vergi danışmanlığı, tıbbi teşhis/tedavi, personel kiralama (Arbeitnehmerüberlassung), izin gerektiren emlak aracılığı (§ 34c GewO) veya ruhsat gerektiren mimari/mühendislik projeleri hizmet kapsamı dışındadır."
                  : "Rechtsberatung (RDG), Steuerberatung, medizinische Leistungen, Arbeitnehmerüberlassung, erlaubnispflichtige Immobilienvermittlung (§ 34c GewO) sowie genehmigungspflichtige Architektur-/Fachplanungen sind ausgeschlossen."}
              </li>
              <li>
                {isTr
                  ? "TODO: Sözleşme kuruluşu, ücretlendirme, iptal/cayma (Widerrufsrecht – B2C), sorumluluk sınırları ve yetkili mahkeme maddeleri avukat incelemesiyle eklenecektir."
                  : "TODO: Vertragsschluss, Vergütung, Widerrufsbelehrung (B2C), Haftungsbeschränkungen und Gerichtsstand werden nach anwaltlicher Prüfung ergänzt."}
              </li>
            </ul>

            <div className="border-t border-border-subtle pt-6">
              <Link
                href={`/${locale}/contact`}
                className="text-sm font-semibold text-navy hover:text-gold-dark transition-colors"
              >
                {isTr ? "← İletişim sayfasına dön" : "← Zur Kontaktseite"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
