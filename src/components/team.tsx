import { motion } from "framer-motion";

export default function Team() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">
      {/* Top Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="uppercase text-sm font-semibold tracking-wider text-gray-600">
            The Easy Way to Make Friends
          </p>
          <h2 className="text-5xl font-light leading-tight mt-3 text-gray-900">
            Our <em className="italic font-normal">Team</em>, <br />
            Industiry <em className="italic font-normal">expert</em>.
          </h2>
        </motion.div>

        {/* Right Side */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-lg text-gray-700 leading-relaxed max-w-xl"
        >
          Every RealRoots experience is led by an amazing guide who facilitates
          deep conversation and fun activities with your group. It’s the
          fast-track way to make a new group of friends, without any of the
          awkwardness.
        </motion.p>
      </div>

      {/* Bottom Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="overflow-hidden rounded-2xl shadow-lg"
      >
        <img
          src="/src/pictures/3a426350-15f7-4851-b7d5-9a3404bbeb1a.png" 
          alt="Team at RealRoots"
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </section>
  );
}
