"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { SOCIAL_LINKS } from "@/utils/constants";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const titleVariants: Variants = {
  hidden: { y: 80, opacity: 0, filter: "blur(10px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { type: "spring", damping: 12, stiffness: 80, duration: 1.2 },
  },
};

const formVariants: Variants = {
  hidden: { y: 60, opacity: 0, filter: "blur(8px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { type: "spring", damping: 16, stiffness: 100, duration: 1.1 },
  },
};

const socialVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  hover: { scale: 1.1, transition: { duration: 0.4 } },
};

export default function ContactSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      {/* Subtle background diffusion */}
      <div className="absolute inset-0 z-0 opacity-[0.06] dark:opacity-[0.1] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(80,200,255,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_30%,rgba(100,180,255,0.15),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,120,150,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_70%,rgba(255,150,180,0.12),transparent_55%)]" />
      </div>

      {/* Floating glass orbs for depth */}
      <div className="absolute top-[10%] left-[5%] w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-white/10 to-transparent backdrop-blur-3xl dark:from-white/5 dark:to-transparent -z-10 animate-slow-float opacity-60" />
      <div className="absolute bottom-[15%] right-[10%] w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-white/10 to-transparent backdrop-blur-3xl dark:from-white/5 dark:to-transparent -z-10 animate-slow-float opacity-60" style={{ animationDelay: "-5s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 md:px-12">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className={`
              text-[clamp(3.5rem,10vw,9rem)] 
              font-black tracking-[-0.03em] mb-12 md:mb-16
            `}
            variants={titleVariants}
          >
            Get in Touch
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed"
            variants={formVariants}
          >
            Let's collaborate on your next project. Drop a message, and I'll get back to you soon.
          </motion.p>

          {/* Contact Form */}
          <motion.form
            className="max-w-2xl mx-auto space-y-8"
            variants={formVariants}
            // action="/api/contact" // Update with your form handler (e.g., Formspree, Netlify Forms)
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className={`
                w-full px-6 py-4 rounded-xl text-lg
                bg-white/80 dark:bg-black/50 border border-gray-300 dark:border-gray-700
                placeholder-gray-500 dark:placeholder-gray-400
                focus:outline-none focus:border-black dark:focus:border-white
                backdrop-blur-sm transition-all duration-300
              `}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className={`
                w-full px-6 py-4 rounded-xl text-lg
                bg-white/80 dark:bg-black/50 border border-gray-300 dark:border-gray-700
                placeholder-gray-500 dark:placeholder-gray-400
                focus:outline-none focus:border-black dark:focus:border-white
                backdrop-blur-sm transition-all duration-300
              `}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              required
              className={`
                w-full px-6 py-4 rounded-xl text-lg
                bg-white/80 dark:bg-black/50 border border-gray-300 dark:border-gray-700
                placeholder-gray-500 dark:placeholder-gray-400
                focus:outline-none focus:border-black dark:focus:border-white
                backdrop-blur-sm transition-all duration-300
              `}
            />
            <button
              type="submit"
              className={`
                w-full px-8 py-4 text-lg font-semibold rounded-xl
                transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1
              `}
            >
              Send Message
            </button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            className="mt-16 flex justify-center gap-6 md:gap-8"
            variants={formVariants}
          >
            {Object.entries(SOCIAL_LINKS).map(([key, url]) => (
              <motion.a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  text-3xl md:text-4xl
                  transition-colors duration-300
                `}
                variants={socialVariants}
                whileHover="hover"
                aria-label={`Connect on ${key.charAt(0).toUpperCase() + key.slice(1)}`}
              >
                {/* Use initials or replace with SVG icons */}
                {key.charAt(0).toUpperCase()}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}