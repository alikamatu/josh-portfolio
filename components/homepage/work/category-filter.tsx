import { motion } from "framer-motion";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export default function CategoryFilter({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onCategoryChange(null)}
        className={`
          px-5 py-2.5 rounded-full text-sm md:text-base font-medium
          transition-all duration-300 border
          ${activeCategory === null 
            ? '' 
            : 'border-white/20 hover:border-white/40'
          }
        `}
      >
        All Work
      </motion.button>
      
      {categories.map((cat) => (
        <motion.button
          key={cat}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(cat)}
          className={`
            px-5 py-2.5 rounded-full text-sm md:text-base font-medium
            transition-all duration-300 border
            ${activeCategory === cat 
              ? 'bg-white text-black border-white' 
              : 'border-green-400 hover:border-white/40 cursor-pointer'
            }
          `}
        >
          {cat}
        </motion.button>
      ))}
    </div>
  );
}