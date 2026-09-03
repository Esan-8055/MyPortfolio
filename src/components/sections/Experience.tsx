"use client";

import React from "react";
import Image from "next/image";
import { Calendar, MapPin, Briefcase, CheckCircle2, ArrowUpRight, Sparkles } from "lucide-react";
import { Timeline } from "@/components/ui/Timeline";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function Experience() {
  const timelineData = [
    {
      title: "May 2026 — Present",
      content: (
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#fafafa] border border-[#e8e8e5] shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-[#06b6d4]/10 text-[#0891b2] text-[10px] font-mono font-bold uppercase tracking-wider">
                INTERNSHIP
              </span>
              <div className="flex items-center gap-3 text-xs font-mono text-[#6b6b6b]">
                <span className="flex items-center gap-1">
                  <Calendar size={12} className="text-[#2457d6]" />
                  <span>May 2026 — Present</span>
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={12} className="text-[#2457d6]" />
                  <span>Remote / On-site</span>
                </span>
              </div>
            </div>

            <h4 className="text-xl sm:text-2xl font-extrabold text-[#0a0a0a] tracking-tight mb-1">
              Software Developer Intern
            </h4>
            <p className="text-xs sm:text-sm font-mono font-bold text-[#0891b2] mb-4">
              Tarcin Robotics LLP
            </p>

            <p className="text-xs sm:text-sm text-[#525252] leading-relaxed mb-6">
              Engineered an end-to-end internship management platform supporting 500+ interns and 10+ mentors, streamlining onboarding, task tracking, AI coaching, and automated certification.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111111]">
                <CheckCircle2 size={15} className="text-[#0891b2] mt-0.5 shrink-0" />
                <span>Engineered an end-to-end internship management platform for 500+ interns and 10+ mentors, integrating onboarding, mentor allocation, task tracking, submissions, meetings, feedback, an AI Career Coach, and automated certificates, reducing manual coordination by 30–40% and supporting a 94% program completion rate.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111111]">
                <CheckCircle2 size={15} className="text-[#0891b2] mt-0.5 shrink-0" />
                <span>Applied AI/ML fundamentals (API-driven response handling) to build the AI Career Coach, and wrote unit/integration tests for core task-tracking workflows to improve release reliability.</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#e8e8e5]">
              {["React.js", "Node.js", "Express", "PostgreSQL", "TypeScript", "AI Integration", "Unit & Integration Testing"].map((tech) => (
                <span key={tech} className="px-2.5 py-0.5 rounded-md bg-[#ffffff] border border-[#e8e8e5] text-[11px] font-mono font-semibold text-[#383838]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative h-44 sm:h-52 rounded-xl overflow-hidden border border-[#e8e8e5] group">
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop"
                alt="Tarcin Robotics Platform Architecture"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-44 sm:h-52 rounded-xl overflow-hidden border border-[#e8e8e5] group">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                alt="Full Stack Development & Testing"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Jul 2025 — Present",
      content: (
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#fafafa] border border-[#e8e8e5] shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-[#eaf0ff] text-[#2457d6] text-[10px] font-mono font-bold uppercase tracking-wider">
                LEADERSHIP &amp; COMMUNITY
              </span>
              <div className="flex items-center gap-3 text-xs font-mono text-[#6b6b6b]">
                <span className="flex items-center gap-1">
                  <Calendar size={12} className="text-[#2457d6]" />
                  <span>Jul 2025 — Present</span>
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={12} className="text-[#2457d6]" />
                  <span>KARE Campus</span>
                </span>
              </div>
            </div>

            <h4 className="text-xl sm:text-2xl font-extrabold text-[#0a0a0a] tracking-tight mb-1">
              Lead Developer &amp; President
            </h4>
            <p className="text-xs sm:text-sm font-mono font-bold text-[#2457d6] mb-4">
              HYBIX Tech Community
            </p>

            <p className="text-xs sm:text-sm text-[#525252] leading-relaxed mb-6">
              Led full-stack application development, AI/ML solutions, and IoT prototype engineering across community projects.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111111]">
                <CheckCircle2 size={15} className="text-[#2457d6] mt-0.5 shrink-0" />
                <span>Led the development of full-stack applications, AI/ML solutions, and IoT prototypes using REST APIs, real-time dashboards, ESP32, and Arduino, improving project usability and data accessibility by 25–30% while reducing manual implementation effort by 20–25%.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111111]">
                <CheckCircle2 size={15} className="text-[#2457d6] mt-0.5 shrink-0" />
                <span>Introduced code review and testing checkpoints across team projects, reducing post-deployment bugs.</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#e8e8e5]">
              {["Full-Stack", "AI/ML Solutions", "IoT Prototypes", "REST APIs", "ESP32", "Arduino", "Code Review"].map((tech) => (
                <span key={tech} className="px-2.5 py-0.5 rounded-md bg-[#ffffff] border border-[#e8e8e5] text-[11px] font-mono font-semibold text-[#383838]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative h-44 sm:h-52 rounded-xl overflow-hidden border border-[#e8e8e5] group">
              <Image
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop"
                alt="HYBIX Developer Team"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-44 sm:h-52 rounded-xl overflow-hidden border border-[#e8e8e5] group">
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop"
                alt="IoT Electronics & Hardware Prototyping"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "May 2026 — Jul 2026",
      content: (
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#fafafa] border border-[#e8e8e5] shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-[#f97316]/10 text-[#ea580c] text-[10px] font-mono font-bold uppercase tracking-wider">
                DATA SCIENCE INTERN
              </span>
              <div className="flex items-center gap-3 text-xs font-mono text-[#6b6b6b]">
                <span className="flex items-center gap-1">
                  <Calendar size={12} className="text-[#2457d6]" />
                  <span>May 2026 — Jul 2026</span>
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={12} className="text-[#2457d6]" />
                  <span>VCodez • On-site</span>
                </span>
              </div>
            </div>

            <h4 className="text-xl sm:text-2xl font-extrabold text-[#0a0a0a] tracking-tight mb-1">
              Data Science Intern
            </h4>
            <p className="text-xs sm:text-sm font-mono font-bold text-[#ea580c] mb-4">
              VCodez
            </p>

            <p className="text-xs sm:text-sm text-[#525252] leading-relaxed mb-6">
              Built end-to-end machine-learning pipelines through data preprocessing, feature engineering, model training, and evaluation.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111111]">
                <CheckCircle2 size={15} className="text-[#ea580c] mt-0.5 shrink-0" />
                <span>Built end-to-end machine-learning pipelines through data preprocessing, feature engineering, model training, and evaluation, developing an NLP-based Fake News Detection Model that achieved 80–90% classification performance.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111111]">
                <CheckCircle2 size={15} className="text-[#ea580c] mt-0.5 shrink-0" />
                <span>Applied AI/ML fundamentals — model evaluation metrics, train/test splitting, and overfitting checks — to validate model performance before deployment.</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#e8e8e5]">
              {["Python", "Machine Learning", "NLP", "Feature Engineering", "Model Evaluation Metrics", "Train/Test Splitting"].map((tech) => (
                <span key={tech} className="px-2.5 py-0.5 rounded-md bg-[#ffffff] border border-[#e8e8e5] text-[11px] font-mono font-semibold text-[#383838]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Aug 2023 — June 2027 (Expected)",
      content: (
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#fafafa] border border-[#e8e8e5] shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-[#10b981]/10 text-[#059669] text-[10px] font-mono font-bold uppercase tracking-wider">
                EDUCATION
              </span>
              <div className="flex items-center gap-3 text-xs font-mono text-[#6b6b6b]">
                <span className="flex items-center gap-1">
                  <Calendar size={12} className="text-[#2457d6]" />
                  <span>Aug 2023 — June 2027</span>
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={12} className="text-[#2457d6]" />
                  <span>KARE, India</span>
                </span>
              </div>
            </div>

            <h4 className="text-xl sm:text-2xl font-extrabold text-[#0a0a0a] tracking-tight mb-1">
              Bachelor of Technology in Information Technology
            </h4>
            <p className="text-xs sm:text-sm font-mono font-bold text-[#059669] mb-4">
              Kalasalingam Academy of Research and Education
            </p>

            <p className="text-xs sm:text-sm text-[#525252] leading-relaxed mb-6">
              Pursuing B.Tech in IT with deep focus on Core CS Fundamentals (DSA, OOP, Operating Systems, DBMS), Full-Stack Web Development, AI/ML, and Embedded Systems.
            </p>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#e8e8e5]">
              {["Java", "Python", "JavaScript", "TypeScript", "C/C++", "SQL", "DSA", "OOP", "OS", "DBMS"].map((tech) => (
                <span key={tech} className="px-2.5 py-0.5 rounded-md bg-[#ffffff] border border-[#e8e8e5] text-[11px] font-mono font-semibold text-[#383838]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative h-48 sm:h-60 rounded-xl overflow-hidden border border-[#e8e8e5] group">
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
              alt="Kalasalingam Campus Workspace"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="py-12 bg-[#ffffff] border-b border-[#e8e8e5]">
      <SectionReveal>
        <Timeline data={timelineData} />
      </SectionReveal>
    </section>
  );
}
