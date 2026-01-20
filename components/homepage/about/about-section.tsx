"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CLIENT_LIST, SKILLS } from "@/utils/constants";

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
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      type: "spring", 
      damping: 15, 
      stiffness: 100, 
      duration: 0.8 
    },
  },
};

const photoVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      duration: 0.8,
      delay: 0.2
    },
  },
};

const textVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      duration: 0.7,
    },
  },
};

const skillVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1, ease: "easeOut" }
  }
};

export default function AboutSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="about"
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Minimal background elements */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-white/5 blur-2xl" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-white/5 blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <motion.div
          className="grid grid-cols-1 gap-12 md:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          {/* Text Section */}
          <div>
            <motion.div variants={titleVariants}>
              <h2 className="text-5xl md:text-7xl text-center font-black mb-6 tracking-tight">
                About Me
              </h2>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={textVariants}
            >
              <p className="text-xl md:text-2xl leading-relaxed font-medium">
                I'm <span className="font-bold">Joshua Abugri</span>, a creative and detail-oriented <span className="font-bold text-white">Graphic Designer</span> with a strong passion for visual communication. My work redefines the norm, skillfully fusing creative visions with a deep understanding of design principles.
              </p>

              <p className="text-xl md:text-2xl leading-relaxed opacity-90">
                I specialize in creating designs that not only look good but also help brands communicate their message clearly and effectively. With experience in <span className="font-medium">branding, logo design, social media graphics, and print design</span>, I've worked on projects that require creativity, strategy, and consistency.
              </p>

              <p className="text-xl md:text-2xl leading-relaxed opacity-90">
                I enjoy turning ideas into visually engaging designs that connect with audiences and support business goals. I'm always learning new design trends and techniques to improve my craft.
              </p>
            </motion.div>

                      {/* Photo Section */}
          <motion.div
            className="relative"
            variants={photoVariants}
          >
            <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden my-8">
              {/* Main Profile Photo */}
              <Image
                src="/photo.jpeg" // Update with your photo path
                alt="Joshua Abugri - Graphic Designer"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>

            {/* Skills Section */}
            <motion.div 
              className="mt-12"
              variants={textVariants}
            >
              <h3 className="text-3xl font-bold mb-8">Software & Skills</h3>
              
              <div className="space-y-6">
                {SKILLS.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-green-400 rounded-full"
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

            {/* Clients Section */}
            <motion.div 
              className="mt-12"
              variants={textVariants}
            >
              <h3 className="text-3xl font-bold mb-6">Selected Clients</h3>
              <div className="flex flex-wrap gap-3">
                {CLIENT_LIST.map((client) => (
                  <span
                    key={client}
                    className="px-4 py-2 rounded-lg border border-white/20 text-sm"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Experience Summary */}
        <motion.div
          className="mt-20 pt-12 border-t border-white/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              variants={textVariants}
            >
              <div className="text-4xl font-bold mb-2">3+</div>
              <div className="text-white/70">Years Experience</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={textVariants}
            >
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-white/70">Projects Completed</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={textVariants}
            >
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-white/70">Client Satisfaction</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}