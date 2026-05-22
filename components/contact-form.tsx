"use client";

import { useRef, useState } from "react";

import { getButtonClassName } from "@/components/link-button";
import { serviceOptions } from "@/lib/site-data";

type SubmissionState = {
  type: "idle" | "success" | "error";
  message: string;
};

const fieldClassName =
  "w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[var(--brand-copper)] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[rgba(184,115,51,0.12)]";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionState({ type: "idle", message: "" });

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      serviceNeeded: formData.get("serviceNeeded"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Unable to submit the form.");
      }

      formRef.current?.reset();
      setSubmissionState({
        type: "success",
        message:
          result.message ??
          "Thanks for reaching out. We will follow up with the next steps.",
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to submit the form right now.";

      setSubmissionState({
        type: "error",
        message,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-700">Name</span>
          <input
            className={fieldClassName}
            type="text"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            required
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-700">Company</span>
          <input
            className={fieldClassName}
            type="text"
            name="company"
            placeholder="Company name"
            autoComplete="organization"
          />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-700">Email</span>
          <input
            className={fieldClassName}
            type="email"
            name="email"
            placeholder="you@company.com"
            autoComplete="email"
            required
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-700">Phone</span>
          <input
            className={fieldClassName}
            type="tel"
            name="phone"
            placeholder="+1 (555) 123-4567"
            autoComplete="tel"
          />
        </label>
      </div>
      <label className="space-y-2">
        <span className="text-sm font-semibold text-slate-700">Service Needed</span>
        <select className={fieldClassName} name="serviceNeeded" defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className="space-y-2">
        <span className="text-sm font-semibold text-slate-700">Message</span>
        <textarea
          className={`${fieldClassName} min-h-40 resize-y`}
          name="message"
          placeholder="Include the metal, purity target, form, quantity, and destination if available."
          required
        />
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className={getButtonClassName(
            "primary",
            "border-0 disabled:cursor-not-allowed disabled:opacity-70",
          )}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Request a Quote"}
        </button>
        <p className="text-sm leading-6 text-slate-500">
          Ideal inquiries include grade, purity, quantity, and destination
          market.
        </p>
      </div>
      <div
        aria-live="polite"
        className={
          submissionState.type === "idle"
            ? "hidden"
            : submissionState.type === "success"
              ? "rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
              : "rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700"
        }
      >
        {submissionState.message}
      </div>
    </form>
  );
}
