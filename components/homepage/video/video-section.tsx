"use client";

import { motion, Variants } from "framer-motion";
import VideoCard from "./video-card";
import { useRef } from "react";

const VIDEOS = [
    { src: "/aevideos/Comp 1.mp4", title: "Composition 1" },
    { src: "/aevideos/Comp 2_1.mp4", title: "Composition 2" },
    { src: "/aevideos/Tarzan Animation.mp4", title: "Tarzan Animation" },
    { src: "/aevideos/VITALITY APP.mp4", title: "Vitality App" },
];

export default function VideoSection() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const titleVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 100,
                duration: 0.8,
            },
        },
    };

    return (
        <section className="py-20 md:py-32 relative overflow-hidden">

            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16 md:mb-24 text-center"
                >
                    <motion.h2
                        variants={titleVariants}
                        className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-tighter mb-6"
                    >
                        Motion
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">.</span>
                    </motion.h2>
                    <motion.p
                        variants={titleVariants}
                        className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        Bringing ideas to life through movement and visual storytelling.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                >
                    {VIDEOS.map((video, index) => (
                        <VideoCard
                            key={index}
                            index={index}
                            videoSrc={video.src}
                            title={video.title}
                            className={index === 0 || index === 3 ? "md:col-span-2 aspect-[21/9]" : "aspect-video"}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
