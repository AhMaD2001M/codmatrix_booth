import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// Import images used in the 'memories.tsx' component to maintain visual consistency
import img1 from "../pictures/assets_task_01k5cb7ddbeejtcyde5t2n6hyz_1758129888_img_1.webp";
import img2 from "../pictures/assets_task_01k5cbky0me8gvex6xjgjc6jh8_1758130353_img_0.webp";
import img3 from "../pictures/0741d313-e3e5-4f5b-9f53-ccec7715f53c.png";
import img4 from "../pictures/3a426350-15f7-4851-b7d5-9a3404bbeb1a.png";
import img5 from "../pictures/100a2702-734d-437d-9ac6-0637d418d021.png";

const FifthComponent: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll progress relative to section
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms - these can be adjusted to match the visual style
  // Using the same transforms as in 'memories.tsx' for consistency.
  const yPos1 = useTransform(scrollYProgress, [0, 1], ["0vh", "40vh"]);
  const yPos2 = useTransform(scrollYProgress, [0, 1], ["0vh", "-30vh"]);
  const yPos3 = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const yPos4 = useTransform(scrollYProgress, [0, 1], ["0vh", "60vh"]);
  const yPos5 = useTransform(scrollYProgress, [0, 1], ["0vh", "-50vh"]);

  return (
    <section ref={scrollRef} className="relative min-h-[200vh] bg-gray-100">
      {/* Background elements with parallax - using the same images and transforms as 'memories.tsx' */}
      <motion.div
        className="absolute top-1/2 left-4 w-[35%] h-[55vh] rounded-xl bg-cover bg-center shadow-lg"
        style={{
          backgroundImage: `url(${img4})`, // Using img4 as in memories.tsx
          y: yPos4,
          zIndex: 4,
          rotate: "-8deg",
        }}
      />
      <motion.div
        className="absolute top-1/3 left-8 w-[40%] h-[60vh] rounded-xl bg-cover bg-center shadow-lg"
        style={{
          backgroundImage: `url(${img1})`, // Using img1 as in memories.tsx
          y: yPos1,
          zIndex: 5,
          rotate: "-5deg",
        }}
      />
      <motion.div
        className="absolute top-1/6 right-8 w-[30%] h-[40vh] rounded-xl bg-cover bg-center shadow-lg"
        style={{
          backgroundImage: `url(${img2})`, // Using img2 as in memories.tsx
          y: yPos2,
          zIndex: 6,
          rotate: "5deg",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-16 w-[45%] h-[70vh] rounded-xl bg-cover bg-center shadow-lg"
        style={{
          backgroundImage: `url(${img3})`, // Using img3 as in memories.tsx
          y: yPos3,
          zIndex: 7,
          rotate: "-3deg",
        }}
      />
      <motion.div
        className="absolute top-1/4 right-4 w-[25%] h-[35vh] rounded-xl bg-cover bg-center shadow-lg"
        style={{
          backgroundImage: `url(${img5})`, // Using img5 as in memories.tsx
          y: yPos5,
          zIndex: 8,
          rotate: "8deg",
        }}
      />

      {/* Sticky Text Content for Analytics */}
      <div className="sticky top-32 z-20 flex flex-col items-center justify-center text-center px-4 h-screen">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-6xl font-bold mb-4 text-gray-400"
        >
          Analytics
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-xl mb-8 text-gray-700 max-w-lg"
        >
          From $0.9k
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-lg mb-8 text-gray-600 max-w-lg"
        >
          End-to-end analytics for total clarity
        </motion.p>
        {/* Placeholder for a button if needed, similar to 'memories.tsx' */}
        {/* <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition duration-300 shadow-md" > Learn More </motion.button> */}
      </div>
    </section>
  );
};

export default FifthComponent;
