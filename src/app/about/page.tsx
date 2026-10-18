import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";
import { AboutStats } from "@/components/sections/AboutStats";
import { FilmCamera } from "@/components/mascots";
import { CallToAction } from "@/components/sections/CallToAction";
import { FilmStrip } from "@/components/sections/FilmStrip";
import { PageIntro } from "@/components/sections/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd, breadcrumbs } from "@/components/seo/JsonLd";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} is a senior software engineer with ${site.years}+ years of experience building mobile apps.`,
  ...pageMeta({ path: "/about", title: "About", description: `${site.name} is a senior software engineer with ${site.years}+ years of experience building mobile apps.` }),
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title={`Hi, I'm ${site.name}.`}
        line="Senior engineer. I turn ideas into apps people enjoy."
        mascot="radio"
        tone="teal"
        bubble={["Tune in!", "Nice to meet you."]}
      />
      <AboutStats />

      <section className="mx-auto max-w-6xl px-5 pt-20">
        <Reveal>
          <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">Seven years, seven frames</h2>
        </Reveal>
        <div className="mt-8">
          <FilmStrip />
        </div>
      </section>

      <CallToAction title="Let's build something." line="I'd love to hear your idea."
        art={<FilmCamera className="h-28 w-28" />}
      />
      <JsonLd data={breadcrumbs([{ name: "Home", url: absoluteUrl("/") }, { name: "About", url: absoluteUrl("/about") }])} />
    </>
  );
}
