import type {
  ServiceDetailContent,
  ServiceSlug,
  ServicesOverviewContent,
} from "./types";

export const servicesOverviewTr: ServicesOverviewContent = {
  seo: {
    title: "Hizmetlerimiz – Dokuz Uzmanlık Departmanı | KALKAN PARTNER",
    description:
      "KALKAN PARTNER'in dokuz hizmet departmanı: Recruitment, Relocation, Behördenservice, Translation & Communication, Business Setup, Medical Tourism Coordination, Digital & AI, Family & Education ve Restaurant & Kitchen Solutions.",
    keywords: [
      "Almanya iş ve hizmet koordinasyonu",
      "Almanya Türkiye personel koordinasyonu",
      "Almanya taşınma desteği",
      "Almanya restoran ve mutfak danışmanlığı",
      "Dijital ve yapay zeka çözümleri Almanya",
    ],
  },
  eyebrow: "Hizmet Portföyümüz",
  title: "Yapılandırılmış uluslararası çözümler için dokuz uzman departman",
  subtitle:
    "Her departman net bir koordinasyon sürecini izler; şeffaf hukuki sınırlar, sahada uygulanabilir adımlar ve hem kurumsal hem bireysel müşteriler için doğrudan talep yolu sunar.",
  categories: [
    {
      id: "business-gastronomy",
      label: "Şirketler, Pazara Giriş & Gastronomi",
      description:
        "Almanya ve uluslararası pazarlardaki işverenler, girişimciler, restoran yatırımcıları ve KOBİ'ler için.",
      slugs: ["restaurant-kitchen", "recruitment", "business-setup", "digital-ai"],
    },
    {
      id: "mobility-administration",
      label: "Taşınma, İdari Süreçler & İletişim",
      description:
        "Almanya'ya başlangıç ve günlük resmi/ticari süreçler için düzenli organizasyon ve iletişim desteği.",
      slugs: ["relocation", "behoerdenservice", "translation-communication"],
    },
    {
      id: "family-health",
      label: "Aile, Eğitim & Sağlık Turizmi Koordinasyonu",
      description:
        "Aileler, öğrenciler ve uluslararası hastalar için yetkili iş ortaklarıyla net sınırlı süreç koordinasyonu.",
      slugs: ["family-education", "medical-tourism"],
    },
  ],
  cardReadMore: "Departman Detayını İncele",
  breadcrumbHome: "Ana Sayfa",
  breadcrumbServices: "Hizmetler",
  relatedHeading: "Tamamlayıcı Hizmet Departmanları",
  allServicesCta: "Tüm Dokuz Departmanı İncele",
  legalBannerTitle: "Hizmetlerimizin Açık Hukuki Çerçevesi",
  legalBannerBody:
    "KALKAN PARTNER organizasyon, iletişim ve süreç koordinasyonu hizmetleri sunar. Hukuki, vergisel, tıbbi, mimari veya izin gerektiren tüm faaliyetler yalnızca ilgili alanda yetkili iş ortakları tarafından yürütülür.",
};

export const servicesTr: Record<ServiceSlug, ServiceDetailContent> = {
  recruitment: {
    slug: "recruitment",
    inquiryTopic: "recruitment",
    icon: "users",
    seo: {
      title: "Recruitment & Uluslararası Aday Koordinasyonu | KALKAN PARTNER",
      description:
        "Almanya'daki işverenler ile Türkiye ve uluslararası pazarlardaki nitelikli adaylar arasında yapılandırılmış süreç ve işe giriş koordinasyonu.",
      keywords: [
        "Almanya Türkiye personel koordinasyonu",
        "Almanya işveren aday bulma desteği",
        "Gastronomi ve KOBİ uluslararası aday organizasyonu",
      ],
    },
    eyebrow: "Departman 01 · Recruitment",
    title: "Recruitment & Uluslararası Aday Koordinasyonu",
    lead: "Almanya'daki işverenleri Türkiye ve diğer ülkelerdeki nitelikli adaylarla buluşturuyor; CV ve belge düzeninden görüşme planlamasına ve işe giriş koordinasyonuna kadar süreci şeffaf biçimde yönetiyoruz.",
    audienceBadge: "Almanya'daki işverenler & uluslararası adaylar için",
    whatIs: {
      heading: "Hizmet nedir?",
      paragraphs: [
        "Recruitment departmanımız, Almanya'daki işletmelerin uluslararası aday arama ve değerlendirme süreçlerini düzenli bir yapıya kavuşturmasına yardımcı olur; dil ve organizasyon kaynaklı kopuklukları ortadan kaldırır.",
        "Dağınık başvurular yerine aday araştırmasını, CV ve belgelerin eksiksiz hazırlanmasını, işveren–aday görüşmelerinin planlanmasını ve işe başlangıç sürecindeki organizasyon adımlarını tek elden koordine ediyoruz.",
      ],
      scopeTitle: "Somut Koordinasyon Adımları",
      scopeItems: [
        "Türkiye ve diğer ülkelerden ihtiyaca uygun aday araştırması",
        "CV, sertifika ve temel başvuru belgelerinin toplanıp düzenli hale getirilmesi",
        "İşveren profiline göre aday ön organizasyonu",
        "Online veya yüz yüze işveren–aday görüşmelerinin planlanması",
        "Almanca–Türkçe çift dilli iletişim koordinasyonu",
        "İşe alım ve işe başlangıç (onboarding) sürecinin organizasyonel takibi",
      ],
    },
    targetAudience: {
      heading: "Kime hitap ediyor?",
      intro:
        "Somut personel ihtiyacı bulunan Alman işletmelerine ve sürecini profesyonelce yürütmek isteyen uluslararası adaylara.",
      groups: [
        {
          title: "Almanya'daki İşverenler",
          description:
            "Doğrudan kendi bünyesinde istihdam yapmak isteyen KOBİ'ler, restoranlar, üretim ve hizmet işletmeleri.",
        },
        {
          title: "Türkiye ve Yurt Dışındaki Adaylar",
          description:
            "Belgelerini Alman işveren standartlarına uygun düzenlemek ve şeffaf mülakat süreçlerine katılmak isteyen nitelikli adaylar.",
        },
        {
          title: "Yeni Açılış ve Büyüme Ekipleri",
          description:
            "Yeni şube veya operasyon açılışları için düzenli aday koordinasyonuna ihtiyaç duyan işletmeler.",
        },
      ],
    },
    problemsSolved: {
      heading: "Hangi sorunları çözüyor?",
      intro:
        "Sınır ötesi işe alım süreçleri çoğu zaman eksik belgeler, dil engelleri ve takipsiz kalan görüşmeler nedeniyle uzar.",
      items: [
        {
          problem: "Eksik veya karşılaştırılması zor aday dosyaları",
          solution:
            "CV ve temel belgeleri Alman işverenlerin hızlıca değerlendirebileceği tutarlı bir düzende topluyoruz.",
        },
        {
          problem: "İşveren ve aday arasında dil ve beklenti uyuşmazlıkları",
          solution:
            "İletişimi Almanca ve Türkçe olarak net biçimde koordine ederek her iki tarafın beklentisini baştan hizalıyoruz.",
        },
        {
          problem: "Görüşme planlama ve geri bildirimlerde zaman kaybı",
          solution:
            "Randevu, takip ve ön organizasyon adımlarını tek bir muhatap üzerinden yönetiyoruz.",
        },
      ],
    },
    process: {
      heading: "Süreç nasıl işliyor?",
      intro: "İhtiyaç analizinden işe başlangıç koordinasyonuna kadar dört net aşamada ilerliyoruz.",
      steps: [
        {
          number: "01",
          title: "Pozisyon ve Profil Analizi",
          description:
            "Görev tanımı, aranan nitelikler, dil seviyesi ve hedeflenen başlangıç zamanının netleştirilmesi.",
        },
        {
          number: "02",
          title: "Aday Araştırması & Belge Düzeni",
          description:
            "Uygun profillerin belirlenmesi, CV ve ilgili belgelerin düzenli biçimde hazırlanması.",
        },
        {
          number: "03",
          title: "Görüşme Koordinasyonu",
          description:
            "İşveren ve aday arasındaki tanışma ve değerlendirme görüşmelerinin planlanıp takip edilmesi.",
        },
        {
          number: "04",
          title: "Doğrudan Sözleşme & İşe Giriş Desteği",
          description:
            "Tarafların doğrudan anlaşması sonrasında işe başlangıç sürecindeki organizasyon adımlarının koordine edilmesi.",
        },
      ],
    },
    inquiry: {
      heading: "Personel Talebi Oluşturun veya Görüşme İsteyin",
      description:
        "Personel ihtiyacınızı veya aday profilinizi kısaca paylaşın; sürecin nasıl ilerleyebileceğine dair gerçekçi bir değerlendirmeyle dönüş yapalım.",
      prepChecklistTitle: "Ön Görüşme İçin Faydalı Bilgiler",
      prepChecklist: [
        "Aranan pozisyon(lar) veya uzmanlık alanı ve çalışılacak şehir",
        "Gerekli dil seviyesi ve hedeflenen zaman aralığı",
        "İşverenler için şirket adı ve doğrudan yetkili kişi bilgisi",
      ],
      primaryCtaLabel: "Recruitment Talebi Oluştur",
      secondaryCtaLabel: "Tüm Departmanları İncele",
      sensitiveDataReminder:
        "İlk iletişim aşamasında pasaport veya hassas kimlik kopyaları göndermeyiniz.",
    },
    legalBoundary: {
      heading: "Hukuki Sınırlar & Şeffaflık",
      points: [
        "İş sözleşmeleri her zaman doğrudan işveren ile çalışan arasında akdedilir.",
        "KALKAN PARTNER kesinlikle personel kiralama (Arbeitnehmerüberlassung) faaliyeti yürütmez.",
        "Vize, çalışma izni veya kesin iş garantisi verilmez; resmî kararlar yalnızca yetkili makamlara aittir.",
        "İşe yerleştirme ve adaydan ücret alınması konularında Alman mevzuatının öngördüğü sınırlar eksiksiz gözetilir.",
      ],
    },
    relatedSlugs: ["relocation", "behoerdenservice", "translation-communication"],
  },

  relocation: {
    slug: "relocation",
    inquiryTopic: "general",
    icon: "home",
    seo: {
      title: "Relocation – Almanya Taşınma & Yerleşim Koordinasyonu | KALKAN PARTNER",
      description:
        "Almanya'ya taşınan bireyler ve aileler için taşınma planı, ev arama iletişim koordinasyonu, okul/kreş araştırması ve abonelik organizasyonu.",
      keywords: [
        "Almanya relocation desteği",
        "Almanya'ya taşınma organizasyonu",
        "Türkiye'den Almanya'ya aile yerleşim koordinasyonu",
      ],
    },
    eyebrow: "Departman 02 · Relocation",
    title: "Relocation & Almanya Yerleşim Koordinasyonu",
    lead: "Almanya'ya taşınma sürecini rastlantıya bırakmadan; planlama, iletişim, randevu ve abonelik organizasyonlarıyla düzenli bir başlangıca dönüştürüyoruz.",
    audienceBadge: "Uzmanlar, bireyler & aileler için",
    whatIs: {
      heading: "Hizmet nedir?",
      paragraphs: [
        "Relocation departmanımız, Almanya'ya iş veya aile nedeniyle taşınan kişilere pratik ve adım adım organize edilmiş yerleşim desteği sunar.",
        "Taşınma öncesi takvimden ev arama sürecindeki iletişim ve randevu koordinasyonuna, okul ve kreş araştırmasından elektrik ile internet aboneliklerinin düzenlenmesine kadar günlük hayatın temel adımlarını planlıyoruz.",
      ],
      scopeTitle: "Somut Koordinasyon Adımları",
      scopeItems: [
        "Taşınma öncesi ve sonrası kişiselleştirilmiş yerleşim planı",
        "Ev arama sürecinde iletişim ve görüntüleme randevusu koordinasyonu",
        "Hedef bölgede okul, kreş ve bakım imkânlarının araştırılması",
        "Taşınma ve lojistik süreçlerinin organizasyonu",
        "Elektrik, doğalgaz ve internet aboneliklerinin başvuru koordinasyonu",
        "Almanya'daki ilk haftalar için genel yerleşim rehberliği",
      ],
    },
    targetAudience: {
      heading: "Kime hitap ediyor?",
      intro:
        "Yeni işine veya ailesinin uyum sürecine odaklanırken organizasyon yükünü azaltmak isteyen herkese.",
      groups: [
        {
          title: "Uluslararası Uzmanlar",
          description:
            "Almanya'da yeni görevine başlayan ve hızlıca düzenli bir yaşam kurmak isteyen çalışanlar.",
        },
        {
          title: "Taşınan Aileler",
          description:
            "Konut, okul/kreş ve günlük aboneliklerin eş zamanlı ve sorunsuz ilerlemesini isteyen aileler.",
        },
        {
          title: "Yurt Dışından Personel Getiren İşverenler",
          description:
            "Yeni çalışanlarının Almanya'ya yerleşim sürecini düzenli biçimde desteklemek isteyen şirketler.",
        },
      ],
    },
    problemsSolved: {
      heading: "Hangi sorunları çözüyor?",
      intro:
        "Almanya'daki ilk haftalarda dil bariyeri, katı randevu sistemleri ve birbirine bağlı resmi/günlük adımlar ciddi stres yaratır.",
      items: [
        {
          problem: "Hangi işlemin önce yapılacağının bilinmemesi",
          solution:
            "Tüm yerleşim adımlarını mantıklı bir sıraya koyan net bir yol haritası çıkarıyoruz.",
        },
        {
          problem: "Ev sahipleri ve abonelik sağlayıcılarıyla Almanca iletişim zorluğu",
          solution:
            "Başvuru yazışmalarını ve randevu iletişimini düzenli ve profesyonel biçimde koordine ediyoruz.",
        },
        {
          problem: "Dağınık okul, kreş ve bölge araştırmaları",
          solution:
            "Hedef şehrinize özel derlenmiş, karar vermeyi kolaylaştıran net bilgiler sunuyoruz.",
        },
      ],
    },
    process: {
      heading: "Süreç nasıl işliyor?",
      intro: "Taşınma öncesi hazırlıktan ilk ayın yerleşim düzenine kadar dört aşamada.",
      steps: [
        {
          number: "01",
          title: "Hedef Bölge ve İhtiyaç Analizi",
          description:
            "Hedef şehir, taşınma tarihi, aile yapısı ve öncelikli ihtiyaçların belirlenmesi.",
        },
        {
          number: "02",
          title: "Yerleşim Takviminin Hazırlanması",
          description:
            "Tüm organizasyon adımlarının ve gerekli belgelerin sıraya konması.",
        },
        {
          number: "03",
          title: "İletişim, Randevu & Araştırma",
          description:
            "Ev arama iletişimi, okul/kreş araştırması ve abonelik süreçlerinin koordine edilmesi.",
        },
        {
          number: "04",
          title: "Varış ve İlk Düzen Takibi",
          description:
            "Temel kurulumların tamamlanması ve açık kalan başlıkların düzenli takibi.",
        },
      ],
    },
    inquiry: {
      heading: "Taşınma Görüşmesi Talep Edin",
      description:
        "Hedef şehrinizi, taşınma tarihinizi ve aile yapınızı paylaşın; sizin için en uygun destek kapsamını birlikte planlayalım.",
      prepChecklistTitle: "Ön Görüşme İçin Faydalı Bilgiler",
      prepChecklist: [
        "Almanya'daki hedef şehir/bölge ve planlanan taşınma dönemi",
        "Bireysel mi yoksa aile olarak mı taşınıldığı (okul/kreş ihtiyacı)",
        "Öncelikli beklentiler (planlama, iletişim koordinasyonu, abonelikler)",
      ],
      primaryCtaLabel: "Relocation Görüşmesi İste",
      secondaryCtaLabel: "Tüm Departmanları İncele",
      sensitiveDataReminder:
        "İlk iletişimde kimlik, pasaport, banka veya gelir belgesi göndermeyiniz.",
    },
    legalBoundary: {
      heading: "Hukuki Sınır (§ 34c GewO)",
      points: [
        "KALKAN PARTNER izin gerektiren emlak aracılığı (§ 34c GewO) sunmaz ve kendisini lisanslı emlak komisyoncusu olarak konumlandırmaz.",
        "Hizmet kapsamı yalnızca taşınma planlaması, iletişim organizasyonu ve randevu koordinasyonu ile sınırlıdır.",
        "Kira, nakliye ve abonelik sözleşmeleri doğrudan müşteri ile ilgili sağlayıcı arasında yapılır.",
      ],
    },
    relatedSlugs: ["behoerdenservice", "family-education", "recruitment"],
  },

  behoerdenservice: {
    slug: "behoerdenservice",
    inquiryTopic: "general",
    icon: "landmark",
    seo: {
      title: "Behördenservice – Almanya İdari Süreç & Randevu Koordinasyonu | KALKAN PARTNER",
      description:
        "Almanya'da randevu organizasyonu, belge hazırlığı, dosya takibi ve geçerli vekâlet çerçevesinde idari iletişim koordinasyonu – hukuki danışmanlık olmadan.",
      keywords: [
        "Almanya resmi kurum randevu organizasyonu",
        "Behördenservice Türkçe destek Almanya",
        "Almanya belge hazırlığı ve dosya takibi",
      ],
    },
    eyebrow: "Departman 03 · Behördenservice",
    title: "Behördenservice & İdari Süreç Koordinasyonu",
    lead: "Almanya'daki resmî süreçlerde eksiksiz belge hazırlığı, düzenli randevu organizasyonu ve izin verilen kapsamda idari iletişim desteği.",
    audienceBadge: "Almanya'daki bireyler & işletmeler için",
    whatIs: {
      heading: "Hizmet nedir?",
      paragraphs: [
        "Almanya'da kamu kurumlarıyla yürütülen işlemlerde küçük bir belge eksikliği veya kaçırılan bir süre, sürecin haftalarca uzamasına yol açabilir.",
        "Behördenservice departmanımız hukuki danışmanlık alanına girmeden; belgelerin düzenli hazırlanmasını, randevuların planlanmasını, dosya takibini ve kurumun kabul ettiği ölçüde geçerli vekâletle idari iletişimi koordine eder.",
      ],
      scopeTitle: "Somut Koordinasyon Adımları",
      scopeItems: [
        "Randevu planlama ve süre takibi organizasyonu",
        "Başvuru ve işlem dosyalarının eksiksizlik kontrol listeleriyle hazırlanması",
        "Belgelerin zamanında teslim edilmesine yönelik süreç koordinasyonu",
        "Kurumca kabul edildiği ölçüde geçerli vekâletle idari yazışma koordinasyonu",
        "Uygun kapsamda dosya durumu (Sachstand) sorgulama ve takip desteği",
      ],
    },
    targetAudience: {
      heading: "Kime hitap ediyor?",
      intro:
        "İdari işlemlerini düzenli, eksiksiz ve zamanında yürütmek isteyen birey ve işletmelere.",
      groups: [
        {
          title: "Almanya'ya Yeni Gelen Bireyler & Aileler",
          description:
            "Standart idari randevular ve belge dosyaları için düzenli hazırlık desteğine ihtiyaç duyanlar.",
        },
        {
          title: "Yoğun Çalışan Profesyoneller",
          description:
            "Süreleri, resmî yazışmaları ve randevu takibini disiplinli biçimde yönetmek isteyenler.",
        },
        {
          title: "Şirketler & Girişimciler",
          description:
            "Avukat veya mali müşavir süreçlerine paralel olarak idari belge ve randevu organizasyonu arayan işletmeler.",
        },
      ],
    },
    problemsSolved: {
      heading: "Hangi sorunları çözüyor?",
      intro:
        "Çoğu aksaklık konunun özünden değil, eksik evrak veya anlaşılmayan kurumsal yazışmalardan kaynaklanır.",
      items: [
        {
          problem: "Randevuya eksik veya düzensiz evrakla gitmek",
          solution:
            "Randevu öncesinde tüm belgeleri açık bir kontrol listesiyle sıraya koyuyoruz.",
        },
        {
          problem: "Resmî mektuplardaki sürelerin ve taleplerin gözden kaçması",
          solution:
            "Süreleri takip ediyor ve idari yanıtların düzenli hazırlanmasını koordine ediyoruz.",
        },
        {
          problem: "Birden fazla kurumla yürüyen süreçlerde dağınıklık",
          solution:
            "Tüm randevu ve teslim adımlarını tek bir düzenli takip sisteminde topluyoruz.",
        },
      ],
    },
    process: {
      heading: "Süreç nasıl işliyor?",
      intro: "Hukuki sınırlar baştan netleştirilerek dört düzenli adımda.",
      steps: [
        {
          number: "01",
          title: "Kapsam ve Yetki Kontrolü",
          description:
            "Talebin idari organizasyon kapsamında olup olmadığının; avukat gerektirip gerektirmediğinin netleştirilmesi.",
        },
        {
          number: "02",
          title: "Belge Dosyasının Hazırlanması",
          description:
            "Gerekli evrakların eksiksiz ve incelemeye hazır düzende toplanması.",
        },
        {
          number: "03",
          title: "Randevu & Teslim Koordinasyonu",
          description:
            "Randevuların organize edilmesi ve teslim/yazışma adımlarının takip edilmesi.",
        },
        {
          number: "04",
          title: "Durum Takibi & Bilgilendirme",
          description:
            "Uygun kapsamda dosya durumu sorgulaması ve gelişmelerin şeffaf paylaşımı.",
        },
      ],
    },
    inquiry: {
      heading: "İdari Destek Talebi Gönderin",
      description:
        "İdari işleminizin türünü ve zaman çerçevenizi paylaşın; hangi adımlarda organizasyonel destek verebileceğimizi açıkça belirtelim.",
      prepChecklistTitle: "Ön Görüşme İçin Faydalı Bilgiler",
      prepChecklist: [
        "İdari işlemin genel konusu ve ilgili şehir/bölge",
        "Mevcut bir son tarih veya alınmış randevu olup olmadığı",
        "Sürece dahil bir avukat bulunup bulunmadığı",
      ],
      primaryCtaLabel: "Behördenservice Talebi",
      secondaryCtaLabel: "Tüm Departmanları İncele",
      sensitiveDataReminder:
        "İlk iletişimde kimlik fotokopisi, ikamet belgesi veya resmî karar metni göndermeyiniz.",
    },
    legalBoundary: {
      heading: "Alman RDG Mevzuatı Kapsamında Önemli Bilgilendirme",
      points: [
        "KALKAN PARTNER kesinlikle hukuki danışmanlık, hukuki temsil veya göç/yabancılar hukuku değerlendirmesi yapmaz (RDG).",
        "İdari iletişim yalnızca hukuken izin verilen çerçevede ve ilgili kurumun geçerli vekâleti kabul etmesi halinde yürütülür.",
        "Hukuki yorum, itiraz veya ihtilaflı süreçlerde mutlaka yetkili bir avukata yönlendirme yapılır.",
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
        "Almanca–Türkçe–İngilizce iş yazışmaları, genel belge çeviri organizasyonu ve gerektiğinde yeminli tercüman koordinasyonu.",
      keywords: [
        "Almanca Türkçe iş yazışması desteği",
        "Çeviri ve yeminli tercüman koordinasyonu Almanya",
        "Uluslararası kurumsal iletişim desteği",
      ],
    },
    eyebrow: "Departman 04 · Translation & Communication",
    title: "Translation & Communication (DE · TR · EN)",
    lead: "Almanya, Türkiye ve uluslararası iş ortakları arasında doğru ton, net terminoloji ve güvenilir tercüman koordinasyonu ile kusursuz iletişim.",
    audienceBadge: "Kurumsal & bireysel iletişim için (DE · TR · EN)",
    whatIs: {
      heading: "Hizmet nedir?",
      paragraphs: [
        "Uluslararası iş dünyasında yalnızca kelimeleri çevirmek yetmez; resmî üslup, ticari nezaket ve sektörel terminoloji güvenin temelidir.",
        "Almanca–Türkçe ve İngilizce iş yazışmalarını, CV ve kurumsal belge organizasyonunu yürütüyor; resmî onay gerektiren belgelerde ise yeminli ve yetkili tercümanların devreye alınmasını koordine ediyoruz.",
      ],
      scopeTitle: "Somut Koordinasyon Adımları",
      scopeItems: [
        "Almanca–Türkçe ve İngilizce iş yazışmaları ile toplantı hazırlığı",
        "Genel belge çevirilerinin organizasyonu ve kalite koordinasyonu",
        "CV, motivasyon mektubu ve şirket tanıtım metinlerinin yapılandırılması",
        "Resmî işlemlerde yeminli/yetkili tercüman koordinasyonu",
        "Tedarikçi, müşteri ve iş ortaklarıyla uluslararası iletişim desteği",
      ],
    },
    targetAudience: {
      heading: "Kime hitap ediyor?",
      intro:
        "Çok dilli süreçlerde net, saygın ve yanlış anlaşılmaya yer bırakmayan bir iletişim kurmak isteyenlere.",
      groups: [
        {
          title: "Almanya–Türkiye Ticaret Yapan Şirketler",
          description:
            "Teklif, sözleşme ön yazışması ve tedarikçi iletişimini profesyonelce yürütmek isteyen işletmeler.",
        },
        {
          title: "Bireyler & İş Arayan Uzmanlar",
          description:
            "CV, başvuru yazısı ve belge çeviri süreçlerini eksiksiz organize etmek isteyen adaylar.",
        },
        {
          title: "Uluslararası Proje Ekipleri",
          description:
            "Almanca, Türkçe ve İngilizce konuşan paydaşlar arasında kesintisiz bilgi akışı arayan projeler.",
        },
      ],
    },
    problemsSolved: {
      heading: "Hangi sorunları çözüyor?",
      intro:
        "Otomatik çeviri araçları kurumsal güveni zedeler ve kritik ticari ayrıntılarda hatalara yol açar.",
      items: [
        {
          problem: "Doğal olmayan veya hatalı iş yazışmaları",
          solution:
            "Alman ve Türk iş kültürüne uygun, açık ve profesyonel metinler hazırlıyoruz.",
        },
        {
          problem: "Hangi belgenin yeminli çeviri gerektirdiğinin bilinmemesi",
          solution:
            "Belgenin kullanım amacını netleştiriyor ve resmî gerekliliklerde yalnızca yeminli tercümanlarla koordinasyon sağlıyoruz.",
        },
        {
          problem: "Dil farkı yüzünden yavaşlayan iş ortaklıkları",
          solution:
            "Düzenli çok dilli iletişim desteğiyle karar ve geri bildirim süreçlerini hızlandırıyoruz.",
        },
      ],
    },
    process: {
      heading: "Süreç nasıl işliyor?",
      intro: "Hızlı kapsam belirleme, doğru uzman eşleştirmesi ve zamanında teslim.",
      steps: [
        {
          number: "01",
          title: "Dil ve Kullanım Amacı Analizi",
          description:
            "Dil yönü, belge türü ve resmî onay/yeminli çeviri gerekliliğinin belirlenmesi.",
        },
        {
          number: "02",
          title: "Kapsam & Takvim Onayı",
          description:
            "Süre, çalışma yöntemi ve gerekiyorsa yeminli tercüman koordinasyonunun netleştirilmesi.",
        },
        {
          number: "03",
          title: "Uygulama & Terminoloji Kontrolü",
          description:
            "Metinlerin hazırlanması veya ilgili uzman tercümanla sürecin yönetilmesi.",
        },
        {
          number: "04",
          title: "Teslim & Sürekli İletişim Desteği",
          description:
            "Belgelerin teslimi ve talep edilirse devam eden yazışmaların desteklenmesi.",
        },
      ],
    },
    inquiry: {
      heading: "Çeviri veya İletişim Desteği Talep Edin",
      description:
        "Dil yönünü, belge türünü ve hedef tarihinizi paylaşın; en uygun organizasyon planıyla dönüş yapalım.",
      prepChecklistTitle: "Ön Görüşme İçin Faydalı Bilgiler",
      prepChecklist: [
        "Dil kombinasyonu (ör. DE ↔ TR veya DE ↔ EN)",
        "Belge veya iletişim türü (ticari yazışma, CV, resmî belge)",
        "Hedeflenen teslim süresi",
      ],
      primaryCtaLabel: "Çeviri & İletişim Talebi",
      secondaryCtaLabel: "Tüm Departmanları İncele",
      sensitiveDataReminder:
        "Gizli belgeleri veya kimlik kopyalarını yalnızca güvenli aktarım yolu belirlendikten sonra paylaşınız.",
    },
    legalBoundary: {
      heading: "Yeminli Çeviri Sınırı",
      points: [
        "Her genel çeviri resmî/yeminli çeviri niteliği taşımaz.",
        "Resmî makamlarca talep edilen onaylı/yeminli çeviriler yalnızca yetkili ve yeminli tercümanlar tarafından düzenlenir; KALKAN PARTNER bu uzmanlarla koordinasyonu sağlar.",
      ],
    },
    relatedSlugs: ["behoerdenservice", "business-setup", "recruitment"],
  },

  "business-setup": {
    slug: "business-setup",
    inquiryTopic: "business",
    icon: "briefcase",
    seo: {
      title: "Business Setup – Almanya Şirket Kuruluşu & Pazar Koordinasyonu | KALKAN PARTNER",
      description:
        "Almanya pazarına girişte pazar ve tedarikçi araştırması, iş ortağı bağlantıları ile noter, avukat ve mali müşavir randevu koordinasyonu.",
      keywords: [
        "Almanya şirket kuruluş süreci organizasyonu",
        "Almanya pazar ve tedarikçi araştırması",
        "Türkiye'den Almanya pazarına giriş koordinasyonu",
      ],
    },
    eyebrow: "Departman 05 · Business Setup",
    title: "Business Setup & Almanya Pazarına Giriş Koordinasyonu",
    lead: "Almanya pazarında iş kurmak veya büyümek isteyen girişimciler için pazar araştırması, iş ortağı ve tedarikçi bağlantıları ile yetkili uzman randevularının tek elden organizasyonu.",
    audienceBadge: "Uluslararası girişimciler & şirketler için",
    whatIs: {
      heading: "Hizmet nedir?",
      paragraphs: [
        "Almanya pazarına sağlam bir giriş yapmak; doğru pazar verisi, güvenilir yerel bağlantılar ve noter, avukat ile mali müşavir süreçlerinin düzenli koordine edilmesini gerektirir.",
        "KALKAN PARTNER, yerel proje koordinatörünüz olarak araştırma, iletişim ve idari organizasyon yükünü üstlenir; hukuki ve vergisel adımlarda sizi doğru yetkili uzmanlarla buluşturur.",
      ],
      scopeTitle: "Somut Koordinasyon Adımları",
      scopeItems: [
        "Almanya pazarına yönelik sektör ve rekabet araştırması",
        "Potansiyel iş ortağı ve distribütör araştırması",
        "Tedarikçi araştırması ve ön teklif iletişimlerinin yürütülmesi",
        "Şirket kuruluş sürecindeki idari ve operasyonel adımların organizasyonu",
        "Noter, avukat ve mali müşavir (Steuerberater) randevularının koordinasyonu",
        "Uluslararası iş ağı bağlantıları ve proje takibi",
      ],
    },
    targetAudience: {
      heading: "Kime hitap ediyor?",
      intro:
        "Almanya'da deneme-yanılma yerine planlı ve kontrollü ilerlemek isteyen iş insanlarına.",
      groups: [
        {
          title: "Türkiye ve Yurt Dışındaki Şirketler",
          description:
            "Almanya'da şube, şirket veya satış/tedarik ağı kurmak isteyen mevcut işletmeler.",
        },
        {
          title: "Yeni Girişimciler",
          description:
            "Kuruluş adımlarını, yerel tedarikçileri ve uzman görüşmelerini düzenli yürütmek isteyen girişimciler.",
        },
        {
          title: "Ticaret ve Hizmet Markaları",
          description:
            "Almanya–Türkiye ekseninde güvenilir iş ortağı ve tedarikçi arayan kurumlar.",
        },
      ],
    },
    problemsSolved: {
      heading: "Hangi sorunları çözüyor?",
      intro:
        "Yerel ağ eksikliği ve koordinasyonsuz adımlar pazara giriş maliyetini ve süresini gereksiz yere artırır.",
      items: [
        {
          problem: "Almanya'daki kuruluş ve iş süreçlerinde doğru sıranın bilinmemesi",
          solution:
            "İdari adımları planlıyor, yetkili noter/avukat/mali müşavir görüşmelerini düzenli hazırlıyoruz.",
        },
        {
          problem: "Güvenilir tedarikçi ve iş ortağı bulmakta zorluk",
          solution:
            "Sektörünüze uygun yerel araştırma yaparak ilk ticari temasları koordine ediyoruz.",
        },
        {
          problem: "İki ülke arasında kopuk ilerleyen proje yönetimi",
          solution:
            "Çift dilli tek bir koordinasyon noktasıyla tüm paydaşları aynı takvimde tutuyoruz.",
        },
      ],
    },
    process: {
      heading: "Süreç nasıl işliyor?",
      intro: "Pazar analizinden uzman koordinasyonuna dört aşamalı yapı.",
      steps: [
        {
          number: "01",
          title: "İş Modeli & Hedef Analizi",
          description:
            "Sektör, hedef bölge, yatırım çerçevesi ve öncelikli ihtiyaçların netleştirilmesi.",
        },
        {
          number: "02",
          title: "Pazar, İş Ortağı & Tedarikçi Araştırması",
          description:
            "Karar vermeyi destekleyen yerel verilerin ve potansiyel temas listelerinin hazırlanması.",
        },
        {
          number: "03",
          title: "Yetkili Uzmanlarla Buluşturma",
          description:
            "Noter, avukat ve mali müşavir randevularının ve gerekli hazırlıkların organize edilmesi.",
        },
        {
          number: "04",
          title: "İdari Proje Koordinasyonu",
          description:
            "Operasyonel başlangıca kadar belirlenen kilometre taşlarının düzenli takibi.",
        },
      ],
    },
    inquiry: {
      heading: "Almanya Pazarına Girişinizi Görüşelim",
      description:
        "Sektörünüzü ve hedefinizi kısaca anlatın; ön görüşmede hangi koordinasyon adımlarının en yüksek faydayı sağlayacağını birlikte belirleyelim.",
      prepChecklistTitle: "Ön Görüşme İçin Faydalı Bilgiler",
      prepChecklist: [
        "Sektör, iş modeli ve Almanya'daki hedef bölge",
        "Projenin mevcut aşaması (fikir, mevcut şirket, genişleme)",
        "Öncelikli ihtiyaçlar (araştırma, tedarikçi, kuruluş organizasyonu)",
      ],
      primaryCtaLabel: "Business Setup Talebi",
      secondaryCtaLabel: "Tüm Departmanları İncele",
      sensitiveDataReminder:
        "İlk görüşme talebinde gizli şirket sözleşmeleri veya kimlik belgeleri paylaşmayınız.",
    },
    legalBoundary: {
      heading: "Mesleki Yetki Sınırları",
      points: [
        "KALKAN PARTNER organizasyonel proje koordinasyonu, pazar ve iş ortağı araştırması sunar.",
        "Hukuki danışmanlık, şirket ana sözleşmesi hazırlığı, vergi danışmanlığı ve noter işlemleri yalnızca ilgili alanda yetkili avukatlar, mali müşavirler ve noterler tarafından yürütülür.",
      ],
    },
    relatedSlugs: ["digital-ai", "restaurant-kitchen", "recruitment"],
  },

  "medical-tourism": {
    slug: "medical-tourism",
    inquiryTopic: "medical-tourism",
    icon: "heartPulse",
    seo: {
      title: "Medical Tourism Coordination – Türkiye Sağlık Turizmi Koordinasyonu | KALKAN PARTNER",
      description:
        "Türkiye'deki yetkili hastane ve sağlık turizmi kuruluşlarıyla iletişim, tercüme, teklif ve seyahat koordinasyonu – tıbbi teşhis veya tedavi sunmadan.",
      keywords: [
        "Türkiye sağlık turizmi koordinasyonu",
        "Almanya Türkiye hasta iletişim koordinasyonu",
        "Yetkili hastane bağlantı ve seyahat organizasyonu",
      ],
    },
    eyebrow: "Departman 06 · Medical Tourism Coordination",
    title: "Medical Tourism Coordination",
    lead: "Uluslararası hastaların Türkiye'deki yetkili hastane ve sağlık turizmi kuruluşlarıyla şeffaf, düzenli ve dil bariyeri olmadan iletişim kurmasını koordine ediyoruz.",
    audienceBadge: "Uluslararası hastalar & refakatçiler için",
    whatIs: {
      heading: "Hizmet nedir?",
      paragraphs: [
        "Yurt dışından Türkiye'de sağlık hizmeti almayı değerlendiren hastalar için en büyük ihtiyaç; güvenilir ve yetkili kurumlara ulaşmak, süreci kendi dilinde net biçimde takip etmek ve seyahat lojistiğini sorunsuz planlamaktır.",
        "KALKAN PARTNER hiçbir tıbbi müdahale veya değerlendirme yapmadan; yalnızca iletişim, tercüme, bilgi/teklif akışı ve seyahat organizasyonunu koordine eder.",
      ],
      scopeTitle: "Somut Koordinasyon Adımları",
      scopeItems: [
        "Türkiye'deki yetkili hastaneler ve sağlık turizmi aracı kuruluşlarıyla iletişim bağlantısı",
        "Hasta iletişim koordinasyonu ve organizasyonel soruların yönlendirilmesi",
        "Tercüme ve sözlü çeviri (tercüman) koordinasyonu",
        "Yetkili kuruluşlardan genel bilgi ve teklif taleplerinin organize edilmesi",
        "Uçuş, transfer ve konaklama koordinasyonu",
        "Süreç sonrası iletişim takibi ve geri bildirim/şikâyetlerin ilgili kuruluşa iletilmesi",
      ],
    },
    targetAudience: {
      heading: "Kime hitap ediyor?",
      intro:
        "Abartılı vaatler yerine şeffaf, yetkili ve düzenli bir organizasyon arayan uluslararası hastalara.",
      groups: [
        {
          title: "Almanya ve Avrupa'daki Hastalar",
          description:
            "Türkiye'deki yetkili sağlık kuruluşlarıyla doğrudan ve güvenli iletişim kurmak isteyen hastalar.",
        },
        {
          title: "Refakatçiler ve Aileler",
          description:
            "Seyahat, konaklama ve tercüme süreçlerinin baştan sona düzenli planlanmasını isteyen yakınlar.",
        },
      ],
    },
    problemsSolved: {
      heading: "Hangi sorunları çözüyor?",
      intro:
        "Sağlık turizminde en sık yaşanan sorunlar yetkisiz aracılar, dil kopukluğu ve plansız seyahat akışlarıdır.",
      items: [
        {
          problem: "Yetkili kurumları ayırt etmekte zorluk",
          solution:
            "Yalnızca Türkiye'deki sağlık turizmi yetkilendirme şartlarına sahip hastane ve aracı kuruluşlarla bağlantı kuruyoruz.",
        },
        {
          problem: "Dil bariyeri nedeniyle eksik veya yanlış anlaşılmalar",
          solution:
            "İletişim ve tercüman koordinasyonunu düzenli biçimde planlıyoruz.",
        },
        {
          problem: "Seyahat ve randevu lojistiğinin dağınık olması",
          solution:
            "Ulaşım, konaklama ve kurum randevularını uyumlu bir takvimde koordine ediyoruz.",
        },
      ],
    },
    process: {
      heading: "Süreç nasıl işliyor?",
      intro: "Tıbbi değerlendirme ile organizasyonu kesin çizgilerle ayıran dört adım.",
      steps: [
        {
          number: "01",
          title: "Organizasyonel Ön Görüşme",
          description:
            "Genel bilgi ihtiyacının, tercih edilen dilin ve olası zaman aralığının belirlenmesi.",
        },
        {
          number: "02",
          title: "Yetkili Kuruluşlarla Bağlantı",
          description:
            "Genel bilgi ve teklif talebinin Türkiye'deki yetkili hastane veya sağlık turizmi kuruluşuna iletilmesi.",
        },
        {
          number: "03",
          title: "Doğrudan Tıbbi Değerlendirme",
          description:
            "Tüm tıbbi sorular, teşhis ve tedavi planlaması yalnızca hasta ile ilgili hekim/sağlık kuruluşu arasında yürütülür.",
        },
        {
          number: "04",
          title: "Seyahat, Tercüme & Takip Koordinasyonu",
          description:
            "Seyahat, konaklama ve dil desteğinin organize edilmesi; süreç sonrası iletişim takibi.",
        },
      ],
    },
    inquiry: {
      heading: "Koordinasyon Görüşmesi Talep Edin",
      description:
        "Genel bilgi talebinizi ve tercih ettiğiniz dili paylaşın. Web sitemiz üzerinden tıbbi rapor veya sağlık verisi toplanmaz.",
      prepChecklistTitle: "Ön Görüşme İçin Faydalı Bilgiler",
      prepChecklist: [
        "Genel ilgi alanı ve Türkiye'de tercih edilen şehir/bölge",
        "Tercih edilen iletişim dili (DE / TR / EN)",
        "Planlanan yaklaşık seyahat dönemi",
      ],
      primaryCtaLabel: "Koordinasyon Talebi Gönder",
      secondaryCtaLabel: "Tüm Departmanları İncele",
      sensitiveDataReminder:
        "ÖNEMLİ: Standart iletişim formları üzerinden asla epikriz, tahlil, röntgen, tıbbi rapor veya pasaport göndermeyiniz.",
    },
    legalBoundary: {
      heading: "Tıbbi & Hukuki Sınır Bilgilendirmesi",
      points: [
        "KALKAN PARTNER teşhis koymaz, reçete yazmaz, tıbbi tedavi uygulamaz ve herhangi bir tıbbi sonuç garantisi vermez.",
        "Doğrulanmamış tıbbi iddialar veya tedavi başarı oranları yayınlanmaz.",
        "Tüm koordinasyon yalnızca Türkiye'deki sağlık turizmi yetkilendirme mevzuatına uygun yetkili hastane ve kuruluşlarla yürütülür.",
      ],
    },
    relatedSlugs: ["translation-communication", "relocation", "family-education"],
  },

  "digital-ai": {
    slug: "digital-ai",
    inquiryTopic: "business",
    icon: "cpu",
    seo: {
      title: "Digital & AI Solutions – Web, SEO, Local SEO, GEO & Otomasyon | KALKAN PARTNER",
      description:
        "Almanya ve uluslararası pazarlar için kurumsal web sitesi, SEO, Local SEO, GEO (yapay zekâ araması), chatbot ve iş süreci otomasyonu.",
      keywords: [
        "Almanya kurumsal web tasarım ve SEO",
        "Local SEO ve GEO yapay zeka görünürlüğü",
        "KOBİ yapay zeka chatbot ve otomasyon",
      ],
    },
    eyebrow: "Departman 07 · Digital & AI Solutions",
    title: "Digital & AI Solutions – Ölçülebilir Dijital Büyüme",
    lead: "Güven veren kurumsal web siteleri, Google ve yapay zekâ aramalarında (GEO) yüksek görünürlük ve işletmenize gerçekten zaman kazandıran pratik yapay zekâ otomasyonları.",
    audienceBadge: "KOBİ'ler, hizmet şirketleri, gastronomi & markalar için",
    whatIs: {
      heading: "Hizmet nedir?",
      paragraphs: [
        "Müşteriler artık bir firmayla iletişime geçmeden önce Google'da ve yapay zekâ asistanlarında araştırma yapıyor. Eski bir web sitesi veya dağınık dijital varlık, potansiyel müşterilerin daha ilk saniyede kaybedilmesine neden olur.",
        "Digital & AI Solutions departmanımız; güçlü kurumsal tasarım, Almanca–Türkçe SEO & Local SEO, yapay zekâ arama optimizasyonu (GEO) ve iş süreçlerini hızlandıran otomasyon çözümlerini tek çatı altında sunar.",
      ],
      scopeTitle: "Somut Hizmet Kapsamı",
      scopeItems: [
        "Çok dilli, hızlı ve mobil öncelikli kurumsal web sitesi tasarımı ve geliştirme",
        "Almanya ve Türkiye hedef kitlelerine özel SEO stratejisi",
        "Local SEO ve Google Business Profile uyumlu yerel görünürlük altyapısı",
        "GEO (Generative Engine Optimization) ile yapay zekâ aramalarında görünürlük",
        "Sosyal medya yönetimi, dijital marka kimliği ve içerik üretimi",
        "Yapay zekâ kurulumu, ekip eğitimi, chatbot ve iş süreci otomasyonu",
      ],
    },
    targetAudience: {
      heading: "Kime hitap ediyor?",
      intro:
        "Dijital varlığını gerçek müşteri kazanım kanalına ve verimlilik aracına dönüştürmek isteyen işletmelere.",
      groups: [
        {
          title: "KOBİ'ler ve Hizmet İşletmeleri",
          description:
            "Bölgesinde ve sektöründe daha fazla nitelikli müşteri talebi almak isteyen şirketler.",
        },
        {
          title: "Restoran ve Yeni Açılış Markaları",
          description:
            "Açılış gününden itibaren profesyonel web sitesi, yerel Google görünürlüğü ve güçlü marka kimliği isteyen işletmeler.",
        },
        {
          title: "Operasyonunu Hızlandırmak İsteyen Ekipler",
          description:
            "Tekrarlayan müşteri sorularını ve iş akışlarını yapay zekâ ve otomasyonla hafifletmek isteyen firmalar.",
        },
      ],
    },
    problemsSolved: {
      heading: "Hangi sorunları çözüyor?",
      intro:
        "Sadece görsel olarak yapılan ama müşteri getirmeyen dijital projeler boşa harcanan bütçedir.",
      items: [
        {
          problem: "Web sitesinin müşteri talebine dönüşmemesi",
          solution:
            "Bilgi mimarisini, hız performansını ve talep akışlarını doğrudan müşteri kazanımına göre kurguluyoruz.",
        },
        {
          problem: "Google'da ve yapay zekâ yanıtlarında görünmez kalmak",
          solution:
            "Teknik SEO, yerel sinyaller (Local SEO) ve yapılandırılmış GEO içerikleriyle kalıcı görünürlük inşa ediyoruz.",
        },
        {
          problem: "Tekrarlayan dijital işlerde yüksek zaman kaybı",
          solution:
            "Karmaşık olmayan, ekibin gerçekten kullanabileceği chatbot ve otomasyon akışları kuruyoruz.",
        },
      ],
    },
    process: {
      heading: "Süreç nasıl işliyor?",
      intro: "Modüler, ölçeklenebilir ve gereksiz maliyet yaratmayan dört adım.",
      steps: [
        {
          number: "01",
          title: "Dijital Analiz & Hedef Belirleme",
          description:
            "Mevcut dijital durumun, hedef kitlenin, arama potansiyelinin ve otomasyon fırsatlarının analizi.",
        },
        {
          number: "02",
          title: "Mimari, Tasarım & SEO Planı",
          description:
            "Sayfa yapısı, marka dili, anahtar kelime stratejisi ve teknik altyapının tasarlanması.",
        },
        {
          number: "03",
          title: "Geliştirme & Entegrasyon",
          description:
            "Web sitesi, içerik, chatbot veya otomasyonların yüksek performans ve DSGVO uyumuyla hayata geçirilmesi.",
        },
        {
          number: "04",
          title: "Teslim, Eğitim & Sürekli Geliştirme",
          description:
            "Ekip eğitimi ve talep edilirse SEO, içerik ve yapay zekâ süreçlerinin düzenli geliştirilmesi.",
        },
      ],
    },
    inquiry: {
      heading: "Dijital veya Yapay Zekâ Projenizi Konuşalım",
      description:
        "Kurumsal web sitesi, SEO/Local SEO, GEO görünürlüğü veya yapay zekâ otomasyonu için projenize uygun net bir yol haritası çıkaralım.",
      prepChecklistTitle: "Ön Görüşme İçin Faydalı Bilgiler",
      prepChecklist: [
        "Varsa mevcut web siteniz ve hedef müşteri bölgeniz",
        "Öncelikli ihtiyaç (web sitesi, SEO/Local SEO, GEO, chatbot/otomasyon)",
        "Hedeflenen yayın veya başlangıç tarihi",
      ],
      primaryCtaLabel: "Dijital Proje Talebi",
      secondaryCtaLabel: "Tüm Departmanları İncele",
      sensitiveDataReminder:
        "İlk iletişim aşamasında sunucu şifreleri veya API anahtarları paylaşmayınız.",
    },
    legalBoundary: {
      heading: "Veri Koruma & Teknik Sorumluluk",
      points: [
        "Tüm web, analitik ve yapay zekâ sistemleri DSGVO (veri koruma) ilkelerine uygun mimariyle tasarlanır.",
        "Impressum, gizlilik politikası ve sektöre özel yasal metinlerin hukuki onayı ilgili avukat veya veri koruma uzmanına aittir.",
      ],
    },
    relatedSlugs: ["business-setup", "restaurant-kitchen", "translation-communication"],
  },

  "family-education": {
    slug: "family-education",
    inquiryTopic: "general",
    icon: "graduationCap",
    seo: {
      title: "Family & Education – Almanya Okul, Kreş & Öğrenci Koordinasyonu | KALKAN PARTNER",
      description:
        "Almanya'da okul ve kreş araştırması, kurs bilgileri, öğrenci başvuru koordinasyonu ve aile yerleşim organizasyonu.",
      keywords: [
        "Almanya okul ve kreş araştırması",
        "Almanya öğrenci başvurusu koordinasyonu",
        "Aile yerleşim ve eğitim desteği Almanya",
      ],
    },
    eyebrow: "Departman 08 · Family & Education",
    title: "Family & Education – Aileler ve Öğrenciler İçin Rehberlik",
    lead: "Almanya'da okul, kreş, dil/meslek kursu ve üniversite başvuru süreçlerinde düzenli araştırma, dosya organizasyonu ve aile yerleşim desteği.",
    audienceBadge: "Aileler, öğrenciler & kursiyerler için",
    whatIs: {
      heading: "Hizmet nedir?",
      paragraphs: [
        "Almanya'da eğitim ve çocuk bakım sistemi eyaletlere ve belediyelere göre değişiklik gösterir. Başvuru takvimleri, okul türleri ve gerekli belgeler özellikle yeni gelen aileler ve öğrenciler için karmaşık olabilir.",
        "Family & Education departmanımız; bölgesel araştırma, başvuru belgelerinin düzenlenmesi ve kurumlarla iletişimin koordine edilmesiyle ailelerin ve öğrencilerin önünü açar.",
      ],
      scopeTitle: "Somut Koordinasyon Adımları",
      scopeItems: [
        "Hedef bölgede okul türleri ve uygun okulların araştırılması",
        "Kreş (Kita) seçenekleri ve başvuru süreçlerinin araştırılması",
        "Dil kursu, mesleki kurs ve eğitim programları hakkında derli toplu bilgi",
        "Öğrenci başvuru dosyalarının ve takviminin organizasyonu",
        "Aile yerleşim sürecine entegre organizasyon koordinasyonu",
        "Öğrenci ve aileler için konaklama iletişimi desteği",
      ],
    },
    targetAudience: {
      heading: "Kime hitap ediyor?",
      intro:
        "Eğitim ve aile yerleşimi kararlarını güvenilir bilgi ve düzenli takvimle yönetmek isteyenlere.",
      groups: [
        {
          title: "Çocuklu Aileler",
          description:
            "Taşınacakları şehirde kreş, ilkokul veya ortaöğretim seçeneklerini zamanında planlamak isteyen ebeveynler.",
        },
        {
          title: "Uluslararası Öğrenciler",
          description:
            "Almanya'daki üniversite veya dil kursu başvuru adımlarını eksiksiz organize etmek isteyen adaylar.",
        },
        {
          title: "Eğitim ve Mesleki Gelişim Arayanlar",
          description:
            "Doğru kurs ve eğitim kurumlarını karşılaştırmalı biçimde incelemek isteyen kursiyerler.",
        },
      ],
    },
    problemsSolved: {
      heading: "Hangi sorunları çözüyor?",
      intro:
        "Eğitim süreçlerinde kaçırılan tek bir başvuru tarihi tüm bir dönemin veya yılın kaybına neden olabilir.",
      items: [
        {
          problem: "Eyalet ve belediyelere göre değişen okul/kreş başvuru kuralları",
          solution:
            "Hedef bölgenize özel seçenekleri, başvuru portallarını ve kritik tarihleri netleştiriyoruz.",
        },
        {
          problem: "Öğrenci başvurularında eksik veya yanlış sıralanmış evraklar",
          solution:
            "Açık belge kontrol listeleriyle başvuru dosyanızın zamanında hazırlanmasını koordine ediyoruz.",
        },
        {
          problem: "Eğitim kurumlarıyla Almanca iletişim zorluğu",
          solution:
            "Resmî ve düzenli Almanca yazışma ile randevu iletişimine destek sağlıyoruz.",
        },
      ],
    },
    process: {
      heading: "Süreç nasıl işliyor?",
      intro: "Eğitim takvimine uyumlu, dört adımlı düzenli planlama.",
      steps: [
        {
          number: "01",
          title: "Eğitim Hedefi & Bölge Analizi",
          description:
            "Yaş, eğitim düzeyi, hedef şehir ve planlanan başlangıç döneminin belirlenmesi.",
        },
        {
          number: "02",
          title: "Kurum & Takvim Araştırması",
          description:
            "Uygun okul, kreş, kurs veya başvuru yollarının tarihleriyle birlikte sunulması.",
        },
        {
          number: "03",
          title: "Dosya & İletişim Hazırlığı",
          description:
            "Başvuru veya kayıt için gereken belgelerin ve yazışmaların düzenlenmesi.",
        },
        {
          number: "04",
          title: "Süreç Takibi",
          description:
            "Randevuların, geri dönüşlerin ve tamamlayıcı yerleşim adımlarının takibi.",
        },
      ],
    },
    inquiry: {
      heading: "Eğitim & Aile Desteği Talep Edin",
      description:
        "Hedef şehrinizi ve eğitim ihtiyacınızı paylaşın; süreci nasıl organize edebileceğimizi birlikte değerlendirelim.",
      prepChecklistTitle: "Ön Görüşme İçin Faydalı Bilgiler",
      prepChecklist: [
        "Almanya'daki hedef şehir/eyalet ve planlanan dönem",
        "İhtiyaç türü (kreş, okul, dil kursu, üniversite başvurusu)",
        "Mevcut dil seviyesi ve genel eğitim durumu",
      ],
      primaryCtaLabel: "Family & Education Talebi",
      secondaryCtaLabel: "Tüm Departmanları İncele",
      sensitiveDataReminder:
        "İlk iletişimde diploma aslı, doğum belgesi veya kimlik fotokopisi göndermeyiniz.",
    },
    legalBoundary: {
      heading: "Hizmet Sınırı",
      points: [
        "KALKAN PARTNER organizasyonel araştırma ve başvuru süreci koordinasyonu sunar.",
        "Kayıt, kontenjan, kabul ve denklik kararları yalnızca ilgili eğitim kurumları ve yetkili makamlarca verilir.",
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
      alt: "Paslanmaz çelik hazırlık tezgahları, indüksiyon adası ve düzenli servis bankosuyla profesyonel ticari restoran mutfağı",
    },
    seo: {
      title: "Restaurant & Kitchen Solutions Almanya | Restoran & Mutfak Danışmanlığı",
      description:
        "Almanya'da restoran açılışı, mutfak yerleşimi ve iş akışı, ekipman seçimi, menü, reçete, gramaj, food cost, SOP ve açılış desteği.",
      keywords: [
        "Almanya restoran danışmanlığı",
        "Ticari mutfak yerleşimi ve iş akışı planlama",
        "Menü reçete gramaj food cost hesaplama",
        "Restoran açılış koordinasyonu ve SOP Almanya",
      ],
    },
    eyebrow: "Departman 09 · Amiral Uzmanlık Alanımız",
    title: "Restaurant & Kitchen Solutions",
    lead: "Fikirden kârlı ve standart işleyen bir mutfağa: gerçek mutfak tecrübesine dayalı restoran açılış koordinasyonu, mutfak iş akışı, ekipman seçimi, menü–reçete–food cost ve SOP kurulumu.",
    audienceBadge: "Restoran girişimcileri, yatırımcılar & mevcut işletmeler için",
    whatIs: {
      heading: "Hizmet nedir?",
      paragraphs: [
        "Restaurant & Kitchen Solutions, KALKAN PARTNER'in sahadaki gerçek mutfak tecrübesiyle ayrışan en güçlü uzmanlık alanıdır. Teorik sunumlar yerine, yoğun servis saatlerinde tıkır tıkır işleyen, maliyeti kontrol altında tutan pratik çözümler kuruyoruz.",
        "Konsept geliştirmeden sıcak–soğuk mutfak, bulaşıkhane ve depo yerleşimine; ekipman ve tedarikçi seçiminden menü, reçete, gramaj, food cost hesabı, SOP dokümantasyonu ve salon servis akışına kadar tüm operasyonel mimariyi birlikte kurguluyoruz.",
      ],
      scopeTitle: "Kapsamlı Operasyonel & Organizasyonel Hizmetler",
      scopeItems: [
        "Restoran konsept geliştirme ve operasyonel model kurulumu",
        "Restoran açılış sürecinin baştan sona organizasyonel koordinasyonu",
        "Mutfak yerleşim planlaması ve ergonomik iş akışı (workflow) organizasyonu",
        "Sıcak mutfak, soğuk mutfak, servis bankosu (pass), bulaşıkhane ve depo alanlarının düzenlenmesi",
        "İhtiyaca uygun endüstriyel ekipman araştırması, seçimi ve teklif karşılaştırması",
        "Tedarikçi ve ekipman kurulum koordinasyonu",
        "Menü geliştirme, reçete ve porsiyon gramaj standardizasyonu",
        "Detaylı food cost (hammadde maliyeti) ve kârlılık hesaplamaları",
        "Standart İşletme Prosedürleri (SOP) dokümantasyonu",
        "Mutfak personel görev dağılımı ile salon ve servis iş akışı planlaması",
        "Açılış öncesi deneme süreçleri ve açılış dönemi operasyon desteği",
      ],
    },
    targetAudience: {
      heading: "Kime hitap ediyor?",
      intro:
        "Yatırımını tesadüfe bırakmak istemeyen girişimcilere ve kârlılığını artırmak isteyen mevcut restoran işletmelerine.",
      groups: [
        {
          title: "Yeni Restoran Açan Girişimciler",
          description:
            "Yanlış ekipman alımı, verimsiz mutfak yerleşimi ve belirsiz maliyet hesabından açılış öncesinde korunmak isteyen yatırımcılar.",
        },
        {
          title: "Mevcut Restoran & Kafe İşletmeleri",
          description:
            "Food cost oranı yüksek olan, standart lezzet tutturmakta zorlanan veya mutfak içi yoğunluğu düzene sokmak isteyen işletmeler.",
        },
        {
          title: "Şubeleşen & Çoklu Konsept Markaları",
          description:
            "Her şubede aynı kaliteyi verecek reçete, gramaj ve SOP sistemleri kurmak isteyen markalar.",
        },
      ],
    },
    problemsSolved: {
      heading: "Hangi sorunları çözüyor?",
      intro:
        "Gastronomideki en pahalı hatalar ya yanlış kurulan mutfakta ya da standartlaştırılmamış reçete ve maliyet yönetiminde ortaya çıkar.",
      items: [
        {
          problem: "Gereksiz yatırım yapılan yanlış ekipmanlar ve sıkışık mutfak akışı",
          solution:
            "Sıcak, soğuk, bulaşık ve depo alanlarını menünüzün gerçek üretim akışına göre optimize ediyoruz.",
        },
        {
          problem: "Ustaya bağımlı lezzet ve kontrolsüz hammadde maliyeti (Food Cost)",
          solution:
            "Gramajlı standart reçeteler ve net food cost tablolarıyla hem lezzeti hem kâr marjını güvenceye alıyoruz.",
        },
        {
          problem: "Açılış kaosları ve belirsiz ekip görev dağılımı",
          solution:
            "SOP dokümanları, net istasyon sorumlulukları ve mutfak–salon servis akışıyla kontrollü açılış sağlıyoruz.",
        },
      ],
    },
    process: {
      heading: "Süreç nasıl işliyor?",
      intro: "Konseptten ilk servis gününe kadar beş net aşamada ilerliyoruz.",
      steps: [
        {
          number: "01",
          title: "Konsept, Mekân & Kapasite Analizi",
          description:
            "Hedef konsept, oturma kapasitesi, menü yönü ve mevcut mekân koşullarının değerlendirilmesi.",
        },
        {
          number: "02",
          title: "Mutfak Akışı & Ekipman Planlaması",
          description:
            "Sıcak/soğuk/bulaşık/depo zonlaması, ihtiyaç bazlı ekipman listesi ve tedarikçi araştırması.",
        },
        {
          number: "03",
          title: "Menü, Reçete & Food Cost Yapısı",
          description:
            "Menü mühendisliği, standart reçete kartları, porsiyon gramajları ve maliyet hesaplamaları.",
        },
        {
          number: "04",
          title: "SOP, Ekip Yapısı & Kurulum Koordinasyonu",
          description:
            "Çalışma prosedürlerinin yazılması, mutfak/salon görev paylaşımı ve tedarikçi-kurulum takibi.",
        },
        {
          number: "05",
          title: "Ön Deneme & Açılış Desteği",
          description:
            "Açılış öncesi mutfak ve servis denemeleri, akış ince ayarları ve başlangıç dönemi saha desteği.",
        },
      ],
    },
    inquiry: {
      heading: "Restoran Projeniz İçin Görüşme Talep Edin",
      description:
        "Yeni bir restoran açıyorsanız veya mevcut mutfağınızı daha kârlı ve düzenli hale getirmek istiyorsanız projenizi birlikte değerlendirelim.",
      prepChecklistTitle: "Ön Görüşme İçin Faydalı Bilgiler",
      prepChecklist: [
        "Konsept türü (restoran, kafe, hızlı servis, üretim mutfağı vb.)",
        "Şehir, yaklaşık alan / kapasite ve projenin mevcut aşaması",
        "İhtiyaç duyulan kapsam (komple kurulum, mutfak yerleşimi, menü/food cost, SOP)",
      ],
      primaryCtaLabel: "Restoran Projesi İçin Teklif Al",
      secondaryCtaLabel: "Tüm Departmanları İncele",
      sensitiveDataReminder:
        "Kira sözleşmeleri veya detaylı teknik çizimleri ilk ön görüşmeden sonra paylaşmanız yeterlidir.",
    },
    legalBoundary: {
      heading: "Teknik Proje & Hukuki Sınır Bilgilendirmesi",
      points: [
        "Hizmetlerimiz operasyonel restoran organizasyonu, mutfak iş akışı, konsept, maliyetlendirme ve açılış koordinasyonunu kapsar.",
        "Ruhsat ve yönetmelik gereği yetki gerektiren mimari, statik, elektrik, gaz, yangın güvenliği ve havalandırma projeleri yalnızca ilgili alanda yetkili mühendisler, mimarlar ve uzman firmalar tarafından yürütülür.",
      ],
    },
    relatedSlugs: ["business-setup", "recruitment", "digital-ai"],
  },
};
