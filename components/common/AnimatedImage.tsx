"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useAnimation } from "@/hooks/useAnimation";

interface AnimatedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  animation?: "fade" | "scale" | "slide" | "parallax";
  delay?: number;
  duration?: number;
  once?: boolean;
  priority?: boolean;
}

export function AnimatedImage({
  src,
  alt,
  width,
  height,
  className,
  animation = "fade",
  delay = 0,
  duration = 0.7,
  once = true,
  priority = false,
}: AnimatedImageProps) {
  const { isEnabled } = useAnimation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (src) {
      const img = new window.Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
    }
  }, [src]);

  // If animations are disabled, just render the image
  if (!isEnabled) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
      />
    );
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
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration, delay } 
      },
    },
    slide: {
      hidden: { opacity: 0, x: -50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration, delay } 
      },
    },
    parallax: {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration, delay } 
      },
    }
  };

  return (
    <motion.div
      variants={variants[animation]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={cn("overflow-hidden", animation === "parallax" && "relative")}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          className,
          !isLoaded && "blur-sm",
          "transition-all duration-700"
        )}
        priority={priority}
        onLoad={() => setIsLoaded(true)}
      />
    </motion.div>
  );
}