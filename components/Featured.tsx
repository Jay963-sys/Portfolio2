import Image from "next/image";
import { projects } from "@/lib/projects";
import { Reveal } from "./Reveal";

export function Featured() {
  const p = projects.find((x) => x.featured) ?? projects[0];

  return (
    <section className="border-y border-line bg-paper/60">
      <div className="mx-auto grid max-w-6xl gap-px md:grid-cols-2">
        {/* Visual: a framed work on a gallery wall, with an AR placement reticle */}
        <Reveal className="border-line p-6 md:border-r md:p-12 flex flex-col justify-center">
          <div
            // 1. Removed aspect-[4/5]. Added standard padding so the box hugs the image.
            className="relative flex w-full items-center justify-center bg-cream p-8 md:p-10"
            aria-hidden={!p.imageSrc}
          >
            {/* AR reticle corners */}
            <Corner className="left-4 top-4 rotate-0" />
            <Corner className="right-4 top-4 rotate-90" />
            <Corner className="bottom-4 right-4 rotate-180" />
            <Corner className="bottom-4 left-4 -rotate-90" />

            {/* The framed "canvas" — expanded to 100% width of its container */}
            <div className="w-full overflow-hidden rounded-md border border-line shadow-[0_20px_50px_-24px_rgba(27,23,20,0.5)]">
              <div className="relative aspect-video w-full bg-gradient-to-br from-ink via-[#2c2620] to-[#5b5247]">
                {p.imageSrc && (
                  <Image
                    src={p.imageSrc}
                    alt={`${p.title} — screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover object-top"
                  />
                )}
              </div>
            </div>

            {/* wall shadow line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-line" />
          </div>
        </Reveal>

        {/* Wall label */}
        <Reveal
          delay={120}
          className="flex flex-col justify-center p-6 md:p-12"
        >
          <p className="label flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            On view · Featured work
          </p>

          <h2 className="mt-5 font-display text-4xl font-light leading-tight md:text-5xl">
            {p.title}
          </h2>

          <p className="mt-3 text-sm text-ink-soft">{p.role}</p>

          <ul className="label mt-5 flex flex-wrap gap-x-4 gap-y-2">
            {p.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <p className="mt-6 max-w-prose leading-relaxed text-ink-soft">
            {p.blurb}
          </p>

          {p.href && (
            <a
              href={p.href}
              className="ul mt-8 w-fit font-mono text-sm tracking-wide text-ink"
            >
              View the work &rarr;
            </a>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Corner({ className = "" }: { className?: string }) {
  return (
    <span
      className={`absolute h-5 w-5 border-l border-t border-accent/70 ${className}`}
    />
  );
}
