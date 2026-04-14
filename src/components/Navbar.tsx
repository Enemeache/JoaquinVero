"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const WHATSAPP_URL = "https://wa.me/5491133910239?text=Hola%20Joaqu%C3%ADn!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tus%20servicios.";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Planes", href: "#planes" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md shadow-lg shadow-black/50" : "bg-black/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-3 group">
            <img
              src="/logo-jv-transparent.png"
              alt="JV Logo"
              className="w-10 h-10 object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <span className="font-bebas text-xl tracking-widest hidden sm:block">
              <span className="text-white">JOACO</span>
              <span className="text-[#C6FF00]">.</span>
              <span className="text-white">VERÓN</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#C6FF00] text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C6FF00] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-[#C6FF00] hover:bg-[#A8E000] text-black font-bold text-sm px-4 py-2 transition-all duration-200 hover:scale-105"
            >
              Empezar Ahora
            </a>

            {/* Hamburger Button */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden animate-slide-down border-t border-white/10 bg-black/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-[#C6FF00] text-base font-medium py-2 border-b border-white/5 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center bg-[#C6FF00] hover:bg-[#A8E000] text-black font-bold text-sm px-4 py-3 transition-colors duration-200"
            >
              Empezar Ahora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
