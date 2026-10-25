"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

const slides = [
  {
    src: "/images/commodities-hero-1.jpg",
    alt: "Akipo Heritage Global commodities warehouse and loading yard",
  },
  {
    src: "/images/commodities-hero-2.jpg",
    alt: "Akipo Heritage Global warehouse under a wide Nigerian sky",
  },
  {
    src: "/images/commodities-hero-3.jpg",
    alt: "Loading bay and trucks at the Akipo Heritage Global warehouse",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.4 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

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
            src={slides[index].src}
            alt={slides[index].alt}
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
      <motion.div
        className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20 md:pb-28"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="text-sm md:text-base uppercase tracking-[0.25em] text-premium-white/80 mb-5"
        >
          Akipo Heritage Global Ltd.
        </motion.p>

        <motion.h1
          variants={item}
          className="font-heading text-5xl md:text-7xl leading-tight text-premium-white max-w-4xl"
        >
          Cultivating Africa&rsquo;s Finest Commodities with Heritage.
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg md:text-xl max-w-2xl text-premium-white/85 mt-6"
        >
          From the farm gate to global markets, we source, store and export
          premium Nigerian agricultural commodities with integrity, quality
          and care, backed by a group built to last across generations.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row sm:items-center gap-4 pt-8"
        >
          <a
            href="#businesses"
            className="bg-premium-white text-heritage-brown rounded-full px-7 py-3 text-sm font-medium hover:bg-heritage-cream transition-colors"
          >
            Explore Our Businesses →
          </a>
          <a
            href="#about"
            className="text-premium-white text-sm font-medium underline underline-offset-4 sm:ml-2"
          >
            Discover Akipo Heritage ↓
          </a>
        </motion.div>

        {/* Slide indicators */}
        <motion.div variants={item} className="flex gap-2 mt-10">
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
        </motion.div>
      </motion.div>
    </section>
  );
}