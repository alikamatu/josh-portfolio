"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import { projectData } from "@/utils/projectData";

export default function ProjectDetail() {
  const params = useParams();
  const projectId = parseInt(params.id as string);
  const project = projectData.find(p => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto px-6 py-12"
    >
      {/* Project Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="px-4 py-1 rounded-full border border-white/20 text-sm">
            {project.category}
          </span>
          <span className="text-sm opacity-70">{project.industry}</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black mb-6">{project.title}</h1>
        
        <div className="flex items-center gap-8 text-lg">
          <div>
            <span className="opacity-70">Client:</span>
            <span className="ml-2 font-medium">{project.client}</span>
          </div>
          <div>
            <span className="opacity-70">Tools:</span>
            <span className="ml-2 font-medium">{project.tools.join(", ")}</span>
          </div>
        </div>
      </div>

      {/* Project Image */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative h-[600px] rounded-2xl overflow-hidden mb-12"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Project Description */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
          <p className="text-xl leading-relaxed opacity-90">
            {project.description}
          </p>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-4">Details</h3>
          <div className="space-y-4">
            <div>
              <div className="text-sm opacity-70">Category</div>
              <div className="text-lg">{project.category}</div>
            </div>
            <div>
              <div className="text-sm opacity-70">Industry</div>
              <div className="text-lg">{project.industry}</div>
            </div>
            <div>
              <div className="text-sm opacity-70">Tools Used</div>
              <div className="space-y-1 mt-1">
                {project.tools.map((tool, index) => (
                  <div key={index} className="text-base">{tool}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}