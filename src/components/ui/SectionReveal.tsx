"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { defaultTransition } from "@/lib/motion";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export function SectionReveal({
  children,
  className = "",
  delay = 0,
  id,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{
        ...defaultTransition,
        delay,
        duration: 0.7,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
