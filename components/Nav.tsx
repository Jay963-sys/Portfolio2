import { site } from "@/lib/site";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/85 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="label !text-ink ul" aria-label="Back to top">
          {site.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#works" className="label ul">
            Works
          </a>
          <a href="#about" className="label ul">
            About
          </a>
          <a href="#contact" className="label ul">
            Contact
          </a>
        </div>

        <a href="#contact" className="label ul md:hidden">
          Contact
        </a>
      </nav>
    </header>
  );
}
