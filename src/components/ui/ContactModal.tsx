"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check, Mail, Phone, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { easeOutExpo } from "@/lib/motion";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || "Recruiter/Collaborator"}`);
    const body = encodeURIComponent(
      `Hello Jegatheesan,\n\n${message}\n\nFrom: ${name} (${email})`
    );
    window.location.href = `mailto:${personalInfo.contact.email}?subject=${subject}&body=${body}`;
    onClose();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pt-20 sm:pt-24 pb-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.35, ease: easeOutExpo }}
          className="relative w-full max-w-lg bg-white rounded-2xl border border-[#e8e8e5] shadow-2xl z-10 p-6 sm:p-8 overflow-y-auto flex flex-col"
          style={{ maxHeight: "calc(100vh - 130px)", overscrollBehavior: "contain" }}
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#e8e8e5] mb-6 shrink-0">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#2457d6] block">
                GET IN TOUCH
              </span>
              <h3 className="text-xl font-bold text-[#0a0a0a]">
                Let&apos;s build something.
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full border border-[#e8e8e5] text-[#0a0a0a] hover:bg-[#f7f7f5] transition-colors cursor-pointer"
              aria-label="Close contact modal"
            >
              <X size={16} />
            </button>
          </div>

          {/* Quick Direct Copy Bar */}
          <div className="p-3 bg-[#f7f7f5] rounded-xl border border-[#e8e8e5] flex items-center justify-between mb-6 shrink-0">
            <div className="flex items-center gap-2 text-xs font-mono text-[#0a0a0a] truncate">
              <Mail size={14} className="text-[#2457d6] flex-shrink-0" />
              <span className="truncate">{personalInfo.contact.email}</span>
            </div>
            <button
              onClick={handleCopyEmail}
              className="px-3 py-1 bg-white border border-[#d8d8d3] rounded-md text-[11px] font-mono font-semibold text-[#0a0a0a] hover:border-[#0a0a0a] transition-all flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
            >
              {copied ? <Check size={12} className="text-[#198754]" /> : <Copy size={12} />}
              <span>{copied ? "COPIED" : "COPY"}</span>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 flex-1">
            <div>
              <label className="block text-xs font-mono text-[#6b6b6b] uppercase mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Morgan"
                className="w-full px-4 py-2.5 rounded-lg bg-[#ffffff] border border-[#e8e8e5] text-sm text-[#0a0a0a] placeholder:text-[#929292] focus:border-[#2457d6] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#6b6b6b] uppercase mb-1.5">
                Your Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@company.com"
                className="w-full px-4 py-2.5 rounded-lg bg-[#ffffff] border border-[#e8e8e5] text-sm text-[#0a0a0a] placeholder:text-[#929292] focus:border-[#2457d6] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#6b6b6b] uppercase mb-1.5">
                Project / Message
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about the software role, project, or collaboration..."
                className="w-full px-4 py-2.5 rounded-lg bg-[#ffffff] border border-[#e8e8e5] text-sm text-[#0a0a0a] placeholder:text-[#929292] focus:border-[#2457d6] focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-[#2457d6] text-white text-xs font-bold tracking-wider hover:bg-[#1a44ab] transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer shadow-sm"
            >
              <span>SEND MESSAGE DIRECTLY</span>
              <ArrowUpRight size={14} />
            </button>
          </form>

          {/* Direct Phone / LinkedIn footer note */}
          <div className="mt-5 pt-4 border-t border-[#e8e8e5] flex items-center justify-between text-[11px] font-mono text-[#6b6b6b] shrink-0">
            <a
              href={`tel:${personalInfo.contact.phone}`}
              className="hover:text-[#2457d6] flex items-center gap-1"
            >
              <Phone size={11} />
              <span>{personalInfo.contact.phone}</span>
            </a>
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2457d6]"
            >
              LinkedIn Profile →
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
