import { motion } from "framer-motion";

const reviews = [
  {
    title: "Batch 2022 Review",
    desc: "“Code Matrix completely changed how I think about problem-solving. The guidance and structured roadmap gave me confidence to crack coding interviews.”",
    icon: "🎓",
  },
  {
    title: "Batch 2023 Feedback",
    desc: "“The environment was supportive and motivating. Learned full-stack development from scratch, and now I’m contributing to real-world projects.”",
    icon: "🎓",
  },
  {
    title: "Batch 2024 Experience",
    desc: "“From data structures to system design, Code Matrix made everything smooth. The projects were industry-focused and boosted my portfolio.”",
    icon: "🎓",
  },
  {
    title: "Batch 2025 Early Reviews",
    desc: "“Excited to be part of Code Matrix. The mentorship, peer group, and career guidance have already started making a difference.”",
    icon: "🎓",
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
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
      >
         Code Matrix Journey 
      </motion.h2>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-start text-left hover:shadow-lg transition"
          >
            <div className="text-3xl mb-4">{r.icon}</div>
            <h3 className="text-lg font-semibold text-green-900 mb-3">
              {r.title}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Testimonial Quote */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-transparent text-center md:text-left"
      >
        <p className="text-xl md:text-2xl italic text-gray-700 leading-relaxed mb-6 max-w-4xl mx-auto">
          "Code Matrix isn’t just a course — it’s a launchpad. From coding
          fundamentals to building real-world products, every batch proves that
          passion + guidance = success."
        </p>

        <div className="flex items-center justify-center md:justify-start gap-4">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="avatar"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div className="text-left">
            <h4 className="text-lg font-semibold text-gray-800">Alumni Voices</h4>
            <p className="text-sm text-gray-600">Code Matrix Graduates</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
