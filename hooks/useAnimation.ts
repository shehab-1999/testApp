"use client";

import { useContext } from "react";
import { AnimationContext } from "@/components/providers/AnimationProvider";

export function useAnimation() {
  const context = useContext(AnimationContext);
  
  if (!context) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  
  return context;
}