"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const quoteVariants: Variants = {
  hidden: { opacity: 0, y: 80, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 14,
      stiffness: 90,
      duration: 1.4,
      staggerChildren: 0.15,
    },
  },
};

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function QuoteSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <section
      className="relative py-8 md:py-16 overflow-hidden"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      {/* Subtle background diffusion */}
      <div className="absolute inset-0 z-0 opacity-[0.06] dark:opacity-[0.1] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,rgba(80,200,255,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_40%_50%,rgba(100,180,255,0.15),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,rgba(255,120,150,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_60%_50%,rgba(255,150,180,0.12),transparent_55%)]" />
      </div>

      {/* Floating glass elements for depth */}
      <div className="absolute top-[30%] left-[15%] w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-white/10 to-transparent backdrop-blur-3xl dark:from-white/5 dark:to-transparent -z-10 animate-slow-float opacity-60" />
      <div className="absolute bottom-[20%] right-[10%] w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-white/10 to-transparent backdrop-blur-3xl dark:from-white/5 dark:to-transparent -z-10 animate-slow-float opacity-60" style={{ animationDelay: "-4s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 md:px-12 text-center">
        <motion.blockquote
          className={`
            text-[clamp(2rem,6vw,0.5rem)] 
            font-bold leading-[1.15] tracking-[-0.02em]
          `}
          variants={quoteVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span variants={lineVariants} className="block">
            I design from the smallest cues —
          </motion.span>
          <motion.span variants={lineVariants} className="block">
            a conversation at a chai tapri,
          </motion.span>
          <motion.span variants={lineVariants} className="block">
            a missed click, a moment of hesitation.
          </motion.span>
          <motion.span variants={lineVariants} className="block">
            That’s where design really starts
          </motion.span>
          <motion.span variants={lineVariants} className="block">
            in the everyday!
          </motion.span>
        </motion.blockquote>
      </div>
    </section>
  );
}