"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Categories data with images
const CATEGORIES = [
  {
    id: "social",
    title: "SOCIAL & PRINT GRAPHICS",
    images: [
      "/social/v1.jpg",
      "/social/v2.jpg",
      "/social/v.jpg",
      "/social/v3.jpg",
      "/social/v4.jpg",
      "/social/v5.png",
      "/social/v6.jpg",
      "/social/v7.jpg",
    ]
  },
  {
    id: "web",
    title: "WEBSITE BANNERS & UI",
    images: [
      "/website/artboard.jpg",
      "/website/artboard2.jpg",
      "/website/artboard3.jpg",
      "/website/artboard4.jpg",
      "/website/artboard5.jpg",
      "/website/artboard33.jpg",
      "/website/artboard6.png",
    ]
  },
  {
    id: "matte",
    title: "MATTE PAINTINGS",
    images: [
      "/matte/c1.jpg",
      "/matte/c2.jpg",
      "/matte/c3.jpg",
      "/matte/c4.jpg",
      "/matte/c5.png",
      "/matte/c6.jpg",
      "/matte/c7.jpg",
    ]
  },
  {
    id: "logos",
    title: "LOGOS",
    images: [
      "/logos/briefsandmore.png",
      "/logos/gideon.jpg",
      "/logos/kailynhainela.jpg",
      "/logos/yaf.jpg",
      "/logos/l2.jpg",
      "/logos/josh.jpg",
    ]
  }
];

interface LightboxState {
  isOpen: boolean;
  currentImage: string;
  currentCategory: string;
  currentIndex: number;
}

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    currentImage: "",
    currentCategory: "",
    currentIndex: 0
  });
  const containerRef = useRef<HTMLDivElement>(null);

  // Close lightbox on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && lightbox.isOpen) {
        closeLightbox();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [lightbox.isOpen]);

  const openLightbox = useCallback((image: string, category: string, index: number) => {
    setLightbox({
      isOpen: true,
      currentImage: image,
      currentCategory: category,
      currentIndex: index
    });
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(prev => ({ ...prev, isOpen: false }));
    document.body.style.overflow = "unset";
  }, []);

  const navigateImage = useCallback((direction: "prev" | "next") => {
    setLightbox(prev => {
      const currentCategory = CATEGORIES.find(c => c.id === prev.currentCategory);
      if (!currentCategory) return prev;

      let newIndex = direction === "next" ? prev.currentIndex + 1 : prev.currentIndex - 1;

      // Loop around
      if (newIndex >= currentCategory.images.length) newIndex = 0;
      if (newIndex < 0) newIndex = currentCategory.images.length - 1;

      return {
        ...prev,
        currentImage: currentCategory.images[newIndex],
        currentIndex: newIndex
      };
    });
  }, []);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const fadeUp: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 18, stiffness: 100 },
    },
  };

  const sectionVariants: Variants = {
    hidden: (direction: number) => ({
      x: direction * 100,
      opacity: 0
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.6
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <>
      <div className="min-h-screen py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.h2
              variants={fadeUp}
              className="text-center text-[clamp(2.4rem,7vw,5.5rem)] font-black tracking-[-0.03em] mb-14"
            >
              Gallery
            </motion.h2>
          </motion.div>

          {/* Categories */}
          <motion.div
            ref={containerRef}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-20 md:space-y-24"
          >
            {CATEGORIES.map((category, index) => (
              <motion.section
                key={category.id}
                custom={index % 2 === 0 ? -1 : 1} // Alternate direction
                variants={sectionVariants}
                className="space-y-6"
              >
                <div className={`flex items-center gap-4 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                  {index % 2 === 0 && (
                    <div className="h-px flex-1 bg-gradient-to-r from-green-400 to-transparent" />
                  )}
                  <h2 className="text-2xl sm:text-3xl font-bold text-white px-4 py-2 bg-gradient-to-r from-gray-900/50 to-gray-800/30 rounded-lg">
                    {category.title}
                  </h2>
                  {index % 2 === 1 && (
                    <div className="h-px flex-1 bg-gradient-to-l from-green-400 to-transparent" />
                  )}
                </div>

                {/* Images Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.images.map((image, imgIndex) => (
                    <motion.div
                      key={imgIndex}
                      variants={imageVariants}
                      whileHover="hover"
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                      onClick={() => openLightbox(image, category.id, imgIndex)}
                    >
                      <Image
                        src={image}
                        alt={`${category.title} ${imgIndex + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        loading={imgIndex < 2 ? "eager" : "lazy"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-sm font-medium">View Full Size</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 p-2 rounded-full bg-gray-900/80 hover:bg-gray-800 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gray-900/80 hover:bg-gray-800 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gray-900/80 hover:bg-gray-800 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image container */}
            <div className="relative w-full max-w-4xl h-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <Image
                  src={lightbox.currentImage}
                  alt="Full view"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  priority
                />
              </motion.div>

              {/* Image info */}
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <div className="inline-block px-4 py-2 bg-gray-900/80 backdrop-blur-sm rounded-lg">
                  <p className="text-white text-sm">
                    {CATEGORIES.find(c => c.id === lightbox.currentCategory)?.title} •
                    Image {lightbox.currentIndex + 1} of{" "}
                    {CATEGORIES.find(c => c.id === lightbox.currentCategory)?.images.length}
                  </p>
                </div>
              </div>
            </div>

            {/* Keyboard shortcuts hint */}
            <div className="absolute bottom-4 right-4 hidden sm:block">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <kbd className="px-2 py-1 bg-gray-800 rounded text-xs">ESC</kbd>
                <span>to close</span>
                <kbd className="px-2 py-1 bg-gray-800 rounded text-xs ml-2">← →</kbd>
                <span>to navigate</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}