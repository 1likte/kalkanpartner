import type {
  ServiceDetailContent,
  ServiceSlug,
  ServicesOverviewContent,
} from "./types";

export const servicesOverviewDe: ServicesOverviewContent = {
  seo: {
    title: "Unsere Leistungen – Neun Fachbereiche | KALKAN PARTNER",
    description:
      "Alle neun Fachbereiche von KALKAN PARTNER im Überblick: Recruitment, Relocation, Behördenservice, Translation & Communication, Business Setup, Medical Tourism Coordination, Digital & AI, Family & Education sowie Restaurant & Kitchen Solutions.",
    keywords: [
      "Unternehmensservice Deutschland",
      "Internationale Koordination Deutschland Türkei",
      "Personalvermittlung Koordination",
      "Relocation Service Deutschland",
      "Restaurantberatung Deutschland",
    ],
  },
  eyebrow: "Leistungsportfolio",
  title: "Neun Fachbereiche für strukturierte internationale Lösungen",
  subtitle:
    "Jeder Fachbereich folgt einem klaren Koordinationsprozess – mit transparenter Leistungsabgrenzung, praxisnahen Abläufen und direktem Anfrageweg für Unternehmen und Privatkunden.",
  categories: [
    {
      id: "business-gastronomy",
      label: "Unternehmen, Markteintritt & Gastronomie",
      description:
        "Für Arbeitgeber, Gründer, Gastronomiebetriebe und mittelständische Unternehmen in Deutschland und internationalen Märkten.",
      slugs: ["restaurant-kitchen", "recruitment", "business-setup", "digital-ai"],
    },
    {
      id: "mobility-administration",
      label: "Mobilität, Behörden & Kommunikation",
      description:
        "Strukturierte Organisations- und Kommunikationshilfe für den Start und Alltag in Deutschland.",
      slugs: ["relocation", "behoerdenservice", "translation-communication"],
    },
    {
      id: "family-health",
      label: "Familie, Bildung & Gesundheitstourismus-Koordination",
      description:
        "Zuverlässige Begleitung für Familien, Studierende und internationale Patienten mit klarer Partnerabgrenzung.",
      slugs: ["family-education", "medical-tourism"],
    },
  ],
  cardReadMore: "Fachbereich im Detail",
  breadcrumbHome: "Startseite",
  breadcrumbServices: "Leistungen",
  relatedHeading: "Ergänzende Fachbereiche",
  allServicesCta: "Alle neun Fachbereiche ansehen",
  legalBannerTitle: "Klare rechtliche Einordnung unserer Leistungen",
  legalBannerBody:
    "KALKAN PARTNER erbringt organisatorische, kommunikative und koordinierende Dienstleistungen. Wo Rechts-, Steuer-, medizinische, architektonische oder erlaubnispflichtige Tätigkeiten erforderlich sind, werden ausschließlich entsprechend zugelassene Fachpartner eingebunden.",
};

export const servicesDe: Record<ServiceSlug, ServiceDetailContent> = {
  recruitment: {
    slug: "recruitment",
    inquiryTopic: "recruitment",
    icon: "users",
    seo: {
      title: "Recruitment & Internationale Kandidatenkoordination | KALKAN PARTNER",
      description:
        "Strukturierte Personal- und Kandidatenkoordination zwischen der Türkei, internationalen Märkten und Arbeitgebern in Deutschland – ohne Arbeitnehmerüberlassung.",
      keywords: [
        "Personalvermittlung Deutschland Türkei",
        "Internationale Fachkräfte Koordination Deutschland",
        "Recruitment Gastronomie und Mittelstand",
      ],
    },
    eyebrow: "Fachbereich 01 · Recruitment",
    title: "Recruitment & Internationale Kandidatenkoordination",
    lead: "Wir verbinden Arbeitgeber in Deutschland mit qualifizierten Kandidaten aus der Türkei und weiteren internationalen Märkten – strukturiert, zweisprachig und transparent bis zum Arbeitsantritt.",
    audienceBadge: "Für Arbeitgeber in Deutschland & internationale Kandidaten",
    whatIs: {
      heading: "Was ist dieser Service?",
      paragraphs: [
        "Unser Bereich Recruitment unterstützt Unternehmen in Deutschland dabei, internationale Bewerbungs- und Auswahlprozesse geordnet aufzusetzen und sprachliche sowie organisatorische Hürden zu überwinden.",
        "Statt unstrukturierter Einzelkontakte koordinieren wir die Kandidatenansprache, die Vollständigkeit der Bewerbungsunterlagen, die Terminierung von Vorstellungsgesprächen sowie die organisatorische Abstimmung bis zum geplanten Arbeitsbeginn.",
      ],
      scopeTitle: "Konkrete Koordinationsleistungen",
      scopeItems: [
        "Kandidaten-Sourcing in der Türkei und weiteren internationalen Märkten",
        "Sammlung und strukturierte Aufbereitung von Lebensläufen und Nachweisen",
        "Organisatorische Vorqualifizierung nach dem Anforderungsprofil des Arbeitgebers",
        "Koordination und Terminierung von Online- und Vor-Ort-Gesprächen",
        "Zweisprachige Kommunikation zwischen Arbeitgeber und Kandidat",
        "Strukturierte Begleitung des Auswahl- und Onboarding-Ablaufs",
      ],
    },
    targetAudience: {
      heading: "Für wen ist dieser Service gedacht?",
      intro:
        "Unser Recruitment-Service richtet sich gezielt an Organisationen mit konkretem Fachkräftebedarf sowie an qualifizierte internationale Bewerber.",
      groups: [
        {
          title: "Arbeitgeber in Deutschland",
          description:
            "Mittelständische Unternehmen, Gastronomiebetriebe, Handwerks- und Dienstleistungsbetriebe, die internationale Kandidaten direkt einstellen möchten.",
        },
        {
          title: "Qualifizierte Kandidaten aus der Türkei & dem Ausland",
          description:
            "Fachkräfte, die ihre Unterlagen strukturiert aufbereiten und transparente Gespräche mit interessierten Arbeitgebern in Deutschland führen möchten.",
        },
        {
          title: "Wachsende Projekt- und Eröffnungsteams",
          description:
            "Unternehmen, die für neue Standorte oder Betriebseröffnungen verlässliche Abläufe in der Personalgewinnung benötigen.",
        },
      ],
    },
    problemsSolved: {
      heading: "Welche Herausforderungen lösen wir?",
      intro:
        "Internationale Einstellungsprozesse geraten häufig ins Stocken, weil Unterlagen unvollständig sind oder Kommunikation über Ländergrenzen hinweg abbricht.",
      items: [
        {
          problem: "Unvollständige oder schwer vergleichbare Bewerbungsunterlagen",
          solution:
            "Wir sammeln und strukturieren Lebensläufe, Zeugnisse und relevante Angaben nach einem einheitlichen Format für deutsche Arbeitgeber.",
        },
        {
          problem: "Sprachbarrieren und Missverständnisse im Auswahlprozess",
          solution:
            "Wir begleiten die Kommunikation klar auf Deutsch und Türkisch, damit Erwartungen beider Seiten realistisch abgeglichen werden.",
        },
        {
          problem: "Hoher Zeitaufwand für Terminierung und Rückfragen",
          solution:
            "Wir bündeln Terminabstimmungen, Rückmeldungen und organisatorische Schritte an einer zentralen Stelle.",
        },
      ],
    },
    process: {
      heading: "Wie läuft der Prozess ab?",
      intro:
        "Vom ersten Anforderungsprofil bis zur koordinierten Ankunft arbeiten wir in vier nachvollziehbaren Phasen.",
      steps: [
        {
          number: "01",
          title: "Anforderungsprofil klären",
          description:
            "Gemeinsame Definition von Aufgabenbereich, Qualifikationen, Sprachanforderungen und gewünschtem Startzeitraum.",
        },
        {
          number: "02",
          title: "Sourcing & Unterlagenvorbereitung",
          description:
            "Identifikation passender Profile sowie strukturierte Zusammenstellung von Lebensläufen und relevanten Dokumenten.",
        },
        {
          number: "03",
          title: "Gesprächskoordination",
          description:
            "Terminierung und kommunikative Begleitung der Kennenlern- und Fachgespräche zwischen Arbeitgeber und Kandidat.",
        },
        {
          number: "04",
          title: "Direktvertrag & Onboarding-Organisation",
          description:
            "Nach direkter Einigung zwischen Arbeitgeber und Kandidat koordinieren wir die organisatorischen Schritte bis zum Arbeitsantritt.",
        },
      ],
    },
    inquiry: {
      heading: "Personalbedarf melden oder Gespräch anfragen",
      description:
        "Beschreiben Sie uns kurz Ihren Personalbedarf oder Ihr Profil. Wir melden uns mit einer realistischen Einschätzung des Ablaufs und der nächsten Schritte.",
      prepChecklistTitle: "Hilfreiche Angaben für das Erstgespräch",
      prepChecklist: [
        "Gesuchte Position(en) bzw. Fachrichtung und gewünschter Standort",
        "Erforderliche Sprachkenntnisse und geplanter Zeitrahmen",
        "Unternehmensname und direkter Ansprechpartner (bei Arbeitgebern)",
      ],
      primaryCtaLabel: "Recruitment-Anfrage starten",
      secondaryCtaLabel: "Alle Fachbereiche ansehen",
      sensitiveDataReminder:
        "Bitte senden Sie über erste Kontaktanfragen keine Reisepasskopien oder sensiblen Ausweisdokumente.",
    },
    legalBoundary: {
      heading: "Rechtliche Abgrenzung & Transparenz",
      points: [
        "Arbeitsverträge werden ausschließlich direkt zwischen dem jeweiligen Arbeitgeber und dem Arbeitnehmer geschlossen.",
        "KALKAN PARTNER betreibt ausdrücklich keine Arbeitnehmerüberlassung (Zeitarbeit).",
        "Es werden keine Zusagen oder Garantien für Visa, Arbeitserlaubnisse oder konkrete Arbeitsverträge abgegeben; behördliche Entscheidungen liegen allein bei den zuständigen Stellen.",
        "Die deutschen gesetzlichen Vorgaben zur Arbeitsvermittlung sowie etwaige Beschränkungen bei Vermittlungsvergütungen gegenüber Arbeitssuchenden werden strikt beachtet.",
      ],
    },
    relatedSlugs: ["relocation", "behoerdenservice", "translation-communication"],
  },

  relocation: {
    slug: "relocation",
    inquiryTopic: "general",
    icon: "home",
    seo: {
      title: "Relocation Service Deutschland | KALKAN PARTNER",
      description:
        "Strukturierte Relocation-Koordination für Einzelpersonen, Fachkräfte und Familien beim Umzug nach Deutschland – Planung, Kommunikation, Schule/Kita und Versorger.",
      keywords: [
        "Relocation Service Deutschland",
        "Umzug nach Deutschland Organisation",
        "Relocation Unterstützung Familien Türkei Deutschland",
      ],
    },
    eyebrow: "Fachbereich 02 · Relocation",
    title: "Relocation & Ankunfts-Koordination in Deutschland",
    lead: "Ein beruflicher oder familiärer Neustart in Deutschland erfordert zahlreiche abgestimmte Schritte. Wir organisieren Planung, Kommunikation und Alltagsanmeldungen strukturiert aus einer Hand.",
    audienceBadge: "Für Fachkräfte, Privatpersonen & Familien",
    whatIs: {
      heading: "Was ist dieser Service?",
      paragraphs: [
        "Unser Relocation-Service begleitet Einzelpersonen, Fachkräfte und Familien organisatorisch beim Ankommen in Deutschland. Ziel ist es, den Übergang planbar zu gestalten und typische Startverzögerungen zu vermeiden.",
        "Wir unterstützen bei der zeitlichen Ablaufplanung, übernehmen die organisatorische Kommunikation rund um Besichtigungstermine, recherchieren passende Bildungs- und Betreuungsangebote und koordinieren grundlegende Haushaltsanmeldungen.",
      ],
      scopeTitle: "Konkrete Koordinationsleistungen",
      scopeItems: [
        "Individuelle Relocation- und Zeitplanung vor und nach der Ankunft",
        "Kommunikations- und Terminierungskoordination im Rahmen der Wohnungssuche",
        "Recherche zu Schulen, Kindergärten und Betreuungsangeboten vor Ort",
        "Koordination von Umzugs- und Logistikabläufen",
        "Organisatorische Unterstützung bei Strom-, Gas- und Internetanmeldungen",
        "Allgemeine Orientierungshilfe für die ersten Wochen in Deutschland",
      ],
    },
    targetAudience: {
      heading: "Für wen ist dieser Service gedacht?",
      intro:
        "Besonders wertvoll für alle, die sich parallel auf einen neuen Job oder Familienalltag konzentrieren müssen.",
      groups: [
        {
          title: "Internationale Fachkräfte",
          description:
            "Neu eingestellte Mitarbeiter, die sich rasch und geordnet an ihrem neuen Arbeitsort einleben möchten.",
        },
        {
          title: "Umziehende Familien",
          description:
            "Haushalte mit Kindern, bei denen Wohnen, Kita/Schule und Alltagsanmeldungen sauber ineinandergreifen müssen.",
        },
        {
          title: "Arbeitgeber mit internationalen Neueinstellungen",
          description:
            "Unternehmen, die ihren neuen Mitarbeitern einen verlässlichen organisatorischen Start in Deutschland ermöglichen möchten.",
        },
      ],
    },
    problemsSolved: {
      heading: "Welche Herausforderungen lösen wir?",
      intro:
        "In den ersten Wochen in Deutschland treffen Sprachbarrieren, enge Fristen und unbekannte Abläufe gleichzeitig aufeinander.",
      items: [
        {
          problem: "Unübersichtliche Reihenfolge bei Anmeldungen und Verträgen",
          solution:
            "Wir erstellen eine klare Schritt-für-Schritt-Reihenfolge, damit keine Fristen übersehen werden.",
        },
        {
          problem: "Sprachliche Hürden bei Vermieter- oder Anbieterkontakten",
          solution:
            "Wir bereiten Anschreiben strukturiert vor und koordinieren Rückfragen und Termine auf Deutsch.",
        },
        {
          problem: "Zeitverlust durch verstreute Recherchen",
          solution:
            "Wir bündeln relevante Informationen zu Schulen, Kitas und Versorgern kompakt für Ihre Entscheidung.",
        },
      ],
    },
    process: {
      heading: "Wie läuft der Prozess ab?",
      intro: "Von der ersten Planung vor Abreise bis zur stabilen Alltagsorganisation.",
      steps: [
        {
          number: "01",
          title: "Ausgangslage & Zielregion erfassen",
          description:
            "Abstimmung von Umzugszeitraum, Zielstadt, Haushaltsgröße und dringendsten organisatorischen Prioritäten.",
        },
        {
          number: "02",
          title: "Relocation-Fahrplan erstellen",
          description:
            "Strukturierung aller Aufgaben in sinnvoller Reihenfolge inklusive benötigter Nachweise.",
        },
        {
          number: "03",
          title: "Kommunikation & Terminierung",
          description:
            "Begleitung von Anfragen, Terminabstimmungen sowie Recherche zu Versorgern, Schulen und Kitas.",
        },
        {
          number: "04",
          title: "Ankunfts- & Startbegleitung",
          description:
            "Geordnete Umsetzung der ersten Anmeldungen und Übergabe einer klaren Übersicht aller laufenden Punkte.",
        },
      ],
    },
    inquiry: {
      heading: "Relocation-Erstgespräch anfragen",
      description:
        "Teilen Sie uns Zielregion, Zeitrahmen und Haushaltsgröße mit. Wir zeigen Ihnen transparent, welche organisatorischen Bausteine sinnvoll sind.",
      prepChecklistTitle: "Hilfreiche Angaben für das Erstgespräch",
      prepChecklist: [
        "Zielstadt oder Region in Deutschland und geplanter Umzugszeitraum",
        "Einzelperson, Paar oder Familie (ggf. Schul-/Kita-Bedarf)",
        "Gewünschte Schwerpunkte (Planung, Terminierung, Versorger, Familie)",
      ],
      primaryCtaLabel: "Relocation-Gespräch anfragen",
      secondaryCtaLabel: "Alle Fachbereiche ansehen",
      sensitiveDataReminder:
        "Bitte übermitteln Sie im Erstkontakt keine Ausweis-, Konto- oder Schufa-Dokumente.",
    },
    legalBoundary: {
      heading: "Rechtliche Abgrenzung (§ 34c GewO)",
      points: [
        "KALKAN PARTNER tritt nicht als zugelassener Immobilienmakler auf und erbringt keine erlaubnispflichtige Wohnungsvermittlung im Sinne des § 34c GewO.",
        "Unsere Leistung beschränkt sich strikt auf organisatorische Planung, Kommunikationsunterstützung und Terminkoordination.",
        "Miet-, Versorgungs- und Umzugsverträge werden ausschließlich direkt zwischen dem Kunden und dem jeweiligen Anbieter abgeschlossen.",
      ],
    },
    relatedSlugs: ["behoerdenservice", "family-education", "recruitment"],
  },

  behoerdenservice: {
    slug: "behoerdenservice",
    inquiryTopic: "general",
    icon: "landmark",
    seo: {
      title: "Behördenservice & Administrative Koordination Deutschland | KALKAN PARTNER",
      description:
        "Terminorganisation, Dokumentenvorbereitung, Einreichungskoordination und Sachstandsanfragen in Deutschland – klar abgegrenzt ohne Rechtsberatung.",
      keywords: [
        "Behördenservice Deutschland",
        "Dokumentenvorbereitung und Terminorganisation",
        "Administrative Unterstützung Deutschland",
      ],
    },
    eyebrow: "Fachbereich 03 · Behördenservice",
    title: "Behördenservice & Administrative Koordination",
    lead: "Strukturierte Vorbereitung von Unterlagen, verlässliche Terminorganisation und klare administrative Kommunikation – im rechtlich zulässigen Rahmen und auf Wunsch mit gültiger Vollmacht.",
    audienceBadge: "Für Privatpersonen & Unternehmen in Deutschland",
    whatIs: {
      heading: "Was ist dieser Service?",
      paragraphs: [
        "Formale Abläufe mit öffentlichen Stellen in Deutschland erfordern Vollständigkeit, korrekte Zuordnung von Nachweisen und rechtzeitige Terminplanung. Bereits kleine formale Lücken führen oft zu wochenlangen Verzögerungen.",
        "Unser Behördenservice entlastet Sie organisatorisch: Wir sortieren und strukturieren Ihre Unterlagen, koordinieren Termine und unterstützen bei der sachlichen administrativen Kommunikation dort, wo dies ohne Rechtsdienstleistung zulässig ist.",
      ],
      scopeTitle: "Konkrete Koordinationsleistungen",
      scopeItems: [
        "Koordination und Überwachung von Behördenterminen",
        "Strukturierte Vorbereitung und Vollständigkeits-Checklisten für Unterlagen",
        "Organisation der fristgerechten Dokumenteneinreichung",
        "Administrative Korrespondenz im Rahmen gültiger Vollmachten, sofern von der Stelle akzeptiert",
        "Strukturierte Sachstandsanfragen und Nachverfolgung offener Rückmeldungen",
      ],
    },
    targetAudience: {
      heading: "Für wen ist dieser Service gedacht?",
      intro:
        "Für Menschen und Betriebe, die ihre administrativen Abläufe sauber vorbereiten möchten.",
      groups: [
        {
          title: "Neu angekommene Privatpersonen & Familien",
          description:
            "Unterstützung bei der geordneten Vorbereitung von Standard-Terminen und Dokumentenmappen.",
        },
        {
          title: "Berufstätige mit wenig Zeitfenster",
          description:
            "Personen, die Struktur in Fristen, Schreiben und Terminabläufe bringen möchten.",
        },
        {
          title: "Unternehmen & Gründer",
          description:
            "Administrative Zuarbeit bei Terminen und Dokumentenlisten im Zusammenspiel mit Steuerberatern oder Rechtsanwälten.",
        },
      ],
    },
    problemsSolved: {
      heading: "Welche Herausforderungen lösen wir?",
      intro:
        "Viele Verzögerungen entstehen nicht in der Sache selbst, sondern durch fehlende Nachweise oder unklare Schreiben.",
      items: [
        {
          problem: "Unvollständige Unterlagen beim Termin",
          solution:
            "Wir strukturieren alle erforderlichen Dokumente vorab anhand einer übersichtlichen Checkliste.",
        },
        {
          problem: "Verpasste Rückfragen oder unklare Behördenbriefe",
          solution:
            "Wir helfen bei der organisatorischen Einordnung von Fristen und bereiten sachliche Antworten bzw. Rückfragen vor.",
        },
        {
          problem: "Fehlende Übersicht bei mehreren parallelen Stellen",
          solution:
            "Alle Termine, Einreichungen und offenen Punkte werden geordnet dokumentiert.",
        },
      ],
    },
    process: {
      heading: "Wie läuft der Prozess ab?",
      intro: "Klar strukturiert und jederzeit rechtlich sauber abgegrenzt.",
      steps: [
        {
          number: "01",
          title: "Anliegen & Zuständigkeit prüfen",
          description:
            "Wir klären, welche organisatorische Unterstützung zulässig ist und ob ggf. ein Rechtsanwalt eingeschaltet werden muss.",
        },
        {
          number: "02",
          title: "Dokumentenmappe strukturieren",
          description:
            "Zusammenstellung aller benötigten Nachweise in klarer, prüffreundlicher Reihenfolge.",
        },
        {
          number: "03",
          title: "Termin- & Einreichungskoordination",
          description:
            "Abstimmung von Terminen und geordnete Begleitung der Einreichung bzw. schriftlichen Rückfragen.",
        },
        {
          number: "04",
          title: "Nachverfolgung & Dokumentation",
          description:
            "Strukturierte Sachstandsanfragen im zulässigen Rahmen und transparente Information über den Stand.",
        },
      ],
    },
    inquiry: {
      heading: "Administrative Unterstützung anfragen",
      description:
        "Schildern Sie uns kurz die Art Ihres administrativen Anliegens und den zeitlichen Rahmen. Wir prüfen offen, wie wir organisatorisch unterstützen können.",
      prepChecklistTitle: "Hilfreiche Angaben für das Erstgespräch",
      prepChecklist: [
        "Art des administrativen Vorgangs und zuständige Stadt/Region",
        "Bestehende Fristen oder bereits vereinbarte Termine",
        "Ob bereits eine rechtliche Vertretung eingebunden ist",
      ],
      primaryCtaLabel: "Behördenservice anfragen",
      secondaryCtaLabel: "Alle Fachbereiche ansehen",
      sensitiveDataReminder:
        "Senden Sie über die erste Anfrage bitte keine Ausweiskopien, Meldebescheinigungen oder Behördenbescheide.",
    },
    legalBoundary: {
      heading: "Wichtiger Hinweis zum Rechtsdienstleistungsgesetz (RDG)",
      points: [
        "KALKAN PARTNER erbringt ausdrücklich keine Rechtsberatung, keine rechtliche Vertretung und keine aufenthalts- oder ausländerrechtliche Prüfung im Sinne des RDG.",
        "Administrative Kommunikation erfolgt ausschließlich im rechtlich zulässigen Umfang und nur dann mit Vollmacht, wenn die jeweilige Behörde dies anerkennt.",
        "Bei rechtlichen Fragestellungen, Widersprüchen oder strittigen Verfahren verweisen wir konsequent an zugelassene Rechtsanwälte.",
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
        "Professionelle deutsch-türkisch-englische Geschäftskommunikation, Dokumentenkoordination und Vermittlung ermächtigter Übersetzer.",
      keywords: [
        "Deutsch Türkisch Geschäftskommunikation",
        "Übersetzungskoordination Deutschland Türkei",
        "Beglaubigte Übersetzer Koordination",
      ],
    },
    eyebrow: "Fachbereich 04 · Translation & Communication",
    title: "Translation & Communication (DE · TR · EN)",
    lead: "Präzise, kultursichere Kommunikation zwischen Deutschland, der Türkei und internationalen Partnern – von der Geschäftskorrespondenz bis zur Koordination beeidigter Übersetzer.",
    audienceBadge: "Für Unternehmen & Privatkunden (DE · TR · EN)",
    whatIs: {
      heading: "Was ist dieser Service?",
      paragraphs: [
        "Gute Übersetzung und Geschäftskommunikation bedeuten mehr als wörtliches Übertragen: Tonfall, Fachbegriffe und geschäftliche Gepflogenheiten entscheiden über Vertrauen und Verhandlungserfolg.",
        "Wir unterstützen bei allgemeiner deutsch-türkischer und englischer Geschäftskommunikation, strukturieren Bewerbungs- und Unternehmensdokumente und koordinieren bei amtlichem Bedarf zugelassene, ermächtigte Übersetzer.",
      ],
      scopeTitle: "Konkrete Koordinationsleistungen",
      scopeItems: [
        "Deutsch–Türkisch und Englisch Geschäftskorrespondenz sowie Gesprächsvorbereitung",
        "Koordination allgemeiner Dokumentenübersetzungen",
        "Aufbereitung und sprachliche Strukturierung von Lebensläufen und Firmenprofilen",
        "Einbindung öffentlich bestellter und ermächtigter Übersetzer bei amtlichen Dokumenten",
        "Internationale Kommunikationsbegleitung zwischen Lieferanten, Kunden und Partnern",
      ],
    },
    targetAudience: {
      heading: "Für wen ist dieser Service gedacht?",
      intro:
        "Für alle, die in mehreren Sprachen professionell, eindeutig und verlässlich auftreten möchten.",
      groups: [
        {
          title: "Unternehmen im DE–TR-Handel",
          description:
            "Betriebe, die Angebote, Lieferantenabsprachen und Partnerkommunikation professionell führen möchten.",
        },
        {
          title: "Privatpersonen & Fachkräfte",
          description:
            "Bewerber und Familien, die Lebensläufe, Anschreiben oder Dokumentenübersetzungen sauber koordinieren lassen möchten.",
        },
        {
          title: "Internationale Projektteams",
          description:
            "Projekte, bei denen deutsch-, türkisch- und englischsprachige Beteiligte synchron arbeiten müssen.",
        },
      ],
    },
    problemsSolved: {
      heading: "Welche Herausforderungen lösen wir?",
      intro:
        "Maschinelle Übersetzungen wirken im Geschäftsleben oft unprofessionell und erzeugen kostspielige Missverständnisse.",
      items: [
        {
          problem: "Unpräzise oder unnatürliche Geschäftstexte",
          solution:
            "Wir formulieren klare, geschäftstaugliche Texte im passenden Ton für den deutschen und türkischen Markt.",
        },
        {
          problem: "Unklarheit, wann eine beglaubigte Übersetzung nötig ist",
          solution:
            "Wir klären den Bedarf vorab und koordinieren für amtliche Zwecke ausschließlich entsprechend ermächtigte Übersetzer.",
        },
        {
          problem: "Stockende Abstimmungen zwischen internationalen Partnern",
          solution:
            "Durch strukturierte mehrsprachige Kommunikationsbegleitung bleiben Rückfragen und Vereinbarungen eindeutig.",
        },
      ],
    },
    process: {
      heading: "Wie läuft der Prozess ab?",
      intro: "Schnelle Einschätzung, klare Zuordnung und pünktliche Lieferung.",
      steps: [
        {
          number: "01",
          title: "Bedarf & Verwendungszweck klären",
          description:
            "Festlegung von Sprachkombination, Textart und der Frage, ob eine amtliche Beglaubigung erforderlich ist.",
        },
        {
          number: "02",
          title: "Umfang & Zeitplan abstimmen",
          description:
            "Transparente Rückmeldung zu Bearbeitungsdauer, Ablauf und ggf. einzubindendem beeidigtem Übersetzer.",
        },
        {
          number: "03",
          title: "Umsetzung & Qualitätsprüfung",
          description:
            "Sprachliche Ausarbeitung bzw. Koordination mit dem Fachübersetzer unter Einhaltung der Fachterminologie.",
        },
        {
          number: "04",
          title: "Übergabe & Anschlusskommunikation",
          description:
            "Bereitstellung der fertigen Dokumente und auf Wunsch fortlaufende Begleitung der Korrespondenz.",
        },
      ],
    },
    inquiry: {
      heading: "Übersetzungs- oder Kommunikationsbedarf anfragen",
      description:
        "Nennen Sie uns Sprachrichtung, Dokumentenart und gewünschten Termin. Wir melden uns mit einem klaren Vorschlag zum weiteren Vorgehen.",
      prepChecklistTitle: "Hilfreiche Angaben für das Erstgespräch",
      prepChecklist: [
        "Sprachkombination (z. B. DE ↔ TR oder DE ↔ EN)",
        "Art der Unterlagen oder Kommunikation (geschäftlich, CV, amtlich)",
        "Gewünschter Zeitraum bzw. Abgabetermin",
      ],
      primaryCtaLabel: "Kommunikationshilfe anfragen",
      secondaryCtaLabel: "Alle Fachbereiche ansehen",
      sensitiveDataReminder:
        "Senden Sie vertrauliche Originaldokumente oder Ausweise erst nach abgestimmtem, sicherem Übertragungsweg.",
    },
    legalBoundary: {
      heading: "Transparenz bei beglaubigten Übersetzungen",
      points: [
        "Nicht jede allgemeine Übersetzung ist eine amtlich beglaubigte Übersetzung.",
        "Amtlich anerkannte bzw. beglaubigte Übersetzungen werden ausschließlich durch entsprechend öffentlich bestellte und ermächtigte Übersetzer erstellt, deren Einbindung wir koordinieren.",
      ],
    },
    relatedSlugs: ["behoerdenservice", "business-setup", "recruitment"],
  },

  "business-setup": {
    slug: "business-setup",
    inquiryTopic: "business",
    icon: "briefcase",
    seo: {
      title: "Business Setup & Markteintritt Deutschland | KALKAN PARTNER",
      description:
        "Strukturierte Koordination für Ihren Markteintritt und Ihre Unternehmensgründung in Deutschland – Marktrecherche, Partner- und Lieferantensuche, Terminierung mit Notaren, Anwälten und Steuerberatern.",
      keywords: [
        "Unternehmensgründung Deutschland Koordination",
        "Markteintritt Deutschland aus der Türkei",
        "Geschäftspartner und Lieferantenrecherche Deutschland",
      ],
    },
    eyebrow: "Fachbereich 05 · Business Setup",
    title: "Business Setup & Markteintritt in Deutschland",
    lead: "Wir begleiten internationale Unternehmer organisatorisch beim Aufbau ihrer Geschäftsaktivitäten in Deutschland – von der Marktrecherche über Lieferantenkontakte bis zur strukturierten Terminierung mit zugelassenen Fachberatern.",
    audienceBadge: "Für internationale Unternehmer, Gründer & Unternehmen",
    whatIs: {
      heading: "Was ist dieser Service?",
      paragraphs: [
        "Der Eintritt in den deutschen Markt verlangt eine saubere Vorbereitung: realistische Marktinformationen, verlässliche Geschäftspartner und ein geordnetes Zusammenspiel mit Notaren, Steuerberatern und Rechtsanwälten.",
        "KALKAN PARTNER fungiert als Ihr operativer Projektkoordinator vor Ort, bereitet Entscheidungsgrundlagen vor und steuert die organisatorischen Abläufe zwischen allen Beteiligten.",
      ],
      scopeTitle: "Konkrete Koordinationsleistungen",
      scopeItems: [
        "Strukturierte Markt- und Wettbewerbsrecherche für Deutschland",
        "Gezielte Suche und Ansprache potenzieller Geschäftspartner",
        "Lieferantenrecherche und organisatorische Angebotsvorbereitung",
        "Ablaufkoordination rund um den Unternehmensgründungsprozess",
        "Terminierung und Vorbereitung von Gesprächen mit Notaren, Rechtsanwälten und Steuerberatern",
        "Aufbau internationaler Geschäftsverbindungen und administrative Projektbegleitung",
      ],
    },
    targetAudience: {
      heading: "Für wen ist dieser Service gedacht?",
      intro:
        "Für unternehmerisch denkende Entscheider, die den deutschen Markt strukturiert statt nach dem Prinzip Versuch und Irrtum erschließen möchten.",
      groups: [
        {
          title: "Türkische & internationale Unternehmen",
          description:
            "Betriebe, die eine Niederlassung, Tochtergesellschaft oder Vertriebsstruktur in Deutschland aufbauen möchten.",
        },
        {
          title: "Existenzgründer in Deutschland",
          description:
            "Gründer, die organisatorische Struktur, Lieferantenkontakte und verlässliche Schnittstellen zu Fachberatern suchen.",
        },
        {
          title: "Handels- und Dienstleistungsprojekte",
          description:
            "Unternehmen mit Bedarf an seriöser Partner- und Lieferantenrecherche im deutsch-türkischen Korridor.",
        },
      ],
    },
    problemsSolved: {
      heading: "Welche Herausforderungen lösen wir?",
      intro:
        "Internationale Gründungen verzögern sich oft durch fehlende lokale Kontakte und unabgestimmte Einzelschritte.",
      items: [
        {
          problem: "Fehlender Überblick über Abläufe und Ansprechpartner in Deutschland",
          solution:
            "Wir strukturieren die einzelnen organisatorischen Etappen und bereiten Termine mit den passenden Berufsträgern vor.",
        },
        {
          problem: "Zeitaufwendige Suche nach seriösen Lieferanten und Partnern",
          solution:
            "Wir recherchieren gezielt geeignete Kontakte und koordinieren die ersten geschäftlichen Gespräche.",
        },
        {
          problem: "Informationsverlust zwischen Deutschland und dem Heimatmarkt",
          solution:
            "Ein zentraler, zweisprachiger Koordinator hält Zeitplan, Aufgaben und Rückmeldungen konsistent zusammen.",
        },
      ],
    },
    process: {
      heading: "Wie läuft der Prozess ab?",
      intro: "Von der ersten Markteinschätzung bis zur operativen Projektkoordination.",
      steps: [
        {
          number: "01",
          title: "Geschäftsmodell & Zielsetzung verstehen",
          description:
            "Klärung von Branche, Zielmarkt, geplantem Markteintritt und organisatorischem Unterstützungsbedarf.",
        },
        {
          number: "02",
          title: "Markt-, Partner- & Lieferantenrecherche",
          description:
            "Erarbeitung belastbarer Recherchegrundlagen und Identifikation relevanter Ansprechpartner.",
        },
        {
          number: "03",
          title: "Einbindung zugelassener Fachberater",
          description:
            "Terminierung und organisatorische Vorbereitung für Gespräche mit Notaren, Rechtsanwälten und Steuerberatern.",
        },
        {
          number: "04",
          title: "Begleitende Projektkoordination",
          description:
            "Strukturierte Steuerung der administrativen Meilensteine bis zum operativen Start.",
        },
      ],
    },
    inquiry: {
      heading: "Markteintritt oder Projekt unverbindlich besprechen",
      description:
        "Teilen Sie uns Ihre Branche und Ihr Vorhaben in Deutschland mit. Im Erstgespräch klären wir den sinnvollen Koordinationsumfang.",
      prepChecklistTitle: "Hilfreiche Angaben für das Erstgespräch",
      prepChecklist: [
        "Branche, Geschäftsmodell und gewünschte Region in Deutschland",
        "Aktueller Projektstand (Idee, bestehendes Unternehmen, geplante Erweiterung)",
        "Gewünschte Schwerpunkte (Recherche, Partner, Gründungskoordination)",
      ],
      primaryCtaLabel: "Business-Setup anfragen",
      secondaryCtaLabel: "Alle Fachbereiche ansehen",
      sensitiveDataReminder:
        "Bitte senden Sie im Erstkontakt keine vertraulichen Gesellschaftsverträge oder Ausweisdaten.",
    },
    legalBoundary: {
      heading: "Abgrenzung zu regulierten Beratungsberufen",
      points: [
        "KALKAN PARTNER erbringt organisatorische Projektkoordination sowie Markt- und Partnerrecherchen.",
        "Rechtsberatung, Gesellschaftsvertragsgestaltung, Steuerberatung und notarielle Beurkundungen erfolgen ausschließlich durch entsprechend zugelassene Rechtsanwälte, Steuerberater und Notare.",
      ],
    },
    relatedSlugs: ["digital-ai", "restaurant-kitchen", "recruitment"],
  },

  "medical-tourism": {
    slug: "medical-tourism",
    inquiryTopic: "medical-tourism",
    icon: "heartPulse",
    seo: {
      title: "Medical Tourism Coordination Türkei | KALKAN PARTNER",
      description:
        "Transparente Kommunikations-, Dolmetscher- und Reisekoordination für internationale Patienten mit autorisierten Kliniken und Gesundheitstourismus-Einrichtungen in der Türkei.",
      keywords: [
        "Medical Tourism Coordination Türkei",
        "Patientenkoordination Deutschland Türkei",
        "Gesundheitstourismus Organisation Türkei",
      ],
    },
    eyebrow: "Fachbereich 06 · Medical Tourism Coordination",
    title: "Medical Tourism Coordination",
    lead: "Wir unterstützen internationale Patienten organisatorisch und sprachlich bei der Kontaktaufnahme zu autorisierten Krankenhäusern und zugelassenen Gesundheitstourismus-Einrichtungen in der Türkei.",
    audienceBadge: "Für internationale Patienten",
    whatIs: {
      heading: "Was ist dieser Service?",
      paragraphs: [
        "Patienten aus Deutschland und anderen Ländern stehen bei einer geplanten Behandlung in der Türkei oft vor organisatorischen und sprachlichen Fragen: Welche autorisierten Einrichtungen gibt es, wie läuft die Kommunikation ab und wie werden Reise sowie Aufenthalt strukturiert?",
        "KALKAN PARTNER übernimmt ausschließlich die organisatorische und kommunikative Koordination – transparent, sachlich und strikt getrennt von jeder medizinischen Beurteilung.",
      ],
      scopeTitle: "Konkrete Koordinationsleistungen",
      scopeItems: [
        "Kommunikation mit autorisierten Krankenhäusern und zugelassenen Gesundheitstourismus-Vermittlern in der Türkei",
        "Strukturierte Patientenkommunikation und Rückfragenkoordination",
        "Organisation von Übersetzungs- und Dolmetscherleistungen",
        "Einholung unverbindlicher Informations- und Angebotsanfragen bei autorisierten Leistungserbringern",
        "Reise-, Transfer- und Unterkunftskoordination rund um den Aufenthalt",
        "Nachgelagerte Kommunikationsbegleitung und Weiterleitung von Rückmeldungen oder Beschwerden",
      ],
    },
    targetAudience: {
      heading: "Für wen ist dieser Service gedacht?",
      intro:
        "Für internationale Patienten und Angehörige, die Wert auf seriöse Organisation statt auf aggressive Werbeversprechen legen.",
      groups: [
        {
          title: "Patienten aus Deutschland & Europa",
          description:
            "Personen, die sich direkt bei autorisierten Kliniken in der Türkei informieren und sprachlich sicher begleitet werden möchten.",
        },
        {
          title: "Begleitpersonen & Familienangehörige",
          description:
            "Angehörige, die Reise, Unterkunft und Kommunikationswege verlässlich organisiert wissen möchten.",
        },
      ],
    },
    problemsSolved: {
      heading: "Welche Herausforderungen lösen wir?",
      intro:
        "Im Gesundheitstourismus fehlt häufig eine ruhige, transparente und sprachlich präzise Koordination.",
      items: [
        {
          problem: "Unsicherheit bei der Auswahl autorisierter Einrichtungen",
          solution:
            "Wir stellen ausschließlich Kontakte zu entsprechend autorisierten Krankenhäusern und zugelassenen Einrichtungen in der Türkei her.",
        },
        {
          problem: "Sprachliche Missverständnisse bei organisatorischen Abläufen",
          solution:
            "Wir koordinieren klare Kommunikation und bei Bedarf geeignete Übersetzungs- bzw. Dolmetscherunterstützung.",
        },
        {
          problem: "Unkoordinierte Reise- und Terminplanung",
          solution:
            "Anreise, Unterkunft und Gesprächstermine vor Ort werden übersichtlich aufeinander abgestimmt.",
        },
      ],
    },
    process: {
      heading: "Wie läuft der Prozess ab?",
      intro: "Sachlich, datensensibel und mit klarer Trennung zwischen Organisation und Medizin.",
      steps: [
        {
          number: "01",
          title: "Organisatorisches Erstgespräch",
          description:
            "Klärung Ihres allgemeinen Informationsbedarfs, gewünschter Sprache und zeitlicher Vorstellungen.",
        },
        {
          number: "02",
          title: "Kontakt zu autorisierten Anbietern",
          description:
            "Weiterleitung Ihrer allgemeinen Anfrage an autorisierte Kliniken oder zugelassene Gesundheitstourismus-Einrichtungen.",
        },
        {
          number: "03",
          title: "Direkte medizinische Klärung durch den Anbieter",
          description:
            "Alle medizinischen Fragen, Diagnosen und Behandlungspläne werden ausschließlich direkt zwischen Patient und ärztlichem Fachpersonal geklärt.",
        },
        {
          number: "04",
          title: "Reise-, Sprach- & Nachbetreuungs-Koordination",
          description:
            "Begleitung von Reise, Unterkunft, Terminlogistik sowie Weiterleitung von Rückfragen im Anschluss.",
        },
      ],
    },
    inquiry: {
      heading: "Organisatorische Koordination anfragen",
      description:
        "Nennen Sie uns Ihren allgemeinen Informationswunsch und den gewünschten Zeitraum. Medizinische Befunde werden über unsere Website nicht erhoben.",
      prepChecklistTitle: "Hilfreiche Angaben für das Erstgespräch",
      prepChecklist: [
        "Allgemeiner Themenbereich und gewünschte Zielregion in der Türkei",
        "Bevorzugte Kommunikationssprache (DE / TR / EN)",
        "Ungefährer zeitlicher Rahmen für eine mögliche Reise",
      ],
      primaryCtaLabel: "Koordinationsgespräch anfragen",
      secondaryCtaLabel: "Alle Fachbereiche ansehen",
      sensitiveDataReminder:
        "WICHTIG: Senden Sie über normale Kontaktformulare niemals Arztbriefe, Diagnosen, Röntgenbilder, Gesundheitsdaten oder Reisepässe.",
    },
    legalBoundary: {
      heading: "Medizinische & rechtliche Abgrenzung",
      points: [
        "KALKAN PARTNER stellt keine Diagnosen, verordnet keine Therapien, führt keine medizinischen Behandlungen durch und gibt keinerlei medizinische Erfolgsgarantien ab.",
        "Es werden keine ungeprüften Heilungsversprechen oder Erfolgsquoten veröffentlicht.",
        "Die Zusammenarbeit erfolgt ausschließlich im Rahmen der türkischen Genehmigungs- und Autorisierungsanforderungen für Gesundheitstourismus mit entsprechend befugten Einrichtungen.",
      ],
    },
    relatedSlugs: ["translation-communication", "relocation", "family-education"],
  },

  "digital-ai": {
    slug: "digital-ai",
    inquiryTopic: "business",
    icon: "cpu",
    seo: {
      title: "Digital & AI Solutions Deutschland | Websites, SEO, GEO & Automation",
      description:
        "Moderne Unternehmenswebsites, SEO, Local SEO, GEO für KI-Suche, KI-Chatbots und Prozessautomatisierung für Unternehmen in Deutschland.",
      keywords: [
        "Digital & AI Services Deutschland",
        "Unternehmenswebsite SEO Local SEO Deutschland",
        "GEO AI Search Sichtbarkeit",
        "KI Chatbot und Prozessautomatisierung KMU",
      ],
    },
    eyebrow: "Fachbereich 07 · Digital & AI Solutions",
    title: "Digital & AI Solutions für nachhaltiges Wachstum",
    lead: "Wir entwickeln überzeugende digitale Unternehmensauftritte, stärken Ihre Sichtbarkeit in Google und KI-Suchsystemen (GEO) und automatisieren wiederkehrende Geschäftsprozesse praxisnah.",
    audienceBadge: "Für KMU, Dienstleister, Gastronomie & internationale Marken",
    whatIs: {
      heading: "Was ist dieser Service?",
      paragraphs: [
        "Sichtbarkeit und effiziente Abläufe entscheiden heute maßgeblich über Neukundengewinnung. Viele Unternehmen verfügen jedoch über veraltete Websites, fehlende lokale Auffindbarkeit oder manuelle Prozesse, die unnötig Zeit kosten.",
        "Im Bereich Digital & AI Solutions verbinden wir klares Corporate Design mit Suchmaschinenoptimierung (SEO & Local SEO), KI-Suchoptimierung (GEO) sowie praxistauglichen Automatisierungs- und KI-Lösungen.",
      ],
      scopeTitle: "Konkrete Leistungsbausteine",
      scopeItems: [
        "Konzeption und Entwicklung moderner, mehrsprachiger Unternehmenswebsites",
        "Suchmaschinenoptimierung (SEO) für deutsch- und türkischsprachige Zielgruppen",
        "Local SEO und Vorbereitung sauberer Google-Business-Profile-Strukturen",
        "GEO (Generative Engine Optimization) für bessere Auffindbarkeit in KI-Antwortsystemen",
        "Social-Media-Betreuung, digitale Markenidentität und strukturierte Content-Erstellung",
        "KI-Einführung, Team-Schulungen, Chatbots und Geschäftsprozess-Automatisierung",
      ],
    },
    targetAudience: {
      heading: "Für wen ist dieser Service gedacht?",
      intro:
        "Für Unternehmen, die digitale Kanäle gezielt zur Kundengewinnung und Entlastung im Tagesgeschäft einsetzen wollen.",
      groups: [
        {
          title: "Mittelständische Dienstleister & Betriebe",
          description:
            "Unternehmen, die einen seriösen digitalen Markenauftritt und messbar bessere regionale Auffindbarkeit benötigen.",
        },
        {
          title: "Gastronomie- & Neueröffnungsprojekte",
          description:
            "Restaurants und Konzepte, die pünktlich zur Eröffnung professionell online, lokal und mobil sichtbar sein möchten.",
        },
        {
          title: "Wachsende internationale Unternehmen",
          description:
            "Teams, die Kundenanfragen, Wissensprozesse oder wiederkehrende Routineaufgaben mit KI sinnvoll automatisieren möchten.",
        },
      ],
    },
    problemsSolved: {
      heading: "Welche Herausforderungen lösen wir?",
      intro:
        "Digitale Projekte scheitern häufig an isolierten Einzellösungen ohne geschäftlichen Fokus.",
      items: [
        {
          problem: "Website bringt keine qualifizierten Kundenanfragen",
          solution:
            "Wir strukturieren Seiten, Inhalte und Anfragewege gezielt auf Vertrauen und Conversion.",
        },
        {
          problem: "Schwache Sichtbarkeit bei Google und in KI-Suchsystemen",
          solution:
            "Durch saubere technische Architektur, lokale Relevanz (Local SEO) und strukturierte Inhalte (GEO) verbessern wir die Auffindbarkeit nachhaltig.",
        },
        {
          problem: "Hoher manueller Aufwand bei Standardanfragen und Inhalten",
          solution:
            "Wir setzen schlanke Automatisierungen und KI-Werkzeuge ein, die zum tatsächlichen Arbeitsalltag passen.",
        },
      ],
    },
    process: {
      heading: "Wie läuft der Prozess ab?",
      intro: "Modular, skalierbar und ohne unnötige Systemkomplexität.",
      steps: [
        {
          number: "01",
          title: "Digital-Check & Zieldefinition",
          description:
            "Analyse von aktuellem Auftritt, Zielgruppe, Suchpotenzial und sinnvollen Automatisierungsansätzen.",
        },
        {
          number: "02",
          title: "Architektur, Design & SEO-Konzept",
          description:
            "Ausarbeitung von Seitenstruktur, Markenauftritt, Keyword-Strategie und technischer Grundlage.",
        },
        {
          number: "03",
          title: "Umsetzung & Integration",
          description:
            "Saubere Entwicklung von Website, Inhalten, Chatbots oder Automatisierungen mit Fokus auf Geschwindigkeit und Datenschutz.",
        },
        {
          number: "04",
          title: "Übergabe, Schulung & Weiterentwicklung",
          description:
            "Einführung Ihres Teams und optionale fortlaufende Optimierung von SEO, Content und KI-Prozessen.",
        },
      ],
    },
    inquiry: {
      heading: "Digital- oder KI-Projekt besprechen",
      description:
        "Ob neue Unternehmenswebsite, bessere Google-Sichtbarkeit oder gezielte KI-Automatisierung – wir besprechen gemeinsam eine pragmatische Lösung.",
      prepChecklistTitle: "Hilfreiche Angaben für das Erstgespräch",
      prepChecklist: [
        "Bestehende Website (falls vorhanden) und Zielgruppe/Region",
        "Gewünschter Schwerpunkt (Website, SEO/Local SEO, GEO, KI/Automation)",
        "Gewünschter Start- oder Veröffentlichungstermin",
      ],
      primaryCtaLabel: "Digitalprojekt anfragen",
      secondaryCtaLabel: "Alle Fachbereiche ansehen",
      sensitiveDataReminder:
        "Bitte teilen Sie in der ersten Anfrage noch keine Zugangsdaten oder API-Schlüssel.",
    },
    legalBoundary: {
      heading: "Datenschutz & technische Verantwortung",
      points: [
        "Alle Web-, Analytics- und KI-Lösungen werden mit Blick auf datenschutzkonforme (DSGVO) Umsetzung konzipiert.",
        "Rechtliche Prüfungen von Impressum, Datenschutzerklärungen oder branchenspezifischen Pflichtangaben obliegen jeweils einem Rechtsanwalt bzw. Datenschutzbeauftragten.",
      ],
    },
    relatedSlugs: ["business-setup", "restaurant-kitchen", "translation-communication"],
  },

  "family-education": {
    slug: "family-education",
    inquiryTopic: "general",
    icon: "graduationCap",
    seo: {
      title: "Family & Education Koordination Deutschland | KALKAN PARTNER",
      description:
        "Schul- und Kitarecherche, Bildungs- und Kursinformationen, Studienbewerbungskoordination sowie Familien-Relocation in Deutschland.",
      keywords: [
        "Schule Kita Recherche Deutschland",
        "Studienbewerbung Koordination Deutschland",
        "Family Education Service Deutschland Türkei",
      ],
    },
    eyebrow: "Fachbereich 08 · Family & Education",
    title: "Family & Education – Orientierung für Familien & Studierende",
    lead: "Wir unterstützen Familien, Schüler und Studierende organisatorisch bei Bildungsrecherchen, Bewerbungsabläufen und dem geordneten Ankommen in Deutschland.",
    audienceBadge: "Für Familien, Schüler & internationale Studierende",
    whatIs: {
      heading: "Was ist dieser Service?",
      paragraphs: [
        "Das deutsche Bildungs- und Betreuungssystem unterscheidet sich je nach Bundesland und Kommune erheblich. Für zuziehende Familien und internationale Studierende sind Fristen, Schulformen und Bewerbungswege oft schwer zu überblicken.",
        "Unser Bereich Family & Education schafft Klarheit durch strukturierte Recherche, saubere Bewerbungsorganisation und sprachliche Kommunikationsbegleitung.",
      ],
      scopeTitle: "Konkrete Koordinationsleistungen",
      scopeItems: [
        "Regionale Recherche zu geeigneten Schulen und Schulformen",
        "Unterstützung bei der Kindergarten- und Kita-Recherche sowie Anmeldeabläufen",
        "Übersicht zu Sprachkursen, Weiterbildungen und Bildungsangeboten",
        "Organisatorische Koordination von Studien- und Kursbewerbungsunterlagen",
        "Abgestimmte Familien-Relocation in Verbindung mit Alltags- und Terminplanung",
        "Kommunikationsunterstützung rund um die Unterkunftssuche für Studierende und Familien",
      ],
    },
    targetAudience: {
      heading: "Für wen ist dieser Service gedacht?",
      intro:
        "Für Familien und junge Erwachsene, die Bildungsentscheidungen in Deutschland gut vorbereitet treffen möchten.",
      groups: [
        {
          title: "Zuziehende Familien mit Kindern",
          description:
            "Eltern, die rechtzeitig Orientierung zu Kitas, Grundschulen oder weiterführenden Schulen in ihrer Zielregion suchen.",
        },
        {
          title: "Internationale Studieninteressierte",
          description:
            "Bewerber, die Fristen, Unterlagenlisten und formale Bewerbungsschritte geordnet vorbereiten möchten.",
        },
        {
          title: "Teilnehmer an Sprach- und Fachkursen",
          description:
            "Personen, die passende Kursanbieter vergleichen und Anmeldeprozesse sauber organisieren möchten.",
        },
      ],
    },
    problemsSolved: {
      heading: "Welche Herausforderungen lösen wir?",
      intro:
        "Verpasste Anmeldefristen oder unvollständige Unterlagen kosten im Bildungsbereich schnell ein ganzes Semester oder Schuljahr.",
      items: [
        {
          problem: "Unübersichtliche regionale Zuständigkeiten bei Kita und Schule",
          solution:
            "Wir recherchieren die lokalen Optionen, Anmeldeportale und relevanten Fristen für Ihre Zielgemeinde.",
        },
        {
          problem: "Formale Fehler bei Studien- oder Kursbewerbungen",
          solution:
            "Wir erstellen klare Dokumenten-Checklisten und begleiten die fristgerechte Zusammenstellung.",
        },
        {
          problem: "Sprachliche Hürden in der Kommunikation mit Einrichtungen",
          solution:
            "Wir unterstützen bei sachlicher deutschsprachiger Korrespondenz und Terminabsprachen.",
        },
      ],
    },
    process: {
      heading: "Wie läuft der Prozess ab?",
      intro: "Vorausschauend geplant und auf den Bildungszeitplan abgestimmt.",
      steps: [
        {
          number: "01",
          title: "Bildungsziel & Region klären",
          description:
            "Aufnahme von Alter, Bildungsstand, Zielstadt und geplantem Startzeitpunkt.",
        },
        {
          number: "02",
          title: "Optionen & Fristen recherchieren",
          description:
            "Strukturierte Übersicht passender Schulen, Kitas, Kurse oder Hochschulwege inklusive Zeitplan.",
        },
        {
          number: "03",
          title: "Unterlagen & Kommunikation vorbereiten",
          description:
            "Zusammenstellung der erforderlichen Bewerbungs- bzw. Anmeldeunterlagen.",
        },
        {
          number: "04",
          title: "Begleitung bis zur Rückmeldung",
          description:
            "Koordination von Terminen, Rückfragen und ergänzender Familienorganisation.",
        },
      ],
    },
    inquiry: {
      heading: "Beratungs- und Koordinationsgespräch anfragen",
      description:
        "Beschreiben Sie kurz Ihren Bildungs- oder Familienbedarf und die Zielregion in Deutschland.",
      prepChecklistTitle: "Hilfreiche Angaben für das Erstgespräch",
      prepChecklist: [
        "Zielstadt/Bundesland und geplanter Zeitraum",
        "Art des Bedarfs (Kita, Schule, Sprachkurs, Studium)",
        "Aktueller Sprachstand und vorhandene Unterlagen im Überblick",
      ],
      primaryCtaLabel: "Family & Education anfragen",
      secondaryCtaLabel: "Alle Fachbereiche ansehen",
      sensitiveDataReminder:
        "Bitte senden Sie im Erstkontakt noch keine Zeugnisoriginale, Geburtsurkunden oder Ausweiskopien.",
    },
    legalBoundary: {
      heading: "Leistungsabgrenzung",
      points: [
        "KALKAN PARTNER erbringt organisatorische Recherche- und Bewerbungskoordination.",
        "Über Platzvergaben, Zulassungen oder Zeugnisanerkennungen entscheiden ausschließlich die jeweils zuständigen Bildungseinrichtungen und Behörden.",
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
      alt: "Professionelle Großküche mit Edelstahl-Arbeitsflächen, Induktionsinsel und strukturiertem Pass-Bereich",
    },
    seo: {
      title: "Restaurant & Kitchen Solutions Deutschland | Küchenplanung & Gastronomieberatung",
      description:
        "Praxisnahe Gastronomie- und Küchenberatung in Deutschland: Konzept, Eröffnungskoordination, Küchenlayout, Geräteauswahl, Menü, Rezepturen, Food Cost, SOPs und Teamorganisation.",
      keywords: [
        "Restaurantberatung Deutschland",
        "Küchenplanung Gastronomie",
        "Restaurant eröffnen Deutschland Unterstützung",
        "Food Cost Kalkulation und SOP Gastronomie",
      ],
    },
    eyebrow: "Fachbereich 09 · Besondere Kernkompetenz",
    title: "Restaurant & Kitchen Solutions",
    lead: "Von der ersten gastronomischen Idee bis zum strukturierten Tagesbetrieb: fundierte Praxisbegleitung aus echter Küchenerfahrung für wirtschaftliche, ergonomische und reproduzierbare Abläufe.",
    audienceBadge: "Für Gastronomiegründer, Investoren & bestehende Restaurants",
    whatIs: {
      heading: "Was ist dieser Service?",
      paragraphs: [
        "Restaurant & Kitchen Solutions ist einer der prägendsten Differenzierungsbereiche von KALKAN PARTNER. Statt theoretischer Folien liefern wir operative Küchen- und Gastronomiekompetenz, die im stressigen Servicealltag funktioniert.",
        "Wir begleiten Gastronomen ganzheitlich bei der Konzeption, der funktionalen Aufteilung von Küche und Gastraum, der bedarfsgerechten Geräte- und Lieferantenauswahl sowie bei der kaufmännischen und operativen Standardisierung von Menü, Rezepturen, Wareneinsatz (Food Cost) und Arbeitsprozessen (SOPs).",
      ],
      scopeTitle: "Vollständiges Leistungsspektrum (Operativ & Organisatorisch)",
      scopeItems: [
        "Entwicklung und Schärfung des gastronomischen Gesamtkonzepts",
        "Strukturierte Koordination der Restauranteröffnung",
        "Funktionale Küchenlayout-Planung und ergonomische Workflow-Organisation",
        "Organisation von warmer Küche, kalter Küche, Pass-, Spül- und Lagerbereichen",
        "Bedarfsgerechte Geräte-Recherche, Auswahl und Angebotsvergleich",
        "Lieferanten- und Installationskoordination",
        "Menüentwicklung, Rezeptur- und Portionsstandardisierung (Grammaturen)",
        "Präzise Food-Cost- und Deckungsbeitragskalkulation",
        "Erstellung praxisnaher SOP-Dokumentationen (Standard Operating Procedures)",
        "Aufgabenverteilung im Küchenteam sowie Gastraum- und Service-Workflow-Planung",
        "Operative Begleitung in der Eröffnungs- und Anlaufphase",
      ],
    },
    targetAudience: {
      heading: "Für wen ist dieser Service gedacht?",
      intro:
        "Für alle, die ein gastronomisches Projekt wirtschaftlich sauber aufstellen oder bestehende Abläufe spürbar verbessern möchten.",
      groups: [
        {
          title: "Restaurant- & Konzeptgründer",
          description:
            "Unternehmer, die vor der Neueröffnung typische Fehlplanungen bei Küche, Geräten, Kalkulation und Personalstruktur vermeiden wollen.",
        },
        {
          title: "Bestehende Gastronomiebetriebe",
          description:
            "Restaurants mit zu hohem Wareneinsatz, langen Laufwegen oder fehlender Rezeptur- und Qualitätskonstanz.",
        },
        {
          title: "Investoren & Multi-Unit-Betreiber",
          description:
            "Projektträger, die standardisierte Küchenprozesse, klare SOPs und verlässliche Eröffnungskoordination für neue Standorte suchen.",
        },
      ],
    },
    problemsSolved: {
      heading: "Welche Herausforderungen lösen wir?",
      intro:
        "Die teuersten Fehler in der Gastronomie entstehen bereits vor dem ersten geöffneten Tag – oder durch fehlende Standards im laufenden Betrieb.",
      items: [
        {
          problem: "Unwirtschaftliche Küchenwege und falsch dimensionierte Geräte",
          solution:
            "Wir planen Arbeitszonen (warm, kalt, Spüle, Lager) konsequent entlang des realen Produktions- und Serviceflusses.",
        },
        {
          problem: "Schwankende Qualität und unkontrollierter Food Cost",
          solution:
            "Mit standardisierten Rezepturen, klaren Grammaturen und sauberer Wareneinsatzkalkulation sichern wir Qualität und Marge.",
        },
        {
          problem: "Chaos in der Eröffnungsphase und unklare Rollen im Team",
          solution:
            "Durch praxisnahe SOP-Dokumente, klare Postenaufteilung und abgestimmte Gastraum-Übergaben startet Ihr Team strukturiert.",
        },
      ],
    },
    process: {
      heading: "Wie läuft der Prozess ab?",
      intro: "Vom ersten Konzeptgespräch bis zur begleiteten Eröffnung in fünf klaren Etappen.",
      steps: [
        {
          number: "01",
          title: "Konzept-, Flächen- & Zielanalyse",
          description:
            "Prüfung von Gastronomiekonzept, geplanter Kapazität, Zielmenü und vorhandenen räumlichen Gegebenheiten.",
        },
        {
          number: "02",
          title: "Küchen-Workflow & Ausstattungsplanung",
          description:
            "Funktionale Zonierung (warm, kalt, Spüle, Lager), Erstellung von Gerätelisten sowie Lieferantenrecherche.",
        },
        {
          number: "03",
          title: "Menü, Rezepturen & Food-Cost-Struktur",
          description:
            "Ausarbeitung von Speisekarte, exakten Portionsgrößen, Rezepturkarten und wirtschaftlicher Kalkulation.",
        },
        {
          number: "04",
          title: "SOPs, Teamstruktur & Installationskoordination",
          description:
            "Erstellung der Arbeitsanweisungen, Postenplanung für Küche und Service sowie Abstimmung mit Lieferanten und Handwerkern.",
        },
        {
          number: "05",
          title: "Pre-Opening & Eröffnungsbegleitung",
          description:
            "Praxis-Testläufe, Feinschliff der Abläufe und operative Unterstützung beim Start des regulären Betriebs.",
        },
      ],
    },
    inquiry: {
      heading: "Gastronomie-Projekt unverbindlich besprechen",
      description:
        "Ob geplante Neueröffnung oder Optimierung eines laufenden Betriebs: Schildern Sie uns Ihr Konzept und Ihren Zeitplan für ein konkretes Erstgespräch.",
      prepChecklistTitle: "Hilfreiche Angaben für das Erstgespräch",
      prepChecklist: [
        "Art des Konzepts (Restaurant, Café, Systemgastronomie, Großküche)",
        "Standort, ungefähre Fläche / Sitzplatzanzahl und Projektstatus",
        "Gewünschte Schwerpunkte (Komplettbegleitung, Küchenlayout, Menü/Food Cost, SOPs)",
      ],
      primaryCtaLabel: "Restaurant-Projekt anfragen",
      secondaryCtaLabel: "Alle Fachbereiche ansehen",
      sensitiveDataReminder:
        "Vertrauliche Pachtverträge oder detaillierte Baupläne benötigen wir erst nach einem ersten Abstimmungsgespräch.",
    },
    legalBoundary: {
      heading: "Fachplanerische & rechtliche Abgrenzung",
      points: [
        "Unsere Leistungen umfassen operative Gastronomie-, Küchenorganisations-, Konzept-, Kalkulations- und Eröffnungskoordination.",
        "Genehmigungspflichtige Architektur-, Statik-, Elektro-, Gas-, Brandschutz-, Hygiene- und Lüftungsplanungen werden dort, wo gesetzlich erforderlich, ausschließlich durch entsprechend qualifizierte und zugelassene Fachplaner, Ingenieure und Meisterbetriebe ausgeführt.",
      ],
    },
    relatedSlugs: ["business-setup", "recruitment", "digital-ai"],
  },
};
