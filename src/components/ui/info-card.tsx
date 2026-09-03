import React, { useRef, useState } from "react";
import { ArrowUpRight, Globe } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

// RTL detection for Hebrew/Arabic
function isRTL(text: string) {
  return /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text);
}

export interface InfoCardProps {
  image: string;
  title: string;
  description: string;
  number?: string;
  category?: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies?: string[];
  onViewCaseStudy?: () => void;
  width?: number | string;
  height?: number | string;
  borderColor?: string;
  borderBgColor?: string;
  borderWidth?: number;
  borderPadding?: number;
  cardBgColor?: string;
  shadowColor?: string;
  patternColor1?: string;
  patternColor2?: string;
  textColor?: string;
  hoverTextColor?: string;
  fontFamily?: string;
  rtlFontFamily?: string;
  effectBgColor?: string;
  contentPadding?: string;
  children?: React.ReactNode;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  image,
  title,
  description,
  number,
  category,
  githubUrl,
  liveUrl,
  technologies,
  onViewCaseStudy,
  width,
  height = 430,
  borderColor = "#2457d6",
  borderBgColor = "#f0f0ed",
  borderWidth = 3,
  borderPadding = 10,
  cardBgColor = "#ffffff",
  shadowColor = "#e0e0e0",
  patternColor1 = "rgba(36,87,214,0.06)",
  patternColor2 = "rgba(36,87,214,0.04)",
  textColor = "#0a0a0a",
  hoverTextColor = "#ffffff",
  fontFamily = "'Roboto Mono', monospace",
  rtlFontFamily = "'Montserrat', sans-serif",
  effectBgColor = "#2457d6",
  contentPadding = "14px 16px 14px 16px",
  children,
}) => {
  const [hovered, setHovered] = useState(false);
  const borderRef = useRef<HTMLDivElement>(null);

  // Mouse movement for rotating border
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const border = borderRef.current;
    if (!border) return;
    const rect = border.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const angle = Math.atan2(y, x);
    border.style.setProperty("--rotation", `${angle}rad`);
  };

  // RTL logic
  const rtl = isRTL(title) || isRTL(description);
  const effectiveFont = rtl ? rtlFontFamily : fontFamily;
  const titleDirection = isRTL(title) ? "rtl" : "ltr";
  const descDirection = isRTL(description) ? "rtl" : "ltr";

  // Pattern background
  const pattern =
    `linear-gradient(45deg, ${patternColor1} 25%, transparent 25%, transparent 75%, ${patternColor2} 75%),` +
    `linear-gradient(-45deg, ${patternColor2} 25%, transparent 25%, transparent 75%, ${patternColor1} 75%)`;

  // Border gradient — rotates on mouse move
  const borderGradient = `conic-gradient(from var(--rotation,0deg), ${borderColor} 0deg, ${borderColor} 90deg, ${borderBgColor} 90deg, ${borderBgColor} 360deg)`;

  // Resolved width
  const resolvedWidth = width != null ? width : "100%";

  return (
    <div
      ref={borderRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        if (borderRef.current)
          borderRef.current.style.setProperty("--rotation", "0deg");
      }}
      style={{
        width: resolvedWidth,
        minHeight: typeof height === "number" ? height : height,
        border: `${borderWidth}px solid transparent`,
        borderRadius: "1.25em",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        backgroundImage: `linear-gradient(${cardBgColor}, ${cardBgColor}), ${borderGradient}`,
        padding: borderPadding,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "stretch",
        justifyContent: "center",
        cursor: "pointer",
        userSelect: "none",
        transition: "box-shadow 0.3s, transform 0.3s ease",
        position: "relative",
        fontFamily: effectiveFont,
      } as React.CSSProperties}
      className="group/infocard shadow-sm hover:shadow-md max-w-full"
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "1em",
          background: cardBgColor,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          backgroundImage: pattern,
          backgroundSize: "20.84px 20.84px",
        }}
      >
        {/* Top Image + Frosted Header Badge Overlay (Inside Box) */}
        <div style={{ width: "100%", height: 185, flexShrink: 0, position: "relative", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
              transition: "transform 0.5s ease",
            }}
            className="group-hover/infocard:scale-105"
          />

          {/* Frosted Glass Overlay Badge on Image */}
          {(number || category || githubUrl || liveUrl) && (
            <div
              style={{
                position: "absolute",
                top: 10,
                left: 10,
                right: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                zIndex: 10,
                pointerEvents: "auto",
              }}
            >
              {(number || category) && (
                <span className="px-2.5 py-1 rounded-full bg-[#0a0a0a]/80 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold text-white tracking-wider uppercase shadow-xs">
                  {number && <span className="text-[#60a5fa] mr-1">{number} ·</span>}
                  {category ? category.split(" • ")[0] : ""}
                </span>
              )}

              <div className="flex items-center gap-1.5 ml-auto">
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#0a0a0a] hover:bg-[#2457d6] hover:text-white transition-colors shadow-xs"
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon size={12} />
                  </a>
                )}
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 rounded-full bg-[#2457d6] text-white hover:bg-[#1a44ab] transition-colors shadow-xs"
                    aria-label="Live Demo"
                  >
                    <Globe size={12} />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Card Body Content Area (Inside Box) */}
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: contentPadding,
            minHeight: 0,
          }}
        >
          <div>
            {/* Title with hover background reveal */}
            <h1
              style={{
                fontSize: 18,
                fontWeight: "bold",
                letterSpacing: "-.01em",
                lineHeight: "1.25",
                marginBottom: 6,
                color: hovered ? hoverTextColor : textColor,
                transition: "color 0.3s ease",
                position: "relative",
                overflow: "hidden",
                direction: titleDirection,
                width: "auto",
              }}
            >
              <span
                style={{
                  position: "relative",
                  zIndex: 10,
                  padding: "2px 4px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                {title}
              </span>
              <span
                style={{
                  clipPath: hovered
                    ? "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                    : "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
                  transformOrigin: "center",
                  transition: "all cubic-bezier(.1,.5,.5,1) 0.4s",
                  position: "absolute",
                  left: -4,
                  right: -4,
                  top: -4,
                  bottom: -4,
                  zIndex: 0,
                  backgroundColor: effectBgColor,
                }}
              />
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: 12.5,
                lineHeight: "1.45",
                color: "#525252",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                direction: descDirection,
                marginBottom: 10,
                paddingBottom: 0,
                minHeight: 0,
              }}
            >
              {description}
            </p>
          </div>

          {/* Footer Elements inside Box */}
          <div className="pt-2 border-t border-[#e8e8e5]/60 flex flex-col gap-2.5">
            {/* Tech Stack Pills inside box */}
            {technologies && technologies.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md bg-[#f0f0ed] border border-[#e2e2de] text-[10px] font-mono font-semibold text-[#383838]"
                  >
                    {tech}
                  </span>
                ))}
                {technologies.length > 3 && (
                  <span className="px-2 py-0.5 rounded-md bg-[#eaf0ff] text-[10px] font-mono font-semibold text-[#2457d6]">
                    +{technologies.length - 3} more
                  </span>
                )}
              </div>
            )}

            {/* CTA Button inside box */}
            <div className="flex items-center justify-between pt-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (onViewCaseStudy) onViewCaseStudy();
                }}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#2457d6] group-hover/infocard:text-[#0a0a0a] transition-colors cursor-pointer"
              >
                <span>VIEW CASE STUDY</span>
                <ArrowUpRight
                  size={13}
                  className="group-hover/infocard:translate-x-0.5 group-hover/infocard:-translate-y-0.5 transition-transform"
                />
              </button>
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};
