"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { SKILLS } from "@/utils/constants";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const titleVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      type: "spring", 
      damping: 15, 
      stiffness: 100, 
      duration: 0.6 
    },
  },
};

const photoVariants: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      duration: 0.7,
    },
  },
};

const textVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      duration: 0.5,
    },
  },
};

const skillVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function AboutSection() {
  return (
    <section
      id="aboutme"
      className="relative py-12 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 z-0 " />
      
      {/* Minimal background elements */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-green-400/20 to-blue-400/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-l from-green-400/20 to-blue-400/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          
          {/* Left Column - Text Content */}
          <div className="lg:w-7/12 space-y-8">
            <motion.div variants={titleVariants}>
          <motion.h2
            className="
            text-[clamp(2.5rem,7vw,6rem)] 
            font-black tracking-[-0.03em] mb-12 md:mb-16"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            About Me
          </motion.h2>
            </motion.div>

            <motion.div
              className="space-y-5"
              variants={textVariants}
            >
              <p className="text-lg leading-relaxed">
                I am <span className="font-bold">Joshua Abugri</span>, a creative and detail-oriented <span className="font-semibold text-green-400">Graphic Designer</span> passionate about visual communication. I blend creative vision with design principles to craft impactful solutions.
              </p>

              <p className="text-lg leading-relaxed ">
                I specialize in creating designs that not only look exceptional but also communicate brand messages clearly. With expertise in <span className="font-bold">branding, logo design, social media graphics, and print design</span>, I deliver creative, strategic, and consistent results.
              </p>

              <p className="text-lg leading-relaxed ">
                I transform ideas into visually engaging designs that resonate with audiences and support business objectives, continually evolving with design trends and techniques.
              </p>
            </motion.div>

            {/* Single Image Section */}
            <motion.div
              variants={photoVariants}
              className="mt-8"
            >
              <div className="relative h-[400px] sm:h-[450px] md:h-[500px] rounded-2xl overflow-hidden group">
                <Image
                  src="/profile/54358df2-c21a-4103-b319-1d32be90999f.jpg"
                  alt="Joshua Abugri - Graphic Designer Portfolio"
                  fill
                  className="
                    object-cover
                    transition-all duration-700 ease-out
                    group-hover:scale-105
                  "
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                />
                {/* Gradient overlay */}
                <div className="
                  absolute inset-0 
                  bg-gradient-to-t from-black/70 via-black/30 to-transparent
                  opacity-80 group-hover:opacity-60
                  transition-opacity duration-500
                " />
                {/* Decorative corner accents */}
                <div className="absolute top-4 left-4 right-4 bottom-4 border border-white/10 rounded-xl" />
              </div>
            </motion.div>
          </div>

          {/* Right Column - Skills & Stats */}
          <div className="lg:w-5/12 space-y-8">
            {/* Skills Section */}
            <motion.div 
              className="space-y-6"
              variants={textVariants}
            >
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">
                  Software & Skills
                </h3>
                <p className=" text-sm mb-6">
                  Proficiency across design tools and disciplines
                </p>
              </div>
              
              <div className="space-y-5">
                {SKILLS.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium  text-sm">
                        {skill.name}
                      </span>
                      <span className="font-semibold text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-500 to-green-300 rounded-full"
                        variants={skillVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ 
                          width: `${skill.level}%`,
                          transformOrigin: "left"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              className="mt-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "3+", label: "Years Experience", desc: "Design Excellence" },
                  { value: "50+", label: "Projects", desc: "Successfully Delivered" },
                  { value: "100%", label: "Satisfaction", desc: "Client Happiness" },
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="
                      p-4 rounded-xl 
                      transition-colors duration-300
                    "
                    variants={textVariants}
                  >
                    <div className="text-2xl font-bold mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs ">
                      {stat.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}