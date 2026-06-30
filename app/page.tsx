import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Featured } from "@/components/Featured";
import { Works } from "@/components/Works";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Featured />
        <Works />
        <About />
        <Contact />
      </main>
    </>
  );
}
