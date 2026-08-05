"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { HeroWatch } from "@/data/hero-watches";
import { formatPrice } from "@/lib/format";

export function HeroCopy({ watch }: { watch: HeroWatch }) {
  return (
    <div key={watch.id} className="animate-fade-up text-center lg:text-left">
      <p className="mb-3 font-ui text-[11px] uppercase tracking-[0.35em] text-gold">
        {watch.tagline}
      </p>
      <Link href={`/shop/${watch.slug}`} className="inline-block">
        <h2 className="whitespace-nowrap font-serif text-3xl font-medium leading-tight text-white transition-colors duration-300 hover:text-gold-light md:text-4xl">
          {watch.name}
        </h2>
      </Link>
      <p className="mx-auto mt-3 max-w-[260px] font-ui text-[13px] leading-relaxed text-white/60 lg:mx-0">
        {watch.description}
      </p>
      <p className="mt-4 font-serif text-xl text-white/70 md:text-2xl">
        {formatPrice(watch.price)}
      </p>
      <Link
        href={`/shop/${watch.slug}`}
        className="group mt-8 inline-flex items-center gap-3 rounded-sm bg-gold px-8 py-4 font-ui text-[11px] uppercase tracking-[0.3em] text-night transition-all duration-500 hover:bg-gold-light hover:tracking-[0.38em] hover:shadow-[0_10px_40px_rgba(201,162,94,0.35)]"
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
