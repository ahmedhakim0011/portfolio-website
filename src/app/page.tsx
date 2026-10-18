import { pageMeta } from "@/lib/seo";
import type { Metadata } from "next";
import { FeatureCard } from "@/components/sections/FeatureCard";
import { HomeHero } from "@/components/sections/HomeHero";
import { CallToAction } from "@/components/sections/CallToAction";
import { Typewriter } from "@/components/mascots";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${site.name} · Flutter developer & mobile app consultant` },
  description: site.description,
  ...pageMeta({ path: "/", title: `${site.name} · Flutter developer & mobile app consultant`, description: site.description }),
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <section className="mx-auto max-w-6xl px-5 pt-20">
        <Reveal>
          <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">What I do</h2>
          <p className="mt-2 text-lg text-ink-soft">Three ways to work together.</p>
        </Reveal>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0}>
            <FeatureCard
              href="/services"
              mascot="camera"
              tone="teal"
              tag="Build"
              title="Mobile apps"
              line="Idea in, polished app out."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <FeatureCard
              href="/services"
              mascot="phone"
              tone="rust"
              tag="Advise"
              title="Consultation"
              line="Straight talk, clear next steps."
            />
          </Reveal>
          <Reveal delay={0.2}>
            <FeatureCard
              href="/collaborate"
              mascot="radio"
              tone="mustard"
              tag="Team up"
              title="Collaborate"
              line="Got a great idea? Let's talk."
            />
          </Reveal>
        </div>
      </section>

      <CallToAction
        title="Ready when you are."
        line="Tell me about your idea."
        art={<Typewriter className="h-28 w-28" />}
      />
    </>
  );
}
