import Image from "next/image";
import Link from "next/link";
import { services, siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080d18] text-slate-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={2385}
            height={1074}
            className="h-9 w-auto"
          />
          <p className="mt-3 text-sm">{siteConfig.tagline}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-white">About</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Get in Touch</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`tel:${siteConfig.phone}`} className="hover:text-white">
                {siteConfig.phoneFormatted}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
