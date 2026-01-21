"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { projectData } from "@/utils/projectData";
import { useEffect, useState } from "react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = parseInt(params.id as string);
  const project = projectData.find(p => p.id === projectId);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link 
            href="/#portfolio" 
            className="inline-block px-6 py-3 border border-white/20 rounded-lg hover:bg-white hover:text-black transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    );
  }

  // Get related projects
  const relatedProjects = projectData
    .filter(p => p.id !== project.id && p.category === project.category)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to Portfolio
          </button>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Project Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1 rounded-full border border-white/20 text-sm">
              {project.category}
            </span>
            <span className="text-sm opacity-70">{project.industry}</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black mb-6">
            {project.title}
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl opacity-90 max-w-3xl">
            {project.description}
          </motion.p>
        </motion.div>

        {/* Main Project Image */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden mb-12 border border-white/10"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* Project Overview */}
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl font-bold mb-6 pb-4 border-b border-white/10">
                  Project Overview
                </h2>
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed opacity-90">
                    {getProjectDetails(project.id).overview}
                  </p>
                  {getProjectDetails(project.id).goals && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Project Goals</h3>
                      <ul className="space-y-3">
                        {getProjectDetails(project.id).goals?.map((goal, index) => (
                          <li key={index} className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-lg opacity-90">{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Design Approach */}
              {getProjectDetails(project.id).approach && (
                <motion.div variants={fadeInUp}>
                  <h2 className="text-3xl font-bold mb-6 pb-4 border-b border-white/10">
                    Design Approach
                  </h2>
                  <p className="text-lg leading-relaxed opacity-90">
                    {getProjectDetails(project.id).approach}
                  </p>
                </motion.div>
              )}

              {/* Result */}
              {getProjectDetails(project.id).result && (
                <motion.div variants={fadeInUp}>
                  <h2 className="text-3xl font-bold mb-6 pb-4 border-b border-white/10">
                    Result
                  </h2>
                  <p className="text-lg leading-relaxed opacity-90">
                    {getProjectDetails(project.id).result}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Sidebar - Project Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <h3 className="text-2xl font-bold mb-6">Project Details</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm uppercase tracking-wider opacity-70 mb-2">Client</div>
                  <div className="text-xl font-medium">{project.client}</div>
                </div>
                
                <div>
                  <div className="text-sm uppercase tracking-wider opacity-70 mb-2">Industry</div>
                  <div className="text-xl font-medium">{project.industry}</div>
                </div>
                
                <div>
                  <div className="text-sm uppercase tracking-wider opacity-70 mb-2">Category</div>
                  <div className="text-xl font-medium">{project.category}</div>
                </div>
                
                <div>
                  <div className="text-sm uppercase tracking-wider opacity-70 mb-2">Tools Used</div>
                  <div className="space-y-2">
                    {project.tools.map((tool, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        <span className="text-lg opacity-90">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
              <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-2xl font-bold mb-6">Related Work</h3>
                <div className="space-y-4">
                  {relatedProjects.map(related => (
                    <Link
                      key={related.id}
                      href={`/project/${related.id}`}
                      className="block group"
                    >
                      <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <div className="w-full h-full bg-white/10 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div>
                          <div className="font-medium group-hover:text-white transition-colors">
                            {related.title}
                          </div>
                          <div className="text-sm opacity-70">{related.category}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Portfolio */}
            <Link
              href="/#portfolio"
              className="block w-full px-6 py-4 text-center rounded-lg border border-white/20 hover:bg-white hover:text-black transition-all duration-300 font-medium"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Helper function to get detailed project info based on ID
function getProjectDetails(id: number) {
  const details: Record<number, {
    overview: string;
    goals?: string[];
    approach?: string;
    result?: string;
  }> = {
    1: {
      overview: "Created a feminine and elegant logo for Kailyn Hairmelo Hub, a brand in the hair and beauty industry. The goal was to develop a visual identity that reflects beauty, confidence, and professionalism.",
      goals: [
        "Develop a visual identity that reflects beauty, confidence, and professionalism",
        "Create a logo suitable for use across print, social media, and digital platforms"
      ],
      approach: "The logo features a stylized female silhouette with flowing hair, symbolizing beauty, care, and elegance. A bold pink color was chosen to represent femininity, creativity, and style, while the clean typography ensures clarity and brand recognition.",
      result: "A clean, modern logo that effectively represents the brand's identity and is suitable for use across print, social media, and digital platforms."
    },
    2: {
      overview: "Designed a one-way vision sticker to display M.P.H.C's weekly evening church activities. The design focuses on clarity, brand consistency, and visibility on glass surfaces.",
      goals: [
        "Communicate weekly activities clearly",
        "Maintain church branding",
        "Ensure readability on perforated vinyl"
      ],
      approach: "Focused on clean typography and clear hierarchy to ensure activities are easily readable. Used the church's brand colors and maintained consistency with their existing visual identity.",
      result: "A clean, professional sticker that enhances visibility and reinforces the church's identity while remaining readable in real-world conditions."
    },
    3: {
      overview: "Designed a promotional social media graphic to showcase MaaB's Braids & Dreadlocks services. The design focuses on attracting attention, clearly listing services, and reinforcing the brand's beauty-focused identity.",
      goals: [
        "Promote hair braiding and dreadlock services",
        "Highlight service variety in one visual",
        "Create an eye-catching, feminine design for social platforms"
      ],
      approach: "A bold pink color palette was used to reflect beauty and elegance, combined with strong typography and high-quality hairstyle visuals. Clear content sections guide viewers from the brand name to services and contact details.",
      result: "An engaging social media design that increases brand visibility, communicates services clearly, and encourages potential clients to make contact."
    }
  };

  return details[id] || {
    overview: "This project showcases my skills in creating visually compelling designs that effectively communicate brand messages and engage target audiences. Each design is carefully crafted to meet client objectives while maintaining aesthetic excellence.",
    goals: ["Create compelling visual designs", "Communicate brand message effectively", "Engage target audience"],
    approach: "Combining creative vision with strategic thinking to develop designs that not only look good but also serve their intended purpose effectively.",
    result: "Successfully delivered design solutions that met client objectives and received positive feedback for both aesthetic appeal and functional effectiveness."
  };
}