import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <footer
      id="contact"
      className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-32"
    >
      <Reveal>
        <p className="label">Contact</p>
        <h2 className="mt-6 max-w-3xl font-display text-4xl font-light leading-[1.08] md:text-6xl">
          Have something worth building?
        </h2>

        {/* Updated Email CTA Button */}
        <a
          href={`mailto:${site.email}`}
          className="group mt-10 inline-flex items-center gap-6 rounded-full border border-line bg-paper px-8 py-4 font-mono text-sm uppercase tracking-widest text-ink transition-all duration-500 hover:border-ink hover:bg-ink hover:text-cream hover:shadow-lg"
        >
          <span>send a message</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </a>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-line pt-8 md:flex-row md:items-center">
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            <a
              href={site.links.github}
              className="label ul"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href={site.links.linkedin}
              className="label ul"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={site.links.x}
              className="label ul"
              target="_blank"
              rel="noreferrer"
            >
              X
            </a>
          </nav>
          <p className="label">
            &copy; {new Date().getFullYear()} {site.name} · {site.location}
          </p>
        </div>
      </Reveal>
    </footer>
  );
}
