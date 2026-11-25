import { Suspense } from "react";
import type { Metadata } from "next";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { AdminLogin } from "@/components/admin/AdminLogin";
import { AdminDashboard } from "@/components/admin/AdminDashboard";

export const metadata: Metadata = {
  title: "Admin Panel | KALKAN PARTNER",
  robots: { index: false, follow: false },
};

async function AdminAuthGate() {
  const authenticated = await isAdminAuthenticated();
  return authenticated ? <AdminDashboard /> : <AdminLogin />;
}

export default function AdminPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-navy-deep flex items-center justify-center text-sm text-white/80">
          Yükleniyor...
        </div>
      }
    >
      <AdminAuthGate />
    </Suspense>
  );
}
