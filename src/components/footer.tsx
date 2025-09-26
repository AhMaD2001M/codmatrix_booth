import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/20">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="p-10 md:p-16 border-r border-white/20"
        >
          <h5 className="uppercase text-sm font-bold mb-4">Stay Tuned</h5>
          <p className="text-2xl md:text-3xl font-bold leading-snug mb-8">
            Don’t miss a step in the journey of discovery with CodeMatrix. Join
            us as we uncover the hidden forces shaping a sustainable future and
            stay updated on every new initiative, story, and insight.
          </p>

          {/* Email Input */}
          <div className="flex border-t border-white/20 pt-6">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-transparent text-white placeholder-white/60 focus:outline-none text-lg"
            />
            <button className="bg-orange-500 px-6 flex items-center justify-center text-white text-2xl hover:bg-orange-600 transition">
              →
            </button>
          </div>

          {/* Checkbox */}
          <div className="flex items-start mt-6 text-sm text-white/70">
            <input type="checkbox" className="mr-3 mt-1" />
            <p>
              I agree to receive communications and updates from CodeMatrix. I
              confirm that I have reviewed, and accepted our{" "}
              <span className="text-white underline cursor-pointer">
                Privacy Policy
              </span>
              .
            </p>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="p-10 md:p-16 flex flex-col justify-between"
        >
          <h5 className="uppercase text-sm font-bold mb-6">Follow Us</h5>
          <ul className="space-y-4 text-2xl font-semibold">
            <li className="hover:underline cursor-pointer">Spotify – CodeMatrix Podcast</li>
            <li className="hover:underline cursor-pointer">Verkami</li>
            <li className="hover:underline cursor-pointer">Instagram</li>
            <li className="hover:underline cursor-pointer">Vimeo</li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-3 items-center border-t border-white/20">
        {/* LEFT */}
        <div className="text-xs uppercase p-4 text-center md:text-left">
          CodeMatrix Production. © All Rights Reserved 2025
        </div>

        {/* CENTER */}
        <div className="text-xs uppercase p-4 text-center">
          Designed by CODEMATRIX
        </div>

        {/* RIGHT */}
        <div className="text-xs uppercase p-4 text-center md:text-right">
          English / Español
        </div>
      </div>

      {/* Huge Background Text */}
      <div className="relative overflow-hidden">
  <h1 className="font-black text-white text-center leading-none tracking-tighter 
    text-[clamp(3rem,15vw,12rem)]">
    CODEMATRIX
  </h1>
</div>
    </footer>
  );
}
