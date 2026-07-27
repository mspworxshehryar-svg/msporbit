import type { Metadata } from "next";
import Link from "next/link";
import { services, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description: `Managed IT, helpdesk, network, cloud, and device management services from ${siteConfig.name}.`,
};

export default function ServicesPage() {
  return (
    <div className="bg-paper">
      <section className="border-b border-line py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-medium text-gold-deep">What We Do</p>
          <h1 className="mt-3 text-4xl font-bold text-blue-deep sm:text-5xl">Our Services</h1>
          <p className="mt-6 text-lg text-ink-soft">
            Everything you need to keep technology running, secure, and out of your way &mdash; all
            from one team.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl divide-y divide-line px-6">
          {services.map((service, i) => (
            <div
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24 py-12 first:pt-0 sm:grid sm:grid-cols-3 sm:gap-10"
            >
              <div>
                <span className="text-sm font-medium text-gold-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 text-2xl font-bold text-blue-deep">{service.name}</h2>
                <p className="mt-3 text-ink-soft">{service.description}</p>
              </div>
              <div className="mt-6 sm:col-span-2 sm:mt-0">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-ink-soft">
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mt-0.5 h-4 w-4 flex-none text-gold-deep"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4L8.5 12l6.8-6.8a1 1 0 011.4 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-blue-tint py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-deep">Not sure which services you need?</h2>
          <p className="mt-4 text-ink-soft">
            Most clients start with a quick assessment. We&apos;ll review your current setup and
            recommend a plan that fits your business.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-blue-deep px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink"
            >
              Request an Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
