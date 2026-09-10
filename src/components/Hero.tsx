import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Lagos waterfront skyline, representing Akipo Heritage Global's roots in Nigeria"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-heritage-brown/50" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20 md:pb-28">
        <h1 className="font-heading text-5xl md:text-7xl leading-tight text-premium-white max-w-3xl">
          Building with heritage.
          <br />
          Creating what comes next.
        </h1>

        <p className="text-lg md:text-xl max-w-xl text-premium-white/85 mt-6">
          Akipo Heritage Global Ltd. is a diversified business group building
          enduring ventures across travel, commodities, properties, and
          technology — with a vision that reaches beyond today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          
        <a    href="#businesses"
            className="bg-premium-white text-heritage-brown rounded-full px-6 py-3 text-sm font-medium hover:bg-heritage-cream transition-colors"
          >
            Explore Our Businesses →
          </a>
          
         <a   href="#about"
            className="text-premium-white text-sm font-medium underline underline-offset-4"
          >
            Discover Akipo Heritage ↓
          </a>
        </div>
      </div>
    </section>
  );
}