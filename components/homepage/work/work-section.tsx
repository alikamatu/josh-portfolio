"use client";

import { motion, Variants } from "framer-motion";
import ProjectCard from "./project-card";
import { useEffect, useState } from "react";
import CategoryFilter from "./category-filter";
import Pagination from "./pagination";
import { projectData } from "@/utils/projectData";
import { WORK_CATEGORIES } from "@/utils/constants";

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

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function WorkSection() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredProjects = activeCategory
    ? projectData.filter((p) => p.category === activeCategory)
    : projectData;

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (category: string | null) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  // Filter out "All" from categories
  const categories = WORK_CATEGORIES.filter(cat => cat !== "All");

  return (
    <section
      id="portfolio"
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Subtle background elements - no gradients */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-sm md:text-base uppercase tracking-widest opacity-80 mb-4">
            Portfolio
          </p>
          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            Selected Work
          </motion.h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Graphic design work that redefines norms and creates lasting impact
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </motion.div>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {paginatedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={{
                ...project,
                link: `/project/${project.id}` // Updated link structure
              }}
              isReversed={index % 2 === 1}
            />
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </motion.div>
        )}

        {/* Results Count */}
        <motion.div
          className="text-center mt-8 opacity-70 text-sm"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Showing {startIndex + 1}-{Math.min(startIndex + projectsPerPage, filteredProjects.length)} of {filteredProjects.length} projects
        </motion.div>
      </div>
    </section>
  );
}