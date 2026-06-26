import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const CareerPage = lazy(() => import("./pages/CareerPage"));

import Navbar from "./components/Navbar";
import About from "./components/About";
import Story from "./components/Story";
import Vision from "./components/Vision";
import Mission from "./components/Mission";
import Culture from "./components/Culture";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";
import BackgroundFX from "./components/BackgroundFX";
import ParticleBackground from "./components/ParticleBackground";
import ScrollTopButton from "./components/ScrollTopButton";
import Products from "./components/Products";

function HomePage() {
  // Always start from the top on page load
useEffect(() => {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  const hash = window.location.hash;
  if (hash) {
    requestAnimationFrame(() => {
      const section = document.getElementById(hash.substring(1));

      if (section) {
        section.scrollIntoView({
          behavior: "instant",
        });
      }
    });
  } else {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }
}, []);

  return (
    <div className="text-white relative">
      {/* Background Logo */}
      <img
        src="/img/Takshion-logo.webp"
        alt="Background Logo"
        className="bg-logo"
      />

      {/* GLOBAL FLOATING UI */}
      <ScrollTopButton />

      {/* BACKGROUND EFFECTS */}
      <BackgroundFX />
      <ParticleBackground />

      <Navbar />
      <Hero />

      {/* GLOBAL CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-3 md:px-10">
        <main>
          <div className="space-y-24 mt-24">
            <About />
          </div>

          <Products />

          <Story />
          <Vision />
          <Mission />
          <Culture />
          <Services />
          <Contact />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/careers" element={<Suspense fallback={null}><CareerPage /></Suspense>} />
      </Routes>
    </BrowserRouter>
  );
}