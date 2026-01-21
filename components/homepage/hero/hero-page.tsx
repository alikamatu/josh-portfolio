"use client";

import { letterVariants, photoVariants, taglineVariants } from "@/utils/animations";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Designer squares component
function DesignerSquares() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Grid of subtle designer squares */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 opacity-0 dark:opacity-0">
        {Array.from({ length: 64 }).map((_, i) => (
          <motion.div
            key={i}
            className="border border-gray-200 dark:border-gray-800/30 rounded-sm"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.02, 0.05, 0.02],
            }}
            transition={{
              duration: 3,
              delay: i * 0.02,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Golden ratio inspired floating squares */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-24 h-24 border border-gray-300/20 dark:border-white/10 rounded-sm"
        animate={{
          scale: [1, 1.02, 1],
          rotate: [0, 1, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-16 h-16 border border-gray-300/20 dark:border-white/10 rounded-sm"
        animate={{
          scale: [1, 1.03, 1],
          rotate: [0, -1, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          delay: 0.5
        }}
      />

      {/* Diagonal grid lines - very subtle */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/[0.02] to-transparent dark:via-white/[0.01] w-full h-px top-1/3" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/[0.02] to-transparent dark:via-white/[0.01] w-px h-full left-1/3" />
      </div>

      {/* "I AM A DESIGNER" hidden message - appears on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-700">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-black/5 to-transparent dark:via-white/5 blur-xl" />
          <div className="relative px-8 py-4">
            <div className="text-center">
              <div className="inline-block px-6 py-2 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-800 shadow-lg">
                <span className="text-sm font-medium tracking-widest text-gray-600 dark:text-gray-400 uppercase">
                  I AM A DESIGNER
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroPage() {
  const [mounted, setMounted] = useState(false);
  const [showDesignerMessage, setShowDesignerMessage] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      className="relative min-h-full md:min-h-screen flex items-center justify-center overflow-hidden px-5 sm:px-8 md:px-12 pt-34 md:pt-0"
      onMouseEnter={() => setShowDesignerMessage(true)}
      onMouseLeave={() => setShowDesignerMessage(false)}
    >
      {/* Original animated background */}
      <div className="absolute inset-0 z-0 opacity-[0.07] dark:opacity-[0.12] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(120,120,255,0.12),transparent_40%)] dark:bg-[radial-gradient(circle_at_20%_30%,rgba(100,140,255,0.18),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,100,180,0.08),transparent_40%)] dark:bg-[radial-gradient(circle_at_80%_70%,rgba(255,140,200,0.14),transparent_45%)]" />
      </div>

      {/* Add Designer Squares */}
      <DesignerSquares />

      {/* Floating designer elements - modern touch */}
      {mounted && (
        <>
          <motion.div
            className="absolute top-20 right-20 w-3 h-3 bg-blue-500/20 dark:bg-blue-400/20 rounded-full hidden md:block"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-2 h-2 bg-pink-500/20 dark:bg-pink-400/20 rounded-full hidden md:block"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7, duration: 0.5 }}
          />
          <motion.div
            className="absolute top-1/2 left-10 w-1 h-1 bg-yellow-500/20 dark:bg-yellow-400/20 rounded-full hidden md:block"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.9, duration: 0.5 }}
          />
        </>
      )}

      {/* Designer grid overlay - very subtle */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-0 dark:opacity-[0.03]">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl w-full text-center">
        {/* Name stack */}
        <div className="relative mb-10 md:mb-16">
          {/* Add subtle designer annotation */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 dark:opacity-90">
            <div className="flex items-center gap-2">
              <div className="w-8 h-px bg-green-400" />
              <span className="text-xs font-mono tracking-widest opacity-60">I AM</span>
              <div className="w-8 h-px bg-green-400" />
            </div>
          </div>

          {/* First name - huge */}
          <div className="overflow-hidden">
            <motion.h1
              className={`
                text-[clamp(4.2rem,12vw,13rem)] 
                leading-[0.88] font-black tracking-[-0.04em]
                relative
              `}
              initial="hidden"
              animate="visible"
            >
              {/* Designer annotation dots */}
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-0 dark:opacity-20">
                {[1, 2, 3].map((dot) => (
                  <div key={dot} className="w-1 h-1 rounded-full bg-gray-500" />
                ))}
              </div>
              
              {"Joshua".split("").map((char, i) => (
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
              group
            `}
            variants={photoVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.02 }}
          >
            {/* Add designer badge overlay on photo */}
            <div className="absolute top-4 right-4 z-10">
              <div className="px-2 py-1 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded text-xs font-semibold tracking-wider text-gray-700 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                DESIGNER
              </div>
            </div>
            
            <Image
              src="/photo.jpeg"
              alt="Josh Designs"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
              sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 384px"
            />
          </motion.div>

          {/* Last name – even bigger, confident */}
          <div className="overflow-hidden mt-4 md:mt-8 relative">
            {/* Design alignment lines - very subtle */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gray-200/30 dark:bg-gray-800/30 hidden md:block" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200/30 dark:bg-gray-800/30 hidden md:block" />
            
            <motion.h1
              className={`
                text-[clamp(5.5rem,15vw,17rem)] 
                leading-[0.82] font-black tracking-[-0.055em]
                hero-text
                bg-clip-text text-transparent
                relative
              `}
              initial="hidden"
              animate="visible"
            >
              {"ABUGRI".split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i + 6}
                  variants={letterVariants}
                  className="inline-block hover:text-green-400 dark:hover:text-green-400 transition-colors duration-300"
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
            text-xl sm:text-2xl 
            font-medium max-w-4xl mx-auto leading-tight
            mb-12 md:mb-16
            relative
          `}
          variants={taglineVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Decorative brackets */}
          <span className="absolute -left-6 top-0 text-gray-300 dark:text-gray-700 font-serif text-3xl hidden md:block">[</span>
          <span className="absolute -right-6 top-0 text-gray-300 dark:text-gray-700 font-serif text-3xl hidden md:block">]</span>
          
          Branding & Visual Identity • Logo Design • Social Media & Digital Graphics • Print Design (flyers, posters, business cards) • Adobe Creative Suite (Photoshop, Illustrator, InDesign) • Creative Concept Development
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Designer dot grid behind CTA */}
          <div className="absolute -inset-4 -z-10 opacity-0 dark:opacity-30">
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-gray-400 mx-auto" />
              ))}
            </div>
          </div>

          <Link
            href="#portfolio"
            className={`
              inline-flex items-center gap-3 px-8 py-5 
              text-lg md:text-xl font-medium rounded-full
              transition-all duration-500
              hover:-translate-y-1
              relative group
            `}
          >
            {/* Designer accent line */}
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-0.5 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            Explore the Work
            <span 
              aria-hidden
              className="group-hover:translate-x-2 transition-transform duration-300"
            >
              →
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Corner designer annotations */}
      <div className="absolute top-8 left-8 opacity-0 dark:opacity-90 hidden md:block">
        <div className="rotate-90 origin-top-left">
          <span className="text-xs font-mono tracking-widest text-gray-500">DESIGN BY</span>
        </div>
      </div>
      <div className="absolute bottom-8 right-8 opacity-0 dark:opacity-90 hidden md:block">
        <div className="-rotate-90 origin-bottom-right">
          <span className="text-xs font-mono tracking-widest text-gray-500">CREATIVE DIRECTION</span>
        </div>
      </div>
    </section>
  );
}