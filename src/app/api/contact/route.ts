import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

interface ContactPayload {
  locale?: string;
  topic?: string;
  customerType?: string;
  department?: string;
  country?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  privacyConsent?: boolean;
  medicalConsent?: boolean;
  companyWebsite?: string;
  startedAt?: number;
}

const VALID_TOPICS = new Set([
  "recruitment",
  "restaurant",
  "business",
  "medical-tourism",
  "general",
]);

const VALID_DEPARTMENTS = new Set([
  "recruitment",
  "relocation",
  "behoerdenservice",
  "translation-communication",
  "business-setup",
  "medical-tourism",
  "digital-ai",
  "family-education",
  "restaurant-kitchen",
]);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function sanitize(value: unknown, maxLen: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLen);
}

function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  const host =
    request.headers.get("x-forwarded-host") || request.headers.get("host");
  if (!host) return true;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return NextResponse.json(
      { status: "error", message: "Cross-origin requests are not allowed." },
      { status: 403 }
    );
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { status: "error", message: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  // 1. Spam protection: honeypot field must remain empty
  if (body.companyWebsite && body.companyWebsite.trim().length > 0) {
    return NextResponse.json(
      { status: "error", message: "Spam check failed." },
      { status: 400 }
    );
  }

  // 2. Spam protection: reject instant bot submissions (< 2s)
  if (
    typeof body.startedAt === "number" &&
    Date.now() - body.startedAt < 2000
  ) {
    return NextResponse.json(
      { status: "error", message: "Submission too fast. Please try again." },
      { status: 429 }
    );
  }

  // 3. Field validation
  const topic = sanitize(body.topic, 40);
  const customerType = sanitize(body.customerType, 20);
  const department = sanitize(body.department, 50);
  const country = sanitize(body.country, 80);
  const name = sanitize(body.name, 120);
  const email = sanitize(body.email, 160);
  const phone = sanitize(body.phone, 50);
  const message = sanitize(body.message, 5000);
  const locale = sanitize(body.locale, 5) || "de";

  const isMedical =
    topic === "medical-tourism" || department === "medical-tourism";

  if (
    !VALID_TOPICS.has(topic) ||
    (customerType !== "individual" && customerType !== "business") ||
    !VALID_DEPARTMENTS.has(department) ||
    country.length < 2 ||
    name.length < 2 ||
    !EMAIL_REGEX.test(email) ||
    message.length < 15 ||
    body.privacyConsent !== true ||
    (isMedical && body.medicalConsent !== true)
  ) {
    return NextResponse.json(
      {
        status: "validation_error",
        message: "Required fields or mandatory consents are missing.",
      },
      { status: 400 }
    );
  }

  const textBody = [
    `New KALKAN PARTNER Website Inquiry`,
    `----------------------------------`,
    `Language: ${locale.toUpperCase()}`,
    `Inquiry Path: ${topic}`,
    `Department: ${department}`,
    `Customer Type: ${customerType}`,
    `Country: ${country}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "-"}`,
    `Art. 9/49 Medical Consent: ${isMedical ? "YES (Explicitly Granted)" : "N/A"}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  const subject = `[KALKAN PARTNER · ${department}] New inquiry from ${name}`;

  const resendApiKey = process.env.RESEND_API_KEY;
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || "587");
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const toEmail =
    process.env.CONTACT_TO_EMAIL || smtpUser || "kontakt@kalkanpartner.de";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || smtpUser || "kontakt@kalkanpartner.de";

  const hasResend = Boolean(resendApiKey && toEmail && fromEmail);
  const hasSmtp = Boolean(smtpHost && smtpUser && smtpPass);

  if (!hasResend && !hasSmtp) {
    return NextResponse.json(
      {
        status: "not_configured",
        message:
          "Email delivery is not configured yet. Configure either SMTP_HOST/SMTP_USER/SMTP_PASS or RESEND_API_KEY in Vercel Environment Variables.",
      },
      { status: 503 }
    );
  }

  try {
    if (hasSmtp) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"KALKAN PARTNER Website" <${fromEmail}>`,
        to: toEmail,
        replyTo: email,
        subject,
        text: textBody,
      });
    } else if (hasResend) {
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: email,
          subject,
          text: textBody,
        }),
      });

      if (!emailResponse.ok) {
        return NextResponse.json(
          {
            status: "error",
            message: "Email service rejected the request.",
          },
          { status: 502 }
        );
      }
    }

    // Optional CRM webhook forwarding (only non-medical or if explicitly configured)
    const crmWebhook = process.env.CRM_WEBHOOK_URL;
    if (crmWebhook) {
      fetch(crmWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "kalkanpartner-website",
          locale,
          topic,
          department,
          customerType,
          country,
          name,
          email,
          phone,
          message,
          medicalConsent: isMedical ? true : undefined,
          receivedAt: new Date().toISOString(),
        }),
      }).catch(() => {});
    }

    return NextResponse.json({ status: "sent" }, { status: 200 });
  } catch {
    return NextResponse.json(
      { status: "error", message: "Unexpected error while sending email." },
      { status: 500 }
    );
  }
}
