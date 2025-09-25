import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Import images
import img1 from "../pictures/assets_task_01k5cb7ddbeejtcyde5t2n6hyz_1758129888_img_1.webp";
import img2 from "../pictures/assets_task_01k5cbky0me8gvex6xjgjc6jh8_1758130353_img_0.webp";
import img3 from "../pictures/0741d313-e3e5-4f5b-9f53-ccec7715f53c.png";
import img4 from "../pictures/3a426350-15f7-4851-b7d5-9a3404bbeb1a.png";
import img5 from "../pictures/100a2702-734d-437d-9ac6-0637d418d021.png";

const Memories: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll progress relative to section
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms
  const yPos1 = useTransform(scrollYProgress, [0, 1], ["0vh", "40vh"]);
  const yPos2 = useTransform(scrollYProgress, [0, 1], ["0vh", "-30vh"]);
  const yPos3 = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const yPos4 = useTransform(scrollYProgress, [0, 1], ["0vh", "60vh"]);
  const yPos5 = useTransform(scrollYProgress, [0, 1], ["0vh", "-50vh"]);

  return (
    <section ref={scrollRef} className="relative min-h-[200vh] bg-gray-100">
      {/* Background images with parallax */}
      <motion.div
        className="absolute top-1/2 left-4 w-[35%] h-[55vh] rounded-xl bg-cover bg-center shadow-lg"
        style={{
          backgroundImage: `url(${img4})`,
          y: yPos4,
          zIndex: 4,
          rotate: "-8deg",
        }}
      />
      <motion.div
        className="absolute top-1/3 left-8 w-[40%] h-[60vh] rounded-xl bg-cover bg-center shadow-lg"
        style={{
          backgroundImage: `url(${img1})`,
          y: yPos1,
          zIndex: 5,
          rotate: "-5deg",
        }}
      />
      <motion.div
        className="absolute top-1/6 right-8 w-[30%] h-[40vh] rounded-xl bg-cover bg-center shadow-lg"
        style={{
          backgroundImage: `url(${img2})`,
          y: yPos2,
          zIndex: 6,
          rotate: "5deg",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-16 w-[45%] h-[70vh] rounded-xl bg-cover bg-center shadow-lg"
        style={{
          backgroundImage: `url(${img3})`,
          y: yPos3,
          zIndex: 7,
          rotate: "-3deg",
        }}
      />
      <motion.div
        className="absolute top-1/4 right-4 w-[25%] h-[35vh] rounded-xl bg-cover bg-center shadow-lg"
        style={{
          backgroundImage: `url(${img5})`,
          y: yPos5,
          zIndex: 8,
          rotate: "8deg",
        }}
      />

      {/* Sticky Text (fixed while inside section only) */}
      <div className="sticky top-32 z-20 flex flex-col items-center justify-center text-center px-4 h-screen">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-6xl font-bold mb-4 text-gray-400"
        >
          Our Members Receive Offers From
        </motion.h1>

        <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.3 }}
  viewport={{ once: true }}
  className="grid grid-cols-2 sm:grid-cols-8 gap-8 items-center justify-center"
>
  {/* Example logos - replace src with your actual paths */}
  <img src="/src/logos/google.svg" alt="FAANG" className="h-12 mx-auto" />
  <img src="/src/logos/apple.svg" alt="Apple" className="h-12 mx-auto" />
  <img src="/src/logos/microsoft.svg" alt="Microsoft" className="h-12 mx-auto" />
  <img src="/src/logos/openai.svg" alt="OpenAI" className="h-12 mx-auto" />
  <img src="/src/logos/linkedin.svg" alt="LinkedIn" className="h-12 mx-auto" />
  <img src="/src/logos/palantir.svg" alt="Palantir" className="h-12 mx-auto" />
  <img src="/src/logos/citadel.svg" alt="Citadel" className="h-12 mx-auto" />
  <img src="/src/logos/tophatter.svg" alt="Tophatter" className="h-12 mx-auto" />
</motion.div>


        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black py-3 px-8 rounded-lg text-lg hover:bg-blue-300 transition duration-300 shadow-md"
        >
          JOIN  WAITLIST
        </motion.button>
      </div>
    </section>
  );
};

export default Memories;
