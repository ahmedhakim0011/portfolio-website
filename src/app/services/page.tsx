import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";
import { Radio } from "@/components/mascots";
import { CallToAction } from "@/components/sections/CallToAction";
import { PageIntro } from "@/components/sections/PageIntro";
import { Process } from "@/components/sections/Process";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { Faq } from "@/components/seo/Faq";
import { JsonLd, breadcrumbs } from "@/components/seo/JsonLd";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Flutter app development & mobile app consulting",
  description: `Mobile app development and software consultation from ${site.name}, a senior engineer with ${site.years}+ years of experience.`,
  ...pageMeta({ path: "/services", title: "Flutter app development & mobile app consulting", description: `Mobile app development and consultation from ${site.name}.` }),
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="What I can do for you."
        line="Two ways to work together."
        mascot="camera"
        tone="rust"
        bubble={["Lights, camera…", "Roll the app!"]}
        accent={{ you: "text-rust italic" }}
      />
      <ServiceCards />
      <Process />
      <Faq />
      <JsonLd
        data={[
          breadcrumbs([
            { name: "Home", url: absoluteUrl("/") },
            { name: "Services", url: absoluteUrl("/services") },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Flutter app development & mobile app consulting",
            provider: { "@id": `${site.url}/#person` },
            areaServed: "Worldwide",
            serviceType: ["Mobile app development", "Mobile app consulting"],
            url: absoluteUrl("/services"),
          },
        ]}
      />
      <CallToAction title="Got an idea?" line="Tell me about it. No pressure." label="Let's talk"
        art={<Radio className="h-28 w-28" />}
      />
    </>
  );
}
