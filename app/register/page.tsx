import type { Metadata } from "next";

import { AuthBackLink } from "@/components/landing/auth-back-link";
import { AuthForm } from "@/components/landing/auth-form";
import { AuthScrollMark } from "@/components/landing/auth-scroll-mark";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Get started",
};

export default function RegisterPage() {
  return (
    <main className="flex min-h-svh flex-col justify-center px-5 py-16">
      <AuthScrollMark />
      <AuthBackLink siteName={site.name} />
      <AuthForm mode="register" />
    </main>
  );
}
