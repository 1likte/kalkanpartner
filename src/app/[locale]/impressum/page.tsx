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
        ? "Impressum (Yasal Künye) | KALKAN PARTNER"
        : "Impressum | KALKAN PARTNER",
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
            § 5 DDG ·{" "}
            {isTr ? "HUKUKİ TÜR & ONAY BEKLİYOR" : "ENTWURF VOR LIVEGANG"}
          </span>
          <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
            {isTr ? "Impressum (Yasal Künye)" : "Impressum"}
          </h1>
          <p className="mt-3 text-sm text-white/75">
            {isTr
              ? "Alman § 5 DDG kapsamında KALKAN PARTNER için uyarlanmış yasal künye."
              : "Angaben gemäß § 5 DDG für KALKAN PARTNER."}
          </p>
        </div>
      </section>

      <section className="bg-ivory py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Mandatory Pre-Launch Legal Review Banner */}
          <div className="flex items-start gap-3.5 rounded-xl border border-amber-400/70 bg-amber-50 p-5 text-amber-950">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
            <div className="text-sm leading-relaxed">
              <p className="font-semibold">
                {isTr
                  ? "Canlı Yayın Öncesi Not (TODO)"
                  : "Hinweis vor Veröffentlichung (TODO)"}
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                {isTr
                  ? "Şirketin hukuki türü (Einzelunternehmen / UG / GmbH), varsa ticaret sicili ve BZSt belgesinden doğrulanmış USt-IdNr. / W-IdNr. bilgileri kesinleştikten sonra bu uyarı kaldırılmalıdır."
                  : "Die endgültige Rechtsform (Einzelunternehmen / UG / GmbH) sowie – sofern vorhanden und anhand des BZSt-Bescheids geprüft – Handelsregister und USt-IdNr. / W-IdNr. sind vor dem Livegang abschließend zu ergänzen."}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border-subtle bg-surface p-7 sm:p-10 space-y-8 text-sm leading-relaxed text-ink">
            {/* § 5 DDG */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy">
                {isTr ? "§ 5 DDG Kapsamında Bilgiler" : "Angaben gemäß § 5 DDG"}
              </h2>
              <div className="mt-4 space-y-1 text-muted">
                <p className="font-semibold text-navy">{siteConfig.brandName}</p>
                <p>
                  {isTr ? "İşletme Sahibi (Inhaberin): " : "Inhaberin: "}
                  {siteConfig.legal.owner}
                </p>
                <p className="text-amber-800 font-medium">
                  {siteConfig.legal.companyLegalName}
                </p>
                <p>{siteConfig.legal.streetAddress}</p>
                <p>{siteConfig.legal.postalCodeCity}</p>
                <p>{siteConfig.legal.country}</p>
              </div>
            </div>

            {/* Kontakt */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy">
                {isTr ? "İletişim" : "Kontakt"}
              </h2>
              <div className="mt-3 space-y-1.5 text-muted">
                <p>
                  Telefon &amp; WhatsApp:{" "}
                  <a
                    href={`tel:${siteConfig.legal.phoneHref}`}
                    className="text-navy hover:text-gold-dark underline-offset-4 hover:underline"
                  >
                    {siteConfig.legal.phone}
                  </a>
                </p>
                <p>
                  E-Mail:{" "}
                  <a
                    href={`mailto:${siteConfig.legal.email}`}
                    className="text-navy hover:text-gold-dark underline-offset-4 hover:underline"
                  >
                    {siteConfig.legal.email}
                  </a>
                </p>
                <p>
                  Website:{" "}
                  <a
                    href={siteConfig.siteUrl}
                    className="text-navy hover:text-gold-dark underline-offset-4 hover:underline"
                  >
                    https://{siteConfig.domain}
                  </a>
                </p>
              </div>
            </div>

            {/* Tätigkeitsbereich */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy">
                {isTr ? "Faaliyet Alanı (Tätigkeitsbereich)" : "Tätigkeitsbereich"}
              </h2>
              {isTr ? (
                <div className="mt-3 space-y-3 text-muted">
                  <p>
                    KALKAN PARTNER, uluslararası odaklı bir hizmet ve koordinasyon
                    şirketidir.
                  </p>
                  <p>
                    Hizmet yelpazesi özellikle uluslararası personel koordinasyonu,
                    relocation ve organizasyon hizmetleri, resmî kurum ve belge
                    koordinasyonu, çeviri ve iletişim hizmetleri, uluslararası iş
                    girişimlerine destek, dijital ve yapay zekâ destekli çözümler,
                    eğitim ve aile hizmetleri ile restoran ve mutfak çözümlerini
                    kapsar.
                  </p>
                </div>
              ) : (
                <div className="mt-3 space-y-3 text-muted">
                  <p>
                    KALKAN PARTNER ist ein international ausgerichtetes
                    Dienstleistungs- und Koordinationsunternehmen.
                  </p>
                  <p>
                    Das Leistungsspektrum umfasst insbesondere internationale
                    Personalvermittlung, Relocation- und Organisationsleistungen,
                    Behörden- und Dokumentenkoordination, Übersetzungs- und
                    Kommunikationsservices, Unterstützung bei internationalen
                    Geschäftsvorhaben, digitale und KI-gestützte Lösungen,
                    Bildungs- und Familienservices sowie Restaurant- und
                    Küchenlösungen.
                  </p>
                </div>
              )}
            </div>

            {/* Hinweis zum Leistungsumfang */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy">
                {isTr
                  ? "Hizmet Kapsamı Hakkında Bilgilendirme (Hinweis zum Leistungsumfang)"
                  : "Hinweis zum Leistungsumfang"}
              </h2>
              {isTr ? (
                <div className="mt-3 space-y-3 text-muted">
                  <p>
                    Sunulan hizmetler, verilen göreve bağlı olarak organizasyonel,
                    iletişimsel ve koordinasyon faaliyetlerini kapsar.
                  </p>
                  <p>
                    KALKAN PARTNER bağımsız hukuki, vergisel veya tıbbi danışmanlık
                    sunmaz. Özel yasal izin veya mesleki yetki gerektiren
                    faaliyetler yalnızca hukuken izin verilen çerçevede ve
                    gerektiğinde ilgili alanda yetkili uzman kişiler veya
                    şirketlerle iş birliği içinde yürütülür.
                  </p>
                </div>
              ) : (
                <div className="mt-3 space-y-3 text-muted">
                  <p>
                    Die angebotenen Leistungen umfassen je nach Auftrag
                    organisatorische, kommunikative und koordinierende
                    Tätigkeiten.
                  </p>
                  <p>
                    KALKAN PARTNER erbringt keine eigenständige Rechts-, Steuer-
                    oder medizinische Beratung. Tätigkeiten, für die eine besondere
                    gesetzliche Zulassung oder berufliche Qualifikation
                    erforderlich ist, werden nur im rechtlich zulässigen Rahmen
                    und gegebenenfalls in Zusammenarbeit mit entsprechend befugten
                    Fachpersonen oder Unternehmen durchgeführt.
                  </p>
                </div>
              )}
            </div>

            {/* Pending Optional/Conditional Registry Items */}
            <div className="rounded-xl border border-border-subtle bg-ivory p-5 space-y-2 text-xs text-muted">
              <p className="font-semibold uppercase tracking-[0.14em] text-navy">
                {isTr
                  ? "Kesinleşince Eklenecek Koşullu Alanlar (TODO)"
                  : "Bedingte Pflichtangaben (TODO nach Klärung)"}
              </p>
              <p>• {siteConfig.legal.commercialRegister}</p>
              <p>• {siteConfig.legal.vatId}</p>
              <p>• {siteConfig.legal.supervisoryAuthority}</p>
            </div>

            <div className="border-t border-border-subtle pt-6 flex items-center justify-between">
              <Link
                href={`/${locale}/contact`}
                className="text-sm font-semibold text-navy hover:text-gold-dark transition-colors"
              >
                {isTr ? "← İletişim sayfasına dön" : "← Zur Kontaktseite"}
              </Link>
              <Link
                href={`/${locale}/datenschutz`}
                className="text-sm font-semibold text-navy hover:text-gold-dark transition-colors"
              >
                {isTr ? "Gizlilik Politikası →" : "Datenschutzerklärung →"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
