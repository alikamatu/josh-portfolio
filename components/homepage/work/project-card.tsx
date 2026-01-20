import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      duration: 0.6,
    },
  },
  hover: {
    y: -8,
    transition: { duration: 0.3 }
  }
};

const imageVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      duration: 0.7,
      delay: 0.1
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      duration: 0.6,
      delay: 0.2
    },
  },
};

const lineVariants: Variants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: { duration: 0.8, ease: "easeOut" }
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
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={`
        relative flex flex-col md:flex-row ${isReversed ? "md:flex-row-reverse" : ""}
        rounded-2xl overflow-hidden border border-white/10
        bg-white/5 backdrop-blur-sm group min-h-[420px] p-8 md:p-12
      `}
    >
      {/* Decorative line */}
      <motion.div 
        className="absolute top-0 left-0 h-px bg-white/30"
        variants={lineVariants}
        initial="hidden"
        animate="visible"
      />
      
      {/* Image Section */}
      <motion.div
        className="relative flex-1 h-64 md:h-auto min-h-[280px] overflow-hidden rounded-xl"
        variants={imageVariants}
      >
        <Image
          src={project.image || "/placeholder.jpg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className={`
          flex-1 py-8 px-0 md:py-0 ${isReversed ? 'md:pr-12' : 'md:pl-12'}
          flex flex-col justify-between
        `}
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
          
          <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
            {project.title}
          </h3>
          
          <p className="text-base md:text-lg mb-4 leading-relaxed opacity-90">
            {project.description}
          </p>
          
          {project.tools && project.tools.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tools.slice(0, 3).map((tool, index) => (
                <span 
                  key={index} 
                  className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10"
                >
                  {tool}
                </span>
              ))}
            </div>
          )}
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
            className="inline-block"
          >
            →
          </motion.span>
        </Link>
      </motion.div>
    </motion.div>
  );
}