import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PropertiesPage() {
  return (
    <>
      <Navbar />

      <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
        <Image
          src="/images/properties.jpg"
          alt="Modern African architecture, representing Akipo Heritage Properties"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-heritage-brown/65" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center gap-6">
          <span className="text-xs tracking-widest uppercase text-champagne font-medium">
            Properties
          </span>
          <h1 className="font-heading text-4xl md:text-6xl leading-tight text-premium-white max-w-2xl">
            Akipo Heritage Properties
          </h1>
          <p className="text-premium-white/85 text-lg max-w-xl">
            Creating opportunities through property development, real estate
            investment, and carefully considered spaces designed for
            long-term value.
          </p>
          <span className="mt-4 inline-block text-sm font-medium bg-premium-white/15 text-premium-white rounded-full px-5 py-2">
            Coming Soon
          </span>
        </div>
      </section>

      <Footer />
    </>
  );
}