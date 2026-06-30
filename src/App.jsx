import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";

import CareerPage from "./pages/CareerPage";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BackgroundFX from "./components/BackgroundFX";
import ScrollTopButton from "./components/ScrollTopButton";

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
  "/img/Takshion-logo-256.webp 256w, /img/Takshion-logo-480.webp 480w, /img/Takshion-logo-768.webp 768w";

function useDeferredMount() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
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
  }, []);

  return ready;
}

function HomePage() {
  const showDeferredContent = useDeferredMount();
  const location = useLocation();
  const navigate = useNavigate();

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
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    const hash = location.hash;

    if (hash) {
      requestAnimationFrame(() => {
        scrollToSection(hash.substring(1));
      });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [location.hash]);

  useEffect(() => {
    if (!showDeferredContent) return;

    const target = location.state?.scrollTo || location.hash?.substring(1);

    if (!target) return;

    requestAnimationFrame(() => {
      if (scrollToSection(target) && location.state?.scrollTo) {
        navigate(location.pathname, {
          replace: true,
          state: null,
        });
      }
    });
  }, [showDeferredContent, location.hash, location.pathname, location.state, navigate]);

  return (
    <div className="text-white relative">
      {/* Background Logo */}
      <img
        src="/img/Takshion-logo-256.webp"
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
