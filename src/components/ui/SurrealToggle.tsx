"use client";

import React from "react";
import { Sparkles, Eye } from "lucide-react";
import { motion } from "framer-motion";

interface SurrealToggleProps {
  surrealMode: boolean;
  onToggle: () => void;
}

export function SurrealToggle({ surrealMode, onToggle }: SurrealToggleProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onToggle}
      className={`relative px-3.5 py-1.5 rounded-full border text-[11px] font-mono font-bold tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm ${
        surrealMode
          ? "bg-gradient-to-r from-[#2457d6] via-[#7c3aed] to-[#db2777] text-white border-transparent shadow-[0_0_18px_rgba(124,58,237,0.45)]"
          : "bg-[#f7f7f5] text-[#111111] border-[#e8e8e5] hover:border-[#2457d6] hover:text-[#2457d6]"
      }`}
      aria-label="Toggle Surreal Realm Mode"
      title={surrealMode ? "Surreal Realm Active" : "Enable Surreal Realm"}
    >
      <span className="relative flex items-center justify-center">
        {surrealMode ? (
          <Eye size={13} className="text-white animate-pulse" />
        ) : (
          <Sparkles size={13} className="text-[#2457d6]" />
        )}
      </span>

      <span className="uppercase tracking-wider">
        {surrealMode ? "SURREAL REALM" : "SURREAL"}
      </span>

      {/* Active Indicator Pulse Dot */}
      <span
        className={`w-1.5 h-1.5 rounded-full transition-colors ${
          surrealMode ? "bg-white animate-ping" : "bg-[#2457d6]"
        }`}
      />
    </motion.button>
  );
}
