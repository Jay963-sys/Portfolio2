import { Reveal } from "./Reveal";

const capabilities = [
  "Next.js 15 / TypeScript",
  "Prisma · Drizzle · Postgres",
  "Payments (Paystack)",
  "WebAR (USDZ / GLB)",
  "Sanity CMS · RAG / AI",
  "Vercel / CI",
];

export function About() {
  return (
    <section id="about" className="border-t border-line bg-paper/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.4fr] md:px-10 md:py-28">
        <Reveal>
          <p className="label">About</p>
        </Reveal>

        <div className="space-y-6">
          <Reveal>
            <p className="font-display text-2xl font-light leading-snug md:text-[1.9rem]">
              I&rsquo;m a full-stack developer who has been freelancing since
              2021, shipping commerce, AR, and internal tooling for clients
              across Lagos, the UK, and the US.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <p className="leading-relaxed text-ink-soft">
              I like systems that behave predictably under load: prices
              validated on the server, payments that can&rsquo;t double-charge,
              state that stays honest. Most of my recent work has been
              full-stack on Next.js — from a polymorphic commerce cart and a
              wall-anchored AR pipeline to a RAG-based assistant and a real-time
              ticketing flow.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p className="leading-relaxed text-ink-soft">
              Alongside client work I co-run Frame &amp; Code, a small creative
              studio, where the &ldquo;editorial&rdquo; half of my taste gets to
              lead — the same design language this page is built on.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-line pt-6 sm:grid-cols-3">
              {capabilities.map((c) => (
                <li key={c} className="label !text-ink">
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
