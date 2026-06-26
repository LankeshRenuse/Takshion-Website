"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const sections = [
  "home",
  "about",
  "product",
  "vision",
  "mission",
  "culture",
  "services",
   "careers",
  "contact",
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);


  // --- HANDLE SCROLL HIGHLIGHTING via IntersectionObserver ---
  useEffect(() => {
    const sectionIds = [...sections, "story"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const activeId = id === "story" ? "about" : id;
            setActive(activeId);
            const hash = `#${activeId}`;
            if (window.location.hash !== hash) {
              window.history.replaceState({}, "", `/${hash}`);
            }
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);



useEffect(() => {
  if (location.pathname === "/careers") {
    setActive("careers");
  }
}, [location.pathname]);




useEffect(() => {
  if (location.state?.scrollTo) {
    const section = document.getElementById(location.state.scrollTo);

    if (section) {
      setTimeout(() => {
        section.scrollIntoView({
          behavior: "smooth",
        });

        // Clear state so refresh won't scroll again
        navigate(location.pathname, {
          replace: true,
          state: null,
        });
      }, 100);
    }
  }
}, [location, navigate]);



const handleNavClick = (event, id) => {
  event.preventDefault();
  setOpen(false);
  if (location.pathname === "/careers") {
    if (id === "careers") {
      setActive("careers");
navigate("/careers");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    navigate("/", {
      state: {
        scrollTo: id,
      },
    });

    return;
  }

  if (id === "careers") {
    navigate("/careers");
    return;
  }

  const section = document.getElementById(id);

  if (!section) return;

  setActive(id);

  section.scrollIntoView({
    behavior: "smooth",
  });

window.history.replaceState({}, "", `/#${id}`);
};

  // --- MOBILE BODY SCROLL LOCK ---
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);



  // --- MOBILE MENU ANIMATION VARIANTS ---
  const menuVars = {
    initial: { x: "100%" },
    animate: { x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
    exit: { x: "100%", transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  };

  const containerVars = {
    initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
    open: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.07,
        staggerDirection: 1,
      },
    },
  };

  const linkVars = {
    initial: { opacity: 0, x: 20 },
    open: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <>
    
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-['Rajdhani'] font-semibold tracking-[2px] fixed top-0 left-0 w-full z-50  xl:bg-black/70 backdrop-blur-sm border-b border-[rgba(92,252,0,0.67)]/20 xl:border-b-0"
      >
        {/* UPDATED: items-start aligns everything to the top of the navbar height */}
        <div className="flex justify-between items-center px-5 xl:px-7 py-2 max-w-8xl mx-auto">
        <a href="/" className="z-50 relative flex items-start h-full">
 <div className="flex items-center gap-2">
  <a href="/" className="z-50 relative">
  <img
    src="/img/Takshion-logo.webp"
    alt="logo"
    className="h-16 w-auto object-contain scale-[1.33] -translate-y-1.5"
  />
</a>

<div className="hidden xl:flex items-center gap-3 ml-3 relative">
  {/* Vertical Line */}
  <div className="w-[1px] h-9 bg-[rgba(92,252,0,0.67)]/30 rounded-full" />

  {/* Text */}
  <div className="font-['Orbitron'] text-[13px] font-semibold leading-[1.3] text-white/80">
    <div>
      An Indian{" "}
      <span className="text-[rgba(92,252,0,0.67)]">
        Deep-Tech
      </span>{" "}
      &
    </div>

    <div>Autonomous Systems Company</div>
  </div>
</div>
  </div>
</a>

          {/* ================= DESKTOP ================= */}
          <div className="hidden xl:flex space-x-3 text-white text-sm relative items-center pt-0">
            {sections.map((id) => {
              if (id === "about") {
                return (
                  <div
                    key={id}
                    className="relative"
                    role="button"
                    tabIndex={0}
                    aria-expanded={aboutOpen}
                    aria-controls="about-dropdown"
                    onMouseEnter={() => setAboutOpen(true)}
                    onMouseLeave={() => setAboutOpen(false)}
                    onClick={() => setAboutOpen((s) => !s)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setAboutOpen((s) => !s);
                      }
                    }}
                  >
                  <motion.a
 href="/"
  onClick={(event) => handleNavClick(event, "about")}
  whileHover={{ y: -2 }}
  transition={{ duration: 0.2 }}
  className={`relative px-2 py-1 uppercase transition-colors duration-300 ${
    active === id
      ? "text-[rgba(92,252,0,0.67)]"
      : "hover:text-[rgba(92,252,0,0.67)]"
  }`}
>
 <div className="flex items-center gap-1 cursor-pointer">
  about
  <ChevronDown
    className={`w-4 h-4 transition-transform duration-300 ${
      aboutOpen ? "rotate-180" : ""
    }`}
  />
</div>


</motion.a>
                    {/* DROPDOWN */}
                    <AnimatePresence>
                      {aboutOpen && (
                       <motion.div
  initial={{ opacity: 0, y: 12, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  exit={{ opacity: 0, y: 12, scale: 0.95 }}
  transition={{ duration: 0.18 }}
  className="absolute top-full left-0 mt-3 min-w-[160px] rounded-xl 
  bg-black/80 backdrop-blur-xl border border-[rgba(92,252,0,0.25)] 
  shadow-[0_10px_30px_rgba(0,0,0,0.6)] overflow-hidden"
>
  {/* small glow top line */}
  <div className="h-[2px] w-full bg-[rgba(92,252,0,0.5)]" />

  <a
   href="/"
    onClick={(e) => handleNavClick(e, "story")}
    className="relative block px-4 py-3 text-sm uppercase tracking-wide
    text-white/80 hover:text-[rgba(92,252,0,0.67)]
    transition-all duration-200
    hover:bg-[rgba(92,252,0,0.08)]"
  >
    <span className="flex items-center justify-between">
       our story
      <span className="text-[10px] text-[rgba(92,252,0,0.4)]">01</span>
    </span>
  </a>

  {/* hover glow indicator */}
  <div className="absolute inset-0 pointer-events-none 
    bg-gradient-to-b from-[rgba(92,252,0,0.05)] to-transparent" />
</motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <motion.a
                  key={id}
                  href="/"
                  onClick={(event) => handleNavClick(event, id)}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className={`relative px-2 py-1 uppercase transition-colors duration-300 ${
                    active === id
                      ? "text-[rgba(92,252,0,0.67)]"
                      : "hover:text-[rgba(92,252,0,0.67)]"
                  }`}
                >
                  {id}

{active === id && (
  <motion.div
    layoutId="activeSection"
    className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[rgba(92,252,0,0.67)]"
    transition={{
      type: "tween",
      duration: 0.35,
      ease: "easeInOut",
    }}
  />
)}
                </motion.a>
              );
            })}
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => setOpen(!open)}
            className="xl:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 p-2 z-[60] relative mt-2"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-5 h-[2px] bg-[rgba(92,252,0,0.67)] block origin-center rounded-full"
            ></motion.span>
            <motion.span
              animate={open ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="w-5 h-[2px] bg-[rgba(92,252,0,0.67)] block rounded-full"
            ></motion.span>
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-5 h-[2px] bg-[rgba(92,252,0,0.67)] block origin-center rounded-full"
            ></motion.span>
          </motion.button>
        </div>
      </motion.nav>

      {/* ================= MOBILE OVERLAY & DRAWER ================= */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            />
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed top-0 right-0 h-full w-[min(70vw,260px)] bg-[#020404]/90 backdrop-blur-2xl text-[#EFFFFA] z-50 shadow-[-10px_0_30px_rgba(92,252,0,0.1)] border-l border-[rgba(92,252,0,0.67)]/20 flex flex-col"
            >
              <div className="h-14 border-b border-[rgba(92,252,0,0.67)]/10 w-full"></div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col gap-1 px-6 py-4 text-base uppercase tracking-wider h-full overflow-y-auto"
              >
                {sections.map((id) => {
  if (id === "about") {
    return (
      <div key={id} className="overflow-hidden">
        {/* About */}
        <motion.button
          variants={linkVars}
          onClick={() => setAboutOpen(!aboutOpen)}
          className={`w-full flex items-center justify-between py-3 uppercase tracking-wider transition-colors ${
            active === "about"
              ? "text-[rgba(92,252,0,0.67)] font-bold"
              : "text-white/80"
          }`}
        >
          <span>About</span>

          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              aboutOpen ? "rotate-180" : ""
            }`}
          />
        </motion.button>

        {/* Our Story */}
        <AnimatePresence>
  {aboutOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pl-6 pb-2"
    >
      <motion.a
        href="/"
        onClick={(e) => handleNavClick(e, "story")}
        className="block py-2 text-sm text-white hover:text-[rgba(92,252,0,0.67)]"
      >
        • Our Story
      </motion.a>
    </motion.div>
  )}
</AnimatePresence>
      </div>
    );
  }

  return (
    <div key={id} className="overflow-hidden">
      <motion.a
        variants={linkVars}
        whileHover={{ x: 6 }}
        whileTap={{ scale: 0.95, x: 6 }}
        onClick={(event) => handleNavClick(event, id)}
        href="/"
        className={`block w-full py-3 uppercase tracking-wider transition-colors ${
          active === id
            ? "text-[rgba(92,252,0,0.67)] font-bold"
            : "text-white/80 hover:text-white"
        }`}
      >
        {id}
      </motion.a>
    </div>
  );
})}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
