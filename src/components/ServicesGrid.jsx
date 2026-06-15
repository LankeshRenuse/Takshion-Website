"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesGrid() {
  // ===============================
  // STATE MANAGEMENT
  // ===============================
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Brand Accent Color
  const accentColor = "rgba(92,252,0,0.67)";

  // ===============================
  // SERVICES DATA
  // ===============================
  const services = [
    {
      title: "AI / ML SOLUTIONS",
      img: "/RPAS-VID.mp4",
      isVideo: true,
       colSpan: "h-[760px]", // Custom size
      rowSpan: "w-[320px]",
      desc: "Predictive analytics and intelligent automation systems. Real-time data processing and advanced deep learning capabilities.",
      features: [
        "Predictive Analytics",
        "Intelligent Automation",
        "Deep Learning",
        "Data Insights",
      ],
    },
    {
      title: "UAV SOFTWARE",
      img: "/auv-vid.mp4",
      isVideo: true,
     colSpan: "md:col-span-2", // Custom size
      rowSpan: "md:row-span-1",
      desc: "Advanced flight control and telemetry processing.",
      features: [
        "Flight Control",
        "Ground Station",
        "Telemetry",
        "Mission Planning",
      ],
    },
    {
      title: "COMPUTER VISION",
      img: "/auv.jpg",
       colSpan: "md:col-span-2", // Custom size
      rowSpan: "md:row-span-2",
      desc: "Machines interpreting visual data for navigation and recognition.",
      features: [
        "Object Detection",
        "Facial Recognition",
        "Video Analytics",
        "Autonomous Navigation",
      ],
    },
    {
      title: "IOT & IIOT",
      img: "/iot.jpg",
      colSpan: "md:col-span-2", // Custom size
      rowSpan: "md:row-span-2",
      desc: "Real-time monitoring and predictive maintenance for assets.",
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
       colSpan: "md:col-span-2", // Custom size
      rowSpan: "md:row-span-2",
      desc: "Custom UAV design and mission control integration.",
      features: [
        "Custom UAVs",
        "Payload Systems",
        "Mission Control",
        "Autonomous Flight",
      ],
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden text-white font-['Orbitron'] from-black via-slate-950 to-black">
      {/* GRID BACKGROUND EFFECT */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(192,192,192,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(192,192,192,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* ===============================
            SECTION TITLE
        =============================== */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-wider">
            OUR <span style={{ color: accentColor }}>PRODUCTS</span>
          </h2>

          <div
            className="w-24 h-[2px] mt-6 mx-auto"
            style={{ backgroundColor: accentColor }}
          />
        </div>

        {/* ===============================
            SERVICES GRID
        =============================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[240px]">
          {services.map((service, index) => {
            return (
              <motion.div
                key={index}
                layout
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  scale:
                    hoveredIndex === index
                      ? 1.08
                      : hoveredIndex !== null
                        ? 0.95
                        : 1,
                  zIndex: hoveredIndex === index ? 50 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
       onClick={() => setSelectedService(service)}
    className={`
      group relative overflow-hidden rounded-2xl cursor-pointer
      border border-slate-500/30 bg-black/30 backdrop-blur-md
      shadow-[0_0_30px_rgba(192,192,192,0.15)]
      hover:border-slate-300/50 transition-all duration-500
      ${service.colSpan || "md:col-span-1"} 
      ${service.rowSpan || "md:row-span-1"}
      h-[240px] md:h-auto
    `}
              >
                {/* MEDIA */}
                {service.isVideo ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:brightness-75 transition-all duration-500"
                    src={service.img}
                  />
                ) : (
                  <img
                    src={service.img}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:brightness-75 group-hover:scale-110 transition-all duration-700"
                  />
                )}

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* TITLE */}
                <div className="absolute bottom-6 left-6 right-6 transition-all duration-500 group-hover:translate-y-[-6px]">
                  <div
                    className="w-10 h-[2px] mb-3 transition-all duration-500 group-hover:w-24"
                    style={{ backgroundColor: accentColor }}
                  />

                  <h3 className="font-bold text-lg uppercase tracking-wider text-white">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ===============================
          MODAL VIEW
      =============================== */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#0A0A0A] border border-slate-500/30 rounded-2xl w-full max-w-4xl overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 text-gray-400 hover:text-slate-200 text-2xl font-bold bg-black/50 w-10 h-10 rounded-full flex items-center justify-center border border-white/10"
              >
                &times;
              </button>

              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-[450px]">
                  {selectedService.isVideo ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                      src={selectedService.img}
                    />
                  ) : (
                    <img
                      src={selectedService.img}
                      alt={selectedService.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-slate-200 tracking-wide">
                    {selectedService.title}
                  </h2>

                  <p className="mt-4 text-gray-300 leading-relaxed">
                    {selectedService.desc}
                  </p>

                  <div className="mt-8">
                    <h4 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">
                      Key Features
                    </h4>

                    <div className="grid grid-cols-2 gap-3">
                      {selectedService.features.map((f, i) => (
                        <div
                          key={i}
                          className="text-xs border border-slate-500/20 p-3 rounded-xl bg-slate-500/5 flex items-center gap-2 text-gray-200"
                        >
                          <span
                            style={{ color: accentColor }}
                            className="font-bold"
                          >
                            ✓
                          </span>
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
