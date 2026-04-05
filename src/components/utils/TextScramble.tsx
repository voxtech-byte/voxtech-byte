"use client";

import { useEffect, useRef, useCallback } from "react";

interface TextScrambleProps {
  text: string;
  isActive: boolean;
  className?: string;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

export default function TextScramble({ text, isActive, className = "" }: TextScrambleProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const hasPlayedRef = useRef(false);
  const frameRef = useRef<number>(0);

  const scramble = useCallback(() => {
    if (!spanRef.current || hasPlayedRef.current) return;
    hasPlayedRef.current = true;

    const duration = 500; // 500ms total
    const startTime = performance.now();
    const chars = text.split("");

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Characters resolve left-to-right based on progress
      const resolved = Math.floor(progress * chars.length);
      const display = chars
        .map((char, i) => {
          if (i < resolved) return char;
          if (char === " ") return " ";
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      if (spanRef.current) {
        spanRef.current.textContent = display;
      }

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      }
    };

    frameRef.current = requestAnimationFrame(step);
  }, [text]);

  // Reset when deactivated
  useEffect(() => {
    if (!isActive) {
      hasPlayedRef.current = false;
      cancelAnimationFrame(frameRef.current);
    }
  }, [isActive]);

  // Trigger on activation
  useEffect(() => {
    if (isActive) {
      // Check reduced motion
      const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (isReduced) {
        if (spanRef.current) spanRef.current.textContent = text;
        return;
      }
      // Small delay for accordion to start opening
      const timer = setTimeout(scramble, 50);
      return () => clearTimeout(timer);
    }
  }, [isActive, scramble, text]);

  return (
    <span ref={spanRef} className={className}>
      {text}
    </span>
  );
}
