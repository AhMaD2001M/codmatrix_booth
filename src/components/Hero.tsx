import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [revealProgress, setRevealProgress] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const lastTouchYRef = useRef<number | null>(null);

  useEffect(() => {
    const SENSITIVITY = 0.006; // Increased sensitivity for quicker progress
    const PASS_THROUGH_THRESHOLD = 0.98; // allow native scroll near ends

    const onWheel = (e: WheelEvent) => {
      const heroTop = heroRef.current?.getBoundingClientRect().top ?? 0;
      const heroBottom = heroRef.current?.getBoundingClientRect().bottom ?? 0;
      const inHero = heroTop <= window.innerHeight && heroBottom >= 0;

      if (!inHero) return;

      // Allow native scroll when near the end in the scroll direction
      if ((revealProgress >= PASS_THROUGH_THRESHOLD && e.deltaY > 0) ||
          (revealProgress <= 1 - PASS_THROUGH_THRESHOLD && e.deltaY < 0)) {
        return;
      }

      // Otherwise, handle the animation
      e.preventDefault();

      const next = Math.min(1, Math.max(0, revealProgress + e.deltaY * SENSITIVITY));
      setRevealProgress(next);
    };

    const onTouchStart = (e: TouchEvent) => {
      lastTouchYRef.current = e.touches[0]?.clientY ?? null;
    };

    const onTouchMove = (e: TouchEvent) => {
      const heroTop = heroRef.current?.getBoundingClientRect().top ?? 0;
      const heroBottom = heroRef.current?.getBoundingClientRect().bottom ?? 0;
      const inHero = heroTop <= window.innerHeight && heroBottom >= 0;

      if (!inHero) return;

      const currentY = e.touches[0]?.clientY ?? null;
      if (currentY != null && lastTouchYRef.current != null) {
        const delta = lastTouchYRef.current - currentY;
        
        // Allow native scroll when near the end in the scroll direction
        if ((revealProgress >= PASS_THROUGH_THRESHOLD && delta > 0) ||
            (revealProgress <= 1 - PASS_THROUGH_THRESHOLD && delta < 0)) {
          return;
        }

        // Otherwise, handle the animation
        e.preventDefault();

        const next = Math.min(1, Math.max(0, revealProgress + delta * SENSITIVITY));
        setRevealProgress(next);
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
    <section ref={heroRef} className="relative h-screen">
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
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-10">
        <div className="text-center select-none w-full max-w-none">
          <h1
            className="
              font-black text-white text-center leading-none tracking-tighter 
              text-[clamp(2.25rem,10vw,8rem)] whitespace-nowrap
            "
          >
            TOP 1% ENGINEER
          </h1>
          <p
            className="
              mt-3 sm:mt-4 
              text-xs sm:text-sm md:text-base 
              tracking-[0.2em] sm:tracking-[0.3em] 
              font-europa 
              text-white/80
            "
          >
            WHEN LEARNING • BECOMES • A SUCCESS
          </p>
        </div>
      </div>

      {/* White bordered button */}
      <div className="absolute bottom-6 sm:bottom-10 w-full flex justify-center px-4">
        <button
          className="
            px-6 sm:px-8 py-2 sm:py-3 
            border-2 border-white text-white 
            uppercase tracking-widest font-semibold 
            rounded-lg 
            transition-all duration-500 ease-in-out 
            hover:bg-white hover:text-black 
            text-xs sm:text-sm md:text-base
          "
        >
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
              className="absolute top-0 bottom-0 bg-black transition-all duration-300 ease-out"
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
