import type { Metadata } from "next";
import Link from "next/link";

import { AuthForm } from "@/components/landing/auth-form";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Get started",
};

export default function RegisterPage() {
  return (
    <main className="flex min-h-svh flex-col justify-center px-5 py-16">
      <Link href="/" className="mb-10 text-small text-text-tertiary hover:text-text-primary">
        ← {site.name}
      </Link>
      <AuthForm mode="register" />
    </main>
  );
}
