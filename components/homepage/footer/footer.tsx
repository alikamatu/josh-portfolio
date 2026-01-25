"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Dribbble,
  Mail,
} from "lucide-react";
import { SOCIAL_LINKS } from "@/utils/constants";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

// Map social keys → icons
const ICONS: Record<string, React.ReactNode> = {
  github: <Github size={20} />,
  linkedin: <Linkedin size={20} />,
  twitter: <Twitter size={20} />,
  instagram: <Instagram size={20} />,
  dribbble: <Dribbble size={20} />,
  email: <Mail size={20} />,
};

export default function Footer() {
  return (
    <footer className="relative mt-16">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center text-center gap-10"
      >
        {/* Brand */}
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground max-w-md">
            Crafting modern digital experiences with clarity, motion, and
            intention.
          </p>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-5">
          {Object.entries(SOCIAL_LINKS).map(([key, url]) => {
            const icon = ICONS[key.toLowerCase()];
            if (!icon) return null;

            return (
              <Link
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
                className="
                  p-3 rounded-full border border-white/10
                  text-muted-foreground hover:text-white
                  hover:border-white/30 hover:bg-white/5
                  transition-all duration-300
                "
              >
                {icon}
              </Link>
            );
          })}
        </div>

        {/* Bottom */}
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Joshua Abugri — All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
