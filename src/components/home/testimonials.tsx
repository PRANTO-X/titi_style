"use client";

import { useRef, useState } from "react";
import { TESTIMONIALS } from "@/data/testimonials";
import { SectionHeader } from "@/components/ui/section-header";
import { Rating } from "@/components/ui/rating";
import { cn } from "@/lib/format";

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    if (!card) return;
    const step = card.offsetWidth + 24;
    const index = Math.min(
      TESTIMONIALS.length - 1,
      Math.max(0, Math.round(el.scrollLeft / step))
    );
    setActive(index);
  };

  const goTo = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelectorAll<HTMLElement>("[data-card]")[index];
    card?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <section className="bg-paper py-[75px] md:py-[100px]">
      <div className="container-site">
        <SectionHeader
          subtop="Customers Choose Us"
          title="Trusted by Watch Lovers Worldwide"
        />

        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0"
        >
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.id}
              data-card
              className="flex w-[82vw] shrink-0 snap-start flex-col justify-between gap-6 border border-line bg-white p-7 transition-colors hover:border-secondary sm:w-[46vw] lg:w-auto"
            >
              <blockquote className="text-body">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center justify-between">
                <div>
                  <p className="font-heading font-semibold text-ink">
                    {testimonial.author}
                  </p>
                  <p className="text-sm capitalize text-body/70">
                    {testimonial.location}
                  </p>
                </div>
                <Rating rating={testimonial.rating} />
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2 lg:hidden">
          {TESTIMONIALS.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => goTo(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                index === active ? "w-6 bg-accent" : "w-1.5 bg-ink/15"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
