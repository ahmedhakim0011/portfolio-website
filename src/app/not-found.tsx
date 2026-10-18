import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Wrong number", robots: { index: false } };

export default function NotFound() {
  return (
    <main id="main">
      <PageIntro
        eyebrow="Error 404"
        title="Wrong number!"
        line="That page isn't on the line."
        mascot="phone"
        tone="rust"
        bubble={["Hello? Hello?", "Try again!"]}
      />
      <div className="mx-auto max-w-6xl px-5">
        <Button href="/">Back home</Button>
      </div>
    </main>
  );
}
