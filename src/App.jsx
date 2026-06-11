import { useEffect } from "react";

import Navbar from './components/Navbar'
import About from './components/About'
import Story from './components/Story'
import Vision from './components/Vision'
import Mission from './components/Mission'
import Culture from './components/Culture'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Services from './components/Services'
import Contact from './components/Contact'
import BackgroundFX from './components/BackgroundFX'
import ParticleBackground from './components/ParticleBackground'
import ScrollTopButton from "./components/ScrollTopButton";
import FloatingSocialBar from "./components/FloatingSocialBar";

export default function App() {

  // ✅ RELOAD WHEN USER RETURNS TO TAB
  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        window.location.reload();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div className="text-white relative">


      {/* ✅ BACKGROUND */}
      <div className="bg-title">SVELTOZ</div>

<FloatingSocialBar />
    <ScrollTopButton />
      <BackgroundFX />
      <ParticleBackground />
      <Navbar />

      {/* MAIN */}
<main>

  

  {/* HERO */}
  <Hero />  

  <div className="space-y-24 mt-24">
    <div className="mobile-section">
      <About />
    </div>
</div>

    
  {/* OTHER SECTIONS */}
  <div className="">


    <div className="mobile-section">
      <Story />
    </div>

    <div className="mobile-section">
      <Vision />
    </div>

    <div className="mobile-section">
      <Mission />
    </div>

    <div className="mobile-section">
      <Culture />
    </div>

    <div className="mobile-section">
      <Services />
    </div>

    <div className="mobile-section">
      <Contact />
    </div>

  </div>

</main>

    <div className="mt-32 md:mt-20">
        <Footer />
      </div>
      </div>
  )
}