import { SERVICES } from "@/data/site";
import { ServiceIconGlyph } from "@/components/ui/service-icon";

export function Services() {
  return (
    <section className="bg-white py-[75px] md:py-[100px]">
      <div className="container-site">
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="flex items-center gap-5 bg-paper p-[30px] transition-shadow hover:shadow-md"
            >
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-dashed border-line text-ink transition-colors hover:border-ink">
                <ServiceIconGlyph name={service.icon} className="h-8 w-8" />
              </span>
              <div>
                <h3 className="mb-1 font-heading text-xl font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-body">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
