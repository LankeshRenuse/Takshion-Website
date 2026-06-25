"use client";

import { motion } from "framer-motion";

export default function Vision() {
  // --- TEXT ANIMATION VARIANTS ---
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
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section id="vision" className="py-12  px-4 scroll-mt-[60px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* LEFT GLASS CARD (Staggered Text) */}
        <div className="w-full md:w-1/2">
          <motion.div 
  className="bg-black/1 backdrop-blur-lg border border-[rgba(92,252,0,0.67)]/20 rounded-2xl p-8 shadow-xl glow-target text-justify"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            // UPDATED: Set once to true to lock animation after first enter
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 variants={lineVariants} className="text-3xl md:text-5xl font-bold text-[rgba(92,252,0,0.67)] mb-4">
              VISION
            </motion.h2>

            <motion.ul className="space-y-4 text-gray-300 leading-7 text-justify">
              <motion.li variants={lineVariants} className="flex gap-3 items-start">
                <span className="text-[rgba(92,252,0,0.67)] text-3xl mt-1">▸</span>
               <span className="leading-7">
                We believe technology should solve real problems and create real value.
                </span>
              </motion.li>

              <motion.li variants={lineVariants} className="flex gap-3 items-start">
                <span className="text-[rgba(92,252,0,0.67)] text-3xl mt-1">▸</span>
               <span className="leading-7">
                Our vision is to build reliable autonomous systems that make industries safer, smarter, and more efficient.
                </span>
              </motion.li>

              <motion.li variants={lineVariants} className="flex gap-3 items-start">
                <span className="text-[rgba(92,252,0,0.67)] text-3xl mt-1">▸</span>
                <span className="leading-7">
               We are committed to turning innovative ideas into practical solutions through engineering, research, and continuous improvement.
                </span>
              </motion.li>

              <motion.li variants={lineVariants} className="flex gap-3 items-start">
                <span className="text-[rgba(92,252,0,0.67)] text-3xl mt-1">▸</span>
               <span className="leading-7">
                As we grow, we aim to contribute to a future where drones, robotics, and AI become trusted tools for progress.
                </span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>

        {/* RIGHT IMAGE: REALISTIC, SLOW 3D SLIDE-IN */}
        <div className="w-full md:w-1/2 flex justify-center relative overflow-hidden md:overflow-visible">
          
          <div style={{ perspective: "1200px" }} className="w-full">
            <motion.div
              className="relative w-full rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] "
              
              // 1. Starts pushed right, faded out, slightly blurred, and angled away in 3D
              initial={{ opacity: 0, x: 120, rotateY: -15, filter: "blur(12px)" }} 
              
              // 2. Glides to normal, clears blur, flattens out perfectly
              whileInView={{ opacity: 1, x: 0, rotateY: 0, filter: "blur(0px)" }} 
              
              // 3. Ultra slow duration (2 full seconds) with heavy, natural momentum
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }} 
              // UPDATED: Set once to true to freeze image alignment after viewport entry
              viewport={{ once: true, amount: 0.3 }}

              // 4. Subtle, heavy 3D physical hover effect
              whileHover={{ 
                scale: 1.02, 
                rotateY: -2, // Tilts slightly back when hovered
                boxShadow: "0 40px 80px rgba(92,252,0,0.15)",
                transition: { duration: 1, ease: "easeOut" } 
              }}
            >
              <motion.img
                src="/img/vision.webp"
                alt="Vision"
                className="w-full h-auto object-cover"
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

      </div>
    </section>
  );
}
