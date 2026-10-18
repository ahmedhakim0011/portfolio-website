import { JsonLd } from "@/components/seo/JsonLd";
import { faqs } from "@/lib/site";

/** Visible FAQ (native <details>, no JS) plus matching FAQPage JSON-LD. */
export function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-5 pt-20" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="font-display text-4xl font-black tracking-tight sm:text-5xl">
        Frequently asked questions
      </h2>
      <div className="mt-8 space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-[14px] border-[3px] border-ink bg-cream px-5 py-4">
            <summary className="cursor-pointer list-none font-display text-xl font-bold">{f.q}</summary>
            <p className="mt-3 text-lg text-ink-soft">{f.a}</p>
          </details>
        ))}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
    </section>
  );
}
