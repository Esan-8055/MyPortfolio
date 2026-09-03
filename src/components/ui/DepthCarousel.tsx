"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  PointerEvent as ReactPointerEvent,
  KeyboardEvent as ReactKeyboardEvent
} from "react";
import gsap from "gsap";

export type DepthCarouselItem =
  | string
  | {
      image?: string;
      alt?: string;
      id?: string;
      title?: string;
      number?: string;
      category?: string;
      description?: string;
      tech?: string[];
      githubUrl?: string;
      caseStudy?: any;
    };

type TiltDirection = "left" | "right";

export interface DepthCarouselProps {
  items?: DepthCarouselItem[];
  activeIndex?: number;
  cardWidth?: number;
  cardHeight?: number;
  radius?: number;
  tint?: string;
  depth?: number;
  spread?: number;
  tilt?: number;
  tiltDirection?: TiltDirection;
  perspective?: number;
  visibleCards?: number;
  falloff?: number;
  blur?: number;
  duration?: number;
  ease?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
  loop?: boolean;
  showControls?: boolean;
  showIndicators?: boolean;
  onChange?: (index: number, item: any) => void;
  onItemClick?: (index: number, item: any) => void;
  className?: string;
}

interface CarouselConfig {
  count: number;
  depth: number;
  spread: number;
  tilt: number;
  tiltDirection: TiltDirection;
  visibleCards: number;
  falloff: number;
  blur: number;
  duration: number;
  ease: string;
  loop: boolean;
  cardWidth: number;
  autoplayDelay: number;
}

interface DragState {
  x: number;
  startPos: number;
  lastX: number;
  lastT: number;
  v: number;
  moved: boolean;
  id: number;
}

const DEFAULT_ITEMS: DepthCarouselItem[] = [
  { image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800", alt: "Slide 1" },
  { image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800", alt: "Slide 2" },
  { image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=800", alt: "Slide 3" },
  { image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800", alt: "Slide 4" },
  { image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800", alt: "Slide 5" },
];

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

const normalizeItem = (it: DepthCarouselItem) => {
  if (typeof it === "string") return { image: it, alt: "" };
  return {
    ...it,
    image: it.image || "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800"
  };
};

export default function DepthCarousel({
  items = DEFAULT_ITEMS,
  activeIndex,
  cardWidth = 380,
  cardHeight = 480,
  radius = 28,
  tint = "#05060a",
  depth = 170,
  spread = 75,
  tilt = 14,
  tiltDirection = "right",
  perspective = 1400,
  visibleCards = 4,
  falloff = 0.18,
  blur = 0,
  duration = 600,
  ease = "power2.out",
  autoplay = false,
  autoplayDelay = 3500,
  loop = true,
  showControls = true,
  showIndicators = true,
  onChange,
  onItemClick,
  className = ""
}: DepthCarouselProps) {
  const data = useMemo(() => (Array.isArray(items) ? items : []).map(normalizeItem), [items]);
  const count = data.length;

  const rootRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const overlayRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const posRef = useRef(0);
  const focusRef = useRef(0);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const scaleRef = useRef(1);
  const cfgRef = useRef<CarouselConfig>({} as CarouselConfig);
  const onChangeRef = useRef(onChange);
  const onItemClickRef = useRef(onItemClick);

  const dragRef = useRef<DragState | null>(null);
  const wheelTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const reducedRef = useRef(false);

  const [active, setActive] = useState(0);

  onChangeRef.current = onChange;
  onItemClickRef.current = onItemClick;

  cfgRef.current = {
    count,
    depth,
    spread,
    tilt,
    tiltDirection,
    visibleCards,
    falloff,
    blur,
    duration,
    ease,
    loop,
    cardWidth,
    autoplayDelay
  };

  const layout = useCallback((pos: number) => {
    const cfg = cfgRef.current;
    const n = cfg.count;
    if (!n) return;
    const dir = cfg.tiltDirection === "left" ? -1 : 1;
    const sc = scaleRef.current;

    for (let i = 0; i < n; i++) {
      const el = cardRefs.current[i];
      if (!el) continue;

      let d = i - pos;
      if (cfg.loop && n > 1) {
        d = ((d % n) + n) % n;
        if (d > n / 2) d -= n;
      }

      const back = Math.max(0, d);
      const az = Math.abs(d);
      const shown = az <= cfg.visibleCards + 0.5;

      const tz = -cfg.depth * d;
      const tx = dir * cfg.spread * d;
      const ry = dir * cfg.tilt * clamp(d, 0, 1);

      let opacity = d < 0 ? Math.max(0, 1 + d) : 1;
      if (!shown) opacity = 0;

      const brightness = Math.max(0.35, 1 - back * cfg.falloff);
      const zi = Math.round(2000 - d * 20);

      // Ultra-smooth 60FPS GPU accelerated transforms without blur filter lag
      el.style.transform = `translate3d(-50%, -50%, 0) scale(${sc}) translateX(${tx.toFixed(2)}px) translateZ(${tz.toFixed(2)}px) rotateY(${ry.toFixed(3)}deg)`;
      el.style.opacity = opacity.toFixed(3);
      el.style.filter = `brightness(${brightness.toFixed(3)})`;
      el.style.zIndex = String(zi);
      el.style.pointerEvents = shown && opacity > 0.05 ? "auto" : "none";

      const ov = overlayRefs.current[i];
      if (ov) ov.style.opacity = clamp(back * cfg.falloff * 1.1, 0, 0.75).toFixed(3);
    }
  }, []);

  const notify = useCallback(
    (idx: number) => {
      setActive(idx);
      onChangeRef.current?.(idx, data[idx]);
    },
    [data]
  );

  const tweenTo = useCallback(
    (target: number, animate: boolean) => {
      tweenRef.current?.kill();
      const cfg = cfgRef.current;
      const proxy = { p: posRef.current };
      const dur = animate && !reducedRef.current ? cfg.duration / 1000 : 0;
      tweenRef.current = gsap.to(proxy, {
        p: target,
        duration: dur,
        ease: cfg.ease,
        onUpdate: () => {
          posRef.current = proxy.p;
          layout(proxy.p);
        },
        onComplete: () => {
          const n = cfg.count;
          if (n > 0) posRef.current = ((posRef.current % n) + n) % n;
          layout(posRef.current);
        }
      });
    },
    [layout]
  );

  const setFocus = useCallback(
    (rawIndex: number, animate = true) => {
      const cfg = cfgRef.current;
      const n = cfg.count;
      if (!n) return;
      const idx = cfg.loop ? ((rawIndex % n) + n) % n : clamp(rawIndex, 0, n - 1);
      let delta = idx - posRef.current;
      if (cfg.loop && n > 1) {
        delta = ((delta % n) + n) % n;
        if (delta > n / 2) delta -= n;
      }
      tweenTo(posRef.current + delta, animate);
      if (idx !== focusRef.current) {
        focusRef.current = idx;
        notify(idx);
      }
    },
    [tweenTo, notify]
  );

  useEffect(() => {
    if (typeof activeIndex === "number" && activeIndex !== focusRef.current) {
      setFocus(activeIndex, true);
    }
  }, [activeIndex, setFocus]);

  const navigateBy = useCallback((step: number) => setFocus(focusRef.current + step, true), [setFocus]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ro = new ResizeObserver(entries => {
      const w = entries[0].contentRect.width;
      const cfg = cfgRef.current;
      const needed = cfg.cardWidth + Math.abs(cfg.spread) * 1.5 + 80;
      scaleRef.current = clamp(w / needed, 0.55, 1);
      layout(posRef.current);
    });
    ro.observe(root);
    return () => ro.disconnect();
  }, [layout]);



  const onPointerDown = useCallback((e: ReactPointerEvent<HTMLDivElement>) => {
    const cfg = cfgRef.current;
    if (cfg.count < 2) return;
    tweenRef.current?.kill();
    dragRef.current = {
      x: e.clientX,
      startPos: posRef.current,
      lastX: e.clientX,
      lastT: performance.now(),
      v: 0,
      moved: false,
      id: e.pointerId
    };
  }, []);

  const onPointerMove = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      const drag = dragRef.current;
      if (!drag) return;
      const cfg = cfgRef.current;
      const stepPx = Math.max(cfg.cardWidth * 0.55 * scaleRef.current, 40);
      const dx = e.clientX - drag.x;
      if (!drag.moved && Math.abs(dx) > 4) {
        drag.moved = true;
        rootRef.current?.setPointerCapture(drag.id);
      }
      if (!drag.moved) return;
      const now = performance.now();
      const dt = Math.max(now - drag.lastT, 1);
      drag.v = (e.clientX - drag.lastX) / dt;
      drag.lastX = e.clientX;
      drag.lastT = now;
      posRef.current = drag.startPos - dx / stepPx;
      layout(posRef.current);
    },
    [layout]
  );

  const onPointerEnd = useCallback(() => {
    const drag = dragRef.current;
    if (!drag) return;
    dragRef.current = null;
    if (!drag.moved) return;
    const cfg = cfgRef.current;
    const stepPx = Math.max(cfg.cardWidth * 0.55 * scaleRef.current, 40);
    const projected = posRef.current - (drag.v * 180) / stepPx;
    setFocus(Math.round(projected), true);
  }, [setFocus]);

  const onKeyDown = useCallback(
    (e: ReactKeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        navigateBy(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        navigateBy(1);
      }
    },
    [navigateBy]
  );

  const onCardClick = useCallback(
    (index: number) => {
      if (dragRef.current?.moved) return;
      if (index === active) {
        onItemClickRef.current?.(index, data[index]);
      } else {
        setFocus(index, true);
      }
    },
    [active, data, setFocus]
  );

  useEffect(() => {
    reducedRef.current = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!autoplay || reducedRef.current || count < 2) return;
    const root = rootRef.current;
    let hovered = false;
    let focused = false;
    const stop = () => {
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
      autoTimerRef.current = null;
    };
    const start = () => {
      stop();
      autoTimerRef.current = setInterval(
        () => {
          if (!hovered && !focused) navigateBy(1);
        },
        Math.max(cfgRef.current.autoplayDelay, 600)
      );
    };
    const onEnter = () => {
      hovered = true;
    };
    const onLeave = () => {
      hovered = false;
    };
    const onFocusIn = () => {
      focused = true;
    };
    const onFocusOut = () => {
      focused = false;
    };
    root?.addEventListener("mouseenter", onEnter);
    root?.addEventListener("mouseleave", onLeave);
    root?.addEventListener("focusin", onFocusIn);
    root?.addEventListener("focusout", onFocusOut);
    start();
    return () => {
      stop();
      root?.removeEventListener("mouseenter", onEnter);
      root?.removeEventListener("mouseleave", onLeave);
      root?.removeEventListener("focusin", onFocusIn);
      root?.removeEventListener("focusout", onFocusOut);
    };
  }, [autoplay, autoplayDelay, count, navigateBy]);

  useEffect(() => {
    layout(posRef.current);
  }, [layout, depth, spread, tilt, tiltDirection, visibleCards, falloff, blur, cardWidth, cardHeight, radius, count]);

  useEffect(
    () => () => {
      tweenRef.current?.kill();
      if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current);
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    },
    []
  );

  return (
    <div
      ref={rootRef}
      className={`relative flex h-full min-h-[420px] sm:min-h-[500px] w-full cursor-grab touch-pan-y select-none items-center justify-center outline-none [perspective-origin:50%_50%] active:cursor-grabbing focus-visible:rounded-xl focus-visible:outline-2 focus-visible:outline-white/50 focus-visible:[outline-offset:4px] ${className}`.trim()}
      style={{ perspective: `${perspective}px` }}
      role="group"
      aria-roledescription="carousel"
      aria-label="Depth carousel"
      tabIndex={0}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerEnd}
      onPointerCancel={onPointerEnd}
      onKeyDown={onKeyDown}
    >
      <div className="absolute inset-0 [transform-style:preserve-3d]" ref={stageRef}>
        {data.map((item: any, i) => (
          <div
            key={item.id || i}
            className="absolute left-1/2 top-1/2 cursor-pointer overflow-hidden bg-[#0b0d12] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.55)] border border-white/20 [transform:translate3d(-50%,-50%,0)] [transform-origin:center] [will-change:transform,opacity] group"
            ref={el => {
              cardRefs.current[i] = el;
            }}
            style={{ width: cardWidth, height: cardHeight, borderRadius: radius }}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            aria-hidden={active !== i}
            onClick={() => onCardClick(i)}
          >
            {/* High Definition Card Cover Image */}
            <img
              className="block h-full w-full select-none object-cover [pointer-events:none] [-webkit-user-drag:none] group-hover:scale-105 transition-transform duration-700 ease-out"
              src={item.image}
              alt={item.alt || item.title || ""}
              draggable={false}
            />

            {/* Premium Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 pointer-events-none z-10" />

            {/* Card Content Header Pills */}
            {item.number && item.category && (
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-mono font-bold tracking-widest uppercase shadow-xs">
                  {item.number} / {count.toString().padStart(2, "0")}
                </span>
                <span className="px-3.5 py-1 rounded-full bg-[#2457d6] text-white text-[10px] font-mono font-bold tracking-widest uppercase shadow-md">
                  {item.category.split("•")[0] || item.category}
                </span>
              </div>
            )}

            {/* Card Bottom Title Preview */}
            {item.title && (
              <div className="absolute bottom-5 left-5 right-5 z-20 text-white pointer-events-none">
                <h4 className="text-xl sm:text-2xl font-black tracking-tight drop-shadow-lg line-clamp-2 leading-tight">
                  {item.title}
                </h4>
              </div>
            )}

            {/* Tint Layer */}
            <span
              className="pointer-events-none absolute inset-0 opacity-0 mix-blend-multiply z-15"
              ref={el => {
                overlayRefs.current[i] = el;
              }}
              style={{ background: tint }}
            />
          </div>
        ))}
      </div>

      {showControls && count > 1 && (
        <>
          <button
            type="button"
            className="absolute left-2 sm:left-4 top-1/2 z-[3000] grid h-[46px] w-[46px] -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-[#0a0a0a]/90 text-white backdrop-blur-md transition-all duration-200 hover:border-[#2457d6] hover:bg-[#2457d6] active:scale-95 shadow-xl cursor-pointer"
            aria-label="Previous slide"
            onClick={() => navigateBy(-1)}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path
                d="M15 5l-7 7 7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="absolute right-2 sm:right-4 top-1/2 z-[3000] grid h-[46px] w-[46px] -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-[#0a0a0a]/90 text-white backdrop-blur-md transition-all duration-200 hover:border-[#2457d6] hover:bg-[#2457d6] active:scale-95 shadow-xl cursor-pointer"
            aria-label="Next slide"
            onClick={() => navigateBy(1)}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path
                d="M9 5l7 7-7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}

      {showIndicators && count > 1 && (
        <div
          className="absolute bottom-2 left-1/2 z-[3000] flex -translate-x-1/2 gap-2 rounded-full bg-[rgba(14,16,22,0.7)] px-3.5 py-1.5 backdrop-blur-sm border border-white/10"
          role="tablist"
          aria-label="Slides"
        >
          {data.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-[7px] cursor-pointer rounded-full transition-all duration-300 ${
                active === i ? "w-6 bg-[#2457d6]" : "w-[7px] bg-white/30 hover:bg-white/60"
              }`}
              onClick={() => setFocus(i, true)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
