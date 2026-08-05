import { cn } from "@/lib/format";
import { StarIcon } from "@/components/ui/icons";

interface RatingProps {
  rating: number;
  reviews?: number;
  className?: string;
}

export function Rating({ rating, reviews, className }: RatingProps) {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(rating));

  return (
    <span
      className={cn("inline-flex items-center gap-2", className)}
      aria-label={`Rated ${rating} out of 5`}
    >
      <span className="flex items-center gap-0.5 text-primary">
        {stars.map((filled, i) => (
          <StarIcon key={i} filled={filled} className="h-3.5 w-3.5" />
        ))}
      </span>
      {reviews !== undefined ? (
        <span className="text-xs text-body">
          {rating} ({reviews})
        </span>
      ) : null}
    </span>
  );
}
