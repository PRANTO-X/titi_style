"use client";

import Image from "next/image";
import type { HeroWatch } from "@/data/hero-watches";
import { ClockRing } from "@/components/home/clock-ring";

interface WatchStageProps {
  watches: HeroWatch[];
  activeIndex: number;
  onNavigate: (index: number) => void;
}

export function WatchStage({
  watches,
  activeIndex,
  onNavigate,
}: WatchStageProps) {
  const active = watches[activeIndex];
  const prev = watches[(activeIndex - 1 + watches.length) % watches.length];
  const next = watches[(activeIndex + 1) % watches.length];

  const goTo = (index: number) => {
    onNavigate((index + watches.length) % watches.length);
  };

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="pointer-events-none absolute inset-0 flex -translate-y-8 items-center justify-center">
        <ClockRing size={460} />
      </div>

      <div className="absolute inset-0 flex -translate-y-8 items-center justify-center">
        <div
          aria-hidden
          className="h-[36rem] w-[36rem] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(219,67,79,0.14) 0%, rgba(42,14,18,0.35) 45%, transparent 70%)",
          }}
        />
      </div>

      <div className="absolute inset-0 z-10 flex -translate-y-8 items-center justify-center">
        <button
          key={active.id}
          type="button"
          aria-label="Show next watch"
          onClick={() => goTo(activeIndex + 1)}
          className="animate-watch-in relative z-20 block w-[62%] max-w-[300px] cursor-pointer sm:w-[52%] sm:max-w-[320px] md:w-[38%] md:max-w-[340px]"
        >
          <Image
            src={active.image}
            alt={active.name}
            width={active.width}
            height={active.height}
            sizes="(max-width: 767px) 62vw, 380px"
            priority
            unoptimized
            className="h-auto w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.65)]"
          />
        </button>
      </div>

      <button
        type="button"
        aria-label={`Show previous watch: ${prev.name}`}
        onClick={() => goTo(activeIndex - 1)}
        className="absolute -left-28 top-1/2 z-10 hidden -translate-y-1/2 md:block"
      >
        <div key={prev.id} className="animate-side-in-left mx-auto w-48 lg:w-56">
          <Image
            src={prev.image}
            alt=""
            width={prev.width}
            height={prev.height}
            sizes="224px"
            unoptimized
            className="h-auto w-full object-contain opacity-60 brightness-[0.45]"
          />
        </div>
      </button>

      <button
        type="button"
        aria-label={`Show next watch: ${next.name}`}
        onClick={() => goTo(activeIndex + 1)}
        className="absolute -right-28 top-1/2 z-10 hidden -translate-y-1/2 md:block"
      >
        <div key={next.id} className="animate-side-in-right mx-auto w-48 lg:w-56">
          <Image
            src={next.image}
            alt=""
            width={next.width}
            height={next.height}
            sizes="224px"
            unoptimized
            className="h-auto w-full object-contain opacity-60 brightness-[0.45]"
          />
        </div>
      </button>
    </div>
  );
}
