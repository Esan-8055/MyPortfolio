"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Sparkles } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function IntroVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            if (err.name !== "AbortError") {
              console.error("Video playback error:", err);
            }
            setIsPlaying(false);
          });
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section
      id="intro-video"
      className="relative py-16 md:py-28 bg-white text-[#0a0a0a] overflow-hidden select-none"
    >
      {/* ── Background Giant Outlined Typography ──────────────────────────── */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-0 overflow-hidden px-2">
        <span
          className="text-5xl sm:text-8xl md:text-9xl lg:text-[140px] font-black uppercase tracking-tight opacity-15 block leading-none font-sans"
          style={{
            WebkitTextStroke: "1.5px #2457d6",
            color: "transparent",
          }}
        >
          changing
        </span>
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none z-0">
        <span
          className="text-7xl xl:text-9xl font-black uppercase tracking-tight opacity-15 block leading-none font-sans rotate-90 origin-right"
          style={{
            WebkitTextStroke: "2px #2457d6",
            color: "transparent",
          }}
        >
          lives
        </span>
      </div>

      {/* ── Background Soft Ambient Glows ───────────────────────────────────── */}
      <div className="absolute top-16 left-[8%] w-64 sm:w-80 h-32 sm:h-44 bg-[#3b82f6]/10 rounded-full blur-2xl transform -rotate-45 pointer-events-none" />
      <div className="absolute bottom-16 right-[10%] w-72 sm:w-96 h-36 sm:h-48 bg-[#2457d6]/10 rounded-full blur-2xl transform rotate-12 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-8 z-10">
        <SectionReveal>
          
          {/* Eyebrow Badge & Premium Clean Heading */}
          <div className="flex flex-col items-center justify-center text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eaf0ff] border border-[#cbd9ff] text-[10px] font-mono font-bold tracking-[0.2em] text-[#2457d6] uppercase mb-4 shadow-xs">
              <Sparkles size={13} />
              <span>PERSONAL STATEMENT // VIDEO INTRO</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#0a0a0a] tracking-tight leading-[1.1] max-w-3xl">
              Unlocking Potential &amp;{" "}
              <span className="bg-gradient-to-r from-[#2457d6] via-[#3b82f6] to-[#0284c7] bg-clip-text text-transparent">
                Building Systems
              </span>
            </h2>
          </div>

          {/* ── Central Hardware Accelerated Video Player ──────────────────── */}
          <div className="relative w-full max-w-4xl mx-auto">
            <div
              onClick={togglePlay}
              className="relative w-full aspect-video sm:h-[460px] md:h-[500px] rounded-2xl sm:rounded-[32px] overflow-hidden bg-black shadow-[0_25px_60px_rgba(36,87,214,0.18)] border-2 sm:border-4 border-white cursor-pointer group transform-gpu"
            >
              {/* High-Performance HTML5 Video Element */}
              <video
                ref={videoRef}
                src="/0821.mp4"
                preload="metadata"
                playsInline
                disablePictureInPicture
                onEnded={handleVideoEnd}
                className="w-full h-full object-cover object-center transform-gpu"
              />

              {/* Gradient Dark Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20 transition-opacity duration-300 pointer-events-none ${
                  isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                }`}
              />

              {/* Script Overlay Title (Bottom Left) */}
              <div
                className={`absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20 text-white transition-opacity duration-300 pointer-events-none ${
                  isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                }`}
              >
                <p className="font-serif-accent italic text-2xl sm:text-3xl md:text-4xl text-[#78a4ff] font-normal leading-tight drop-shadow-md">
                  Unlocking Potential and
                </p>
                <p className="font-serif-accent italic text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-tight drop-shadow-md">
                  Changing Lives
                </p>
              </div>

              {/* Central Glowing Play / Pause Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#2457d6] text-white flex items-center justify-center shadow-[0_0_35px_rgba(36,87,214,0.5)] border-2 border-white/80 transition-all duration-300 pointer-events-auto cursor-pointer ${
                    isPlaying
                      ? "opacity-0 group-hover:opacity-100"
                      : "opacity-100 animate-pulse hover:scale-105"
                  }`}
                >
                  {isPlaying ? (
                    <Pause size={28} className="fill-white" />
                  ) : (
                    <Play size={28} className="fill-white ml-1" />
                  )}
                </div>
              </div>

              {/* Mute / Unmute Floating Toggle Button (Top Right) */}
              <button
                onClick={toggleMute}
                className="absolute top-5 right-5 z-30 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-[#2457d6] transition-all duration-200 cursor-pointer"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          </div>

        </SectionReveal>
      </div>
    </section>
  );
}
