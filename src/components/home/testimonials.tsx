import { TESTIMONIALS } from "@/data/testimonials";
import { SectionHeader } from "@/components/ui/section-header";
import { Rating } from "@/components/ui/rating";

export function Testimonials() {
  return (
    <section className="bg-paper py-[75px] md:py-[100px]">
      <div className="container-site">
        <SectionHeader
          subtop="Customers Choose Us"
          title="Trusted by Watch Lovers Worldwide"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="flex flex-col justify-between gap-6 border border-line bg-white p-7 transition-colors hover:border-secondary"
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
      </div>
    </section>
  );
}
