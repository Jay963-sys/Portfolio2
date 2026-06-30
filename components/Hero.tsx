import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:px-10 md:pt-28 md:pb-24"
    >
      <p className="label rise" style={{ animationDelay: "0ms" }}>
        Selected works · 2021—2026
      </p>

      <h1
        className="rise mt-8 max-w-4xl font-display text-[2.6rem] font-light leading-[1.05] tracking-tight md:text-[4.5rem]"
        style={{ animationDelay: "120ms" }}
      >
        Building dependable web systems
        <span className="text-ink-soft"> with an editorial eye </span>
        and an engineer&rsquo;s rigor.
      </h1>

      <div
        className="rise mt-10 flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-end md:justify-between"
        style={{ animationDelay: "240ms" }}
      >
        {/* Trimmed the dense technical jargon down to a clean, confident summary */}
        <p className="max-w-md text-base leading-relaxed text-ink-soft">
          I&rsquo;m {site.alias}, a full-stack developer. I engineer resilient
          digital platforms from e-commerce and AR experiences to complex
          internal tooling.
        </p>

        <p className="label shrink-0">
          {site.name}
          <br />
          {site.role}, {site.location}.
        </p>
      </div>
    </section>
  );
}
