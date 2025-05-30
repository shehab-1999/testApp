"use client";

import { useEffect, ReactNode } from "react";
import { useAnimation } from "@/hooks/useAnimation";

interface SmoothScrollProps {
  children: ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const { isReduced } = useAnimation();

  useEffect(() => {
    // Skip smooth scrolling if user prefers reduced motion
    if (isReduced) return;

    // Handle anchor links for smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (!anchor) return;
      
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      e.preventDefault();
      
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [isReduced]);

  return <>{children}</>;
}