"use client";

import { motion, Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface VideoCardProps {
    videoSrc: string;
    title?: string;
    className?: string;
    index: number;
}

export default function VideoCard({ videoSrc, title, className, index }: VideoCardProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Auto-play when in view or use intersection observer if needed for performance
    // For "insanely smooth", we can have them playing but muted, or play on hover.
    // Let's try play on hover for desktop, auto-play for mobile (or loop always).
    // Actually, for a "portfolio" look, autoplaying muted loop is standard and "live".

    // Standard "insanely smooth" animation variants
    const cardVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
                duration: 0.5,
                delay: index * 0.1 // Stagger effect
            }
        },
        hover: {
            scale: 1.02,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            variants={cardVariants}
            whileHover="hover"
            className={`relative rounded-2xl overflow-hidden aspect-video bg-gray-900 ${className}`}
        >
            <div className="absolute inset-0 bg-gray-800 animate-pulse" /> {/* Loading skeleton placeholder */}

            <video
                ref={videoRef}
                src={videoSrc}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                autoPlay
            />

            {/* Overlay gradient for aesthetics */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                {title && (
                    <p className="text-white font-medium text-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        {title}
                    </p>
                )}
            </div>

            {/* Glass border effect */}
            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
        </motion.div>
    );
}
