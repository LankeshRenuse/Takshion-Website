    "use client";

    import { motion } from "framer-motion";
    import {
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandFacebook,
    IconBrandYoutube,
    } from "@tabler/icons-react";

    const socials = [
    {
        name: "Instagram",
        icon: <IconBrandInstagram size={20} stroke={1.8} />,
        link: "https://www.instagram.com/takshiondeeptech",
        gradient: "from-pink-500 via-fuchsia-500 to-purple-600",
    },
    {
        name: "LinkedIn",
        icon: <IconBrandLinkedin size={20} stroke={1.8} />,
        link: "https://www.linkedin.com/company/takshion-deep-tech-pvt-ltd/",
        gradient: "from-blue-500 via-cyan-500 to-sky-600",
    },
    {
        name: "Facebook",
        icon: <IconBrandFacebook size={20} stroke={1.8} />,
        link: "https://www.facebook.com/profile.php?id=61590888487212",
        gradient: "from-blue-600 via-indigo-500 to-blue-800",
    },
    {
        name: "YouTube",
        icon: <IconBrandYoutube size={20} stroke={1.8} />,
        link: "https://www.youtube.com/@TakshionDeepTech",
        gradient: "from-red-500 via-rose-500 to-red-700",
    },
    ];

    export default function LuxuryFloatingSocials() {
    const itemVariants = {
        initial: { width: 48, x: 0 },
        hover: {
        width: 160,
        x: -4,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 25,
        },
        },
    };

    const textVariants = {
        initial: { opacity: 0, x: -15, scale: 0.9 },
        hover: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.05,
        },
        },
    };

    const iconVariants = {
        initial: { rotate: 0, scale: 1 },
        hover: {
        rotate: 8,
        scale: 1.05,
        transition: { duration: 0.2 },
        },
    };

    return (
        <div className="fixed right-[-8px] top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-3 pr-2">
        {socials.map((social, index) => (
            <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            variants={itemVariants}
            initial="initial"
            whileHover="hover"
            className="relative flex items-center h-12 rounded-2xl overflow-hidden bg-black/40 backdrop-blur-lg border border-white/10 shadow-lg cursor-pointer group"
            >
            {/* Ambient Glow */}
            <div
                className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-[0.15] blur-[4px] transition-opacity duration-300`}
            />

            {/* Gradient Layer */}
            <div
                className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />

            {/* Icon */}
            <div className="relative z-10 min-w-[48px] h-full flex items-center justify-center text-white">
                <motion.div
                variants={iconVariants}
                className="p-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner"
                >
                {social.icon}
                </motion.div>
            </div>

            {/* Label */}
            <motion.span
                variants={textVariants}
                className="relative z-10 whitespace-nowrap text-white text-sm font-semibold tracking-wide pr-5 pl-2 select-none"
            >
                {social.name}
            </motion.span>
            </motion.a>
        ))}
        </div>
    );
    }