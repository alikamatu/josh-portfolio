"use client";

import { motion, Variants } from "framer-motion";

const insightVariants: Variants = {
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

export default function InsightSection() {


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
      <div className="absolute top-[25%] left-[10%] w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-white/10 to-transparent backdrop-blur-3xl dark:from-white/5 dark:to-transparent -z-10 animate-slow-float opacity-50" />
      <div className="absolute bottom-[15%] right-[15%] w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-white/10 to-transparent backdrop-blur-3xl dark:from-white/5 dark:to-transparent -z-10 animate-slow-float opacity-50" style={{ animationDelay: "-6s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 md:px-12 text-center">
        <motion.blockquote
          className={`u
            text-[clamp(1.5rem,7vw,1.0rem)] 
            font-light leading-[1.15] tracking-[-0.02em]
          `}
          variants={insightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span variants={lineVariants} className="block">
            <strong>I believe good design does not start with pixels.</strong>
          </motion.span>
          <motion.span variants={lineVariants} className="block">
            <strong>It starts with people.</strong> Their habits, their quirks,
          </motion.span>
          <motion.span variants={lineVariants} className="block">
            their late-night rants about why they hate filling forms.
          </motion.span>
          <motion.span variants={lineVariants} className="block">
            Haha, it&apos;s all about the stories people tell
          </motion.span>
          <motion.span variants={lineVariants} className="block">
            <strong>without ever saying a word.</strong>
          </motion.span>
        </motion.blockquote>
      </div>
    </section>
  );
}