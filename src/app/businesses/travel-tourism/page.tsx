import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TravelTourismPage() {
  return (
    <>
      <Navbar />

      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src="/images/travel.jpg"
          alt="Masjid al-Haram in Makkah, representing Akipo Heritage's Hajj and Umrah travel services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-heritage-brown/55" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-16 md:pb-20">
          <span className="text-xs tracking-widest uppercase text-champagne font-medium">
            Travel & Tourism
          </span>
          <h1 className="font-heading text-4xl md:text-6xl leading-tight text-premium-white max-w-2xl mt-4">
            Akipo Heritage Int&apos;l Travels & Tours Ltd.
          </h1>
        </div>
      </section>

      <section className="bg-premium-white text-heritage-brown">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
          <p className="text-xl md:text-2xl font-heading leading-snug">
            Connecting people with meaningful journeys through carefully
            curated travel experiences — beginning with sacred journeys to
            the Holy Land.
          </p>
        </div>
      </section>

      <section className="bg-heritage-cream text-heritage-brown">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-px bg-champagne/40 w-24 mb-12" />
        </div>
        <div className="max-w-7xl mx-auto px-6 pb-20 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4">
            <span className="text-xs tracking-widest uppercase text-champagne font-medium">
              Available Now
            </span>
            <h2 className="font-heading text-3xl md:text-4xl">
              Hajj & Umrah Services
            </h2>
            <p className="text-heritage-brown/80 text-lg">
              Our dedicated Hajj and Umrah travel service handles every
              detail of your sacred journey with care, offering trusted
              packages and support from start to finish.
                       </p>
            
            <a  href="https://akipo-heritage-site.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block w-fit bg-champagne text-heritage-brown rounded-full px-6 py-3 text-sm font-medium hover:bg-champagne/80 transition-colors"
            >
              Visit Hajj & Umrah Site →
            </a>
          </div>

          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border-2 border-champagne">
            <Image
              src="/images/travel.jpg"
              alt="Masjid al-Haram in Makkah"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-heritage-brown text-premium-white">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28 flex flex-col gap-6">
          <span className="text-xs tracking-widest uppercase text-champagne font-medium">
            What&apos;s Next
          </span>
          <h2 className="font-heading text-3xl md:text-5xl leading-tight">
            International Travels — Coming Soon.
          </h2>
          <p className="text-premium-white/80 text-lg max-w-2xl">
            We&apos;re expanding beyond Hajj and Umrah to offer broader
            international travel packages and destination experiences.
            Stay tuned as we grow this side of the business.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}