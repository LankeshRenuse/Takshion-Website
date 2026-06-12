"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const CONTACT_API_URL =
  import.meta.env.VITE_CONTACT_API_URL || "http://localhost:5000/send-email";

export default function Contact() {
  const formRef = useRef();
  const [openSocials, setOpenSocials] = useState(false);
  const [loading, setLoading] = useState(false);
  const [glow, setGlow] = useState(false);
  const [magnet, setMagnet] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    visible: false,
  });

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

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      user_name: formRef.current.user_name.value,
      company: formRef.current.company.value,
      user_email: formRef.current.user_email.value,
      phone: formRef.current.phone.value,
      message: formRef.current.message.value,
    };

   const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch(CONTACT_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to send message.");
    }

    alert("Message sent successfully!");

    // Reset form
    formRef.current?.reset();

    // Reset state (for controlled inputs)
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error("Error:", error);
    alert(error.message || "Server error. Please try again later.");
  } finally {
    setLoading(false);
  }
};}

  // --- REALISTIC & PREMIUM ANIMATIONS ---
  
  // 1. Form Body Container 
  const formBodyVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.1,
        ease: [0.16, 1, 0.3, 1], // Apple-style smooth ease-out
        when: "beforeChildren",
        staggerChildren: 0.1,    // Stagger the inputs inside naturally
      },
    },
  };

  // 2. Realistic "Magnetic Pull" for inputs settling into place
  const formElementVariants = {
    hidden: { opacity: 0, y: -15 }, // Start slightly above
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100, // Softer spring for realistic weight
        damping: 18,    // High damping so it settles smoothly without wobbling
        mass: 1,
      },
    },
  };

  // 3. Left Side Text (Grounded, slides up slightly after form)
  const leftContainerVariants = {
    hidden: {},
    visible: { 
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.3, // Waits for the right side to establish itself
      } 
    },
  };

  const leftItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section id="contact" className="py-15 px-8 bg-transparent relative">
      <h2 className="text-4xl md:text-5xl lg:text-5xl mb-12 text-center tracking-wide font-bold">
        <span className="text-white">CONTACT</span>
        <span className="text-[#22c55e]"> US</span>
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT SIDE */}
        <motion.div 
          className="space-y-8"
          variants={leftContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ITEM 1: HEAD OFFICE */}
          <div>
            <motion.p variants={leftItemVariants} className="text-[#22c55e] uppercase text-sm mb-1">
              Head Office
            </motion.p>
            <motion.h3 variants={leftItemVariants} className="text-lg md:text-xl font-semibold text-white">
              Takshion Solutions Pvt. Ltd.
            </motion.h3>
            {/* <motion.p variants={leftItemVariants} className="text-gray-300 mt-2 leading-relaxed">
              Show Room Right, 83, Deodar, 2nd Floor, Lane 1
              <br />
              Behind Royal Enfield, Bhusari Colony, Kothrud
              <br />
              Pune, Maharashtra 411038, India
            </motion.p>

            <motion.div variants={leftItemVariants} className="mt-4">
              <a
                href="https://www.linkedin.com/company/takshion-solutions-pvt-ltd/posts/?feedView=all"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-[#22c55e]/40 text-[#22c55e] px-5 py-2.5 rounded-lg hover:bg-[#22c55e]/10 hover:shadow-[0_0_20px_rgba(34,197,94,0.25)] transition-all duration-300"
              >
                LinkedIn -&gt;
              </a>
            </motion.div> */}
          </div>

        </motion.div>

        {/* RIGHT SIDE: CONTACT FORM */}
        <div className="flex justify-center">
          <motion.div
            variants={formBodyVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            onMouseEnter={() => setGlow(true)}
            onMouseLeave={() => {
              setGlow(false);
              resetMagnet();
            }}
            onFocus={() => setGlow(true)}
            onBlur={() => {
              setGlow(false);
              resetMagnet();
            }}
            onTouchStart={() => setGlow(true)}
            onTouchEnd={() => {
              setGlow(false);
              resetMagnet();
            }}
            className="magnet-container bg-white/1 backdrop-blur-lg border border-[#22c55e]/20 rounded-2xl p-8 shadow-xl glow-target w-full relative overflow-hidden"
          >
            <motion.div
              animate={{
                opacity: glow ? 1 : 0,
                scale: glow ? 1 : 0.8,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut"
              }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[420px] h-[240px] bg-[#22c55e]/10 blur-[120px] rounded-full" />
            </motion.div>

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
              <span className="absolute top-0 left-0 w-5 h-5 border-l-2 border-t-2 border-[#22c55e] rounded-tl-md" />
              <span className="absolute top-0 right-0 w-5 h-5 border-r-2 border-t-2 border-[#22c55e] rounded-tr-md" />
              <span className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2 border-[#22c55e] rounded-bl-md" />
              <span className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2 border-[#22c55e] rounded-br-md" />
            </motion.div>

            {/* Inner Form Elements Stagger In */}
            <motion.h3 
              variants={formElementVariants}
              className="text-[#22c55e] text-xl mb-5 tracking-widest font-semibold"
            >
              We'd love to hear from you!
            </motion.h3>

         
<form ref={formRef} onSubmit={sendEmail} className="space-y-6">
  <motion.div
    variants={formElementVariants}
    className="grid md:grid-cols-2 gap-6"
  >
    {/* Name */}
    <input
      name="user_name"
      type="text"
      placeholder="Full Name "
      autoComplete="name"
      minLength={3}
      maxLength={50}
      required
      className="input-style"
      onMouseEnter={moveMagnet}
      onFocus={moveMagnet}
      onBlur={resetMagnet}
    />

    {/* Company */}
    <input
      name="company"
      type="text"
      placeholder="Company / Organization"
      autoComplete="organization"
      maxLength={100}
      className="input-style"
      onMouseEnter={moveMagnet}
      onFocus={moveMagnet}
      onBlur={resetMagnet}
    />

    {/* Email */}
    <input
      name="user_email"
      type="email"
      placeholder="Business Email "
      autoComplete="email"
      required
      className="input-style"
      onMouseEnter={moveMagnet}
      onFocus={moveMagnet}
      onBlur={resetMagnet}
    />

    {/* Phone */}
    <input
      name="phone"
      type="tel"
      placeholder="+91 XXXXX XXXXX"
      autoComplete="tel"
      pattern="[0-9]{10}"
      maxLength={15}
      className="input-style"
      onMouseEnter={moveMagnet}
      onFocus={moveMagnet}
      onBlur={resetMagnet}
    />
  </motion.div>

  {/* Message */}
  <motion.textarea
    variants={formElementVariants}
    name="message"
    rows="5"
    placeholder="Describe your requirements..."
    className="input-style w-full resize-none"
    minLength={20}
    maxLength={1000}
    required
    onMouseEnter={moveMagnet}
    onFocus={moveMagnet}
    onBlur={resetMagnet}
  />

  {/* Submit Button */}
  <motion.div variants={formElementVariants}>
    <button
      type="submit"
      disabled={loading}
      className="
        group
        relative
        overflow-hidden
        px-8 py-3
        rounded-xl
        border border-[#22c55e]
        text-[#22c55e]
        font-medium
        tracking-widest
        transition-all duration-500
        hover:bg-[#22c55e]/10
        hover:shadow-[0_0_30px_rgba(34,197,94,0.35)]
        hover:-translate-y-1
        active:scale-95
        disabled:opacity-50
      "
    >
      <span className="relative z-10">
        {loading ? "SENDING..." : "SEND MESSAGE →"}
      </span>
    </button>
  </motion.div>
</form>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
