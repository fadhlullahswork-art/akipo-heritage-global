"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

type Slide = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  accent?: string;
  text: string;
  tags?: string[];
  badge?: string;
  cta: { label: string; href: string };
};

const slides: Slide[] = [
  {
    src: "/images/commodities-hero-1.jpg",
    alt: "Akipo Heritage Global commodities warehouse and loading yard",
    eyebrow: "Welcome to",
    title: "Akipo Heritage Global.",
    accent: "Where we make things happen.",
    text: "We deal in premium Nigerian commodities and we have just launched our Travels & Tours agency. Here is what we do.",
    tags: ["Cocoa", "Cashew", "Palm Kernel", "Travels & Tours · New"],
    cta: { label: "Explore Our Businesses →", href: "#businesses" },
  },
  {
    src: "/images/commodities-hero-2.jpg",
    alt: "Akipo Heritage Global warehouse under a wide Nigerian sky",
    eyebrow: "Commodities",
    title: "Cultivating Africa’s Finest Commodities with",
    accent: "Heritage.",
    text: "We source, store and supply cocoa, cashew and palm kernel with integrity and care, from the farm gate to the buyer.",
    cta: { label: "Explore Commodities →", href: "/businesses/commodities" },
  },
  {
    src: "/images/commodities-hero-3.jpg",
    alt: "Loading bay and trucks at the Akipo Heritage Global warehouse",
    eyebrow: "A little about us",
    title: "Rooted in Iwo.",
    accent: "Growing across Nigeria.",
    text: "Our journey began in Iwo, Osun State, in 1992. Today we are a growing group built on commodities, with a new Travels & Tours agency.",
    cta: { label: "Learn About Us →", href: "/about" },
  },
  {
    src: "/images/travel-hero-1.jpg",
    alt: "Akipo Heritage Global office building with company signage",
    eyebrow: "Travels & Tours · Just launched",
    title: "Your sacred journey,",
    accent: "guided with care.",
    text: "We are a certified travel and tours agency for Hajj and Umrah, helping pilgrims travel with confidence, comfort and peace of mind.",
    cta: { label: "Explore Travel & Tours →", href: "/businesses/travel-tourism" },
  },
  {
    src: "/images/travel-hero-2.jpg",
    alt: "Akipo Heritage Global travel and tours office",
    eyebrow: "What’s next",
    title: "The world is",
    accent: "getting closer.",
    text: "After Hajj and Umrah, we are expanding to more destinations with international travel packages.",
    badge: "International travel · Coming soon",
    cta: { label: "Explore Travel & Tours →", href: "/businesses/travel-tourism" },
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.4 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 8000);
    return () => clearTimeout(timer);
  }, [index]);

  const slide = slides[index];

  return (
    <section className="relative h-[calc(100svh-4.1rem)] min-h-[560px] w-full overflow-hidden bg-heritage-brown">
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
            scale: { duration: 10, ease: "linear" },
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

      {/* Dark gradient for readable text */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(30,20,10,0.9) 0%, rgba(30,20,10,0.5) 50%, rgba(30,20,10,0.25) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center md:items-start md:text-left md:justify-end py-10 md:pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={container}
            className="flex flex-col items-center md:items-start"
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <motion.p
              variants={item}
              className="text-xs md:text-base uppercase tracking-[0.2em] text-champagne mb-4 md:mb-5"
            >
              {slide.eyebrow}
            </motion.p>

            <motion.h1
              variants={item}
              className="font-heading text-4xl md:text-6xl lg:text-7xl leading-tight text-premium-white max-w-4xl"
            >
              {slide.title}
              {slide.accent && (
                <>
                  {" "}
                  <span className="text-champagne italic">{slide.accent}</span>
                </>
              )}
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg md:text-xl max-w-2xl text-premium-white/85 mt-6"
            >
              {slide.text}
            </motion.p>

            {slide.tags && (
              <motion.div variants={item} className="flex flex-wrap justify-center md:justify-start gap-2 mt-6">
                {slide.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-premium-white/40 px-4 py-1.5 text-xs uppercase tracking-widest text-premium-white/90"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            )}

            {slide.badge && (
              <motion.span
                variants={item}
                className="inline-block mt-6 rounded-full border border-premium-white/40 px-4 py-1.5 text-xs uppercase tracking-widest text-premium-white/90"
              >
                {slide.badge}
              </motion.span>
            )}

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row items-center gap-4 pt-8"
            >
              {slide.cta.href.startsWith("#") ? (
                <a
                  href={slide.cta.href}
                  className="bg-premium-white text-heritage-brown rounded-full px-7 py-3 text-sm font-medium hover:bg-heritage-cream transition-colors text-center"
                >
                  {slide.cta.label}
                </a>
              ) : (
                <Link
                  href={slide.cta.href}
                  className="bg-premium-white text-heritage-brown rounded-full px-7 py-3 text-sm font-medium hover:bg-heritage-cream transition-colors text-center"
                >
                  {slide.cta.label}
                </Link>
              )}
              {index !== 0 && (
                <a
                  href="#businesses"
                  className="text-premium-white text-sm font-medium underline underline-offset-4 sm:ml-2"
                >
                  See All Our Businesses ↓
                </a>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="flex gap-2 mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === index
                  ? "w-10 bg-champagne"
                  : "w-5 bg-premium-white/40 hover:bg-premium-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}