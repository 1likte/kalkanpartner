import type {
  ServiceDetailContent,
  ServiceSlug,
  ServicesOverviewContent,
} from "./types";

export const servicesOverviewDe: ServicesOverviewContent = {
  seo: {
    title: "Unsere Leistungen – Neun Fachbereiche | KALKAN PARTNER",
    description:
      "Alle neun Fachbereiche von KALKAN PARTNER im Überblick: Recruitment, Relocation, Behördenservice, Translation, Business Setup, Medical Tourism, Digital & AI, Family & Education sowie Restaurant & Kitchen Solutions.",
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
    "Klare Abläufe, transparente rechtliche Grenzen und direkte Anfragewege.",
  categories: [
    {
      id: "business-gastronomy",
      label: "Unternehmen, Markteintritt & Gastronomie",
      description: "Für Arbeitgeber, Gründer, Gastronomiebetriebe und KMU.",
      slugs: ["restaurant-kitchen", "recruitment", "business-setup", "digital-ai"],
    },
    {
      id: "mobility-administration",
      label: "Mobilität, Behörden & Kommunikation",
      description: "Strukturierte Organisations- und Kommunikationshilfe in Deutschland.",
      slugs: ["relocation", "behoerdenservice", "translation-communication"],
    },
    {
      id: "family-health",
      label: "Familie, Bildung & Medizintourismus-Koordination",
      description: "Verlässliche Begleitung für Familien, Studierende und Patienten.",
      slugs: ["family-education", "medical-tourism"],
    },
  ],
  cardReadMore: "Fachbereich ansehen",
  breadcrumbHome: "Startseite",
  breadcrumbServices: "Leistungen",
  relatedHeading: "Ergänzende Fachbereiche",
  allServicesCta: "Alle Fachbereiche",
  legalBannerTitle: "Klare rechtliche Einordnung",
  legalBannerBody:
    "KALKAN PARTNER erbringt organisatorische und koordinierende Leistungen. Rechts-, Steuer-, medizinische, architektonische oder erlaubnispflichtige Tätigkeiten erfolgen durch zugelassene Fachpartner.",
};

export const servicesDe: Record<ServiceSlug, ServiceDetailContent> = {
  recruitment: {
    slug: "recruitment",
    inquiryTopic: "recruitment",
    icon: "users",
    seo: {
      title: "Recruitment & Internationale Kandidatenkoordination | KALKAN PARTNER",
      description:
        "Strukturierte Kandidatenkoordination zwischen der Türkei, internationalen Märkten und Arbeitgebern in Deutschland.",
      keywords: [
        "Personalvermittlung Deutschland Türkei",
        "Internationale Fachkräfte Koordination Deutschland",
        "Recruitment Gastronomie und Mittelstand",
      ],
    },
    eyebrow: "Fachbereich 01 · Recruitment",
    title: "Recruitment & Kandidatenkoordination",
    lead: "Wir verbinden Arbeitgeber in Deutschland mit qualifizierten Kandidaten aus der Türkei und internationalen Märkten – vom CV bis zum Onboarding.",
    audienceBadge: "Für Arbeitgeber in Deutschland & internationale Kandidaten",
    whatIs: {
      heading: "Was leisten wir?",
      paragraphs: [
        "Wir strukturieren internationale Einstellungsprozesse: Kandidatenansprache, geordnete Bewerbungsunterlagen, Gesprächskoordination und Begleitung bis zum Arbeitsantritt.",
      ],
      scopeTitle: "Koordinationsumfang",
      scopeItems: [
        "Kandidaten-Sourcing (TR & international)",
        "CV- und Unterlagenstrukturierung",
        "Organisatorische Vorauswahl",
        "Interview-Terminierung",
        "Zweisprachige Kommunikation (DE / TR)",
        "Onboarding-Ablaufkoordination",
      ],
    },
    targetAudience: {
      heading: "Für wen gedacht?",
      intro: "Für Unternehmen mit Personalbedarf und qualifizierte Bewerber.",
      groups: [
        {
          title: "Arbeitgeber in Deutschland",
          description: "Mittelstand und Gastronomiebetriebe mit Wunsch nach Direkteinstellung.",
        },
        {
          title: "Qualifizierte Kandidaten",
          description: "Fachkräfte aus dem Ausland für geordnete Gespräche in Deutschland.",
        },
        {
          title: "Eröffnungs- & Wachstumsteams",
          description: "Betriebe mit Bedarf an verlässlicher Personalgewinnung für neue Standorte.",
        },
      ],
    },
    problemsSolved: {
      heading: "Gelöste Herausforderungen",
      intro: "Weniger Reibungsverlust im grenzüberschreitenden Auswahlprozess.",
      items: [
        {
          problem: "Unvollständige Bewerbungsmappen",
          solution: "Einheitlich aufbereitete Lebensläufe und Nachweise.",
        },
        {
          problem: "Sprach- und Erwartungslücken",
          solution: "Klare zweisprachige Abstimmung von Beginn an.",
        },
        {
          problem: "Zeitverlust bei Rückfragen",
          solution: "Gebündelte Termin- und Rückmeldekoordination.",
        },
      ],
    },
    process: {
      heading: "Prozess in 4 Schritten",
      intro: "Klar und nachvollziehbar.",
      steps: [
        {
          number: "01",
          title: "Profil klären",
          description: "Aufgaben, Qualifikation, Sprache und Starttermin definieren.",
        },
        {
          number: "02",
          title: "Sourcing & CVs",
          description: "Passende Profile finden und Unterlagen strukturieren.",
        },
        {
          number: "03",
          title: "Gespräche",
          description: "Kennenlern- und Fachgespräche terminieren und begleiten.",
        },
        {
          number: "04",
          title: "Direktvertrag & Start",
          description: "Nach direkter Einigung das organisatorische Onboarding steuern.",
        },
      ],
    },
    inquiry: {
      heading: "Personalbedarf anfragen",
      description: "Schildern Sie kurz Ihre gesuchte Position oder Ihr Profil.",
      prepChecklistTitle: "Hilfreiche Angaben",
      prepChecklist: [
        "Gesuchte Position und Standort",
        "Sprachkenntnisse & Startzeitraum",
        "Unternehmensname & Ansprechpartner",
      ],
      primaryCtaLabel: "Recruitment-Anfrage starten",
      secondaryCtaLabel: "Alle Fachbereiche",
      sensitiveDataReminder:
        "Bitte senden Sie über Erstkontakt-Formulare keine Reisepasskopien.",
    },
    legalBoundary: {
      heading: "Rechtliche Abgrenzung",
      points: [
        "Arbeitsverträge kommen ausschließlich direkt zwischen Arbeitgeber und Arbeitnehmer zustande.",
        "Keine Arbeitnehmerüberlassung (Zeitarbeit).",
        "Keine Zusagen oder Garantien für Visa, Arbeitserlaubnisse oder Anstellungen.",
        "Gesetzliche Vorgaben zu Vermittlungsvergütungen gegenüber Bewerbern werden strikt eingehalten.",
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
        "Strukturierte Relocation-Koordination für Fachkräfte und Familien in Deutschland.",
      keywords: [
        "Relocation Service Deutschland",
        "Umzug nach Deutschland Organisation",
        "Relocation Unterstützung Familien Türkei Deutschland",
      ],
    },
    eyebrow: "Fachbereich 02 · Relocation",
    title: "Relocation & Ankunfts-Koordination",
    lead: "Strukturierte Begleitung für den Start in Deutschland: Umzugsplanung, Wohnungstermine, Kita-Recherche und Versorger.",
    audienceBadge: "Für Fachkräfte, Privatpersonen & Familien",
    whatIs: {
      heading: "Was leisten wir?",
      paragraphs: [
        "Wir machen Ihren Start in Deutschland planbar: von der zeitlichen Umzugsorganisation über Wohnungskommunikation bis zu Schulrecherchen und Strom-/Internetanmeldungen.",
      ],
      scopeTitle: "Koordinationsumfang",
      scopeItems: [
        "Umzugs- und Ankunftsfahrplan",
        "Kommunikation & Termine bei der Wohnungssuche",
        "Schul- und Kitarecherche vor Ort",
        "Umzugslogistik-Koordination",
        "Strom-, Gas- & Internetanmeldungen",
        "Orientierung für die ersten Wochen",
      ],
    },
    targetAudience: {
      heading: "Für wen gedacht?",
      intro: "Für einen geordneten Start ohne vermeidbare Verzögerungen.",
      groups: [
        {
          title: "Internationale Fachkräfte",
          description: "Für neue Mitarbeiter mit vollem Fokus auf den Jobstart.",
        },
        {
          title: "Umziehende Familien",
          description: "Wenn Wohnen, Kita/Schule und Anmeldungen ineinandergreifen müssen.",
        },
        {
          title: "Arbeitgeber",
          description: "Unternehmen, die neuen Mitarbeitern den Einstieg erleichtern.",
        },
      ],
    },
    problemsSolved: {
      heading: "Gelöste Herausforderungen",
      intro: "Klare Reihenfolge statt Startchaos.",
      items: [
        {
          problem: "Unklare Reihenfolge der Anmeldungen",
          solution: "Ein fester Schritt-für-Schritt-Plan verhindert Fristfehler.",
        },
        {
          problem: "Sprachbarriere bei Vermietern",
          solution: "Wir bereiten Anschreiben und Terminabstimmungen auf Deutsch vor.",
        },
        {
          problem: "Zeitverlust bei Recherchen",
          solution: "Kompakte Übersicht zu Schulen, Kitas und Versorgern.",
        },
      ],
    },
    process: {
      heading: "Prozess in 4 Schritten",
      intro: "Von der Planung bis zur ersten Einrichtung.",
      steps: [
        {
          number: "01",
          title: "Zielregion erfassen",
          description: "Stadt, Umzugszeitraum und Haushaltsgröße abstimmen.",
        },
        {
          number: "02",
          title: "Fahrplan erstellen",
          description: "Alle Aufgaben und Nachweise sinnvoll ordnen.",
        },
        {
          number: "03",
          title: "Kommunikation",
          description: "Termine, Schulrecherche und Versorger koordinieren.",
        },
        {
          number: "04",
          title: "Startbegleitung",
          description: "Erste Anmeldungen sauber abschließen.",
        },
      ],
    },
    inquiry: {
      heading: "Relocation-Gespräch anfragen",
      description: "Nennen Sie uns Zielstadt und Zeitraum für einen kompakten Ablaufplan.",
      prepChecklistTitle: "Hilfreiche Angaben",
      prepChecklist: [
        "Zielstadt & geplanter Umzugszeitraum",
        "Einzelperson oder Familie (Kita/Schule)",
        "Gewünschte Schwerpunkte",
      ],
      primaryCtaLabel: "Relocation-Gespräch anfragen",
      secondaryCtaLabel: "Alle Fachbereiche",
      sensitiveDataReminder:
        "Bitte übermitteln Sie im Erstkontakt keine Ausweis-, Konto- oder Schufa-Dokumente.",
    },
    legalBoundary: {
      heading: "Rechtliche Abgrenzung (§ 34c GewO)",
      points: [
        "Keine erlaubnispflichtige Immobilienmaklertätigkeit gemäß § 34c GewO.",
        "Leistung beschränkt sich auf Organisation, Kommunikation und Terminierung.",
        "Miet- und Versorgungsverträge werden direkt mit dem Anbieter geschlossen.",
      ],
    },
    relatedSlugs: ["behoerdenservice", "family-education", "recruitment"],
  },

  behoerdenservice: {
    slug: "behoerdenservice",
    inquiryTopic: "general",
    icon: "landmark",
    seo: {
      title: "Behördenservice Deutschland | KALKAN PARTNER",
      description:
        "Terminorganisation, Dokumentenvorbereitung und administrative Koordination in Deutschland.",
      keywords: [
        "Behördenservice Deutschland",
        "Dokumentenvorbereitung und Terminorganisation",
        "Administrative Unterstützung Deutschland",
      ],
    },
    eyebrow: "Fachbereich 03 · Behördenservice",
    title: "Behördenservice & Administration",
    lead: "Sorgfältige Unterlagenvorbereitung, Termindisziplin und administrative Koordination im zulässigen Rahmen.",
    audienceBadge: "Für Privatpersonen & Unternehmen",
    whatIs: {
      heading: "Was leisten wir?",
      paragraphs: [
        "Formale Lücken kosten bei öffentlichen Stellen oft Wochen. Wir ordnen Ihre Unterlagen, koordinieren Termine und übernehmen sachliche Rückfragen ohne Rechtsberatung.",
      ],
      scopeTitle: "Koordinationsumfang",
      scopeItems: [
        "Termin- und Fristkoordination",
        "Vollständigkeits-Checklisten",
        "Fristgerechte Einreichungshilfe",
        "Korrespondenz im Rahmen gültiger Vollmachten",
        "Zulässige Sachstandsanfragen",
      ],
    },
    targetAudience: {
      heading: "Für wen gedacht?",
      intro: "Für geordnete und pünktliche Abläufe.",
      groups: [
        {
          title: "Neu angekommene Privatpersonen",
          description: "Für sauber vorbereitete Standard-Termine und Dokumentenmappen.",
        },
        {
          title: "Berufstätige",
          description: "Strukturierte Entlastung bei Fristen und Schreiben.",
        },
        {
          title: "Unternehmen",
          description: "Administrative Zuarbeit ergänzend zu Steuerberater oder Anwalt.",
        },
      ],
    },
    problemsSolved: {
      heading: "Gelöste Herausforderungen",
      intro: "Keine unnötigen Verzögerungen durch fehlende Formulare.",
      items: [
        {
          problem: "Unvollständige Unterlagen",
          solution: "Vorab-Strukturierung anhand klarer Checklisten.",
        },
        {
          problem: "Unklare Fristen & Schreiben",
          solution: "Geordnete Fristübersicht und sachliche Rückfragen.",
        },
        {
          problem: "Parallele Zuständigkeiten",
          solution: "Zentrale Dokumentation aller offenen Termine.",
        },
      ],
    },
    process: {
      heading: "Prozess in 4 Schritten",
      intro: "Rechtlich sauber abgegrenzt.",
      steps: [
        {
          number: "01",
          title: "Zuständigkeit prüfen",
          description: "Klären, ob Organisation reicht oder ein Anwalt nötig ist.",
        },
        {
          number: "02",
          title: "Mappe strukturieren",
          description: "Alle Nachweise prüffreundlich zusammenstellen.",
        },
        {
          number: "03",
          title: "Termine steuern",
          description: "Termine und Einreichung geordnet begleiten.",
        },
        {
          number: "04",
          title: "Nachverfolgung",
          description: "Sachstandsanfragen im zulässigen Rahmen durchführen.",
        },
      ],
    },
    inquiry: {
      heading: "Administrative Hilfe anfragen",
      description: "Schildern Sie kurz Art des Anliegens und Fristen.",
      prepChecklistTitle: "Hilfreiche Angaben",
      prepChecklist: [
        "Art des Vorgangs & zuständige Stadt",
        "Bestehende Fristen oder Termine",
        "Ob bereits ein Anwalt involviert ist",
      ],
      primaryCtaLabel: "Behördenservice anfragen",
      secondaryCtaLabel: "Alle Fachbereiche",
      sensitiveDataReminder:
        "Senden Sie im Erstkontakt keine Ausweise oder Behördenbescheide.",
    },
    legalBoundary: {
      heading: "Hinweis zum RDG",
      points: [
        "Keine Rechtsberatung, rechtliche Vertretung oder aufenthaltsrechtliche Prüfung (RDG).",
        "Kommunikation mit Vollmacht nur, sofern von der jeweiligen Stelle akzeptiert.",
        "Bei rechtlichen Fragen oder Widersprüchen verweisen wir an zugelassene Rechtsanwälte.",
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
        "Deutsch-türkisch-englische Geschäftskommunikation und Koordination beeidigter Übersetzer.",
      keywords: [
        "Deutsch Türkisch Geschäftskommunikation",
        "Übersetzungskoordination Deutschland Türkei",
        "Beglaubigte Übersetzer Koordination",
      ],
    },
    eyebrow: "Fachbereich 04 · Translation",
    title: "Translation & Communication",
    lead: "Stilsichere Kommunikation auf Deutsch, Türkisch und Englisch – inklusive Koordination beeidigter Übersetzer.",
    audienceBadge: "Geschäftliche & private Kommunikation (DE · TR · EN)",
    whatIs: {
      heading: "Was leisten wir?",
      paragraphs: [
        "Wir verfassen präzise Geschäftskorrespondenz, strukturieren Bewerbungs- und Firmenunterlagen und binden bei amtlichem Bedarf öffentlich bestellte Übersetzer ein.",
      ],
      scopeTitle: "Koordinationsumfang",
      scopeItems: [
        "Geschäftskorrespondenz (DE · TR · EN)",
        "Allgemeine Dokumentenübersetzungen",
        "Lebensläufe & Firmenprofile",
        "Einbindung beeidigter Übersetzer",
        "Lieferanten- & Partnerkommunikation",
      ],
    },
    targetAudience: {
      heading: "Für wen gedacht?",
      intro: "Für sicheres Auftreten über Sprachgrenzen hinweg.",
      groups: [
        {
          title: "Unternehmen im DE–TR-Handel",
          description: "Für professionelle Angebote und Lieferantenabstimmungen.",
        },
        {
          title: "Privatpersonen & Fachkräfte",
          description: "Für saubere Lebensläufe und amtliche Übersetzungskoordination.",
        },
        {
          title: "Projektteams",
          description: "Für synchrone Abstimmungen in drei Sprachen.",
        },
      ],
    },
    problemsSolved: {
      heading: "Gelöste Herausforderungen",
      intro: "Vertrauen durch professionelle Sprache.",
      items: [
        {
          problem: "Unpräzise Maschinentexte",
          solution: "Kultursichere Geschäftstexte für beide Märkte.",
        },
        {
          problem: "Unklare Beglaubigungspflicht",
          solution: "Gezielte Einschaltung ermächtigter Übersetzer bei amtlichem Bedarf.",
        },
        {
          problem: "Stockende Partnerabstimmung",
          solution: "Klare dreisprachige Begleitung beschleunigt Entscheidungen.",
        },
      ],
    },
    process: {
      heading: "Prozess in 4 Schritten",
      intro: "Schnell und terminsicher.",
      steps: [
        {
          number: "01",
          title: "Bedarf klären",
          description: "Sprachrichtung und Beglaubigungsbedarf festlegen.",
        },
        {
          number: "02",
          title: "Zeitplan abstimmen",
          description: "Bearbeitungsdauer und Fachübersetzer koordinieren.",
        },
        {
          number: "03",
          title: "Ausarbeitung",
          description: "Sprachliche Umsetzung mit sauberer Fachterminologie.",
        },
        {
          number: "04",
          title: "Übergabe",
          description: "Fertige Dokumente und optionale Anschlusskorrespondenz.",
        },
      ],
    },
    inquiry: {
      heading: "Kommunikationshilfe anfragen",
      description: "Nennen Sie Sprachkombination, Textart und Wunschtermin.",
      prepChecklistTitle: "Hilfreiche Angaben",
      prepChecklist: [
        "Sprachkombination (DE ↔ TR / EN)",
        "Textart (geschäftlich, CV, amtlich)",
        "Gewünschter Abgabetermin",
      ],
      primaryCtaLabel: "Kommunikationshilfe anfragen",
      secondaryCtaLabel: "Alle Fachbereiche",
      sensitiveDataReminder:
        "Originale erst nach abgestimmtem Übertragungsweg senden.",
    },
    legalBoundary: {
      heading: "Hinweis zu Beglaubigungen",
      points: [
        "Nicht jede allgemeine Übersetzung ist amtlich beglaubigt.",
        "Beglaubigte Übersetzungen erstellen ausschließlich ermächtigte Übersetzer.",
      ],
    },
    relatedSlugs: ["behoerdenservice", "business-setup", "recruitment"],
  },

  "business-setup": {
    slug: "business-setup",
    inquiryTopic: "business",
    icon: "briefcase",
    seo: {
      title: "Business Setup Deutschland | KALKAN PARTNER",
      description:
        "Marktrecherche, Partner- und Lieferantensuche sowie Terminierung mit Notaren, Anwälten und Steuerberatern.",
      keywords: [
        "Unternehmensgründung Deutschland Koordination",
        "Markteintritt Deutschland aus der Türkei",
        "Geschäftspartner und Lieferantenrecherche Deutschland",
      ],
    },
    eyebrow: "Fachbereich 05 · Business Setup",
    title: "Business Setup & Markteintritt",
    lead: "Strukturierte Vorbereitung Ihres Starts in Deutschland – Recherche, Partnerkontakte und Terminierung mit Fachberatern.",
    audienceBadge: "Für Unternehmer, Gründer & Investoren",
    whatIs: {
      heading: "Was leisten wir?",
      paragraphs: [
        "Als operativer Projektkoordinator bereiten wir Markt- und Lieferantenrecherchen vor und steuern die Terminabläufe mit Notaren, Rechtsanwälten und Steuerberatern.",
      ],
      scopeTitle: "Koordinationsumfang",
      scopeItems: [
        "Markt- & Wettbewerbsrecherche",
        "Geschäftspartner- & Vertriebssuche",
        "Lieferantenrecherche & Angebote",
        "Gründungs-Ablaufkoordination",
        "Termine mit Notar, Anwalt & Steuerberater",
        "Administrative Projektbegleitung",
      ],
    },
    targetAudience: {
      heading: "Für wen gedacht?",
      intro: "Für einen planvollen Markteintritt.",
      groups: [
        {
          title: "Türkische & internationale Firmen",
          description: "Beim Aufbau einer Niederlassung oder Vertriebsstruktur in Deutschland.",
        },
        {
          title: "Existenzgründer",
          description: "Für geordnete Abläufe und lokale Lieferantenkontakte.",
        },
        {
          title: "Handelsprojekte",
          description: "Für seriöse Partner- und Lieferantenverbindungen.",
        },
      ],
    },
    problemsSolved: {
      heading: "Gelöste Herausforderungen",
      intro: "Klarer Fahrplan statt langwierigem Ausprobieren.",
      items: [
        {
          problem: "Fehlender Ablaufüberblick",
          solution: "Wir ordnen alle Etappen und bereiten Beratertermine vor.",
        },
        {
          problem: "Aufwendige Lieferantensuche",
          solution: "Gezielte Vorrecherche und strukturierte Erstkontakte.",
        },
        {
          problem: "Informationsverlust über Grenzen",
          solution: "Ein zweisprachiger Koordinator hält alle Fäden zusammen.",
        },
      ],
    },
    process: {
      heading: "Prozess in 4 Schritten",
      intro: "Vom Konzept zur operativen Aufstellung.",
      steps: [
        {
          number: "01",
          title: "Zielsetzung",
          description: "Branche, Zielregion und Bedarf klären.",
        },
        {
          number: "02",
          title: "Recherche",
          description: "Markt-, Partner- und Lieferantenkontakte aufbereiten.",
        },
        {
          number: "03",
          title: "Fachberater",
          description: "Termine mit Notaren, Anwälten und Steuerberatern koordinieren.",
        },
        {
          number: "04",
          title: "Projektsteuerung",
          description: "Meilensteine bis zum operativen Start begleiten.",
        },
      ],
    },
    inquiry: {
      heading: "Markteintritt besprechen",
      description: "Teilen Sie uns Ihre Branche und Region für eine kompakte Ersteinschätzung mit.",
      prepChecklistTitle: "Hilfreiche Angaben",
      prepChecklist: [
        "Branche & Zielregion in Deutschland",
        "Aktueller Projektstand",
        "Gewünschte Schwerpunkte",
      ],
      primaryCtaLabel: "Business-Setup anfragen",
      secondaryCtaLabel: "Alle Fachbereiche",
      sensitiveDataReminder:
        "Bitte noch keine vertraulichen Verträge oder Ausweisdaten senden.",
    },
    legalBoundary: {
      heading: "Abgrenzung zu Berufsträgern",
      points: [
        "KALKAN PARTNER erbringt organisatorische Koordination sowie Markt- und Partnerrecherchen.",
        "Rechts-, Steuerberatung und Beurkundungen erfolgen ausschließlich durch zugelassene Anwälte, Steuerberater und Notare.",
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
        "Kommunikations-, Dolmetscher- und Reisekoordination mit autorisierten Kliniken in der Türkei.",
      keywords: [
        "Medical Tourism Coordination Türkei",
        "Patientenkoordination Deutschland Türkei",
        "Gesundheitstourismus Organisation Türkei",
      ],
    },
    eyebrow: "Fachbereich 06 · Medical Tourism",
    title: "Medical Tourism Coordination",
    lead: "Transparente Kommunikations-, Dolmetscher- und Reisekoordination mit autorisierten Kliniken in der Türkei.",
    audienceBadge: "Für internationale Patienten",
    whatIs: {
      heading: "Was leisten wir?",
      paragraphs: [
        "Wir verbinden internationale Patienten ausschließlich organisatorisch und sprachlich mit autorisierten Krankenhäusern in der Türkei – klar getrennt von jeder medizinischen Beurteilung.",
      ],
      scopeTitle: "Koordinationsumfang",
      scopeItems: [
        "Kontakt zu autorisierten Kliniken (TR)",
        "Patientenkommunikation",
        "Übersetzungs- & Dolmetscherhilfe",
        "Unverbindliche Informationsanfragen",
        "Reise-, Transfer- & Hotelorganisation",
        "Nachgelagerte Rückmeldebegleitung",
      ],
    },
    targetAudience: {
      heading: "Für wen gedacht?",
      intro: "Für sachliche und verlässliche Organisation.",
      groups: [
        {
          title: "Patienten aus Europa",
          description: "Für sprachlich sichere Anfragen bei autorisierten Kliniken.",
        },
        {
          title: "Begleitpersonen",
          description: "Für sauber abgestimmte Reise- und Unterkunftsabläufe.",
        },
      ],
    },
    problemsSolved: {
      heading: "Gelöste Herausforderungen",
      intro: "Klare Strukturen statt unübersichtlicher Werbung.",
      items: [
        {
          problem: "Auswahl autorisierter Einrichtungen",
          solution: "Wir verbinden ausschließlich mit autorisierten Kliniken in der Türkei.",
        },
        {
          problem: "Sprachbarrieren vor Ort",
          solution: "Strukturierte Kommunikation und Dolmetscherkoordination.",
        },
        {
          problem: "Unkoordinierte Reiseabläufe",
          solution: "Anreise, Hotel und Kliniktermine sauber aufeinander abgestimmt.",
        },
      ],
    },
    process: {
      heading: "Prozess in 4 Schritten",
      intro: "Klare Trennung von Organisation und Medizin.",
      steps: [
        {
          number: "01",
          title: "Erstgespräch",
          description: "Allgemeinen Informationswunsch und Sprache klären.",
        },
        {
          number: "02",
          title: "Klinik-Kontakt",
          description: "Anfrage an autorisierte Einrichtung in der Türkei weiterleiten.",
        },
        {
          number: "03",
          title: "Ärztliche Klärung",
          description: "Medizinische Fragen klären allein Patient und Klinik direkt.",
        },
        {
          number: "04",
          title: "Reiselogistik",
          description: "Flug, Hotel, Dolmetscher und Nachkommunikation koordinieren.",
        },
      ],
    },
    inquiry: {
      heading: "Koordination anfragen",
      description: "Teilen Sie Ihren allgemeinen Wunsch mit – ohne medizinische Befunde.",
      prepChecklistTitle: "Hilfreiche Angaben",
      prepChecklist: [
        "Allgemeiner Themenbereich & Zielstadt",
        "Bevorzugte Sprache (DE / TR / EN)",
        "Ungefährer Reisezeitraum",
      ],
      primaryCtaLabel: "Koordinationsgespräch anfragen",
      secondaryCtaLabel: "Alle Fachbereiche",
      sensitiveDataReminder:
        "WICHTIG: Senden Sie niemals Arztbriefe, Diagnosen, Röntgenbilder oder Reisepässe.",
    },
    legalBoundary: {
      heading: "Medizinische & rechtliche Grenzen (HWG)",
      points: [
        "Keine Diagnosen, Therapien, Behandlungen oder medizinischen Erfolgsgarantien.",
        "Keine ungeprüften Heilversprechen oder Vorher-Nachher-Darstellungen (HWG).",
        "Behandlungsverträge entstehen ausschließlich direkt mit der autorisierten Klinik.",
        "Transparenz: Vergütung erfolgt entweder durch den Kunden oder als Servicevergütung der Partnerklinik.",
      ],
    },
    relatedSlugs: ["translation-communication", "relocation", "family-education"],
  },

  "digital-ai": {
    slug: "digital-ai",
    inquiryTopic: "business",
    icon: "cpu",
    seo: {
      title: "Digital & AI Solutions Deutschland | KALKAN PARTNER",
      description:
        "Unternehmenswebsites, SEO, Local SEO, GEO für KI-Suche, Chatbots und Automatisierung.",
      keywords: [
        "Digital & AI Services Deutschland",
        "Unternehmenswebsite SEO Local SEO Deutschland",
        "GEO AI Search Sichtbarkeit",
        "KI Chatbot und Prozessautomatisierung KMU",
      ],
    },
    eyebrow: "Fachbereich 07 · Digital & AI",
    title: "Digital & AI Solutions",
    lead: "Starke Websites, bessere Google- & KI-Sichtbarkeit (GEO) sowie praxistaugliche Automatisierung für den Mittelstand.",
    audienceBadge: "Für KMU, Gastronomie & Marken",
    whatIs: {
      heading: "Was leisten wir?",
      paragraphs: [
        "Wir verbinden modernes Webdesign mit technischer Suchmaschinen- und KI-Optimierung (SEO, Local SEO, GEO) sowie schlanken KI-Workflows, die im Alltag sofort entlasten.",
      ],
      scopeTitle: "Leistungsbausteine",
      scopeItems: [
        "Mehrsprachige Corporate Websites",
        "SEO für DE · TR · EN Zielgruppen",
        "Local SEO & Google Business Struktur",
        "GEO (KI-Such-Sichtbarkeit)",
        "Digitale Markenidentität & Content",
        "KI-Chatbots & Automatisierung",
      ],
    },
    targetAudience: {
      heading: "Für wen gedacht?",
      intro: "Für Betriebe mit Fokus auf Sichtbarkeit und Effizienz.",
      groups: [
        {
          title: "Mittelständische Betriebe",
          description: "Für professionelle Markenauftritte mit qualifizierten Anfragen.",
        },
        {
          title: "Gastronomie & Neueröffnungen",
          description: "Für starke regionale Sichtbarkeit ab dem ersten Öffnungstag.",
        },
        {
          title: "Wachsende Teams",
          description: "Für Automatisierung von Routineanfragen und Wissensabläufen.",
        },
      ],
    },
    problemsSolved: {
      heading: "Gelöste Herausforderungen",
      intro: "Digitale Kanäle, die messbar arbeiten.",
      items: [
        {
          problem: "Website ohne Anfragen",
          solution: "Klare Struktur, Vertrauen und direkte Anfragewege.",
        },
        {
          problem: "Geringe Sichtbarkeit bei Google & KI",
          solution: "Sauberes technisches SEO, Local SEO und GEO-Struktur.",
        },
        {
          problem: "Hoher manueller Aufwand",
          solution: "Schlanke Chatbots und Automatisierungen ohne Systemballast.",
        },
      ],
    },
    process: {
      heading: "Prozess in 4 Schritten",
      intro: "Modular und datenschutzbewusst.",
      steps: [
        {
          number: "01",
          title: "Digital-Check",
          description: "Auftritt, Suchpotenzial und Automationshebel analysieren.",
        },
        {
          number: "02",
          title: "Konzept & SEO",
          description: "Seitenarchitektur, Design und Keyword-Plan erstellen.",
        },
        {
          number: "03",
          title: "Umsetzung",
          description: "Website, Inhalte und KI-Flows DSGVO-bewusst bauen.",
        },
        {
          number: "04",
          title: "Übergabe",
          description: "Team-Schulung und optionale Weiterentwicklung.",
        },
      ],
    },
    inquiry: {
      heading: "Digitalprojekt besprechen",
      description: "Ob Website, SEO/GEO oder KI – wir skizzieren einen pragmatischen Plan.",
      prepChecklistTitle: "Hilfreiche Angaben",
      prepChecklist: [
        "Aktuelle Website & Zielregion",
        "Schwerpunkt (Website, SEO/GEO, KI)",
        "Gewünschter Starttermin",
      ],
      primaryCtaLabel: "Digitalprojekt anfragen",
      secondaryCtaLabel: "Alle Fachbereiche",
      sensitiveDataReminder:
        "Bitte teilen Sie im Erstkontakt keine Zugangsdaten oder API-Keys.",
    },
    legalBoundary: {
      heading: "Datenschutz & Verantwortung",
      points: [
        "Konzeption unter Berücksichtigung datenschutzkonformer (DSGVO) Architekturen.",
        "Juristische Endprüfungen von Rechtstexten erfolgen durch zugelassene Anwälte.",
      ],
    },
    relatedSlugs: ["business-setup", "restaurant-kitchen", "translation-communication"],
  },

  "family-education": {
    slug: "family-education",
    inquiryTopic: "general",
    icon: "graduationCap",
    seo: {
      title: "Family & Education Deutschland | KALKAN PARTNER",
      description:
        "Schul-, Kita- und Kursrecherchen sowie Studienbewerbungskoordination in Deutschland.",
      keywords: [
        "Schule Kita Recherche Deutschland",
        "Studienbewerbung Koordination Deutschland",
        "Family Education Service Deutschland Türkei",
      ],
    },
    eyebrow: "Fachbereich 08 · Family & Education",
    title: "Family & Education",
    lead: "Orientierung und Organisation für Schul-, Kita- und Kursrecherchen sowie Studienbewerbungen in Deutschland.",
    audienceBadge: "Für Familien, Schüler & Studierende",
    whatIs: {
      heading: "Was leisten wir?",
      paragraphs: [
        "Wir schaffen Klarheit in regional unterschiedlichen Bildungs- und Kita-Systemen: Recherche passender Einrichtungen, Checklisten für Bewerbungen und Unterstützung bei der Kommunikation.",
      ],
      scopeTitle: "Koordinationsumfang",
      scopeItems: [
        "Schul- & Schulformenrecherche",
        "Kita- & Kindergartenoptionen",
        "Sprach- & Weiterbildungskurse",
        "Studienbewerbungs-Checklisten",
        "Familien-Relocation-Verzahnung",
        "Unterkunftskommunikation",
      ],
    },
    targetAudience: {
      heading: "Für wen gedacht?",
      intro: "Für gut vorbereitete Bildungsentscheidungen.",
      groups: [
        {
          title: "Zuziehende Familien",
          description: "Eltern auf Suche nach passenden Kitas und Schulen vor Ort.",
        },
        {
          title: "Studieninteressierte",
          description: "Bewerber für geordnete Hochschul- und Sprachkursfristen.",
        },
        {
          title: "Kursteilnehmer",
          description: "Für den strukturierten Vergleich geeigneter Bildungsanbieter.",
        },
      ],
    },
    problemsSolved: {
      heading: "Gelöste Herausforderungen",
      intro: "Keine verpassten Anmeldefristen.",
      items: [
        {
          problem: "Regionale Zuständigkeiten",
          solution: "Klare Übersicht lokaler Optionen, Portale und Fristen.",
        },
        {
          problem: "Formale Bewerbungsfehler",
          solution: "Prüffreundliche Checklisten vor Einreichung.",
        },
        {
          problem: "Sprachhürden bei Einrichtungen",
          solution: "Sachliche deutschsprachige Korrespondenz und Termine.",
        },
      ],
    },
    process: {
      heading: "Prozess in 4 Schritten",
      intro: "Passend zum Bildungsjahr.",
      steps: [
        {
          number: "01",
          title: "Ziel & Stadt",
          description: "Alter, Bildungsstand und Zielregion erfassen.",
        },
        {
          number: "02",
          title: "Recherche",
          description: "Passende Schulen, Kitas oder Kurse samt Fristen vorlegen.",
        },
        {
          number: "03",
          title: "Unterlagen",
          description: "Bewerbungs- und Anmeldeunterlagen strukturieren.",
        },
        {
          number: "04",
          title: "Begleitung",
          description: "Termine und Rückfragen bis zur Rückmeldung koordinieren.",
        },
      ],
    },
    inquiry: {
      heading: "Bildungsberatung anfragen",
      description: "Nennen Sie Zielstadt und Bedarf für einen klaren Überblick.",
      prepChecklistTitle: "Hilfreiche Angaben",
      prepChecklist: [
        "Zielstadt/Bundesland & Zeitraum",
        "Bedarf (Kita, Schule, Kurs, Studium)",
        "Aktueller Sprachstand",
      ],
      primaryCtaLabel: "Family & Education anfragen",
      secondaryCtaLabel: "Alle Fachbereiche",
      sensitiveDataReminder:
        "Im Erstkontakt bitte keine Zeugnisoriginale oder Urkunden senden.",
    },
    legalBoundary: {
      heading: "Leistungsabgrenzung",
      points: [
        "Organisatorische Recherche und Bewerbungskoordination.",
        "Über Zulassungen und Platzvergaben entscheiden ausschließlich die Einrichtungen.",
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
      title: "Restaurant & Kitchen Solutions Deutschland | KALKAN PARTNER",
      description:
        "Konzept, Eröffnungskoordination, Küchenlayout, Geräteauswahl, Menü, Rezepturen, Food Cost, SOPs und Startbegleitung.",
      keywords: [
        "Restaurantberatung Deutschland",
        "Küchenplanung Gastronomie",
        "Restaurant eröffnen Deutschland Unterstützung",
        "Food Cost Kalkulation und SOP Gastronomie",
      ],
    },
    eyebrow: "Fachbereich 09 · Kernkompetenz",
    title: "Restaurant & Kitchen Solutions",
    lead: "Echte Küchenpraxis von der Idee bis zum Service: Küchenlayout, Gerätewahl, Menü, Rezepturen, Food Cost, SOPs und Eröffnungssupport.",
    audienceBadge: "Für Gastronomiegründer & bestehende Betriebe",
    whatIs: {
      heading: "Was leisten wir?",
      paragraphs: [
        "Statt theoretischer Folien entwickeln wir praxisnahe Küchen- und Gastronomiesysteme, die im Hochbetrieb funktionieren – von der Flächenaufteilung über Geräte und Wareneinsatz bis zu klaren Team-SOPs.",
      ],
      scopeTitle: "Operativer Leistungsumfang",
      scopeItems: [
        "Konzeptentwicklung & Eröffnungskoordination",
        "Layout für warme/kalte Küche, Spüle & Lager",
        "Geräteauswahl & Lieferantenkoordination",
        "Menü, Rezepturen & Grammaturen",
        "Food-Cost- & Margenkalkulation",
        "SOP-Handbücher & Teamstruktur",
        "Gastraum- & Service-Workflow",
        "Pre-Opening & Eröffnungsbegleitung",
      ],
    },
    targetAudience: {
      heading: "Für wen gedacht?",
      intro: "Für wirtschaftlich sauber aufgestellte Gastronomiebetriebe.",
      groups: [
        {
          title: "Restaurantgründer",
          description: "Um teure Fehlplanungen bei Geräten, Wegen und Kalkulation zu vermeiden.",
        },
        {
          title: "Bestehende Betriebe",
          description: "Für geringeren Food Cost, kürzere Wege und konstante Qualität.",
        },
        {
          title: "Multi-Unit-Konzepte",
          description: "Für einheitliche Rezepturen und SOPs an mehreren Standorten.",
        },
      ],
    },
    problemsSolved: {
      heading: "Gelöste Herausforderungen",
      intro: "Fehler verhindern, bevor Geld investiert wird.",
      items: [
        {
          problem: "Lange Laufwege & falsche Geräte",
          solution: "Ergonomische Küchenzonen entlang des realen Produktionsflusses.",
        },
        {
          problem: "Schwankende Qualität & hoher Food Cost",
          solution: "Exakte Grammaturen, Rezepturkarten und klare Wareneinsatz-Kalkulation.",
        },
        {
          problem: "Startchaos bei Eröffnung",
          solution: "Praxisnahe SOPs, klare Postenrollen und abgestimmter Pass-Workflow.",
        },
      ],
    },
    process: {
      heading: "Prozess in 5 Etappen",
      intro: "Vom Konzept zum laufenden Betrieb.",
      steps: [
        {
          number: "01",
          title: "Konzept & Fläche",
          description: "Zielmenü, Kapazität und Raumbedingungen prüfen.",
        },
        {
          number: "02",
          title: "Layout & Geräte",
          description: "Zonierung, Gerätelisten und Lieferantenvergleich.",
        },
        {
          number: "03",
          title: "Menü & Food Cost",
          description: "Rezepturkarten, Grammaturen und Kalkulation aufbauen.",
        },
        {
          number: "04",
          title: "SOPs & Montage",
          description: "Arbeitsanweisungen, Postenplan und Lieferkoordination.",
        },
        {
          number: "05",
          title: "Pre-Opening",
          description: "Testläufe und operative Unterstützung zur Eröffnung.",
        },
      ],
    },
    inquiry: {
      heading: "Gastronomie-Projekt besprechen",
      description: "Schildern Sie uns kurz Konzept, Standort und Zeitplan.",
      prepChecklistTitle: "Hilfreiche Angaben",
      prepChecklist: [
        "Konzeptart (Restaurant, Café, Systemgastronomie)",
        "Standort, Fläche / Sitzplätze & Projektstand",
        "Gewünschte Schwerpunkte",
      ],
      primaryCtaLabel: "Restaurant-Projekt anfragen",
      secondaryCtaLabel: "Alle Fachbereiche",
      sensitiveDataReminder:
        "Pachtverträge oder Baupläne benötigen wir erst nach dem Erstgespräch.",
    },
    legalBoundary: {
      heading: "Fachplanerische Abgrenzung",
      points: [
        "Wir erbringen operative Küchenorganisation, Konzept-, Kalkulations- und Eröffnungskoordination.",
        "Genehmigungspflichtige Architektur-, Statik-, Elektro-, Gas-, Brandschutz- und Lüftungsplanungen erfolgen ausschließlich durch zugelassene Fachplaner.",
      ],
    },
    relatedSlugs: ["business-setup", "recruitment", "digital-ai"],
  },
};
