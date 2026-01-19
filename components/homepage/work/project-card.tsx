import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 80,
      duration: 1.2,
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const imageVariants: Variants = {
  hidden: { x: -80, opacity: 0, filter: "blur(12px)" },
  visible: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 14,
      stiffness: 90,
      duration: 1.1,
    },
  },
};

const textVariants: Variants = {
  hidden: { y: 60, opacity: 0, filter: "blur(8px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 100,
      duration: 1.1,
    },
  },
};

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
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
        rounded-2xl md:rounded-3xl overflow-hidden transition-shadow duration-700
        group min-h-[450px] p-12 border-color
      `}
    >
      {/* Image Section */}
      <motion.div
        className="relative flex-1 h-72 md:h-auto min-h-[320px] max-w-[400px] overflow-hidden rounded-2xl"
        variants={imageVariants}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-900 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Gradient overlay on hover */}
      </motion.div>

      {/* Text Section – Glassmorphic */}
      <motion.div
        className={`
          flex-1 py-8 px-0 md:py-0 md:px-10 flex flex-col justify-between
        `}
        variants={textVariants}
      >
        <p className="text-sm md:text-base uppercase tracking-widest font-semibold opacity-90">
          {project.category}
        </p>
        <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight tracking-tight">
          {project.title}
        </h3>
        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          {project.description}
        </p>
        <Link
          href={project.link}
          className={`
            inline-flex items-center gap-3 px-6 py-3 
            text-lg font-semibold
            transition-all duration-500
            hover:-translate-y-1
            text-green-400
          `}
        >
          View Project <span aria-hidden>→</span>
        </Link>
      </motion.div>
    </motion.div>
  );
}