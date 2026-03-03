"use client";

import { useEffect } from "react";

/* ───────────────────────── data ───────────────────────── */

const galleryItems = [
  {
    title: "Autumn in Kyoto",
    category: "Editorial",
    gradient: "linear-gradient(135deg, #3b2a1a 0%, #8b6e4e 40%, #c9a96e 100%)",
    aspect: "aspect-[3/4]", // portrait
  },
  {
    title: "Coastal Dawn",
    category: "Lifestyle",
    gradient: "linear-gradient(160deg, #1a2a3b 0%, #4a6a7a 50%, #8aafbf 100%)",
    aspect: "aspect-[4/3]", // landscape
  },
  {
    title: "Studio Light",
    category: "Brand",
    gradient: "linear-gradient(145deg, #2a2a2a 0%, #5a5a5a 40%, #9a9a8a 100%)",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Golden Hour",
    category: "Editorial",
    gradient: "linear-gradient(130deg, #4a3520 0%, #b8860b 50%, #daa520 100%)",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Urban Silence",
    category: "Lifestyle",
    gradient: "linear-gradient(155deg, #1a1a2e 0%, #3a3a5e 45%, #6a6a8e 100%)",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Botanica",
    category: "Brand",
    gradient: "linear-gradient(140deg, #1a2e1a 0%, #3e5e3a 50%, #6e8e5a 100%)",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Mono Portrait",
    category: "Editorial",
    gradient: "linear-gradient(135deg, #0a0a0a 0%, #3a3a3a 50%, #6a6a6a 100%)",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Warm Terrace",
    category: "Events",
    gradient: "linear-gradient(150deg, #5a3a2a 0%, #a07050 45%, #d4a87a 100%)",
    aspect: "aspect-[4/3]",
  },
];

const services = [
  {
    name: "Editorial",
    description:
      "Crafted visual narratives for magazines, lookbooks, and publications with a refined aesthetic sensibility.",
  },
  {
    name: "Lifestyle",
    description:
      "Authentic, candid moments that tell the real story of people, places, and the everyday extraordinary.",
  },
  {
    name: "Brand",
    description:
      "Strategic imagery that elevates brands, defining visual identity through considered art direction.",
  },
  {
    name: "Events",
    description:
      "Elegant documentation of gatherings, from intimate ceremonies to large-scale cultural moments.",
  },
];

/* ───────────────────────── page ───────────────────────── */

export default function Home() {
  /* Scroll-reveal observer */
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="overflow-x-hidden">
      {/* ─── Navigation ─── */}
      <nav className="nav-animate fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 lg:px-20 bg-background/80 backdrop-blur-md">
        <a href="#" className="font-serif text-lg tracking-widest uppercase">
          Noma
        </a>
        <div className="hidden md:flex items-center gap-10 text-sm tracking-wide text-warm-gray">
          <a href="#gallery" className="link-hover transition-colors hover:text-foreground">
            Work
          </a>
          <a href="#about" className="link-hover transition-colors hover:text-foreground">
            About
          </a>
          <a href="#services" className="link-hover transition-colors hover:text-foreground">
            Services
          </a>
          <a href="#contact" className="link-hover transition-colors hover:text-foreground">
            Contact
          </a>
        </div>
        <a
          href="#contact"
          className="text-sm tracking-wide text-warm-gray transition-colors hover:text-foreground link-hover"
        >
          Get in touch
        </a>
      </nav>

      {/* ─── Hero ─── */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="animate-fade-in-up">
          <p className="text-sm tracking-[0.3em] uppercase text-warm-gray mb-6">
            Photography & Creative Direction
          </p>
        </div>
        <h1 className="animate-fade-in-up-delay-1 font-serif text-6xl md:text-8xl lg:text-9xl font-normal tracking-tight leading-[0.9]">
          Noma Studio
        </h1>
        <p className="animate-fade-in-up-delay-2 mt-8 text-lg md:text-xl text-warm-gray font-light tracking-wide max-w-md">
          Capturing moments that matter
        </p>

        {/* Scroll indicator */}
        <div className="animate-fade-in absolute bottom-12 flex flex-col items-center gap-3">
          <span className="text-xs tracking-[0.25em] uppercase text-warm-gray/60">
            Scroll
          </span>
          <div className="animate-line-grow w-px bg-accent/40" />
        </div>
      </section>

      {/* ─── Gallery ─── */}
      <section id="gallery" className="px-6 md:px-12 lg:px-20 py-24 md:py-36">
        <div className="reveal mb-16 md:mb-24">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Selected Work
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal">
            Portfolio
          </h2>
        </div>

        {/* Masonry-style asymmetric grid */}
        <div className="columns-1 md:columns-2 lg:columns-2 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {galleryItems.map((item, i) => (
            <div
              key={item.title}
              className={`reveal reveal-delay-${(i % 4) + 1} gallery-item rounded-sm break-inside-avoid ${item.aspect}`}
            >
              <div
                className="gallery-image absolute inset-0 w-full h-full"
                style={{ background: item.gradient }}
              />
              <div className="gallery-overlay">
                <div>
                  <p className="text-white/70 text-xs tracking-[0.2em] uppercase mb-1">
                    {item.category}
                  </p>
                  <p className="text-white text-lg font-serif">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── About ─── */}
      <section
        id="about"
        className="px-6 md:px-12 lg:px-20 py-24 md:py-36 bg-cream/50"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="reveal order-2 lg:order-1">
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
              About Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-normal mb-8 leading-tight">
              Stories told through
              <br />
              light & lens
            </h2>
            <div className="accent-line mb-8" />
            <p className="text-warm-gray leading-relaxed text-lg mb-6 max-w-lg">
              We are a photography studio based in Tokyo, specializing in
              editorial, lifestyle, and brand photography.
            </p>
            <p className="text-warm-gray leading-relaxed mb-8 max-w-lg">
              Every project begins with intention. We believe in the quiet power
              of a single frame to communicate emotion, narrative, and beauty.
              Our approach is deliberate, minimal, and deeply collaborative
              &mdash; working closely with each client to craft imagery that
              resonates far beyond the surface.
            </p>
            <p className="text-sm tracking-[0.2em] uppercase text-accent">
              Est. 2018 &mdash; Tokyo, Japan
            </p>
          </div>

          {/* Photo placeholder */}
          <div className="reveal reveal-delay-2 order-1 lg:order-2">
            <div
              className="aspect-[4/5] rounded-sm w-full"
              style={{
                background:
                  "linear-gradient(160deg, #2a2018 0%, #6e5a42 40%, #b89a6a 70%, #dcc8a0 100%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section id="services" className="px-6 md:px-12 lg:px-20 py-24 md:py-36">
        <div className="max-w-7xl mx-auto">
          <div className="reveal mb-16 md:mb-24">
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
              What We Do
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal">
              Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream-dark">
            {services.map((service, i) => (
              <div
                key={service.name}
                className={`reveal reveal-delay-${i + 1} bg-background p-8 md:p-12 lg:p-16 group cursor-default transition-colors hover:bg-cream/40`}
              >
                <span className="block text-xs text-accent tracking-[0.2em] uppercase mb-4">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl mb-4 transition-colors group-hover:text-accent">
                  {service.name}
                </h3>
                <p className="text-warm-gray leading-relaxed max-w-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section
        id="contact"
        className="px-6 md:px-12 lg:px-20 py-24 md:py-36 bg-cream/50"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left text */}
          <div className="reveal">
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
              Contact
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-8 leading-tight">
              Let&apos;s create
              <br />
              together
            </h2>
            <div className="accent-line mb-8" />
            <p className="text-warm-gray leading-relaxed mb-8 max-w-md">
              Have a project in mind? We&apos;d love to hear about it. Reach out
              and let&apos;s start a conversation about bringing your vision to
              life.
            </p>
            <a
              href="mailto:hello@nomastudio.jp"
              className="inline-block text-lg link-hover text-foreground tracking-wide"
            >
              hello@nomastudio.jp
            </a>
          </div>

          {/* Form */}
          <div className="reveal reveal-delay-2">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs tracking-[0.2em] uppercase text-warm-gray mb-3"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-cream-dark pb-3 text-foreground placeholder:text-warm-gray/40 transition-colors focus:border-accent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs tracking-[0.2em] uppercase text-warm-gray mb-3"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-transparent border-b border-cream-dark pb-3 text-foreground placeholder:text-warm-gray/40 transition-colors focus:border-accent"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs tracking-[0.2em] uppercase text-warm-gray mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full bg-transparent border-b border-cream-dark pb-3 text-foreground placeholder:text-warm-gray/40 transition-colors focus:border-accent resize-none"
                />
              </div>
              <button
                type="submit"
                className="mt-4 self-start px-10 py-4 bg-foreground text-background text-sm tracking-[0.2em] uppercase rounded-sm transition-all hover:bg-accent hover:text-white"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="px-6 md:px-12 lg:px-20 py-16 border-t border-cream-dark">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-serif text-xl tracking-widest uppercase mb-1">
              Noma Studio
            </p>
            <p className="text-xs text-warm-gray tracking-wide">
              &copy; {new Date().getFullYear()} Noma Studio. All rights reserved.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-warm-gray tracking-wide link-hover transition-colors hover:text-foreground"
            >
              Instagram
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-warm-gray tracking-wide link-hover transition-colors hover:text-foreground"
            >
              Behance
            </a>
            <a
              href="https://vimeo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-warm-gray tracking-wide link-hover transition-colors hover:text-foreground"
            >
              Vimeo
            </a>
          </div>

          {/* Credit */}
          <p className="text-xs text-warm-gray/50 tracking-wide">
            Designed by{" "}
            <span className="text-warm-gray">Dark Matter</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
