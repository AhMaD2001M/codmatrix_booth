import { motion } from "framer-motion";

export default function TimelineSection() {
  const steps = [
    {
      side: "left",
      subtitle: " Month 1.",
      title:
        "Core Coding & Problem Solving: ",
      
      desc: " Python, Data Structures, Git/GitHub, Arrays, Strings, Linked Lists, Sorting & Searching Algorithms, Big-O, LeetCode, Project: Data Processing CLI Tool",
    },
    {
      side: "right",
      title: "UNDERSTANDS & EXTRACTS DATA",
      subtitle: "",
      desc: "Reads, interprets, and inputs orders into your system with near-perfect accuracy.",
    },
    {
      side: "left",
      title: "AI CREATES A SALES ORDER IN YOUR ERP",
      subtitle: "IN SECONDS.",
      desc: "No disruption, just seamless automation.",
    },
    {
      side: "",
      title: "",
      subtitle: "",
      desc: "",
    },
    {
      side: "left",
      title: "",
      subtitle: "",
      desc: "",
    },
  ];

  return (
    <section className="relative w-full bg-black text-white py-20 min-h-screen">
      {/* Roadmap Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-6xl md:text-8xl font-black tracking-wider mb-4">
          ROADMAP
        </h2>
        <p className="text-xl text-gray-400 tracking-widest">
          OUR JOURNEY TO INNOVATION
        </p>
      </motion.div>

      {/* Vertical line */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600"
        style={{
          top: "calc(20rem + 3rem)", // after heading
          height: "calc(100% - 20rem - 6rem)", // before bottom
        }}
      ></div>

      {/* Timeline dots */}
      {steps.map((_, index) => (
        <div
          key={`dot-${index}`}
          className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full border-4 border-black shadow-lg z-10"
          style={{
            top: `calc(20rem + 3rem + ${index * 6}rem + 3rem)`,
          }}
        />
      ))}

      <div className="relative max-w-6xl mx-auto flex flex-col space-y-24">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: step.side === "left" ? -100 : 100,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            className={`flex items-center w-full ${
              step.side === "left" ? "justify-start" : "justify-end"
            }`}
          >
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              className={`w-1/2 ${
                step.side === "left" ? "text-right pr-10" : "text-left pl-10"
              }`}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {step.title}{" "}
                {step.subtitle && (
                  <span className="italic text-orange-500">
                    {step.subtitle}
                  </span>
                )}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
