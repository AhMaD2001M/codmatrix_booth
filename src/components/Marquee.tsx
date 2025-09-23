export default function Marquee() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex items-center">
      {/* Scrolling Text Container */}
      <div className="relative flex whitespace-nowrap">
        {/* First Copy */}
        <div className="animate-marquee text-white text-[12vw] font-extrabold tracking-widest px-10">
        Transform Your Future in 3 Months • Transform Your Future in 3 Months •
        </div>

        {/* Second Copy (offset for seamless loop) */}
        <div className="animate-marquee2 text-white text-[12vw] font-extrabold tracking-widest px-10 absolute top-0">
        Transform Your Future in 3 Months • Transform Your Future in 3 Months •
        </div>
      </div>

      {/* Blur/Fade mask on left side */}
      <div className="absolute top-0 left-0 w-1/5 h-full bg-gradient-to-r from-black via-black/70 to-transparent backdrop-blur-sm pointer-events-none" />

      {/* Blur/Fade mask on right side */}
      <div className="absolute top-0 right-0 w-1/5 h-full bg-gradient-to-l from-black via-black/70 to-transparent backdrop-blur-sm pointer-events-none" />
    </section>
  );
}
