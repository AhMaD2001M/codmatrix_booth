import React from "react";

import img1 from "../pictures/assets_task_01k5cb7ddbeejtcyde5t2n6hyz_1758129888_img_1.webp";
import img2 from "../pictures/assets_task_01k5cbky0me8gvex6xjgjc6jh8_1758130353_img_0.webp";
import img3 from "../pictures/0741d313-e3e5-4f5b-9f53-ccec7715f53c.png";
import img4 from "../pictures/3a426350-15f7-4851-b7d5-9a3404bbeb1a.png";
import img5 from "../pictures/100a2702-734d-437d-9ac6-0637d418d021.png";
// Logos (use imports so paths work after build)
import logoFaang from "../pictures/pic1.jpg";
import logoApple from "../pictures/pic2.png";
import logoMicrosoft from "../pictures/microsoft.png";
import logoOpenAI from "../pictures/openai.png";
import logoLinkedIn from "../pictures/linkdin.png";
import logoPalantir from "../pictures/Palantir.png";
import logoCitadel from "../pictures/Citadel.png";
import logoTophatter from "../pictures/tophatter.png";

const Memories: React.FC = () => {

  return (
    <section className="relative min-h-[200vh] bg-gray-100">
      {/* Background Images (static) */}
      <div
        className="absolute top-1/2 left-2 sm:left-4 w-[50%] sm:w-[35%] h-[30vh] sm:h-[55vh] rounded-xl bg-cover bg-center shadow-lg"
        style={{ backgroundImage: `url(${img4})`, zIndex: 4, transform: "rotate(-6deg)" }}
      />
      <div
        className="absolute top-1/3 left-4 sm:left-8 w-[60%] sm:w-[40%] h-[35vh] sm:h-[60vh] rounded-xl bg-cover bg-center shadow-lg"
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

      {/* Sticky Content */}
      <div className="sticky top-0 sm:top-24 z-20 flex flex-col items-center justify-center text-center px-2 sm:px-4 md:px-8 h-screen">
        <h1
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-500"
        >
          Our Members Receive Offers From
        </h1>

        {/* Responsive Grid for Logos */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6 md:gap-8 items-center justify-center"
        >
          <img src={logoFaang} alt="FAANG" className="h-6 sm:h-8 md:h-10 mx-auto" />
          <img src={logoApple} alt="Apple" className="h-6 sm:h-8 md:h-10 mx-auto" />
          <img src={logoMicrosoft} alt="Microsoft" className="h-6 sm:h-8 md:h-10 mx-auto" />
          <img src={logoOpenAI} alt="OpenAI" className="h-6 sm:h-8 md:h-10 mx-auto" />
          <img src={logoLinkedIn} alt="LinkedIn" className="h-6 sm:h-8 md:h-10 mx-auto" />
          <img src={logoPalantir} alt="Palantir" className="h-6 sm:h-8 md:h-10 mx-auto" />
          <img src={logoCitadel} alt="Citadel" className="h-6 sm:h-8 md:h-10 mx-auto" />
          <img src={logoTophatter} alt="Tophatter" className="h-6 sm:h-8 md:h-10 mx-auto" />
        </div>

        {/* Responsive Button */}
        <button
          className="bg-orange-500 text-white py-2 sm:py-3 px-6 sm:px-8 mt-6 sm:mt-8 rounded-lg text-sm sm:text-lg hover:bg-orange-400 transition duration-300 shadow-md"
        >
          JOIN WAITLIST
        </button>
      </div>
    </section>
  );
};

export default Memories;
