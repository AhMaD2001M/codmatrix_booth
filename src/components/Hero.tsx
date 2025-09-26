import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [revealProgress, setRevealProgress] = useState(0);
  const [isHeroLocked, setIsHeroLocked] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const lastTouchYRef = useRef<number | null>(null);

  useEffect(() => {
    const SENSITIVITY = 0.0015;

    const onWheel = (e: WheelEvent) => {
      // Check if user is in hero section
      const heroTop = heroRef.current?.getBoundingClientRect().top ?? 0;
      const heroBottom = heroRef.current?.getBoundingClientRect().bottom ?? 0;
      const inHero = heroTop <= window.innerHeight && heroBottom >= 0;

      if (!inHero) return; // only animate when inside hero
      e.preventDefault();

      // Scroll forward or reverse
      const next = Math.min(1, Math.max(0, revealProgress + e.deltaY * SENSITIVITY));
      setRevealProgress(next);

      // Lock scroll inside hero until animation is complete
      if (window.scrollY !== 0) window.scrollTo({ top: 0, left: 0 });

      // Unlock only when fully revealed
      if (next >= 1) {
        setIsHeroLocked(false);
      } else if (next <= 0) {
        setIsHeroLocked(true);
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      lastTouchYRef.current = e.touches[0]?.clientY ?? null;
    };

    const onTouchMove = (e: TouchEvent) => {
      const heroTop = heroRef.current?.getBoundingClientRect().top ?? 0;
      const heroBottom = heroRef.current?.getBoundingClientRect().bottom ?? 0;
      const inHero = heroTop <= window.innerHeight && heroBottom >= 0;

      if (!inHero) return;
      e.preventDefault();

      const currentY = e.touches[0]?.clientY ?? null;
      if (currentY != null && lastTouchYRef.current != null) {
        const delta = lastTouchYRef.current - currentY;
        const next = Math.min(1, Math.max(0, revealProgress + delta * SENSITIVITY));
        setRevealProgress(next);

        if (window.scrollY !== 0) window.scrollTo({ top: 0, left: 0 });

        if (next >= 1) {
          setIsHeroLocked(false);
        } else if (next <= 0) {
          setIsHeroLocked(true);
        }
      }
      lastTouchYRef.current = currentY;
    };

    const onTouchEnd = () => {
      lastTouchYRef.current = null;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel as EventListener);
      window.removeEventListener("touchstart", onTouchStart as EventListener);
      window.removeEventListener("touchmove", onTouchMove as EventListener);
      window.removeEventListener("touchend", onTouchEnd as EventListener);
    };
  }, [revealProgress]);

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/pictures/your-bg.avif')`,
          filter: "brightness(0.75) contrast(1.05)",
        }}
      />

      {/* Top/Bottom subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

      {/* Title + Subtitle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center select-none px-10">
          <h1 className="font-europa-Grotesk-No-2 text-[12vw] md:text-[10vw] lg:text-[8vw] font-black text-white tracking-wider leading-none">
            TOP 1% ENGINEERS
          </h1>
          <p className="mt-4 text-sm md:text-base tracking-[0.3em] font-europa text-white/80">
            WHEN LEARNING • BECOMES • A SUCCESS
          </p>
        </div>
      </div>

      {/* White bordered button */}
      <div className="absolute bottom-10 w-full flex justify-center">
        <button className="px-8 py-3 border-2 border-white text-white uppercase tracking-widest font-semibold rounded-lg transition-all duration-500 ease-in-out hover:bg-white hover:text-black">
          Join The Wait List
        </button>
      </div>

      {/* Black Stripes Reveal */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }, (_, i) => {
          const segmentWidth = 100 / 6;
          const leftPercent = i * segmentWidth;
          const maxWeight = 1.0;
          const minWeight = 0.6;
          const weight = maxWeight - (maxWeight - minWeight) * (i / 5);
          const local = Math.min(1, Math.max(0, revealProgress / weight));
          const widthPercent = local * segmentWidth;
          return (
            <div
              key={i}
              className="absolute top-0 bottom-0 bg-black"
              style={{
                left: `${leftPercent}%`,
                width: `${widthPercent}%`,
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
