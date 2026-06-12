"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { BadgeCheck, Users, Cpu, Bot } from "lucide-react";

const slides = [
  {
    title: "AI / ML SOLUTIONS",
    subtitle:
      "Artificial Intelligence (AI) and Machine Learning (ML) solutions designed to automate decision-making, predictive analytics, intelligent workflows and advanced business operations. Our systems transform raw data into actionable insights while improving efficiency, accuracy and scalability across industries.",
    image: "/auv-vid.mp4",
    bg: "/Takshion-vid.mp4",
    isVideo: true,
  },

  {
    title: "COMPUTER VISION SYSTEMS",
    subtitle:
      "Computer Vision solutions that enable machines to interpret images, videos and real-world environments. From object detection and facial recognition to industrial inspection and autonomous navigation, we build intelligent visual systems for next-generation applications.",
    image: "/computer-vision.jpg",
    bg: "/computer-vision-bg.jpg",
  },

  {
    title: "LLM INTEGRATION SERVICES",
    subtitle:
      "Large Language Model (LLM) integration solutions powered by modern AI technologies. We develop intelligent assistants, chatbots, enterprise knowledge systems and AI-powered automation platforms using advanced language understanding and reasoning capabilities.",
    image: "/llm.jpg",
    bg: "/llm-bg.jpg",
  },

  {
    title: "IOT & IIOT SOLUTIONS",
    subtitle:
      "Internet of Things (IoT) and Industrial Internet of Things (IIoT) platforms connecting devices, sensors and industrial equipment. We deliver real-time monitoring, predictive maintenance, automation and smart infrastructure solutions.",
    image: "/iot.jpg",
    bg: "/iot-bg.jpg",
  },

  {
    title: "DRONE DEVELOPMENT",
    subtitle:
      "End-to-end drone design, development and deployment solutions for commercial, industrial, defense and research applications. We develop advanced drone platforms, payload systems, autonomous navigation technologies and mission-specific UAV solutions.",
    image: "/drone.jpg",
    bg: "/drone-bg.jpg",
  },

  {
    title: "DRONE SOFTWARE DEVELOPMENT",
    subtitle:
      "Custom drone software including flight control systems, mission planning software, telemetry platforms, fleet management systems and autonomous navigation technologies. Built for reliability, scalability and real-time operations.",
    image: "/drone-software.jpg",
    bg: "/drone-software-bg.jpg",
  },

  {
    title: "UAV & UAS SYSTEMS",
    subtitle:
      "Unmanned Aerial Vehicle (UAV) and Unmanned Aircraft System (UAS) solutions for surveillance, mapping, inspection, agriculture, defense and intelligent aerial operations. Integrated with advanced sensors, AI and autonomous flight capabilities.",
    image: "/uav.jpg",
    bg: "/uav-bg.jpg",
  },

  {
    title: "RPAS TECHNOLOGY",
    subtitle:
      "Remotely Piloted Aircraft Systems (RPAS) designed for secure and efficient remote operations. Our RPAS solutions support surveillance, monitoring, inspection, defense and industrial missions with high reliability and operational control.",
    image: "/RPAS.jpg",
    bg: "/rpas-bg.jpg",
  },

  {
    title: "UGV AUTONOMOUS SYSTEMS",
    subtitle:
      "Unmanned Ground Vehicle (UGV) platforms developed for defense, logistics, surveillance, industrial automation and hazardous environment operations. Designed with intelligent navigation and autonomous mission capabilities.",
    image: "/ugv.jpg",
    bg: "/ugv-bg.jpg",
  },

  {
    title: "USV AUV & ROV SYSTEMS",
    subtitle:
      "Unmanned Surface Vehicles (USV), Autonomous Underwater Vehicles (AUV) and Remotely Operated Vehicles (ROV) for maritime security, underwater inspection, ocean research, offshore operations and defense applications.",
    image: "/auv-vid.mp4",
    isVideo: true,
    bg: "/auv-vid.mp4",
  },

  {
    title: "ROBOTICS & AUTOMATION",
    subtitle:
      "Advanced robotics and automation solutions for manufacturing, industrial operations, logistics, inspection and intelligent process control. Our systems increase productivity, precision and operational efficiency through intelligent automation.",
    image: "/robotics.jpg",
    bg: "/robotics-bg.jpg",
  },

  {
    title: "AGRICULTURE TECHNOLOGY",
    subtitle:
      "Smart agriculture solutions powered by drones, AI, IoT and data analytics. We help modern farms improve crop monitoring, precision spraying, irrigation management, yield optimization and overall agricultural productivity.",
    image: "/AGRI.jpg",
    bg: "/agri-bg.jpg",
  },

  {
    title: "HOMELAND SECURITY",
    subtitle:
      "Integrated homeland security systems including surveillance platforms, AI-powered monitoring, threat detection, border protection and critical infrastructure security solutions designed for modern security challenges.",
    image: "/security.jpg",
    bg: "/security-bg.jpg",
  },

  {
    title: "MARITIME SECURITY",
    subtitle:
      "Advanced maritime surveillance, vessel monitoring, coastal protection and autonomous marine security systems. Designed to enhance maritime domain awareness, threat detection and operational security.",
    image: "/maritime.jpg",
    bg: "/maritime-bg.jpg",
  },

  {
    title: "GEOSPATIAL INTELLIGENCE",
    subtitle:
      "Geospatial Intelligence (GEOINT) solutions combining satellite imagery, drone mapping, GIS analytics and location-based intelligence. Supporting defense, infrastructure, urban planning and environmental monitoring applications.",
    image: "/geo.jpg",
    bg: "/geo-bg.jpg",
  },

  {
    title: "CUSTOM SATELLITE SYSTEMS",
    subtitle:
      "Design and development of custom satellite systems, payload integration, communication platforms and space technology solutions. Built for scientific research, earth observation, communication and specialized mission requirements.",
    image: "/satellite.jpg",
    bg: "/satellite-bg.jpg",
  },
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

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, []);
  
  const stats = [
    {
      icon: BadgeCheck,
      value: "16+ Years",
      label: "Industry Experience",
    },
    {
      icon: Users,
      value: "300+",
      label: "Satisfied Clients",
    },
   {
  
    icon: Cpu,
    value: "AI • ML • UAS",
    label: "Intelligent Systems",
  },
  {
    icon: Bot,
    value: "Drones & Robotics",
    label: "Autonomous Platforms",
  },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[70vh] lg:min-h-screen overflow-hidden flex items-center justify-center bg-black"
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
            transition={{ duration: 1.0 }}
            className="absolute inset-0"
          >
           {slide.isVideo ? (
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover blur-sm opacity-30"
  >
    <source src={slide.bg || slide.image} type="video/mp4" />
  </video>
) : (
  <img
    src={slide.bg || slide.image}
    alt="background"
    className="w-full h-full object-cover blur-sm opacity-30"
  />
)}
            <div className="absolute inset-0 bg-gradient-to-b from-[#010712]/40 via-black/40 to-black" />
          </motion.div>
        </AnimatePresence>

        {/* GREEN GLOW AMBIENCE - Also hidden on mobile/tablet */}
        <div className="absolute top-[-250px] left-[-250px] w-[650px] h-[650px] bg-green-500/10 blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-250px] right-[-250px] w-[650px] h-[650px] bg-emerald-500/10 blur-[180px] rounded-full pointer-events-none" />
      </div>

      {/* MAIN CONTENT LAYOUT CONTAINER */}
      <div className="relative z-[5] w-full max-w-[1370px] mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-10 sm:py-12 md:py-14 lg:py-4 grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-8 md:gap-10 lg:gap-6 items-center lg:text-left">
        {/* LEFT CONTENT COLUMN */}
        <div className="flex flex-col justify-center min-h-0 md:min-h-[500px] mt-14 md:mt-8 lg:mt-24 lg:-ml-0 xl:-ml-8 2xl:-ml-12">
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-4 sm:mb-5">
          <span
  className="translate-x-1 uppercase text-sm font-['Rajdhani'] font-semibold tracking-[2px]"
  style={{ color: "rgba(92, 252, 0, 0.67)" }}
>
  TAKSHION MACHATRONICS PVT. LTD.
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
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-['Orbitron'] font-bold text-white/90">
                  {slide.title.split(" ").slice(0, -1).join(" ")}
                </span>

                {/* LAST WORD GREEN */}
                <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold font-['Orbitron'] text-[rgba(92,252,0,0.67)] ">
                  {slide.title.split(" ").slice(-1)}
                </span>
              </h1>

              {/* Gradient line */}
              <div className="h-[2px] w-[130px] rounded-full mt-5 sm:mt-6 mx-auto sm:mx-0 bg-gradient-to-r from-[#95E60E] to-[rgba(92,252,0,0.67)]" />

              {/* Subtitle */}
             <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg font-['Exo_2'] text-white/70 max-w-xl leading-relaxed text-center sm:text-left">
                {slide.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-start text-left gap-3 sm:gap-4 mt-7 sm:mt-10">
            <button
              onClick={() => scrollToSection("services")}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[rgba(92,252,0,0.67)] text-black font-semibold transition-all duration-300 hover:bg-[rgba(92,252,0,0.67)] hover:shadow-[0_0_20px_rgba(112,185,24,0.8),0_0_50px_rgba(112,185,24,0.5)]">
              Explore Services
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-[rgba(92,252,0,0.67)]/30 bg-[rgba(92,252,0,0.67)]/5 text-white backdrop-blur-md transition-all duration-300 hover:border-[#95E60E] hover:bg-[rgba(92,252,0,0.67)]/10 hover:shadow-[0_0_25px_rgba(112,185,24,0.7),0_0_60px_rgba(112,185,24,0.4)] hover:-translate-y-1">
              Contact Us
            </button>
          </div>

          {/* STATS icon */}
          <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4 min-h-[60px]">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-cover gap-2 sm:gap-2 rounded-xl border border-white/10 sm:rounded-none sm:border-y-0 sm:border-l-0 sm:pr-2 sm:border-r sm:last:border-r-0 bg-white/[0.03] sm:bg-transparent p-2 sm:p-0"
                >
                  <Icon
                    size={30}
                    className="text-[rgba(92,252,0,0.67)] drop-shadow-[0_0_10px_rgba(34,197,94,0.5)] shrink-0"
                  />

                  <div className="min-w-0">
                    <h3 className="text-white font-semibold text-sm sm:text-base break-words">
                      {item.value}
                    </h3>

                    <p className="text-xs text-white/60 leading-snug">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.image} // Key must be on the parent to trigger re-render
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative flex w-full max-w-[420px] sm:max-w-[520px] md:max-w-none flex-col items-center justify-center mt-1 sm:mt-2 md:mt-6 lg:justify-start lg:ml-0 lg:mt-[80px] xl:ml-[42px] xl:mt-[100px] 2xl:ml-[42px] 2xl:mt-[110px]"
            >
              {/* GLOWS - These will now move/animate with the frame */}
              <div className="absolute -inset-1 sm:-inset-2 md:-inset-2 bg-[rgba(92,252,0,0.67)]/25 sm:bg-[rgba(92,252,0,0.67)]/30 blur-[45px] sm:blur-[70px] md:blur-[80px] rounded-full " />

              {/* FRAME */}
              <div className="relative w-full max-w-[570px] overflow-hidden rounded-[20px] border border-white/10 backdrop-blur-xl bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
                {slide.isVideo ? (
  <video
    autoPlay
    muted
    loop
    playsInline
    className="h-[300px] sm:h-[360px] md:h-[410px] w-full object-cover"
  >
    <source src={slide.image} type="video/mp4" />
  </video>
) : (
  <img
    src={slide.image}
    alt={slide.title}
    className="h-[300px] sm:h-[360px] md:h-[410px] w-full object-cover"
  />
)}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Dots Below Image */}
          <div className="flex justify-center lg:justify-start lg:ml-[20px] xl:ml-[300px] 2xl:ml-[190px] gap-3 mt-5 sm:mt-6 w-full lg:w-auto">
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
