"use client";

import { motion } from "framer-motion";

const responsiveSrc = (src, width) => src.replace(/\.[^.]+$/, `-${width}.webp`);
const responsiveSrcSet = (src) =>
  `${responsiveSrc(src, 480)} 480w, ${responsiveSrc(src, 768)} 768w, ${src} 1280w`;

export default function Mission() {
  // --- TEXT ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section
      id="mission"
      className="py-16 px-4  bg-cover bg-center glow-card scroll-mt-[-40px]"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="w-full flex justify-center relative overflow-hidden md:overflow-visible">
          <div style={{ perspective: "1200px" }} className="w-full">
            <motion.div
              className="relative w-full rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] "
              initial={{ opacity: 0, x: -120, rotateY: 15, filter: "blur(12px)" }} 
              whileInView={{ opacity: 1, x: 0, rotateY: 0, filter: "blur(0px)" }} 
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }} 
              // MATCHED: Removed the margin to align trigger timing with other sections
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ 
                scale: 1.02, 
                rotateY: 2,
                boxShadow: "0 40px 80px rgba(92,252,0,0.15)",
                transition: { duration: 1, ease: "easeOut" } 
              }}
            >
              <motion.img
                src="/img/mission.webp"
                srcSet={responsiveSrcSet("/img/mission.webp")}
                sizes="(max-width: 768px) 92vw, 50vw"
                alt="Mission"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
                // MATCHED: Removed separate viewport prop so it syncs perfectly with parent container
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none hover:bg-transparent transition-colors duration-1000" />
            </motion.div>
          </div>
        </div>

        {/* RIGHT CONTENT CARD */}
        
  <motion.div
    className="bg-black/1 backdrop-blur-lg border border-[rgba(92,252,0,0.67)]/20 rounded-2xl shadow-xl glow-target h-[520px]"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div
        className="h-full overflow-y-auto p-8 hide-scrollbar text-justify"

      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "rgba(92,252,0,0.2) transparent",
      }}
    >
      <motion.h2
        variants={lineVariants}
        className="text-3xl md:text-5xl text-[rgba(92,252,0,0.67)] mb-6 font-bold"
      >
        MISSION
      </motion.h2>

     <motion.p
  variants={lineVariants}
  className="text-gray-300 mb-5 leading-8 text-justify"
>
        We build technology that solves problems. By combining{" "}
        <span className="text-[rgba(92,252,0,0.67)]">
          AI, Robotics, Drones, and Intelligent Automation
        </span>
        .
      </motion.p>

     <motion.p
  variants={lineVariants}
  className="text-gray-300 mb-6 leading-8 text-justify"
>
        We create systems that help people work smarter, safer, and more
        efficiently.
      </motion.p>

      <ul className="space-y-4 text-gray-300 mb-6">
        <motion.li variants={lineVariants} className="flex gap-3">
          <span className="text-[rgba(92,252,0,0.67)] text-3xl">▸</span>
          <span className="text-justify">
            Build reliable and practical autonomous solutions
          </span>
        </motion.li>

        <motion.li variants={lineVariants} className="flex gap-3">
          <span className="text-[rgba(92,252,0,0.67)] text-3xl">▸</span>
          <span className="text-justify">
            Turn innovative ideas into real-world impact.
          </span>
        </motion.li>

        <motion.li variants={lineVariants} className="flex gap-3">
          <span className="text-[rgba(92,252,0,0.67)] text-3xl">▸</span>
          <span className="text-justify">
            Maintain the highest standards of engineering and quality.
          </span>
        </motion.li>

        <motion.li variants={lineVariants} className="flex gap-3">
          <span className="text-[rgba(92,252,0,0.67)] text-3xl">▸</span>
          <span className="text-justify">
            Continuously learn, improve, and push technological boundaries.
          </span>
        </motion.li>

        <motion.li variants={lineVariants} className="flex gap-3">
          <span className="text-[rgba(92,252,0,0.67)] text-3xl">▸</span>
          <span className="text-justify">
            Develop next-generation autonomous systems for critical operations
            and demanding environments.
          </span>
        </motion.li>
      </ul>

      <motion.p
  variants={lineVariants}
  className="text-gray-400 leading-8 text-justify"
>
        Our mission is simple: to create intelligent systems that people can
        trust today and technologies that will power the strategic challenges
        of tomorrow.
      </motion.p>
    </div>
  </motion.div>
</div>
    </section>
  );
}
