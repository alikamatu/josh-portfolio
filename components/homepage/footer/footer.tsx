"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SOCIAL_LINKS } from "@/utils/constants";

const footerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.4,
    },
  },
};

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <footer
      className="relative py-12 md:py-16 overflow-hidden"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      {/* Subtle diffusion for consistency */}
      <div className="absolute inset-0 z-0 opacity-[0.04] dark:opacity-[0.08] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(120,120,255,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_80%,rgba(100,140,255,0.12),transparent_55%)]" />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 text-center"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3
          className={`
            text-3xl md:text-4xl font-bold mb-6 tracking-tight
          `}
        >
          Josh Designs
        </h3>

        <div className="flex justify-center gap-6 md:gap-8 mb-8">
          {Object.entries(SOCIAL_LINKS).map(([key, url]) => (
            <Link
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white
                transition-colors duration-300 text-2xl md:text-3xl
              `}
              aria-label={`Follow on ${key.charAt(0).toUpperCase() + key.slice(1)}`}
            >
              {/* Simple text icons; replace with SVG icons if preferred */}
              {key.charAt(0).toUpperCase()}
            </Link>
          ))}
        </div>

        <p className="text-sm md:text-base text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} Josh Designs. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}