import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, Lock } from "lucide-react";
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
        ? "Gizlilik Politikası (Datenschutz – TODO) | KALKAN PARTNER"
        : "Datenschutzerklärung (TODO vor Veröffentlichung) | KALKAN PARTNER",
    robots: { index: false, follow: true },
    alternates: {
      canonical: `/${locale}/datenschutz`,
      languages: {
        "de-DE": "/de/datenschutz",
        "tr-TR": "/tr/datenschutz",
      },
    },
  };
}

export default async function DatenschutzPage({
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
            DSGVO · TODO
          </span>
          <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
            {isTr
              ? "Gizlilik Politikası (Datenschutzerklärung)"
              : "Datenschutzerklärung"}
          </h1>
          <p className="mt-3 text-sm text-white/75">
            {isTr
              ? "DSGVO uyumlu gizlilik ve çerez bilgilendirme taslağı (canlı yayın öncesi hukuki inceleme gerekir)."
              : "DSGVO-konformer Entwurf einschließlich Cookie-Hinweis (juristische Endprüfung vor Livegang erforderlich)."}
          </p>
        </div>
      </section>

      <section className="bg-ivory py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-start gap-3.5 rounded-xl border border-amber-400/70 bg-amber-50 p-5 text-amber-950">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
            <p className="text-xs sm:text-sm leading-relaxed">
              {isTr
                ? "TODO: Veri sorumlusu bilgileri, hosting sağlayıcısı (ör. Vercel) ve aktif edilecek e-posta sağlayıcısı (ör. Resend/SMTP) için AVV/DPA bilgileri canlı yayından önce güncellenmeli ve hukuken kontrol edilmelidir."
                : "TODO: Angaben zum Verantwortlichen, Hosting-Dienstleister (z. B. Vercel) sowie dem aktivierten E-Mail-Dienstleister (z. B. Resend/SMTP inkl. AVV) sind vor Veröffentlichung vollständig einzutragen und juristisch zu prüfen."}
            </p>
          </div>

          <div className="rounded-2xl border border-border-subtle bg-surface p-7 sm:p-10 space-y-8 text-sm leading-relaxed text-muted">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy">
                1. {isTr ? "Veri Sorumlusu" : "Verantwortliche Stelle"}
              </h2>
              <div className="mt-3 space-y-1">
                <p className="font-semibold text-navy">{siteConfig.brandName}</p>
                <p>{siteConfig.legal.companyLegalName}</p>
                <p>{siteConfig.legal.streetAddress}</p>
                <p>{siteConfig.legal.postalCodeCity}</p>
                <p>E-Mail: {siteConfig.legal.email}</p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy">
                2. {isTr ? "İletişim Formu ve Veri İşleme" : "Kontaktformular & Anfragen"}
              </h2>
              <p className="mt-2">
                {isTr
                  ? "İletişim formumuz üzerinden paylaştığınız bilgiler (müşteri tipi, departman, ülke, ad soyad, e-posta, opsiyonel telefon ve mesaj) yalnızca talebinizi değerlendirmek ve size dönüş yapmak amacıyla işlenir (Art. 6 Abs. 1 lit. b DSGVO)."
                  : "Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben (Kundentyp, Fachbereich, Land, Name, E-Mail, optionale Telefonnummer und Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage verarbeitet (Art. 6 Abs. 1 lit. b DSGVO)."}
              </p>
              <div className="mt-4 flex items-start gap-2.5 rounded-lg border border-gold/40 bg-ivory p-4 text-ink">
                <Lock className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                <p className="text-xs leading-relaxed">
                  {isTr
                    ? "Hassas Veri Koruması: Formlarımızda dosya yükleme alanı bulunmaz. Lütfen pasaport, kimlik veya sağlık verilerini standart web formları üzerinden iletmeyiniz."
                    : "Schutz sensibler Daten: Unsere Formulare enthalten bewusst keine Upload-Funktion. Bitte übermitteln Sie keine Ausweiskopien, Reisepässe oder Gesundheitsdaten über normale Kontaktformulare."}
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy">
                3. {isTr ? "Çerezler (Cookies) ve Analitik" : "Cookies & Webanalyse"}
              </h2>
              <p className="mt-2">
                {isTr
                  ? "Bu web sitesi şu anda zorunlu olmayan pazarlama veya üçüncü taraf izleme çerezleri yüklememektedir. İleride onay gerektiren bir analitik veya çerez hizmeti eklenirse, öncesinde DSGVO uyumlu bir çerez onay yöneticisi devreye alınacaktır."
                  : "Diese Website setzt derzeit keine einwilligungspflichtigen Marketing- oder Tracking-Cookies ein. Sollten künftig Analyse- oder Drittanbieterdienste eingebunden werden, erfolgt dies erst nach Implementierung eines DSGVO-konformen Einwilligungsbanners."}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy">
                4. {isTr ? "İlgili Kişi Hakları (DSGVO)" : "Ihre Rechte nach DSGVO"}
              </h2>
              <p className="mt-2">
                {isTr
                  ? "DSGVO kapsamında verilerinize erişim (Madde 15), düzeltme (Madde 16), silme (Madde 17), işlemeyi kısıtlama (Madde 18), veri taşınabilirliği (Madde 20) ve itiraz (Madde 21) haklarına sahipsiniz."
                  : "Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) sowie Widerspruch (Art. 21 DSGVO)."}
              </p>
            </div>

            <div className="border-t border-border-subtle pt-6">
              <Link
                href={`/${locale}/impressum`}
                className="text-sm font-semibold text-navy hover:text-gold-dark transition-colors"
              >
                {isTr ? "Impressum (Yasal Künye) →" : "Zum Impressum →"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
