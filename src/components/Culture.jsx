"use client";

import { motion } from "framer-motion";

const responsiveSrc = (src, width) => src.replace(/\.[^.]+$/, `-${width}.webp`);
const responsiveSrcSet = (src) =>
  `${responsiveSrc(src, 480)} 480w, ${responsiveSrc(src, 768)} 768w`;

export default function Culture() {
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
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="culture" className="py-12 px-4 relative scroll-mt-[-40px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-10">
        {/* LEFT GLASS CARD */}
        <div className="w-full md:w-1/2">
          <motion.div
            className="glow-target bg-black/1 backdrop-blur-lg border border-[rgba(92,252,0,0.67)]/20 rounded-2xl shadow-xl h-[500px]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className="h-full overflow-y-auto p-8 " 
            style={{
  scrollbarWidth: "thin",
  scrollbarColor: "rgba(92,252,0,0.2) transparent",
}}
            >
  <motion.h3
  variants={lineVariants}
  className="font-['orbitron'] font-bold text-[28px] md:text-[36px] lg:text-[42px] text-center md:text-left mb-8 leading-none"
>
                <span className="text-white">TAKSHION</span>
                <span className="text-[rgba(92,252,0,0.67)]"> CULTURE</span>
              </motion.h3>

              <motion.p
                variants={lineVariants}
              className="text-gray-300 mb-5 md:mb-6 leading-relaxed text-sm md:text-base lg:text-lg text-justify"
              >
                At <b className="text-white">Takshion,</b> we believe great
                technology is built by passionate people. We foster a culture
                where curiosity is encouraged, ideas are valued, and innovation
                is driven by purpose. We empower young minds to think{" "}
                <span className="text-[rgba(92,252,0,0.67)]">
                  boldly, experiment fearlessly, and learn continuously
                </span>{" "}
                while benefiting from the guidance of experienced professionals
                and industry veterans.
              </motion.p>

            
                <motion.ul className="space-y-3 md:space-y-4 text-gray-300 text-sm md:text-base lg:text-lg">
                  {" "}
                  <motion.li
                    variants={lineVariants}
                    className="flex gap-3 items-start"
                  >
                    {" "}
                    <span className="text-[rgba(92,252,0,0.67)] mt-1 text-3xl">
                      {" "}
                      ▸{" "}
                    </span>{" "}
                  <span className="text-justify">
                      {" "}
                      <b className="text-white">Passion:</b> Taking ownership
                      and caring deeply about our work.{" "}
                    </span>{" "}
                  </motion.li>{" "}
                  <motion.li
                    variants={lineVariants}
                    className="flex gap-3 items-start"
                  >
                    {" "}
                    <span className="text-[rgba(92,252,0,0.67)] mt-1 text-3xl">
                      {" "}
                      ▸{" "}
                    </span>{" "}
                    <span className="text-justify">
                      {" "}
                      <b className="text-white">Innovation:</b> Turning ideas
                      into practical solutions that create impact.{" "}
                    </span>{" "}
                  </motion.li>{" "}
                  <motion.li
                    variants={lineVariants}
                    className="flex gap-3 items-start"
                  >
                    {" "}
                    <span className="text-[rgba(92,252,0,0.67)] mt-1 text-3xl">
                      {" "}
                      ▸{" "}
                    </span>{" "}
                   <span className="text-justify">
                      {" "}
                      <b className="text-white">Consistency:</b> Delivering
                      excellence through discipline, reliability, and continuous
                      improvement{" "}
                    </span>{" "}
                  </motion.li>{" "}
                  <motion.li
                    variants={lineVariants}
                    className="flex gap-3 items-start"
                  >
                    {" "}
                    <span className="text-[rgba(92,252,0,0.67)] mt-1 text-3xl">
                      {" "}
                      ▸{" "}
                    </span>{" "}
                    <span className="text-justify">
                      {" "}
                      <b className="text-white">Collaboration:</b> Combining
                      diverse perspectives to solve complex challenges.{" "}
                    </span>{" "}
                  </motion.li>{" "}
                  <motion.li
                    variants={lineVariants}
                    className="flex gap-3 items-start"
                  >
                    {" "}
                    <span className="text-[rgba(92,252,0,0.67)] mt-1 text-3xl">
                      {" "}
                      ▸{" "}
                    </span>{" "}
                    <span className="text-justify">
                      {" "}
                      <b className="text-white">Growth:</b> Creating
                      opportunities to learn, lead, and push boundaries.{" "}
                    </span>{" "}
                  </motion.li>{" "}
                  <motion.li
                    variants={lineVariants}
                    className="flex gap-3 items-start"
                  >
                    {" "}
                    <span className="text-[rgba(92,252,0,0.67)] mt-1 text-3xl">
                      {" "}
                      ▸{" "}
                    </span>{" "}
                    <span className="text-justify">
                      {" "}
                      <b className="text-white">Integrity:</b> Building trust
                      through transparency, accountability, and respect.{" "}
                    </span>{" "}
                  </motion.li>{" "}
                </motion.ul>
             

              <motion.p
                variants={lineVariants}
               className="text-gray-400 mt-5 md:mt-6 text-xs md:text-sm leading-relaxed text-justify"
              >
                At Takshion, every challenge is an opportunity to learn, every
                idea is worth exploring, and every success is achieved together.
              </motion.p>
   
            </div>
            
          </motion.div>
          
        </div>
        {/* RIGHT IMAGE: REALISTIC, SLOW 3D SLIDE-IN */}
        <div className="w-full md:w-1/2 flex justify-center relative overflow-hidden md:overflow-visible">
          {/* Added 'perspective' so the rotateY actually looks 3D */}
          <div style={{ perspective: "1200px" }} className="w-full">
            <motion.div
              className="relative w-full rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] "
              // 1. Starts pushed right, faded out, slightly blurred, and angled away in 3D
              initial={{
                opacity: 0,
                x: 120,
                rotateY: -15,
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
              // UPDATED: Set once to true to prevent re-triggering when scrolling up/down
              viewport={{ once: true, amount: 0.3 }}
              // 4. Subtle, heavy 3D physical hover effect
              whileHover={{
                scale: 1.02,
                rotateY: -2, // Tilts slightly back when hovered
                boxShadow: "0 40px 80px rgba(92,252,0,0.2) ",
                transition: { duration: 1, ease: "easeOut" },
              }}
            >
              <motion.img
                src="/img/culture.webp"
                srcSet={responsiveSrcSet("/img/culture.webp")}
                sizes="(max-width: 768px) 92vw, 50vw"
                alt="Culture"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover"
                // Inner image scales down slightly as it comes in to create camera depth
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
              />

              <div className="absolute inset-0 bg-black/10 pointer-events-none hover:bg-transparent transition-colors duration-1000" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
