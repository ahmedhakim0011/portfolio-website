import Link from "next/link";
import { nav, site } from "@/lib/site";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { BackToTop } from "./BackToTop";
import { FooterMascots } from "./FooterMascots";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t-[3px] border-ink bg-ink text-cream">
      <FooterMascots />
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="font-display text-3xl font-black leading-none sm:text-4xl">Thanks for stopping by.</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-3 inline-block font-type text-lg text-mustard underline decoration-dashed underline-offset-4 hover:text-cream"
          >
            {site.email}
          </a>
          <SocialLinks className="mt-5" />
        </div>
        <div className="flex flex-col gap-5 sm:items-end">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 font-type uppercase tracking-wider">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-mustard">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <BackToTop />
        </div>
      </div>
      <div className="border-t-[3px] border-dashed border-cream/25 px-5 py-4 text-center font-type text-sm text-cream/70">
        © {new Date().getFullYear()} {site.name} · Printed with ink &amp; pixels
      </div>
    </footer>
  );
}
