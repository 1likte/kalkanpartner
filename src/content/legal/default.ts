import type { Locale } from "@/i18n/config";
import type { LocaleLegalDictionary } from "./types";

export const legalContentDefault: Record<Locale, LocaleLegalDictionary> = {
  de: {
    languageBindingNotice: "",
    labels: {
      ownerPrefix: "Inhaberin: ",
      phoneWhatsappLabel: "Telefon & WhatsApp",
      emailLabel: "E-Mail",
      websiteLabel: "Website",
      mstvHeading: "Redaktionell verantwortlich gemäß § 18 Abs. 2 MStV",
      registryHeading: "Weitere gesetzliche Angaben",
      backToContact: "← Zur Kontaktseite",
      toPrivacy: "Datenschutzerklärung →",
      toImprint: "Impressum →",
      toTerms: "AGB & Widerrufsbelehrung →",
    },
    imprint: {
      seoTitle: "Impressum | Semra Kalkan – KALKAN PARTNER",
      seoDescription:
        "Gesetzliche Anbieterkennzeichnung gemäß § 5 DDG und § 18 Abs. 2 MStV für Semra Kalkan – KALKAN PARTNER.",
      badge: "§ 5 DDG · RECHTLICHE ANGABEN",
      title: "Impressum",
      subtitle:
        "Gesetzliche Anbieterkennzeichnung gemäß § 5 Digitale-Dienste-Gesetz (DDG).",
      warningTitle: "",
      warningBody: "",
      showContactBlock: true,
      sections: [
        {
          heading: "Tätigkeitsbereich",
          paragraphs: [
            "Semra Kalkan – KALKAN PARTNER ist ein international ausgerichtetes Dienstleistungs- und Koordinationsunternehmen mit Sitz in Deutschland.",
            "Das Leistungsspektrum umfasst insbesondere internationale Personalvermittlungs- und Kandidatenkoordination, Relocation- und Organisationsleistungen, Behörden- und Dokumentenkoordination, Übersetzungs- und Kommunikationsservices, Unterstützung bei internationalen Geschäftsvorhaben, Koordination im Bereich Medizintourismus, digitale und KI-gestützte Lösungen, Bildungs- und Familienservices sowie operative Restaurant- und Küchenlösungen.",
          ],
        },
        {
          heading: "Hinweis zum Leistungsumfang & rechtliche Abgrenzung",
          paragraphs: [
            "Die angebotenen Leistungen umfassen je nach Auftrag organisatorische, kommunikative, recherchierende und koordinierende Tätigkeiten.",
            "KALKAN PARTNER erbringt keine eigenständige Rechtsberatung im Sinne des Rechtsdienstleistungsgesetzes (RDG), keine Steuerberatung, keine medizinische Diagnose oder Behandlung, keine Arbeitnehmerüberlassung (AÜG) sowie keine erlaubnispflichtige Immobilienmaklertätigkeit gemäß § 34c GewO. Tätigkeiten, für die eine besondere gesetzliche Zulassung oder berufliche Qualifikation erforderlich ist, werden ausschließlich durch unabhängige, entsprechend befugte Berufsträger oder autorisierte Einrichtungen durchgeführt.",
          ],
        },
        {
          heading: "Verbraucherstreitbeilegung (§ 36 VSBG)",
          paragraphs: [
            "Wir sind nicht verpflichtet und grundsätzlich nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
          ],
        },
        {
          heading: "Urheberrecht",
          paragraphs: [
            "Die durch die Seitenbetreiberin erstellten Inhalte, Texte, Grafiken und Strukturen auf diesen Seiten unterliegen dem deutschen Urheberrecht. Jede Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung.",
          ],
        },
      ],
    },
    privacy: {
      seoTitle: "Datenschutzerklärung | Semra Kalkan – KALKAN PARTNER",
      seoDescription:
        "DSGVO-konforme Datenschutzerklärung für KALKAN PARTNER einschließlich Informationen zu Hosting (Vercel), Speicherdauer, Medizintourismus (Art. 9 DSGVO) und Betroffenenrechten.",
      badge: "DSGVO · DATENSCHUTZ",
      title: "Datenschutzerklärung",
      subtitle:
        "Informationen gemäß Art. 13, 14 und 21 der Datenschutz-Grundverordnung (DSGVO).",
      warningTitle: "",
      warningBody: "",
      showContactBlock: true,
      sections: [
        {
          heading: "1. Verantwortliche Stelle",
          paragraphs: [
            "Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist Semra Kalkan – KALKAN PARTNER (Anschrift und Kontaktdaten wie oben aufgeführt).",
          ],
        },
        {
          heading: "2. Hosting, Auftragsverarbeitung & Drittlandtransfer (Vercel Inc.)",
          paragraphs: [
            "Unsere Website wird bei dem externen Dienstleister Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet. Mit Vercel besteht ein Auftragsverarbeitungsvertrag (Data Processing Addendum – DPA) gemäß Art. 28 DSGVO.",
            "Beim Aufruf unserer Seiten erfasst die Infrastruktur von Vercel technisch notwendige Verbindungsdaten (Server-Logfiles: IP-Adresse, Datum und Uhrzeit des Abrufs, aufgerufene URL, Referrer-URL, Browsertyp und Betriebssystem). Rechtsgrundlage ist unser berechtigtes Interesse an einer sicheren, stabilen und performanten Bereitstellung unserer Website gemäß Art. 6 Abs. 1 lit. f DSGVO.",
            "Drittlandtransfer: Eine Übermittlung technischer Verbindungsdaten in die USA kann nicht ausgeschlossen werden. Vercel Inc. ist nach dem EU-US Data Privacy Framework (DPF) zertifiziert, sodass ein Angemessenheitsbeschluss der EU-Kommission gemäß Art. 45 DSGVO greift; ergänzend stützt sich die Übermittlung auf Standardvertragsklauseln der EU-Kommission gemäß Art. 46 Abs. 2 lit. c DSGVO.",
            "Speicherdauer: Server-Logfiles werden spätestens nach 30 Tagen automatisch gelöscht, sofern keine sicherheitsrelevante Aufklärung (z. B. bei Angriffsversuchen) eine längere Aufbewahrung zu Beweiszwecken erfordert.",
          ],
        },
        {
          heading: "3. Kontaktformular, E-Mail-Kommunikation & Speicherdauer",
          paragraphs: [
            "Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, verarbeiten wir Ihre Angaben (Kundentyp, gewählter Fachbereich, Land, Vor- und Nachname, E-Mail-Adresse, optionale Telefonnummer sowie Ihre Nachricht). Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen bzw. Vertragserfüllung) sowie bei allgemeinen Anfragen Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sachgerechten Beantwortung).",
            "Für den technischen E-Mail-Versand von Formularanfragen nutzen wir entweder den verschlüsselten SMTP-Postausgang unseres eigenen geschäftlichen E-Mail-Postfachs oder den Transaktions-E-Mail-Dienst Resend Inc., 2261 Market Street #4818, San Francisco, CA 94114, USA (auf Grundlage eines Auftragsverarbeitungsvertrags gemäß Art. 28 DSGVO sowie EU-US Data Privacy Framework / Standardvertragsklauseln nach Art. 45, 46 DSGVO). Kundenanfragen werden nicht in einer externen Website-Datenbank gespeichert, sondern direkt als E-Mail an unser Geschäftspostfach zugestellt.",
            "Speicherdauer: Ihre Anfragedaten werden gelöscht, sobald Ihr Anliegen abschließend bearbeitet wurde und der Zweck der Speicherung entfällt, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Soweit geschäfts- oder steuerrechtlich relevante Korrespondenz vorliegt, gelten die gesetzlichen Aufbewahrungsfristen von 6 Jahren (§ 257 HGB) bzw. 10 Jahren (§ 147 AO).",
          ],
        },
        {
          heading: "4. Besondere Kategorien personenbezogener Daten im Bereich Medizintourismus (Art. 9 & Art. 49 DSGVO)",
          paragraphs: [
            "Anfragen im Fachbereich Medizintourismus-Koordination können bereits durch die Nennung eines gewünschten Behandlungs- oder Fachgebiets Gesundheitsdaten im Sinne von Art. 9 Abs. 1 DSGVO enthalten. Über unsere Website-Formulare dürfen keine Arztbriefe, Befunde, Röntgenbilder oder Ausweiskopien hochgeladen werden.",
            "Rechtsgrundlage: Die Verarbeitung gesundheitsbezogener Angaben im Rahmen Ihrer Koordinationsanfrage erfolgt ausschließlich auf Grundlage Ihrer ausdrücklichen Einwilligung gemäß Art. 9 Abs. 2 lit. a DSGVO in Verbindung mit Art. 6 Abs. 1 lit. a DSGVO.",
            "Drittlandtransfer in die Türkei: Soweit Sie wünschen, dass wir Ihre Anfrage zur Einholung von Informationen oder Terminen an autorisierte Krankenhäuser oder zugelassene Gesundheitstourismus-Einrichtungen in der Republik Türkei weiterleiten, findet eine Datenübermittlung in ein Drittland außerhalb der EU/des EWR statt. Für die Türkei besteht derzeit kein Angemessenheitsbeschluss der EU-Kommission nach Art. 45 DSGVO. Die Übermittlung erfolgt daher ausschließlich auf Grundlage Ihrer ausdrücklichen Einwilligung nach Information über die möglichen Risiken gemäß Art. 49 Abs. 1 lit. a DSGVO. Sie können diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3 DSGVO).",
          ],
        },
        {
          heading: "5. Bewerber- und Kandidatendaten im Bereich Personalvermittlung (Art. 6 Abs. 1 lit. b DSGVO, § 26 BDSG)",
          paragraphs: [
            "Wenn Sie sich als Kandidat an unseren Fachbereich Personalvermittlung wenden, verarbeiten wir Ihre Angaben zur beruflichen Qualifikation, Sprachkenntnissen und Erreichbarkeit zum Zweck der Prüfung passender Vakanzen und der strukturierten Vorstellung bei potenziellen Arbeitgebern in Deutschland (Art. 6 Abs. 1 lit. b DSGVO, § 26 BDSG). Eine Weitergabe an konkrete Arbeitgeber erfolgt nur im Rahmen Ihres Auftrags bzw. nach Abstimmung.",
            "Speicherdauer: Kommt es zu keiner Vermittlung, werden Bewerberunterlagen spätestens 6 Monate nach Abschluss des jeweiligen Prozesses gelöscht, sofern Sie nicht ausdrücklich in eine längere Aufnahme in unseren Kandidatenpool eingewilligt haben (Art. 6 Abs. 1 lit. a DSGVO).",
          ],
        },
        {
          heading: "6. Externe Kontaktlinks zu WhatsApp & Telegram",
          paragraphs: [
            "Auf unserer Website stellen wir reine externe Verlinkungen zu WhatsApp (WhatsApp Ireland Limited, Merrion Road, Dublin 4, Irland / Meta Platforms Inc., USA) und Telegram (Telegram FZ-LLC) bereit. Beim bloßen Besuch unserer Website werden keinerlei Daten an diese Anbieter übertragen. Erst wenn Sie aktiv auf den jeweiligen Button klicken, wird eine Verbindung zum jeweiligen Dienst hergestellt und es gelten die Datenschutzbestimmungen des jeweiligen Betreibers. Die Nutzung von Messengern erfolgt freiwillig (Art. 6 Abs. 1 lit. a bzw. lit. b DSGVO).",
          ],
        },
        {
          heading: "7. Lokale Schriftarten, Cookies & Administrationsbereich (§ 25 Abs. 2 TDDDG)",
          paragraphs: [
            "Schriftarten werden lokal von unserem eigenen Server ausgeliefert (selbstgehostete Webfonts); beim Seitenaufruf findet keine Verbindung zu Servern von Google Fonts statt.",
            "Unsere Website setzt keine Analyse-, Tracking- oder Werbe-Cookies ein. Lediglich bei Anmeldung im geschützten Administrationsbereich wird ein technisch zwingend erforderliches, kryptografisch signiertes Sitzungs-Cookie (HttpOnly, Speicherdauer max. 12 Stunden) gemäß § 25 Abs. 2 Nr. 2 TDDDG und Art. 6 Abs. 1 lit. f DSGVO gespeichert.",
          ],
        },
        {
          heading: "8. Pflicht zur Bereitstellung von Daten & Keine automatisierte Entscheidungsfindung",
          paragraphs: [
            "Die Bereitstellung Ihrer personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben; für die Bearbeitung einer Kontaktanfrage oder den Abschluss eines Koordinationsauftrags sind die als Pflichtfelder gekennzeichneten Basisangaben jedoch erforderlich. Ohne diese Angaben können wir Ihre Anfrage nicht bearbeiten (Art. 13 Abs. 2 lit. e DSGVO).",
            "Eine automatisierte Entscheidungsfindung einschließlich Profiling gemäß Art. 22 DSGVO findet nicht statt.",
          ],
        },
        {
          heading: "9. Widerrufsrecht, Betroffenenrechte & Zuständige Aufsichtsbehörde",
          paragraphs: [
            "Widerruf von Einwilligungen (Art. 7 Abs. 3 DSGVO): Eine erteilte Einwilligung können Sie jederzeit formlos (z. B. per E-Mail an kontakt@kalkanpartner.de) mit Wirkung für die Zukunft widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt.",
            "Betroffenenrechte: Sie haben nach Maßgabe der gesetzlichen Bestimmungen das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) sowie Widerspruch gegen Verarbeitungen auf Basis von Art. 6 Abs. 1 lit. f DSGVO (Art. 21 DSGVO).",
            "Beschwerderecht bei der Aufsichtsbehörde (Art. 77 DSGVO): Ihnen steht das Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde zu. Für unseren Unternehmenssitz in Baden-Württemberg ist zuständig: Der Landesbeauftragte für Datenschutz und Informationsfreiheit Baden-Württemberg (LfDI BW), Lautenschlagerstraße 20, 70173 Stuttgart (Postanschrift: Postfach 10 29 32, 70025 Stuttgart), Website: https://www.baden-wuerttemberg.datenschutz.de.",
          ],
        },
      ],
    },
    terms: {
      seoTitle: "AGB & Widerrufsbelehrung | Semra Kalkan – KALKAN PARTNER",
      seoDescription:
        "Allgemeine Geschäftsbedingungen (AGB) für B2B- und B2C-Kunden sowie gesetzliche Widerrufsbelehrung und Muster-Widerrufsformular von Semra Kalkan – KALKAN PARTNER.",
      badge: "AGB & WIDERRUFSBELEHRUNG",
      title: "Allgemeine Geschäftsbedingungen (AGB) & Widerrufsbelehrung",
      subtitle:
        "Vertragsbedingungen für Koordinations- und Organisationsleistungen gegenüber Unternehmern (B2B) und Verbrauchern (B2C).",
      warningTitle: "",
      warningBody: "",
      showContactBlock: false,
      sections: [
        {
          heading: "§ 1 Geltungsbereich & Vertragspartner",
          paragraphs: [
            "Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über Organisations-, Kommunikations-, Recherche- und Koordinationsleistungen zwischen Semra Kalkan – KALKAN PARTNER, Hauptstraße 192, 79739 Schwörstadt, Deutschland (nachfolgend „KALKAN PARTNER“) und ihren Auftraggebern.",
            "Das Angebot richtet sich sowohl an Unternehmer im Sinne des § 14 BGB (B2B) als auch an Verbraucher im Sinne des § 13 BGB (B2C). Abweichende Geschäftsbedingungen eines Unternehmers finden keine Anwendung, es sei denn, KALKAN PARTNER stimmt ihrer Geltung ausdrücklich in Textform zu.",
          ],
        },
        {
          heading: "§ 2 Leistungsgegenstand & Rechtliche Abgrenzung",
          paragraphs: [
            "KALKAN PARTNER erbringt als Dienstvertrag (§§ 611 ff. BGB) organisatorische, sprachlich-kommunikative, recherchierende und koordinierende Unterstützungsleistungen gemäß dem jeweils individuell vereinbarten Angebot. Ein bestimmter behördlicher, wirtschaftlicher oder medizinischer Erfolg wird nicht geschuldet.",
          ],
          bullets: [
            "Keine Rechtsberatung oder Rechtsvertretung im Sinne des RDG sowie keine Steuerberatung",
            "Keine medizinische Diagnose, Beratung, Therapie oder Heilungsgarantie; Behandlungsverträge entstehen ausschließlich direkt mit autorisierten Kliniken",
            "Keine Arbeitnehmerüberlassung (AÜG) und keine erlaubnispflichtige Immobilienvermittlung gemäß § 34c GewO",
            "Keine genehmigungspflichtigen Architektur-, Statik-, Elektro-, Gas-, Brandschutz- oder Lüftungsfachplanungen",
          ],
        },
        {
          heading: "§ 3 Besondere Regelungen für Personalvermittlung & Medizintourismus",
          paragraphs: [
            "Personalvermittlung: Arbeitsverträge kommen ausschließlich direkt zwischen Arbeitgeber und Arbeitnehmer zustande. Von stellensuchenden Bewerbern wird keine unzulässige Vermittlungsvergütung erhoben; eine etwaige Koordinations- oder Erfolgsvergütung im Bereich Personalgewinnung richtet sich nach gesonderter schriftlicher Vereinbarung mit dem jeweiligen Auftraggeber (i. d. R. Arbeitgeber) einschließlich individuell vereinbarter Fälligkeits- und Nachbesetzungsregelungen.",
            "Medizintourismus-Koordination: KALKAN PARTNER übernimmt ausschließlich Kommunikations-, Übersetzungs- und Reisekoordination mit autorisierten Gesundheitseinrichtungen in der Türkei. Für die medizinische Aufklärung, Durchführung und Nachsorge haftet allein der jeweilige medizinische Leistungserbringer. KALKAN PARTNER kann für die Koordinationsleistung entweder ein mit dem Kunden vereinbartes Servicehonorar oder eine Vermittlungs-/Servicevergütung von der autorisierten Partnerinstitution erhalten.",
          ],
        },
        {
          heading: "§ 4 Vertragsschluss & Mitwirkungspflichten",
          paragraphs: [
            "Die Darstellung der Leistungen auf der Website stellt noch kein rechtlich bindendes Angebot dar. Ein Vertrag kommt erst durch ein individuelles Angebot von KALKAN PARTNER in Textform (z. B. per E-Mail) und dessen Annahme durch den Kunden zustande.",
            "Der Kunde stellt alle zur Leistungserbringung erforderlichen, wahrheitsgemäßen Informationen und Unterlagen rechtzeitig zur Verfügung und prüft behördliche oder vertragliche Fristen eigenverantwortlich mit.",
          ],
        },
        {
          heading: "§ 5 Vergütung & Zahlungsbedingungen",
          paragraphs: [
            "Es gilt die im jeweiligen Einzelangebot vereinbarte Vergütung. Sofern nicht anders angegeben, verstehen sich Preise gegenüber Verbrauchern als Gesamtpreise in Euro; gegenüber Unternehmern verstehen sich Preise zuzüglich etwaig gesetzlich anfallender Umsatzsteuer.",
            "Rechnungen sind innerhalb von 14 Tagen ab Rechnungszugang ohne Abzug zur Zahlung fällig, sofern im Einzelangebot nichts Abweichendes geregelt ist.",
          ],
        },
        {
          heading: "§ 6 Haftung (§ 309 Nr. 7 BGB)",
          paragraphs: [
            "KALKAN PARTNER haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei schuldhafter Verletzung von Leben, Körper oder Gesundheit.",
            "Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten (Kardinalpflichten, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Vertragspartner regelmäßig vertrauen darf) ist die Haftung der Höhe nach auf den bei Vertragsschluss vorhersehbaren, vertragstypischen Schaden begrenzt. Im Übrigen ist die Haftung für leichte Fahrlässigkeit ausgeschlossen.",
            "KALKAN PARTNER haftet nicht für Leistungen, Arbeitsergebnisse oder Pflichtverletzungen unabhängiger Dritter (z. B. Arbeitgeber, Vermieter, Behörden, Rechtsanwälte, Steuerberater, Fachplaner oder Kliniken), mit denen der Kunde eigene Vertragsbeziehungen eingeht.",
          ],
        },
        {
          heading: "§ 7 Anwendbares Recht, Gerichtsstand & Vertragssprache",
          paragraphs: [
            "Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Gegenüber Verbrauchern gilt diese Rechtswahl nur insoweit, als dadurch nicht der gewährte Schutz durch zwingende Bestimmungen des Rechts des Staates entzogen wird, in dem der Verbraucher seinen gewöhnlichen Aufenthalt hat (Art. 6 Abs. 2 Rom-I-VO).",
            "Ist der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertragsverhältnis der Geschäftssitz von KALKAN PARTNER.",
            "Maßgebliche Vertrags- und Rechtssprache ist Deutsch. Türkische und englische Übersetzungen dieser Bedingungen dienen ausschließlich der leichteren Verständlichkeit; im Zweifel hat die deutsche Fassung Vorrang.",
          ],
        },
        {
          heading: "Widerrufsbelehrung für Verbraucher (Dienstleistungen)",
          paragraphs: [
            "Verbrauchern (§ 13 BGB) steht bei außerhalb von Geschäftsräumen geschlossenen Verträgen und bei Fernabsatzverträgen (§ 312c BGB) ein gesetzliches Widerrufsrecht nach Maßgabe der folgenden Belehrung zu:",
            "Widerrufsrecht: Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.",
            "Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Semra Kalkan – KALKAN PARTNER, Hauptstraße 192, 79739 Schwörstadt, Deutschland, Telefon: +49 152 04481954, E-Mail: kontakt@kalkanpartner.de) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das untenstehende Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist. Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.",
            "Folgen des Widerrufs: Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.",
            "Wertersatz & vorzeitiges Erlöschen (§ 357a Abs. 2, § 356 Abs. 4 BGB): Haben Sie ausdrücklich verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen sollen, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht. Das Widerrufsrecht erlischt bei einem Vertrag zur Erbringung von Dienstleistungen auch dann, wenn wir die Dienstleistung vollständig erbracht haben und mit der Ausführung der Dienstleistung erst begonnen haben, nachdem Sie dazu Ihre ausdrückliche Zustimmung gegeben und gleichzeitig Ihre Kenntnis davon bestätigt haben, dass Sie Ihr Widerrufsrecht bei vollständiger Vertragserfüllung durch uns verlieren.",
          ],
        },
        {
          heading: "Muster-Widerrufsformular",
          paragraphs: [
            "(Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)",
          ],
          bullets: [
            "An: Semra Kalkan – KALKAN PARTNER, Hauptstraße 192, 79739 Schwörstadt, Deutschland, E-Mail: kontakt@kalkanpartner.de",
            "Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung (*):",
            "Bestellt am (*) / Vertragsabschluss am (*):",
            "Name des/der Verbraucher(s):",
            "Anschrift des/der Verbraucher(s):",
            "Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):",
            "Datum: — (*) Unzutreffendes streichen.",
          ],
        },
      ],
    },
  },

  tr: {
    languageBindingNotice:
      "Dil Önceliği Beyanı: Bu Türkçe metin bilgilendirme ve kolaylık amacıyla sunulmuştur. Herhangi bir yorum farkı veya çelişki halinde hukuken bağlayıcı olan Almanca metindir (Impressum / Datenschutzerklärung / AGB).",
    labels: {
      ownerPrefix: "İşletme Sahibi (Inhaberin): ",
      phoneWhatsappLabel: "Telefon & WhatsApp",
      emailLabel: "E-posta",
      websiteLabel: "Web Sitesi",
      mstvHeading: "§ 18 Abs. 2 MStV Uyarınca İçerikten Sorumlu Kişi",
      registryHeading: "Ek Yasal Bilgiler",
      backToContact: "← İletişim sayfasına dön",
      toPrivacy: "Gizlilik ve Kişisel Verilerin Korunması Beyanı →",
      toImprint: "Künye (Impressum) →",
      toTerms: "Hizmet Şartları ve Cayma Hakları →",
    },
    imprint: {
      seoTitle: "Künye (Impressum) | Semra Kalkan – KALKAN PARTNER",
      seoDescription:
        "Alman § 5 DDG ve § 18 Abs. 2 MStV uyarınca Semra Kalkan – KALKAN PARTNER yasal sağlayıcı künyesi.",
      badge: "§ 5 DDG · YASAL KÜNYE",
      title: "Künye (Impressum)",
      subtitle:
        "Alman Dijital Hizmetler Yasası (§ 5 DDG) uyarınca yasal sağlayıcı bilgileri.",
      warningTitle: "",
      warningBody: "",
      showContactBlock: true,
      sections: [
        {
          heading: "Faaliyet Alanı (Tätigkeitsbereich)",
          paragraphs: [
            "Semra Kalkan – KALKAN PARTNER, Almanya merkezli uluslararası odaklı bir hizmet ve süreç koordinasyon işletmesidir.",
            "Hizmet yelpazesi özellikle uluslararası personel ve aday koordinasyonu, taşınma ve yerleşim organizasyonu, idari kurum ve belge koordinasyonu, çeviri ve iletişim hizmetleri, uluslararası iş girişimlerine destek, sağlık turizmi koordinasyonu, dijital ve yapay zekâ destekli çözümler, eğitim ve aile hizmetleri ile operasyonel restoran ve mutfak çözümlerini kapsar.",
          ],
        },
        {
          heading: "Hizmet Kapsamı ve Hukuki Sınırlar",
          paragraphs: [
            "Sunulan hizmetler, üstlenilen göreve bağlı olarak organizasyonel, iletişimsel, araştırma ve koordinasyon faaliyetlerinden oluşur.",
            "KALKAN PARTNER; Alman Hukuki Hizmetler Yasası (RDG) kapsamında hukuki danışmanlık, vergi danışmanlığı, tıbbi teşhis veya tedavi, personel kiralama (Arbeitnehmerüberlassung) ya da § 34c GewO kapsamında izin gerektiren emlak aracılığı sunmaz. Özel yasal izin veya mesleki yetki gerektiren faaliyetler yalnızca bağımsız ve ilgili alanda yetkili profesyoneller veya kuruluşlar tarafından yürütülür.",
          ],
        },
        {
          heading: "Tüketici Uyuşmazlık Çözümü (§ 36 VSBG)",
          paragraphs: [
            "Bir tüketici uzlaştırma/hakem kurulu nezdindeki uyuşmazlık çözüm süreçlerine katılma yükümlülüğümüz bulunmamaktadır ve ilke olarak katılmamaktayız.",
          ],
        },
        {
          heading: "Telif Hakkı (Urheberrecht)",
          paragraphs: [
            "Bu sitede işletme tarafından oluşturulan tüm metinler, görseller ve sayfa yapıları Alman telif hukuku koruması altındadır; yazılı izin olmaksızın telif sınırları dışında kullanılamaz.",
          ],
        },
      ],
    },
    privacy: {
      seoTitle: "Gizlilik ve Kişisel Verilerin Korunması Beyanı | KALKAN PARTNER",
      seoDescription:
        "DSGVO (GDPR) uyumlu gizlilik beyanı: Vercel barındırma ve ABD veri aktarımı, saklama süreleri, sağlık turizmi özel nitelikli veri rızası (Madde 9) ve veri sahibi hakları.",
      badge: "DSGVO · GİZLİLİK BEYANI",
      title: "Gizlilik ve Kişisel Verilerin Korunması Beyanı",
      subtitle:
        "Avrupa Genel Veri Koruma Tüzüğü (DSGVO Madde 13, 14 ve 21) uyarınca aydınlatma beyanı.",
      warningTitle: "",
      warningBody: "",
      showContactBlock: true,
      sections: [
        {
          heading: "1. Veri Sorumlusu",
          paragraphs: [
            "DSGVO anlamında bu web sitesindeki kişisel veri işleme faaliyetlerinden sorumlu kişi: Semra Kalkan – KALKAN PARTNER (adres ve iletişim bilgileri yukarıda yer almaktadır).",
          ],
        },
        {
          heading: "2. Barındırma (Vercel Inc.), Veri İşleme Sözleşmesi ve ABD Aktarımı",
          paragraphs: [
            "Web sitemiz Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, ABD altyapısında barındırılmaktadır. Vercel ile DSGVO Madde 28 uyarınca Veri İşleme Sözleşmesi (Data Processing Addendum – DPA) mevcuttur.",
            "Siteye erişildiğinde teknik güvenlik ve kararlı çalışma amacıyla sunucu günlük kayıtları (IP adresi, tarih/saat, erişilen sayfa, yönlendiren URL, tarayıcı ve işletim sistemi) otomatik olarak işlenir (DSGVO Madde 6/1-f meşru menfaat).",
            "Üçüncü Ülke Aktarımı: Teknik bağlantı verilerinin ABD'ye aktarılması söz konusu olabilir. Vercel Inc., AB–ABD Veri Gizliliği Çerçevesi (EU–US Data Privacy Framework – DPF) kapsamında sertifikalı olup DSGVO Madde 45 yeterlilik kararına ve ek olarak AB Standart Sözleşme Maddelerine (SCC, Madde 46/2-c) dayanmaktadır.",
            "Saklama Süresi: Sunucu günlük (log) kayıtları, güvenlik ihlali incelemesi gerekmediği sürece en geç 30 gün içinde otomatik olarak silinir.",
          ],
        },
        {
          heading: "3. İletişim Formu, E-posta İletişimi ve Saklama Süreleri",
          paragraphs: [
            "İletişim formu veya e-posta yoluyla bize ulaştığınızda paylaştığınız veriler (müşteri tipi, departman, ülke, ad soyad, e-posta, opsiyonel telefon ve mesaj) sözleşme öncesi işlemler veya sözleşmenin ifası (DSGVO Madde 6/1-b) ve genel sorularda meşru menfaat (Madde 6/1-f) temelinde işlenir.",
            "Form iletilerinin teknik gönderimi için doğrudan kurumsal e-posta kutumuzun şifreli SMTP altyapısı veya işlem e-posta sağlayıcısı Resend Inc., 2261 Market Street #4818, San Francisco, CA 94114, ABD (DSGVO Madde 28 DPA, EU-US DPF ve SCC güvenceleriyle) kullanılır. Müşteri form talepleri harici bir web veritabanında saklanmaz; doğrudan kurumsal e-posta kutumuza iletilir.",
            "Saklama Süresi: Talebiniz sonuçlandığında ve saklama amacı ortadan kalktığında verileriniz silinir; ticari ve vergisel yazışmalarda Alman mevzuatındaki zorunlu saklama süreleri (6 yıl – § 257 HGB; 10 yıl – § 147 AO) saklıdır.",
          ],
        },
        {
          heading: "4. Sağlık Turizmi Taleplerinde Özel Nitelikli Sağlık Verileri ve Türkiye'ye Aktarım (Madde 9 & 49 DSGVO)",
          paragraphs: [
            "Sağlık Turizmi Koordinasyonu kapsamındaki talepler, ilgilenilen tedavi veya tıbbi alan bilgisini dahi içermesi sebebiyle DSGVO Madde 9/1 kapsamında sağlık verisi niteliği taşıyabilir. Web formlarımız üzerinden kesinlikle tıbbi rapor, röntgen veya kimlik fotokopisi yüklenmemelidir.",
            "Hukuki Dayanak: Sağlıkla bağlantılı iletişim bilgileriniz yalnızca formdaki özel onay kutusuyla verdiğiniz açık rızanıza (DSGVO Madde 9/2-a ve Madde 6/1-a) dayanarak işlenir.",
            "Türkiye'ye Veri Aktarımı: Talebiniz doğrultusunda Türkiye Cumhuriyeti'ndeki yetkili hastane veya sağlık turizmi kuruluşlarından bilgi/randevu alınması için verilerinizin paylaşılması AB/AEA dışına üçüncü ülke aktarımıdır. Türkiye için AB Komisyonu'nun Madde 45 kapsamında yürürlükte bir yeterlilik kararı bulunmamaktadır; bu nedenle aktarım yalnızca olası riskler konusunda bilgilendirilmiş açık rızanıza (DSGVO Madde 49/1-a) dayanarak yapılır. Açık rızanızı dilediğiniz zaman geleceğe etkili olarak geri alabilirsiniz (Madde 7/3).",
          ],
        },
        {
          heading: "5. İşe Alım & Personel Kapsamındaki Aday Verileri (DSGVO Madde 6/1-b, § 26 BDSG)",
          paragraphs: [
            "İşe Alım & Personel departmanımıza başvuran adayların mesleki nitelik, dil ve iletişim bilgileri uygun iş fırsatlarının değerlendirilmesi ve aday onayı/talebi doğrultusunda Almanya'daki işverenlerle paylaşılması amacıyla işlenir.",
            "Saklama Süresi: İşe yerleştirme gerçekleşmezse aday verileri sürecin tamamlanmasından itibaren en geç 6 ay içinde silinir (aday havuzunda daha uzun saklama için açık rıza verilmemişse).",
          ],
        },
        {
          heading: "6. Harici WhatsApp ve Telegram Bağlantıları",
          paragraphs: [
            "Sitemizde WhatsApp (WhatsApp Ireland Ltd. / Meta Platforms Inc.) ve Telegram (Telegram FZ-LLC) için yalnızca harici bağlantılar (link) yer alır. Sayfayı ziyaret etmenizle bu platformlara hiçbir veri gitmez; veri aktarımı yalnızca ilgili butona kendi isteğinizle tıkladığınızda başlar.",
          ],
        },
        {
          heading: "7. Yerel Yazı Tipleri, Çerezler ve Yönetim Paneli (§ 25 Abs. 2 TDDDG)",
          paragraphs: [
            "Yazı tipleri kendi sunucumuzdan yerel olarak yüklenir; Google Fonts sunucularına bağlantı kurulmaz.",
            "Sitemizde reklam, izleme veya analitik çerezi kullanılmaz. Yalnızca şifre korumalı yönetim panelinde (/admin) oturum güvenliği için teknik olarak zorunlu HttpOnly çerez (azami 12 saat, § 25 Abs. 2 Nr. 2 TDDDG) kullanılır.",
          ],
        },
        {
          heading: "8. Veri Sağlama Zorunluluğu ve Otomatik Karar Verme Olmaması",
          paragraphs: [
            "Kişisel verilerinizi paylaşmanız kanunen zorunlu değildir; ancak talebinizi yanıtlayabilmemiz için zorunlu işaretli temel iletişim alanları gereklidir (DSGVO Madde 13/2-e). Sitemizde profilleme dâhil otomatik karar verme (DSGVO Madde 22) uygulanmaz.",
          ],
        },
        {
          heading: "9. Rızayı Geri Alma, Veri Sahibi Hakları ve Yetkili Denetim Makamı",
          paragraphs: [
            "Rızanın Geri Alınması (Madde 7/3 DSGVO): Verdiğiniz açık rızayı istediğiniz zaman geleceğe etkili olmak üzere (ör. kontakt@kalkanpartner.de adresine e-posta göndererek) geri çekebilirsiniz.",
            "Haklarınız: DSGVO uyarınca erişim (Madde 15), düzeltme (Madde 16), silme (Madde 17), kısıtlama (Madde 18), veri taşınabilirliği (Madde 20) ve itiraz (Madde 21) haklarına sahipsiniz.",
            "Yetkili Denetim Makamı (Madde 77 DSGVO): Baden-Württemberg eyaletindeki işletme merkezimiz için yetkili veri koruma denetim makamı: Der Landesbeauftragte für Datenschutz und Informationsfreiheit Baden-Württemberg (LfDI BW), Lautenschlagerstraße 20, 70173 Stuttgart, Almanya (https://www.baden-wuerttemberg.datenschutz.de).",
          ],
        },
      ],
    },
    terms: {
      seoTitle: "Hizmet Şartları ve Cayma Hakları | Semra Kalkan – KALKAN PARTNER",
      seoDescription:
        "Semra Kalkan – KALKAN PARTNER kurumsal (B2B) ve tüketici (B2C) genel hizmet şartları, 14 günlük yasal cayma hakkı bildirimi ve örnek cayma formu.",
      badge: "AGB & CAYMA HAKKI",
      title: "Hizmet Şartları ve Cayma Hakları",
      subtitle:
        "Kurumsal (B2B) ve tüketici (B2C) müşterilere yönelik genel işlem şartları ve yasal cayma hakkı bildirimi.",
      warningTitle: "",
      warningBody: "",
      showContactBlock: false,
      sections: [
        {
          heading: "§ 1 Kapsam ve Hizmet Sağlayıcı",
          paragraphs: [
            "İşbu Genel Hizmet Şartları, Semra Kalkan – KALKAN PARTNER, Hauptstraße 192, 79739 Schwörstadt, Almanya ile müşterileri (hem § 14 BGB kapsamındaki ticari işletmeler hem de § 13 BGB kapsamındaki tüketiciler) arasındaki tüm organizasyon, iletişim, araştırma ve süreç koordinasyonu sözleşmelerine uygulanır.",
          ],
        },
        {
          heading: "§ 2 Hizmet Konusu ve Yasal Sınırlar",
          paragraphs: [
            "KALKAN PARTNER, bireysel teklifte kararlaştırılan kapsamda hizmet sözleşmesi (§§ 611 vd. BGB) niteliğinde koordinasyon ve organizasyon desteği sunar; resmî makam kararı, vize, iş veya tıbbi tedavi sonucu taahhüt edilmez.",
          ],
          bullets: [
            "Hukuki danışmanlık (RDG) ve vergi danışmanlığı sunulmaz",
            "Tıbbi teşhis, tedavi veya iyileşme garantisi verilmez; tedavi sözleşmesi yalnızca ilgili yetkili hastaneyle yapılır",
            "Personel kiralama (Arbeitnehmerüberlassung) ve § 34c GewO kapsamında emlak komisyonculuğu yapılmaz",
            "Ruhsat gerektiren mimari, statik, elektrik, gaz, yangın ve havalandırma mühendislik projeleri üstlenilmez",
          ],
        },
        {
          heading: "§ 3 İşe Alım ve Sağlık Turizmi Özel Hükümleri",
          paragraphs: [
            "İşe Alım & Personel: İş sözleşmeleri doğrudan işveren ile çalışan arasında imzalanır. İş arayan adaylardan mevzuata aykırı işe yerleştirme ücreti talep edilmez; personel koordinasyonu hizmet bedeli ilgili işverenle yapılan ayrı yazılı sözleşmeye tabidir.",
            "Sağlık Turizmi Koordinasyonu: KALKAN PARTNER yalnızca Türkiye'deki yetkili sağlık kuruluşlarıyla iletişim, tercüme ve seyahat koordinasyonu sağlar. Tıbbi aydınlatma ve tedaviden münhasıran ilgili sağlık kuruluşu sorumludur. KALKAN PARTNER bu hizmet karşılığında müşteriden kararlaştırılan koordinasyon ücreti veya yetkili partner kuruluştan aracılık/hizmet bedeli alabilir.",
          ],
        },
        {
          heading: "§ 4 Sözleşmenin Kurulması, Ücret ve Ödeme",
          paragraphs: [
            "Web sitesindeki bilgiler bağlayıcı icap değildir; sözleşme KALKAN PARTNER'in yazılı/e-posta teklifinin müşteri tarafından onaylanmasıyla kurulur.",
            "Bireysel teklifte belirtilen ücret geçerlidir. Aksi belirtilmedikçe faturalar tebliğden itibaren 14 gün içinde kesintisiz ödenir.",
          ],
        },
        {
          heading: "§ 5 Sorumluluk Sınırı (§ 309 Nr. 7 BGB)",
          paragraphs: [
            "KALKAN PARTNER; kasıt, ağır ihmal ve yaşam, beden veya sağlığın kusurlu ihlalinden doğan zararlarda sınırsız sorumludur.",
            "Temel sözleşme yükümlülüklerinin (Kardinalpflichten) hafif ihmalle ihlalinde sorumluluk, sözleşme kurulurken öngörülebilir ve sözleşmeye özgü tipik zararla sınırlıdır; bunun dışında hafif ihmal sorumluluğu hariç tutulmuştur. Müşterinin doğrudan sözleşme kurduğu bağımsız üçüncü kişilerin (işveren, ev sahibi, klinik, avukat, mühendis vb.) edimlerinden KALKAN PARTNER sorumlu değildir.",
          ],
        },
        {
          heading: "§ 6 Uygulanacak Hukuk, Yetkili Mahkeme ve Dil Önceliği",
          paragraphs: [
            "Alman Hukuku uygulanır; tüketicilerin mutad mesken hukukundaki emredici koruma hükümleri (Roma I Tüzüğü Madde 6/2) saklıdır. Tacirler (B2B) ile uyuşmazlıklarda KALKAN PARTNER merkez mahkemeleri yetkilidir. Sözleşmenin bağlayıcı dili Almancadır.",
          ],
        },
        {
          heading: "Tüketiciler İçin Cayma Hakkı Bildirimi (Widerrufsbelehrung)",
          paragraphs: [
            "Cayma Hakkı: Tüketici (§ 13 BGB) olarak mesafeli sözleşmelerde 14 gün içinde herhangi bir gerekçe göstermeksizin bu sözleşmeden cayma hakkına sahipsiniz. Cayma süresi sözleşmenin kurulduğu günden itibaren 14 gündür.",
            "Cayma hakkınızı kullanmak için bize (Semra Kalkan – KALKAN PARTNER, Hauptstraße 192, 79739 Schwörstadt, Deutschland, Tel: +49 152 04481954, E-posta: kontakt@kalkanpartner.de) açık bir beyanla (ör. mektup veya e-posta ile) kararınızı bildirmeniz gerekir. Aşağıdaki örnek cayma formunu kullanabilirsiniz ancak zorunlu değildir; sürenin korunması için bildirimin süre dolmadan gönderilmesi yeterlidir.",
            "Caymanın Sonuçları: Sözleşmeden caymanız halinde sizden aldığımız tüm ödemeleri, cayma bildiriminizin bize ulaştığı günden itibaren en geç 14 gün içinde aynı ödeme aracıyla ve masrafsız olarak iade ederiz.",
            "Değer Tazmini ve Cayma Hakkının Erken Sona Ermesi (§ 357a Abs. 2, § 356 Abs. 4 BGB): Hizmet ifasına cayma süresi dolmadan başlanmasını açıkça talep ettiyseniz, cayma bildiriminize kadar ifa edilen hizmet kısmıyla orantılı makul bir bedel (Wertersatz) ödemeniz gerekir. Ayrıca hizmete başlamadan önce açık onay vermeniz ve sözleşmenin tarafımızca tamamen ifa edilmesiyle cayma hakkınızı kaybedeceğinizi onaylamanız halinde, hizmet tamamen ifa edildiğinde cayma hakkınız sona erer.",
          ],
        },
        {
          heading: "Örnek Cayma Formu (Muster-Widerrufsformular)",
          paragraphs: [
            "(Sözleşmeden caymak istiyorsanız lütfen bu formu doldurup bize gönderin.)",
          ],
          bullets: [
            "Alıcı: Semra Kalkan – KALKAN PARTNER, Hauptstraße 192, 79739 Schwörstadt, Deutschland, E-posta: kontakt@kalkanpartner.de",
            "Aşağıdaki hizmetin sunumuna ilişkin kurduğum/kurduğumuz (*) sözleşmeden caydığımı/caydığımızı (*) bildiririm:",
            "Sipariş / Sözleşme tarihi (*):",
            "Tüketicinin adı soyadı:",
            "Tüketicinin adresi:",
            "Tüketicinin imzası (yalnızca kâğıt üzerinde bildirimde):",
            "Tarih: — (*) Uygun olmayanı çiziniz.",
          ],
        },
      ],
    },
  },

  en: {
    languageBindingNotice:
      "Notice on Language Precedence: This English version is provided for information and convenience only. In the event of any ambiguity or discrepancy, the German version (Impressum / Datenschutzerklärung / AGB) is exclusively authoritative and legally binding.",
    labels: {
      ownerPrefix: "Proprietor (Inhaberin): ",
      phoneWhatsappLabel: "Phone & WhatsApp",
      emailLabel: "Email",
      websiteLabel: "Website",
      mstvHeading: "Editorial Responsibility Pursuant to § 18(2) MStV",
      registryHeading: "Additional Statutory Details",
      backToContact: "← Back to Contact Page",
      toPrivacy: "Privacy Policy →",
      toImprint: "Imprint (Legal Notice) →",
      toTerms: "Terms & Withdrawal Rights →",
    },
    imprint: {
      seoTitle: "Imprint (Legal Notice) | Semra Kalkan – KALKAN PARTNER",
      seoDescription:
        "Statutory provider identification pursuant to § 5 German Digital Services Act (DDG) and § 18(2) MStV for Semra Kalkan – KALKAN PARTNER.",
      badge: "§ 5 DDG · LEGAL NOTICE",
      title: "Imprint (Legal Notice)",
      subtitle:
        "Statutory provider disclosures pursuant to § 5 of the German Digital Services Act (DDG).",
      warningTitle: "",
      warningBody: "",
      showContactBlock: true,
      sections: [
        {
          heading: "Scope of Business Activities",
          paragraphs: [
            "Semra Kalkan – KALKAN PARTNER is an internationally oriented business service and coordination firm based in Germany.",
            "Our portfolio comprises international recruitment and candidate coordination, relocation and settlement organization, administrative and document coordination, translation and communication services, cross-border business setup support, medical tourism coordination, digital and AI-assisted solutions, family and education coordination, as well as operational restaurant and commercial kitchen solutions.",
          ],
        },
        {
          heading: "Scope Notice & Regulatory Boundaries",
          paragraphs: [
            "Depending on the assignment, our services consist of organizational, communicative, research, and coordinating activities.",
            "KALKAN PARTNER does not provide legal advice under the German Legal Services Act (RDG), tax advisory, medical diagnosis or treatment, temporary agency work (Arbeitnehmerüberlassung), or licensed real-estate brokerage under § 34c GewO. Regulated activities are performed exclusively by independent, duly licensed professionals or authorized institutions.",
          ],
        },
        {
          heading: "Consumer Dispute Resolution (§ 36 VSBG)",
          paragraphs: [
            "We are neither obligated nor generally willing to participate in dispute resolution proceedings before a consumer arbitration board.",
          ],
        },
        {
          heading: "Copyright",
          paragraphs: [
            "All texts, graphics, and structures created by the site operator on this website are subject to German copyright law. Any reproduction or use beyond statutory copyright limits requires prior written consent.",
          ],
        },
      ],
    },
    privacy: {
      seoTitle: "Privacy Policy | Semra Kalkan – KALKAN PARTNER",
      seoDescription:
        "GDPR (DSGVO) Privacy Policy covering Vercel Inc. hosting & EU-US Data Privacy Framework, retention periods, Art. 9 medical tourism explicit consent, and LfDI Baden-Württemberg.",
      badge: "GDPR / DSGVO · PRIVACY POLICY",
      title: "Privacy Policy",
      subtitle:
        "Data protection disclosures pursuant to Articles 13, 14, and 21 of the General Data Protection Regulation (GDPR / DSGVO).",
      warningTitle: "",
      warningBody: "",
      showContactBlock: true,
      sections: [
        {
          heading: "1. Data Controller",
          paragraphs: [
            "The controller responsible for personal data processing on this website within the meaning of the GDPR is Semra Kalkan – KALKAN PARTNER (address and contact details listed above).",
          ],
        },
        {
          heading: "2. Hosting, Data Processing Agreement & US Transfers (Vercel Inc.)",
          paragraphs: [
            "This website is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, under a Data Processing Addendum (DPA) pursuant to Art. 28 GDPR.",
            "When accessing our pages, Vercel automatically processes technically necessary server log files (IP address, timestamp, requested URL, referrer URL, browser type, and operating system) based on our legitimate interest in secure and reliable operation (Art. 6(1)(f) GDPR).",
            "Third-Country Transfer: Technical connection data may be processed in the United States. Vercel Inc. is certified under the EU–US Data Privacy Framework (DPF, adequacy decision pursuant to Art. 45 GDPR) and additionally relies on EU Standard Contractual Clauses (SCCs, Art. 46(2)(c) GDPR).",
            "Retention Period: Server log files are automatically deleted within a maximum of 30 days unless required longer to investigate a concrete security incident.",
          ],
        },
        {
          heading: "3. Contact Form, Email Dispatch & Retention Periods",
          paragraphs: [
            "When you contact us via our website form or email, we process your details (client type, selected department, country, full name, email, optional phone number, and message) pursuant to Art. 6(1)(b) GDPR (pre-contractual/contractual steps) or Art. 6(1)(f) GDPR (legitimate interest in answering inquiries).",
            "For technical email dispatch of contact form submissions, we use either the encrypted SMTP server of our business mailbox or the transactional email provider Resend Inc., 2261 Market Street #4818, San Francisco, CA 94114, USA (governed by an Art. 28 GDPR DPA, EU–US Data Privacy Framework, and SCCs under Art. 45, 46 GDPR). Visitor form submissions are not stored in any website database; they are delivered directly via email to our business inbox.",
            "Retention Period: Inquiry data is deleted once processing is complete unless statutory commercial or tax retention periods apply (6 years under § 257 HGB; 10 years under § 147 AO).",
          ],
        },
        {
          heading: "4. Special Category Health Data in Medical Tourism Inquiries (Art. 9 & Art. 49 GDPR)",
          paragraphs: [
            "Inquiries submitted under Medical Tourism Coordination may inherently involve health data within the meaning of Art. 9(1) GDPR simply by indicating an area of medical interest. Never submit medical reports, X-rays, or passport copies via website forms.",
            "Legal Basis: Any health-related inquiry data is processed exclusively on the basis of your explicit consent pursuant to Art. 9(2)(a) and Art. 6(1)(a) GDPR.",
            "Transfer to Türkiye: Where you request coordination with authorized hospitals or licensed medical tourism institutions in the Republic of Türkiye, personal data is transferred to a third country outside the EU/EEA for which no EU Commission adequacy decision under Art. 45 GDPR currently exists. Such transfer takes place strictly upon your informed explicit consent pursuant to Art. 49(1)(a) GDPR, which you may withdraw at any time with future effect (Art. 7(3) GDPR).",
          ],
        },
        {
          heading: "5. Recruitment Candidate Data (Art. 6(1)(b) GDPR, § 26 BDSG)",
          paragraphs: [
            "Candidate details submitted for Recruitment are processed to assess suitable roles and present profiles to prospective employers in Germany in alignment with the candidate's request. Unplaced candidate records are deleted within 6 months after conclusion of the process unless explicit consent for longer retention is granted.",
          ],
        },
        {
          heading: "6. External Links to WhatsApp & Telegram",
          paragraphs: [
            "Our website includes plain outbound links to WhatsApp (WhatsApp Ireland Ltd. / Meta Platforms Inc.) and Telegram (Telegram FZ-LLC). Simply visiting our pages transfers no data to these providers; data transmission occurs only if you actively click the respective link.",
          ],
        },
        {
          heading: "7. Self-Hosted Fonts, Cookies & Admin Session (§ 25(2) TDDDG)",
          paragraphs: [
            "Web fonts are self-hosted on our server; no connection to Google Fonts servers occurs.",
            "We use no tracking, analytics, or advertising cookies. Only a strictly necessary signed HttpOnly session cookie (max. 12 hours, § 25(2) No. 2 TDDDG) is set when an administrator logs into /admin.",
          ],
        },
        {
          heading: "8. Requirement to Provide Data & No Automated Decision-Making",
          paragraphs: [
            "Providing personal data is neither legally nor contractually mandatory, though fields marked as required are necessary to process your inquiry (Art. 13(2)(e) GDPR). No automated decision-making or profiling under Art. 22 GDPR takes place.",
          ],
        },
        {
          heading: "9. Withdrawal of Consent, Data Subject Rights & Supervisory Authority",
          paragraphs: [
            "Withdrawal of Consent (Art. 7(3) GDPR): You may withdraw any consent at any time with future effect (e.g., via email to kontakt@kalkanpartner.de).",
            "Your Rights: You have the right to access (Art. 15), rectification (Art. 16), erasure (Art. 17), restriction (Art. 18), data portability (Art. 20), and objection (Art. 21 GDPR).",
            "Competent Supervisory Authority (Art. 77 GDPR): For our registered seat in Baden-Württemberg: Der Landesbeauftragte für Datenschutz und Informationsfreiheit Baden-Württemberg (LfDI BW), Lautenschlagerstraße 20, 70173 Stuttgart, Germany (https://www.baden-wuerttemberg.datenschutz.de).",
          ],
        },
      ],
    },
    terms: {
      seoTitle: "Terms of Service & Withdrawal Rights | Semra Kalkan – KALKAN PARTNER",
      seoDescription:
        "General Terms and Conditions (B2B & B2C), statutory 14-day consumer withdrawal instructions, and model withdrawal form for Semra Kalkan – KALKAN PARTNER.",
      badge: "TERMS & WITHDRAWAL RIGHTS",
      title: "Terms of Service & Consumer Withdrawal Rights",
      subtitle:
        "General Terms and Conditions for B2B and B2C clients including statutory EU/German consumer withdrawal instructions.",
      warningTitle: "",
      warningBody: "",
      showContactBlock: false,
      sections: [
        {
          heading: "§ 1 Scope & Contracting Party",
          paragraphs: [
            "These General Terms and Conditions govern all contracts for organizational, communicative, research, and coordination services between Semra Kalkan – KALKAN PARTNER, Hauptstraße 192, 79739 Schwörstadt, Germany, and business clients (§ 14 BGB) as well as consumers (§ 13 BGB).",
          ],
        },
        {
          heading: "§ 2 Subject Matter & Regulatory Exclusions",
          paragraphs: [
            "KALKAN PARTNER provides service-coordination support (§§ 611 et seq. BGB) as specified in the individual proposal without guaranteeing official approvals, visas, employment, or clinical outcomes.",
          ],
          bullets: [
            "No legal advice (German RDG) or tax advisory",
            "No medical diagnosis, treatment, or clinical guarantees; medical contracts exist solely with authorized hospitals",
            "No temporary agency work (Arbeitnehmerüberlassung) and no licensed real-estate brokerage (§ 34c GewO)",
            "No statutory architectural, structural, electrical, gas, fire, or ventilation engineering plans",
          ],
        },
        {
          heading: "§ 3 Special Terms for Recruitment & Medical Tourism",
          paragraphs: [
            "Recruitment: Employment contracts are concluded directly between employer and employee. No unlawful placement fee is charged to job-seeking candidates; recruitment coordination fees are governed by separate written agreements with the commissioning party (typically the employer).",
            "Medical Tourism Coordination: KALKAN PARTNER coordinates communication, translation, and travel with authorized healthcare institutions in Türkiye. Medical care and liability rest solely with the treating hospital. KALKAN PARTNER may receive either an agreed client coordination fee or a referral/service fee from the authorized partner institution.",
          ],
        },
        {
          heading: "§ 4 Contract Formation, Fees & Payment",
          paragraphs: [
            "Website descriptions are non-binding invitations; a contract is formed upon acceptance of an individual text-form proposal. Unless agreed otherwise, invoices are payable without deduction within 14 days.",
          ],
        },
        {
          heading: "§ 5 Liability (§ 309 No. 7 BGB)",
          paragraphs: [
            "KALKAN PARTNER is liable without limitation for intent, gross negligence, and culpable injury to life, body, or health.",
            "In cases of slight negligence, KALKAN PARTNER is liable only for breaches of essential contractual obligations (cardinal duties), limited to foreseeable, contract-typical damages. Otherwise, liability for slight negligence and for independent third-party providers is excluded.",
          ],
        },
        {
          heading: "§ 6 Governing Law, Jurisdiction & Language",
          paragraphs: [
            "German law applies, without prejudice to mandatory consumer protection provisions of the consumer's country of habitual residence (Art. 6(2) Rome I Regulation). Exclusive jurisdiction for merchants (B2B) is the business seat of KALKAN PARTNER. The German text prevails.",
          ],
        },
        {
          heading: "Right of Withdrawal for Consumers (Services)",
          paragraphs: [
            "Right of Withdrawal: If you are a consumer (§ 13 BGB), you have the right to withdraw from a distance or off-premises contract within fourteen (14) days without giving any reason. The 14-day period begins on the day of contract conclusion.",
            "To exercise your right of withdrawal, you must inform us (Semra Kalkan – KALKAN PARTNER, Hauptstraße 192, 79739 Schwörstadt, Germany, Phone: +49 152 04481954, Email: kontakt@kalkanpartner.de) by means of a clear statement (e.g. a letter sent by post or email) of your decision to withdraw. You may use the attached model withdrawal form, though it is not obligatory.",
            "Effects of Withdrawal: If you withdraw from this contract, we shall reimburse all payments received from you without undue delay and no later than 14 days from the day on which we receive notification of your withdrawal, using the same means of payment.",
            "Proportional Compensation & Premature Expiry (§ 357a(2), § 356(4) BGB): If you requested that services begin during the withdrawal period, you shall pay us a reasonable amount corresponding to the proportion of services already provided up to the time you notify us of your withdrawal compared with the full scope of the contract. Your right of withdrawal expires prematurely once we have fully performed the service if we only began performance after you gave explicit consent and simultaneously acknowledged losing your right of withdrawal upon full performance.",
          ],
        },
        {
          heading: "Model Withdrawal Form (Muster-Widerrufsformular)",
          paragraphs: [
            "(Complete and return this form only if you wish to withdraw from the contract.)",
          ],
          bullets: [
            "To: Semra Kalkan – KALKAN PARTNER, Hauptstraße 192, 79739 Schwörstadt, Germany, Email: kontakt@kalkanpartner.de",
            "I/We (*) hereby give notice that I/we (*) withdraw from my/our (*) contract for the provision of the following service (*):",
            "Ordered on (*) / Contract concluded on (*):",
            "Name of consumer(s):",
            "Address of consumer(s):",
            "Signature of consumer(s) (only if notified on paper):",
            "Date: — (*) Delete as appropriate.",
          ],
        },
      ],
    },
  },
};
