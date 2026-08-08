"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { HeroWatch } from "@/data/hero-watches";
import { formatPrice } from "@/lib/format";

export function HeroCopy({ watch }: { watch: HeroWatch }) {
  return (
    <div key={watch.id} className="animate-fade-up text-center lg:text-left">
      <p className="mb-2 font-ui text-[11px] tracking-[0.35em] text-accent md:mb-3">
        {watch.tagline}
      </p>
      <Link href={`/shop/${watch.slug}`} className="inline-block">
        <h2 className="whitespace-nowrap font-serif text-3xl font-medium leading-tight text-white transition-colors duration-300 hover:text-accent-light md:text-4xl">
          {watch.name}
        </h2>
      </Link>
      <p className="mx-auto mt-2 max-w-[260px] font-ui text-[13px] leading-relaxed text-white/60 md:mt-3 lg:mx-0">
        {watch.description}
      </p>
      <p className="mt-2.5 font-serif text-xl text-white/70 md:mt-4 md:text-2xl">
        {formatPrice(watch.price)}
      </p>
      <Link
        href={`/shop/${watch.slug}`}
        className="group mt-5 inline-flex items-center gap-3 rounded-sm bg-accent px-8 py-3.5 font-ui text-[11px] tracking-[0.3em] text-night transition-all duration-500 hover:bg-accent-light hover:tracking-[0.38em] hover:shadow-[0_10px_40px_rgba(219,67,79,0.35)] md:mt-8 md:py-4"
      >
        View Details
        <ArrowRight
          className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
          strokeWidth={1.6}
        />
      </Link>
    </div>
  );
}
