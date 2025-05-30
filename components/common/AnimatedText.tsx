"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useAnimation } from "@/hooks/useAnimation";

interface AnimatedTextProps {
  text: string | ReactNode;
  className?: string;
  element?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  animation?: "fade" | "slide" | "reveal" | "typewriter";
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function AnimatedText({
  text,
  className,
  element = "p",
  animation = "fade",
  delay = 0,
  duration = 0.5,
  once = true,
}: AnimatedTextProps) {
  const { isEnabled } = useAnimation();
  
  // If animations are disabled, just render the text
  if (!isEnabled) {
    const Element = element;
    return <Element className={className}>{text}</Element>;
  }

  // Different animation variants
  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration, delay } 
      },
    },
    slide: {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration, delay } 
      },
    },
    reveal: {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration, 
          delay,
          type: "spring", 
          stiffness: 100 
        } 
      },
    },
    typewriter: {
      hidden: { width: "0%" },
      visible: {
        width: "100%",
        transition: { duration: duration * 2, delay, ease: "easeInOut" }
      }
    }
  };

  if (animation === "typewriter" && typeof text === "string") {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <motion.div
          variants={variants.typewriter}
          initial="hidden"
          whileInView="visible"
          viewport={{ once }}
          className="whitespace-nowrap overflow-hidden"
        >
          {text}
        </motion.div>
      </div>
    );
  }

  const Element = element as keyof JSX.IntrinsicElements;

  return (
    <motion.div
      variants={variants[animation]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      <Element className={className}>{text}</Element>
    </motion.div>
  );
}