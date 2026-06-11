"use client";

import { motion } from "framer-motion";

export default function About() {
  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.12,
      },
    },
  };

  const lineVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="about"
      className=" py-10 md:py-4 px-4 md:px-8 lg:px-12  bg-cover bg-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-10 items-center">
        
    {/* LEFT SIDE - APPROACH CARD */}
<motion.div
  className="glow-target bg-black/1 backdrop-blur-lg border border-[rgba(92,252,0,0.67)]/20 rounded-2xl p-8 shadow-xl"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  <motion.h3
    variants={lineVariants}
    className="text-xl md:text-2xl lg:text-3xl text-[rgba(92,252,0,0.67)] mb-4 font-semibold text-center md:text-left"
  >
    <span className="text-white">Our </span>
    <span className="text-[rgba(92,252,0,0.67)]">Approach</span>
  </motion.h3>

  <motion.p
    variants={lineVariants}
    className="text-gray-300 mb-5 md:mb-6 leading-relaxed text-sm md:text-base lg:text-lg text-center md:text-left"
  >
    We follow a{" "}
    <span className="text-white font-semibold">human-first, innovation-driven</span>{" "}
    approach where advanced technologies like{" "}
    <span className="text-[rgba(92,252,0,0.67)]">
      AI, robotics, automation, and intelligent systems
    </span>{" "}
    are designed to create real-world impact.
  </motion.p>

  <ul className="space-y-3 md:space-y-4 text-gray-300 text-sm md:text-base lg:text-lg">
    <motion.li variants={lineVariants} className="flex gap-3 items-start">
      <span className="text-[rgba(92,252,0,0.67)] mt-1 text-3xl">▸</span>
      <span>AI-driven systems for intelligent decision-making and automation</span>
    </motion.li>

    <motion.li variants={lineVariants} className="flex gap-3 items-start">
      <span className="text-[rgba(92,252,0,0.67)] mt-1 text-3xl">▸</span>
      <span>Scalable, secure and autonomous digital ecosystems</span>
    </motion.li>

    <motion.li variants={lineVariants} className="flex gap-3 items-start">
      <span className="text-[rgba(92,252,0,0.67)] mt-1 text-3xl">▸</span>
      <span>Continuous innovation through research, collaboration and engineering excellence</span>
    </motion.li>
  </ul>
</motion.div>
      {/* RIGHT SIDE - ABOUT */}
<motion.div
  className="space-y-5 md:space-y-6 text-center md:text-left"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  <motion.h2
    variants={lineVariants}
    className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-widest font-bold leading-tight"
  >
    <span className="text-white">ABOUT </span>
    <span className="text-[rgba(92,252,0,0.67)]">TAKSHION</span>
  </motion.h2>

  <motion.h3
    variants={lineVariants}
    className="text-lg md:text-xl lg:text-2xl text-white font-semibold"
  >
    Building Intelligent Systems for the Future

  </motion.h3>

  <motion.p
    variants={lineVariants}
    className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg max-w-xl mx-auto md:mx-0"
  >
    At <b className="text-white">Takshion</b>, we are a next-generation technology company
    building advanced solutions across <b className="text-white">AI, ML, Computer Vision</b> and
    intelligent automation systems that power modern industries.
  </motion.p>

  <motion.p
    variants={lineVariants}
    className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg max-w-xl mx-auto md:mx-0"
  >
    We specialize in <span className="text-[rgba(92,252,0,0.67)]">
      IoT, LLM integration, Robotics, Drones, UAVs, UGVs, and Autonomous Systems
    </span>, enabling real-world intelligent operations across land, air, sea, and space.
  </motion.p>

  <motion.p
    variants={lineVariants}
    className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg max-w-xl mx-auto md:mx-0"
  >
    Our vision is to build <span className="text-[rgba(92,252,0,0.67)]">
      scalable, secure and intelligent technology ecosystems
    </span> that transform industries and deliver measurable impact.
  </motion.p>
</motion.div>
      </div>
    </section>
  );
}