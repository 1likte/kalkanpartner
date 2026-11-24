import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle } from "lucide-react";
import { isValidLocale } from "@/i18n/config";
import { siteConfig } from "@/config/site";

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
        ? "Impressum (Yasal Künye – TODO) | KALKAN PARTNER"
        : "Impressum (TODO vor Veröffentlichung) | KALKAN PARTNER",
    robots: { index: false, follow: true },
    alternates: {
      canonical: `/${locale}/impressum`,
      languages: {
        "de-DE": "/de/impressum",
        "tr-TR": "/tr/impressum",
      },
    },
  };
}

export default async function ImpressumPage({
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
            TODO · {isTr ? "YAYIN ÖNCESİ ZORUNLU" : "VOR LIVEGANG AUSZUFÜLLEN"}
          </span>
          <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
            {isTr ? "Impressum (Yasal Künye)" : "Impressum"}
          </h1>
          <p className="mt-3 text-sm text-white/75">
            {isTr
              ? "Alman § 5 DDG (eski § 5 TMG) uyarınca zorunlu yasal künye taslağı."
              : "Pflichtangaben gemäß § 5 DDG (vormals § 5 TMG) – Entwurf bis zur Bereitstellung der finalen Unternehmensdaten."}
          </p>
        </div>
      </section>

      <section className="bg-ivory py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Mandatory Warning Banner */}
          <div className="flex items-start gap-3.5 rounded-xl border border-amber-400/70 bg-amber-50 p-5 text-amber-950">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
            <div className="text-sm leading-relaxed">
              <p className="font-semibold">
                {isTr
                  ? "Uyarı: Yasal bilgiler henüz tamamlanmadı (TODO)"
                  : "Hinweis: Rechtliche Pflichtangaben noch unvollständig (TODO)"}
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                {isTr
                  ? "Gerçek şirket adı, yasal adres, iletişim bilgileri, ticaret sicili ve vergi/USt-IdNr. bilgileri sağlanıp hukuken onaylanmadan bu web sitesi canlıya alınmamalıdır."
                  : "Diese Website darf erst als rechtlich vollständig veröffentlicht werden, nachdem alle tatsächlichen Unternehmens-, Register-, Kontakt- und Steuerangaben eingetragen und juristisch geprüft wurden."}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border-subtle bg-surface p-7 sm:p-10 space-y-8 text-sm leading-relaxed text-ink">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy">
                {isTr ? "Şirket Bilgileri (§ 5 DDG)" : "Angaben gemäß § 5 DDG"}
              </h2>
              <div className="mt-4 space-y-1.5 text-muted">
                <p className="font-semibold text-navy">{siteConfig.brandName}</p>
                <p>{siteConfig.legal.companyLegalName}</p>
                <p>{siteConfig.legal.streetAddress}</p>
                <p>{siteConfig.legal.postalCodeCity}</p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy">
                {isTr ? "Yetkili Temsilci" : "Vertreten durch"}
              </h2>
              <p className="mt-2 text-muted">{siteConfig.legal.managingDirector}</p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy">
                {isTr ? "İletişim" : "Kontakt"}
              </h2>
              <div className="mt-2 space-y-1 text-muted">
                <p>E-Mail: {siteConfig.legal.email}</p>
                <p>{isTr ? "Telefon" : "Telefon"}: {siteConfig.legal.phone}</p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy">
                {isTr
                  ? "Ticaret Sicili & KDV Numarası"
                  : "Registereintrag & Umsatzsteuer-ID"}
              </h2>
              <div className="mt-2 space-y-1 text-muted">
                <p>{siteConfig.legal.commercialRegister}</p>
                <p>{siteConfig.legal.vatId}</p>
                <p>{siteConfig.legal.supervisoryAuthority}</p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy">
                {isTr
                  ? "Hizmet Kapsamı Hakkında Açıklama"
                  : "Hinweis zum Tätigkeitsbereich"}
              </h2>
              <p className="mt-2 text-muted">
                {isTr
                  ? "KALKAN PARTNER organizasyon, iletişim ve süreç koordinasyonu hizmetleri sunar. Hukuki danışmanlık (RDG), vergi danışmanlığı, tıbbi teşhis/tedavi, personel kiralama (Arbeitnehmerüberlassung) veya izin gerektiren emlak aracılığı (§ 34c GewO) sunulmaz."
                  : "KALKAN PARTNER erbringt organisatorische, kommunikative und koordinierende Dienstleistungen. Rechtsberatung (RDG), Steuerberatung, medizinische Behandlungen, Arbeitnehmerüberlassung oder erlaubnispflichtige Immobilienmaklertätigkeiten (§ 34c GewO) werden nicht erbracht."}
              </p>
            </div>

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
