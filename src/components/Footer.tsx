import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-heritage-brown text-premium-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <Image
              src="/images/akipo-logo-full.png"
              alt="Akipo Heritage Global Limited"
              width={200}
              height={200}
              className="w-40 h-auto"
            />
            <p className="text-premium-white/70 mt-4 max-w-sm">
             Building with heritage.
Creating what comes next.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-champagne mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-3 text-premium-white/80 text-sm">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/#approach">Our Approach</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-champagne mb-4">
              Businesses
            </h4>
            <ul className="flex flex-col gap-3 text-premium-white/80 text-sm">
              <li><Link href="/businesses/travel-tourism">Travel & Tourism</Link></li>
              <li><Link href="/businesses/commodities">Commodities</Link></li>
              <li><Link href="/businesses/properties">Properties</Link></li>
              <li><Link href="/businesses/innovation">Innovation & Technology</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-champagne mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-3 text-premium-white/80 text-sm">
              <li>
                <a href="tel:+2349067525786" className="hover:text-premium-white">
                  +234 906 752 5786
                </a>
              </li>
              <li>
                <a href="tel:+2349072914136" className="hover:text-premium-white">
                  +234 907 291 4136
                </a>
              </li>
              <li>
                <a href="mailto:akipoheritageglobal@gmail.com" className="hover:text-premium-white break-all">
                  akipoheritageglobal@gmail.com
                </a>
              </li>
              <li className="text-premium-white/70">
                No. 1, Opposite Islamic Cultural Center, Agbowo Area, Obamoro Road, Iwo, Osun State
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-premium-white/15 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-premium-white/60">
          <span>&copy; {year} Akipo Heritage Global Ltd. All rights reserved.</span>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-premium-white">Privacy Policy</span>
            <span className="cursor-pointer hover:text-premium-white">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}