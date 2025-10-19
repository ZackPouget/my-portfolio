"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "react", title: "React" },
  { href: "svelte", title: "Svelte" },
  { href: "ts", title: "TypeScript" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white text-gray-600 shadow-sm relative">
      {/* Logo / Name */}
      <Link href="/" className="text-xl font-bold">
        Zack Pouget
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-blue-600 transition-colors"
          >
            {link.title}
          </Link>
        ))}
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden flex flex-col justify-between w-6 h-4 focus:outline-none"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <span className="h-0.5 bg-gray-700" />
        <span className="h-0.5 bg-gray-700" />
        <span className="h-0.5 bg-gray-700" />
      </button>

      {/* Mobile Sidebar + Overlay */}
      {/* Background overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-10 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Sidebar panel */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-20 flex flex-col p-6 space-y-6 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="self-end text-gray-500 hover:text-gray-700"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-lg text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}
