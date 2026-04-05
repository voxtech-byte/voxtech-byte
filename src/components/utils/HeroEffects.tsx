"use client";

import { useEffect, useRef, useCallback } from "react";

export default function HeroEffects() {
  const containerRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const isActiveRef = useRef(true);

  const lerp = (start: number, end: number, factor: number) =>
    start + (end - start) * factor;

  const animate = useCallback(() => {
    if (!isActiveRef.current) return;

    currentRef.current.x = lerp(currentRef.current.x, mouseRef.current.x, 0.08);
    currentRef.current.y = lerp(currentRef.current.y, mouseRef.current.y, 0.08);

    const container = containerRef.current;
    if (container) {
      const layers = container.querySelectorAll<HTMLElement>("[data-parallax-layer]");
      layers.forEach((layer) => {
        const depth = parseFloat(layer.dataset.parallaxLayer || "1");
        const x = currentRef.current.x * depth;
        const y = currentRef.current.y * depth;
        layer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReducedMotion) return;

    // Find the hero section
    const hero = document.querySelector<HTMLElement>("[data-hero-parallax]");
    if (!hero) return;
    containerRef.current = hero;

    // Only activate on desktop (no mouse parallax on mobile)
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      // Max 25px displacement
      mouseRef.current.x = ((e.clientX - centerX) / rect.width) * 25;
      mouseRef.current.y = ((e.clientY - centerY) / rect.height) * 25;
    };

    // Page Visibility API — pause when tab inactive
    const handleVisibility = () => {
      if (document.hidden) {
        isActiveRef.current = false;
        cancelAnimationFrame(rafRef.current);
        // Pause blob animations
        document.querySelectorAll(".morph-blob-1, .morph-blob-2").forEach((el) => {
          (el as HTMLElement).style.animationPlayState = "paused";
        });
      } else {
        isActiveRef.current = true;
        rafRef.current = requestAnimationFrame(animate);
        document.querySelectorAll(".morph-blob-1, .morph-blob-2").forEach((el) => {
          (el as HTMLElement).style.animationPlayState = "running";
        });
      }
    };

    hero.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("visibilitychange", handleVisibility);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibility);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  return null;
}
