"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { HERO_WATCHES } from "@/data/hero-watches";
import { cn } from "@/lib/format";
import { HeroBackground } from "@/components/home/hero-background";
import { WatchStage } from "@/components/home/watch-stage";
import { HeroCopy } from "@/components/home/hero-copy";
import { HeroBranding } from "@/components/home/hero-branding";

export function HeroShowcase() {
  const [active, setActive] = useState(0);

  const goPrev = () =>
    setActive((a) => (a - 1 + HERO_WATCHES.length) % HERO_WATCHES.length);
  const goNext = () => setActive((a) => (a + 1) % HERO_WATCHES.length);

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-night text-white">
      <HeroBackground />

      <div className="container-site relative z-10 flex flex-1 flex-col pt-24 sm:pt-28 lg:pt-16">
        <div className="grid flex-1 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)_minmax(0,1fr)] lg:items-center">
          <div className="relative z-20 pb-10 pt-8 sm:pt-12 lg:pb-0 lg:pt-0">
            <div className="lg:-translate-y-12 lg:pl-32">
              <HeroCopy watch={HERO_WATCHES[active]} />
            </div>
          </div>

          <div className="relative h-[42vh] min-h-[320px] lg:absolute lg:inset-0 lg:h-auto lg:min-h-0">
            <WatchStage
              watches={HERO_WATCHES}
              activeIndex={active}
              onNavigate={setActive}
            />

            <button
              type="button"
              aria-label="Previous watch"
              onClick={goPrev}
              className="absolute left-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-night/40 text-white/70 backdrop-blur-sm transition-all duration-500 hover:border-gold hover:text-gold sm:left-5 sm:h-12 sm:w-12"
            >
              <ArrowLeft className="h-5 w-5" strokeWidth={1.6} />
            </button>

            <button
              type="button"
              aria-label="Next watch"
              onClick={goNext}
              className="absolute right-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-night/40 text-white/70 backdrop-blur-sm transition-all duration-500 hover:border-gold hover:text-gold sm:right-5 sm:h-12 sm:w-12"
            >
              <ArrowRight className="h-5 w-5" strokeWidth={1.6} />
            </button>
          </div>

          <div className="hidden flex-col items-center gap-4 lg:flex">
            <span className="font-serif text-sm text-white/60">
              0{active + 1}
            </span>
            <span className="h-px w-10 bg-white/20" />
            <span className="font-serif text-sm text-white/30">
              0{HERO_WATCHES.length}
            </span>
          </div>
        </div>

        <div className="flex justify-center gap-2 pb-8 lg:hidden">
          {HERO_WATCHES.map((watch, index) => (
            <button
              key={watch.id}
              type="button"
              aria-label={`Show ${watch.name}`}
              onClick={() => setActive(index)}
              className={cn(
                "h-1 rounded-full transition-all duration-500",
                index === active ? "w-8 bg-gold" : "w-3 bg-white/25"
              )}
            />
          ))}
        </div>

        <div className="pb-10 lg:mt-24 lg:pb-12">
          <HeroBranding />
        </div>
      </div>
    </section>
  );
}

