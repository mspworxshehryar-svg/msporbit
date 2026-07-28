"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { services, siteConfig } from "@/lib/site-config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
      <div className="h-5 bg-blue-deep" />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={2385}
            height={1074}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="relative pb-1 text-base font-medium text-ink-soft transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-200 hover:text-blue-deep hover:after:w-full"
          >
            Home
          </Link>

          <div className="group relative">
            <button className="relative flex items-center gap-1.5 pb-1 text-base font-medium text-ink-soft transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-200 hover:text-sun-deep group-hover:after:w-full">
              Services
              <svg viewBox="0 0 20 20" fill="none" className="mt-0.5 h-3.5 w-3.5">
                <path
                  d="M5 7.5l5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-xl border border-line bg-white py-2 shadow-lg shadow-ink/5">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block px-4 py-2.5 text-sm font-medium text-ink-soft hover:bg-paper hover:text-blue-deep"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/about"
            className="relative pb-1 text-base font-medium text-ink-soft transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-200 hover:text-blue-deep hover:after:w-full"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="relative pb-1 text-base font-medium text-ink-soft transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-200 hover:text-blue-deep hover:after:w-full"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${siteConfig.phone}`}
            className="text-sm font-medium text-ink-soft hover:text-blue-deep"
          >
            {siteConfig.phoneFormatted}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-blue-deep px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-ink"
          >
            Get a Quote
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink-soft md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            <Link
              href="/"
              className="py-2 text-base font-medium text-ink-soft hover:text-blue-deep"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            <button
              className="flex items-center justify-between py-2 text-base font-medium text-ink-soft hover:text-sun-deep"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              aria-expanded={mobileServicesOpen}
            >
              Services
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M5 7.5l5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="ml-3 flex flex-col gap-1 border-l border-line pl-3">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="py-1.5 text-sm text-ink-soft hover:text-blue-deep"
                    onClick={() => setOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/about"
              className="py-2 text-base font-medium text-ink-soft hover:text-blue-deep"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="py-2 text-base font-medium text-ink-soft hover:text-blue-deep"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>

            <a
              href={`tel:${siteConfig.phone}`}
              className="mt-2 text-sm font-medium text-ink-soft"
            >
              {siteConfig.phoneFormatted}
            </a>
            <Link
              href="/contact"
              className="mt-3 rounded-full bg-blue-deep px-5 py-2 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
