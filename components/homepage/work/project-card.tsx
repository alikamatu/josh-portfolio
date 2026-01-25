'use client';

import { motion, Variants, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 20, stiffness: 100 }
  },
  hover: { y: -8, transition: { duration: 0.3 } }
};

const imageVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", damping: 20, stiffness: 100, delay: 0.1 }
  }
};

const textVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", damping: 20, stiffness: 100, delay: 0.2 }
  }
};

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
  client?: string;
  industry?: string;
  tools?: string[];
};

export default function ProjectCard({
  project,
  isReversed = false,
}: {
  project: Project;
  isReversed?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Close on ESC + lock scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  return (
    <>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className={`relative flex flex-col md:flex-row ${
          isReversed ? "md:flex-row-reverse" : ""
        } rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm group min-h-[420px] p-8 md:p-12`}
      >
        {/* Image Section */}
        <motion.div
          layoutId={`project-image-${project.id}`}
          className="relative flex-1 h-64 md:h-auto min-h-[280px] overflow-hidden rounded-xl cursor-zoom-in"
          variants={imageVariants}
          onClick={() => setIsOpen(true)}
        >
          <Image
            src={project.image || "/placeholder.jpg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className={`flex-1 py-8 px-0 md:py-0 ${
            isReversed ? "md:pr-12" : "md:pl-12"
          } flex flex-col justify-between`}
          variants={textVariants}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-widest font-semibold opacity-90 px-3 py-1 rounded-full border border-white/20">
                {project.category}
              </span>
              {project.client && (
                <span className="text-sm opacity-70">for {project.client}</span>
              )}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              {project.title}
            </h3>

            <p className="text-base md:text-lg mb-4 opacity-90">
              {project.description}
            </p>
          </div>

          <Link
            href={project.link}
            className="group/link inline-flex items-center gap-2 text-base font-medium"
          >
            <span className="transition-all duration-300 group-hover/link:pr-2">
              View Case Study
            </span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>

<AnimatePresence>
  {isOpen && (
    <motion.div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xl flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setIsOpen(false)} // click outside closes
    >
      {/* CLOSE BUTTON */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-6 right-6 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-xl transition"
        aria-label="Close image"
      >
        ✕
      </button>

      {/* IMAGE CONTAINER */}
      <motion.div
        layoutId={`project-image-${project.id}`}
        className="relative w-full max-w-6xl h-[85vh] rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()} // prevents close when clicking image
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        <Image
          src={project.image || "/placeholder.jpg"}
          alt={project.title}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}