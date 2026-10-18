import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { GoodFits } from "@/components/sections/GoodFits";
import { PageIntro } from "@/components/sections/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd, breadcrumbs } from "@/components/seo/JsonLd";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Collaborate",
  description: `${site.name} is open to partnerships and collaborations with people who have great ideas. Get in touch.`,
  ...pageMeta({ path: "/collaborate", title: "Collaborate", description: `${site.name} is open to partnerships and collaborations with people who have great ideas. Get in touch.` }),
};

export default function CollaboratePage() {
  return (
    <>
      <PageIntro
        eyebrow="Collaborate"
        title="Let's make something."
        line="Open to partnerships and great ideas."
        mascot="phone"
        tone="mustard"
        bubble={["Ring ring!", "Pick up!"]}
        accent={{ something: "text-rust italic" }}
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 pt-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal from="left">
          <ContactForm />
        </Reveal>
        <GoodFits />
      </section>
      <JsonLd data={breadcrumbs([{ name: "Home", url: absoluteUrl("/") }, { name: "Collaborate", url: absoluteUrl("/collaborate") }])} />
    </>
  );
}
