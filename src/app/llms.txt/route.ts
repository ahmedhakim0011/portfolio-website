import { posts } from "@/lib/posts";
import { absoluteUrl, faqs, site, socials } from "@/lib/site";

export const dynamic = "force-static";

// llms.txt: a concise, markdown summary of the site for AI answer engines.
export function GET() {
  const body = `# ${site.name}

> ${site.description}

${site.name} is a ${site.role.toLowerCase()} based in Pakistan who works with clients worldwide. Specialties: ${site.keywords.join(", ")}.

## Key pages
- [Home](${absoluteUrl("/")}): overview of services
- [About](${absoluteUrl("/about")}): background, experience and approach
- [Services](${absoluteUrl("/services")}): mobile app development and consultation, plus FAQ
- [Collaborate](${absoluteUrl("/collaborate")}): contact and project enquiries
- [Blog](${absoluteUrl("/blog")}): guides on Flutter, MVPs and mobile strategy

## Articles
${posts.map((p) => `- [${p.title}](${absoluteUrl(`/blog/${p.slug}`)}): ${p.description}`).join("\n")}

## Common questions
${faqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Contact and profiles
- Email: ${site.email}
${socials.filter((s) => s.href.startsWith("http")).map((s) => `- ${s.label}: ${s.href}`).join("\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
