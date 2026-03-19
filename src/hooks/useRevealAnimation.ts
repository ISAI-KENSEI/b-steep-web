"use client";

import { useEffect, useRef } from "react";

export function useRevealAnimation(threshold = 0.1) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      const elements = sectionRef.current?.querySelectorAll(".reveal");
      elements?.forEach((el) => {
        (el as HTMLElement).style.opacity = "1";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay || "0";
            el.style.animationDelay = `${delay}ms`;
            el.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold }
    );
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el, i) => {
      (el as HTMLElement).dataset.delay = String(i * 100);
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, [threshold]);

  return sectionRef;
}
