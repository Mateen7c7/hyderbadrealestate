"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Defer state update to avoid synchronous setState in effect
    // This prevents cascading renders while still allowing animation on mount
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-950 to-slate-900 text-white">
      {/* Glow background accents */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:py-20 lg:px-8">
        {/* Left - Text content */}
        <div
          className={`max-w-xl space-y-6 transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-sky-200 ring-1 ring-white/15 backdrop-blur-sm">
            Premium Real Estate · Trusted by investors worldwide
          </p>

          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl md:leading-tight lg:text-6xl">
            Discover{" "}
            <span className="bg-linear-to-r from-sky-400 via-emerald-300 to-sky-400 bg-clip-text text-transparent">
              extraordinary
            </span>{" "}
            properties across the globe.
          </h1>

          <p className="max-w-lg text-sm text-slate-200 sm:text-base">
            From coastal villas to modern city lofts, we curate unique
            investment opportunities that match your lifestyle and long-term
            goals.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/properties"
              className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:-translate-y-0.5 hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              Browse Properties
            </Link>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-50 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              Talk to an Expert
            </button>
          </div>

          {/* Stat badges */}
          <div className="mt-6 grid grid-cols-3 gap-3 text-xs sm:text-sm">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
              <p className="font-semibold">300+</p>
              <p className="text-slate-300">Exclusive listings</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
              <p className="font-semibold">$1B+</p>
              <p className="text-slate-300">Total value closed</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
              <p className="font-semibold">25+</p>
              <p className="text-slate-300">Countries served</p>
            </div>
          </div>
        </div>

        {/* Right - Animated card mockup */}
        <div
          className={`relative flex flex-1 items-center justify-center lg:justify-end ${
            mounted ? "opacity-100" : "opacity-0"
          } transition-opacity duration-700 delay-150`}
        >
          <div className="relative h-64 w-full max-w-md sm:h-72 md:h-80">
            <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-sky-500/30 via-emerald-400/10 to-sky-500/40 blur-xl" />

            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-2xl backdrop-blur">
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src="/images/1.jpeg"
                  alt="Featured luxury property"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-slate-100 backdrop-blur-sm">
                  Featured Listing
                </div>
                <div className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow">
                  $2.5M
                </div>
              </div>

              <div className="space-y-3 p-4 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold sm:text-base">
                      Oceanfront Villa · Malibu
                    </p>
                    <p className="text-xs text-slate-300 sm:text-sm">
                      5 beds · 4 baths · 4,500 sq ft
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/30">
                    High ROI
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-300 sm:text-sm">
                  <span>Cap rate: 7.2%</span>
                  <span>Occupancy: 93%</span>
                </div>

                <div className="mt-1 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-900 bg-slate-800 text-[11px] font-medium">
                      MB
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-900 bg-slate-700 text-[11px] font-medium">
                      CL
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-300">
                    New opportunities added daily
                  </span>
                </div>
              </div>
            </div>

            {/* Floating accent cards */}
            <div className="absolute -left-4 bottom-6 hidden w-28 rounded-2xl border border-sky-500/40 bg-slate-900/80 p-3 text-xs shadow-lg shadow-sky-500/30 backdrop-blur-sm sm:block animate-[float_6s_ease-in-out_infinite]">
              <p className="font-semibold text-sky-100">Instant insights</p>
              <p className="text-[10px] text-slate-300">
                Market data & forecasts, updated in real time.
              </p>
            </div>
            <div className="absolute -right-4 top-8 hidden w-28 rounded-2xl border border-emerald-500/40 bg-slate-900/80 p-3 text-xs shadow-lg shadow-emerald-500/30 backdrop-blur-sm sm:block animate-[float_7s_ease-in-out_infinite]">
              <p className="font-semibold text-emerald-100">
                Verified listings
              </p>
              <p className="text-[10px] text-slate-300">
                Personally vetted by our local experts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;