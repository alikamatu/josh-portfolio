"use client";

import { motion, Variants,   } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CLIENT_LIST, EXPERIENCE_YEARS, SKILL_CATEGORIES } from "@/utils/constants";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.4,
    },
  },
};

const titleVariants: Variants = {
  hidden: { y: 100, opacity: 0, filter: "blur(10px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { type: "spring", damping: 12, stiffness: 80, duration: 1.4 },
  },
};

const photoVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0, filter: "blur(12px)" },
  visible: {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 14,
      stiffness: 90,
      duration: 1.2,
    },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const textVariants: Variants = {
  hidden: { y: 60, opacity: 0, filter: "blur(8px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 100,
      duration: 1.1,
    },
  },
};

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const listItemVariants: Variants = {
  hidden: { x: -40, opacity: 0, filter: "blur(6px)" },
  visible: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { type: "spring", damping: 18, stiffness: 120 },
  },
};

export default function AboutSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <section
      id="about"
      className="relative py-8 md:py-16 overflow-hidden"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      {/* Subtle background diffusion */}
      <div className="absolute inset-0 z-0 opacity-[0.06] dark:opacity-[0.1] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(80,200,255,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_40%,rgba(100,180,255,0.15),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,120,150,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_60%,rgba(255,150,180,0.12),transparent_55%)]" />
      </div>

      {/* Floating glass orb for depth */}
      <div className="absolute top-[20%] right-[10%] w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-white/8 to-transparent backdrop-blur-3xl dark:from-white/4 dark:to-transparent -z-10 animate-slow-float opacity-50" />
                  <motion.h2
              className={`
                text-[clamp(3.5rem,8vw,7rem)] mb-16 md:mb-24
                font-black tracking-[-0.04em] text-center
              `}
              variants={titleVariants}
            >
              About
            </motion.h2>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <motion.div
          className="grid grid-cols-1 gap-12 md:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          {/* Text Section – Paragraphs with staggered entrance */}
          <div className="order-1 lg:order-2">
            <motion.p
              className="text-lg md:text-xl lg:text-2xl font-medium mb-6 leading-relaxed"
              variants={textVariants}
            >
              Josh is a visionary graphic designer based in [Your Location], with over {EXPERIENCE_YEARS} years of experience crafting bold, experimental digital experiences. Drawing inspiration from cinematic storytelling and anti-gravity aesthetics, Josh specializes in creating premium designs that blend motion, branding, and immersive 3D elements.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl font-medium mb-10 leading-relaxed"
              variants={textVariants}
            >
              Having collaborated with industry giants like {CLIENT_LIST.slice(0, 3).join(", ")}, and more, Josh excels in UI/UX, Motion Design, Branding, and 3D Visualization. His approach starts with understanding user stories and cultural contexts, turning everyday interactions into monumental, confident visuals.
            </motion.p>

            {/* Experience & Skills */}
            <motion.div variants={textVariants}>
              <h3 className={`text-2xl md:text-3xl font-bold mb-4`}>
                Expertise
              </h3>
              <motion.ul
                className="list-none space-y-3 text-lg md:text-xl"
                variants={listVariants}
              >
                {SKILL_CATEGORIES.map((cat, index) => (
                  <motion.li key={cat} variants={listItemVariants}>
                    <span className="font-semibold">{cat}</span>: Mastering tools and techniques for cutting-edge results.
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Clients */}
            <motion.div className="mt-10" variants={textVariants}>
              <h3 className={`text-2xl md:text-3xl font-bold mb-4`}>
                Selected Clients
              </h3>
              <motion.ul
                className="flex flex-wrap gap-4"
                variants={listVariants}
              >
                {CLIENT_LIST.map((client) => (
                  <motion.li
                    key={client}
                    className={`
                      px-5 py-2.5 rounded-full text-base md:text-lg font-medium
                    `}
                    variants={listItemVariants}
                  >
                    {client}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>

          {/* Photo Section – Cinematic with blur-to-clear */}
          <motion.div
            className="relative order-2"
            variants={photoVariants}
            whileHover="hover"
          >
            <div className="relative w-full h-[480px] md:h-[640px] rounded-3xl overflow-hidden shadow-2xl shadow-black/30 dark:shadow-black/50 backdrop-blur-sm">
              {/* Main Profile Photo */}
              <Image
                src="/photo.jpeg" // Update with your photo path
                alt="Josh Designs"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 dark:to-black/30" />
            </div>
            {/* Small floating photo or element for experimental feel */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-[6px] border-white/80 dark:border-black/60 shadow-xl backdrop-blur-md animate-slow-float">
              <Image
                src="/photo.jpeg" // Optional secondary photo
                alt="Josh in action"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}