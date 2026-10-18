import type { Metadata } from "next";

const ogImage = { url: "/opengraph-image", width: 1200, height: 630 };

/** Shared per-page metadata: canonical, hreflang, and Open Graph/Twitter incl. the share image. */
export function pageMeta(opts: {
  path: string;
  title?: string;
  description: string;
  type?: "website" | "article";
  extra?: Metadata["openGraph"];
}): Pick<Metadata, "alternates" | "openGraph" | "twitter"> {
  return {
    alternates: { canonical: opts.path, languages: { en: opts.path, "x-default": opts.path } },
    openGraph: { type: opts.type ?? "website", url: opts.path, title: opts.title, description: opts.description, images: [ogImage], ...opts.extra } as Metadata["openGraph"],
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description, images: [ogImage.url] },
  };
}
