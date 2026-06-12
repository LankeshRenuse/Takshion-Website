
"use client";

import { useState } from "react";

const services = [
  {
    title: "AI / ML SOLUTIONS",
    img: "/auv-vid.mp4",
    isVideo: true,
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
    img: "/uav.jpg",
    desc: "Unmanned Aerial Vehicle and System solutions for reconnaissance, mapping, surveillance, and industrial inspection operations.",
    features: ["Reconnaissance", "Mapping", "Inspection", "Surveillance"],
  },
  {
    title: "RPAS TECHNOLOGY",
    img: "/RPAS.jpg",
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
    img: "/AUV.jpg",
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
export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState(null);

 const getCardSize = (index) => {
  const layouts = [
    "col-span-12 md:col-span-6 row-span-2",
    "col-span-12 md:col-span-3",
    "col-span-12 md:col-span-3",

    "col-span-6 md:col-span-4",
    "col-span-6 md:col-span-2",
    "col-span-6 md:col-span-3",

    "col-span-6 md:col-span-5",
    "col-span-6 md:col-span-2",
    "col-span-6 md:col-span-3",

    "col-span-6 md:col-span-4",
    "col-span-6 md:col-span-2",
    "col-span-6 md:col-span-3",

    "col-span-6 md:col-span-5",
    "col-span-6 md:col-span-2",
    "col-span-6 md:col-span-4",

    "col-span-6 md:col-span-3 row-span-2",
  ];

  return layouts[index];
};

  return (
    <section className="relative py-24 overflow-hidden">
  
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(92,252,0,0.12),transparent_70%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(92,252,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(92,252,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-lime-400 uppercase tracking-[4px] text-sm font-semibold">
              Advanced Technologies
            </span>

            <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
              Our Core Capabilities
            </h2>

            <div className="w-32 h-[2px] bg-lime-400 mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-12 gap-4 auto-rows-[180px]">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setSelectedService(service)}
                className={`${getCardSize(index)}
            cursor-pointer
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-lime-500/20`}
              >
               {service.isVideo ? (
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src={service.img} type="video/mp4" />
  </video>
) : (
  <img
    src={service.img}
    alt={service.title}
    className="absolute inset-0 w-full h-full object-cover"
  />
)}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-lime-500/10 backdrop-blur-[2px]" />

                <div className="absolute inset-0 border border-lime-400/10 group-hover:border-lime-400/60 rounded-2xl transition-all duration-500" />

                <div className="absolute top-2 left-2 w-8 h-8 border-l border-t border-lime-400/50" />
                <div className="absolute top-2 right-2 w-8 h-8 border-r border-t border-lime-400/50" />
                <div className="absolute bottom-2 left-2 w-8 h-8 border-l border-b border-lime-400/50" />
                <div className="absolute bottom-2 right-2 w-8 h-8 border-r border-b border-lime-400/50" />

                <div className="absolute bottom-0 p-5">
                  <div className="w-10 h-[2px] bg-lime-400 mb-3" />

                  <h3 className="text-white font-semibold text-sm md:text-lg">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedService && (
          <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative max-w-6xl w-full bg-[#0A0A0A] border border-lime-500/30 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(92,252,0,0.2)]">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute right-5 top-4 text-white text-4xl z-20"
              >
                ×
              </button>

              <div className="grid md:grid-cols-2">
                <div className="h-[300px] md:h-[650px]">
                {selectedService.isVideo ? (
  <video
    controls
    autoPlay
    muted
    loop
    className="w-full h-full object-cover"
  >
    <source src={selectedService.img} type="video/mp4" />
  </video>
) : (
  <img
    src={selectedService.img}
    alt={selectedService.title}
    className="w-full h-full object-cover"
  />
)}
                </div>

                <div className="p-8 overflow-y-auto max-h-[650px]">
                  <span className="text-lime-400 uppercase tracking-[3px]">
                    Takshion Mechatronics
                  </span>

                  <h2 className="text-4xl font-bold text-white mt-3">
                    {selectedService.title}
                  </h2>

                  <p className="text-gray-300 mt-6 leading-8">
                    {selectedService.desc}
                  </p>

                  <div className="mt-8">
                    <h3 className="text-lime-400 text-xl font-semibold mb-4">
                      Key Features
                    </h3>

                    <div className="grid grid-cols-2 gap-3">
                      {selectedService.features.map((feature, i) => (
                        <div
                          key={i}
                          className="border border-lime-500/20 bg-lime-500/5 rounded-xl px-4 py-3 text-white"
                        >
                          ✓ {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  };

