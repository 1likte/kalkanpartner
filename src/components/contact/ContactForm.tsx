"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  AlertTriangle,
  CheckCircle2,
  Info,
  Lock,
  Send,
} from "lucide-react";
import { LEGAL_SLUGS, type Locale } from "@/i18n/config";
import type { InquiryTopic } from "@/content/types";
import type { CorporatePagesContent } from "@/content/pages/types";

interface ContactFormProps {
  locale: Locale;
  content: CorporatePagesContent["contact"];
}

type SubmitState = "idle" | "submitting" | "sent" | "not_configured" | "error";

function TopicQuerySync({
  paths,
  onMatch,
}: {
  paths: CorporatePagesContent["contact"]["paths"];
  onMatch: (topic: InquiryTopic, defaultDepartment: string) => void;
}) {
  const searchParams = useSearchParams();
  const topicParam = searchParams.get("topic") as InquiryTopic | null;

  useEffect(() => {
    if (!topicParam) return;
    const matched = paths.find((p) => p.topic === topicParam);
    if (matched) {
      onMatch(matched.topic, matched.defaultDepartment);
    }
  }, [topicParam, paths, onMatch]);

  return null;
}

const MEDICAL_CONSENT_COPY: Record<Locale, string> = {
  de: "Ausdrückliche Einwilligung (Art. 9 Abs. 2 lit. a & Art. 49 Abs. 1 lit. a DSGVO): Ich willige ausdrücklich ein, dass meine gesundheitsbezogenen Angaben zur Bearbeitung meiner Koordinationsanfrage verarbeitet und – soweit für die Einholung von Informationen oder Terminen erforderlich – an autorisierte Krankenhäuser bzw. Gesundheitstourismus-Einrichtungen in der Republik Türkei (Drittland ohne EU-Angemessenheitsbeschluss) übermittelt werden. Diese Einwilligung kann ich jederzeit mit Wirkung für die Zukunft widerrufen.",
  tr: "Açık Rıza Beyanı (DSGVO Madde 9/2-a & Madde 49/1-a): Sağlık turizmi koordinasyon talebim kapsamında paylaştığım sağlıkla bağlantılı bilgilerin işlenmesine ve bilgi/randevu temini amacıyla Türkiye Cumhuriyeti'ndeki (AB yeterlilik kararı bulunmayan üçüncü ülke) yetkili hastane ve sağlık turizmi kuruluşlarına aktarılmasına açıkça rıza gösteriyorum. Bu rızamı dilediğim zaman geleceğe etkili olarak geri çekebilirim.",
  en: "Explicit Consent (Art. 9(2)(a) & Art. 49(1)(a) GDPR): I explicitly consent to the processing of any health-related details included in my inquiry for coordination purposes and – where required to request information or appointments – to their transfer to authorized hospitals or licensed medical tourism institutions in the Republic of Türkiye (a third country without an EU adequacy decision). I may withdraw this consent at any time with future effect.",
};

const PRIVACY_LINK_LABEL: Record<Locale, string> = {
  de: "Datenschutzerklärung lesen",
  tr: "Gizlilik ve Kişisel Verilerin Korunması Beyanını inceleyin",
  en: "Read Privacy Policy",
};

export function ContactForm({ locale, content }: ContactFormProps) {
  const firstPath = content.paths[0];

  const [selectedTopic, setSelectedTopic] = useState<InquiryTopic>(
    firstPath.topic
  );
  const [customerType, setCustomerType] = useState<"individual" | "business">(
    "business"
  );
  const [department, setDepartment] = useState<string>(
    firstPath.defaultDepartment
  );
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [medicalConsent, setMedicalConsent] = useState(false);
  const [companyWebsite, setCompanyWebsite] = useState(""); // Honeypot
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const startedAtRef = useRef<number>(0);

  useEffect(() => {
    startedAtRef.current = Date.now();
  }, []);

  const isMedicalInquiry =
    selectedTopic === "medical-tourism" || department === "medical-tourism";

  const handlePathSelect = (topic: InquiryTopic, defaultDepartment: string) => {
    setSelectedTopic(topic);
    setDepartment(defaultDepartment);
    if (topic === "business" || topic === "restaurant") {
      setCustomerType("business");
    } else if (topic === "medical-tourism" || topic === "general") {
      setCustomerType("individual");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (
      name.trim().length < 2 ||
      country.trim().length < 2 ||
      !email.includes("@") ||
      message.trim().length < 15 ||
      !privacyConsent ||
      (isMedicalInquiry && !medicalConsent)
    ) {
      setSubmitState("error");
      setErrorMessage(content.form.validationError);
      return;
    }

    setSubmitState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          topic: selectedTopic,
          customerType,
          department,
          country,
          name,
          email,
          phone,
          message,
          privacyConsent,
          medicalConsent: isMedicalInquiry ? medicalConsent : undefined,
          companyWebsite,
          startedAt: startedAtRef.current,
        }),
      });

      const data = (await response.json()) as {
        status?: string;
        message?: string;
      };

      if (response.ok && data.status === "sent") {
        setSubmitState("sent");
        setName("");
        setEmail("");
        setPhone("");
        setCountry("");
        setMessage("");
        setPrivacyConsent(false);
        setMedicalConsent(false);
        return;
      }

      if (response.status === 503 && data.status === "not_configured") {
        setSubmitState("not_configured");
        return;
      }

      setSubmitState("error");
      setErrorMessage(data.message || content.form.validationError);
    } catch {
      setSubmitState("error");
      setErrorMessage(content.form.validationError);
    }
  };

  const privacyHref = `/${locale}/${LEGAL_SLUGS[locale].privacy}`;

  return (
    <div className="space-y-8">
      {/* Non-blocking URL ?topic= sync so entire form renders in static SSR HTML */}
      <Suspense fallback={null}>
        <TopicQuerySync paths={content.paths} onMatch={handlePathSelect} />
      </Suspense>

      {/* Step 1: 5 Inquiry Paths */}
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
          {content.pathsHeading}
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {content.paths.map((path) => {
            const isSelected = selectedTopic === path.topic;
            return (
              <button
                key={path.topic}
                type="button"
                onClick={() =>
                  handlePathSelect(path.topic, path.defaultDepartment)
                }
                aria-pressed={isSelected}
                className={`rounded-xl border p-4 text-left transition-all ${
                  isSelected
                    ? "border-navy bg-navy text-white shadow-md"
                    : "border-border-subtle bg-surface text-ink hover:border-gold/70"
                }`}
              >
                <span
                  className={`text-[10.5px] font-semibold uppercase tracking-[0.14em] ${
                    isSelected ? "text-gold-light" : "text-gold-dark"
                  }`}
                >
                  {path.audience}
                </span>
                <p className="mt-1 font-serif text-lg font-semibold">
                  {path.label}
                </p>
                <p
                  className={`mt-1 text-xs leading-relaxed ${
                    isSelected ? "text-white/80" : "text-muted"
                  }`}
                >
                  {path.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sensitive Data Warning */}
      <div className="flex items-start gap-3 rounded-xl border border-gold/50 bg-ivory p-4">
        <Lock
          className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark"
          aria-hidden="true"
        />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy">
            {content.form.sensitiveDataTitle}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-muted">
            {content.form.sensitiveDataBody}
          </p>
        </div>
      </div>

      {/* Status Feedback Banners */}
      {submitState === "sent" && (
        <div
          role="status"
          className="flex items-start gap-3 rounded-xl border border-emerald-300 bg-emerald-50 p-5 text-emerald-950"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
          <div>
            <p className="text-sm font-semibold">{content.form.successTitle}</p>
            <p className="mt-1 text-xs leading-relaxed">
              {content.form.successBody}
            </p>
          </div>
        </div>
      )}

      {submitState === "not_configured" && (
        <div
          role="status"
          className="flex items-start gap-3 rounded-xl border border-gold bg-amber-50/70 p-5 text-navy"
        >
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />
          <div>
            <p className="text-sm font-semibold">
              {content.form.notConfiguredTitle}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-ink/85">
              {content.form.notConfiguredBody}
            </p>
          </div>
        </div>
      )}

      {submitState === "error" && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-red-300 bg-red-50 p-5 text-red-950"
        >
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-red-700" />
          <div>
            <p className="text-sm font-semibold">{content.form.errorTitle}</p>
            <p className="mt-1 text-xs leading-relaxed">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Main Form */}
      <form
        onSubmit={handleSubmit}
        noValidate
        className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8 shadow-xs space-y-6"
      >
        {/* Honeypot anti-spam field */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="companyWebsite">Company Website</label>
          <input
            id="companyWebsite"
            name="companyWebsite"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={companyWebsite}
            onChange={(e) => setCompanyWebsite(e.target.value)}
          />
        </div>

        {/* Customer Type */}
        <div>
          <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-navy">
            {content.form.customerTypeLabel}
          </span>
          <div className="mt-2.5 grid grid-cols-2 gap-3">
            {(["business", "individual"] as const).map((type) => {
              const active = customerType === type;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setCustomerType(type)}
                  className={`rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors ${
                    active
                      ? "border-navy bg-navy text-white"
                      : "border-border-subtle bg-ivory text-ink hover:border-gold"
                  }`}
                >
                  {type === "business"
                    ? content.form.businessLabel
                    : content.form.individualLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Department & Country */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="department"
              className="block text-xs font-semibold uppercase tracking-[0.14em] text-navy"
            >
              {content.form.departmentLabel} *
            </label>
            <select
              id="department"
              name="department"
              required
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="mt-2 block w-full rounded-lg border border-border-subtle bg-surface px-3.5 py-2.5 text-sm text-ink focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
            >
              {content.form.departments.map((dept) => (
                <option key={dept.value} value={dept.value}>
                  {dept.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-xs font-semibold uppercase tracking-[0.14em] text-navy"
            >
              {content.form.countryLabel} *
            </label>
            <input
              id="country"
              name="country"
              type="text"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder={content.form.countryPlaceholder}
              className="mt-2 block w-full rounded-lg border border-border-subtle bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
            />
          </div>
        </div>

        {/* Name & Email */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-semibold uppercase tracking-[0.14em] text-navy"
            >
              {content.form.nameLabel} *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={content.form.namePlaceholder}
              className="mt-2 block w-full rounded-lg border border-border-subtle bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-[0.14em] text-navy"
            >
              {content.form.emailLabel} *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={content.form.emailPlaceholder}
              className="mt-2 block w-full rounded-lg border border-border-subtle bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold uppercase tracking-[0.14em] text-navy"
          >
            {content.form.phoneLabel}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={content.form.phonePlaceholder}
            className="mt-2 block w-full rounded-lg border border-border-subtle bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-[0.14em] text-navy"
          >
            {content.form.messageLabel} *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            minLength={15}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={content.form.messagePlaceholder}
            className="mt-2 block w-full rounded-lg border border-border-subtle bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
          />
        </div>

        {/* Special Category Health Data & Third-Country Transfer Consent (Art. 9 & Art. 49 DSGVO) */}
        {isMedicalInquiry && (
          <label className="flex items-start gap-3 rounded-xl border border-gold/60 bg-ivory p-4 cursor-pointer">
            <input
              type="checkbox"
              checked={medicalConsent}
              onChange={(e) => setMedicalConsent(e.target.checked)}
              required
              className="mt-1 h-4 w-4 shrink-0 rounded border-border-subtle text-navy focus:ring-gold"
            />
            <span className="text-xs leading-relaxed text-ink">
              {MEDICAL_CONSENT_COPY[locale]} *
            </span>
          </label>
        )}

        {/* General Privacy Notice Acknowledgment + Direct Link */}
        <div className="space-y-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={privacyConsent}
              onChange={(e) => setPrivacyConsent(e.target.checked)}
              required
              className="mt-1 h-4 w-4 shrink-0 rounded border-border-subtle text-navy focus:ring-gold"
            />
            <span className="text-xs leading-relaxed text-muted">
              {content.form.privacyConsent} *{" "}
              <Link
                href={privacyHref}
                className="font-semibold text-navy underline underline-offset-4 hover:text-gold-dark"
              >
                ({PRIVACY_LINK_LABEL[locale]})
              </Link>
            </span>
          </label>
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            disabled={submitState === "submitting"}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-mid disabled:opacity-60"
          >
            <Send className="h-4 w-4 text-gold-light" aria-hidden="true" />
            <span>
              {submitState === "submitting"
                ? content.form.submittingLabel
                : content.form.submitLabel}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
