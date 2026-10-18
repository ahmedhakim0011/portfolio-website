import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbs } from "@/components/seo/JsonLd";
import { PageIntro } from "@/components/sections/PageIntro";
import { posts } from "@/lib/posts";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog: Flutter, MVPs and mobile app strategy",
  description: `Practical guides on Flutter, mobile app MVPs and technology decisions from ${site.name}.`,
  ...pageMeta({ path: "/blog", title: "Blog", description: `Practical guides on Flutter, mobile app MVPs and technology decisions from ${site.name}.` }),
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.datePublished.localeCompare(a.datePublished));
  return (
    <>
      <PageIntro
        eyebrow="Blog"
        title="Notes from the workshop."
        line="Practical guides on building mobile apps."
        mascot="typewriter"
        tone="mustard"
        bubble={["Fresh off the press!", "Read on."]}
      />
      <section className="mx-auto max-w-4xl px-5 pt-8">
        <ul className="space-y-6">
          {sorted.map((p) => (
            <li key={p.slug}>
              <article className="rounded-[14px] border-[3px] border-ink bg-cream p-6">
                <p className="font-type text-sm uppercase tracking-wider text-ink-soft">
                  <time dateTime={p.datePublished}>{p.datePublished}</time> · {p.tags.join(" · ")}
                </p>
                <h2 className="mt-2 font-display text-3xl font-black tracking-tight">
                  <Link href={`/blog/${p.slug}`} className="hover:text-rust">
                    {p.title}
                  </Link>
                </h2>
                <p className="mt-2 text-lg text-ink-soft">{p.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>
      <JsonLd
        data={[
          breadcrumbs([
            { name: "Home", url: absoluteUrl("/") },
            { name: "Blog", url: absoluteUrl("/blog") },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: `${site.name} Blog`,
            url: absoluteUrl("/blog"),
            blogPost: sorted.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: absoluteUrl(`/blog/${p.slug}`), datePublished: p.datePublished })),
          },
        ]}
      />
    </>
  );
}
