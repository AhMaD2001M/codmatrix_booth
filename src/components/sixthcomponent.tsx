import { motion } from "framer-motion";

export default function OverlapSection() {
  return (
    <section
      className="relative min-h-[160vh] flex flex-col items-center justify-center bg-center bg-cover px-4 sm:px-6 lg:px-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Heading */}
      <div className="relative z-10 text-center mb-10 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-16 text-white">
          Investment Plans
        </h2>
        <p className="text-gray-300 mt-4 text-base sm:text-lg">
          Choose your path to success
        </p>
      </div>

      {/* wrapper */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-center gap-10 sm:gap-14 w-full max-w-7xl">
        {/* LEFT CARD (Monthly Plan) */}
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="w-full sm:w-[420px] md:w-[480px] h-auto bg-orange-500 text-white p-6 sm:p-10 lg:p-12 rounded-xl flex flex-col justify-between mt-6 lg:mt-16 transition-all duration-300"
        >
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              💰 Student-Friendly Pricing
            </h3>
            <p className="text-base sm:text-lg mb-6">
              Designed specifically for college budgets – less than your semester
              textbooks! Flexible payment options available to make world-class
              education accessible.
            </p>
            <h4 className="text-xl sm:text-2xl font-semibold mb-4">Monthly</h4>
            <ul className="space-y-2 text-base sm:text-lg">
              <li className="hover:text-yellow-200 transition">💵 $120/month</li>
              <li>Pay for what you need</li>
              <li>Full curriculum access</li>
              <li>Community & support</li>
              <li>Career assistance</li>
            </ul>
          </div>
          <button className="mt-8 bg-white text-orange-600 font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-orange-600 hover:text-white">
            Choose Monthly
          </button>
        </motion.div>

        {/* RIGHT CARD (Full Program Plan) */}
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false, amount: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="w-full sm:w-[420px] md:w-[480px] h-auto bg-white/10 backdrop-blur-lg text-white p-6 sm:p-10 lg:p-12 rounded-xl flex flex-col justify-between mt-10 lg:mt-[320px] transition-all duration-300"
        >
          <div>
            <span className="inline-block bg-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Best Value
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Full Program
            </h3>
            <p className="text-base sm:text-lg mb-6">Complete upfront payment</p>
            <div className="text-2xl sm:text-3xl font-extrabold mb-6 hover:text-green-400 transition">
              $300{" "}
              <span className="line-through text-gray-300 text-xl sm:text-2xl">
                $360
              </span>
            </div>
            <ul className="space-y-2 text-base sm:text-lg">
              <li>Save $60!</li>
              <li>One-time payment</li>
              <li>Full curriculum access</li>
              <li>Community & support</li>
              <li>Career assistance</li>
              <li>Bonus materials</li>
            </ul>
          </div>
          <button className="mt-8 bg-white text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-gray-900 hover:text-white">
            Choose Full Program
          </button>
        </motion.div>
      </div>
    </section>
  );
}
