import { motion } from "framer-motion";

const workSteps = [
  {
    title: "Discovery",
    price: "From $1.4k",
    desc: "We study markets and uncover deep insights!",
  },
  {
    title: "Branding",
    price: "From $0.9k",
    desc: "Craft bold brands that lodge deep in memory",
  },
  {
    title: "UI/UX",
    price: "From $1.4k",
    desc: "Intuitive interfaces that delight all users",
  },
  {
    title: "Marketing",
    price: "From $1.9k",
    desc: "Data-driven ads that turn clicks into cash!",
  },
  {
    title: "Analytics",
    price: "From $0.9k",
    desc: "End-to-end analytics for total clarity",
  },
];

export default function WorkProcess() {
  return (
    <section className="relative py-60 bg-gray-50">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-light text-center mb-16"
      >
        ( Work process )
      </motion.h2>

      {/* Circles */}
      <div className="relative flex justify-center items-center px-6">
        {workSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center justify-center w-72 h-72 rounded-full border-4 border-gray-200 text-center p-8 bg-white shadow-md z-10 -ml-24 first:ml-0"
          >
            {/* Orbiting ball moving along the border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              className="absolute top-1/2 left-1/2"
              style={{ transformOrigin: "128px 0px" }} // radius = half of circle (64 * 2 = 128px)
            >
              <div className="w-4 h-4 bg-blue-500 rounded-full shadow-md" />
            </motion.div>

            {/* Content */}
            <h3 className="font-semibold text-xl mb-2 underline">{step.title}</h3>
            <p className="font-medium text-base text-gray-600 mb-2">{step.price}</p>
            <p className="text-sm text-gray-500">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-300 px-6 py-3 rounded-md font-medium shadow hover:bg-yellow-400 transition"
        >
          Book a call
        </motion.button>
      </div>
    </section>
  );
}
