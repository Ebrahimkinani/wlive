"use client";

import { type FormEvent } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { routes, site } from "@/config/site";

export function AuthForm({
  mode,
}: {
  mode: "login" | "register";
}) {
  const isLogin = mode === "login";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="mx-auto w-full max-w-sm">
      <p className="text-small font-semibold tracking-tight text-text-primary">
        {site.name}
      </p>
      <h1 className="mt-6 text-h1 text-text-primary">
        {isLogin ? "Sign in" : "Create an account"}
      </h1>
      <p className="mt-2 text-body text-text-secondary">
        {isLogin
          ? "Welcome back. This page is a placeholder for a future web sign-in."
          : "This page is a placeholder. Download the app to join W Live."}
      </p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        {isLogin ? null : (
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" autoComplete="name" className="h-11 rounded-xl" />
          </div>
        )}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="h-11 rounded-xl"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete={isLogin ? "current-password" : "new-password"}
            required
            className="h-11 rounded-xl"
          />
        </div>
        <Button
          type="submit"
          className="h-11 w-full rounded-full bg-brand text-white hover:bg-brand-hover"
        >
          {isLogin ? "Sign in" : "Continue"}
        </Button>
      </form>
      <p className="mt-6 text-small text-text-secondary">
        {isLogin ? (
          <>
            New here?{" "}
            <Link href={routes.register} className="text-brand hover:text-brand-hover">
              Create an account
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link href={routes.login} className="text-brand hover:text-brand-hover">
              Sign in
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
