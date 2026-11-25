"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Lock, ShieldCheck } from "lucide-react";
import { BrandLogo } from "@/components/brand/BrandLogo";

export function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = (await res.json()) as { status?: string; message?: string };
      if (res.ok && data.status === "ok") {
        router.refresh();
        return;
      }

      setError(data.message || "Giriş başarısız.");
    } catch {
      setError("Sunucuya bağlanırken hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy-deep flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-gold/30 bg-surface p-8 sm:p-10 shadow-2xl">
        <div className="flex flex-col items-center text-center">
          <BrandLogo variant="full" theme="dark" showDescriptor={false} />
          <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-ivory px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy">
            <ShieldCheck className="h-3.5 w-3.5 text-gold-dark" />
            <span>Yönetim Paneli Girişi</span>
          </div>
          <p className="mt-3 text-xs text-muted">
            Site içeriklerini yönetmek için yetkili kullanıcı adı ve şifrenizi girin.
          </p>
        </div>

        {error && (
          <div
            role="alert"
            className="mt-6 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-xs font-medium text-red-900"
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div>
            <label
              htmlFor="admin-username"
              className="block text-xs font-semibold uppercase tracking-[0.14em] text-navy"
            >
              Kullanıcı Adı
            </label>
            <input
              id="admin-username"
              type="text"
              required
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 block w-full rounded-lg border border-border-subtle bg-ivory/60 px-3.5 py-2.5 text-sm text-ink focus:border-gold focus:bg-surface focus:outline-none focus:ring-2 focus:ring-gold/30"
              placeholder="Kullanıcı adınız"
            />
          </div>

          <div>
            <label
              htmlFor="admin-password"
              className="block text-xs font-semibold uppercase tracking-[0.14em] text-navy"
            >
              Şifre
            </label>
            <div className="relative mt-2">
              <input
                id="admin-password"
                type={showPassword ? "text" : "password"}
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-lg border border-border-subtle bg-ivory/60 px-3.5 py-2.5 pr-10 text-sm text-ink focus:border-gold focus:bg-surface focus:outline-none focus:ring-2 focus:ring-gold/30"
                placeholder="••••••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-muted hover:text-navy"
                aria-label={showPassword ? "Şifreyi gizle" : "Şifreyi göster"}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-mid disabled:opacity-60"
          >
            <Lock className="h-4 w-4 text-gold-light" />
            <span>{loading ? "Doğrulanıyor..." : "Panele Giriş Yap"}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
