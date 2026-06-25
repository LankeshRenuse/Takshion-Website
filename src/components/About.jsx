
"use client";

import { motion } from "framer-motion";

export default function About() {
  const accentColor = "rgba(92,252,0,0.67)";

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
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
      className="py-12 px-4 scroll-mt-[60px]"
    >
      <div className=" max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* LEFT CARD */}
        <div className=" w-full  lg:w-1/2">
          <motion.div
            className="
            glow-target
              bg-black/1
              backdrop-blur-lg
              border border-[rgba(92,252,0,0.2)]
              rounded-2xl
              p-8
              shadow-xl
            "
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={lineVariants}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              <span className="text-white">ABOUT </span>
              <span style={{ color: accentColor }}>
                TAKSHION
              </span>
            </motion.h2>

            <motion.h3
              variants={lineVariants}
              className="text-xl md:text-2xl text-white font-semibold mb-5"
            >
              Building Intelligent Systems for the Future
            </motion.h3>

           <motion.p
  variants={lineVariants}
  className="text-gray-300 leading-relaxed mb-5 text-base md:text-lg text-justify text-left"
>
  The innovative drones and robotics startup backed by
  <span style={{ color: accentColor }}>
    {" "}17+ years of industrial experience
  </span>,
  delivering next-generation autonomous technologies.
</motion.p>

<motion.p
  variants={lineVariants}
  className="text-gray-300 leading-relaxed mb-5 text-base md:text-lg text-justify text-left"
>
  <span className="text-white font-semibold">
    Takshion
  </span>{" "}
  designs and develops intelligent autonomous platforms including
  <span style={{ color: accentColor }}>
    {" "}UAVs, UGVs and UUVs
  </span>,
  with expertise in
  <span style={{ color: accentColor }}>
    {" "}AI/ML, IoT, Deep Learning, Computer Vision and GenAI.
  </span>
</motion.p>

<motion.p
  variants={lineVariants}
  className="text-white font-semibold text-base md:text-lg text-justify text-left"
>
  A subsidiary alliance of Sveltoz Solutions Pvt. Ltd.
</motion.p>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center relative overflow-hidden md:overflow-visible">

          {/* Glow */}
          <div
            className="
              absolute
              w-72 h-72
              rounded-full
              bg-[rgba(92,252,0,0.15)]
              blur-[120px]
            "
          />

          <div
            style={{ perspective: "1200px" }}
            className="w-full"
          >
            <motion.div
              className="
                relative
                w-full
                rounded-2xl
                overflow-hidden
                
                shadow-[0_30px_60px_rgba(0,0,0,0.6)]
              "
              initial={{
                opacity: 0,
                x: 120,
                rotateY: -15,
                filter: "blur(12px)",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                rotateY: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 2,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                scale: 1.02,
                rotateY: -2,
                boxShadow: "0 40px 80px rgba(92,252,0,0.15)",
                transition: { duration: 1 },
              }}
            >
              <motion.img
                src="/img/about.webp"
                alt="About Takshion"
                className="w-full h-auto object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 2.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />

              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}