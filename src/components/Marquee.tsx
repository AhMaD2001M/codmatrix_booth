export default function Marquee() {
  const items = Array.from({ length: 8 }, () => "Transform Your Future in 3 Months •");
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden bg-black flex items-center">
      {/* Seamless Scrolling Track - items follow one after another */}
      <div className="w-[200%] flex whitespace-nowrap animate-marqueeLoop">
        {items.concat(items).map((text, idx) => (
          <span key={idx} className="block text-white font-black leading-none tracking-tighter px-6 sm:px-10 text-[clamp(3rem,15vw,12rem)]">
            {text}
          </span>
        ))}
      </div>

      {/* Edge fade masks */}
      <div className="absolute top-0 left-0 w-1/4 sm:w-1/5 h-full bg-gradient-to-r from-black via-black/70 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/4 sm:w-1/5 h-full bg-gradient-to-l from-black via-black/70 to-transparent pointer-events-none" />
    </section>
  );
}
