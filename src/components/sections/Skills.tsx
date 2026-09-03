"use client";

import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs,
  SiNodedotjs, SiExpress, SiFlask, SiTailwindcss, SiHtml5,
  SiCss, SiPostgresql, SiMysql, SiMongodb, SiSupabase,
  SiFirebase, SiOpencv, SiTensorflow, SiScikitlearn, SiNumpy,
  SiPandas, SiGit, SiGithub, SiPostman, SiGoogle,
  SiJupyter, SiVercel, SiArduino, SiRaspberrypi, SiPrisma,
  SiFramer, SiLeaflet, SiLinux, SiDebian, SiUbuntu, SiGnubash,
  SiVim, SiC, SiPytorch, SiGooglecloud
} from "react-icons/si";
import { FaJava, FaMicrochip, FaBrain, FaMemory, FaTerminal, FaNetworkWired, FaCheckDouble } from "react-icons/fa";
import { TbSql, TbBinaryTree, TbSortAscending } from "react-icons/tb";
import { BiLogoVisualStudio } from "react-icons/bi";
import { Cpu, Zap, GitBranch, Layers, Hash, Bot, Code2, ShieldCheck, Play, Pause } from "lucide-react";

// ─── Types ──────────────────────────────────────────────────────────────────────
interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string;
  category: string;
}

// ─── Complete Tech Stack with Official Real Logo Icons ───────────────────────────
const TECH_STACK: TechItem[] = [
  // Languages
  { name: "Java",       icon: <FaJava />,               color: "#e76f00", category: "languages" },
  { name: "Python",     icon: <SiPython />,              color: "#3776ab", category: "languages" },
  { name: "JavaScript", icon: <SiJavascript />,          color: "#f7df1e", category: "languages" },
  { name: "TypeScript", icon: <SiTypescript />,          color: "#3178c6", category: "languages" },
  { name: "C / C++",    icon: <SiC />,                   color: "#a8b9cc", category: "languages" },
  { name: "SQL",        icon: <TbSql size={42} />,       color: "#00758f", category: "languages" },

  // CS Fundamentals
  { name: "DSA",          icon: <TbBinaryTree size={40}/>,color: "#2563eb", category: "cs" },
  { name: "OOP",          icon: <Code2 size={38}/>,       color: "#7c3aed", category: "cs" },
  { name: "Operating Sys",icon: <SiLinux />,              color: "#000000", category: "cs" },
  { name: "DBMS",         icon: <SiPostgresql />,         color: "#4169e1", category: "cs" },

  // AI / ML Fundamentals
  { name: "PyTorch",     icon: <SiPytorch />,            color: "#ee4c2c", category: "ai" },
  { name: "OpenCV",      icon: <SiOpencv />,             color: "#5c3ee8", category: "ai" },
  { name: "Scikit-Learn",icon: <SiScikitlearn />,        color: "#f7931e", category: "ai" },
  { name: "NLP Basics",  icon: <FaBrain size={38} />,    color: "#9c27b0", category: "ai" },
  { name: "Model Eval",  icon: <Bot size={36} />,        color: "#10a37f", category: "ai" },
  { name: "Feature Eng", icon: <SiNumpy />,              color: "#013243", category: "ai" },

  // Testing & Quality
  { name: "Unit Testing",      icon: <ShieldCheck size={38}/>,color: "#16a34a", category: "testing" },
  { name: "Integration Test", icon: <FaCheckDouble size={34}/>,color: "#2563eb", category: "testing" },
  { name: "Code Review",      icon: <GitBranch size={38}/>,   color: "#d97706", category: "testing" },
  { name: "Manual QA",        icon: <Layers size={38}/>,      color: "#0284c7", category: "testing" },

  // Backend & APIs
  { name: "Node.js",    icon: <SiNodedotjs />,           color: "#339933", category: "backend" },
  { name: "Express.js", icon: <SiExpress />,             color: "#000000", category: "backend" },
  { name: "RESTful APIs",icon:<FaNetworkWired size={36}/>,color: "#0284c7", category: "backend" },
  { name: "Prisma ORM", icon: <SiPrisma />,              color: "#2d3748", category: "backend" },

  // Databases
  { name: "PostgreSQL", icon: <SiPostgresql />,          color: "#4169e1", category: "databases" },
  { name: "MySQL",      icon: <SiMysql />,               color: "#00758f", category: "databases" },
  { name: "MongoDB",    icon: <SiMongodb />,             color: "#47a248", category: "databases" },
  { name: "Aiven DB",   icon: <SiPostgresql />,          color: "#ff6c37", category: "databases" },
  { name: "Firebase",   icon: <SiFirebase />,            color: "#ffca28", category: "databases" },

  // Frontend
  { name: "React.js",   icon: <SiReact />,               color: "#61dafb", category: "frontend" },
  { name: "Next.js",    icon: <SiNextdotjs />,           color: "#000000", category: "frontend" },
  { name: "HTML5",      icon: <SiHtml5 />,               color: "#e34f26", category: "frontend" },
  { name: "CSS3",       icon: <SiCss />,                color: "#1572b6", category: "frontend" },
  { name: "Tailwind CSS",icon: <SiTailwindcss />,        color: "#06b6d4", category: "frontend" },

  // Developer Tools & Platforms
  { name: "Git",        icon: <SiGit />,                 color: "#f05032", category: "tools" },
  { name: "GitHub",     icon: <SiGithub />,              color: "#181717", category: "tools" },
  { name: "Vercel",     icon: <SiVercel />,              color: "#000000", category: "tools" },
  { name: "GCP",        icon: <SiGooglecloud />,         color: "#4285f4", category: "tools" },
  { name: "ESP32",      icon: <FaMicrochip size={36} />, color: "#e7352c", category: "tools" },
  { name: "Arduino",    icon: <SiArduino />,             color: "#00979d", category: "tools" },
];

const FILTER_TABS = [
  { key: "languages", label: "Languages" },
  { key: "cs",        label: "CS Fundamentals" },
  { key: "ai",        label: "AI / ML" },
  { key: "testing",   label: "Testing & QA" },
  { key: "backend",   label: "Backend & APIs" },
  { key: "databases", label: "Databases" },
  { key: "frontend",  label: "Frontend" },
  { key: "tools",     label: "Tools & Cloud" },
];

// ─── Single Lightweight Skill Tile Component ───────────────────────────
function SingleSkillCard({ tech }: { tech: TechItem }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-white border border-[#eaeaea] shadow-xs hover:shadow-md hover:border-[#cbd9ff] transition-all duration-300 hover:-translate-y-1 select-none h-full">
      {/* Real Official Technology Logo Icon */}
      <div className="text-4xl sm:text-5xl my-2 flex items-center justify-center h-12 w-12" style={{ color: tech.color }}>
        {tech.icon}
      </div>

      {/* Technology Title */}
      <span className="mt-3 text-xs sm:text-sm font-bold font-mono text-[#1a1a2e] uppercase tracking-wider text-center">
        {tech.name}
      </span>
    </div>
  );
}

// ─── Main Skills Section ─────────────────────────────────────────────────────────
export function Skills() {
  const [activeFilter, setActiveFilter] = useState("languages");
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startLoop = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveFilter((current) => {
        const currentIndex = FILTER_TABS.findIndex((t) => t.key === current);
        const nextIndex = (currentIndex + 1) % FILTER_TABS.length;
        return FILTER_TABS[nextIndex].key;
      });
    }, 10000);
  }, []);

  // Auto loop through category tabs continuously every 10 seconds
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    startLoop();

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, startLoop]);

  const handleSelectTab = (key: string) => {
    setActiveFilter(key);
    if (!isPaused) {
      startLoop();
    }
  };

  const filteredStack = useMemo(() => {
    return TECH_STACK.filter((t) => t.category === activeFilter);
  }, [activeFilter]);

  const activeTabLabel = useMemo(() => {
    return FILTER_TABS.find((t) => t.key === activeFilter)?.label || "Category";
  }, [activeFilter]);

  return (
    <section
      id="skills"
      className="relative py-16 sm:py-24 border-b border-[#e5e5eb] bg-[#fbfbfd]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* ── Section Header ──────────────────────────────────────────────────── */}
        <div className="mb-8 sm:mb-12 text-left">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.2em] text-[#2457d6] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2457d6] animate-pulse" />
            <span>04 // TECHNICAL SKILLS &amp; STACK</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none text-[#111122]">
                Stack.{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2457d6] via-[#3b82f6] to-[#60a5fa]">
                  Skills.
                </span>{" "}
                <span className="font-light italic text-[#8888aa]">
                  Systems.
                </span>
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPaused((prev) => !prev)}
                className="p-2.5 rounded-xl bg-white border border-[#eaeaea] text-[#555566] hover:text-[#2457d6] hover:border-[#cbd9ff] transition-colors cursor-pointer shadow-2xs"
                title={isPaused ? "Resume Auto-Loop" : "Pause Auto-Loop"}
              >
                {isPaused ? <Play size={14} /> : <Pause size={14} />}
              </button>
              <div className="px-4 py-2.5 rounded-xl bg-white border border-[#eaeaea] shadow-xs text-xs sm:text-sm text-[#555566]">
                <span className="font-bold text-[#2457d6]">{activeTabLabel}</span> ·{" "}
                <span className="font-bold text-[#111122]">{filteredStack.length} Technologies</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Category Filter Tabs Bar (No 'All' option, auto looping) ─────────── */}
        <div className="flex items-center gap-2 mb-8 max-w-full overflow-x-auto no-scrollbar pb-1">
          {FILTER_TABS.map((tab) => {
            const active = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => handleSelectTab(tab.key)}
                className={`relative px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0 ${
                  active
                    ? "bg-[#111122] text-white shadow-md scale-102"
                    : "bg-white text-[#555566] border border-[#eaeaea] hover:bg-[#f4f4f7] hover:text-[#111122]"
                }`}
              >
                {tab.label}
                {active && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#2457d6] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ── Animated Skills Grid (One by one staggered card animations per loop) ── */}
        <div className="min-h-[220px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5"
            >
              {filteredStack.map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${tech.category}-${index}`}
                  initial={{ opacity: 0, y: 16, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.92 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <SingleSkillCard tech={tech} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
