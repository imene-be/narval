"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Expériences", href: "/experiences" },
  { label: "Notre flotte", href: "/flotte" },
  { label: "Destinations", href: "/destinations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-narval-dark/95 backdrop-blur-sm py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" aria-label="Narval">
          <Image src="/logo-narval.svg" alt="Narval" width={150} height={81} className="brightness-0 invert" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-white/80 hover:text-white font-body text-[11px] tracking-[0.2em] uppercase transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a href="/contact" className="btn-primary ml-4">
            Réserver
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        } bg-narval-dark`}
      >
        <nav className="flex flex-col px-6 py-8 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 font-body text-[11px] tracking-[0.2em] uppercase border-b border-white/10 pb-4"
            >
              {link.label}
            </a>
          ))}
          <a href="/contact" className="btn-primary w-fit">
            Réserver
          </a>
        </nav>
      </div>
    </header>
  );
}
