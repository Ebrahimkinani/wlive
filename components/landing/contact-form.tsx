"use client";

import { type FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type FormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

const initialFields: FormFields = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const inputClassName =
  "h-11 rounded-xl border-border bg-background text-text-primary placeholder:text-text-tertiary focus-visible:border-brand focus-visible:ring-brand/20";

const textareaClassName =
  "min-h-[9.5rem] w-full resize-y rounded-xl border border-border bg-background px-3 py-2.5 text-base text-text-primary outline-none transition-colors placeholder:text-text-tertiary focus-visible:border-brand focus-visible:ring-3 focus-visible:ring-brand/20 md:text-sm";

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};

  if (!fields.name.trim()) {
    errors.name = "Your name is required.";
  }

  if (!fields.email.trim()) {
    errors.email = "Your email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!fields.subject.trim()) {
    errors.subject = "Subject is required.";
  }

  if (!fields.message.trim()) {
    errors.message = "Message is required.";
  }

  return errors;
}

export function ContactForm() {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitAttempted(true);

    const nextErrors = validate(fields);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    // Ready for backend integration — no contact endpoint exists yet.
  };

  const updateField = (key: keyof FormFields, value: string) => {
    setFields((current) => ({ ...current, [key]: value }));

    if (submitAttempted) {
      setErrors(validate({ ...fields, [key]: value }));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-section border border-border bg-surface-raised/50 p-6 md:p-8"
    >
      <p className="text-h3 text-text-primary">Send us a message</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Your Name</Label>
          <Input
            id="contact-name"
            name="name"
            autoComplete="name"
            value={fields.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={cn(inputClassName, errors.name && "border-destructive")}
          />
          {errors.name ? (
            <p id="contact-name-error" className="text-caption text-destructive">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-email">Your Email</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={cn(inputClassName, errors.email && "border-destructive")}
          />
          {errors.email ? (
            <p id="contact-email-error" className="text-caption text-destructive">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <Label htmlFor="contact-subject">Subject</Label>
        <Input
          id="contact-subject"
          name="subject"
          value={fields.subject}
          onChange={(event) => updateField("subject", event.target.value)}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "contact-subject-error" : undefined}
          className={cn(inputClassName, errors.subject && "border-destructive")}
        />
        {errors.subject ? (
          <p id="contact-subject-error" className="text-caption text-destructive">
            {errors.subject}
          </p>
        ) : null}
      </div>

      <div className="mt-4 space-y-2">
        <Label htmlFor="contact-message">Message</Label>
        <textarea
          id="contact-message"
          name="message"
          value={fields.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={cn(textareaClassName, errors.message && "border-destructive")}
        />
        {errors.message ? (
          <p id="contact-message-error" className="text-caption text-destructive">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="mt-6 flex justify-start sm:justify-end">
        <Button
          type="submit"
          className="h-11 w-full rounded-full bg-brand px-6 text-button text-white hover:bg-brand-hover sm:w-auto"
        >
          Send Message
        </Button>
      </div>
    </form>
  );
}
