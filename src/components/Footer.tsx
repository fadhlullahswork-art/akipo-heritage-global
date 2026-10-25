import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-heritage-brown text-premium-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <Reveal>
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <Image
                src="/images/akipo-logo-full.png"
                alt="Akipo Heritage Global Limited"
                width={200}
                height={200}
                className="w-40 h-auto"
              />
              <div className="w-12 h-px bg-champagne mt-6" />
              <p className="font-heading text-2xl md:text-3xl leading-snug text-premium-white mt-5 max-w-sm">
                Cultivating Africa&rsquo;s Finest Commodities with{" "}
                <span className="text-champagne italic">Heritage.</span>
              </p>
              <p className="text-premium-white/60 text-sm mt-4 max-w-sm">
                Building with heritage. Creating what comes next.
              </p>
            </div>

            <div>
              <h4 className="text-xs tracking-widest uppercase text-champagne mb-4">
                Company
              </h4>
              <ul className="flex flex-col gap-3 text-premium-white/80 text-sm">
                <li><Link href="/about" className="hover:text-champagne transition-colors">About</Link></li>
                <li><Link href="/#approach" className="hover:text-champagne transition-colors">Our Approach</Link></li>
                <li><Link href="/#contact" className="hover:text-champagne transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs tracking-widest uppercase text-champagne mb-4">
                Businesses
              </h4>
              <ul className="flex flex-col gap-3 text-premium-white/80 text-sm">
                <li><Link href="/businesses/travel-tourism" className="hover:text-champagne transition-colors">Travel &amp; Tourism</Link></li>
                <li><Link href="/businesses/commodities" className="hover:text-champagne transition-colors">Commodities</Link></li>

                
              </ul>
            </div>

            <div>
              <h4 className="text-xs tracking-widest uppercase text-champagne mb-4">
                Contact
              </h4>
              <ul className="flex flex-col gap-3 text-premium-white/80 text-sm">
                <li>
                  <a href="tel:+2349067525786" className="hover:text-champagne transition-colors">
                    +234 906 752 5786
                  </a>
                </li>
                <li>
                  <a href="tel:+2349072914136" className="hover:text-champagne transition-colors">
                    +234 907 291 4136
                  </a>
                </li>
                <li>
                  <a href="mailto:akipoheritageglobal@gmail.com" className="hover:text-champagne transition-colors break-all">
                    akipoheritageglobal@gmail.com
                  </a>
                </li>
                <li className="text-premium-white/70">
                  No. 1, Opposite Islamic Cultural Center, Agbowo Area, Obamoro Road, Iwo, Osun State
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="border-t border-premium-white/15 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-premium-white/60">
          <span>&copy; {year} Akipo Heritage Global Ltd. All rights reserved.</span>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-champagne transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-champagne transition-colors">Terms &amp; Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}