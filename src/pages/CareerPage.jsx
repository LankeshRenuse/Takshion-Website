  "use client";

  import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
  import Navbar from "../components/Navbar";
  import BackgroundFX from "../components/BackgroundFX";
  import ParticleBackground from "../components/ParticleBackground";
  
  export default function CareerPage() {
    const CAREER_API_URL = import.meta.env.VITE_CAREER_API_URL || "https://takshion.com/api/send-mail-career.php";

    const formRef = useRef(null);
const [loading, setLoading] = useState(false);

    const [glow, setGlow] = useState(false);
    const [magnet, setMagnet] = useState({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      visible: false,
    });
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, []);


    

    const moveMagnet = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const parent = e.currentTarget.closest(".magnet-container");

      if (!parent) return;

      const parentRect = parent.getBoundingClientRect();

      setMagnet({
        x: rect.left - parentRect.left,
        y: rect.top - parentRect.top,
        width: rect.width,
        height: rect.height,
        visible: true,
      });
    };

    const resetMagnet = () => {
      setMagnet((prev) => ({
        ...prev,
        visible: false,
      }));
    };


    const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  const form = formRef.current;

  const user_name = form.user_name.value.trim();
  const user_email = form.user_email.value.trim();
  const phone = form.phone.value.trim();
  const position = form.position.value.trim();
  const message = form.message.value.trim();
  const resume = form.resume.files[0];

  // Name
  if (!user_name || /^\d+$/.test(user_name)) {
    setLoading(false);

    Swal.fire({
      icon: "warning",
      title: "Invalid Name",
      text: "Please enter a valid full name.",
      background: "#0b0f14",
      color: "#fff",
      confirmButtonColor: "rgba(92,252,0,0.67)",
    });

    return;
  }

  // Position
  if (!position) {
    setLoading(false);

    Swal.fire({
      icon: "warning",
      title: "Position Required",
      text: "Please enter the position you are applying for.",
      background: "#0b0f14",
      color: "#fff",
      confirmButtonColor: "rgba(92,252,0,0.67)",
    });

    return;
  }

  // About yourself
  if (!message || message.length < 20 || /^\d+$/.test(message)) {
    setLoading(false);

    Swal.fire({
      icon: "warning",
      title: "Invalid Description",
      text: "Please enter at least 20 characters.",
      background: "#0b0f14",
      color: "#fff",
      confirmButtonColor: "rgba(92,252,0,0.67)",
    });

    return;
  }

  // Resume
  if (!resume) {
    setLoading(false);

    Swal.fire({
      icon: "warning",
      title: "Resume Required",
      text: "Please upload your resume.",
      background: "#0b0f14",
      color: "#fff",
      confirmButtonColor: "rgba(92,252,0,0.67)",
    });

    return;
  }

  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  if (!allowedTypes.includes(resume.type)) {
    setLoading(false);

    Swal.fire({
      icon: "warning",
      title: "Invalid File",
      text: "Only PDF, DOC and DOCX files are allowed.",
      background: "#0b0f14",
      color: "#fff",
      confirmButtonColor: "rgba(92,252,0,0.67)",
    });

    return;
  }

  if (resume.size > 5 * 1024 * 1024) {
    setLoading(false);

    Swal.fire({
      icon: "warning",
      title: "File Too Large",
      text: "Resume size must be less than 5 MB.",
      background: "#0b0f14",
      color: "#fff",
      confirmButtonColor: "rgba(92,252,0,0.67)",
    });

    return;
  }

  try {
    const formData = new FormData();

    formData.append("user_name", user_name);
    formData.append("user_email", user_email);
    formData.append("phone", phone);
    formData.append("position", position);
    formData.append("message", message);
    formData.append("resume", resume);

    const response = await fetch(CAREER_API_URL, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    Swal.fire({
      icon: "success",
      title: "Application Submitted!",
      text: "We will contact you soon.",
      background: "#0b0f14",
      color: "#fff",
      confirmButtonColor: "rgba(92,252,0,0.67)",
    });

    form.reset();
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: error.message || "Server error.",
      background: "#0b0f14",
      color: "#fff",
      confirmButtonColor: "rgba(92,252,0,0.67)",
    });
  } finally {
    setLoading(false);
  }
};

    return (
      <>
        <Navbar />

        <div className="min-h-screen text-white relative overflow-hidden pt-20">
          <img
            src="/img/Takshion-logo-256.webp"
            srcSet="/img/Takshion-logo-256.webp 256w, /img/Takshion-logo-480.webp 480w, /img/Takshion-logo-768.webp 768w"
            sizes="(max-width: 768px) 45vw, 500px"
            alt=""
            loading="eager"
            decoding="async"
            fetchPriority="low"
            className="bg-logo"
          />

          <BackgroundFX />
          <ParticleBackground />

          <div className="max-w-6xl mx-auto px-6 py-10 relative z-10">
            {/* Hero */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center mb-10"
            >
              <p className="text-[rgba(92,252,0,0.67)] uppercase text-4xl mb-4">
                Careers
              </p>

              <h1 className="text-3xl md:text-3xl font-bold mb-3 font-['Orbitron']">
                Build The Future With Us
              </h1>

              <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
                Join Takshion and contribute to the development of next-generation autonomous systems, AI-driven technologies, aerospace innovations, and advanced engineering solutions.
              </p>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              onMouseEnter={() => setGlow(true)}
              onMouseLeave={() => {
                setGlow(false);
                resetMagnet();
              }}
              className="
              glow-target
                magnet-container
                relative overflow-hidden
                max-w-5xl mx-auto
                rounded-3xl
                border border-white/10
                bg-black/[0.03]
                backdrop-blur-xl
                p-5 md:p-6
              "
            >
              {/* Glow */}
              <motion.div
                animate={{
                  opacity: glow ? 1 : 0,
                  scale: glow ? 1 : 0.8,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[420px] h-[240px] bg-[rgba(92,252,0,0.67)]/10 blur-[120px] rounded-full" />
              </motion.div>

              {/* Target Effect */}
              <motion.div
                animate={{
                  opacity: magnet.visible ? 1 : 0,
                  x: magnet.x,
                  y: magnet.y,
                  width: magnet.width,
                  height: magnet.height,
                }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 25,
                }}
                className="absolute top-0 left-0 pointer-events-none z-50"
              >
                <span className="absolute top-0 left-0 w-5 h-5 border-l-2 border-t-2 border-[rgba(92,252,0,0.67)] rounded-tl-md" />
                <span className="absolute top-0 right-0 w-5 h-5 border-r-2 border-t-2 border-[rgba(92,252,0,0.67)] rounded-tr-md" />
                <span className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2 border-[rgba(92,252,0,0.67)] rounded-bl-md" />
                <span className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2 border-[rgba(92,252,0,0.67)] rounded-br-md" />
              </motion.div>

              <div className="relative z-10">
                <h2 className="text-3xl text-[rgba(92,252,0,0.67)] md:text-4xl font-bold mb-8">
                  Apply Now
                </h2>

               <form
  ref={formRef}
  onSubmit={handleSubmit}
  className="grid md:grid-cols-2 gap-6"
>
                    <input
      type="text"
      name="user_name"
      placeholder="Full Name"
      className="bg-transparent border border-white/10 rounded-2xl px-5 py-3.5 outline-none focus:border-[rgba(92,252,0,0.5)]"
      onMouseEnter={moveMagnet}
      onFocus={moveMagnet}
      onBlur={resetMagnet}
    />

    <input
      type="email"
      name="user_email"
      placeholder="Email Address"
      className="bg-transparent border border-white/10 rounded-2xl px-5 py-3.5 outline-none focus:border-[rgba(92,252,0,0.5)]"
      onMouseEnter={moveMagnet}
      onFocus={moveMagnet}
      onBlur={resetMagnet}
    />

    <input
      type="tel"
      name="phone"
      placeholder="Phone Number"
      className="bg-transparent border border-white/10 rounded-2xl px-5 py-3.5 outline-none focus:border-[rgba(92,252,0,0.5)]"
      onMouseEnter={moveMagnet}
      onFocus={moveMagnet}
      onBlur={resetMagnet}
    />

    <input
      type="text"
      name="position"
      placeholder="Position Applying For"
      className="bg-transparent border border-white/10 rounded-2xl px-5 py-3.5 outline-none focus:border-[rgba(92,252,0,0.5)]"
      onMouseEnter={moveMagnet}
      onFocus={moveMagnet}
      onBlur={resetMagnet}
    />

    <div className="md:col-span-2">
      <input
        type="file"
        name="resume"
accept=".pdf,.doc,.docx"
        className="w-full border border-white/10 rounded-2xl px-5 py-3.5"
        onMouseEnter={moveMagnet}
        onFocus={moveMagnet}
        onBlur={resetMagnet}
      />
    </div>

    <div className="md:col-span-2">
      <textarea
        rows="5"
        name="message"
        placeholder="Tell us about yourself..."
        className="w-full bg-transparent border border-white/10 rounded-2xl px-5 py-4 outline-none resize-none focus:border-[rgba(92,252,0,0.5)]"
        onMouseEnter={moveMagnet}
        onFocus={moveMagnet}
        onBlur={resetMagnet}
      />
    </div>

    <div className="md:col-span-2">
      <button
  type="submit"
  disabled={loading}
  className="
    px-8 py-4 rounded-2xl
    border border-[rgba(92,252,0,0.3)]
    text-[rgba(92,252,0,0.67)]
    hover:bg-[rgba(92,252,0,0.08)]
    hover:shadow-[0_0_30px_rgba(92,252,0,0.2)]
    transition-all duration-300
    disabled:opacity-50
  "
>
  {loading ? "Submitting..." : "Submit Application"}
</button>
    </div>
  </form>
              </div>
            </motion.div>
          </div>
        </div>
      </>
    );
  }
