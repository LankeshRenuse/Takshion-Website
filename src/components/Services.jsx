"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

// Service data structure
const services = [
  {
    title: "AI / ML SOLUTIONS",
    img: "/AI-ML.jpg",
    desc: "Advanced Artificial Intelligence and Machine Learning solutions that enable predictive analytics, intelligent automation, deep learning models, and data-driven decision systems for modern enterprises.",
    features: [
      "Predictive Analytics",
      "Intelligent Automation",
      "Deep Learning",
      "Data Insights",
    ],
  },
  {
    title: "COMPUTER VISION SYSTEMS",
    img: "/computer-vision.jpg",
    desc: "Computer vision technologies that enable machines to interpret and analyze visual data for object detection, facial recognition, video analytics, and autonomous navigation systems.",
    features: [
      "Object Detection",
      "Facial Recognition",
      "Video Analytics",
      "Autonomous Navigation",
    ],
  },
  {
    title: "LLM INTEGRATION SERVICES",
    img: "/llm.jpg",
    desc: "Large Language Model integration services for building intelligent AI assistants, chatbots, knowledge systems, and workflow automation powered by advanced NLP capabilities.",
    features: ["AI Assistants", "Chatbots", "Knowledge Systems", "Automation"],
  },
  {
    title: "IOT & IIOT SOLUTIONS",
    img: "/iot.jpg",
    desc: "IoT and Industrial IoT solutions for real-time monitoring, predictive maintenance, smart automation, and connected asset tracking across industries.",
    features: [
      "Remote Monitoring",
      "Predictive Maintenance",
      "IIOT Automation",
      "Asset Tracking",
    ],
  },
  {
    title: "DRONE DEVELOPMENT",
    img: "/drone.jpg",
    desc: "Custom drone development services including UAV design, payload integration, mission control systems, and autonomous flight capabilities for various applications.",
    features: [
      "Custom UAVs",
      "Payload Systems",
      "Mission Control",
      "Autonomous Flight",
    ],
  },
  {
    title: "DRONE SOFTWARE DEVELOPMENT",
    img: "/drone-software.jpg",
    desc: "Advanced drone software solutions including flight control systems, ground station software, telemetry processing, and mission planning tools.",
    features: [
      "Flight Control",
      "Ground Station",
      "Telemetry",
      "Mission Planning",
    ],
  },
  {
    title: "UAV & UAS SYSTEMS",
    img: "/auv.jpg",
    desc: "Unmanned Aerial Vehicle and System solutions for reconnaissance, mapping, surveillance, and industrial inspection operations.",
    features: ["Reconnaissance", "Mapping", "Inspection", "Surveillance"],
  },
  {
    title: "RPAS TECHNOLOGY",
    img: "/rpas.jpg",
    desc: "Remotely Piloted Aircraft Systems designed for secure remote operations, mission safety, regulatory compliance, and advanced control systems.",
    features: [
      "Remote Operations",
      "Mission Safety",
      "Compliance",
      "Control Systems",
    ],
  },
  {
    title: "UGV AUTONOMOUS SYSTEMS",
    img: "/ugv.jpg",
    desc: "Unmanned Ground Vehicle systems designed for defense, logistics automation, patrol missions, and advanced sensor fusion capabilities.",
    features: ["Defense", "Logistics", "Patrol", "Sensor Fusion"],
  },
  {
    title: "USV AUV & ROV SYSTEMS",
     img: "/auv-vid.mp4",
  isVideo: true,
    desc: "Autonomous surface, underwater, and remotely operated systems for maritime security, underwater mapping, inspection, and ocean research applications.",
    features: [
      "Underwater Mapping",
      "Maritime Security",
      "Inspection",
      "Ocean Research",
    ],
  },
  {
    title: "ROBOTICS & AUTOMATION",
    img: "/robotics.jpg",
    desc: "Industrial robotics and automation solutions powered by AI, machine vision, and intelligent process control systems for modern industries.",
    features: [
      "Industrial Robotics",
      "AI Automation",
      "Machine Vision",
      "Process Control",
    ],
  },
  {
    title: "AGRICULTURE TECHNOLOGY",
    img: "/AGRI.jpg",
    desc: "Smart agriculture solutions including precision farming, crop analytics, drone-based spraying, and AI-driven yield prediction systems.",
    features: [
      "Precision Farming",
      "Crop Analytics",
      "Drone Spraying",
      "Yield Prediction",
    ],
  },
  {
    title: "HOMELAND SECURITY",
    img: "/security.jpg",
    desc: "Advanced homeland security systems for threat detection, border surveillance, command centers, and real-time monitoring solutions.",
    features: [
      "Threat Detection",
      "Border Security",
      "Command Center",
      "Monitoring",
    ],
  },
  {
    title: "MARITIME SECURITY",
    img: "/maritime.jpg",
    desc: "Maritime surveillance and security systems including coastal monitoring, radar integration, vessel tracking, and threat analysis solutions.",
    features: [
      "Coastal Surveillance",
      "Radar Systems",
      "Vessel Tracking",
      "Threat Analysis",
    ],
  },
  {
    title: "GEOSPATIAL INTELLIGENCE",
    img: "/geo.jpg",
    desc: "Geospatial intelligence solutions powered by GIS analytics, drone mapping, satellite data processing, and terrain analysis systems.",
    features: [
      "GIS Analytics",
      "Drone Mapping",
      "Satellite Data",
      "Terrain Analysis",
    ],
  },
  {
    title: "CUSTOM SATELLITE SYSTEMS",
    img: "/satellite.jpg",
    desc: "Custom satellite system solutions for earth observation, remote sensing, communication networks, and advanced space technology applications.",
    features: [
      "Earth Observation",
      "Remote Sensing",
      "Communication",
      "Space Systems",
    ],
  },
];

const loopedServices = [...services, ...services];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
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

/* CARD COMPONENT WITH IMAGE */
const Card = ({ title, features, img, desc }) => (
  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/55 via-[#02050a]/55 to-black backdrop-blur-2xl border border-[rgba(92,252,0,0.67)]/20 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[rgba(92,252,0,0.67)]/40 hover:shadow-[0_0_60px_rgba(92,252,0,0.18)] group h-full w-[78vw] sm:w-[290px] md:w-[340px] lg:w-[380px]">

   <div className="w-full h-48 overflow-hidden border-b border-[rgba(92,252,0,0.67)]/20">

  {img.endsWith(".mp4") ? (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    >
      <source src={img} type="video/mp4" />
    </video>
  ) : (
    <img
      src={img}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
  )}

</div>

    <div className="p-8 text-left relative">
      <h3 className="text-xl font-semibold mb-3 text-white tracking-wide">
        <span className="text-[rgba(92,252,0,0.67)]">{title}</span>
      </h3>

      {/* ✅ ADD DESCRIPTION */}
      {desc && (
        <p className="text-sm text-gray-400 mb-5">
          {desc}
        </p>
      )}

      <div className="space-y-3">
        {features.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-gray-400 group-hover:text-gray-200"
          >
            <span className="text-[rgba(92,252,0,0.67)]">→</span>
            <span className="text-sm">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
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
        scrollRef.current.scrollLeft += 1.5;
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2)
          scrollRef.current.scrollLeft = 0;
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
    <section
      id="services"
      className="py-24 px-3 md:px-6 text-center overflow-hidden"
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-6">
        OUR <span className="text-[rgba(92,252,0,0.67)]">SERVICES</span>
      </h2>
      <p className="text-gray-400 max-w-4xl mx-auto mb-16">
        Discover our end-to-end technology expertise.
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
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  onMouseDown={(e) => {
    const node = scrollRef.current;
    if (!node) return;
    isDragging.current = true;
    startX.current = e.pageX - node.offsetLeft;
    scrollLeftStart.current = node.scrollLeft;
  }}
  onMouseUp={() => (isDragging.current = false)}
  onMouseMove={(e) => {
    const node = scrollRef.current;
    if (!isDragging.current || !node) return;
    const walk = (e.pageX - (node.offsetLeft + startX.current)) * 1.5;
    node.scrollLeft = scrollLeftStart.current - walk;
  }}
  // 1. Remove 'scrollbar-hide' from className
  className="flex gap-6 overflow-x-auto py-8 px-4 cursor-grab"
  
  // 2. Add these styles directly to hide the bar
  style={{
    scrollbarWidth: "none",      /* Firefox */
    msOverflowStyle: "none",     /* IE and Edge */
  }}
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {/* Add this small style block inside the div to handle Chrome/Safari */}
  <style jsx>{`
    div::-webkit-scrollbar {
      display: none;
    }
  `}</style>

  {loopedServices.map((service, index) => (
    <motion.div
      key={index}
      className="flex-shrink-0"
      variants={cardVariants}
    >
  <Card
  title={service.title}
  features={service.features}
  img={service.img}
  desc={service.desc}
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
