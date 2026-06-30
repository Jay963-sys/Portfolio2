export type Project = {
  /** Catalog index, e.g. "01". The featured piece uses "00". */
  index: string;
  title: string;
  /** One-line role/medium, gallery wall-label style. */
  role: string;
  year: string;
  /** Short stack list rendered in mono, like a medium/dimensions line. */
  stack: string[];
  /** 2–3 sentences. Concrete, not adjectives. Used by detailed entries. */
  blurb: string;
  /** Optional outbound link. Leave undefined to render as text only. */
  href?: string;
  /** Marks the centerpiece shown in the Featured section. */
  featured?: boolean;
  /** "selected" = full catalog entry; "index" = compact back-of-catalog line. */
  tier: "featured" | "selected" | "index";
  /** Real screenshot path if you wire up next/image later (see README). */
  imageSrc?: string;
};

export const projects: Project[] = [
  // --- FEATURED -------------------------------------------------------------
  {
    index: "00",
    tier: "featured",
    featured: true,
    title: "Talk Canvas Gallery",
    role: "Solo full-stack — design, build, deploy",
    year: "2026",
    stack: ["Next.js 15", "TypeScript", "Drizzle / Neon", "Paystack", "WebAR"],
    blurb:
      "An e-commerce platform for a Nigerian art gallery: a polymorphic cart spanning original works and archive prints, server-side price validation, and an idempotent Paystack payment flow. View art on your own wall through a custom AR pipeline — USDZ wall-anchoring on iOS, GLB on Android — backed by an Archive Prints system with masonry infinite-scroll.",
    href: "https://talk-canvas.vercel.app/",
    imageSrc: "/images/talk-canvas.png",
  },

  // --- SELECTED WORKS (detailed) --------------------------------------------
  {
    index: "01",
    tier: "selected",
    title: "Bhoye Visuals",
    role: "Videographer portfolio",
    year: "2025",
    stack: ["Next.js", "Cloudinary", "Clerk"],
    blurb:
      "A cinematic digital portfolio engineered for a professional videographer. Relies on Cloudinary for highly optimized, buffer-free delivery of heavy video assets, paired with Clerk authentication to secure private cuts and client deliverables.",
    href: "https://www.bhoyevisuals.com/",
    imageSrc: "/images/kweku.png",
  },
  {
    index: "02",
    tier: "selected",
    title: "Toye Studios",
    role: "Creative studio portfolio",
    year: "2025",
    stack: ["Next.js", "Framer Motion"],
    blurb:
      "A motion-rich storefront for a creative agency. Leverages Framer Motion for fluid, scroll-driven page transitions that mirror the studio's own emphasis on dynamic visual storytelling.",
    href: "https://www.toyestudios.co.uk/",
    imageSrc: "/images/toye1.png",
  },
  {
    index: "03",
    tier: "selected",
    title: "Luxzy Bespoke",
    role: "Digital storefront & brand platform",
    year: "2025",
    stack: ["Next.js", "Tailwind CMS", "Vercel"],
    blurb:
      "An elegant digital presence for a bespoke fashion label. Features a streamlined client booking flow for tailoring measurements and a high-performance lookbook to showcase seasonal collections.",
    href: "https://www.luxzybespoke.com/",
    imageSrc: "/images/luxzy.png",
  },
  {
    index: "04",
    tier: "selected",
    title: "RCCG Victory House Chicago",
    role: "Full-stack build",
    year: "2025",
    stack: ["Next.js", "Sanity CMS", "Vercel AI SDK", "Tailwind"],
    blurb:
      "A high-performance church platform with real-time sermon streaming and a custom RAG-based AI assistant trained on the ministry's own content. Editors manage everything through Sanity without touching code.",
    href: "https://www.victoryalltheway.org/",
    imageSrc: "/images/vch.png",
  },
  {
    index: "05",
    tier: "selected",
    title: "BrazzPR Agency",
    role: "Design & front-end",
    year: "2024",
    stack: ["Next.js", "Sanity CMS", "Tailwind"],
    blurb:
      "A bold, editorial corporate site for a leading African PR agency. Type-led layout, CMS-driven case studies, and a tone that matches the firm rather than the template.",
    href: "https://www.brazzprandcomms.com/",
    imageSrc: "/images/brazz.png",
  },
  {
    index: "06",
    tier: "selected",
    title: "Incident Manager",
    role: "Internal tooling — Cedarview Communications",
    year: "2024",
    stack: ["React", "Node / Express", "PostgreSQL"],
    blurb:
      "An internal web app for a telecoms network operations centre: fault logging, escalation chains, and inter-department collaboration. Replaced an ad-hoc workflow with a structured system the teams use day to day.",
    href: "https://github.com/Jay963-sys/NOC-INCIDENT-TRACKER",
    imageSrc: "/images/noc-fault-logger.png",
  },
  {
    index: "07",
    tier: "selected",
    title: "EventHorizon",
    role: "Full-stack build",
    year: "2024",
    stack: ["Next.js", "Prisma", "Paystack", "Clerk", "PostgreSQL"],
    blurb:
      "A ticketing platform with real-time seat reservation, organizer dashboards, secure Paystack payments, and instant PDF ticket generation — the same payment-integrity concerns as Talk Canvas Gallery, in a different domain.",
    href: "https://event-horizonn.vercel.app",
    imageSrc: "/images/event.png",
  },
  {
    index: "08",
    tier: "selected",
    title: "SubTrack",
    role: "Full-stack build",
    year: "2024",
    stack: ["Next.js", "Prisma", "Recharts", "Clerk", "Tailwind"],
    blurb:
      "A subscription analytics dashboard: track recurring expenses, visualize spend by category, and get renewal alerts — all behind a secure, mobile-responsive interface.",
    href: "https://subtrackk.vercel.app",
    imageSrc: "/images/subtrackk.png",
  },
  {
    index: "09",
    tier: "selected",
    title: "Mood Play",
    role: "Full-stack build",
    year: "2023",
    stack: ["Next.js", "NextAuth", "Spotify API"],
    blurb:
      "An AI-powered Spotify playlist generator that builds a set from a free-text prompt or a short questionnaire, then writes it straight to the listener's account.",
    href: "https://mood-play.vercel.app/",
    imageSrc: "/images/mood-play.png",
  },

  // --- INDEX OF WORKS (compact) ---------------------------------------------
  {
    index: "10",
    tier: "index",
    title: "Frame & Code",
    role: "Co-founder — design & front-end",
    year: "2024",
    stack: ["Next.js", "Editorial Noir"],
    blurb: "A small creative studio run with a Chicago-based partner.",
    href: "https://frame-and-code-hazel.vercel.app/",
    imageSrc: "/images/hazel.png",
  },
  {
    index: "11",
    tier: "index",
    title: "Eko",
    role: "Front-end — Squad Hackathon 3.0",
    year: "2026",
    stack: ["React", "Fintech"],
    blurb: "A fintech platform aimed at informal traders in Nigeria.",
    href: "https://github.com/LuthyX/Eko",
    imageSrc: "/images/eko.jpg",
  },
  {
    index: "12",
    tier: "index",
    title: "Tranzl8",
    role: "Side project",
    year: "2023",
    stack: ["Python", "Vercel"],
    blurb: "A lightweight translator supporting 100+ languages.",
    href: "https://tranzl8.vercel.app/",
    imageSrc: "/images/translate.png",
  },
  {
    index: "13",
    tier: "index",
    title: "Weatherify",
    role: "Side project",
    year: "2023",
    stack: ["Python", "Vercel"],
    blurb: "A lightweight weather app built on simple API calls.",
    href: "https://weatherlify.vercel.app/",
    imageSrc: "/images/weather.png",
  },
];
