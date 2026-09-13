import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const principles = [
  { number: "01", title: "Purpose", text: "We build businesses around meaningful opportunities and real-world needs." },
  { number: "02", title: "Excellence", text: "We pursue high standards in how we serve customers, develop products and operate our businesses." },
  { number: "03", title: "Long-Term Thinking", text: "We focus on creating businesses and assets capable of generating lasting value." },
  { number: "04", title: "Innovation", text: "We continuously explore better ways to serve people, improve operations and create new opportunities." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <section className="relative h-[65vh] min-h-[450px] w-full overflow-hidden">
              <Image
          src="/images/about-hero.jpg"
          alt="A Nigerian street scene, representing Akipo Heritage's roots and journey"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-heritage-brown/60" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-16 md:pb-20">
          <span className="text-xs tracking-widest uppercase text-champagne font-medium">
            About
          </span>
          <h1 className="font-heading text-4xl md:text-6xl leading-tight text-premium-white max-w-2xl mt-4">
            One group. Multiple possibilities. A shared vision.
          </h1>
        </div>
      </section>

      <section className="bg-premium-white text-heritage-brown">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28 flex flex-col gap-6">
          <p className="text-xl md:text-2xl font-heading leading-snug">
            Akipo Heritage Global Ltd. is a diversified Nigerian business
            group developing businesses designed to create lasting value
            across industries and communities.
          </p>
          <p className="text-heritage-brown/80 text-lg">
            We bring different sectors together under one vision — while
            allowing each business to build its own expertise and identity.
            Today, that means ventures across travel, commodities,
            properties, and technology, each operated with the same
            standard of care and the same long-term outlook.
          </p>
          <p className="text-heritage-brown/80 text-lg">
            We believe the strongest businesses are built with a clear sense
            of where they come from and an equally clear vision of where
            they are going — our heritage gives us roots, and our ambition
            gives us direction.
          </p>
        </div>
      </section>

      <section className="bg-premium-white text-heritage-brown">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
          <span className="text-xs tracking-widest uppercase text-champagne font-medium">
            Our History
          </span>
          <h2 className="font-heading text-3xl md:text-4xl mt-4 mb-16 max-w-xl">
            A journey of steady growth.
          </h2>

          <div className="relative border-l-2 border-champagne/30 pl-10 flex flex-col gap-16">
            {[
              { year: "1992", title: "Founded in Iwo", text: "Akipo Heritage began its journey in Iwo, laying the foundation for what would grow into a diversified business group." },
                     { year: "2015", title: "Expansion Across Nigeria", text: "Operations expanded to other states across Nigeria, broadening our reach and strengthening our commodities foundation." },
              { year: "2025", title: "Akipo Heritage Travels & Tours", text: "We launched our travel division, beginning with Hajj and Umrah services for pilgrims." },
              { year: "2026", title: "Innovation & Technology", text: "We began building UniApp and Lansmart, our first ventures into technology-driven businesses." },
              { year: "Next", title: "Direct Exportation & Properties", text: "We're working toward direct commodity exportation and preparing to launch Akipo Heritage Properties." },
            ].map((item) => (
              <div key={item.title} className="relative">
                <span className="absolute -left-[3.1rem] top-1 w-4 h-4 rounded-full bg-champagne border-4 border-premium-white" />
                <span className="font-heading text-2xl text-champagne">{item.year}</span>
                <h3 className="font-heading text-xl mt-1 mb-2">{item.title}</h3>
                <p className="text-heritage-brown/75">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-heritage-cream text-heritage-brown">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <h2 className="font-heading text-3xl md:text-4xl mb-16 max-w-xl">
            Built for today. Designed for tomorrow.
          </h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
            {principles.map((p) => (
              <div key={p.number} className="flex gap-6 border-t border-heritage-brown/10 pt-6">
                <span className="font-heading text-3xl text-champagne">{p.number}</span>
                <div>
                  <h3 className="font-heading text-xl mb-2">{p.title}</h3>
                  <p className="text-heritage-brown/80">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-heritage-brown text-premium-white">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28 text-center flex flex-col items-center gap-6">
          <h2 className="font-heading text-3xl md:text-5xl leading-tight">
            From Nigeria, with a global outlook.
          </h2>
          <p className="text-premium-white/80 text-lg max-w-2xl">
            We&apos;re proudly building from Nigeria while looking beyond
            borders — developing businesses that can participate
            meaningfully in regional and international markets.
          </p>
          <Link
            href="/#businesses"
            className="mt-2 inline-block w-fit bg-premium-white text-heritage-brown rounded-full px-6 py-3 text-sm font-medium hover:bg-heritage-cream transition-colors"
          >
            Explore Our Businesses →
          </Link>
        </div>
      </section>

      <section className="bg-premium-white text-heritage-brown">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <span className="text-xs tracking-widest uppercase text-champagne font-medium">
            Our Team
          </span>
          <h2 className="font-heading text-3xl md:text-4xl mt-4 mb-16 max-w-xl">
            The people behind Akipo Heritage.
          </h2>

          {/* Founder & CEO — own row */}
          <div className="flex flex-col items-center text-center gap-4 mb-20">
            <div className="w-44 h-44 rounded-full bg-heritage-cream border border-heritage-brown/10 flex items-center justify-center">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-heritage-brown/30">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading text-2xl">Founder & CEO</h3>
              <p className="text-heritage-brown/70 text-base mt-1">Mr. Abdul Azeez Taiwo Adelani</p>
            </div>
          </div>

          {/* Leadership team */}
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { role: "Admin", name: "Ms. Abdul Azeez Bushroh Itunu" },
              { role: "Admin", name: "Mr. Abdul Azeez Fadhlullah Alabi" },
              { role: "Overall Manager", name: "Mr. Abdul Afeez" },
            ].map((person, i) => (
              <div key={`${person.role}-${i}`} className="flex flex-col items-center text-center gap-4">
                <div className="w-28 h-28 rounded-full bg-heritage-cream border border-heritage-brown/10 flex items-center justify-center">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-heritage-brown/30">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-lg">{person.role}</h3>
                  <p className="text-heritage-brown/70 text-sm mt-1">{person.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}