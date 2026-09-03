"use client";

import React, { useEffect, useRef } from "react";

interface SurrealCanvasProps {
  active?: boolean;
}

interface SurrealShape {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  type: "blob" | "crystal" | "ring" | "orb" | "star";
  rotation: number;
  rotSpeed: number;
  hue: number;
  pulsePhase: number;
  pulseSpeed: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  maxAlpha: number;
  decay: number;
  color: string;
}

export function SurrealCanvas({ active = true }: SurrealCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false });

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    // Generate surreal shapes
    const shapes: SurrealShape[] = [];
    const shapeTypes: SurrealShape["type"][] = ["blob", "crystal", "ring", "orb", "star"];
    const shapeCount = Math.max(12, Math.floor(width / 90));

    for (let i = 0; i < shapeCount; i++) {
      shapes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: 20 + Math.random() * 55,
        type: shapeTypes[i % shapeTypes.length],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.015,
        hue: 200 + Math.random() * 120, // HSL blues, purples, magentas
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02,
      });
    }

    // Dynamic mouse particles
    const particles: Particle[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      mouseRef.current.active = true;

      // Spawn dream sparkles on movement
      if (Math.random() < 0.4) {
        particles.push({
          x: e.clientX + (Math.random() - 0.5) * 15,
          y: e.clientY + (Math.random() - 0.5) * 15,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5 - 0.5,
          size: 1.5 + Math.random() * 3.5,
          alpha: 0.8,
          maxAlpha: 0.8,
          decay: 0.015 + Math.random() * 0.02,
          color: `hsl(${210 + Math.random() * 90}, 90%, 65%)`,
        });
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    // Render Loop
    const render = () => {
      // Smooth mouse spring interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.12;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.12;

      ctx.clearRect(0, 0, width, height);

      // Draw ambient surreal gradient spot under mouse
      if (mouseRef.current.active && mouseRef.current.x > 0) {
        const mouseGlow = ctx.createRadialGradient(
          mouseRef.current.x,
          mouseRef.current.y,
          0,
          mouseRef.current.x,
          mouseRef.current.y,
          320
        );
        mouseGlow.addColorStop(0, "rgba(59, 130, 246, 0.09)");
        mouseGlow.addColorStop(0.5, "rgba(168, 85, 247, 0.04)");
        mouseGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = mouseGlow;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 320, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update & Draw Shapes
      for (let i = 0; i < shapes.length; i++) {
        const s = shapes[i];

        s.x += s.vx;
        s.y += s.vy;
        s.rotation += s.rotSpeed;
        s.pulsePhase += s.pulseSpeed;

        // Wrap edges smoothly
        if (s.x < -s.radius * 2) s.x = width + s.radius * 2;
        if (s.x > width + s.radius * 2) s.x = -s.radius * 2;
        if (s.y < -s.radius * 2) s.y = height + s.radius * 2;
        if (s.y > height + s.radius * 2) s.y = -s.radius * 2;

        // Mouse repelling physics / distortion
        let dx = 0;
        let dy = 0;
        let dist = 9999;
        if (mouseRef.current.active) {
          dx = s.x - mouseRef.current.x;
          dy = s.y - mouseRef.current.y;
          dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 220;
          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * 1.8;
            s.x += (dx / dist) * force;
            s.y += (dy / dist) * force;
          }
        }

        const currentRadius = s.radius + Math.sin(s.pulsePhase) * 6;
        const alpha = 0.12 + Math.sin(s.pulsePhase * 0.5) * 0.04;

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rotation);

        if (s.type === "blob") {
          // Liquid Morphing Blob
          ctx.beginPath();
          const points = 6;
          for (let p = 0; p < points; p++) {
            const angle = (p / points) * Math.PI * 2;
            const rOffset = Math.sin(s.pulsePhase + p) * 8;
            const px = Math.cos(angle) * (currentRadius + rOffset);
            const py = Math.sin(angle) * (currentRadius + rOffset);
            if (p === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();

          const grad = ctx.createLinearGradient(-currentRadius, -currentRadius, currentRadius, currentRadius);
          grad.addColorStop(0, `hsla(${s.hue}, 85%, 60%, ${alpha * 1.2})`);
          grad.addColorStop(1, `hsla(${s.hue + 40}, 85%, 50%, ${alpha * 0.5})`);
          ctx.fillStyle = grad;
          ctx.strokeStyle = `hsla(${s.hue}, 90%, 75%, ${alpha * 1.5})`;
          ctx.lineWidth = 1.5;
          ctx.fill();
          ctx.stroke();

        } else if (s.type === "crystal") {
          // Surreal Diamond Crystal
          ctx.beginPath();
          ctx.moveTo(0, -currentRadius * 1.2);
          ctx.lineTo(currentRadius * 0.8, 0);
          ctx.lineTo(0, currentRadius * 1.2);
          ctx.lineTo(-currentRadius * 0.8, 0);
          ctx.closePath();

          ctx.strokeStyle = `hsla(${s.hue}, 90%, 70%, ${alpha * 1.8})`;
          ctx.lineWidth = 1.2;
          ctx.fillStyle = `hsla(${s.hue}, 80%, 65%, ${alpha * 0.4})`;
          ctx.fill();
          ctx.stroke();

          // Inner reflection line
          ctx.beginPath();
          ctx.moveTo(0, -currentRadius * 0.8);
          ctx.lineTo(currentRadius * 0.4, 0);
          ctx.lineTo(0, currentRadius * 0.8);
          ctx.strokeStyle = `hsla(${s.hue + 30}, 100%, 85%, ${alpha * 2})`;
          ctx.stroke();

        } else if (s.type === "ring") {
          // Levitating Metallic Ring
          ctx.beginPath();
          ctx.ellipse(0, 0, currentRadius * 1.1, currentRadius * 0.4, s.rotation, 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(${s.hue}, 85%, 65%, ${alpha * 1.6})`;
          ctx.lineWidth = 2;
          ctx.stroke();

        } else if (s.type === "star") {
          // Dream Celestial Star
          ctx.beginPath();
          const spikes = 4;
          for (let k = 0; k < spikes * 2; k++) {
            const r = k % 2 === 0 ? currentRadius : currentRadius * 0.35;
            const a = (k / (spikes * 2)) * Math.PI * 2;
            const sx = Math.cos(a) * r;
            const sy = Math.sin(a) * r;
            if (k === 0) ctx.moveTo(sx, sy);
            else ctx.lineTo(sx, sy);
          }
          ctx.closePath();
          ctx.fillStyle = `hsla(${s.hue}, 95%, 75%, ${alpha * 1.2})`;
          ctx.fill();
        }

        ctx.restore();
      }

      // Draw dynamic mouse trail particles
      for (let p = particles.length - 1; p >= 0; p--) {
        const pt = particles[p];
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.alpha -= pt.decay;

        if (pt.alpha <= 0) {
          particles.splice(p, 1);
          continue;
        }

        ctx.fillStyle = pt.color;
        ctx.globalAlpha = pt.alpha;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [active]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
}
