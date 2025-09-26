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
    <section className="relative py-20 md:py-32 lg:py-40 bg-black">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-light text-center mb-12 md:mb-16"
      >
        ( Weekly Schedule )
      </motion.h2>

      {/* Circles */}
      <div className="relative flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 px-4">
        {workSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center justify-center
              w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72
              rounded-full border-4 border-gray-200 text-center p-6 sm:p-8
              bg-white shadow-md"
            style={{
              clipPath: "circle(50% at 50% 50%)",
            }}
          >
            {/* Orbiting ball */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div
                className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full shadow-md"
                style={{
                  transform: `translateY(-120px)`, // auto scales with circle
                }}
              />
            </motion.div>

            {/* Content */}
            <div className="flex flex-col items-center text-center px-2 whitespace-normal break-words">
              <h3 className="font-semibold text-sm sm:text-lg md:text-xl mb-2 underline">
                {step.title}
              </h3>
              <p className="font-medium text-xs sm:text-sm md:text-base text-gray-600 mb-2">
                {step.price}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10 md:mt-14">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-300 px-5 py-2 sm:px-6 sm:py-3 rounded-md font-medium text-sm sm:text-base shadow hover:bg-yellow-400 transition"
        >
          Join Waitlist
        </motion.button>
      </div>
    </section>
  );
}
