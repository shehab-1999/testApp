"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AnimationContextType {
  isEnabled: boolean;
  isReduced: boolean;
  toggleAnimations: () => void;
}

const AnimationContext = createContext<AnimationContextType>({
  isEnabled: true,
  isReduced: false,
  toggleAnimations: () => {},
});

export function useAnimation() {
  return useContext(AnimationContext);
}

interface AnimationProviderProps {
  children: ReactNode;
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  const [isEnabled, setIsEnabled] = useState(true);
  const [isReduced, setIsReduced] = useState(false);

  // Check user's preference for reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReduced(mediaQuery.matches);
    setIsEnabled(!mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReduced(e.matches);
      setIsEnabled(!e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleAnimations = () => {
    setIsEnabled((prev) => !prev);
  };

  return (
    <AnimationContext.Provider value={{ isEnabled, isReduced, toggleAnimations }}>
      {children}
    </AnimationContext.Provider>
  );
}

export { AnimationContext }