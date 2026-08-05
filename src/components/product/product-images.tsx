"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/format";

interface ProductImagesProps {
  images: string[];
  name: string;
}

export function ProductImages({ images, name }: ProductImagesProps) {
  const [active, setActive] = useState(0);
  const source = images.length > 0 ? images : ["/images/collection-1.jpg"];

  return (
    <div className="flex flex-col-reverse gap-4 lg:flex-row lg:gap-6">
      <div className="flex gap-3 lg:flex-col">
        {source.map((image, index) => (
          <button
            key={image + index}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`View image ${index + 1}`}
            className={cn(
              "w-16 shrink-0 overflow-hidden rounded-sm border-2 bg-paper transition-colors md:w-20",
              index === active
                ? "border-primary"
                : "border-transparent opacity-70 hover:opacity-100"
            )}
          >
            <Image
              src={image}
              alt=""
              width={160}
              height={213}
              className="aspect-[3/4] w-full object-cover"
            />
          </button>
        ))}
      </div>

      <div className="relative flex-1 overflow-hidden rounded-sm bg-paper">
        <Image
          src={source[active]}
          alt={name}
          width={800}
          height={1066}
          priority
          className="aspect-[3/4] w-full object-cover"
        />
      </div>
    </div>
  );
}
