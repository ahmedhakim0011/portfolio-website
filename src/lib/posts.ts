// Blog content lives here so every post is statically generated (SSG) and indexable.
// To add a post: append an object, give it a unique slug, and redeploy.
export type Post = {
  slug: string;
  title: string;
  description: string;
  datePublished: string; // ISO date
  dateModified?: string;
  tags: string[];
  /** Answer-first summary shown at the top of the post. */
  summary: string;
  sections: { heading: string; body: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "flutter-vs-native-app-development",
    title: "Flutter vs native app development: which should you choose?",
    description:
      "A practical comparison of Flutter and native iOS/Android development: cost, speed, performance and when each one is the right call.",
    datePublished: "2026-10-18",
    tags: ["Flutter", "Mobile strategy"],
    summary:
      "Choose Flutter when you want iOS and Android from one codebase with near-native performance and a faster, cheaper path to launch. Choose native when you depend heavily on platform-specific features or need the very latest OS APIs on day one.",
    sections: [
      {
        heading: "What is the difference?",
        body: [
          "Native development means building separate apps in Swift (iOS) and Kotlin (Android). Flutter is a cross-platform framework from Google that lets one team write a single Dart codebase and ship to both stores.",
        ],
      },
      {
        heading: "When Flutter is the better choice",
        body: [
          "Early-stage products and MVPs benefit most: one codebase means one team, faster iteration and lower cost. Flutter also gives you full control over the UI, so the app looks and behaves the same on both platforms.",
          "Most business apps (marketplaces, booking, fintech dashboards, content and community apps) sit comfortably within what Flutter does well.",
        ],
      },
      {
        heading: "When native is the better choice",
        body: [
          "If your product is built around deep platform integration, such as advanced camera pipelines, heavy background processing or brand-new OS features that you need immediately, native gives the most direct access.",
        ],
      },
      {
        heading: "How to decide",
        body: [
          "List the three features that make or break your product. If none need unusual platform access, start with Flutter. If you are unsure, a short technical consultation before writing code is the cheapest way to avoid an expensive rewrite.",
        ],
      },
    ],
  },
  {
    slug: "how-to-scope-a-mobile-app-mvp",
    title: "How to scope a mobile app MVP without overbuilding",
    description:
      "A step-by-step way to define the smallest mobile app that tests your idea: core user problem, must-have features and a realistic launch plan.",
    datePublished: "2026-10-18",
    tags: ["MVP", "Product"],
    summary:
      "Scope an MVP by naming one user, one problem and the single journey that solves it, then cut everything that is not required to complete that journey. Ship that, measure, and only then expand.",
    sections: [
      {
        heading: "Start with one user and one problem",
        body: [
          "Write one sentence: who is the user, what are they trying to do, and what stops them today? If you cannot say it in a sentence, the scope is still too wide.",
        ],
      },
      {
        heading: "Map the single core journey",
        body: [
          "List the steps from opening the app to the moment the user gets value. Every screen and feature must serve that path. Things like profiles, settings, social sharing and admin tooling usually belong in version two.",
        ],
      },
      {
        heading: "Decide what to buy or reuse",
        body: [
          "Authentication, payments, push notifications and analytics are solved problems. Use proven services so your build time goes into what is unique to your product.",
        ],
      },
      {
        heading: "Plan the launch and the measurement",
        body: [
          "Decide up front which two or three numbers tell you the idea works, such as activation or week-one retention, and build just enough tracking to see them.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
