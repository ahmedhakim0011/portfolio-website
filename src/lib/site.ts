// Single source of truth for personal details. Edit here, everything updates.
export const site = {
  name: "Ahmed Hakim Ali",
  role: "Senior Software Engineer",
  years: 7,
  email: "ahmdahmed259@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ahmedbuildapps.com",
  description:
    "Senior software engineer with 7+ years building mobile apps. Available for app development, consultation and collaborations.",
  // Primary search topics. Used for the meta keywords hint, schema `knowsAbout` and llms.txt.
  keywords: [
    "Flutter app developer",
    "hire Flutter developer",
    "mobile app consultant",
    "cross-platform app development",
    "MVP app development",
    "iOS and Android app development",
  ],
} as const;

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/collaborate", label: "Collaborate" },
] as const;

// Social profiles. TikTok is omitted until a URL is added (id: "tiktok").
export const socials = [
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/ahmd-hakim-ali-943378202/" },
  { id: "github", label: "GitHub", href: "https://github.com/ahmedhakim0011" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/ahmedbuildapps" },
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com/@ahmedbuildapps" },
  { id: "email", label: "Email", href: `mailto:${site.email}` },
] as const;

// Answer-first FAQ. Rendered on /services and emitted as FAQPage JSON-LD, so keep
// the answers short, factual and self-contained (good for AI answer engines too).
export const faqs = [
  {
    q: "What does a Flutter app developer do?",
    a: "A Flutter app developer builds iOS and Android apps from a single Dart codebase using Google's Flutter framework. That means one team ships both platforms with native-level performance, which usually lowers cost and time to market compared with building two separate native apps.",
  },
  {
    q: "How long does it take to build a mobile app MVP?",
    a: "A focused MVP typically takes 6 to 12 weeks, depending on scope, integrations and design readiness. A short scoping phase up front gives you a firm timeline and a clear list of what ships first.",
  },
  {
    q: "Do you only build new apps, or also review existing ones?",
    a: "Both. I build apps from scratch, and I consult on existing products: architecture and code reviews, performance and release problems, technology choices and roadmaps.",
  },
  {
    q: "Which platforms and technologies do you work with?",
    a: "Primarily Flutter and Dart for iOS and Android, with backends and APIs on common stacks such as Firebase and REST services. I recommend native or other tooling when it genuinely fits the project better.",
  },
  {
    q: "Can we work together if we are in different time zones?",
    a: "Yes. I work remotely with clients worldwide and agree overlap hours, a communication channel and a regular demo cadence at the start of each engagement.",
  },
  {
    q: "How do I start a project or book a consultation?",
    a: "Use the Collaborate page or email me with a short description of your idea. I reply with questions and a proposed next step, usually a short call.",
  },
] as const;
