"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { easeOutExpo } from "@/lib/motion";

interface LoaderProps {
  onComplete?: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if user has already seen the intro loader in this session
    const hasSeenLoader = sessionStorage.getItem("portfolio_loader_seen");

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasSeenLoader === "true" || prefersReducedMotion) {
      setLoading(false);
      onComplete?.();
      return;
    }

    // Complete after animation handwriting completes (~3.0 seconds) and set session flag
    const timer = setTimeout(() => {
      sessionStorage.setItem("portfolio_loader_seen", "true");
      setLoading(false);
      onComplete?.();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="apple-hello-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-white/95 backdrop-blur-3xl select-none"
        >
          {/* Subtle Ambient Liquid Glass Radial Glow */}
          <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-[#2457d6]/10 via-[#e0f2fe]/40 to-[#f3e8ff]/30 rounded-full blur-3xl pointer-events-none" />

          {/* Centered Apple Hello Lottie with Zoom-Out Exit Animation */}
          <motion.div
            initial={{ scale: 0.88, opacity: 0, filter: "blur(8px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            exit={{
              scale: 3.2,
              opacity: 0,
              filter: "blur(18px)",
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
            }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            className="relative w-full max-w-[620px] flex items-center justify-center p-6"
          >
            <DotLottieReact
              src="/hello_apple.lottie"
              autoplay
              loop={false}
              className="w-full max-w-[460px] sm:max-w-[560px] md:max-w-[620px] h-[240px] sm:h-[320px] object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
