"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-[#ffffff] text-[#0a0a0a] font-sans md:px-6 select-none"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 lg:px-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eaf0ff] border border-[#cbd9ff] text-[10px] font-mono font-bold tracking-[0.2em] text-[#2457d6] uppercase mb-4 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2457d6] animate-pulse" />
          <span>04 // CAREER JOURNEY &amp; MILESTONES</span>
        </div>
        <h2 className="text-3xl md:text-5xl mb-4 text-[#0a0a0a] font-extrabold tracking-tight max-w-4xl">
          Changelog of my{" "}
          <span className="font-serif-accent font-normal text-[#2457d6] italic">
            engineering journey.
          </span>
        </h2>
        <p className="text-[#6b6b6b] text-sm md:text-base max-w-xl leading-relaxed">
          From co-founding HYBIX IT Solutions to interning at TARCIN Robotics &amp; VCodes — a chronological timeline of products shipped, teams led, and lessons learned.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-8 md:pt-28 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-8 sm:h-10 absolute left-4 md:left-3 w-8 sm:w-10 rounded-full bg-white border border-[#e8e8e5] flex items-center justify-center shadow-md">
                <div className="h-3 sm:h-3.5 w-3 sm:w-3.5 rounded-full bg-[#2457d6] border border-[#2457d6] p-1 animate-pulse" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl lg:text-5xl font-black text-[#0a0a0a] tracking-tight">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-12 pr-1 md:pl-4 w-full">
              <h3 className="md:hidden block text-xl sm:text-2xl mb-3 text-left font-black text-[#0a0a0a]">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        
        {/* Animated Scroll Gradient Beam */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-[#e8e8e5] to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-[#2457d6] via-[#3b82f6] to-[#93c5fd] rounded-full shadow-[0_0_12px_#2457d6]"
          />
        </div>
      </div>
    </div>
  );
};
