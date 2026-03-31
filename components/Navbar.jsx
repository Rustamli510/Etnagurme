"use client";

import Link from "next/link";


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
      </nav>
    </header>
  );
}

