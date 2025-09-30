import { motion } from "framer-motion";

export default function PricingSection() {
  return (
    <section
      className="relative min-h-[100vh] flex flex-col items-center justify-center bg-center bg-cover px-4 sm:px-6 lg:px-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 backdrop-blur-sm" />

      {/* Heading */}
      <div className="relative z-10 text-center mb-14">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
          Investment Plans
        </h2>
        <p className="text-gray-300 mt-3 text-lg">
          Choose the plan that fits your journey
        </p>
      </div>

      {/* Wrapper */}
      <div className="relative z-10 flex flex-col lg:flex-row  w-full max-w-5xl justify-center items-stretch">
        {/* LEFT CARD (Monthly Plan) */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.04 }}
          className="w-full sm:w-[380px] md:w-[400px] bg-orange-500 text-white rounded-2xl flex flex-col justify-between shadow-xl mb-8 lg:mb-20 p-10 "
        >
          <div>
            <h3 className="text-3xl font-bold mb-6">Student-Friendly Pricing</h3>
            <p className="text-base mb-6 leading-relaxed">
              Designed specifically for college budgets – less than your semester
              textbooks! Flexible payment options make education more accessible.
            </p>
            <h4 className="text-xl font-semibold mb-4">Monthly Plan</h4>
            <ul className="space-y-2 text-base">
              <li>$120/month</li>
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
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.04 }}
          className="w-full sm:w-[380px] md:w-[400px] bg-white/10 backdrop-blur-md text-white p-10 rounded-2xl flex flex-col justify-between shadow-xl mt-8 lg:mt-20"
        >
          <div>
            <span className="inline-block bg-green-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Best Value
            </span>
            <h3 className="text-3xl font-bold mb-6">Full Program</h3>
            <p className="text-base mb-6">Complete upfront payment</p>
            <div className="text-2xl sm:text-3xl font-extrabold mb-6">
              $300{" "}
              <span className="line-through text-gray-300 text-xl sm:text-2xl">
                $360
              </span>
            </div>
            <ul className="space-y-2 text-base">
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
