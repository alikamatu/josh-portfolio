'use client';

import {
  motion,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import { useRef, useState } from "react";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const allCategories = ["All Work", ...categories];
  const duplicated = [...allCategories, ...allCategories];

  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isInteracting, setIsInteracting] = useState(false);

  const SPEED = 40; // px per second

  // Auto scroll engine
  useAnimationFrame((_, delta) => {
    if (isInteracting) return;

    const moveBy = (SPEED * delta) / 1000;
    const current = x.get();

    const width = containerRef.current?.scrollWidth ?? 0;

    // reset when halfway scrolled
    if (Math.abs(current) >= width / 2) {
      x.set(0);
    } else {
      x.set(current - moveBy);
    }
  });

  return (
    <div className="relative overflow-hidden w-full mb-12 md:mb-16">
      <motion.div
        ref={containerRef}
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }} // loose constraint
        onDragStart={() => setIsInteracting(true)}
        onDragEnd={() => setIsInteracting(false)}
        onHoverStart={() => setIsInteracting(true)}
        onHoverEnd={() => setIsInteracting(false)}
        className="flex gap-3 w-max cursor-grab active:cursor-grabbing"
      >
        {duplicated.map((cat, i) => {
          const isAll = cat === "All Work";
          const isActive = isAll
            ? activeCategory === null
            : activeCategory === cat;

          return (
            <motion.button
              key={`${cat}-${i}`}
              whileTap={{ scale: 0.95 }}
              onClick={() => onCategoryChange(isAll ? null : cat)}
              className={`
                whitespace-nowrap px-5 py-2.5 rounded-full text-sm md:text-base font-medium
                transition-all duration-300 border shrink-0
                ${
                  isActive
                    ? "bg-white text-black border-white"
                    : "border-white/20 hover:border-white/40"
                }
              `}
            >
              {cat}
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
