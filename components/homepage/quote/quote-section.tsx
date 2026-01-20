"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBrush, FaEye, FaLightbulb, FaPalette, FaPencilAlt } from "react-icons/fa";

// Skill badges data
const skills = [
  { name: "Adobe Photoshop", level: 75, icon: <FaEye className="inline mr-2" />, color: "from-blue-500 to-gray-500" },
  { name: "Adobe Illustrator", level: 85, icon: <FaEye className="inline mr-2" />, color: "from-orange-500 to-yellow-500" },
  { name: "Adobe InDesign", level: 70, icon: <FaEye className="inline mr-2" />, color: "from-pink-500 to-rose-500" },
  { name: "Premier Pro", level: 65, icon: <FaEye className="inline mr-2" />, color: "from-green-500 to-teal-500" },
  { name: "After Effects", level: 60, icon: <FaEye className="inline mr-2" />, color: "from-gray-500 to-indigo-500" },
  { name: "Visual Identity", level: 90, icon: <FaEye className="inline mr-2" />, color: "from-indigo-500 to-blue-500" },
];

// Project highlights
const projectHighlights = [
  {
    client: "Kailyn Hairmelo Hub",
    type: "Logo & Brand Identity",
    color: "bg-gradient-to-br from-pink-100 to-gray-100 dark:from-pink-900/30 dark:to-gray-900/30",
    borderColor: "border-pink-200 dark:border-pink-800"
  },
  {
    client: "Millennium Prayer House Chapel",
    type: "Print Design",
    color: "bg-gradient-to-br from-blue-100 to-gray-100 dark:from-blue-900/30 dark:to-gray-900/30",
    borderColor: "border-blue-200 dark:border-blue-800"
  },
  {
    client: "MaaB's Braids & Dreadlocks",
    type: "Social Media Graphics",
    color: "bg-gradient-to-br from-green-100 to-gray-100 dark:from-green-900/30 dark:to-gray-900/30",
    borderColor: "border-green-200 dark:border-green-800"
  },
];

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

const skillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export default function QuoteSection() {
  const [mounted, setMounted] = useState(false);
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      {/* Enhanced background with geometric patterns */}
      <div className="absolute inset-0 z-0 opacity-[0.08] dark:opacity-[0.12] pointer-events-none">
        {/* Geometric grid pattern */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(45deg, #f0f0f0 1px, transparent 1px),
              linear-gradient(-45deg, #f0f0f0 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
      </div>

      {/* Designer floating elements */}
      <div className="absolute top-[10%] left-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-gray-400/10 to-gray-400/10 backdrop-blur-3xl animate-slow-float opacity-70" />
      <div className="absolute top-[20%] right-[15%] w-24 h-24 rounded-lg bg-gradient-to-br from-blue-400/10 to-gray-400/10 backdrop-blur-3xl animate-slow-float opacity-60 rotate-12" style={{ animationDelay: "-2s" }} />
      <div className="absolute bottom-[30%] left-[20%] w-16 h-16 rounded-lg bg-gradient-to-br from-green-400/10 to-gray-400/10 backdrop-blur-3xl animate-slow-float opacity-50 -rotate-12" style={{ animationDelay: "-3s" }} />

      {/* Golden ratio spiral decoration */}
      <div className="absolute bottom-10 right-10 w-64 h-64 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0 border border-gray-300 dark:border-gray-700 rounded-full" />
        <div className="absolute inset-8 border border-gray-300 dark:border-gray-700 rounded-full" />
        <div className="absolute inset-16 border border-gray-300 dark:border-gray-700 rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Main Quote / Philosophy */}
        <div className="mb-20">
          <motion.blockquote
            className={`
              text-sm
              font-light leading-[1.2] tracking-[-0.02em]
              text-center max-w-4xl mx-auto
              relative
            `}
            variants={quoteVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Decorative quote marks */}
            <div className="absolute -top-6 -left-4 text-6xl text-gray-300 dark:text-gray-700 font-serif">"</div>
            <div className="absolute -bottom-6 -right-4 text-6xl text-gray-300 dark:text-gray-700 font-serif">"</div>

            <motion.span variants={lineVariants} className="block mb-4">
              I am a graphic designer whose work{" "}
              <span className="relative">
                <span className="font-bold bg-clip-text">
                  redefines the norm
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 font-bold" />
              </span>
            </motion.span>
            <motion.span variants={lineVariants} className="block mb-4">
              I skillfully fuse creative visions with a deep understanding of relativity,
            </motion.span>
            <motion.span variants={lineVariants} className="block mb-4">
              resulting in designs that are both{" "}
              <span className="font-bold bg-clip-text">
                visually stunning
              </span>{" "}
              and{" "}
              <span className="font-bold bg-clip-text">
                intellectually stimulating
              </span>
            </motion.span>
            <motion.span variants={lineVariants} className="block">
              My unique perspective creates visuals that{" "}
              <span className="relative">
                spark conversation
                <span className="absolute -bottom-1 left-0 w-full h-1 font-bold rounded-full" />
              </span>{" "}
              and leave a lasting impact
            </motion.span>
          </motion.blockquote>
        </div>
        </div>


      {/* Designer signature at bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-20 dark:opacity-30">
        <div className="flex items-center gap-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
          <span className="text-sm font-mono tracking-widest">JOSHUA ABUGRI</span>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
        </div>
      </div>
    </section>
  );
}