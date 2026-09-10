import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CommoditiesPage() {
  return (
    <>
      <Navbar />

      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src="/images/commodities.jpg"
          alt="Cocoa pods, representing Akipo Heritage Commodities"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-heritage-brown/55" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-16 md:pb-20">
          <span className="text-xs tracking-widest uppercase text-champagne font-medium">
            Commodities
          </span>
          <h1 className="font-heading text-4xl md:text-6xl leading-tight text-premium-white max-w-2xl mt-4">
            Akipo Heritage Commodities
          </h1>
        </div>
      </section>

      <section className="bg-premium-white text-heritage-brown">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
          <p className="text-xl md:text-2xl font-heading leading-snug">
            Building trusted connections across agricultural and commodity
            markets — sourcing, moving, and developing high-value
            commodities with integrity at every stage.
          </p>
        </div>
      </section>

      <section className="bg-heritage-cream text-heritage-brown">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <h2 className="font-heading text-3xl md:text-4xl mb-12">
            Our Focus
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Cocoa",
                image: "/images/commodities.jpg",
                detail: "Sourced from trusted farming communities and prepared for both local and international markets.",
              },
              {
                name: "Cashew",
                image: "/images/cashew.jpg",
                detail: "Handled with care from harvest through processing, meeting the standards global buyers expect.",
              },
              {
                name: "Palm Kernel",
                image: "/images/palm-kernel.jpg",
                detail: "A key input across food, cosmetics and industrial supply chains, sourced responsibly.",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-premium-white rounded-2xl overflow-hidden border border-heritage-brown/10"
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl">{item.name}</h3>
                  <p className="text-heritage-brown/70 mt-2 text-sm">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[80vh] min-h-[550px] w-full overflow-hidden">
        <Image
          src="/images/export.jpg"
          alt="Cargo ship at port, representing Akipo Heritage's move toward direct commodity exportation"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-heritage-brown/60" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-16 md:pb-20">
          <span className="text-xs tracking-widest uppercase text-champagne font-medium">
            What&apos;s Next
          </span>
          <h2 className="font-heading text-3xl md:text-5xl leading-tight text-premium-white max-w-2xl mt-4">
            Direct exportation is our next big step.
          </h2>
          <p className="text-premium-white/85 text-lg max-w-2xl mt-4">
            We are working toward exporting our commodities directly to
            international markets — strengthening the connection between
            Nigerian producers and buyers around the world.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}