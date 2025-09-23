import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function FourComponent() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'], // Trigger when the element starts to enter the viewport until it fully leaves
  });

  const textLines = [
    "Around the world,",
    "thousands of initiatives are",
    "quietly revolutionizing our",
    "predatory system, though—",
    "like an iceberg—they often",
    "remain hidden beneath the",
    "surface.",
    ""
  ];

  // Flatten the lines into an array of words
  const words = textLines.flatMap(line => line.split(' '));
  const numWords = words.length;

  // Define animation parameters for smoothness and delay
  const segment = 1 / numWords;
  const delay = 0.05; // Add a small delay to the start of each word's animation
  const fadeDuration = 0.5 * segment; // Duration of the fade-in for each word

  // Create opacity transforms for each word with delay and ensuring smooth transitions
  const wordOpacityTransforms = words.map((_, i) => {
    const animationStart = i * segment + delay;
    const animationEnd = animationStart + fadeDuration;

    // Ensure the animationEnd does not exceed 1 (the maximum scroll progress)
    const cappedAnimationEnd = Math.min(animationEnd, 1);

    // Ensure animationStart is not greater than cappedAnimationEnd, especially for the last words
    const cappedAnimationStart = Math.min(animationStart, cappedAnimationEnd);

    return useTransform(scrollYProgress, [cappedAnimationStart, cappedAnimationEnd], [0, 1]);
  });

  // To render words on separate lines, we need to reconstruct the lines
  let wordIndex = 0;
  const linesWithWordSpans = textLines.map((line, lineIndex) => {
    const wordsInLine = line.split(' ');
    const spans = wordsInLine.map((word, wordInLineIndex) => {
      const currentWordIndex = wordIndex++;
      return (
        <motion.span
          key={`${lineIndex}-${wordInLineIndex}`}
          style={{ opacity: wordOpacityTransforms[currentWordIndex] }}
          className="inline-block mr-2" // Added mr-2 for spacing between words
        >
          {word}
        </motion.span>
      );
    });
    return (
      <div key={lineIndex} className="mb-2"> {/* Added mb-2 for spacing between lines */}
        {spans}
      </div>
    );
  });

  return (
    // Increased height to 150vh for more scrollable animation space.
    // Added padding to ensure text is not cut off at the top/bottom.
    // Centering is maintained with flexbox.
    <section ref={ref} className="relative w-full h-[150vh] flex items-center justify-center bg-orange-500 text-white text-center px-10 py-20">
      <div className="text-xl md:text-3xl lg:text-5xl font-bold tracking-wide leading-tight">
        {linesWithWordSpans}
      </div>
    </section>
  );
}
