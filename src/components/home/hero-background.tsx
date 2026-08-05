const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";

const GLOWS = [
  {
    className: "left-[8%] top-[-10%] h-[40rem] w-[40rem] animate-drift-a",
    tone: "gold",
  },
  {
    className: "right-[4%] top-[15%] h-[34rem] w-[34rem] animate-drift-b",
    tone: "umber",
  },
  {
    className: "bottom-[-15%] left-[30%] h-[38rem] w-[38rem] animate-drift-c",
    tone: "gold",
  },
];

export function HeroBackground() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-night" />
      <div className="absolute inset-0 bg-gradient-to-b from-umber/60 via-night to-black" />

      {GLOWS.map((glow, index) => (
        <div
          key={index}
          className={`absolute rounded-full ${glow.className}`}
          style={{
            background:
              glow.tone === "umber"
                ? "radial-gradient(circle, rgba(26,18,11,0.9) 0%, transparent 70%)"
                : "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)",
          }}
        />
      ))}

      <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: GRAIN }} />
    </div>
  );
}
