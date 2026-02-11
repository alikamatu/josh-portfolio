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

  return (
    <div className="relative w-full mb-12 md:mb-16">
      <div className="flex flex-wrap justify-center gap-3 w-full">
        {allCategories.map((cat, i) => {
          const isAll = cat === "All Work";
          const isActive = isAll
            ? activeCategory === null
            : activeCategory === cat;

          return (
            <button
              key={`${cat}-${i}`}
              onClick={() => onCategoryChange(isAll ? null : cat)}
              className={`
                whitespace-nowrap px-5 py-2.5 rounded-full text-sm md:text-base font-medium
                transition-all duration-300 border shrink-0
                ${
                  isActive
                    ? "bg-white text-black border-white"
                    : "border-gray-400 hover:border-white/40"
                }
              `}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
