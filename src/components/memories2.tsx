import React from "react";

// Import images used in 'memories.tsx'
import img1 from "../pictures/assets_task_01k5cb7ddbeejtcyde5t2n6hyz_1758129888_img_1.webp";
import img2 from "../pictures/assets_task_01k5cbky0me8gvex6xjgjc6jh8_1758130353_img_0.webp";
import img3 from "../pictures/0741d313-e3e5-4f5b-9f53-ccec7715f53c.png";
import img4 from "../pictures/3a426350-15f7-4851-b7d5-9a3404bbeb1a.png";
import img5 from "../pictures/100a2702-734d-437d-9ac6-0637d418d021.png";

const FifthComponent: React.FC = () => {

  return (
    <section className="relative min-h-[150vh] bg-gray-100">
      {/* Static Backgrounds */}
      <div
        className="absolute top-1/2 left-2 sm:left-4 w-[60%] sm:w-[35%] h-[30vh] sm:h-[55vh] rounded-xl bg-cover bg-center shadow-lg"
        style={{ backgroundImage: `url(${img4})`, zIndex: 4, transform: "rotate(-8deg)" }}
      />
      <div
        className="absolute top-1/3 left-4 sm:left-8 w-[65%] sm:w-[40%] h-[35vh] sm:h-[60vh] rounded-xl bg-cover bg-center shadow-lg"
        style={{ backgroundImage: `url(${img1})`, zIndex: 5, transform: "rotate(-5deg)" }}
      />
      <div
        className="absolute top-1/6 right-2 sm:right-8 w-[45%] sm:w-[30%] h-[25vh] sm:h-[40vh] rounded-xl bg-cover bg-center shadow-lg"
        style={{ backgroundImage: `url(${img2})`, zIndex: 6, transform: "rotate(5deg)" }}
      />
      <div
        className="absolute bottom-1/4 right-4 sm:right-16 w-[70%] sm:w-[45%] h-[45vh] sm:h-[70vh] rounded-xl bg-cover bg-center shadow-lg"
        style={{ backgroundImage: `url(${img3})`, zIndex: 7, transform: "rotate(-3deg)" }}
      />
      <div
        className="absolute top-1/4 right-2 sm:right-4 w-[35%] sm:w-[25%] h-[20vh] sm:h-[35vh] rounded-xl bg-cover bg-center shadow-lg"
        style={{ backgroundImage: `url(${img5})`, zIndex: 8, transform: "rotate(8deg)" }}
      />

      {/* Sticky Text Content (no motion) */}
      <div className="sticky lg:top-24lg:top-32 z-20 flex flex-col items-center justify-center text-center px-2 sm:px-6 md:px-12 h-screen">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black">
          ARE MEMORIES
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 text-black max-w-lg">
          With CODEMATRIX
        </p>

        <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-2 text-black shadow-md shadow-white max-w-xl">
         <p className="shadow-md shadow-white"> CodeMatrix Academy is the most efficient way to bootstrap your prep</p>
          <p className="shadow-md shadow-white  ">and guide you through the job hunting process. We focus on techniques</p>
          rather than just problems, making interviews much easier to crack.
        </p>
      </div>
    </section>
  );
};

export default FifthComponent;
