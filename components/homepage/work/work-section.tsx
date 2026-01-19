"use client";

import { motion, Variants } from "framer-motion";
import { WORK_CATEGORIES } from "@/utils/constants";
import ProjectCard from "./project-card";
import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Google Workspace Redesign",
    category: "UI/UX",
    image: "/photo.jpeg",
    description: "Reimagined collaboration tools with anti-gravity interactions.",
    link: "/projects/google-workspace",
  },
] as const;

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
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", damping: 12, stiffness: 80, duration: 1.4 },
  },
};

export default function WorkSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  // Optional: Filter state for categories
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const filteredProjects = activeCategory
    ? projects.filter((p) => p.category === activeCategory)
    : projects;

  return (
    <section
      id="portfolio"
      className="relative py-8 md:py-16 overflow-hidden"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      {/* Subtle background diffusion */}
      <div className="absolute inset-0 z-0 opacity-[0.06] dark:opacity-[0.1] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(80,200,255,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_10%_20%,rgba(100,180,255,0.15),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(255,120,150,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_90%_80%,rgba(255,150,180,0.12),transparent_55%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Title */}
        <motion.h2
          className={`
            text-[clamp(3.5rem,10vw,9rem)] 
            font-black tracking-[-0.03em] mb-16 md:mb-24 text-center
          `}
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Selected Work
        </motion.h2>

        {/* Category Filters – Reusable buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-12 md:mb-16">
          <button
            onClick={() => setActiveCategory(null)}
            className={`
              px-5 py-2.5 md:px-7 md:py-3 rounded-full text-base md:text-lg font-medium
              transition-all duration-300
            `}
          >
            All
          </button>
          {WORK_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-5 py-2.5 md:px-7 md:py-3 rounded-full text-base md:text-lg font-medium
                transition-all duration-300
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isReversed={index % 2 === 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}