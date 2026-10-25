import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Intro() {
  return (
    <section className="bg-premium-white text-heritage-brown">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 md:gap-20">
        <Reveal direction="left">
          <span className="text-xs tracking-widest uppercase text-champagne font-medium">
            Who We Are
          </span>
          <h2 className="font-heading text-3xl md:text-5xl leading-tight mt-4">
            One group. Multiple possibilities. A shared vision.
          </h2>
        </Reveal>

        <div className="flex flex-col gap-6 justify-center">
          <Reveal delay={0.1}>
            <p className="text-heritage-brown/80 text-lg">
              Akipo Heritage Global Ltd. is a diversified Nigerian business
              group developing businesses designed to create lasting value
              across industries and communities.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-heritage-brown/80 text-lg">
              We bring different sectors together under one vision — while
              allowing each business to build its own expertise and identity.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="self-start">
            <Link
              href="/about"
              className="inline-block text-sm font-medium border border-heritage-brown/30 rounded-full px-6 py-3 hover:bg-heritage-brown hover:text-premium-white transition-colors"
            >
              Learn About Akipo Heritage →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}