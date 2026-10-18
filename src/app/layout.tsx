import type { Metadata, Viewport } from "next";
import { Fraunces, Special_Elite } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FloatingBits } from "@/components/ui/FloatingBits";
import { JsonLd } from "@/components/seo/JsonLd";
import { Providers } from "@/components/layout/Providers";
import { site, socials } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK"],
});

const elite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-elite",
  display: "swap",
});

const defaultTitle = `${site.name} · Flutter developer & mobile app consultant`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: defaultTitle, template: `%s · ${site.name}` },
  description: site.description,
  keywords: [...site.keywords],
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: defaultTitle,
    description: site.description,
    url: "/",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: defaultTitle, description: site.description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  // English-only site targeting a global audience: one language, no regional variants.
  alternates: { canonical: "/", languages: { en: "/", "x-default": "/" } },
  // Set these env vars after verifying the site in each console (see SEO.md).
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_VERIFICATION ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION } : undefined,
  },
};

export const viewport: Viewport = {
  themeColor: "#F2E6CC",
  width: "device-width",
  initialScale: 1,
};

const sameAs = socials.filter((s) => s.href.startsWith("http")).map((s) => s.href);

// One connected @graph: the person, the business they run, and the website.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      jobTitle: site.role,
      url: site.url,
      email: `mailto:${site.email}`,
      sameAs,
      knowsAbout: ["Flutter", "Dart", "Mobile app development", "Software consulting", "Cross-platform development"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#service`,
      name: `${site.name} · Mobile app development & consulting`,
      url: site.url,
      description: site.description,
      founder: { "@id": `${site.url}/#person` },
      areaServed: "Worldwide",
      serviceType: ["Flutter app development", "Mobile app consulting", "MVP development"],
      sameAs,
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: "en",
      publisher: { "@id": `${site.url}/#person` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${elite.variable}`}>
      <body suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-lg focus:border-[3px] focus:border-ink focus:bg-mustard focus:px-4 focus:py-2 focus:font-type"
        >
          Skip to content
        </a>
        <Providers>
          <FloatingBits />
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <JsonLd data={jsonLd} />
      </body>
    </html>
  );
}
