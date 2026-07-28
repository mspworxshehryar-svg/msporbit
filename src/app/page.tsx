import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { services, siteConfig } from "@/lib/site-config";

const heroPoints = [
  "One team accountable for helpdesk, network, and cloud",
  "Flat-rate pricing with no surprise invoices",
  "24/7 monitoring with a real person on the other end",
];

const stats = [
  { value: "24/7", label: "Monitoring & alerting" },
  { value: "8", label: "Core service areas" },
  { value: "1", label: "Point of contact" },
  { value: "100%", label: "Flat-rate billing" },
];

const firefightPoints = [
  "Helpdesk support and day-to-day maintenance",
  "Device, network, and server monitoring",
  "Patching, backups, and disaster recovery",
  "A real response when something goes wrong",
];

const servicePitches: Record<string, string> = {
  "managed-it": "Recurring tech issues slowing your team down?",
  "white-label-helpdesk": "Need support capacity without hiring?",
  "network-server-management": "Worried about the next outage?",
  "device-management": "Devices scattered and inconsistently configured?",
  "onboarding-offboarding": "New hires waiting days for a working laptop?",
  "cloud-migration": "Still tied to aging on-prem servers?",
  "web-development": "Website not pulling its weight?",
  "virtual-desktops": "Team needs secure access from anywhere?",
};

const securityPoints = [
  "24/7 monitoring for unusual activity across devices and networks",
  "Device encryption and enforced security policies",
  "Patch management so known vulnerabilities don't linger",
  "Immediate account deprovisioning the moment someone leaves",
];

const solutionCards = [
  { value: "< 15 min", label: "Fast response", body: "Real people answer, not a ticket queue." },
  { value: "Flat rate", label: "Transparent pricing", body: "One monthly number, no line-item surprises." },
  { value: "1 team", label: "Full accountability", body: "No vendors pointing fingers at each other." },
];

const faqs = [
  {
    q: "What exactly does a managed service provider do?",
    a: "An MSP takes ongoing responsibility for your day-to-day technology — monitoring systems, applying updates, running helpdesk support, and handling security — instead of you calling someone only after something breaks.",
  },
  {
    q: "How does your pricing work?",
    a: "Flat, predictable monthly billing based on your team size and the services you need. No hourly surprises and no line-item invoices after every ticket.",
  },
  {
    q: "How fast do you respond when something goes wrong?",
    a: "Our target is under 15 minutes for a first response, with a real technician, around the clock.",
  },
  {
    q: "Do you work with businesses our size?",
    a: "Our services are built to scale from a small office to a multi-location business, so the plan grows with you rather than forcing a re-platform later.",
  },
  {
    q: "Can you support a remote or hybrid team?",
    a: "Yes — device management, virtual desktops, and cloud migration are all built around teams that aren't all in one building.",
  },
];

const steps = [
  {
    n: "01",
    title: "Reach out",
    body: "Tell us about your business and what's not working today. No cost, no obligation.",
  },
  {
    n: "02",
    title: "Get a straightforward plan",
    body: "We review your setup and put together a plan and flat-rate quote in plain language.",
  },
  {
    n: "03",
    title: "Work without worrying about IT",
    body: "We take it from there — monitoring, support, and security, handled.",
  },
];

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const serviceIcons: Record<string, ReactNode> = {
  "managed-it": (
    <svg {...iconProps}>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M9 20h6M12 16v4" />
      <path d="M8 10l2.5 2.5L16 7" />
    </svg>
  ),
  "white-label-helpdesk": (
    <svg {...iconProps}>
      <path d="M4 13v-1a8 8 0 0116 0v1" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M19 19v1a2 2 0 01-2 2h-3" />
    </svg>
  ),
  "network-server-management": (
    <svg {...iconProps}>
      <rect x="4" y="4" width="16" height="5" rx="1" />
      <rect x="4" y="10.5" width="16" height="5" rx="1" />
      <rect x="4" y="17" width="16" height="3.5" rx="1" />
      <circle cx="7.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="7.5" cy="13" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  "device-management": (
    <svg {...iconProps}>
      <rect x="2" y="5" width="12" height="9" rx="1" />
      <path d="M1 17h14" />
      <rect x="17" y="9" width="5" height="9" rx="1" />
      <path d="M18.5 16h2" />
    </svg>
  ),
  "onboarding-offboarding": (
    <svg {...iconProps}>
      <circle cx="10" cy="7" r="3" />
      <path d="M4 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 8h5m0 0l-2-2m2 2l-2 2" />
    </svg>
  ),
  "cloud-migration": (
    <svg {...iconProps}>
      <path d="M7 18a4 4 0 01-.5-7.97A5 5 0 0116.9 9H17a3.5 3.5 0 010 7H7z" />
      <path d="M12 21v-6m-2 2l2-2 2 2" />
    </svg>
  ),
  "web-development": (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M3 9h18" />
      <path d="M9 13l-2 2 2 2M15 13l2 2-2 2" />
    </svg>
  ),
  "virtual-desktops": (
    <svg {...iconProps}>
      <rect x="2" y="4" width="13" height="9.5" rx="1" />
      <path d="M5.5 17.5h6M8.5 13.5v4" />
      <circle cx="19" cy="8.5" r="3.4" />
      <path d="M19 6.8v1.9l1.3 1.3" strokeWidth="1.4" />
    </svg>
  ),
};

export default function Home() {
  return (
    <div className="bg-paper">
      {/* Hero */}
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
            <ul className="mt-6 grid gap-2.5">
              {heroPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-4 w-4 flex-none text-gold-deep">
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4L8.5 12l6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
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

      {/* Stats */}
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

      {/* Problem / agitation */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl border border-line">
              <Image
                src="/images/office.jpg"
                alt={`${siteConfig.name} team at work`}
                width={1600}
                height={1067}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-blue-deep sm:text-4xl">
              When something breaks, we&apos;re already on it
            </h2>
            <p className="mt-4 text-ink-soft">
              IT problems don&apos;t wait for a convenient time. {siteConfig.name} takes the
              chaos out of IT so your team stays productive, whatever gets thrown at you.
            </p>
            <ul className="mt-6 grid gap-2.5">
              {firefightPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-4 w-4 flex-none text-gold-deep">
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4L8.5 12l6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-blue-deep px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-ink"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-line bg-white py-20">
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
                className="group rounded-2xl border border-line bg-paper p-6 transition-colors hover:border-gold/50"
              >
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-500 shadow-sm shadow-slate-400/10 transition-colors group-hover:border-gold/50 group-hover:bg-gold-tint group-hover:text-gold-deep">
                  <span className="h-8 w-8">{serviceIcons[service.slug]}</span>
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-blue">
                  {servicePitches[service.slug]}
                </p>
                <h3 className="mt-1.5 font-semibold text-blue-deep group-hover:text-gold-deep">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-ink-soft">{service.short}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="text-sm font-bold text-blue-deep underline decoration-brand-blue/40 underline-offset-4 hover:text-gold-deep"
            >
              View all services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Security callout */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 rounded-2xl bg-blue-tint p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wide text-brand-blue">
                Security, built in
              </span>
              <h2 className="mt-3 text-3xl font-bold text-blue-deep">
                Continuous protection, not guesswork
              </h2>
              <p className="mt-4 text-ink-soft">
                Security isn&apos;t an add-on we sell separately &mdash; it&apos;s built into how
                we manage every device, network, and account from day one.
              </p>
              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-block rounded-lg bg-blue-deep px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-ink"
                >
                  Ask About Security
                </Link>
              </div>
            </div>
            <ul className="grid gap-4">
              {securityPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 rounded-xl bg-white p-4 text-sm text-ink-soft">
                  <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-5 w-5 flex-none text-gold-deep">
                    <path d="M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why us / solutions */}
      <section className="border-y border-line bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-blue-deep">Solutions that just work</h2>
            <p className="mt-4 text-ink-soft">
              No jargon, no runaround &mdash; technology support that does what it says.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {solutionCards.map((card) => (
              <div key={card.label} className="rounded-2xl border border-line p-7">
                <div className="text-2xl font-extrabold text-blue-deep">{card.value}</div>
                <h3 className="mt-2 font-semibold text-blue-deep">{card.label}</h3>
                <p className="mt-2 text-sm text-ink-soft">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-bold text-blue-deep">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 divide-y divide-line rounded-2xl border border-line bg-white">
            {faqs.map((item) => (
              <details key={item.q} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-blue-deep">
                  {item.q}
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-5 w-5 flex-none text-gold-deep transition-transform group-open:rotate-45"
                  >
                    <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-ink-soft">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-line bg-blue-deep py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white">Let&apos;s work together</h2>
            <p className="mt-4 text-white/70">
              Ready to stop worrying about IT? Getting started is straightforward.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.n}>
                <span className="text-sm font-bold text-gold">{step.n}</span>
                <h3 className="mt-2 font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-white/70">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-gold px-8 py-3.5 text-sm font-bold text-blue-deep transition-colors hover:bg-gold-deep hover:text-white"
            >
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
