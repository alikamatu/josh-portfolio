"use client";

import { motion, Variants } from "framer-motion";

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

  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
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
        <div className="absolute inset-0" />
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
              font-light leading-[1.2]
              text-center max-w-4xl mx-auto
              relative  tracking-widest uppercase
            `}
            variants={quoteVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Decorative quote marks */}
            <div className="absolute -top-6 -left-4 text-6xl text-gray-300 dark:text-gray-700 font-serif">&apos;</div>
            <div className="absolute -bottom-6 -right-4 text-6xl text-gray-300 dark:text-gray-700 font-serif">&apos;</div>

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
          <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
          <span className="text-xs md:text-sm font-mono tracking-widest">JOSHUA ABUGRI</span>
          <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
        </div>
      </div>
    </section>
  );
}