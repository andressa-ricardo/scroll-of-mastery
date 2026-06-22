"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// small inline menu SVG to avoid external dependency

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width="20" height="20" {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-white/6 bg-transparent">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <Link href="#" aria-label="Scroll of Mastery home" className="flex items-center gap-3">
          <Image src="/images/logo.jpeg" alt="Scroll of Mastery logo" width={40} height={40} />
          <span className="font-semibold text-lg tracking-wide">Scroll of Mastery</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">Services</a>
          <a href="#process" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">Process</a>
          <a href="#about" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">About</a>
          <a href="#contact" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="#contact" className="rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/4 focus:outline-none focus:ring-2 focus:ring-blue-500">Book a Consultation</a>
        </div>

        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
        >
          <MenuIcon />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/6">
          <div className="px-6 py-4 flex flex-col gap-3">
            <a href="#services" onClick={() => setOpen(false)} className="py-2">Services</a>
            <a href="#process" onClick={() => setOpen(false)} className="py-2">Process</a>
            <a href="#about" onClick={() => setOpen(false)} className="py-2">About</a>
            <a href="#contact" onClick={() => setOpen(false)} className="py-2">Contact</a>
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-center">Book a Consultation</a>
          </div>
        </div>
      )}
    </header>
  );
}
