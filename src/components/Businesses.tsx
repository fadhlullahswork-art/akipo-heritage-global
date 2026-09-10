import Image from "next/image";
import Link from "next/link";

const businesses = [
  {
    number: "01",
    category: "Commodities",
    name: "Akipo Heritage Commodities",
    description:
      "Building trusted connections across agricultural and commodity markets by facilitating the sourcing, movement and development of high-value commodities: Cocoa, Cashew, and Palm Kernel.",
    note: null,
    cta: "Explore Commodities →",
    href: "/businesses/commodities",
    image: "/images/commodities.jpg",
    alt: "Cocoa pods, representing Akipo Heritage's agricultural commodities business",
  },
  {
    number: "02",
    category: "Travel & Tourism",
    name: "Akipo Heritage Int'l Travels & Tours Ltd.",
    description:
      "Connecting people with meaningful journeys through carefully curated travel experiences, Hajj and Umrah services, and international travel solutions.",
    note: "International Travels — Coming Soon",
    cta: "Explore Travel & Tourism →",
    href: "/businesses/travel-tourism",
    image: "/images/travel.jpg",
    alt: "Masjid al-Haram in Makkah, representing Akipo Heritage's Hajj and Umrah travel services",
  },
  {
    number: "03",
    category: "Properties",
    name: "Akipo Heritage Properties",
    description:
      "Creating opportunities through property development, real estate investment, and carefully considered spaces designed for long-term value.",
    note: "Future Developments — Coming Soon",
    cta: "Explore Properties →",
    href: "/businesses/properties",
    image: "/images/properties.jpg",
    alt: "Modern African architecture, representing Akipo Heritage's property development business",
  },
  {
    number: "04",
    category: "Innovation & Technology",
    name: "Akipo Heritage Innovation & Technology",
    description:
      "Building digital products, technology solutions and innovative ventures that solve real problems and create new possibilities for businesses and communities.",
    note: null,
    cta: "Explore Innovation →",
    href: "/businesses/innovation",
    image: "/images/innovation.jpg",
    alt: "Dark, technology-focused imagery representing Akipo Heritage's innovation division",
  },
];

export default function Businesses() {
  return (
    <section className="bg-premium-white text-heritage-brown">
      <div className="max-w-7xl mx-auto px-6 pt-24 md:pt-32 pb-16 md:pb-20">
        <h2 className="font-heading text-4xl md:text-5xl leading-tight max-w-2xl">
          Our Businesses
        </h2>
        <p className="text-heritage-brown/80 text-lg mt-4 max-w-xl">
          Diverse industries. One heritage. A shared ambition to build
          businesses that matter.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-24 md:gap-32 pb-24 md:pb-32">
        {businesses.map((b, i) => (
          <div
            key={b.number}
            className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
              i % 2 === 1 ? "md:[direction:rtl]" : ""
            }`}
          >
            <div
              className={`relative w-full aspect-[4/5] md:aspect-[4/5] rounded-3xl overflow-hidden ${
                i % 2 === 1 ? "md:[direction:ltr]" : ""
              }`}
            >
              <Image src={b.image} alt={b.alt} fill className="object-cover" />
            </div>

            <div
              className={`flex flex-col gap-4 ${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}
            >
              <span className="text-xs tracking-widest uppercase text-champagne font-medium">
                {b.number} — {b.category}
              </span>
              <h3 className="font-heading text-3xl md:text-4xl">{b.name}</h3>
              <p className="text-heritage-brown/80 text-lg">{b.description}</p>
              {b.note && (
                <span className="inline-block w-fit text-xs font-medium bg-cocoa-brown/10 text-cocoa-brown rounded-full px-3 py-1">
                  {b.note}
                </span>
              )}
              <Link
                href={b.href}
                target={b.href.startsWith("http") ? "_blank" : undefined}
                rel={b.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-heritage-brown underline underline-offset-4 mt-2 w-fit"
              >
                {b.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}