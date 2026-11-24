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
  // Spam protection fields
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

export async function POST(request: Request) {
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

  if (
    !VALID_TOPICS.has(topic) ||
    (customerType !== "individual" && customerType !== "business") ||
    !VALID_DEPARTMENTS.has(department) ||
    country.length < 2 ||
    name.length < 2 ||
    !EMAIL_REGEX.test(email) ||
    message.length < 15 ||
    body.privacyConsent !== true
  ) {
    return NextResponse.json(
      {
        status: "validation_error",
        message: "Required fields are missing or invalid.",
      },
      { status: 400 }
    );
  }

  // 4. Honest delivery check: never pretend success unless real email integration is configured
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !toEmail || !fromEmail) {
    return NextResponse.json(
      {
        status: "not_configured",
        message:
          "Email delivery is not configured yet. Configure RESEND_API_KEY, CONTACT_FROM_EMAIL, and CONTACT_TO_EMAIL to enable live delivery.",
      },
      { status: 503 }
    );
  }

  // 5. Real email dispatch via Resend REST API
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
    ``,
    `Message:`,
    message,
  ].join("\n");

  try {
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
        subject: `[KALKAN PARTNER · ${department}] New inquiry from ${name}`,
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

    // Optional CRM webhook forwarding for future scalability (best-effort)
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
          receivedAt: new Date().toISOString(),
        }),
      }).catch(() => {
        // Non-blocking CRM hook
      });
    }

    return NextResponse.json({ status: "sent" }, { status: 200 });
  } catch {
    return NextResponse.json(
      { status: "error", message: "Unexpected error while sending email." },
      { status: 500 }
    );
  }
}
