"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-30 border-b border-slate-800/40 bg-slate-950/80 backdrop-blur-xl transition-all ${
        isScrolled ? "shadow-lg shadow-slate-950/60" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-50"
          onClick={closeMenu}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-linear-to-tr from-sky-500 to-emerald-400 text-xs font-bold text-slate-950 shadow-lg shadow-sky-500/40">
            MB
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm sm:text-base">Mansoor Real Estate</span>
            <span className="text-[10px] font-normal text-slate-300 sm:text-[11px]">
              Global Luxury & Investments
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          <Link
            href="/"
            className="transition hover:text-sky-300"
          >
            Home
          </Link>
          <Link
            href="/properties"
            className="transition hover:text-sky-300"
          >
            Properties
          </Link>
          <Link
            href="#services"
            className="transition hover:text-sky-300"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="transition hover:text-sky-300"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="transition hover:text-sky-300"
          >
            Contact
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-slate-50 shadow-sm transition hover:bg-white/10"
          >
            Book a Call
          </button>
          <Link
            href="/properties"
            className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:-translate-y-0.5 hover:bg-sky-400"
          >
            View Listings
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-slate-100 shadow-sm transition hover:bg-white/10 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Open main menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 rounded-full bg-slate-100 transition-transform ${
                isOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-4 rounded-full bg-slate-100 transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-slate-100 transition-transform ${
                isOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="border-t border-slate-800/40 bg-slate-950/95 px-4 pb-4 pt-2 shadow-lg shadow-slate-950/70 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-medium text-slate-100">
            <Link
              href="/"
              className="rounded-lg px-2 py-1.5 transition hover:bg-white/5"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/properties"
              className="rounded-lg px-2 py-1.5 transition hover:bg-white/5"
              onClick={closeMenu}
            >
              Properties
            </Link>
            <Link
              href="#services"
              className="rounded-lg px-2 py-1.5 transition hover:bg-white/5"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="rounded-lg px-2 py-1.5 transition hover:bg:white/5"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="rounded-lg px-2 py-1.5 transition hover:bg-white/5"
              onClick={closeMenu}
            >
              Contact
            </Link>

            <div className="mt-2 flex gap-2">
              <button
                type="button"
                className="flex-1 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-slate-50 shadow-sm transition hover:bg-white/10"
              >
                Book a Call
              </button>
              <Link
                href="/properties"
                className="flex-1 inline-flex items-center justify-center rounded-xl bg-sky-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
                onClick={closeMenu}
              >
                View Listings
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


