import { motion } from "framer-motion";

export default function TimelineSection() {
  const steps = [
    {
      side: "left",
      subtitle: "Core Coding & Problem Solving",
      title: "Month 1",
      desc: "Python, Data Structures, Git/GitHub, Arrays, Strings, Linked Lists, Sorting & Searching Algorithms, Big-O, LeetCode, Project: Data Processing CLI Tool",
    },
    {
      side: "right",
      title: "Month 2",
      subtitle: "Full-Stack Foundations",
      desc: "JavaScript, APIs, Databases, JavaScript & DOM Manipulation, Node.js & Express APIs, Database Design & CRUD Operations, Frontend-Backend Integration, Project: Full-Stack App",
    },
    {
      side: "left",
      title: "Month 3",
      subtitle: "Professional Skills & Career Prep",
      desc: "System Design Fundamentals, Advanced Development Practices, Team Capstone Project, Resume, LinkedIn & Interview Prep, Project: Team Capstone",
    },
  ];

  return (
    <section className="relative w-full bg-black text-white py-16 sm:py-20 md:py-28 min-h-screen">
      {/* Roadmap Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 sm:mb-20"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-wider mb-4">
          ROADMAP
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 tracking-widest">
          OUR JOURNEY TO INNOVATION
        </p>
      </motion.div>

      {/* Vertical line (hidden on mobile) */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600 h-[80%] top-40"></div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto flex flex-col space-y-16 sm:space-y-20 md:space-y-28">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: step.side === "left" ? -100 : 100,
              scale: 0.9,
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
            className={`flex items-center w-full 
              ${step.side === "left" ? "md:justify-start" : "md:justify-end"} 
              justify-center`}
          >
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-orange-500 rounded-full border-4 border-black shadow-lg z-10" />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              className={`
                w-[90%] sm:w-4/5 md:w-1/2 
                text-center md:text-left 
                ${step.side === "left" ? "md:pr-10" : "md:pl-10"}
              `}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
                {step.title}{" "}
                {step.subtitle && (
                  <span className="italic text-orange-500">
                    {step.subtitle}
                  </span>
                )}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
