"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { easeOutExpo } from "@/lib/motion";

interface TextRevealProps {
  text: string;
  className?: string;
  serifWord?: string;
  delay?: number;
}

export function TextReveal({
  text,
  className = "",
  serifWord,
  delay = 0,
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px 0px" });

  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {words.map((word, i) => {
        const isSerif =
          serifWord && word.toLowerCase().includes(serifWord.toLowerCase());

        return (
          <span
            key={i}
            className="inline-block overflow-hidden align-top mr-[0.28em] pb-[0.08em]"
          >
            <motion.span
              initial={{ y: "115%", opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: "115%", opacity: 0 }}
              transition={{
                duration: 0.8,
                delay: delay + i * 0.05,
                ease: easeOutExpo,
              }}
              className={`inline-block ${
                isSerif
                  ? "font-serif-accent text-[#2457d6] tracking-normal"
                  : ""
              }`}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
