"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { SKILLS } from "@/utils/constants";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", damping: 18, stiffness: 100 },
  },
};

const skillVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function AboutSection() {
  return (
    <section
      id="aboutme"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden"
    >
      {/* Glow BG */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-green-400/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-400/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* ✅ CENTERED TITLE */}
          <motion.h2
            variants={fadeUp}
            className="text-center text-[clamp(2.4rem,7vw,5.5rem)] font-black tracking-[-0.03em] mb-14"
          >
            About Me
          </motion.h2>

          {/* ✅ IMAGE + ABOUT FLEX */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* IMAGE */}
            <motion.div variants={fadeUp} className="w-full lg:w-1/2">
              <div className="relative h-[320px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden group">
                <Image
                  src="/profile/54358df2-c21a-4103-b319-1d32be90999f.jpg"
                  alt="Joshua Abugri"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
            </motion.div>

            {/* ABOUT TEXT */}
            <motion.div
              variants={fadeUp}
              className="w-full lg:w-1/2 space-y-5 text-center lg:text-left"
            >
              <p className="text-lg leading-relaxed">
                I am <span className="font-bold">Joshua Abugri</span>, a creative
                and detail-oriented{" "}
                <span className="font-semibold text-green-400">
                  Graphic Designer
                </span>{" "}
                passionate about visual communication.
              </p>

              <p className="text-lg leading-relaxed">
                I specialize in branding, logo design, social media graphics,
                and print design — delivering creative and strategic results.
              </p>

              <p className="text-lg leading-relaxed">
                I transform ideas into visually engaging designs that resonate
                with audiences and support business objectives.
              </p>
            </motion.div>
          </div>

          {/* ✅ SKILLS + STATS BOTTOM SECTION */}
          <motion.div variants={fadeUp} className="mt-20 grid lg:grid-cols-2 gap-12">
            {/* SKILLS */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Software & Skills</h3>
              <p className="text-sm mb-6">
                Proficiency across design tools and disciplines
              </p>

              <div className="space-y-5">
                {SKILLS.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden bg-white/10">
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-500 to-green-300"
                        variants={skillVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ width: `${skill.level}%`, transformOrigin: "left" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-6">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "50+", label: "Projects" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-xl border-color backdrop-blur">
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm opacity-70">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
