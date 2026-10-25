"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

type Category = "commodities" | "travel";

const slides: { src: string; alt: string; category: Category }[] = [
  {
    src: "/images/commodities-hero-1.jpg",
    alt: "Akipo Heritage Global commodities warehouse and loading yard",
    category: "commodities",
  },
  {
    src: "/images/commodities-hero-2.jpg",
    alt: "Akipo Heritage Global warehouse under a wide Nigerian sky",
    category: "commodities",
  },
  {
    src: "/images/commodities-hero-3.jpg",
    alt: "Loading bay and trucks at the Akipo Heritage Global warehouse",
    category: "commodities",
  },
  {
    src: "/images/travel-hero-1.jpg",
    alt: "Akipo Heritage Global office building with company signage",
    category: "travel",
  },
  {
    src: "/images/travel-hero-2.jpg",
    alt: "Akipo Heritage Global travel and tours office",
    category: "travel",
  },
];

const content = {
  commodities: {
    eyebrow: "Akipo Heritage Global Ltd. · Commodities",
    title: "Cultivating Africa’s Finest Commodities with Heritage.",
    text: "From the farm gate to global markets, we source, store and export premium Nigerian agricultural commodities with integrity, quality and care, backed by a group built to last across generations.",
    cta: { label: "Explore Commodities →", href: "/businesses/commodities" },
    badge: null,
  },
  travel: {
    eyebrow: "Akipo Heritage Global Ltd. · Travel & Tours",
    title: "Your sacred journey, guided with care.",
    text: "We are a certified travel and tours agency for Hajj and Umrah, helping pilgrims travel with confidence, comfort and peace of mind.",
    cta: { label: "Explore Travel & Tours →", href: "/businesses/travel-tourism" },
    badge: "International travel · Coming soon",
  },
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.45 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto-advance. Restarts whenever the slide changes (including manual clicks).
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 7000);
    return () => clearTimeout(timer);
  }, [index]);

  const slide = slides[index];
  const text = content[slide.category];

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-heritage-brown">
      {/* Slideshow with slow zoom */}
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.08 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.6, ease: "easeInOut" },
            scale: { duration: 9, ease: "linear" },
          }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark gradient so the text is always easy to read */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(30,20,10,0.88) 0%, rgba(30,20,10,0.45) 45%, rgba(30,20,10,0.25) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20 md:pb-28">
        {/* Text only re-animates when the category changes */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.category}
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <motion.p
              variants={item}
              className="text-sm md:text-base uppercase tracking-[0.25em] text-premium-white/80 mb-5"
            >
              {text.eyebrow}
            </motion.p>

            <motion.h1
              variants={item}
              className="font-heading text-5xl md:text-7xl leading-tight text-premium-white max-w-4xl"
            >
              {text.title}
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg md:text-xl max-w-2xl text-premium-white/85 mt-6"
            >
              {text.text}
            </motion.p>

            {text.badge && (
              <motion.span
                variants={item}
                className="inline-block mt-6 rounded-full border border-premium-white/40 px-4 py-1.5 text-xs uppercase tracking-widest text-premium-white/90"
              >
                {text.badge}
              </motion.span>
            )}

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row sm:items-center gap-4 pt-8"
            >
              <Link
                href={text.cta.href}
                className="bg-premium-white text-heritage-brown rounded-full px-7 py-3 text-sm font-medium hover:bg-heritage-cream transition-colors text-center"
              >
                {text.cta.label}
              </Link>
              <a
                href="#businesses"
                className="text-premium-white text-sm font-medium underline underline-offset-4 sm:ml-2"
              >
                See All Our Businesses ↓
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="flex gap-2 mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show photo ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === index
                  ? "w-10 bg-premium-white"
                  : "w-5 bg-premium-white/40 hover:bg-premium-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}