import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Cog,
  Shield,
  BarChart3,
  Database,
  Cloud,
  Rocket,
  CheckCircle2,
  Zap,
  LineChart,
  Server,
  Lock,
  Layers,
  Cpu,
  Bot,
  CircuitBoard,
} from "lucide-react";

type IconComp = React.ComponentType<{ size?: number | string; className?: string }>;

interface PhysicsItem {
  x: number;
  y: number;
  vx: number; // px/s
  vy: number; // px/s
  angle: number; // deg
  va: number; // deg/s
  el: HTMLDivElement | null;
}

const ICON_SET: IconComp[] = [
  Cog,
  Shield,
  BarChart3,
  Database,
  Cloud,
  Rocket,
  CheckCircle2,
  Zap,
  LineChart,
  Server,
  Lock,
  Layers,
  Cpu,
  Bot,
  CircuitBoard,
];

const COLOR_CLASSES = [
  "text-primary/15",
  "text-secondary/15",
  "text-accent/15",
  "text-muted-foreground/15",
];

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

const BackgroundIcons: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<PhysicsItem[]>([]);
  const rafRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const viewportRef = useRef({ w: 0, h: 0 });
  const prefersReducedRef = useRef(false);

  const [iconsData, setIconsData] = useState<{ Icon: IconComp; size: number; className: string }[]>([]);

  // Setup counts and icon data after mount
  useEffect(() => {
    // Respect reduced motion
    if (typeof window !== "undefined" && "matchMedia" in window) {
      prefersReducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }

    const setViewport = () => {
      viewportRef.current = { w: window.innerWidth, h: window.innerHeight };
    };
    setViewport();

    const handleResize = () => {
      setViewport();
      // On resize, keep items within bounds
      itemsRef.current.forEach((it, i) => {
        const size = iconsData[i]?.size ?? 32;
        it.x = clamp(it.x, 0, viewportRef.current.w - size);
        it.y = clamp(it.y, 0, viewportRef.current.h - size);
      });
    };

    window.addEventListener("resize", handleResize);

    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 14 : 26;

    const data: { Icon: IconComp; size: number; className: string }[] = Array.from({ length: count }, (_, i) => ({
      Icon: ICON_SET[i % ICON_SET.length],
      size: Math.round(24 + Math.random() * 28), // 24 - 52
      className: COLOR_CLASSES[i % COLOR_CLASSES.length],
    }));

    setIconsData(data);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Initialize physics when iconsData is ready
  useEffect(() => {
    if (!iconsData.length) return;

    const { w, h } = viewportRef.current;
    itemsRef.current = iconsData.map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() * 60 + 20) * (Math.random() > 0.5 ? 1 : -1), // 20-80 px/s
      vy: (Math.random() * 60 + 20) * (Math.random() > 0.5 ? 1 : -1),
      angle: Math.random() * 360,
      va: (Math.random() * 20 - 10), // -10 to 10 deg/s
      el: null,
    }));

    if (prefersReducedRef.current) return; // Skip animation

    const tick = (t: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = t;
      const dt = (t - lastTimeRef.current) / 1000; // seconds
      lastTimeRef.current = t;

      const { w, h } = viewportRef.current;

      itemsRef.current.forEach((it, i) => {
        const size = iconsData[i]?.size ?? 32;
        let { x, y, vx, vy, angle, va } = it;

        x += vx * dt;
        y += vy * dt;
        angle += va * dt;

        if (x <= 0) {
          x = 0;
          vx = Math.abs(vx);
        } else if (x >= w - size) {
          x = w - size;
          vx = -Math.abs(vx);
        }

        if (y <= 0) {
          y = 0;
          vy = Math.abs(vy);
        } else if (y >= h - size) {
          y = h - size;
          vy = -Math.abs(vy);
        }

        it.x = x;
        it.y = y;
        it.vx = vx;
        it.vy = vy;
        it.angle = angle;

        if (it.el) {
          it.el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${angle.toFixed(2)}deg)`;
        }
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = 0;
    };
  }, [iconsData]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden select-none"
    >
      {/* Gradient overlay to keep it subtle in both themes */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40" />

      {iconsData.map(({ Icon, size, className }, i) => (
        <div
          key={i}
          ref={(el) => {
            if (itemsRef.current[i]) itemsRef.current[i].el = el;
          }}
          className={`absolute top-0 left-0 ${className}`}
          style={{ width: size, height: size, willChange: "transform" }}
        >
          <Icon size={size} className="opacity-80" />
        </div>
      ))}
    </div>
  );
};

export default BackgroundIcons;
