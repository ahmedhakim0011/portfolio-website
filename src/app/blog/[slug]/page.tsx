import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd, breadcrumbs } from "@/components/seo/JsonLd";
import { CallToAction } from "@/components/sections/CallToAction";
import { getPost, posts } from "@/lib/posts";
import { absoluteUrl, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    ...pageMeta({
      path: url,
      title: post.title,
      description: post.description,
      type: "article",
      extra: {
        type: "article",
        publishedTime: post.datePublished,
        modifiedTime: post.dateModified ?? post.datePublished,
        authors: [site.name],
        tags: post.tags,
      },
    }),
  };
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const url = absoluteUrl(`/blog/${post.slug}`);

  return (
    <article className="mx-auto max-w-3xl px-5 pt-12">
      <nav aria-label="Breadcrumb" className="font-type text-sm uppercase tracking-wider text-ink-soft">
        <Link href="/" className="hover:text-rust">Home</Link> / <Link href="/blog" className="hover:text-rust">Blog</Link>
      </nav>
      <h1 className="mt-4 font-display text-4xl font-black leading-tight tracking-tight sm:text-5xl">{post.title}</h1>
      <p className="mt-3 font-type text-sm uppercase tracking-wider text-ink-soft">
        By <Link href="/about" className="underline">{site.name}</Link> ·{" "}
        <time dateTime={post.datePublished}>{post.datePublished}</time>
      </p>
      <p className="mt-6 rounded-[14px] border-[3px] border-ink bg-mustard/40 p-5 text-xl">
        <strong>Short answer:</strong> {post.summary}
      </p>
      {post.sections.map((s) => (
        <section key={s.heading} className="mt-10">
          <h2 className="font-display text-3xl font-black tracking-tight">{s.heading}</h2>
          {s.body.map((para) => (
            <p key={para} className="mt-3 text-lg leading-relaxed">{para}</p>
          ))}
        </section>
      ))}
      <CallToAction title="Planning an app?" line="Let's talk through it." label="Get in touch" />
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.datePublished,
            dateModified: post.dateModified ?? post.datePublished,
            mainEntityOfPage: url,
            url,
            keywords: post.tags.join(", "),
            inLanguage: "en",
            author: { "@type": "Person", name: site.name, url: absoluteUrl("/about") },
            publisher: { "@id": `${site.url}/#person` },
          },
          breadcrumbs([
            { name: "Home", url: absoluteUrl("/") },
            { name: "Blog", url: absoluteUrl("/blog") },
            { name: post.title, url },
          ]),
        ]}
      />
    </article>
  );
}
