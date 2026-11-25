import crypto from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE_NAME = "kp_admin_session";
const SESSION_DURATION_MS = 12 * 60 * 60 * 1000; // 12 hours

function sha256Buffer(input: string): Buffer {
  return crypto.createHash("sha256").update(input, "utf8").digest();
}

export function safeCompare(a: string, b: string): boolean {
  const bufA = sha256Buffer(a);
  const bufB = sha256Buffer(b);
  return crypto.timingSafeEqual(bufA, bufB);
}

export function getAdminEnvConfig() {
  const username = process.env.ADMIN_USERNAME || "";
  const password = process.env.ADMIN_PASSWORD || "";
  const secret = process.env.ADMIN_SESSION_SECRET || "";
  const configured =
    username.length > 0 && password.length > 0 && secret.length >= 16;

  return { username, password, secret, configured };
}

export function createSessionToken(username: string, secret: string): string {
  const expiresAt = Date.now() + SESSION_DURATION_MS;
  const payload = Buffer.from(
    JSON.stringify({ u: username, exp: expiresAt }),
    "utf8"
  ).toString("base64url");
  const sig = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("base64url");
  return `${payload}.${sig}`;
}

export function verifySessionToken(
  token: string | undefined,
  expectedUsername: string,
  secret: string
): boolean {
  if (!token || !secret || !expectedUsername) return false;
  const parts = token.split(".");
  if (parts.length !== 2) return false;

  const [payload, sig] = parts;
  const expectedSig = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("base64url");

  if (!safeCompare(sig, expectedSig)) return false;

  try {
    const parsed = JSON.parse(
      Buffer.from(payload, "base64url").toString("utf8")
    ) as { u?: string; exp?: number };

    if (!parsed.u || typeof parsed.exp !== "number") return false;
    if (Date.now() > parsed.exp) return false;
    return safeCompare(parsed.u, expectedUsername);
  } catch {
    return false;
  }
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const { username, secret, configured } = getAdminEnvConfig();
  if (!configured) return false;
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  return verifySessionToken(token, username, secret);
}
