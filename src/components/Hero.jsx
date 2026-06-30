"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ShieldCheck,
  Plane,
  Cpu,
  Bot,
  Ship,
  Waves,
  Radar,
  Map,
  Brain,
  Code,
  Scan,
  Sprout,
  Navigation,
  Package,
  Camera,
  Activity,
} from "lucide-react";

const responsiveSrc = (src, width) => src.replace(/\.[^.]+$/, `-${width}.webp`);
const responsiveSrcSet = (src) =>
  `${responsiveSrc(src, 480)} 480w, ${responsiveSrc(src, 768)} 768w`;

const clampText = (text, maxLength = 160) => {
  return text.length > maxLength ? text.slice(0, maxLength - 3) + "..." : text;
};

const slides = [
  {
 
    title: "TAKSHION KISAN",
    subtitle: "The most Stable and Safest Agri Drone that you can ever fly.",
    image: "/img/kisan.webp",
    bg: "/img/drone.webp",
    stats: [
      {
        icon: Sprout,
        value: "10L",
        label: "Payload Capacity",
      },
      {
        icon: Map,
        value: "1.6 Acres",
        label: "Per Flight Coverage",
      },
      {
        icon: Brain,
        value: "AI Missions",
        label: "Autonomous Spraying",
      },
      {
        icon: Navigation,
        value: "Dual GPS",
        label: "Precision Navigation",
      },
    ],
  },
  {
    title: "TAKSHION SENTINEL",
    subtitle:
      "A long-endurance VTOL platform developed for persistent surveillance, logistics, and beyond-visual-line-of-sight operations. Combining fixed-wing efficiency with vertical takeoff capability, SENTINEL delivers extended range, operational flexibility, and rapid deployment across diverse mission profiles.",
    image: "/img/sentinel.webp",
    bg: "/img/sentinel-bg.webp",
    stats: [
      {
        icon: Plane,
        value: "VTOL",
        label: "Efficient flying",
      },
      {
        icon: Radar,
        value: "BVLOS",
        label: "Long-Range Missions",
      },
      {
        icon: Camera,
        value: "Thermal",
        label: "Surveillance",
      },
      {
        icon: Package,
        value: "Logistics",
        label: "Payload Delivery",
      },
    ],
  },
  {
    title: "TAKSHION KRAKEN",
    subtitle:
      "A modular autonomous surface vessel designed for maritime surveillance, disaster response, environmental monitoring, and logistics support. With scalable fleet operations, intelligent mission management, and rapid payload integration, KRAKEN provides a versatile platform for modern marine operations.",
    image: "/img/kraken.webp",
    bg: "/img/kraken-bg.webp",
    stats: [
      {
        icon: Ship,
        value: "Swarm AI",
        label: "Fleet Coordination",
      },
      {
        icon: Radar,
        value: "EO/IR",
        label: "Maritime Awareness",
      },
      {
        icon: Brain,
        value: "Edge AI",
        label: "Flood Reconnaissance",
      },
      {
        icon: Package,
        value: "Modular",
        label: "Payload Interface",
      },
    ],
  },
  {
    title: "TAKSHION HYDRA",
    subtitle:
      "An autonomous underwater platform engineered for subsea exploration, inspection, and data collection. Combining sonar-based perception, intelligent navigation, and advanced sensor fusion, HYDRA delivers reliable operations in complex underwater environments where conventional systems cannot operate.",
    image: "/img/hydra.webp",
    bg: "/img/hydra-bg.webp",
    stats: [
      {
        icon: Navigation,
        value: "INS+DVL",
        label: "Autonomous Navigation",
      },
      {
        icon: Waves,
        value: "Multi-Beam",
        label: "Seafloor Mapping",
      },
      {
        icon: Scan,
        value: "Sonar AI",
        label: "Underwater Perception",
      },
      {
        icon: Activity,
        value: "Subsea",
        label: "Survey Operations",
      },
    ],
  },

  {
    title: "TAKSHION KRAIT",
    subtitle:
      "An advanced FPV autonomous aerial platform designed for high-speed operations in dynamic and GPS-challenged environments. Built around AI-assisted navigation and modular mission architecture, KRAIT enables rapid deployment and adaptable mission execution.",
    image: "/img/krait.webp",
    bg: "/img/krait-bg.webp",
    stats: [
      {
        icon: Brain,
        value: "Edge AI",
        label: "Onboard Intelligence",
      },
      {
        icon: Camera,
        value: "FPV",
        label: "Real-Time updates",
      },
      {
        icon: Navigation,
        value: "Resilient Nav",
        label: "GPS-Denied Operations",
      },
      {
        icon: Bot,
        value: "Autonomous",
        label: "Mission Execution",
      },
    ],
  },
  {
    title: "ROBOTICS & AUTOMATION",
    subtitle:
      "Leveraging autonomous mobility, machine perception, RFID-enabled asset intelligence, and AI-powered navigation support, our solutions deliver operational awareness in logistics support and transformation across enterprise environments.",
    image: "/img/robot.webp",
    bg: "/img/robot-bg.webp",
    stats: [
      { icon: Bot, value: "Robotics", label: "Autonomous Mobility" },
      { icon: Scan, value: "Vision AI", label: "Machine Perception" },
      { icon: Cpu, value: "Cobots", label: " Human Collaboration" },
      { icon: Brain, value: "AI", label: "Decision Support" },
    ],
  },

  {
    title: "AI ML SOLUTIONS",
    subtitle:
      "We build AI-powered systems that transform raw data into actionable insights through deep learning, intelligent algorithms, and real-time analytics.",
    image: "/img/AI-ML.webp",
    bg: "/img/AI-bg.webp",
    stats: [
  { icon: Brain, value: "Neural AI", label: "Deep Learning" },
  { icon: Bot, value: "NLP", label: "GenAI" },
  { icon: Activity, value: "Insights", label: "Data Intelligence" },
  { icon: Cpu, value: "RAG ", label: "AI Workflows" },
]
  },

  {
    title: "DRONE SOFTWARE DEVELOPMENT",
    subtitle:
      "Advanced software architecture for professional drone fleets. Our stack includes secure mission planning, real-time telemetry processing, automated flight controllers, and robust fleet management suites.",
    image: "/img/Drone-software.webp",
    bg: "/img/drone-software-bg.webp",
    stats: [
  { icon: Code, value: "Mission Apps", label: "Planning Software" },
  { icon: Radar, value: "Telemetry", label: "Live Monitoring" },
  { icon: Navigation, value: "Flight Control", label: "Autonomous Systems" },
  { icon: ShieldCheck, value: "Secure", label: "Fleet Management" }
]
  }
];
export default function Hero() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setCurrent((prev) => (prev + 1) % slides.length);
      }

      if (e.key === "ArrowLeft") {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      }
    };

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const handleDragEnd = (event, info) => {
    const offsetX = info.offset.x;
    const velocityX = info.velocity.x;

    if (offsetX < -80 || velocityX < -500) {
      setCurrent((prev) => (prev + 1) % slides.length);
    }

    if (offsetX > 80 || velocityX > 500) {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] lg:min-h-screen overflow-hidden flex items-center justify-center bg-black touch-pan-y"
      onTouchStart={(e) => (window.touchStartX = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const endX = e.changedTouches[0].clientX;
        const diff = window.touchStartX - endX;

        if (diff > 60) {
          setCurrent((prev) => (prev + 1) % slides.length);
        }

        if (diff < -60) {
          setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
        }
      }}
    >
      {/* BACKGROUND IMAGE CAROUSEL FX */}
      {/* Added "hidden lg:block" to hide this whole section on screens smaller than 1024px */}
      <div className="absolute inset-0 z-0 overflow-hidden hidden lg:block">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
  src={slide.bg || slide.image}
  srcSet={responsiveSrcSet(slide.bg || slide.image)}
  sizes="100vw"
  alt=""
  loading="lazy"
  decoding="async"
  fetchPriority="low"
  className="w-full h-full object-cover object-center scale-105 blur-sm opacity-40"
/>
            <div className="absolute inset-0 bg-gradient-to-b from-[#010712]/40 via-black/40 to-black" />
          </motion.div>
        </AnimatePresence>

        {/* GREEN GLOW AMBIENCE - Also hidden on mobile/tablet */}
        <div className="absolute top-[-200px] left-[-200px] w-[550px] h-[550px] bg-green-500/10 blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[550px] h-[550px] bg-emerald-500/10 blur-[180px] rounded-full pointer-events-none" />
      </div>

      {/* MAIN CONTENT LAYOUT CONTAINER */}
      <div className="relative z-[5] w-full max-w-[1370px] xl:max-w-[1480px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-10 sm:py-12 md:py-14 lg:py-4 lg:translate-x-1 xl:translate-x-4 2xl:translate-x-6 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-7 sm:gap-8 md:gap-10 lg:gap-4 xl:gap-6 2xl:gap-8 items-center lg:text-left">
        {/* LEFT CONTENT COLUMN */}
        <div className="flex flex-col justify-center min-h-0 md:min-h-[500px] mt-14 md:mt-8 lg:mt-24 lg:pr-2 xl:pr-4 2xl:pr-6">
   <div className="mb-4 sm:mb-5">
  <span
    className="block uppercase text-sm font-semibold tracking-[2px]"
    style={{ color: "rgba(92, 252, 0, 0.67)" }}
  >
    TAKSHION DEEPTECH PVT. LTD.
  </span>
</div>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* title */}
              <h1 className="leading-tight max-w-[900px] text-center sm:text-left">
                {/* FIRST LINE */}
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-white/90">
                  {slide.title.split(" ").slice(0, -1).join(" ")}
                </span>

                {/* LAST WORD GREEN */}
                <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-[rgba(92,252,0,0.67)] ">
                  {slide.title.split(" ").slice(-1)}
                </span>
              </h1>

              {/* Gradient line */}
              <div className="h-[2px] w-[130px] rounded-full mt-5 sm:mt-6 mx-auto sm:mx-0 bg-gradient-to-r from-[#95E60E] to-[rgba(92,252,0,0.67)]" />

              {/* Subtitle */}
              <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-white/70 max-w-2xl leading-relaxed text-center sm:text-left   text-justify
    sm:text-justify">
                {slide.subtitle}
              </p>
              {current === 0 && (
                <div className="mt-8 text-xs text-white/20 sm:hidden text-center">
                  ← Swipe left or right to change →
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-start text-left gap-3 sm:gap-4 mt-7 sm:mt-10">
            <button
              onClick={() => scrollToSection("services")}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[rgba(92,252,0,0.67)] text-black font-semibold transition-all duration-300 hover:bg-[rgba(92,252,0,0.67)] hover:shadow-[0_0_20px_rgba(112,185,24,0.8),0_0_50px_rgba(112,185,24,0.5)]"
            >
              Explore Services
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-[rgba(92,252,0,0.67)]/30 bg-[rgba(92,252,0,0.67)]/5 text-white backdrop-blur-md transition-all duration-300 hover:border-[#95E60E] hover:bg-[rgba(92,252,0,0.67)]/10 hover:shadow-[0_0_25px_rgba(112,185,24,0.7),0_0_60px_rgba(112,185,24,0.4)] hover:-translate-y-1"
            >
              Contact Us
            </button>
          </div>

          {/* STATS icon */}
          <div className="mt-8 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 min-h-[60px] w-full max-w-3xl">
            {slide.stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-start gap-1.5 rounded-xl border border-[rgba(92,252,0,0.67)]/15 bg-white/[0.03] p-2 transition-all duration-300 hover:border-[rgba(92,252,0,0.67)]/35 hover:bg-[rgba(92,252,0,0.67)]/5 lg:rounded-none lg:border-y-0 lg:border-l-0 lg:pr-2 lg:border-r lg:last:border-r-0 lg:bg-transparent lg:p-0"
                >
                  <Icon
                    size={22}
                    strokeWidth={1.8}
                    className="mt-0.5 text-[rgba(92,252,0,0.67)] drop-shadow-[0_0_10px_rgba(92,252,0,0.45)] shrink-0"
                  />

                  <div className="min-w-0">
                    <h3 className="text-white font-semibold text-xs sm:text-sm leading-tight break-words">
                      {item.value}
                    </h3>

                    <p className="text-[10px] sm:text-[11px] text-white/60 leading-snug">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.image}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={handleDragEnd}
              whileTap={{ cursor: "grabbing" }}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative flex w-full max-w-[420px] sm:max-w-[520px] md:max-w-none lg:max-w-[500px] xl:max-w-[540px] 2xl:max-w-[580px] flex-col items-center justify-center mt-1 sm:mt-2 md:mt-6 lg:justify-start lg:ml-0 lg:mt-[80px] xl:mt-[88px] 2xl:mt-[96px]"
            >
              {/* GLOWS - These will now move/animate with the frame */}
              <div className="absolute -inset-1 sm:-inset-2 md:-inset-2 bg-[rgba(92,252,0,0.67)]/25 sm:bg-[rgba(92,252,0,0.67)]/30 blur-[45px] sm:blur-[70px] md:blur-[80px] rounded-full " />

              {/* FRAME */}
              <div className="relative md:-mt-10 w-full max-w-[570px] lg:max-w-[500px] xl:max-w-[540px] 2xl:max-w-[580px] overflow-hidden rounded-[20px] border border-white/10 backdrop-blur-xl bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
                <img
    src={slide.image}
    srcSet={responsiveSrcSet(slide.image)}
    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 70vw, 580px"
    alt={slide.title}
    loading="eager"
    fetchPriority="high"
    decoding="async"
                    className="h-[300px] sm:h-[360px] md:h-[410px] lg:h-[360px] xl:h-[390px] 2xl:h-[420px] w-full object-cover object-center"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </AnimatePresence>

        
    {/* Slider Dots Below Image */}
<div className="flex justify-center gap-3 mt-5 sm:mt-6 w-full max-w-[570px] lg:max-w-[500px] xl:max-w-[540px] 2xl:max-w-[580px] mx-auto">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-8 bg-[rgba(92,252,0,0.67)]"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
