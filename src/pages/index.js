import { useState, useEffect, useRef, useCallback } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { NAV_ITEMS, PROFILE } from "@/data/site";

export default function Home() {
  const [active, setActive] = useState("home");
  const isClicking = useRef(false);

  const handleNavigate = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    isClicking.current = true;
    setActive(id);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => {
      isClicking.current = false;
    }, 700);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClicking.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>{`${PROFILE.name} — ${PROFILE.role}`}</title>
        <meta
          name="description"
          content={`Portofolio pribadi ${PROFILE.name}, ${PROFILE.role}.`}
        />
      </Head>

      <Navbar active={active} onNavigate={handleNavigate} />
      <main>
        <Hero onNavigate={handleNavigate} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer onNavigate={handleNavigate} />
    </>
  );
}
