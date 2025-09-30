import { motion } from "framer-motion";

const features = [
  {
    title: "Optimize Affiliate Marketing Effectiveness",
    desc: "Use artificial intelligence to analyze data and recommend strategies to help Affiliate campaigns achieve the highest performance at lower costs",
    icon: "📊",
  },
  {
    title: "Automate your sales process",
    desc: "Combine Affiliate management tools and AI content generation to save time, reduce manual effort, and speed up campaign deployment",
    icon: "⚙️",
  },
  {
    title: "Sustainable Revenue Growth",
    desc: "Provide reports, trend analysis and improvement suggestions, ensuring stable and long-term revenue growth for marketers",
    icon: "📈",
  },
  {
    title: "Scaling up your business easily",
    desc: "Helps users quickly expand the number of products, markets and promotion channels while maintaining management efficiency",
    icon: "🚀",
  },
];

export default function Testimonial() {
  return (
    <section className="relative w-full bg-[#f5f5f0] py-20 px-6 md:px-16">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-semibold text-gray-800 mb-12"
      >
        Business Goal
      </motion.h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-start text-left hover:shadow-md transition"
          >
            <div className="text-3xl mb-4">{f.icon}</div>
            <h3 className="text-lg font-semibold text-green-900 mb-3">
              {f.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Testimonial */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-transparent text-center md:text-left"
      >
        <p className="text-xl md:text-2xl italic text-gray-700 leading-relaxed mb-6 max-w-4xl mx-auto">
          "Thanks to the development team, my idea of Affiliate AI became a reality. 
          The system runs smoothly, is easy to expand, and integrates AI as expected."
        </p>

        <div className="flex items-center justify-center md:justify-start gap-4">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="avatar"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div className="text-left">
            <h4 className="text-lg font-semibold text-gray-800">Ngo Truong</h4>
            <p className="text-sm text-gray-600">
              Co-Founder Affiliate AI
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
