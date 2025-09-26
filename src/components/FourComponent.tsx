import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function FourComponent() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  });

  // Responsive delay based on device width
  const [delay, setDelay] = useState(0.02);

  useEffect(() => {
    const updateDelay = () => {
      if (window.innerWidth < 640) {
        setDelay(0.01); // faster animation for mobile
      } else if (window.innerWidth < 1024) {
        setDelay(0.015); // medium for tablets
      } else {
        setDelay(0.02); // default for desktop
      }
    };

    updateDelay();
    window.addEventListener("resize", updateDelay);
    return () => window.removeEventListener("resize", updateDelay);
  }, []);

  const textLines = [
    "Around the world,",
    "thousands of initiatives are",
    "quietly revolutionizing our",
    "predatory system, though—",
    "like a CodeMatrix—they often",
    "remain hidden beneath the",
    "surface.",
  ];

  const words = textLines.flatMap((line) => line.split(" "));
  const numWords = words.length;
  const segment = 1 / numWords;
  const fadeDuration = 0.4 * segment;

  const wordOpacityTransforms = words.map((_, i) => {
    const animationStart = i * segment + delay;
    const animationEnd = animationStart + fadeDuration;

    const cappedAnimationEnd = Math.min(animationEnd, 1);
    const cappedAnimationStart = Math.min(animationStart, cappedAnimationEnd);

    return useTransform(
      scrollYProgress,
      [cappedAnimationStart, cappedAnimationEnd],
      [0, 1]
    );
  });

  let wordIndex = 0;
  const linesWithWordSpans = textLines.map((line, lineIndex) => {
    const wordsInLine = line.split(" ");
    const spans = wordsInLine.map((word, wordInLineIndex) => {
      const currentWordIndex = wordIndex++;
      return (
        <motion.span
          key={`${lineIndex}-${wordInLineIndex}`}
          style={{ opacity: wordOpacityTransforms[currentWordIndex] }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      );
    });
    return (
      <div key={lineIndex} className="mb-1 sm:mb-2">
        {spans}
      </div>
    );
  });

  return (
    <section
      ref={ref}
      className="
        relative w-full 
        min-h-[120vh] sm:min-h-[140vh] lg:min-h-[150vh] 
        flex items-center justify-center 
        bg-orange-500 text-white text-center 
        px-4 sm:px-8 lg:px-16 py-16 sm:py-20
      "
    >
      <div
        className="
          text-lg sm:text-2xl md:text-3xl lg:text-5xl 
          font-bold tracking-wide leading-snug sm:leading-tight
          max-w-4xl
        "
      >
        {linesWithWordSpans}
      </div>
    </section>
  );
}
