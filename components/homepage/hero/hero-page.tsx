"use client";

import { letterVariants, photoVariants, taglineVariants } from "@/utils/animations";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function HeroPage() {
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <section className="relative min-h-full md:min-h-screen flex items-center justify-center overflow-hidden px-5 sm:px-8 md:px-12 pt-34 md:pt-0">
      {/* Subtle animated background noise / light diffusion */}
      <div className="absolute inset-0 z-0 opacity-[0.07] dark:opacity-[0.12] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(120,120,255,0.12),transparent_40%)] dark:bg-[radial-gradient(circle_at_20%_30%,rgba(100,140,255,0.18),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,100,180,0.08),transparent_40%)] dark:bg-[radial-gradient(circle_at_80%_70%,rgba(255,140,200,0.14),transparent_45%)]" />
      </div>


      <div className="relative z-10 max-w-7xl w-full text-center">
        {/* Name stack */}
        <div className="relative mb-10 md:mb-16">
          {/* First name - huge */}
          <div className="overflow-hidden">
            <motion.h1
              className={`
                text-[clamp(4.2rem,12vw,13rem)] 
                leading-[0.88] font-black tracking-[-0.04em]
              `}
              initial="hidden"
              animate="visible"
            >
              {"Josh".split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Floating circular photo – cinematic entrance */}
          <motion.div
            className={`
              hidden absolute -bottom-8 md:top-96 left-1/2 -translate-x-1/2
              w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72
              rounded-full overflow-hidden border-8 border-white/90 dark:border-black/70
              shadow-2xl shadow-black/25 dark:shadow-black/60
              backdrop-blur-sm
            `}
            variants={photoVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Replace with your own photo */}
            <Image
              src="/photo.jpeg" // ← update path
              alt="Josh Designs"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 384px"
            />
          </motion.div>

          {/* Last name – even bigger, confident */}
          <div className="overflow-hidden mt-4 md:mt-8">
            <motion.h1
              className={`
                text-[clamp(5.5rem,15vw,17rem)] 
                leading-[0.82] font-black tracking-[-0.055em]
                bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300
                bg-clip-text text-transparent
              `}
              initial="hidden"
              animate="visible"
            >
              {"DESIGNS".split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i + 6} // delay after first name
                  variants={letterVariants}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </div>
        </div>

        {/* Tagline / role */}
        <motion.p
          className={`
            text-xl sm:text-2xl md:text-3xl lg:text-4xl 
            font-medium max-w-4xl mx-auto leading-tight
            mb-12 md:mb-16
          `}
          variants={taglineVariants}
          initial="hidden"
          animate="visible"
        >
          Creative Direction • UI/UX • Motion • Branding • Digital Experiences
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 1, ease: "easeOut" }}
        >
          <Link
            href="#portfolio"
            className={`
              inline-flex items-center gap-3 px-8 py-5 
              text-lg md:text-xl font-medium rounded-full
              transition-all duration-500
              shadow-lg hover:shadow-xl
              hover:-translate-y-1
            `}
          >
            Explore the Work
            <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}