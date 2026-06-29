  "use client";

  import { useEffect, useRef, useState } from "react";
  import { AnimatePresence, motion } from "framer-motion";
  import { ArrowLeft, ArrowRight, CheckCircle2, X } from "lucide-react";

  const responsiveSrc = (src, width) => src.replace(/\.[^.]+$/, `-${width}.webp`);
  const responsiveSrcSet = (src) =>
    `${responsiveSrc(src, 480)} 480w, ${responsiveSrc(src, 768)} 768w, ${src} 1280w`;

  const products = [
  
    {
      title: "TAKSHION KISAN",
      media: "/img/kisan.webp",
      poster: "/img/AGRI.webp",
      
      label: "Agriculture Drone",
      desc: "The most Stable and Safest Agri Drone that you can ever fly.",
      features: [
        "10L Spray Tank Capacity",
        "Covers up to 1.6 Acres (70,000 sq.ft) per Flight",
        "Long Endurance",
        "Dual GPS Yaw Navigation (Compass-Free Positioning)",
        "Real-Time Tank Level Monitoring",
        "Anti Air-Block Pump Protection",
        "AI-Based Autonomous Mission Planning",
        "Obstacle Avoidance System",
        "Terrain Following Capability",
        "Stationary Hover-Spray Mode",
        "Variable In-Flight Flow Control",
        "Smooth & Stable Flight Performance",
        "Soon to be DGCA Type Certified for Commercial Operations"


        
      ],
    },
    {
      title: "TAKSHION SENTINEL",
      media: "/img/sentinel.webp",
      poster: "/img/vtol.webp",
      label: "Hybrid VTOL Aircraft",
      desc: "A long-endurance VTOL platform developed for persistent surveillance, logistics, and beyond-visual-line-of-sight operations. Combining fixed-wing efficiency with vertical takeoff capability, SENTINEL delivers extended range, operational flexibility, and rapid deployment across diverse mission profiles.",
      features: [
        "VTOL",
        "Long-Endurance Autonomous Flight",
        "Modular Payload Integration",
        "AI-Assisted ISR Operations",
        "BVLOS Mission Capability",
        "Medium-Payload Logistics Delivery",
        "Rapid Deployment Operations",
      ],
    },
    {
      title: "TAKSHION KRAKEN",
      media: "/img/kraken.webp",
      label: "Maritime Platform",
      desc: "A modular autonomous surface vessel designed for maritime surveillance, disaster response, environmental monitoring, and logistics support. With scalable fleet operations, intelligent mission management, and rapid payload integration, KRAKEN provides a versatile platform for modern marine operations.",
      features: [
        "Swarm-Ready Autonomous Operations",
        "GPS/INS-Based Autonomous Navigation",
        "Persistent Coastal & Inland Water Surveillance",
        "Disaster Response & Flood Reconnaissance",
        "Rescue Mission Support",
        "Lightweight Marine Logistics & Payload Delivery",
        "Port, Harbor & Critical Infrastructure Monitoring",
        "Scalable Fleet Deployment",
        "Multi-Mission Autonomous Surface Platform",
      ],
    },
    {
      title: "TAKSHION HYDRA",
      media: "/img/hydra.webp",
      poster: "/hydra.webp",
      label: "Underwater Robotics",
      desc: "An autonomous underwater platform engineered for subsea exploration, inspection, and data collection. Combining sonar-based perception, intelligent navigation, and advanced sensor fusion, HYDRA delivers reliable operations in complex underwater environments where conventional systems cannot operate.",
      features: [
        "INS & DVL-Based Autonomous Navigation",
        "Multi-Beam Sonar Seafloor Mapping",
        "AI-Assisted Mission Execution",
        "Real-Time Video & Sonar Telemetry",
        "Station-Keeping Control",
        "Autonomous Bathymetric Surveying",
        "Subsea Infrastructure Inspection",
        "Long-Endurance Marine Operations",
      ],
    },
    {
      title: "TAKSHION KRAIT",
      media: "/img/krait.webp",
      poster: "/hydra.webp",
      label: "kamikaze drone",
      desc: "An advanced FPV autonomous aerial platform designed for high-speed operations in dynamic and GPS-challenged environments. Built around AI-assisted navigation and modular mission architecture, KRAIT enables rapid deployment and adaptable mission execution.",
      features: [
        "Beyond GPS Dependence",
        "Intelligence at the Edge",
        "Autonomy Beyond WaypointsHuman-in-the-Loop, AI-in-the-Loop",
        "Software-Defined Mission Architecture",
        "Mission-Critical Reliability",
        "modular payload adapter design",
      ],
    },
  ];

  const loopedProducts = products;

  const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.92, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  function ProductMedia({ item, className = "", loading = "lazy", sizes = "(max-width: 640px) 85vw, 410px" }) {
    if (item.isVideo) {
      return (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={item.poster}
          className={className}
        >
          <source src={item.media} type="video/mp4" />
        </video>
      );
    }

    return (
      <img
        src={item.media}
        srcSet={responsiveSrcSet(item.media)}
        sizes={sizes}
        alt={item.title}
        loading={loading}
        decoding="async"
        className={className}
      />
    );
  }

  export default function Products() {
    const scrollRef = useRef(null);
    const isDragging = useRef(false);
    const draggedRef = useRef(false);
    const startX = useRef(0);
    const scrollLeftStart = useRef(0);
    const buttonScrollTimeout = useRef();
  const [selectedProduct, setSelectedProduct] = useState(null);
  ;

  

    const scroll = (direction) => {
    const node = scrollRef.current;
    if (!node) return;

    const firstCard = node.children[0];

    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;

    // gap-4 = 16px
    const amount = cardWidth + 16;

    node.style.scrollBehavior = "smooth";

    node.scrollLeft += direction === "left"
      ? -amount
      : amount;

    clearTimeout(buttonScrollTimeout.current);

    buttonScrollTimeout.current = setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.style.scrollBehavior = "auto";
      }
    }, 500);
  };

    const handlePointerDown = (event) => {
    const node = scrollRef.current;
    if (!node) return;


    isDragging.current = true;
    draggedRef.current = false;
      startX.current = event.pageX - node.offsetLeft;
      scrollLeftStart.current = node.scrollLeft;
      node.classList.add("cursor-grabbing");
    };

    const stopDrag = () => {
      isDragging.current = false;
      scrollRef.current?.classList.remove("cursor-grabbing");
    };

    const handlePointerMove = (event) => {
      const node = scrollRef.current;
      if (!isDragging.current || !node) return;

      const walk = (event.pageX - node.offsetLeft - startX.current) * 1.5;
      node.scrollLeft = scrollLeftStart.current - walk;
      if (Math.abs(walk) > 8) draggedRef.current = true;
    };

    const openProduct = (product) => {
      if (!draggedRef.current) setSelectedProduct(product);
    };

    return (
      <section id="product" className="relative py-20   px-2  text-white overflow-hidden scroll-mt-[-70px]">
        <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
      
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">OUR</span>
            <span className="text-[rgba(92,252,0,0.67)]"> PRODUCTS</span>
          </h2>
         <p className="mx-auto mt-5 max-w-3xl text-sm md:text-base leading-7 text-white/62 text-justify md:text-center">
            Explore Takshion autonomous platforms across air,  agriculture,
            maritime, and underwater operations. click to 
            open a product for full details.
          </p>
        </div>

      <div className="relative w-full max-w-[1280px] mx-auto flex items-center">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll products left"
            className="absolute left-2 z-30 grid h-11 w-11 place-items-center rounded-full border border-[rgba(92,252,0,0.67)]/40 bg-black/75 text-[rgba(92,252,0,0.67)] transition-all duration-300 hover:bg-[rgba(92,252,0,0.67)] hover:text-black hover:shadow-[0_0_28px_rgba(92,252,0,0.32)]"
          >
            <ArrowLeft size={20} />
          </button>

          <motion.div
          ref={scrollRef}
      onMouseLeave={stopDrag}
            onMouseDown={handlePointerDown}
            onMouseUp={stopDrag}
            onMouseMove={handlePointerMove}
            className="flex gap-4 overflow-x-auto px-4 pt-4 py-2 cursor-grab select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            variants={{
              visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {loopedProducts.map((product, index) => (
              <motion.button
                type="button"
                key={`${product.title}-${index}`}
                variants={cardVariants}
                onClick={() => openProduct(product)}
                whileHover={{ y: -10, scale: 1.015 }}
              className="group relative flex-shrink-0 overflow-hidden rounded-2xl border border-black/40 border-[rgba(92,252,0,0.67)]/24 bg-[#02050a]/75 text-left shadow-2xl transition-all duration-500 h-[430px] w-[85vw] sm:w-[340px] lg:w-[410px] max-w-none hover:border-[rgba(92,252,0,0.67)]/60 hover:shadow-[0_0_60px_rgba(92,252,0,0.2)]"
              >
                <ProductMedia
                  item={product}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover brightness-[0.95] transition-transform duration-700 group-hover:scale-110 "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
            
                  <h3 className="text-2xl font-bold uppercase leading-tight text-white">
                    {product.title}
                  </h3>
              
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[rgba(92,252,0,0.67)]">
                    View details <ArrowRight size={16} />
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll products right"
            className="absolute right-2 z-30 grid h-11 w-11 place-items-center rounded-full border border-[rgba(92,252,0,0.67)]/40 bg-black/75 text-[rgba(92,252,0,0.67)] transition-all duration-300 hover:bg-[rgba(92,252,0,0.67)] hover:text-black hover:shadow-[0_0_80px_rgba(92,252,0,0.4)]"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/88 p-3 backdrop-blur-md sm:p-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.2 }}
                onClick={(event) => event.stopPropagation()}
              className="relative grid h-[90vh] w-full max-w-5xl overflow-hidden rounded-xl border border-[rgba(92,252,0,0.67)]/30 bg-[#050808] shadow-[0_0_48px_rgba(92,252,0,0.12)] md:grid-cols-[1.05fr_0.95fr]">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  aria-label="Close product details"
                  className="sticky right-3 top-3 z-20 ml-auto mr-3 mt-3 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-black/80 text-white transition-colors duration-200 hover:border-[rgba(92,252,0,0.67)] hover:text-[rgba(92,252,0,0.67)] md:absolute md:right-4 md:top-4 md:m-0 md:h-10 md:w-10"
                >
                  <X size={20} />
                </button>

                <div className="relative h-[300px] md:h-full">
                  <ProductMedia
                    item={selectedProduct}
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, 520px"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/55" />
                </div>

              <div className="relative flex flex-col p-5 sm:p-8 md:p-10 h-full overflow-y-auto">
                  <span className="mb-3 w-fit rounded-full border border-[rgba(92,252,0,0.67)]/35 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[rgba(92,252,0,0.67)] sm:mb-4 sm:text-xs sm:tracking-[0.24em]">
                    {selectedProduct.label}
                  </span>
                  <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
                    {selectedProduct.title}
                  </h3>
                 <p className="mt-3 text-sm leading-7 text-white/72 sm:mt-5 sm:text-base sm:leading-8 text-justify">
  {selectedProduct.desc}
</p>
                  <div className="mt-5 space-y-3 sm:mt-8 sm:space-y-4">
                    {selectedProduct.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 text-white/78 sm:rounded-xl"
                      >
                        <CheckCircle2
                          size={19}
                          className="mt-0.5 shrink-0 text-[rgba(92,252,0,0.67)]"
                        />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    );
  }
