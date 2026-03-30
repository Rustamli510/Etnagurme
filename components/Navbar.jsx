"use client";

import Link from "next/link";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="bg-neutral-900 text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <Link
          href="#hero"
          className="text-xl font-semibold tracking-[0.25em] uppercase"
          aria-label="ETNAGURME"
        >
          ETNAGURME
        </Link>
        <ul className="flex items-center gap-6 text-sm md:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-amber-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

