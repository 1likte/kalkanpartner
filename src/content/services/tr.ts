import type {
  ServiceDetailContent,
  ServiceSlug,
  ServicesOverviewContent,
} from "./types";

export const servicesOverviewTr: ServicesOverviewContent = {
  seo: {
    title: "Hizmetlerimiz – Dokuz Uzmanlık Departmanı | KALKAN PARTNER",
    description:
      "KALKAN PARTNER'in dokuz hizmet departmanı: Recruitment, Relocation, Behördenservice, Translation, Business Setup, Medical Tourism, Digital & AI, Family & Education ve Restaurant & Kitchen Solutions.",
    keywords: [
      "Almanya iş ve hizmet koordinasyonu",
      "Almanya Türkiye personel koordinasyonu",
      "Almanya taşınma desteği",
      "Almanya restoran ve mutfak danışmanlığı",
      "Dijital ve yapay zeka çözümleri Almanya",
    ],
  },
  eyebrow: "Hizmet Portföyümüz",
  title: "Yapılandırılmış çözümler için dokuz uzman departman",
  subtitle:
    "Net koordinasyon adımları, şeffaf hukuki sınırlar ve doğrudan talep akışı.",
  categories: [
    {
      id: "business-gastronomy",
      label: "Şirketler, Pazara Giriş & Gastronomi",
      description: "İşverenler, girişimciler, restoran yatırımcıları ve KOBİ'ler için.",
      slugs: ["restaurant-kitchen", "recruitment", "business-setup", "digital-ai"],
    },
    {
      id: "mobility-administration",
      label: "Taşınma, İdari Süreçler & İletişim",
      description: "Almanya'ya başlangıç ve günlük resmî süreçler için düzenli destek.",
      slugs: ["relocation", "behoerdenservice", "translation-communication"],
    },
    {
      id: "family-health",
      label: "Aile, Eğitim & Sağlık Turizmi Koordinasyonu",
      description: "Aileler, öğrenciler ve uluslararası hastalar için net koordinasyon.",
      slugs: ["family-education", "medical-tourism"],
    },
  ],
  cardReadMore: "Detayı İncele",
  breadcrumbHome: "Ana Sayfa",
  breadcrumbServices: "Hizmetler",
  relatedHeading: "İlgili Departmanlar",
  allServicesCta: "Tüm Departmanlar",
  legalBannerTitle: "Açık Hukuki Çerçeve",
  legalBannerBody:
    "KALKAN PARTNER yalnızca organizasyon, iletişim ve süreç koordinasyonu sunar. Hukuki, vergisel, tıbbi, mimari veya izin gerektiren işlemler yetkili iş ortaklarınca yürütülür.",
};

export const servicesTr: Record<ServiceSlug, ServiceDetailContent> = {
  recruitment: {
    slug: "recruitment",
    inquiryTopic: "recruitment",
    icon: "users",
    seo: {
      title: "Recruitment & Uluslararası Aday Koordinasyonu | KALKAN PARTNER",
      description:
        "Almanya'daki işverenler ile Türkiye ve uluslararası pazarlardaki adaylar arasında yapılandırılmış süreç koordinasyonu.",
      keywords: [
        "Almanya Türkiye personel koordinasyonu",
        "Almanya işveren aday bulma desteği",
        "Gastronomi ve KOBİ uluslararası aday organizasyonu",
      ],
    },
    eyebrow: "Departman 01 · Recruitment",
    title: "Recruitment & Aday Koordinasyonu",
    lead: "Almanya'daki işverenleri Türkiye ve yurt dışındaki nitelikli adaylarla buluşturuyor, süreci baştan sona koordine ediyoruz.",
    audienceBadge: "Almanya'daki işverenler & uluslararası adaylar",
    whatIs: {
      heading: "Neler Yapıyoruz?",
      paragraphs: [
        "İşverenlerin uluslararası personel arayışını düzenli bir yapıya kavuşturuyor; aday bulma, belge düzenleme, görüşme planlama ve işe giriş adımlarını tek elden koordine ediyoruz.",
      ],
      scopeTitle: "Koordinasyon Kapsamı",
      scopeItems: [
        "Türkiye ve yurt dışından aday araştırması",
        "CV ve temel belgelerin Alman standardında düzeni",
        "İşveren profiline uygun ön eleme organizasyonu",
        "Online veya yüz yüze mülakat planlaması",
        "Almanca–Türkçe çift dilli süreç iletişimi",
        "İşe başlangıç (onboarding) koordinasyonu",
      ],
    },
    targetAudience: {
      heading: "Kime Hitap Ediyor?",
      intro: "Doğrudan istihdam hedefleyen işverenler ve nitelikli adaylar için.",
      groups: [
        {
          title: "Almanya'daki İşverenler",
          description: "KOBİ'ler, restoranlar ve doğrudan personel istihdam etmek isteyen işletmeler.",
        },
        {
          title: "Nitelikli Adaylar",
          description: "Belgelerini düzenli hazırlayıp Alman işverenlerle net görüşmek isteyen profesyoneller.",
        },
        {
          title: "Yeni Açılış Ekipleri",
          description: "Yeni şube ve operasyonlar için planlı personel koordinasyonu arayan firmalar.",
        },
      ],
    },
    problemsSolved: {
      heading: "Çözdüğümüz Sorunlar",
      intro: "Eksik evrak ve dil bariyerini ortadan kaldırıyoruz.",
      items: [
        {
          problem: "Eksik ve dağınık aday dosyaları",
          solution: "Tüm CV ve belgeleri tek bir net formatta hazırlıyoruz.",
        },
        {
          problem: "Dil ve beklenti uyumsuzluğu",
          solution: "Almanca–Türkçe net iletişimle her iki tarafı baştan hizalıyoruz.",
        },
        {
          problem: "Görüşme planlamasında zaman kaybı",
          solution: "Randevu ve geri bildirimleri tek muhatapla hızlandırıyoruz.",
        },
      ],
    },
    process: {
      heading: "4 Adımda İşleyiş",
      intro: "İhtiyaç analizinden işe başlangıca.",
      steps: [
        {
          number: "01",
          title: "Profil Analizi",
          description: "Pozisyon, nitelik, dil seviyesi ve başlangıç takvimi belirlenir.",
        },
        {
          number: "02",
          title: "Aday & Belge Düzeni",
          description: "Uygun profiller bulunur; CV ve temel belgeler hazırlanır.",
        },
        {
          number: "03",
          title: "Görüşme Yönetimi",
          description: "İşveren–aday mülakatları planlanır ve takip edilir.",
        },
        {
          number: "04",
          title: "Sözleşme & Başlangıç",
          description: "Doğrudan sözleşme sonrası işe giriş adımları koordine edilir.",
        },
      ],
    },
    inquiry: {
      heading: "Personel Talebi Oluşturun",
      description: "İhtiyacınızı veya profilinizi paylaşın; net bir yol haritasıyla dönüş yapalım.",
      prepChecklistTitle: "Ön Görüşme İçin Gerekenler",
      prepChecklist: [
        "Pozisyon ve çalışılacak şehir",
        "İstenen dil seviyesi ve zaman planı",
        "İşverenler için şirket ve yetkili bilgisi",
      ],
      primaryCtaLabel: "Recruitment Talebi Oluştur",
      secondaryCtaLabel: "Tüm Departmanlar",
      sensitiveDataReminder:
        "İlk iletişimde pasaport veya kimlik kopyası göndermeyiniz.",
    },
    legalBoundary: {
      heading: "Hukuki Sınırlar",
      points: [
        "İş sözleşmeleri doğrudan işveren ile çalışan arasında imzalanır.",
        "Personel kiralama (Arbeitnehmerüberlassung) kesinlikle yapılmaz.",
        "Vize veya iş garantisi verilmez; resmî kararlar makamlara aittir.",
        "Adaydan mevzuata aykırı yerleştirme ücreti alınmaz.",
      ],
    },
    relatedSlugs: ["relocation", "behoerdenservice", "translation-communication"],
  },

  relocation: {
    slug: "relocation",
    inquiryTopic: "general",
    icon: "home",
    seo: {
      title: "Relocation – Almanya Taşınma Koordinasyonu | KALKAN PARTNER",
      description:
        "Almanya'ya taşınan bireyler ve aileler için taşınma planı, ev arama iletişimi, okul/kreş araştırması ve abonelik organizasyonu.",
      keywords: [
        "Almanya relocation desteği",
        "Almanya'ya taşınma organizasyonu",
        "Türkiye'den Almanya'ya aile yerleşim koordinasyonu",
      ],
    },
    eyebrow: "Departman 02 · Relocation",
    title: "Relocation & Yerleşim Desteği",
    lead: "Almanya'ya taşınırken konut iletişimi, okul araştırması ve abonelik kurulumlarını adım adım organize ediyoruz.",
    audienceBadge: "Uzmanlar, bireyler & aileler",
    whatIs: {
      heading: "Neler Yapıyoruz?",
      paragraphs: [
        "Taşınma öncesi takvimden ev arama randevularına, kreş/okul araştırmasından elektrik ve internet aboneliklerine kadar Almanya'daki ilk yerleşim sürecinizi düzenliyoruz.",
      ],
      scopeTitle: "Koordinasyon Kapsamı",
      scopeItems: [
        "Kişiye özel taşınma ve yerleşim planı",
        "Ev arama sürecinde iletişim ve randevu takibi",
        "Bölgesel okul ve kreş (Kita) araştırması",
        "Taşınma ve lojistik organizasyonu",
        "Elektrik, doğalgaz ve internet abonelikleri",
        "İlk haftalar için pratik yerleşim rehberliği",
      ],
    },
    targetAudience: {
      heading: "Kime Hitap Ediyor?",
      intro: "Almanya'ya düzenli ve stressiz başlamak isteyen herkes için.",
      groups: [
        {
          title: "Uluslararası Çalışanlar",
          description: "Yeni işine odaklanırken yerleşim işlerini düzenli yürütmek isteyenler.",
        },
        {
          title: "Taşınan Aileler",
          description: "Ev, okul ve abonelikleri aynı anda sorunsuz çözmek isteyen aileler.",
        },
        {
          title: "İşverenler",
          description: "Yurt dışından gelen personeline düzenli başlangıç sunmak isteyen şirketler.",
        },
      ],
    },
    problemsSolved: {
      heading: "Çözdüğümüz Sorunlar",
      intro: "Yeni bir ülkedeki ilk haftaların karmaşasını azaltıyoruz.",
      items: [
        {
          problem: "Karışık işlem sırası",
          solution: "Tüm yerleşim adımlarını net bir takvime oturtuyoruz.",
        },
        {
          problem: "Ev sahibi ve kurumlarla dil bariyeri",
          solution: "Başvuru yazışmalarını ve randevuları Almanca koordine ediyoruz.",
        },
        {
          problem: "Dağınık bilgi ve zaman kaybı",
          solution: "Okul, kreş ve abonelik seçeneklerini tek özette sunuyoruz.",
        },
      ],
    },
    process: {
      heading: "4 Adımda İşleyiş",
      intro: "Taşınma öncesinden ilk ayın düzenine kadar.",
      steps: [
        {
          number: "01",
          title: "İhtiyaç Analizi",
          description: "Hedef şehir, tarih ve aile yapınız belirlenir.",
        },
        {
          number: "02",
          title: "Yerleşim Planı",
          description: "Belgeler ve işlemler doğru sıraya konur.",
        },
        {
          number: "03",
          title: "Randevu & Araştırma",
          description: "Ev iletişimi, okul araştırması ve abonelikler organize edilir.",
        },
        {
          number: "04",
          title: "İlk Düzen",
          description: "Varış sonrası temel kurulumların takibi tamamlanır.",
        },
      ],
    },
    inquiry: {
      heading: "Taşınma Görüşmesi Talep Edin",
      description: "Hedef şehrinizi ve tarihinizi paylaşın; size uygun planı çıkaralım.",
      prepChecklistTitle: "Ön Görüşme İçin Gerekenler",
      prepChecklist: [
        "Hedef şehir ve planlanan taşınma tarihi",
        "Bireysel veya aile durumu (okul/kreş ihtiyacı)",
        "Öncelikli destek başlıkları",
      ],
      primaryCtaLabel: "Relocation Görüşmesi İste",
      secondaryCtaLabel: "Tüm Departmanlar",
      sensitiveDataReminder:
        "İlk iletişimde kimlik, pasaport veya banka belgesi göndermeyiniz.",
    },
    legalBoundary: {
      heading: "Hukuki Sınır (§ 34c GewO)",
      points: [
        "§ 34c GewO kapsamında izin gerektiren emlak aracılığı sunulmaz.",
        "Hizmet yalnızca planlama, iletişim ve randevu organizasyonunu kapsar.",
        "Kira ve abonelik sözleşmeleri doğrudan ilgili sağlayıcıyla yapılır.",
      ],
    },
    relatedSlugs: ["behoerdenservice", "family-education", "recruitment"],
  },

  behoerdenservice: {
    slug: "behoerdenservice",
    inquiryTopic: "general",
    icon: "landmark",
    seo: {
      title: "Behördenservice – Almanya İdari Süreç Koordinasyonu | KALKAN PARTNER",
      description:
        "Almanya'da randevu organizasyonu, belge hazırlığı, dosya takibi ve geçerli vekâletle idari iletişim.",
      keywords: [
        "Almanya resmi kurum randevu organizasyonu",
        "Behördenservice Türkçe destek Almanya",
        "Almanya belge hazırlığı ve dosya takibi",
      ],
    },
    eyebrow: "Departman 03 · Behördenservice",
    title: "Behördenservice & İdari Koordinasyon",
    lead: "Resmî süreçlerde randevu planlaması, eksiksiz evrak hazırlığı ve izin verilen kapsamda idari takip desteği.",
    audienceBadge: "Almanya'daki bireyler & işletmeler",
    whatIs: {
      heading: "Neler Yapıyoruz?",
      paragraphs: [
        "Kamu kurumlarıyla yürütülen işlemlerde eksik evrak veya kaçırılan süreler haftalarca gecikmeye yol açar. Hukuki danışmanlık alanına girmeden dosyalarınızı düzenler, randevu ve teslim süreçlerini koordine ederiz.",
      ],
      scopeTitle: "Koordinasyon Kapsamı",
      scopeItems: [
        "Randevu ve son tarih takibi",
        "Belge eksiksizlik kontrol listeleri",
        "Zamanında teslim organizasyonu",
        "Kabul edilen hallerde vekâletli idari yazışma",
        "Uygun kapsamda dosya durumu sorgulama",
      ],
    },
    targetAudience: {
      heading: "Kime Hitap Ediyor?",
      intro: "Resmî işlerini düzenli ve eksiksiz yürütmek isteyenler için.",
      groups: [
        {
          title: "Yeni Gelenler & Aileler",
          description: "Standart kurum randevuları için düzenli dosya hazırlığı arayanlar.",
        },
        {
          title: "Çalışan Profesyoneller",
          description: "Süre ve yazışmaları disiplinle takip etmek isteyenler.",
        },
        {
          title: "İşletmeler",
          description: "Avukat veya mali müşavir süreçlerine paralel evrak düzeni arayan firmalar.",
        },
      ],
    },
    problemsSolved: {
      heading: "Çözdüğümüz Sorunlar",
      intro: "Eksik evrak kaynaklı gecikmelerin önüne geçiyoruz.",
      items: [
        {
          problem: "Randevuya eksik belgeyle gitmek",
          solution: "Tüm evrakları önceden kontrol listesiyle eksiksiz sıralıyoruz.",
        },
        {
          problem: "Anlaşılamayan resmî mektuplar",
          solution: "Süreleri netleştiriyor ve idari yanıtları organize ediyoruz.",
        },
        {
          problem: "Dağınık kurum süreçleri",
          solution: "Tüm randevu ve teslimleri tek takvimde topluyoruz.",
        },
      ],
    },
    process: {
      heading: "4 Adımda İşleyiş",
      intro: "Hukuki sınırlar gözetilerek dört net aşamada.",
      steps: [
        {
          number: "01",
          title: "Kapsam Kontrolü",
          description: "İdari destek kapsamı ve avukat ihtiyacı baştan netleştirilir.",
        },
        {
          number: "02",
          title: "Dosya Düzeni",
          description: "Gerekli belgeler incelemeye hazır sıraya konur.",
        },
        {
          number: "03",
          title: "Randevu & Teslim",
          description: "Randevular alınır ve evrak teslimi takip edilir.",
        },
        {
          number: "04",
          title: "Durum Takibi",
          description: "İzin verilen kapsamda dosya durumu düzenli izlenir.",
        },
      ],
    },
    inquiry: {
      heading: "İdari Destek Talebi",
      description: "İşlem türünüzü ve zaman planınızı paylaşın; size açıkça dönüş yapalım.",
      prepChecklistTitle: "Ön Görüşme İçin Gerekenler",
      prepChecklist: [
        "İdari işlemin konusu ve ilgili şehir",
        "Varsa son tarih veya mevcut randevu",
        "Avukat desteği olup olmadığı",
      ],
      primaryCtaLabel: "Behördenservice Talebi",
      secondaryCtaLabel: "Tüm Departmanlar",
      sensitiveDataReminder:
        "İlk iletişimde kimlik fotokopisi veya resmî karar metni göndermeyiniz.",
    },
    legalBoundary: {
      heading: "Alman RDG Sınırları",
      points: [
        "Hukuki danışmanlık, temsil veya göç hukuku değerlendirmesi yapılmaz (RDG).",
        "İdari iletişim yalnızca kurumca kabul edilen geçerli vekâlet kapsamında yürütülür.",
        "Hukuki itiraz veya değerlendirmelerde yetkili avukata yönlendirme yapılır.",
      ],
    },
    relatedSlugs: ["relocation", "translation-communication", "business-setup"],
  },

  "translation-communication": {
    slug: "translation-communication",
    inquiryTopic: "general",
    icon: "languages",
    seo: {
      title: "Translation & Communication (DE · TR · EN) | KALKAN PARTNER",
      description:
        "Almanca–Türkçe–İngilizce iş yazışmaları, belge çeviri organizasyonu ve yeminli tercüman koordinasyonu.",
      keywords: [
        "Almanca Türkçe iş yazışması desteği",
        "Çeviri ve yeminli tercüman koordinasyonu Almanya",
        "Uluslararası kurumsal iletişim desteği",
      ],
    },
    eyebrow: "Departman 04 · Translation & Communication",
    title: "Translation & Communication",
    lead: "Almanca, Türkçe ve İngilizce iş yazışmalarından yeminli tercüman koordinasyonuna kadar net ve güvenilir iletişim.",
    audienceBadge: "Kurumsal & bireysel (DE · TR · EN)",
    whatIs: {
      heading: "Neler Yapıyoruz?",
      paragraphs: [
        "Ticari yazışmalarınızı, CV ve kurumsal belgelerinizi hedef pazarın dil kültürüne uygun biçimde yapılandırıyor; resmî onay gereken durumlarda yeminli tercümanlarla koordine ediyoruz.",
      ],
      scopeTitle: "Koordinasyon Kapsamı",
      scopeItems: [
        "DE–TR–EN kurumsal iş yazışmaları",
        "Genel belge çeviri organizasyonu",
        "CV ve şirket profili düzenlemesi",
        "Resmî işlemlerde yeminli tercüman bağlantısı",
        "Tedarikçi ve iş ortağı iletişim desteği",
      ],
    },
    targetAudience: {
      heading: "Kime Hitap Ediyor?",
      intro: "Çok dilli iletişimde hata payı bırakmak istemeyenlere.",
      groups: [
        {
          title: "DE–TR Ticaret Yapan Şirketler",
          description: "Teklif ve tedarikçi yazışmalarını profesyonelce yürütmek isteyenler.",
        },
        {
          title: "Bireyler & Adaylar",
          description: "CV ve resmî belge çevirilerini eksiksiz organize etmek isteyenler.",
        },
        {
          title: "Uluslararası Ekipler",
          description: "Üç dilde tutarlı bilgi akışı arayan proje ekipleri.",
        },
      ],
    },
    problemsSolved: {
      heading: "Çözdüğümüz Sorunlar",
      intro: "Makine çevirisinin yarattığı güvensizliği ortadan kaldırıyoruz.",
      items: [
        {
          problem: "Yapay veya hatalı iş metinleri",
          solution: "Her iki iş kültürüne uygun, doğal ve net metinler hazırlıyoruz.",
        },
        {
          problem: "Yeminli çeviri karmaşası",
          solution: "Resmî gerekleri baştan netleştirip yalnızca yetkili yeminli tercümana yönlendiriyoruz.",
        },
        {
          problem: "Dil kaynaklı iş yavaşlamaları",
          solution: "Düzenli iletişim koordinasyonuyla karar süreçlerini hızlandırıyoruz.",
        },
      ],
    },
    process: {
      heading: "4 Adımda İşleyiş",
      intro: "Hızlı kapsam belirleme ve zamanında teslim.",
      steps: [
        {
          number: "01",
          title: "Dil & Amaç Analizi",
          description: "Dil çifti ve resmî onay gerekliliği belirlenir.",
        },
        {
          number: "02",
          title: "Takvim Onayı",
          description: "Süre ve gerekiyorsa yeminli tercüman planlanır.",
        },
        {
          number: "03",
          title: "Hazırlık & Kontrol",
          description: "Metinler terminoloji kontrolüyle tamamlanır.",
        },
        {
          number: "04",
          title: "Teslim & Destek",
          description: "Belgeler teslim edilir ve yazışmalar desteklenir.",
        },
      ],
    },
    inquiry: {
      heading: "Çeviri & İletişim Talebi",
      description: "Dil yönünü ve belge türünü paylaşın; hızlıca planlayalım.",
      prepChecklistTitle: "Ön Görüşme İçin Gerekenler",
      prepChecklist: [
        "Dil çifti (DE ↔ TR veya DE ↔ EN)",
        "Belge türü (ticari, CV, resmî)",
        "Hedef teslim tarihi",
      ],
      primaryCtaLabel: "Çeviri & İletişim Talebi",
      secondaryCtaLabel: "Tüm Departmanlar",
      sensitiveDataReminder:
        "Gizli belgeleri yalnızca güvenli aktarım kanalı belirlendikten sonra paylaşınız.",
    },
    legalBoundary: {
      heading: "Yeminli Çeviri Sınırı",
      points: [
        "Her genel çeviri resmî/yeminli çeviri niteliği taşımaz.",
        "Resmî onaylı çeviriler yalnızca yetkili ve yeminli tercümanlarca düzenlenir.",
      ],
    },
    relatedSlugs: ["behoerdenservice", "business-setup", "recruitment"],
  },

  "business-setup": {
    slug: "business-setup",
    inquiryTopic: "business",
    icon: "briefcase",
    seo: {
      title: "Business Setup – Almanya Pazarına Giriş | KALKAN PARTNER",
      description:
        "Almanya'da pazar ve tedarikçi araştırması, iş ortağı bağlantıları ve noter, avukat, mali müşavir randevu koordinasyonu.",
      keywords: [
        "Almanya şirket kuruluş süreci organizasyonu",
        "Almanya pazar ve tedarikçi araştırması",
        "Türkiye'den Almanya pazarına giriş koordinasyonu",
      ],
    },
    eyebrow: "Departman 05 · Business Setup",
    title: "Business Setup & Pazara Giriş",
    lead: "Almanya pazarına girişte pazar ve tedarikçi araştırması, iş ortağı bağlantıları ve uzman randevularının koordinasyonu.",
    audienceBadge: "Uluslararası girişimciler & şirketler",
    whatIs: {
      heading: "Neler Yapıyoruz?",
      paragraphs: [
        "Almanya'da iş kurma veya büyüme sürecinizde yerel proje koordinatörünüz olarak araştırma, tedarikçi bağlantıları ve noter, avukat ile mali müşavir randevularını düzenliyoruz.",
      ],
      scopeTitle: "Koordinasyon Kapsamı",
      scopeItems: [
        "Almanya pazar ve rekabet araştırması",
        "İş ortağı ve distribütör araştırması",
        "Tedarikçi bulma ve ön teklif takibi",
        "Şirket kuruluş süreci organizasyonu",
        "Noter, avukat ve Steuerberater randevuları",
        "Uluslararası iş ağı eşleştirmesi",
      ],
    },
    targetAudience: {
      heading: "Kime Hitap Ediyor?",
      intro: "Almanya'da planlı ve kontrollü büyümek isteyen iş insanlarına.",
      groups: [
        {
          title: "Türk & Uluslararası Şirketler",
          description: "Almanya'da şube, iştirak veya dağıtım ağı kurmak isteyen firmalar.",
        },
        {
          title: "Yeni Girişimciler",
          description: "Kuruluş adımlarını ve yerel bağlantıları düzenli yönetmek isteyenler.",
        },
        {
          title: "Ticaret Markaları",
          description: "DE–TR ekseninde güvenilir tedarikçi ve iş ortağı arayanlar.",
        },
      ],
    },
    problemsSolved: {
      heading: "Çözdüğümüz Sorunlar",
      intro: "Yerel ağ eksikliğinden kaynaklanan zaman ve bütçe kaybını önlüyoruz.",
      items: [
        {
          problem: "Belirsiz kuruluş ve iş sırası",
          solution: "İdari adımları planlayıp uzman görüşmelerini hazır hale getiriyoruz.",
        },
        {
          problem: "Güvenilir tedarikçi bulma zorluğu",
          solution: "Hedef sektöre özel araştırma yapıp ilk temasları kuruyoruz.",
        },
        {
          problem: "İki ülke arası kopuk koordinasyon",
          solution: "Çift dilli tek merkezle tüm süreci aynı takvimde tutuyoruz.",
        },
      ],
    },
    process: {
      heading: "4 Adımda İşleyiş",
      intro: "Pazar analizinden operasyonel başlangıca.",
      steps: [
        {
          number: "01",
          title: "Hedef Analizi",
          description: "Sektör, hedef bölge ve iş modeli netleştirilir.",
        },
        {
          number: "02",
          title: "Pazar & Partner Araştırması",
          description: "Yerel pazar verileri ve aday tedarikçi/ortak listeleri çıkarılır.",
        },
        {
          number: "03",
          title: "Uzman Bağlantısı",
          description: "Noter, avukat ve mali müşavir randevuları organize edilir.",
        },
        {
          number: "04",
          title: "Proje Takibi",
          description: "Operasyonel başlangıca kadar kilometre taşları yönetilir.",
        },
      ],
    },
    inquiry: {
      heading: "Almanya Pazarına Girişinizi Görüşelim",
      description: "Sektörünüzü paylaşın; size özel koordinasyon planını çıkaralım.",
      prepChecklistTitle: "Ön Görüşme İçin Gerekenler",
      prepChecklist: [
        "Sektör ve Almanya'daki hedef bölge",
        "Mevcut aşama (fikir, şirket, genişleme)",
        "Öncelikli ihtiyaçlar (araştırma, ortak, kuruluş)",
      ],
      primaryCtaLabel: "Business Setup Talebi",
      secondaryCtaLabel: "Tüm Departmanlar",
      sensitiveDataReminder:
        "İlk aşamada gizli şirket sözleşmeleri veya kimlik belgeleri paylaşmayınız.",
    },
    legalBoundary: {
      heading: "Mesleki Yetki Sınırları",
      points: [
        "Hizmetimiz proje koordinasyonu ile pazar ve iş ortağı araştırmasını kapsar.",
        "Hukuki ve vergisel danışmanlık ile noter işlemleri yalnızca yetkili uzmanlarca yürütülür.",
      ],
    },
    relatedSlugs: ["digital-ai", "restaurant-kitchen", "recruitment"],
  },

  "medical-tourism": {
    slug: "medical-tourism",
    inquiryTopic: "medical-tourism",
    icon: "heartPulse",
    seo: {
      title: "Medical Tourism Coordination | KALKAN PARTNER",
      description:
        "Türkiye'deki yetkili hastane ve sağlık turizmi kuruluşlarıyla iletişim, tercüme ve seyahat koordinasyonu.",
      keywords: [
        "Türkiye sağlık turizmi koordinasyonu",
        "Almanya Türkiye hasta iletişim koordinasyonu",
        "Yetkili hastane bağlantı ve seyahat organizasyonu",
      ],
    },
    eyebrow: "Departman 06 · Medical Tourism",
    title: "Medical Tourism Coordination",
    lead: "Uluslararası hastalar için Türkiye'deki yetkili hastanelerle şeffaf iletişim, tercüme ve seyahat koordinasyonu.",
    audienceBadge: "Uluslararası hastalar & refakatçiler",
    whatIs: {
      heading: "Neler Yapıyoruz?",
      paragraphs: [
        "Hiçbir tıbbi müdahale veya teşhis koymadan; Türkiye'deki yetkili sağlık kuruluşlarıyla iletişim kurmanızı, tercüman desteğini ve seyahat lojistiğinizi baştan sona düzenliyoruz.",
      ],
      scopeTitle: "Koordinasyon Kapsamı",
      scopeItems: [
        "Türkiye'deki yetkili hastanelerle iletişim bağlantısı",
        "Hasta iletişimi ve organizasyon takibi",
        "Tercüme ve sözlü tercüman koordinasyonu",
        "Yetkili kurumlardan genel teklif/bilgi talebi",
        "Uçuş, transfer ve konaklama organizasyonu",
        "Süreç sonrası geri bildirim takibi",
      ],
    },
    targetAudience: {
      heading: "Kime Hitap Ediyor?",
      intro: "Şeffaf ve yetkili sağlık organizasyonu arayan hastalar için.",
      groups: [
        {
          title: "Almanya & Avrupa'daki Hastalar",
          description: "Türkiye'deki yetkili kliniklerle dil bariyersiz iletişim kurmak isteyenler.",
        },
        {
          title: "Refakatçiler & Aileler",
          description: "Seyahat, konaklama ve tercüme düzenini tek elden çözmek isteyenler.",
        },
      ],
    },
    problemsSolved: {
      heading: "Çözdüğümüz Sorunlar",
      intro: "Yetkisiz aracılar ve dil karmaşasını önlüyoruz.",
      items: [
        {
          problem: "Yetkili kurumu ayırt etme zorluğu",
          solution: "Yalnızca sağlık turizmi yetkisine sahip hastanelerle bağlantı kuruyoruz.",
        },
        {
          problem: "Dil kaynaklı iletişim kopukluğu",
          solution: "Tüm süreci ana dilinizde düzenli tercüme desteğiyle yönetiyoruz.",
        },
        {
          problem: "Dağınık seyahat ve randevu akışı",
          solution: "Ulaşım, otel ve kurum randevularını tek takvimde hizalıyoruz.",
        },
      ],
    },
    process: {
      heading: "4 Adımda İşleyiş",
      intro: "Organizasyon ile tıbbi süreci kesin biçimde ayıran yapı.",
      steps: [
        {
          number: "01",
          title: "Ön Görüşme",
          description: "Genel bilgi ihtiyacı ve tercih edilen dil belirlenir.",
        },
        {
          number: "02",
          title: "Kurum Bağlantısı",
          description: "Talebiniz Türkiye'deki yetkili kuruluşa iletilir.",
        },
        {
          number: "03",
          title: "Hekim Değerlendirmesi",
          description: "Tüm tıbbi sorular yalnızca hasta ile yetkili hekim arasında yürütülür.",
        },
        {
          number: "04",
          title: "Seyahat & Takip",
          description: "Transfer, konaklama, tercüme ve dönüş sonrası iletişim koordine edilir.",
        },
      ],
    },
    inquiry: {
      heading: "Koordinasyon Talebi Gönderin",
      description: "Genel talebinizi ve dil tercihinizi paylaşın; tıbbi belge göndermeyiniz.",
      prepChecklistTitle: "Ön Görüşme İçin Gerekenler",
      prepChecklist: [
        "Genel ilgi alanı ve tercih edilen şehir",
        "Tercih edilen dil (DE / TR / EN)",
        "Yaklaşık seyahat dönemi",
      ],
      primaryCtaLabel: "Koordinasyon Talebi",
      secondaryCtaLabel: "Tüm Departmanlar",
      sensitiveDataReminder:
        "ÖNEMLİ: Formlardan asla epikriz, tahlil, röntgen veya pasaport göndermeyiniz.",
    },
    legalBoundary: {
      heading: "Tıbbi, Tanıtım (HWG) & Hukuki Sınır",
      points: [
        "Teşhis koymaz, tedavi uygulamaz ve tıbbi sonuç garantisi vermeyiz.",
        "Alman HWG uyarınca doğrulanmamış vaatler veya öncesi-sonrası görselleri yayınlanmaz.",
        "Tedavi sözleşmesi yalnızca doğrudan hasta ile Türkiye'deki yetkili kuruluş arasında kurulur.",
        "Şeffaflık: Koordinasyon ücreti müşteriden veya hizmet komisyonu yetkili partner kurumdan alınabilir.",
      ],
    },
    relatedSlugs: ["translation-communication", "relocation", "family-education"],
  },

  "digital-ai": {
    slug: "digital-ai",
    inquiryTopic: "business",
    icon: "cpu",
    seo: {
      title: "Digital & AI Solutions – Web, SEO, GEO & Otomasyon | KALKAN PARTNER",
      description:
        "Kurumsal web sitesi, SEO, Local SEO, yapay zekâ araması (GEO), chatbot ve iş süreci otomasyonu.",
      keywords: [
        "Almanya kurumsal web tasarım ve SEO",
        "Local SEO ve GEO yapay zeka görünürlüğü",
        "KOBİ yapay zeka chatbot ve otomasyon",
      ],
    },
    eyebrow: "Departman 07 · Digital & AI",
    title: "Digital & AI Solutions",
    lead: "Müşteri kazandıran web siteleri, Google ve yapay zekâ görünürlüğü (GEO) ile pratik iş otomasyonları.",
    audienceBadge: "KOBİ'ler, gastronomi & markalar",
    whatIs: {
      heading: "Neler Yapıyoruz?",
      paragraphs: [
        "Dijital varlığınızı yalnızca görsel bir vitrin değil; aktif müşteri getiren ve tekrarlayan işleri otomatikleştiren hızlı, DSGVO uyumlu bir büyüme sistemine dönüştürüyoruz.",
      ],
      scopeTitle: "Hizmet Kapsamı",
      scopeItems: [
        "Çok dilli hızlı kurumsal web siteleri",
        "DE / TR / EN SEO stratejisi",
        "Local SEO & Google Business altyapısı",
        "GEO (Yapay zekâ arama optimizasyonu)",
        "Dijital marka kimliği & içerik düzeni",
        "AI chatbotlar ve süreç otomasyonu",
      ],
    },
    targetAudience: {
      heading: "Kime Hitap Ediyor?",
      intro: "Dijitalden ölçülebilir müşteri ve hız kazanmak isteyen işletmelere.",
      groups: [
        {
          title: "KOBİ & Hizmet Firmaları",
          description: "Bölgesinde Google'da ilk sıralarda görünmek isteyen işletmeler.",
        },
        {
          title: "Restoran & Yeni Açılışlar",
          description: "Açılış gününden itibaren güçlü web ve harita görünürlüğü arayanlar.",
        },
        {
          title: "Büyüyen Ekipler",
          description: "Müşteri sorularını ve rutin akışları AI ile hızlandırmak isteyenler.",
        },
      ],
    },
    problemsSolved: {
      heading: "Çözdüğümüz Sorunlar",
      intro: "Müşteri getirmeyen eski web sitelerini yeniliyoruz.",
      items: [
        {
          problem: "Dönüşüm getirmeyen site",
          solution: "Güven ve talep odaklı sade arayüz kuruyoruz.",
        },
        {
          problem: "Google ve AI'da görünmezlik",
          solution: "Teknik SEO, Local SEO ve GEO ile kalıcı görünürlük sağlıyoruz.",
        },
        {
          problem: "Manuel iletişim yükü",
          solution: "Ekibin kolayca kullanacağı pratik otomasyonlar kuruyoruz.",
        },
      ],
    },
    process: {
      heading: "4 Adımda İşleyiş",
      intro: "Modüler, hızlı ve ölçeklenebilir.",
      steps: [
        {
          number: "01",
          title: "Dijital Analiz",
          description: "Mevcut site, arama potansiyeli ve otomasyon fırsatları incelenir.",
        },
        {
          number: "02",
          title: "Tasarım & SEO Planı",
          description: "Sayfa mimarisi, dil stratejisi ve marka dili hazırlanır.",
        },
        {
          number: "03",
          title: "Geliştirme & AI",
          description: "Site, içerik ve otomasyonlar DSGVO uyumuyla yayına alınır.",
        },
        {
          number: "04",
          title: "Eğitim & Büyüme",
          description: "Ekip teslimi sonrası sürekli optimizasyon desteği sunulur.",
        },
      ],
    },
    inquiry: {
      heading: "Dijital Projenizi Konuşalım",
      description: "Web sitesi, SEO/GEO veya AI otomasyonu için net yol haritası çıkaralım.",
      prepChecklistTitle: "Ön Görüşme İçin Gerekenler",
      prepChecklist: [
        "Varsa mevcut web siteniz ve hedef bölge",
        "Öncelikli ihtiyaç (Web, SEO/GEO, Chatbot)",
        "Hedeflenen yayın tarihi",
      ],
      primaryCtaLabel: "Dijital Proje Talebi",
      secondaryCtaLabel: "Tüm Departmanlar",
      sensitiveDataReminder:
        "İlk aşamada sunucu şifreleri veya API anahtarları paylaşmayınız.",
    },
    legalBoundary: {
      heading: "Veri Koruma & Sorumluluk",
      points: [
        "Tüm dijital sistemler DSGVO veri minimizasyonu ilkelerine uygun kurulur.",
        "Sektörel yasal metinlerin nihai onayı ilgili hukukçuya aittir.",
      ],
    },
    relatedSlugs: ["business-setup", "restaurant-kitchen", "translation-communication"],
  },

  "family-education": {
    slug: "family-education",
    inquiryTopic: "general",
    icon: "graduationCap",
    seo: {
      title: "Family & Education – Okul, Kreş & Öğrenci | KALKAN PARTNER",
      description:
        "Almanya'da okul ve kreş araştırması, öğrenci başvuru koordinasyonu ve aile yerleşim desteği.",
      keywords: [
        "Almanya okul ve kreş araştırması",
        "Almanya öğrenci başvurusu koordinasyonu",
        "Aile yerleşim ve eğitim desteği Almanya",
      ],
    },
    eyebrow: "Departman 08 · Family & Education",
    title: "Family & Education",
    lead: "Almanya'da okul, kreş, dil kursu ve üniversite başvurularında bölgesel araştırma ve düzenli dosya koordinasyonu.",
    audienceBadge: "Aileler, öğrenciler & kursiyerler",
    whatIs: {
      heading: "Neler Yapıyoruz?",
      paragraphs: [
        "Eyaletlere göre değişen okul ve kreş kurallarında doğru seçenekleri araştırıyor, öğrenci başvuru belgelerini takvime uygun biçimde düzenliyoruz.",
      ],
      scopeTitle: "Koordinasyon Kapsamı",
      scopeItems: [
        "Bölgesel okul türleri ve okul araştırması",
        "Kreş (Kita) seçenekleri ve kayıt bilgisi",
        "Dil ve meslek kursları araştırması",
        "Öğrenci başvuru dosyası koordinasyonu",
        "Aile yerleşim organizasyonu",
        "Konaklama iletişimi desteği",
      ],
    },
    targetAudience: {
      heading: "Kime Hitap Ediyor?",
      intro: "Eğitim adımlarını zamanında ve eksiksiz planlamak isteyenlere.",
      groups: [
        {
          title: "Çocuklu Aileler",
          description: "Hedef şehirdeki kreş ve okul seçeneklerini önceden görmek isteyen ebeveynler.",
        },
        {
          title: "Uluslararası Öğrenciler",
          description: "Başvuru ve dil kursu adımlarını düzenli yönetmek isteyen adaylar.",
        },
        {
          title: "Kursiyerler",
          description: "Uygun eğitim ve meslek kurslarını karşılaştırmak isteyenler.",
        },
      ],
    },
    problemsSolved: {
      heading: "Çözdüğümüz Sorunlar",
      intro: "Kaçırılan kayıt tarihlerinin ve eksik evrakların önüne geçiyoruz.",
      items: [
        {
          problem: "Eyalete göre değişen kayıt kuralları",
          solution: "Bölgenizdeki portal ve son başvuru tarihlerini netleştiriyoruz.",
        },
        {
          problem: "Eksik öğrenci başvuru dosyaları",
          solution: "Açık kontrol listeleriyle evrakları zamanında hazırlıyoruz.",
        },
        {
          problem: "Kurumlarla Almanca yazışma zorluğu",
          solution: "Düzenli Almanca iletişim ve randevu desteği sağlıyoruz.",
        },
      ],
    },
    process: {
      heading: "4 Adımda İşleyiş",
      intro: "Eğitim takvimine uyumlu net planlama.",
      steps: [
        {
          number: "01",
          title: "Hedef & Bölge",
          description: "Yaş, eğitim düzeyi ve hedef şehir netleştirilir.",
        },
        {
          number: "02",
          title: "Kurum Araştırması",
          description: "Uygun okul, kreş ve kurslar tarihleriyle listelenir.",
        },
        {
          number: "03",
          title: "Dosya Hazırlığı",
          description: "Başvuru evrakları ve yazışmalar düzenlenir.",
        },
        {
          number: "04",
          title: "Süreç Takibi",
          description: "Randevular ve tamamlayıcı aile adımları izlenir.",
        },
      ],
    },
    inquiry: {
      heading: "Eğitim & Aile Desteği Talep Edin",
      description: "Hedef şehrinizi ve eğitim ihtiyacınızı paylaşın; birlikte planlayalım.",
      prepChecklistTitle: "Ön Görüşme İçin Gerekenler",
      prepChecklist: [
        "Hedef şehir/eyalet ve planlanan dönem",
        "İhtiyaç türü (kreş, okul, kurs, üniversite)",
        "Mevcut dil düzeyi",
      ],
      primaryCtaLabel: "Family & Education Talebi",
      secondaryCtaLabel: "Tüm Departmanlar",
      sensitiveDataReminder:
        "İlk iletişimde diploma aslı veya kimlik fotokopisi göndermeyiniz.",
    },
    legalBoundary: {
      heading: "Hizmet Sınırı",
      points: [
        "Organizasyonel araştırma ve başvuru koordinasyonu sunulur.",
        "Kabul, kontenjan ve denklik kararları yalnızca ilgili kurumlara aittir.",
      ],
    },
    relatedSlugs: ["relocation", "behoerdenservice", "translation-communication"],
  },

  "restaurant-kitchen": {
    slug: "restaurant-kitchen",
    inquiryTopic: "restaurant",
    icon: "utensilsCrossed",
    featured: true,
    heroImage: {
      src: "/images/restaurant-kitchen.jpg",
      alt: "Paslanmaz çelik hazırlık tezgahları, indüksiyon adası ve servis bankosuyla profesyonel ticari restoran mutfağı",
    },
    seo: {
      title: "Restaurant & Kitchen Solutions Almanya | Restoran & Mutfak Danışmanlığı",
      description:
        "Gerçek mutfak tecrübesiyle restoran açılışı, mutfak yerleşimi, ekipman seçimi, menü, reçete, gramaj, food cost, SOP ve açılış desteği.",
      keywords: [
        "Almanya restoran danışmanlığı",
        "Ticari mutfak yerleşimi ve iş akışı planlama",
        "Menü reçete gramaj food cost hesaplama",
        "Restoran açılış koordinasyonu ve SOP Almanya",
      ],
    },
    eyebrow: "Departman 09 · Amiral Uzmanlık",
    title: "Restaurant & Kitchen Solutions",
    lead: "Gerçek mutfak tecrübesiyle konseptten açılışa: ergonomik mutfak yerleşimi, doğru ekipman, standart reçete, food cost ve SOP kurulumu.",
    audienceBadge: "Restoran girişimcileri & mevcut işletmeler",
    whatIs: {
      heading: "Neler Yapıyoruz?",
      paragraphs: [
        "Teorik sunumlar yerine yoğun servis saatlerinde sahada çalışan sistemler kuruyoruz. Mutfak iş akışı, ekipman seçimi, reçete–gramaj standardı, food cost kontrolü ve açılış desteğini tek çatı altında sunuyoruz.",
      ],
      scopeTitle: "Operasyonel Hizmet Kapsamı",
      scopeItems: [
        "Konsept geliştirme & açılış koordinasyonu",
        "Sıcak/soğuk mutfak, bulaşık & depo yerleşimi",
        "Endüstriyel ekipman seçimi & tedarikçi takibi",
        "Menü geliştirme, reçete & gramaj standardı",
        "Detaylı food cost & kârlılık hesabı",
        "SOP el kitapları & mutfak görev dağılımı",
        "Salon–mutfak servis akışı planlaması",
        "Açılış öncesi deneme & ilk gün saha desteği",
      ],
    },
    targetAudience: {
      heading: "Kime Hitap Ediyor?",
      intro: "Yatırımını korumak ve kârlı mutfak kurmak isteyenler için.",
      groups: [
        {
          title: "Yeni Restoran Girişimcileri",
          description: "Yanlış ekipman ve verimsiz mutfak kurulumu riskini baştan önlemek isteyenler.",
        },
        {
          title: "Mevcut Restoranlar",
          description: "Food cost oranını düşürmek ve her gün aynı lezzet standardını yakalamak isteyenler.",
        },
        {
          title: "Çoklu Şube Markaları",
          description: "Tüm şubelerde tek standart reçete ve SOP sistemi kurmak isteyen yatırımcılar.",
        },
      ],
    },
    problemsSolved: {
      heading: "Çözdüğümüz Sorunlar",
      intro: "En maliyetli gastronomi hatalarını açılıştan önce önlüyoruz.",
      items: [
        {
          problem: "Sıkışık mutfak & yanlış ekipman yatırımı",
          solution: "Üretim akışınıza uygun sıcak, soğuk, bulaşık ve depo yerleşimi kuruyoruz.",
        },
        {
          problem: "Kontrolsüz food cost & değişen lezzet",
          solution: "Gramajlı standart reçete ve maliyet tablolarıyla kâr marjınızı koruyoruz.",
        },
        {
          problem: "Açılış kaosu & belirsiz ekip rolleri",
          solution: "Net SOP prosedürleri ve istasyon görev dağılımıyla kontrollü açılış sağlıyoruz.",
        },
      ],
    },
    process: {
      heading: "5 Adımda Açılış & Kurulum",
      intro: "Fikirden ilk servis akşamına kadar.",
      steps: [
        {
          number: "01",
          title: "Konsept & Mekân",
          description: "Konsept, kapasite ve mekân koşulları analiz edilir.",
        },
        {
          number: "02",
          title: "Mutfak & Ekipman",
          description: "Bölümlendirme, cihaz listesi ve tedarikçi kıyaslaması yapılır.",
        },
        {
          number: "03",
          title: "Menü & Food Cost",
          description: "Standart reçeteler, gramajlar ve maliyetler çıkarılır.",
        },
        {
          number: "04",
          title: "SOP & Kurulum",
          description: "SOP kitapları, ekip rolleri ve montaj takibi tamamlanır.",
        },
        {
          number: "05",
          title: "Deneme & Açılış",
          description: "Ön servis testleri ve açılış saha desteği verilir.",
        },
      ],
    },
    inquiry: {
      heading: "Restoran Projenizi Görüşelim",
      description: "Yeni açılış veya mevcut mutfak iyileştirmesi için bize ulaşın.",
      prepChecklistTitle: "Ön Görüşme İçin Gerekenler",
      prepChecklist: [
        "Konsept türü (restoran, kafe, üretim mutfağı)",
        "Şehir, yaklaşık alan / kapasite ve aşama",
        "İhtiyaç odağı (komple kurulum, yerleşim, menü/SOP)",
      ],
      primaryCtaLabel: "Restoran Projesi İçin Teklif Al",
      secondaryCtaLabel: "Tüm Departmanlar",
      sensitiveDataReminder:
        "Kira sözleşmesi veya teknik çizimleri ilk görüşmeden sonra paylaşmanız yeterlidir.",
    },
    legalBoundary: {
      heading: "Teknik Proje & Hukuki Sınır",
      points: [
        "Hizmetimiz operasyonel mutfak yerleşimi, konsept, reçete/food cost ve açılış koordinasyonunu kapsar.",
        "Ruhsat gerektiren mimari, statik, elektrik, gaz, yangın ve havalandırma projeleri yetkili mühendisler tarafından yürütülür.",
      ],
    },
    relatedSlugs: ["business-setup", "recruitment", "digital-ai"],
  },
};
