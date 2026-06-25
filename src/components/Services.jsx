"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "DRONE DEVELOPMENT",
    image: "/img/drone.webp",
    desc: "From concept to deployment, we provide customized drone systems featuring embedded electronics, flight control technologies, and scalable autonomous capabilities.",
    features: ["Custom UAVs Design", " Customized Payload Systems", "Autonomous Navigation", "Crash & Analyze Log"],
  },
  {
    title: "AIML SOLUTIONS",
    image: "/img/AI-ML.webp",
    desc: "We build AI-powered systems that transform raw data into actionable insights through deep learning, intelligent algorithms, and real-time analytics.",
    features: ["Predictive Analytics", "Intelligent Automation", "Deep Learning", "Data Insights"],
  },
  {
    title: "LLM INTEGRATION SERVICES",
    image: "/img/llm.webp",
    desc: "Large Language Model integration services for building intelligent AI assistants, conversational platforms, knowledge systems, and workflow automation solutions.",
    features: ["Workflow Automation", "API Integration", "RAG Systems", "Multi-Agent AI"],
  },
  {
    title: "IOT & IIOT SOLUTIONS",
    image: "/img/iot.webp",
    desc: "IoT and Industrial IoT solutions designed for real-time monitoring, predictive maintenance, smart connectivity, and intelligent asset management.",
    features: ["Remote Monitoring", "Industrial Automation", "Real-Time Analytics", "Predictive Maintenance"],
  },
  {
    title: "UAV & UAS SYSTEMS",
    image: "/img/uav.webp",
    desc: "Comprehensive UAV and UAS solutions for surveillance, mapping, inspection, reconnaissance, and mission-critical aerial operations.",
    features: ["Surveillance Operations", "Aerial Mapping", "Search & Rescue", "Industrial Inspection"],
  },
  {
    title: "ROBOTICS & AUTOMATION",
    image: "/img/robot.webp",
    desc: "Leveraging autonomous mobility, machine perception, RFID-enabled asset intelligence, & AI-powered navigation support, our solutions deliver operational awareness in logistics support & transformation across enterprise environments.",
    features: ["Industrial Robotics", "AI Automation", "Machine Vision", "Process Control"],
  },
  {
    title: "HOMELAND SECURITY",
    image: "/img/homeland.webp",
    desc: "Our technologies enable real-time intelligence gathering and rapid decision-making for enhanced national and public safety.",
    features: ["Situational Awareness", "Border Security", "Emergency Response", "Intelligence Analysis"],
  },
  {
    title: "MARITIME SECURITY",
    image: "/img/meritime.webp",
    desc: "Leveraging modern surveillance technologies, we deliver scalable solutions for navigation support, threat assessment, and coastal protection.",
    features: ["Coastal Surveillance", "Vessel Traking", "Fleet Management", "Navigation Support"],
  },
  {
    title: "GEOSPATIAL INTELLIGENCE",
    image: "/img/geo.webp",
    desc: "Combining satellite data, GIS technologies, and aerial intelligence, we deliver comprehensive spatial analytics for enhanced operational awareness.",
    features: ["GIS Analytics", "DTM & DSM Model", "Image Processing", "Remote Sensing"],
  },
];

const loopedServices = [...services, ...services];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 120, scale: 0.8, rotateX: 30, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const Card = ({ title, desc, features, image }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/55 via-[#02050a]/55 to-black backdrop-blur-2xl border border-[rgba(92,252,0,0.67)]/20 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[rgba(92,252,0,0.67)]/40 hover:shadow-[0_0_60px_rgba(92,252,0,0.18)] group flex flex-col h-[510px] w-[350px] sm:w-[400px] md:w-[420px]">

      
{/* Background Image */}
<div className="absolute inset-0">
  <img
    src={image}
    alt={title}
    className="
      w-full
      h-full
      object-cover
      opacity-25
      scale-110
      transition-all
      duration-700
    "
  />
</div>

{/* Dark Overlay */}
<div className="absolute inset-0 bg-black/40" />



      <div className="p-8 flex flex-col h-full relative z-10">

        <h3 className="text-3xl font-bold mb-6 text-[rgba(92,252,0,0.67)] uppercase leading-tight tracking-tight">
          {title}
        </h3>

        {desc && (
          <p className="text-[16px] pt-2 text-gray-300 mb-3 leading-relaxed">
            {desc}
          </p>
        )}

        <div className="space-y-2 pt-2 border-t border-[rgba(92,252,0,0.1)] mt-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-gray-300 group-hover:text-white transition-colors"
            >
              <span className="text-3xl text-[rgba(92,252,0,0.67)] font-bold">
                »
              </span>
              <span className="text-base md:text-lg font-medium">{item}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default function Services() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const isButtonScrolling = useRef(false);
  const buttonScrollTimeout = useRef();

  useEffect(() => {
    let animationFrame;

    const autoScroll = () => {
      if (!scrollRef.current) return;

      if (!isHovered && !isDragging.current && !isButtonScrolling.current) {
        scrollRef.current.scrollLeft += 0.90;

        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const node = scrollRef.current;
    isButtonScrolling.current = true;

    node.style.scrollBehavior = "smooth";

    const amount = 380;
    node.scrollLeft += direction === "left" ? -amount : amount;

    clearTimeout(buttonScrollTimeout.current);

    buttonScrollTimeout.current = setTimeout(() => {
      isButtonScrolling.current = false;
      if (scrollRef.current) scrollRef.current.style.scrollBehavior = "auto";
    }, 500);
  };

  return (
    <section id="services" className="py-16 px-3 md:px-6 text-center overflow-hidden scroll-mt-[-60px]">

      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="text-white">OUR </span>
        <span className="text-[rgba(92,252,0,0.67)]">SERVICES</span>
      </h2>

      <p className="text-gray-400 max-w-4xl mx-auto mb-10">
        We deliver cutting-edge solutions across AI, Robotics, UAV Systems, IoT,
        Enterprise Software, and Security Platforms.
      </p>

      <div className="relative w-full max-w-[1300px] mx-auto flex items-center">

        <button
          onClick={() => scroll("left")}
          className="absolute left-2 z-30 w-10 h-10 rounded-full border border-[rgba(92,252,0,0.67)]/40 bg-black/70 text-[rgba(92,252,0,0.67)] hover:bg-[rgba(92,252,0,0.67)] hover:text-black"
        >
          ←
        </button>

        <motion.div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pt-2 py-2 px-4 cursor-grab select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onPointerEnter={() => setIsHovered(true)}
          onPointerLeave={() => setIsHovered(false)}
          onPointerDown={(e) => {
            const node = scrollRef.current;
            isDragging.current = true;
            node.setPointerCapture(e.pointerId);
            startX.current = e.pageX;
            scrollLeftStart.current = node.scrollLeft;
          }}
          onPointerUp={(e) => {
            isDragging.current = false;
            scrollRef.current?.releasePointerCapture(e.pointerId);
          }}
          onPointerMove={(e) => {
            if (!isDragging.current || !scrollRef.current) return;

            const walk = (e.pageX - startX.current) * 1.5;
            scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {loopedServices.map((service, index) => (
            <motion.div key={index} className="flex-shrink-0" variants={cardVariants}>
              <Card
                title={service.title}
                desc={service.desc}
                features={service.features}
                image={service.image}
              />
            </motion.div>
          ))}
        </motion.div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 z-30 w-10 h-10 rounded-full border border-[rgba(92,252,0,0.67)]/40 bg-black/70 text-[rgba(92,252,0,0.67)] hover:bg-[rgba(92,252,0,0.67)] hover:text-black"
        >
          →
        </button>

      </div>
    </section>
  );
}