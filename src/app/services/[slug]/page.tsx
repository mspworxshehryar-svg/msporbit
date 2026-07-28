import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, siteConfig } from "@/lib/site-config";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.short,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <div className="bg-paper">
      <section className="border-b border-line py-10 sm:py-14">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/#services"
            className="text-sm font-semibold text-brand-blue hover:text-blue-deep"
          >
            &larr; All services
          </Link>

          <div className="mt-6 overflow-hidden rounded-2xl border border-line">
            <Image
              src={service.bannerImage}
              alt={service.name}
              width={1600}
              height={900}
              priority
              className="h-56 w-full object-cover sm:h-72"
            />
          </div>

          <div className="mt-6">
            <h1 className="text-3xl font-bold text-blue-deep sm:text-4xl">{service.name}</h1>
            <p className="mt-2 text-lg text-ink-soft">{service.short}</p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="mx-auto grid max-w-4xl gap-10 px-6 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-3">
            <h2 className="text-xl font-bold text-blue-deep">Why it matters</h2>
            <div className="mt-4 grid gap-4">
              {service.importance.map((paragraph, i) => (
                <p key={i} className="text-ink-soft">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
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
        </div>
      </section>

      <section className="border-y border-line bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-xl font-bold text-blue-deep">What&apos;s included</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-soft">
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
      </section>

      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-xl font-bold text-blue-deep">Key benefits</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl border border-line p-6">
                <h3 className="font-semibold text-blue-deep">{benefit.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{benefit.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-xl font-bold text-blue-deep">What clients say</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {service.reviews.map((review) => (
              <div key={review.author} className="rounded-2xl border border-line bg-paper p-6">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-3 text-sm text-ink-soft">&ldquo;{review.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold text-blue-deep">
                  {review.author}{" "}
                  <span className="font-normal text-ink-soft">&mdash; {review.title}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-blue-deep py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to talk about {service.name.toLowerCase()}?
          </h2>
          <p className="mt-3 text-white/70">
            Tell us about your business and we&apos;ll put together a straightforward plan and
            quote, no pressure.
          </p>
          <div className="mt-7">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-gold px-8 py-3.5 text-sm font-bold text-blue-deep transition-colors hover:bg-gold-deep hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-xl font-bold text-blue-deep">Other services</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-xl border border-line p-4 transition-colors hover:border-gold/50"
              >
                <h3 className="font-semibold text-blue-deep group-hover:text-gold-deep">
                  {s.name}
                </h3>
                <p className="mt-1 text-sm text-ink-soft">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
