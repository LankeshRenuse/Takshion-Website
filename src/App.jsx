import { lazy, Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";

import CareerPage from "./pages/CareerPage";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BackgroundFX from "./components/BackgroundFX";
import ScrollTopButton from "./components/ScrollTopButton";
import FloatingSocialBar from "./components/FloatingSocialBar";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandYoutube,
} from "@tabler/icons-react";
const About = lazy(() => import("./components/About"));
const Story = lazy(() => import("./components/Story"));
const Vision = lazy(() => import("./components/Vision"));
const Mission = lazy(() => import("./components/Mission"));
const Culture = lazy(() => import("./components/Culture"));
const Footer = lazy(() => import("./components/Footer"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));
const ParticleBackground = lazy(() => import("./components/ParticleBackground"));
const Products = lazy(() => import("./components/Products"));

const responsiveSrc = (src, width) => src.replace(/\.[^.]+$/, `-${width}.webp`);
const responsiveSrcSet = (src) =>
  `${responsiveSrc(src, 480)} 480w, ${responsiveSrc(src, 768)} 768w`;
const brandSrcSet =
  "/img/Takshion-logo.png 256w, /img/Takshion-logo.png 480w, /img/Takshion-logo.png 768w";

function useDeferredMount(forceImmediate = false) {
  const [ready, setReady] = useState(() => forceImmediate);

  useEffect(() => {
    if (forceImmediate) {
      setReady(true);
      return undefined;
    }

    let idleId;
    let timeoutId;
    let cancelled = false;

    const start = () => {
      if (cancelled) return;

      timeoutId = window.setTimeout(() => {
        if (!cancelled) {
          setReady(true);
        }
      }, 0);
    };

    if (document.readyState === "complete") {
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(start, { timeout: 1200 });
      } else {
        timeoutId = window.setTimeout(start, 400);
      }
    } else {
      window.addEventListener("load", start, { once: true });
    }

    return () => {
      cancelled = true;

      if (idleId && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      window.removeEventListener("load", start);
    };
  }, [forceImmediate]);

  return ready;
}

function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialTarget = location.state?.scrollTo || location.hash?.substring(1);
  const showDeferredContent = useDeferredMount(Boolean(initialTarget));
  const [pageVisible, setPageVisible] = useState(() => !initialTarget);
  const scrollFrameRef = useRef(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) {
      return false;
    }

    section.scrollIntoView({
      behavior: "instant",
    });

    return true;
  };

  // Always start from the top on page load
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    const target = initialTarget;

    if (scrollFrameRef.current) {
      cancelAnimationFrame(scrollFrameRef.current);
      scrollFrameRef.current = null;
    }

    if (!showDeferredContent) {
      if (!target) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant",
        });
        setPageVisible(true);
      }

      return;
    }

    if (!target) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
      setPageVisible(true);
      return;
    }

    let attempts = 0;
    const maxAttempts = 120;

    const finish = () => {
      setPageVisible(true);

      if (location.state?.scrollTo) {
        navigate(location.pathname, {
          replace: true,
          state: null,
        });
      }
    };

    const tryScroll = () => {
      attempts += 1;

      if (scrollToSection(target)) {
        finish();
        return;
      }

      if (attempts >= maxAttempts) {
        finish();
        return;
      }

      scrollFrameRef.current = requestAnimationFrame(tryScroll);
    };

    scrollFrameRef.current = requestAnimationFrame(tryScroll);

    return () => {
      if (scrollFrameRef.current) {
        cancelAnimationFrame(scrollFrameRef.current);
        scrollFrameRef.current = null;
      }
    };
  }, [initialTarget, showDeferredContent, location.pathname, location.state, navigate]);

  return (
    <div
      className="text-white relative"
      style={{ visibility: pageVisible ? "visible" : "hidden" }}
    >
      {/* Background Logo */}
      <img
        src="/img/Takshion-logo.png"
        srcSet={brandSrcSet}
        sizes="(max-width: 768px) 45vw, 500px"
        alt=""
        loading="eager"
        decoding="async"
        fetchPriority="low"
        className="bg-logo"
      />

      {/* GLOBAL FLOATING UI */}
      <ScrollTopButton />
      <FloatingSocialBar />




      {/* BACKGROUND EFFECTS */}
      <BackgroundFX />
      <Suspense fallback={null}>
        {showDeferredContent ? <ParticleBackground /> : null}
      </Suspense>

      <Navbar />
      <Hero />

      {/* GLOBAL CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-3 md:px-10">
        <main>
          <Suspense fallback={null}>
            {showDeferredContent ? (
              <div className="space-y-24 mt-24">
                <About />
              </div>
            ) : null}
          </Suspense>

          <Suspense fallback={null}>
            {showDeferredContent ? <Products /> : null}
          </Suspense>

          <Suspense fallback={null}>
            {showDeferredContent ? <Story /> : null}
          </Suspense>
          <Suspense fallback={null}>
            {showDeferredContent ? <Vision /> : null}
          </Suspense>
          <Suspense fallback={null}>
            {showDeferredContent ? <Mission /> : null}
          </Suspense>
          <Suspense fallback={null}>
            {showDeferredContent ? <Culture /> : null}
          </Suspense>
          <Suspense fallback={null}>
            {showDeferredContent ? <Services /> : null}
          </Suspense>
         <Suspense fallback={null}>
  {showDeferredContent ? <Contact /> : null}
</Suspense>

{/* Mobile Social Icons */}
<div className="md:hidden flex justify-center items-center gap-4 py-6">
  {[
    {
      icon: <IconBrandInstagram size={20} stroke={1.8} />,
      link: "https://www.instagram.com/takshiondeeptech",
      gradient: "from-pink-500 via-fuchsia-500 to-purple-600",
    },
    {
      icon: <IconBrandLinkedin size={20} stroke={1.8} />,
      link: "https://www.linkedin.com/company/takshion-deep-tech-pvt-ltd/",
      gradient: "from-blue-500 via-cyan-500 to-sky-600",
    },
    {
      icon: <IconBrandFacebook size={20} stroke={1.8} />,
      link: "https://www.facebook.com/profile.php?id=61590888487212",
      gradient: "from-blue-600 via-indigo-500 to-blue-800",
    },
    {
      icon: <IconBrandYoutube size={20} stroke={1.8} />,
      link: "https://www.youtube.com/@TakshionDeepTech",
      gradient: "from-red-500 via-rose-500 to-red-700",
    },
  ].map((social, index) => (
    <a
      key={index}
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center h-12 w-12 rounded-2xl overflow-hidden bg-black/40 backdrop-blur-lg border border-white/10 shadow-lg group"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-25 blur-[4px] transition-opacity duration-300`}
      />

      <div
        className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
      />

      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />

      <div className="relative z-10 text-white">
        <div className="p-1.5 rounded-xl bg-white/5 border border-white/10 shadow-inner">
          {social.icon}
        </div>
      </div>
    </a>
  ))}
</div>

        </main>
      </div>

      <Suspense fallback={null}>
        {showDeferredContent ? <Footer /> : null}
      </Suspense>

    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/careers" element={<CareerPage />} />
      </Routes>
    </BrowserRouter>
  );
}
