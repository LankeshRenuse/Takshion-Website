"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { Mail } from "lucide-react";

const CONTACT_API_URL =
  import.meta.env.VITE_CONTACT_API_URL || "https://takshion.com/api/send-mail.php";

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

    const user_name = formRef.current.user_name.value.trim();
    const company = formRef.current.company.value.trim();
    const user_email = formRef.current.user_email.value.trim();
    const phone = formRef.current.phone.value.trim();
    const message = formRef.current.message.value.trim();

    // Name validation
    if (!user_name) {
      setLoading(false);
      Swal.fire({
        icon: "warning",
        title: "Invalid Name",
        text: "Full Name cannot be empty.",
        background: "#0b0f14",
        color: "#fff",
        confirmButtonColor: "rgba(92,252,0,0.67)",
      });
      return;
    }

    if (/^\d+$/.test(user_name)) {
      setLoading(false);
      Swal.fire({
        icon: "warning",
        title: "Invalid Name",
        text: "Full Name cannot contain only numbers.",
        background: "#0b0f14",
        color: "#fff",
        confirmButtonColor: "rgba(92,252,0,0.67)",
      });
      return;
    }

    // Company validation
    if (company && /^\d+$/.test(company)) {
      setLoading(false);
      Swal.fire({
        icon: "warning",
        title: "Invalid Company Name",
        text: "Company name cannot contain only numbers.",
        background: "#0b0f14",
        color: "#fff",
        confirmButtonColor: "rgba(92,252,0,0.67)",
      });
      return;
    }

    // Message validation
    if (!message) {
      setLoading(false);
      Swal.fire({
        icon: "warning",
        title: "Invalid Message",
        text: "Please describe your requirements.",
        background: "#0b0f14",
        color: "#fff",
        confirmButtonColor: "rgba(92,252,0,0.67)",
      });
      return;
    }

    if (/^\d+$/.test(message)) {
      setLoading(false);
      Swal.fire({
        icon: "warning",
        title: "Invalid Message",
        text: "Description cannot contain only numbers.",
        background: "#0b0f14",
        color: "#fff",
        confirmButtonColor: "rgba(92,252,0,0.67)",
      });
      return;
    }

    const formData = {
      user_name,
      company,
      user_email,
      phone,
      message,
    };

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

      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "We will get back to you soon.",
        background: "#0b0f14",
        color: "#ffffff",
        confirmButtonColor: "rgba(92,252,0,0.67)",
      });

      // Reset form
      formRef.current.reset();
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: error.message || "Server error. Please try again later.",
        background: "#0b0f14",
        color: "#ffffff",
        confirmButtonColor: "rgba(92,252,0,0.67)",
      });

      // RESET EVERYTHING
      formRef.current.reset();
      setGlow(false);
      setMagnet({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        visible: false,
      });
    } finally {
      setLoading(false);
    }
  };

  // --- REALISTIC & PREMIUM ANIMATIONS ---

  // 1. Form Body Container (Rises smoothly first)
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
        staggerChildren: 0.1, // Stagger the inputs inside naturally
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
        damping: 18, // High damping so it settles smoothly without wobbling
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
      },
    },
  };

  const leftItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="contact"
      className="py-14 px-8 bg-transparent relative scroll-mt-[-50px]"
    >
      <h2 className="text-4xl md:text-6xl lg:text-5xl mb-12 text-center tracking-wide font-bold">
        <span className="text-white">CONTACT</span>
        <span className="text-[rgba(92,252,0,0.67)]"> US</span>
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
       {/* LEFT SIDE */}
<motion.div
 
  className="space-y-6 mt-6 md:mt-20 order-2 md:order-1 text-center md:text-left"
  variants={leftContainerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  <div>
    <motion.p
      variants={leftItemVariants}
      className="text-[rgba(92,252,0,0.67)] uppercase text-sm mb-1"
    >
      Address
    </motion.p>

    <motion.h3
      variants={leftItemVariants}
      className="text-lg md:text-xl font-semibold text-white"
    >
      Takshion Deep Tech  Pvt. Ltd.
    </motion.h3>

    <motion.p
      variants={leftItemVariants}
     className="text-gray-300 mt-2 leading-7 max-w-sm mx-auto md:mx-0 text-center md:text-justify"
    >
      1004, Kingsbury, Charholi Khurd, <br></br>
      Taluka Khed,District Pune,<br></br>
       Maharashtra – 412105, India
    </motion.p>
  </div>

<motion.div
  variants={leftItemVariants}
  className="flex items-center justify-center md:justify-start gap-3"
>
    <Mail className="w-5 h-5 text-[rgba(92,252,0,0.67)]" />

    <a
      href="mailto:info@takshion.com"
    className="text-gray-500 hover:text-[rgba(92,252,0,0.9)] transition-colors text-center md:text-left"
    >
      info@takshion.com
    </a>
  </motion.div>
</motion.div>
      {/* RIGHT SIDE: CONTACT FORM */}
<div className="flex justify-center order-1 md:order-2">
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
            className="magnet-container bg-white/1 backdrop-blur-lg border border-[rgba(92,252,0,0.67)]/20 rounded-2xl p-8 shadow-xl glow-target w-full relative overflow-hidden"
          >
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

            {/* Inner Form Elements Stagger In */}
            <motion.h3
              variants={formElementVariants}
              className="text-[rgba(92,252,0,0.67)] text-xl mb-5 tracking-widest font-semibold"
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
                  placeholder="Full Name"
                  required
                  minLength={3}
                  maxLength={50}
                  pattern="^(?!\d+$).*\S.*$"
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
                  maxLength={100}
                  pattern="^$|(?!\d+$).*\S.*$"
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
                <div>
<input
  name="phone"
  type="tel"
  placeholder="Enter Phone Number"
  autoComplete="tel"
  pattern="^\+?[0-9]{7,15}$"
  maxLength={15} // 15 digits, excluding +
  className="input-style"
  onInput={(e) => {
    // Allow only digits and one leading +
    e.target.value = e.target.value
      .replace(/[^\d+]/g, "")
      .replace(/(?!^)\+/g, "");
  }}
  onMouseEnter={moveMagnet}
  onFocus={moveMagnet}
  onBlur={resetMagnet}
/>


</div>
              </motion.div>

              {/* Message */}
              <motion.textarea
                name="message"
                rows="5"
                minLength={20}
                maxLength={1000}
                placeholder="Describe your requirements..."
                pattern="^(?!\d+$).*\S.*$"
                className="input-style w-full resize-none"
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
      w-full sm:w-auto
      group
      relative
      overflow-hidden
      px-5 sm:px-5
      py-3
      rounded-xl
      border border-[rgba(92,252,0,0.67)]
      text-[rgba(92,252,0,0.67)]
      font-medium
      tracking-normal
      transition-all duration-500
      hover:bg-[rgba(92,252,0,0.67)]/10
      hover:shadow-[0_0_30px_rgba(92,252,0,0.35)]
      hover:-translate-y-1
      active:scale-95
      disabled:opacity-50
    "
  >
    <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
      {loading ? (
        "SENDING..."
      ) : (
        <>
          <span>Send Message</span>
          <span>→</span>
        </>
      )}
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
