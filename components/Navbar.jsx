"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll efekti
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll lock (menu açılınca arka scroll kapanır)
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <img
              className={`font-bold transition-colors duration-300 w-50 -ml-10  ${
                isScrolled ? "text-blue-900" : "text-white"
              }`}
              src="logo.svg"
            />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {[
                { label: "Ana sayfa", href: "#" },
                { label: "Ürünlerimiz", href: "#products" },
                { label: "Hakkımızda", href: "#about" },
                { label: "İletişim", href: "#contact" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className={`font-medium transition-colors hover:text-emerald-600 ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="fixed top-[80px] left-0 right-0 z-50 mx-6 mt-4 pb-4 space-y-4 border border-gray-200 pt-4 bg-white text-center rounded-2xl shadow-xl md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              href="#"
              className="block font-medium text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Ana sayfa
            </a>
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              href="#products"
              className="block font-medium text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Ürünlerimiz
            </a>
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              href="#about"
              className="block font-medium text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Hakkımızda
            </a>
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              href="#contact"
              className="block font-medium text-gray-700 hover:text-emerald-600 transition-colors"
            >
              İletişim
            </a>
          </nav>
        )}
      </header>
    </>
  );
}