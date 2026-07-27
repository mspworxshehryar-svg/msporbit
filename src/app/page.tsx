import Link from "next/link";
import { services, siteConfig } from "@/lib/site-config";

const stats = [
  { value: "24/7", label: "Monitoring" },
  { value: "8", label: "Core services" },
  { value: "1", label: "Point of contact" },
  { value: "100%", label: "Flat-rate billing" },
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

function monogram(name: string) {
  const words = name.split(/[\s/&-]+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

export default function Home() {
  return (
    <div className="bg-paper">
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-gold-tint px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-gold-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Managed IT Services
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-blue-deep sm:text-5xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-5 max-w-md text-lg text-ink-soft">
              {siteConfig.name}{" "}
              keeps your technology running so your team can focus on the work that matters
              &mdash; managed IT, helpdesk, security, and cloud services under one roof.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link
                href="/contact"
                className="rounded-lg bg-blue-deep px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-ink"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services"
                className="rounded-lg border border-line px-6 py-3.5 text-sm font-bold text-blue-deep transition-colors hover:border-brand-blue/40"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <div className="absolute inset-0 rounded-full border border-line" />
            <div className="absolute inset-[14%] rounded-full border-[16px] border-gold-tint" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[78%] rounded-2xl bg-blue-deep px-7 py-6 text-white shadow-xl shadow-blue-deep/20">
                <div className="text-3xl font-extrabold">&lt; 15 min</div>
                <div className="mt-1 text-xs text-white/70">Average response time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-y-6 px-6 py-9 sm:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`text-center ${i > 0 ? "sm:border-l sm:border-line" : ""}`}>
              <div className="text-2xl font-extrabold text-blue-deep sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs text-ink-soft sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-blue-deep">
              Everything your business needs from IT
            </h2>
            <p className="mt-4 text-ink-soft">
              One partner for the full range of technology services, so you&apos;re never
              juggling vendors.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group rounded-2xl border border-line bg-white p-6 transition-colors hover:border-gold/50"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gold-tint text-xs font-extrabold text-gold-deep">
                  {monogram(service.name)}
                </span>
                <h3 className="mt-4 font-semibold text-blue-deep group-hover:text-gold-deep">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-ink-soft">{service.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-blue-deep">
              Why businesses choose {siteConfig.name}
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {whyUs.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gold-tint text-gold-deep">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                    <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-deep">{item.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-deep">Ready for IT that just works?</h2>
          <p className="mt-4 text-ink-soft">
            Tell us about your business and we&apos;ll put together a straightforward plan and
            quote, no pressure.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-blue-deep px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-ink"
            >
              Talk to Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
