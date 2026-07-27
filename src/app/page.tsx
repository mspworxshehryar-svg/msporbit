import Link from "next/link";
import { services, siteConfig } from "@/lib/site-config";

const highlights = [
  { label: "Response time", value: "< 15 min" },
  { label: "Monitoring", value: "24/7" },
  { label: "Services covered", value: "8" },
];

const whyUs = [
  {
    title: "Proactive, not reactive",
    body: "We monitor and maintain your systems around the clock so small issues get fixed before they become outages.",
  },
  {
    title: "Flat, predictable pricing",
    body: "No surprise invoices. You know what IT costs every month, so you can budget with confidence.",
  },
  {
    title: "A team that speaks plainly",
    body: "No jargon, no runaround. We explain what's happening and what we recommend, in terms that make sense.",
  },
  {
    title: "Built to scale with you",
    body: "From a five-person office to a multi-location business, our services grow alongside yours.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        >
          <div className="absolute left-1/2 top-[-10%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1 text-sm font-medium text-sky-300">
              Managed IT Services
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-6 text-lg text-slate-400">
              {siteConfig.name} keeps your technology running so your team can focus on the work
              that matters &mdash; managed IT, helpdesk, security, and cloud services under one roof.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="w-full rounded-full bg-sky-500 px-8 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-sky-400 sm:w-auto"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services"
                className="w-full rounded-full border border-white/15 px-8 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/5 sm:w-auto"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-10">
            {highlights.map((h) => (
              <div key={h.label} className="text-center">
                <div className="text-2xl font-bold text-white sm:text-3xl">{h.value}</div>
                <div className="mt-1 text-xs text-slate-500 sm:text-sm">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0e1526] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white">Everything your business needs from IT</h2>
            <p className="mt-4 text-slate-400">
              One partner for the full range of technology services, so you're never juggling
              vendors.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-sky-400/40 hover:bg-white/[0.04]"
              >
                <h3 className="font-semibold text-white group-hover:text-sky-300">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{service.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white">Why businesses choose {siteConfig.name}</h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {whyUs.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-sky-500/10 text-sky-400">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                    <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0e1526] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white">Ready for IT that just works?</h2>
          <p className="mt-4 text-slate-400">
            Tell us about your business and we&apos;ll put together a straightforward plan and quote,
            no pressure.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-400"
            >
              Talk to Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
