"use client";

import { motion } from "framer-motion";

export default function Story() {
  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // 0.15s delay between each line
        delayChildren: 0.1,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="story" className="py-16 px-4 relative scroll-mt-[-40px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* LEFT IMAGE: REALISTIC, SLOW 3D SLIDE-IN */}
        <div className="w-full md:w-1/2 flex justify-center relative overflow-hidden md:overflow-visible px-2">
          <div style={{ perspective: "1200px" }} className="w-full">
            <motion.div
              className="relative w-full rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] "
              // 1. Starts pushed left, faded out, slightly blurred, and angled in 3D
              initial={{
                opacity: 0,
                x: -120,
                rotateY: 15,
                filter: "blur(12px)",
              }}
              // 2. Glides to normal, clears blur, flattens out perfectly
              whileInView={{
                opacity: 1,
                x: 0,
                rotateY: 0,
                filter: "blur(0px)",
              }}
              // 3. Ultra slow duration (2 full seconds) with heavy, natural momentum
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              // UPDATED: Changed once to true to lock the image animation
              viewport={{ once: true, amount: 0.3 }}
              // 4. Subtle, heavy 3D physical hover effect
              whileHover={{
                scale: 1.02,
                rotateY: 2, // Tilts slightly back when hovered
                boxShadow: "0 40px 80px rgba(92,252,0,0.15)",
                transition: { duration: 1, ease: "easeOut" },
              }}
            >
              <motion.img
                src="/img/story.webp"
                alt="Story"
                className="w-full max-w-full md:max-w-full h-auto object-contain rounded-2xl"
                // Inner image scales down slightly as it comes in to create camera depth
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Subtle dark overlay for premium physical feel */}
              <div className="absolute inset-0 bg-black/10 pointer-events-none hover:bg-transparent transition-colors duration-1000" />
            </motion.div>
          </div>
        </div>

        {/* RIGHT GLASS CARD */}
        <div className="w-full md:w-1/2">
          <motion.div
            className="bg-black/1 backdrop-blur-lg border border-[rgba(92,252,0,0.67)]/20 rounded-2xl p-8 shadow-xl glow-target"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            // UPDATED: Changed once to true so text triggers only once on scroll
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={lineVariants}
              className="text-3xl md:text-5xl font-bold text-[rgba(92,252,0,0.67)] mb-4"
            >
              <span className="text-white">OUR </span>
              <span className="text-[rgba(92,252,0,0.67)]">STORY</span>
            </motion.h2>

            {/* Changed to motion.ul to maintain the animation chain */}
            <motion.ul className="space-y-4 text-gray-300 text-justify">
              {/* Added items-start and mt-1 for perfect multi-line alignment */}
              <motion.li
                variants={lineVariants}
                className="flex gap-3 items-start"
              >
                <span className="text-[rgba(92,252,0,0.67)] text-3xl mt-1">
                  ▸
                </span>
                <span className="text-justify leading-7">
                 Born from the engineering legacy of Sveltoz Solutions Pvt. Ltd., Takshion combines startup agility with 17+ years of proven technology expertise.
                </span>
              </motion.li>

              <motion.li
                variants={lineVariants}
                className="flex gap-3 items-start"
              >
                <span className="text-[rgba(92,252,0,0.67)] text-3xl mt-1">
                  ▸
                </span>
                <span className="text-justify leading-7">
                  We design and develop intelligent UAVs, UGVs, and UUVs, powered by AI, Computer Vision, IoT, Deep Learning, and Generative AI.
                </span>
              </motion.li>

              <motion.li
                variants={lineVariants}
                className="flex gap-3 items-start"
              >
                <span className="text-[rgba(92,252,0,0.67)] text-3xl mt-1">
                  ▸
                </span>
               <span className="text-justify leading-7">
                  From concept to deployment, our solutions enable smarter automation, greater efficiency, and real-world impact.
                </span>
              </motion.li>

              <motion.li
                variants={lineVariants}
                className="flex gap-3 items-start"
              >
                <span className="text-[rgba(92,252,0,0.67)] text-3xl mt-1">
                  ▸
                </span>
               <span className="text-justify leading-7">
                  Every innovation reflects our commitment to reliability, performance, and technological advancement.
                </span>
              </motion.li>

              <motion.li
                variants={lineVariants}
                className="flex gap-3 items-start"
              >
                <span className="text-[rgba(92,252,0,0.67)] text-3xl mt-1">
                  ▸
                </span>
                <span className="text-justify leading-7">
                  Proudly backed by the industrial legacy of Sveltoz Solutions Pvt. Ltd.
                </span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
