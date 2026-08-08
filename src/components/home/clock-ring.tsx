"use client";

interface ClockRingProps {
  size?: number;
}

export function ClockRing({ size = 620 }: ClockRingProps) {
  const ticks = Array.from({ length: 60 });
  const radius = size / 2 - 18;

  return (
    <div
      aria-hidden
      style={{ width: size, height: size }}
      className="pointer-events-none relative"
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="h-full w-full"
        fill="none"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(219,67,79,0.18)"
          strokeWidth="1"
        />
        {ticks.map((_, index) => {
          const angle = (index / 60) * 360;
          const major = index % 5 === 0;
          const outer = radius - 2;
          const inner = major ? outer - 16 : outer - 9;
          const rad = (angle * Math.PI) / 180;
          return (
            <line
              key={index}
              x1={size / 2 + outer * Math.cos(rad)}
              y1={size / 2 + outer * Math.sin(rad)}
              x2={size / 2 + inner * Math.cos(rad)}
              y2={size / 2 + inner * Math.sin(rad)}
              stroke={
                major
                  ? "rgba(219,67,79,0.5)"
                  : "rgba(219,67,79,0.22)"
              }
              strokeWidth={major ? 1.5 : 1}
            />
          );
        })}
      </svg>
    </div>
  );
}
