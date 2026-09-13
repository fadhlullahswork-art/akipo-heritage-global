"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Our Businesses", href: "/#businesses" },
    { label: "Our Approach", href: "/#approach" },
    { label: "Innovation", href: "/businesses/innovation" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-premium-white/90 backdrop-blur border-b border-heritage-brown/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-4">
          <Image src="/images/akipo-icon.png" alt="Akipo Heritage" width={36} height={21} className="h-8 w-auto" />
          <span className="h-6 w-px bg-heritage-brown/20" />
          <span className="font-heading text-xl tracking-wide text-heritage-brown">
            AKIPO HERITAGE
          </span>
        </Link>

          <ul className="hidden md:flex items-center gap-8 text-sm text-heritage-brown">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <Link
            href="/#businesses"
            className="hidden md:inline-block text-sm font-medium text-heritage-brown border border-heritage-brown/30 rounded-full px-5 py-2 hover:bg-heritage-brown hover:text-premium-white transition-colors"
          >
            Explore Akipo →
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-heritage-brown"
            aria-label="Open menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </nav>
      </header>

      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 z-40 bg-heritage-brown/40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`md:hidden fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm bg-heritage-brown text-premium-white flex flex-col transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-premium-white/10">
          <span className="font-heading text-lg tracking-wide">AKIPO HERITAGE</span>
          <button onClick={() => setOpen(false)} aria-label="Close menu">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          </button>
        </div>

        <ul className="flex-1 flex flex-col gap-2 px-6 py-8">
          {links.map((link) => (
            <li key={link.label} className="border-b border-premium-white/10">
              
               <a href={link.href}
                onClick={() => setOpen(false)}
                className="block py-4 font-heading text-xl"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}