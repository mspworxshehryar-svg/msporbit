import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name} and our approach to managed IT services.`,
};

const values = [
  {
    title: "Reliability first",
    body: "Technology should be invisible when it works. We measure ourselves on uptime and response time, not just tickets closed.",
  },
  {
    title: "Clear communication",
    body: "We explain issues and recommendations in plain language, so you always know the state of your systems and why we're suggesting something.",
  },
  {
    title: "Security by default",
    body: "Every engagement starts from a security-first baseline, not as an add-on you have to ask for.",
  },
  {
    title: "Partnership over transactions",
    body: "We aim to be a long-term technology partner, not a vendor you call only when something breaks.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-white/10 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-medium text-sky-400">About Us</p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            IT support built around your business
          </h1>
          <p className="mt-6 text-lg text-slate-400">
            {siteConfig.name} was built on a simple idea: technology support should feel like an
            extension of your team, not an outside vendor you have to chase down.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 sm:grid-cols-2 sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Our Approach</h2>
            <p className="mt-4 text-slate-400">
              Every business runs on technology, but not every business has the time or expertise
              to manage it well. {siteConfig.name}{" "}
              handles the full picture &mdash; monitoring, maintenance, security, and support
              &mdash; so you get the reliability of an in-house IT department without the
              overhead.
            </p>
            <p className="mt-4 text-slate-400">
              Whether you need day-to-day helpdesk support, a full network overhaul, or a partner
              to help you migrate to the cloud, we work as an extension of your team, orbiting
              around your business rather than the other way around.
            </p>
          </div>
          <div className="grid gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-8">
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="mt-1 text-sm text-slate-400">Monitoring & alerting</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">8</div>
              <div className="mt-1 text-sm text-slate-400">Core service areas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">1</div>
              <div className="mt-1 text-sm text-slate-400">Single point of contact for all IT</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0e1526] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold text-white">What We Value</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <h3 className="font-semibold text-white">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white">Let&apos;s talk about your IT</h2>
          <p className="mt-4 text-slate-400">
            Get a straightforward assessment of where your technology stands today.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-400"
            >
              Contact {siteConfig.name}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
