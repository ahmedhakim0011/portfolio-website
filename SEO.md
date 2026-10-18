# SEO system

Everything below marked **Done** is implemented in code. Items under **You must do** need your accounts or real-world action.

## Prioritized plan

| # | Action | Status |
|---|--------|--------|
| 1 | Domain `https://ahmedbuildapps.com` set as the default in `src/lib/site.ts` (override with `NEXT_PUBLIC_SITE_URL`). Point DNS at your host and make `www` redirect to the apex. | Done in code; DNS is yours |
| 2 | Static HTML for every page (SSG), canonical + hreflang (`en`, `x-default`), robots/sitemap, security headers | Done |
| 3 | Unique title/description/OG/Twitter per page, share image, `max-image-preview:large` | Done |
| 4 | JSON-LD: Person, ProfessionalService, WebSite (@graph), Service, FAQPage, Blog, BlogPosting, BreadcrumbList | Done |
| 5 | GEO: `/llms.txt`, answer-first summaries, FAQ block, AI search crawlers allowed in robots | Done |
| 6 | Blog (`src/lib/posts.ts`) with 2 starter posts | Done, you add more |
| 7 | Search Console, Bing, GA4, backlinks, profiles | **You must do** |

## Page table

| URL | Title | H1 | Target keyword |
|-----|-------|----|----------------|
| `/` | Ahmed Hakim Ali · Flutter developer & mobile app consultant | Home hero | Flutter app developer |
| `/services` | Flutter app development & mobile app consulting | What I can do for you. | hire Flutter developer, mobile app consultant |
| `/about` | About | Hi, I'm Ahmed Hakim Ali. | senior Flutter developer |
| `/collaborate` | Collaborate | Let's make something. | contact Flutter developer |
| `/blog` | Blog: Flutter, MVPs and mobile app strategy | Notes from the workshop. | Flutter blog |
| `/blog/flutter-vs-native-app-development` | Flutter vs native app development: which should you choose? | same | Flutter vs native |
| `/blog/how-to-scope-a-mobile-app-mvp` | How to scope a mobile app MVP without overbuilding | same | MVP app development |

Tip: titles "Home/About/Collaborate" are short. Once you decide final copy, make them keyword-led, e.g. "About Ahmed Hakim Ali, Senior Flutter Developer".

## Where things live
- Personal data, keywords, FAQ, nav: `src/lib/site.ts`
- Per-page metadata helper: `src/lib/seo.ts`; schema helpers: `src/components/seo/`
- Crawling: `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/llms.txt/route.ts`
- Headers/caching/images: `next.config.ts`
- To block AI *training* crawlers but keep AI search, set the `trainingBots` rule in `robots.ts` to `disallow: "/"`.

## You must do (off-code checklist)
1. Point ahmedbuildapps.com at your host and deploy on HTTPS (Vercel/Netlify/Cloudflare give CDN + HTTP/2 automatically). Redirect `www.ahmedbuildapps.com` to `ahmedbuildapps.com` with a 301 so only one version gets indexed.
2. Google Search Console: add the domain property, verify (DNS or put token in `NEXT_PUBLIC_GSC_VERIFICATION`), submit `/sitemap.xml`, request indexing for each page. International targeting is automatic; there is no country setting for a single-language `.com`.
3. Bing Webmaster Tools: import from GSC, submit sitemap (this also feeds ChatGPT search and Copilot).
4. GA4: create a property and add the tag (ask me and I'll wire it in with consent handling).
5. Profiles with identical name, photo and bio and a link to the site: LinkedIn, GitHub (profile README), YouTube, Instagram, TikTok (add the URL to `socials`). Consistent entity data helps Google and AI engines.
6. Google Business Profile: only if you serve local clients; otherwise skip.
7. Backlinks (white-hat): publish your projects on GitHub with a README link, Dev.to/Hashnode/Medium cross-posts with `canonical` pointing to your blog, directories (Clutch, GoodFirms, Upwork/Toptal profiles), Product Hunt launch for any product, guest posts on Flutter/mobile communities, answer questions on Stack Overflow/Reddit with genuine help, YouTube videos with the site in the description.
8. Add real content: case studies/portfolio with outcomes, testimonials (then add Review schema only for genuine, visible reviews), a real photo and bio on About, a privacy policy page (needed if you add analytics or the contact form stores data).
9. Run PageSpeed Insights / Lighthouse after deploying and fix anything specific to your final assets.

## Content plan: 20 articles (informational, commercial, transactional)
1. Flutter vs native: which to choose (published)
2. How to scope a mobile app MVP (published)
3. How much does it cost to build a mobile app?
4. How to hire a Flutter developer: what to check
5. Flutter vs React Native in 2026
6. Mobile app development process step by step
7. How long does it take to build an app?
8. Flutter app architecture: choosing state management
9. Firebase vs custom backend for your first app
10. How to get your app approved on the App Store and Google Play
11. Flutter performance: 10 fixes for janky apps
12. Mobile app consulting: what you get and when you need it
13. Freelancer vs agency for app development
14. Offline-first apps in Flutter
15. How to test a Flutter app before launch
16. Mobile app security checklist for startups
17. How to add payments to a Flutter app
18. App maintenance: what it costs and why it matters
19. Rescuing a stalled app project: audit checklist
20. Case study: from idea to store (use a real project)

Pillar pages: "Flutter app development" (services), "Mobile app MVP guide", "Mobile app cost". Each article links up to its pillar and across to 2-3 siblings. Every post needs an answer-first summary, original insight or numbers you can source, and your byline. Add each to `src/lib/posts.ts`; the sitemap, llms.txt, schema and blog index update automatically.

## ASO
Not applicable: no app on the stores. If you publish one, you'll want a title/subtitle/keyword-field pass per locale, screenshots, and Smart App Banner/App Links to this site.

## Measurement and targets (30 / 60 / 90 days)
| Metric | 30 days | 60 days | 90 days |
|--------|---------|---------|---------|
| Pages indexed (GSC) | all 7 | all + new posts | 15+ |
| Branded query ("Ahmed Hakim Ali") ranks #1 | yes | yes | yes |
| Impressions / month | first data | 500+ | 2,000+ |
| Published posts | 4 | 8 | 12 |
| Referring domains | 5 | 12 | 25 |
| LCP / INP / CLS | good (<2.5s / <200ms / <0.1) | maintain | maintain |

Track queries and pages in GSC and Bing, traffic and enquiries in GA4, and a handful of target keywords in a rank tracker.

## Honest expectations
- Branded searches can rank within days to a few weeks of indexing.
- Competitive terms like "hire Flutter developer" are crowded: expect 4-9 months of consistent publishing and link earning before meaningful rankings; long-tail posts can start earning in 2-3 months.
- Code can only make the site eligible. Rankings come from content quality, authority and time. Be skeptical of anyone promising page one in weeks.
