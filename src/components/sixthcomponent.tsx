import { motion } from "framer-motion";

export default function OverlapSection() {
  return (
    <section
      className="relative min-h-[160vh] flex items-center justify-center bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')", 
        // <- dark code/dev styled bg
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* wrapper */}
      <div className="relative z-10 flex gap-14 px-6 md:px-20">
        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          className="w-[420px] md:w-[480px] h-[620px] bg-orange-500 text-white p-12 shadow-2xl rounded-xl flex flex-col justify-between mt-16"
        >
          <div>
            <h2 className="text-6xl font-extrabold mb-8">THE PODCAST</h2>
            <span className="inline-block bg-white/20 px-6 py-2 rounded-full text-lg font-medium mb-8">
              Coming soon
            </span>
            <p className="text-xl leading-relaxed">
              Dive into the minds of visionaries leading groundbreaking
              initiatives. Hear their stories and learn how they’re creating
              real change across the world.
            </p>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false, amount: 0.4 }}
          className="w-[420px] md:w-[480px] h-[620px] bg-gradient-to-b from-gray-900 to-gray-700 text-white p-12 shadow-2xl rounded-xl flex flex-col justify-between mt-[320px] backdrop-blur-sm bg-opacity-80"
        >
          <div>
            <h2 className="text-4xl font-extrabold mb-8">THE CROWDFUNDING</h2>
            <button className="flex items-center gap-3 text-xl font-medium group">
              <span>→</span>
              <span className="border-b border-white/50 group-hover:border-white transition">
                View more
              </span>
            </button>
            <p className="text-xl leading-relaxed mt-8">
              Help us give a voice to the solutions shaping the sustainable
              future. Be part of the journey and support impactful initiatives.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
