"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: if this hidden field is filled, silently treat as success.
    if ((data.get("company_website") as string)?.length) {
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch("/contact-form.php", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-sky-400/30 bg-sky-500/10 p-8 text-center">
        <h3 className="text-xl font-semibold text-white">Message sent</h3>
        <p className="mt-2 text-sm text-slate-300">
          Thanks for reaching out. We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      {/* Honeypot field, hidden from real users */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-slate-300">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-slate-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-slate-300">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
            placeholder="(555) 555-5555"
          />
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-medium text-slate-300">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
            placeholder="Company name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-slate-300">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
          placeholder="Tell us a bit about your business and what you need help with."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong sending your message. Please try again, or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-400 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
