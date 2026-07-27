import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} for a free IT assessment and quote.`,
};

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-white/10 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-medium text-sky-400">Get in Touch</p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Let&apos;s talk IT</h1>
          <p className="mt-6 text-lg text-slate-400">
            Tell us about your business and what you need. We&apos;ll follow up with a
            straightforward plan and quote.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-white">Contact Details</h2>
              <dl className="mt-6 space-y-5 text-sm">
                <div>
                  <dt className="text-slate-500">Phone</dt>
                  <dd className="mt-1">
                    <a href={`tel:${siteConfig.phone}`} className="text-white hover:text-sky-300">
                      {siteConfig.phoneFormatted}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500">Email</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-white hover:text-sky-300"
                    >
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500">Response Time</dt>
                  <dd className="mt-1 text-white">Within one business day</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
