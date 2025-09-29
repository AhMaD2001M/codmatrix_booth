import { motion } from "framer-motion";

const workSteps = [
  {
    title: "25-30 ",
    price: "hours per week",
    desc: "commitment including optional Saturday sessions",
  },
  {
    title: "Friday",
    price: "Project Day",
    desc: "Full day Project Development , 1-2hrs Code Review Sessions",
  },
  {
    title: "Saturday",
    price: "Optional",
    desc: "4-6hrs Problem Solving Peer-led Hackathons",
  },
  {
    title: "Sunday",
    price: "Rest & Review",
    desc: "Self-paced catch-up Community study groups",
  },
  {
    title: "Mon-Thus",
    price: "Live Learning",
    desc: "3hrs Live Lecture/Workshop 2hrs Guided Practice & Labs",
  },
];

export default function WorkProcess() {
  return (
    <section className="relative bg-black py-20 sm:py-24 md:py-60">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl text-white md:text-5xl font-light text-center mb-16"
      >
        ( Weekly Schedule )
      </motion.h2>

      {/* Circles */}
      <div className="relative px-4 sm:px-6 md:px-8 grid grid-cols-1 gap-6 place-items-center md:flex md:flex-wrap md:justify-center md:items-center md:gap-8">
        {workSteps.map((step, index) => {
          const isFirst = index === 0;
          const isLast = index === workSteps.length - 1;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col items-center justify-center
                w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full border-4 border-gray-200 text-center p-6 sm:p-7 md:p-8
                bg-white shadow-md md:-ml-20 md:first:ml-0
                ${isFirst || isLast ? "z-20" : "z-10"}
              `}
              style={{
                clipPath: "circle(50% at 50% 50%)",
              }}
            >
              {/* Orbiting ball - perfectly on border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center [--orbit-radius:104px] sm:[--orbit-radius:120px] md:[--orbit-radius:136px]"
              >
                <div
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-blue-500 rounded-full shadow-md"
                  style={{
                    transform: "translateY(calc(var(--orbit-radius) * -1))",
                  }}
                />
              </motion.div>

              {/* Content */}
              <div className="flex flex-col items-center text-center px-2 whitespace-normal break-words">
                <h3 className="font-semibold text-base sm:text-lg md:text-xl mb-2 underline">
                  {step.title}
                </h3>
                <p className="font-medium text-sm sm:text-base text-gray-600 mb-2">
                  {step.price}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10 sm:mt-12 px-20">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-300 px-6 py-3 rounded-md font-medium shadow hover:bg-yellow-400 transition"
        >
          join Waitlist
        </motion.button>
      </div>
    </section>
  );
}
