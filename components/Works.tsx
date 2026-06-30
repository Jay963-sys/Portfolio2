import Image from "next/image";
import { projects } from "@/lib/projects";
import { Reveal } from "./Reveal";
import type { Project } from "@/lib/projects";

export function Works() {
  const selected = projects.filter((p) => p.tier === "selected");
  const index = projects.filter((p) => p.tier === "index");

  return (
    <section
      id="works"
      className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28"
    >
      <Reveal className="flex items-baseline justify-between border-b border-line pb-5">
        <h2 className="font-display text-3xl font-light md:text-4xl">
          Selected works
        </h2>
        <span className="label">{selected.length} entries</span>
      </Reveal>

      <div className="divide-y divide-line">
        {selected.map((p, i) => (
          <Reveal key={p.index} delay={i * 60}>
            <Entry project={p} flip={i % 2 === 1} />
          </Reveal>
        ))}
      </div>

      {index.length > 0 && (
        <>
          <Reveal className="mt-24 flex items-baseline justify-between border-b border-line pb-5">
            <h2 className="font-display text-3xl font-light md:text-4xl">
              Index of works
            </h2>
            <span className="label">{index.length} more</span>
          </Reveal>

          <ul>
            {index.map((p, i) => (
              <Reveal key={p.index} delay={i * 50} as="li">
                <IndexRow project={p} />
              </Reveal>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

/* A detailed entry: framed plate + wall label, sides alternating per entry. */
function Entry({ project: p, flip }: { project: Project; flip: boolean }) {
  return (
    <article className="group grid items-center md:grid-cols-2">
      {/* 
        1. Applied the same p-6 md:p-12 padding as the Featured component
        2. Added conditional borders: right border normally, left border if flipped
      */}
      <Plate
        project={p}
        className={`border-line p-6 md:p-12 ${flip ? "md:order-2 md:border-l" : "md:border-r"}`}
      />

      {/* Applied matching padding to the text side and removed the gap layout */}
      <div
        className={`flex flex-col justify-center p-6 md:p-12 ${flip ? "md:order-1" : ""}`}
      >
        <p className="label flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          {p.index} · {p.year}
        </p>
        <h3 className="mt-4 font-display text-3xl font-light leading-snug md:text-4xl">
          {p.href ? (
            <a href={p.href} target="_blank" rel="noreferrer" className="ul">
              {p.title}
            </a>
          ) : (
            p.title
          )}
        </h3>
        <p className="mt-2 text-sm text-ink-soft">{p.role}</p>
        <p className="mt-5 max-w-xl leading-relaxed text-ink-soft">{p.blurb}</p>
        <ul className="label mt-6 flex flex-wrap gap-x-4 gap-y-2">
          {p.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        {p.href && (
          <a
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="ul mt-6 inline-block font-mono text-sm tracking-wide"
          >
            Visit &#8599;
          </a>
        )}
      </div>
    </article>
  );
}
/* Framed image plate matching the Featured "AR Gallery Wall" design. */
function Plate({
  project: p,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  const inner = (
    // Outer gallery wall container with cream background and padding
    <div className="relative flex w-full items-center justify-center bg-cream p-8 md:p-10 transition-transform duration-500 group-hover:-translate-y-1">
      {/* AR reticle corners with a subtle fade-in on hover */}
      <Corner className="left-4 top-4 rotate-0 transition-opacity duration-300 opacity-50 group-hover:opacity-100" />
      <Corner className="right-4 top-4 rotate-90 transition-opacity duration-300 opacity-50 group-hover:opacity-100" />
      <Corner className="bottom-4 right-4 rotate-180 transition-opacity duration-300 opacity-50 group-hover:opacity-100" />
      <Corner className="bottom-4 left-4 -rotate-90 transition-opacity duration-300 opacity-50 group-hover:opacity-100" />

      {/* The framed "canvas" — expanded to 100% width of its container */}
      <div className="w-full overflow-hidden rounded-md border border-line shadow-[0_20px_50px_-24px_rgba(27,23,20,0.5)] transition-shadow duration-500 group-hover:shadow-[0_30px_60px_-20px_rgba(27,23,20,0.6)]">
        <div className="relative aspect-video w-full bg-gradient-to-br from-ink via-[#2c2620] to-[#5b5247]">
          {p.imageSrc ? (
            <Image
              src={p.imageSrc}
              alt={`${p.title} — screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
          ) : (
            <Monogram title={p.title} />
          )}
        </div>
      </div>

      {/* wall shadow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-line" />
    </div>
  );

  return (
    <div className={className}>
      {p.href ? (
        <a
          href={p.href}
          target="_blank"
          rel="noreferrer"
          className="block"
          aria-label={p.title}
        >
          {inner}
        </a>
      ) : (
        inner
      )}
    </div>
  );
}

/* Compact index line with a small framed thumbnail. */
function IndexRow({ project: p }: { project: Project }) {
  const Wrapper = p.href ? "a" : "div";
  const wrapperProps = p.href
    ? { href: p.href, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group flex items-center gap-5 border-b border-line py-4"
    >
      <div className="relative h-12 w-16 shrink-0 overflow-hidden border border-line bg-gradient-to-br from-ink via-[#2c2620] to-[#5b5247]">
        {p.imageSrc ? (
          <Image
            src={p.imageSrc}
            alt={`${p.title} — thumbnail`}
            fill
            sizes="64px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <Monogram title={p.title} small />
        )}
      </div>

      <span className="min-w-0 flex-1 truncate font-display text-lg font-light">
        <span className="ul">{p.title}</span>
      </span>
      <span className="label hidden truncate md:block">{p.role}</span>
      <span className="label shrink-0">{p.year}</span>
    </Wrapper>
  );
}

function Monogram({
  title,
  small = false,
}: {
  title: string;
  small?: boolean;
}) {
  return (
    <span className="flex h-full w-full items-center justify-center">
      <span
        className={`font-display font-light text-cream/40 ${small ? "text-sm" : "text-5xl"}`}
      >
        {title.charAt(0)}
      </span>
    </span>
  );
}

function Corner({ className = "" }: { className?: string }) {
  return (
    <span
      className={`absolute h-5 w-5 border-l border-t border-accent/70 ${className}`}
    />
  );
}
