"use client";

import { useEffect, useRef } from "react";

export default function ScrollObserver() {
  const isObserving = useRef(false);

  useEffect(() => {
    // Prevent multiple observer instantiations if re-rendered
    if (isObserving.current) return;
    isObserving.current = true;

    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = document.querySelectorAll(
      ".animate-on-scroll:not(.accordion-content *)"
    );

    // Fast-path for reduced motion
    if (isReducedMotion) {
      elements.forEach((el) => {
        el.classList.add("in-view");
        // Remove will-change since they aren't animating
        (el as HTMLElement).style.willChange = "auto";
      });
      return;
    }

    // Prepare elements
    elements.forEach(el => {
      // Add will-change upfront for smoother first render
      (el as HTMLElement).style.willChange = "opacity, transform";
    });

    // We use a small stagger delay logic here manually in case we want stagger
    // But CSS delay classes (delay-100, delay-200) handle most of it natively
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation
            entry.target.classList.add("in-view");
            
            // Clean up observer
            obs.unobserve(entry.target);

            // Once animation completes (usually ~800ms), remove will-change
            // to free up memory and GPU resources
            setTimeout(() => {
              (entry.target as HTMLElement).style.willChange = "auto";
            }, 1000); 
          }
        });
      },
      // Slightly earlier trigger so it feels more responsive
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" } 
    );

    elements.forEach((el) => observer.observe(el));

    // Observe specific staggered groups (like Portfolio Cards)
    // If we wanted JS-based staggering it would go here, 
    // but the Prompt requested minimal JS so CSS transition-delay stays the primary driver.

    return () => {
      observer.disconnect();
      isObserving.current = false;
    };
  }, []);

  return null;
}
