import type { Locale } from "@/i18n/config";
import type { LocaleLegalDictionary } from "./types";

export const legalContentDefault: Record<Locale, LocaleLegalDictionary> = {
  de: {
    labels: {
      ownerPrefix: "Inhaberin: ",
      phoneWhatsappLabel: "Telefon & WhatsApp",
      emailLabel: "E-Mail",
      websiteLabel: "Website",
      pendingRegistryTitle: "Bedingte Pflichtangaben (TODO nach Klärung)",
      backToContact: "← Zur Kontaktseite",
      toPrivacy: "Datenschutzerklärung →",
      toImprint: "Impressum →",
      toTerms: "AGB & Widerrufshinweise →",
    },
    imprint: {
      seoTitle: "Impressum | KALKAN PARTNER",
      seoDescription: "Angaben gemäß § 5 DDG für KALKAN PARTNER.",
      badge: "§ 5 DDG · ENTWURF VOR LIVEGANG",
      title: "Impressum",
      subtitle: "Angaben gemäß § 5 DDG für KALKAN PARTNER.",
      warningTitle: "Hinweis vor Veröffentlichung (TODO)",
      warningBody:
        "Die endgültige Rechtsform (Einzelunternehmen / UG / GmbH) sowie – sofern vorhanden und anhand des BZSt-Bescheids geprüft – Handelsregister und USt-IdNr. / W-IdNr. sind vor dem Livegang abschließend zu ergänzen.",
      showContactBlock: true,
      sections: [
        {
          heading: "Tätigkeitsbereich",
          paragraphs: [
            "KALKAN PARTNER ist ein international ausgerichtetes Dienstleistungs- und Koordinationsunternehmen.",
            "Das Leistungsspektrum umfasst insbesondere internationale Personalvermittlung, Relocation- und Organisationsleistungen, Behörden- und Dokumentenkoordination, Übersetzungs- und Kommunikationsservices, Unterstützung bei internationalen Geschäftsvorhaben, digitale und KI-gestützte Lösungen, Bildungs- und Familienservices sowie Restaurant- und Küchenlösungen.",
          ],
        },
        {
          heading: "Hinweis zum Leistungsumfang",
          paragraphs: [
            "Die angebotenen Leistungen umfassen je nach Auftrag organisatorische, kommunikative und koordinierende Tätigkeiten.",
            "KALKAN PARTNER erbringt keine eigenständige Rechts-, Steuer- oder medizinische Beratung. Tätigkeiten, für die eine besondere gesetzliche Zulassung oder berufliche Qualifikation erforderlich ist, werden nur im rechtlich zulässigen Rahmen und gegebenenfalls in Zusammenarbeit mit entsprechend befugten Fachpersonen oder Unternehmen durchgeführt.",
          ],
        },
        {
          heading: "Verbraucherstreitbeilegung (§ 36 VSBG)",
          paragraphs: [
            "Wir sind nicht verpflichtet und grundsätzlich nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
          ],
        },
      ],
    },
    privacy: {
      seoTitle: "Datenschutzerklärung | KALKAN PARTNER",
      seoDescription:
        "DSGVO-konforme Informationen zur Verarbeitung personenbezogener Daten bei KALKAN PARTNER.",
      badge: "DSGVO · ENTWURF VOR LIVEGANG",
      title: "Datenschutzerklärung",
      subtitle:
        "Informationen gemäß Art. 13, 14 DSGVO zur Verarbeitung personenbezogener Daten auf unserer Website.",
      warningTitle: "Juristische Endprüfung vor Livegang (TODO)",
      warningBody:
        "Angaben zu Auftragsverarbeitern (z. B. Vercel Hosting, aktivierter E-Mail-Dienstleister inkl. AVV) sowie endgültiger Rechtsform sind vor Produktivsetzung abschließend zu prüfen.",
      showContactBlock: true,
      sections: [
        {
          heading: "1. Hosting & Server-Logfiles",
          paragraphs: [
            "Beim Aufruf unserer Website werden durch den Hosting-Anbieter automatisch technisch erforderliche Verbindungsdaten (Server-Logfiles wie Browsertyp, Betriebssystem, Referrer-URL, Hostname/IP-Adresse und Uhrzeit der Serveranfrage) verarbeitet, um die Sicherheit und Stabilität des Betriebs zu gewährleisten (Art. 6 Abs. 1 lit. f DSGVO).",
          ],
        },
        {
          heading: "2. Kontaktformular, E-Mail, WhatsApp & Telegram",
          paragraphs: [
            "Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, verarbeiten wir Ihre Angaben (Kundentyp, Fachbereich, Land, Name, E-Mail, optionale Telefonnummer und Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen (Art. 6 Abs. 1 lit. b DSGVO).",
            "Bei freiwilliger Nutzung externer Messenger-Dienste (WhatsApp / Telegram) gelten ergänzend die Datenschutzbestimmungen des jeweiligen Diensteanbieters. Bitte übermitteln Sie weder über Webformulare noch über Messenger Reisepässe, Ausweiskopien oder medizinische Unterlagen.",
          ],
        },
        {
          heading: "3. Cookies & Analyse",
          paragraphs: [
            "Unsere Website verwendet im Standardbetrieb keine einwilligungspflichtigen Tracking- oder Marketing-Cookies. Für den geschützten Administrationsbereich wird ausschließlich ein technisch notwendiges Sitzungs-Cookie eingesetzt.",
          ],
        },
        {
          heading: "4. Ihre Betroffenenrechte nach DSGVO",
          paragraphs: [
            "Sie haben jederzeit das Recht auf unentgeltliche Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) sowie Widerspruch gegen die Verarbeitung (Art. 21 DSGVO). Zudem besteht ein Beschwerderecht bei der zuständigen Datenschutz-Aufsichtsbehörde (Art. 77 DSGVO).",
          ],
        },
      ],
    },
    terms: {
      seoTitle: "AGB & Widerrufshinweise | KALKAN PARTNER",
      seoDescription:
        "Allgemeine Geschäftsbedingungen und Verbraucherhinweise (Entwurf vor anwaltlicher Endprüfung).",
      badge: "TODO · RECHTLICHE PRÜFUNG AUSSTEHEND",
      title: "Allgemeine Geschäftsbedingungen (AGB) & Widerrufshinweise",
      subtitle:
        "Platzhalter-Struktur für Vertragsbedingungen gegenüber Unternehmern (B2B) und Verbrauchern (B2C).",
      warningTitle: "Entwurf – anwaltliche Prüfung erforderlich (TODO)",
      warningBody:
        "Verbindliche AGB und Widerrufsbelehrungen (für Verbraucherverträge im Fernabsatz gemäß §§ 312g, 355 BGB) sind vor Abschluss kostenpflichtiger Verträge juristisch freizugeben.",
      showContactBlock: false,
      sections: [
        {
          heading: "1. Leistungsgegenstand & Abgrenzung",
          paragraphs: [
            "KALKAN PARTNER erbringt organisatorische, kommunikative, recherchierende und koordinierende Dienstleistungen im vereinbarten Auftragsumfang.",
          ],
          bullets: [
            "Keine Rechtsberatung (RDG), Steuerberatung oder Wirtschaftsprüfung",
            "Keine medizinische Diagnose, Therapie oder Heilungsgarantie",
            "Keine Arbeitnehmerüberlassung und keine Immobilienmaklertätigkeit gemäß § 34c GewO",
            "Keine genehmigungspflichtigen Architektur-, Statik-, Elektro-, Gas-, Brandschutz- oder Lüftungsplanungen",
          ],
        },
        {
          heading: "2. Vertragsschluss, Vergütung & Widerrufsrecht (TODO)",
          paragraphs: [
            "Regelungen zu individuellem Angebot, Vergütung, Mitwirkungspflichten, Haftungsbegrenzung sowie die gesetzliche Widerrufsbelehrung für Verbraucher (B2C) werden vor Livegang nach juristischer Prüfung ergänzt.",
          ],
        },
      ],
    },
  },

  tr: {
    labels: {
      ownerPrefix: "İşletme Sahibi (Inhaberin): ",
      phoneWhatsappLabel: "Telefon & WhatsApp",
      emailLabel: "E-posta",
      websiteLabel: "Web Sitesi",
      pendingRegistryTitle: "Kesinleşince Eklenecek Koşullu Alanlar (TODO)",
      backToContact: "← İletişim sayfasına dön",
      toPrivacy: "Gizlilik ve Kişisel Verilerin Korunması Beyanı →",
      toImprint: "Künye (Impressum) →",
      toTerms: "Hizmet Şartları ve Cayma Hakları →",
    },
    imprint: {
      seoTitle: "Künye (Impressum) | KALKAN PARTNER",
      seoDescription: "Alman § 5 DDG uyarınca KALKAN PARTNER yasal künye bilgileri.",
      badge: "§ 5 DDG · YAYIN ÖNCESİ TASLAK",
      title: "Künye (Impressum)",
      subtitle:
        "Alman Dijital Hizmetler Yasası (§ 5 DDG) uyarınca yasal sağlayıcı künyesi.",
      warningTitle: "Canlı Yayın Öncesi Not (TODO)",
      warningBody:
        "Şirketin nihai hukuki türü (Einzelunternehmen / UG / GmbH) ile varsa ticaret sicili ve BZSt belgesinden doğrulanmış USt-IdNr. / W-IdNr. bilgileri canlı yayından önce tamamlanmalıdır.",
      showContactBlock: true,
      sections: [
        {
          heading: "Faaliyet Alanı (Tätigkeitsbereich)",
          paragraphs: [
            "KALKAN PARTNER, uluslararası odaklı bir hizmet ve koordinasyon şirketidir.",
            "Hizmet yelpazesi özellikle uluslararası personel koordinasyonu, relocation ve organizasyon hizmetleri, resmî kurum ve belge koordinasyonu, çeviri ve iletişim hizmetleri, uluslararası iş girişimlerine destek, dijital ve yapay zekâ destekli çözümler, eğitim ve aile hizmetleri ile restoran ve mutfak çözümlerini kapsar.",
          ],
        },
        {
          heading: "Hizmet Kapsamı Hakkında Bilgilendirme",
          paragraphs: [
            "Sunulan hizmetler, üstlenilen göreve bağlı olarak organizasyonel, iletişimsel ve koordinasyon faaliyetlerini kapsar.",
            "KALKAN PARTNER bağımsız hukuki, vergisel veya tıbbi danışmanlık sunmaz. Özel yasal izin veya mesleki yetki gerektiren faaliyetler yalnızca hukuken izin verilen çerçevede ve gerektiğinde ilgili alanda yetkili uzman kişiler veya şirketlerle iş birliği içinde yürütülür.",
          ],
        },
        {
          heading: "Tüketici Uyuşmazlık Çözümü (§ 36 VSBG)",
          paragraphs: [
            "Bir tüketici hakem/uzlaştırma kurulu nezdindeki uyuşmazlık çözüm süreçlerine katılma yükümlülüğümüz bulunmamaktadır ve ilke olarak katılmamaktayız.",
          ],
        },
      ],
    },
    privacy: {
      seoTitle: "Gizlilik ve Kişisel Verilerin Korunması Beyanı | KALKAN PARTNER",
      seoDescription:
        "KALKAN PARTNER web sitesi için DSGVO (GDPR) uyumlu gizlilik ve kişisel verilerin korunması beyanı.",
      badge: "DSGVO · YAYIN ÖNCESİ TASLAK",
      title: "Gizlilik ve Kişisel Verilerin Korunması Beyanı",
      subtitle:
        "Avrupa Genel Veri Koruma Tüzüğü (DSGVO Madde 13 ve 14) kapsamında kişisel verilerin işlenmesine ilişkin aydınlatma metni.",
      warningTitle: "Canlı Yayın Öncesi Hukuki Kontrol (TODO)",
      warningBody:
        "Barındırma sağlayıcısı (Vercel), aktif edilecek e-posta servisi (Resend/SMTP) veri işleme sözleşmeleri (AVV/DPA) ve nihai şirket türü canlı yayından önce hukuken kontrol edilmelidir.",
      showContactBlock: true,
      sections: [
        {
          heading: "1. Barındırma (Hosting) ve Sunucu Günlük Kayıtları",
          paragraphs: [
            "Web sitemizi ziyaret ettiğinizde teknik güvenlik ve kesintisiz erişim amacıyla tarayıcı türü, işletim sistemi, yönlendiren URL, sunucu erişim saati ve IP adresi gibi teknik bağlantı verileri otomatik olarak işlenir (DSGVO Madde 6/1-f).",
          ],
        },
        {
          heading: "2. İletişim Formu, E-posta, WhatsApp ve Telegram",
          paragraphs: [
            "İletişim formumuz veya e-posta üzerinden paylaştığınız bilgiler (müşteri tipi, departman, ülke, ad soyad, e-posta, opsiyonel telefon ve mesaj) yalnızca talebinizin değerlendirilmesi ve yanıtlanması amacıyla işlenir (DSGVO Madde 6/1-b).",
            "WhatsApp veya Telegram gibi harici mesajlaşma kanallarını kendi tercihinizle kullanmanız halinde ilgili platformların gizlilik koşulları da geçerlidir. Lütfen ne web formları ne de mesajlaşma uygulamaları üzerinden pasaport, kimlik veya tıbbi belge göndermeyiniz.",
          ],
        },
        {
          heading: "3. Çerezler (Cookies)",
          paragraphs: [
            "Web sitemizde varsayılan olarak açık rıza gerektiren reklam veya üçüncü taraf izleme çerezleri kullanılmamaktadır. Yalnızca yönetim paneli oturumu için teknik olarak zorunlu çerez kullanılır.",
          ],
        },
        {
          heading: "4. Veri Sahibi Olarak Haklarınız (DSGVO)",
          paragraphs: [
            "DSGVO kapsamında verilerinize erişim (Madde 15), düzeltme (Madde 16), silme (Madde 17), işlemeyi kısıtlama (Madde 18), veri taşınabilirliği (Madde 20), itiraz (Madde 21) ve yetkili veri koruma denetim makamına şikâyette bulunma (Madde 77) haklarına sahipsiniz.",
          ],
        },
      ],
    },
    terms: {
      seoTitle: "Hizmet Şartları ve Cayma Hakları | KALKAN PARTNER",
      seoDescription:
        "KALKAN PARTNER genel hizmet şartları ve tüketici cayma hakkı bilgilendirme taslağı.",
      badge: "TODO · HUKUKİ İNCELEME BEKLİYOR",
      title: "Hizmet Şartları ve Cayma Hakları",
      subtitle:
        "Kurumsal (B2B) ve bireysel tüketici (B2C) müşterilere yönelik genel işlem şartları ve cayma hakkı çerçeve taslağı.",
      warningTitle: "Taslak Metin – Hukuki Onay Gerekir (TODO)",
      warningBody:
        "Ücretli sözleşmeler kurulmadan önce nihai hizmet şartları (AGB) ve mesafeli tüketici sözleşmelerine ilişkin cayma hakkı metni (Widerrufsbelehrung) Almanya'da yetkili bir hukukçu tarafından onaylanmalıdır.",
      showContactBlock: false,
      sections: [
        {
          heading: "1. Hizmet Konusu ve Yasal Sınırlar",
          paragraphs: [
            "KALKAN PARTNER, taraflarca kararlaştırılan kapsamda organizasyon, iletişim, araştırma ve süreç koordinasyonu hizmetleri sunar.",
          ],
          bullets: [
            "Hukuki danışmanlık (RDG), vergi danışmanlığı veya mali müşavirlik sunulmaz",
            "Tıbbi teşhis, tedavi veya sağlık sonucu garantisi verilmez",
            "Personel kiralama (Arbeitnehmerüberlassung) ve § 34c GewO kapsamında emlak aracılığı yapılmaz",
            "Ruhsat gerektiren mimari, statik, elektrik, gaz, yangın ve havalandırma mühendislik projeleri üstlenilmez",
          ],
        },
        {
          heading: "2. Sözleşme Kuruluşu, Ücretlendirme ve Cayma Hakkı (TODO)",
          paragraphs: [
            "Teklif, ücretlendirme, müşteri iş birliği yükümlülükleri, sorumluluk sınırları ve Alman Medeni Kanunu (§§ 312g, 355 BGB) kapsamındaki 14 günlük tüketici cayma hakkı metni hukuki inceleme sonrasında eklenecektir.",
          ],
        },
      ],
    },
  },

  en: {
    labels: {
      ownerPrefix: "Proprietor (Inhaberin): ",
      phoneWhatsappLabel: "Phone & WhatsApp",
      emailLabel: "Email",
      websiteLabel: "Website",
      pendingRegistryTitle: "Conditional Statutory Disclosures (TODO Pending Confirmation)",
      backToContact: "← Back to Contact Page",
      toPrivacy: "Privacy Policy →",
      toImprint: "Imprint (Legal Notice) →",
      toTerms: "Terms & Withdrawal Rights →",
    },
    imprint: {
      seoTitle: "Imprint (Legal Notice) | KALKAN PARTNER",
      seoDescription: "Statutory legal disclosures pursuant to § 5 German Digital Services Act (DDG) for KALKAN PARTNER.",
      badge: "§ 5 DDG · PRE-LAUNCH DRAFT",
      title: "Imprint (Legal Notice)",
      subtitle:
        "Statutory provider identification pursuant to § 5 of the German Digital Services Act (DDG).",
      warningTitle: "Pre-Launch Legal Notice (TODO)",
      warningBody:
        "Final legal entity form (Einzelunternehmen / UG / GmbH) and – where applicable and verified against official BZSt notices – commercial register and VAT/W-IdNr. details must be finalized prior to live launch.",
      showContactBlock: true,
      sections: [
        {
          heading: "Scope of Business Activities",
          paragraphs: [
            "KALKAN PARTNER is an internationally oriented business service and coordination company.",
            "Our service portfolio covers international recruitment coordination, relocation and organizational support, administrative and document coordination, translation and communication services, cross-border business setup support, digital and AI-assisted solutions, family and education coordination, as well as restaurant and commercial kitchen solutions.",
          ],
        },
        {
          heading: "Notice on Scope of Services",
          paragraphs: [
            "Depending on the assignment, services comprise organizational, communicative, and coordinating activities.",
            "KALKAN PARTNER does not provide independent legal, tax, or medical advice. Activities requiring specific statutory licenses or regulated professional qualifications are carried out strictly within permissible legal limits and, where applicable, in cooperation with duly authorized professionals or institutions.",
          ],
        },
        {
          heading: "Consumer Dispute Resolution (§ 36 VSBG)",
          paragraphs: [
            "We are neither obligated nor generally willing to participate in dispute resolution proceedings before a consumer arbitration board.",
          ],
        },
      ],
    },
    privacy: {
      seoTitle: "Privacy Policy | KALKAN PARTNER",
      seoDescription:
        "GDPR (DSGVO) privacy notice regarding personal data processing on the KALKAN PARTNER website.",
      badge: "GDPR / DSGVO · PRE-LAUNCH DRAFT",
      title: "Privacy Policy",
      subtitle:
        "Information pursuant to Articles 13 and 14 GDPR (DSGVO) regarding how personal data is processed on our website.",
      warningTitle: "Pre-Launch Legal Review (TODO)",
      warningBody:
        "Processor disclosures (e.g., Vercel hosting, configured email provider DPAs) and final legal form details must undergo final legal review before commercial launch.",
      showContactBlock: true,
      sections: [
        {
          heading: "1. Hosting & Server Log Files",
          paragraphs: [
            "When visiting our website, technically necessary connection metadata (browser type, operating system, referrer URL, timestamp, and IP address) is automatically processed by our hosting infrastructure to maintain security and operational stability (Art. 6(1)(f) GDPR).",
          ],
        },
        {
          heading: "2. Contact Forms, Email, WhatsApp & Telegram",
          paragraphs: [
            "When you submit an inquiry via our contact form or email, we process your details (client type, department, country, name, email, optional phone number, and message) solely to evaluate and respond to your inquiry (Art. 6(1)(b) GDPR).",
            "If you voluntarily contact us via external messengers (WhatsApp or Telegram), the respective provider's privacy terms apply in addition. Never transmit passports, ID copies, or medical records via web forms or messengers.",
          ],
        },
        {
          heading: "3. Cookies & Analytics",
          paragraphs: [
            "By default, this website does not load non-essential advertising or third-party tracking cookies. Only a strictly necessary session cookie is used when accessing the protected administration area.",
          ],
        },
        {
          heading: "4. Your Rights Under GDPR",
          paragraphs: [
            "You have the right to request access (Art. 15 GDPR), rectification (Art. 16 GDPR), erasure (Art. 17 GDPR), restriction of processing (Art. 18 GDPR), data portability (Art. 20 GDPR), and to object to processing (Art. 21 GDPR), as well as the right to lodge a complaint with a supervisory authority (Art. 77 GDPR).",
          ],
        },
      ],
    },
    terms: {
      seoTitle: "Terms of Service & Withdrawal Rights | KALKAN PARTNER",
      seoDescription:
        "Draft General Terms and Conditions and consumer withdrawal information for KALKAN PARTNER.",
      badge: "TODO · PENDING LEGAL REVIEW",
      title: "Terms of Service & Withdrawal Rights",
      subtitle:
        "Placeholder framework for commercial (B2B) and consumer (B2C) terms pending final review by German legal counsel.",
      warningTitle: "Draft Placeholder – Legal Review Required (TODO)",
      warningBody:
        "Binding General Terms and Conditions (AGB) and statutory consumer withdrawal instructions (Widerrufsbelehrung under §§ 312g, 355 German Civil Code) must be approved by qualified legal counsel prior to concluding paid engagements.",
      showContactBlock: false,
      sections: [
        {
          heading: "1. Subject Matter & Regulatory Boundaries",
          paragraphs: [
            "KALKAN PARTNER provides organizational, communicative, research, and process-coordination services within the agreed project scope.",
          ],
          bullets: [
            "No legal advice (German RDG), tax advisory, or statutory auditing",
            "No medical diagnosis, treatment, or clinical outcome guarantees",
            "No temporary agency work (Arbeitnehmerüberlassung) and no licensed real-estate brokerage (§ 34c GewO)",
            "No statutory architectural, structural, electrical, gas, fire-safety, or ventilation engineering plans",
          ],
        },
        {
          heading: "2. Contract Formation, Fees & Consumer Withdrawal Rights (TODO)",
          paragraphs: [
            "Provisions governing individual proposals, remuneration, client cooperation duties, limitation of liability, and statutory 14-day consumer withdrawal instructions will be inserted following legal review.",
          ],
        },
      ],
    },
  },
};
