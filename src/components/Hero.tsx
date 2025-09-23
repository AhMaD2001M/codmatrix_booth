import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const [revealProgress, setRevealProgress] = useState(0); // 0..1 drives hero while locked
  const [isHeroLocked, setIsHeroLocked] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const lastTouchYRef = useRef<number | null>(null);

  // Phase 1: While locked, convert wheel/touch deltas to revealProgress and keep page at top
  useEffect(() => {
    if (!isHeroLocked) return;
    const SENSITIVITY = 0.0015; // Adjusted for smoother scrolling

    const onWheel = (e: WheelEvent) => {
      if (!isHeroLocked) return;
      e.preventDefault();
      const next = Math.min(1, Math.max(0, revealProgress + e.deltaY * SENSITIVITY));
      setRevealProgress(next);
      if (window.scrollY !== 0) window.scrollTo({ top: 0, left: 0 });
      if (next >= 1) setIsHeroLocked(false);
    };

    const onTouchStart = (e: TouchEvent) => {
      lastTouchYRef.current = e.touches[0]?.clientY ?? null;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isHeroLocked) return;
      e.preventDefault();
      const currentY = e.touches[0]?.clientY ?? null;
      if (currentY != null && lastTouchYRef.current != null) {
        const delta = lastTouchYRef.current - currentY; // swipe up => positive
        const next = Math.min(1, Math.max(0, revealProgress + delta * SENSITIVITY));
        setRevealProgress(next);
        if (window.scrollY !== 0) window.scrollTo({ top: 0, left: 0 });
        if (next >= 1) setIsHeroLocked(false);
      }
      lastTouchYRef.current = currentY;
    };
    const onTouchEnd = () => {
      lastTouchYRef.current = null;
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: false });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd, { passive: false });

    return () => {
      window.removeEventListener('wheel', onWheel as EventListener);
      window.removeEventListener('touchstart', onTouchStart as EventListener);
      window.removeEventListener('touchmove', onTouchMove as EventListener);
      window.removeEventListener('touchend', onTouchEnd as EventListener);
    };
  }, [isHeroLocked, revealProgress]);

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://drive.google.com/file/d/1VR254LBYm0WDsdlp-IvOqbGB-iw3Jtp0/view?usp=sharing')`,
          filter: 'brightness(0.75) contrast(1.05)'
        }}
      />

      {/* Top/Bottom subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

      {/* Title and subtitle always visible initially */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center select-none text-[12vw] font-extrabold tracking-widest px-10">
          <h1 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-black text-white tracking-wider leading-none">
          TOP 1% ENGINEERS
          </h1>
          <p className="mt-4 text-sm md:text-base tracking-[0.3em] font-light text-white/80">
            WHEN LEARNING • BECOMES • A SUCCESS
          </p>
        </div>
      </div>

      {/* 6 vertical black stripes: width grows with scroll; faster growth from left -> right */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }, (_, i) => {
          const segmentWidth = 100 / 6;
          const leftPercent = i * segmentWidth;
          // Slower on the left, faster on the right; all reach 100% at revealProgress = 1
          const maxWeight = 1.0;
          const minWeight = 0.6;
          const weight = maxWeight - ((maxWeight - minWeight) * (i / 5)); // 1.0 .. 0.6
          const local = Math.min(1, Math.max(0, revealProgress / weight));
          const widthPercent = local * segmentWidth;
          return (
            <div
              key={i}
              className="absolute top-0 bottom-0 bg-black"
              style={{
                left: `${leftPercent}%`,
                width: `${widthPercent}%`,
                transition: 'width 120ms linear',
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
