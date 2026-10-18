import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

// Search and AI crawlers are allowed on purpose so the site can be found and cited by
// Google, Bing and answer engines. To opt out of model *training* only, change the
// "training" agents to `disallow: "/"`.
const searchAndAnswerBots = ["Googlebot", "Bingbot", "OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "Perplexity-User", "Claude-SearchBot", "Claude-User"];
const trainingBots = ["GPTBot", "ClaudeBot", "Google-Extended", "Applebot-Extended", "CCBot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: searchAndAnswerBots, allow: "/" },
      { userAgent: trainingBots, allow: "/" },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
