"use client";

import { useEffect, useState, useRef } from "react";

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export function CountUp({
  end,
  start = 0,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0,
}: CountUpProps) {
  const [value, setValue] = useState(start);
  const requestRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const valueRef = useRef<number>(start);

  useEffect(() => {
    // Reset animation when end value changes
    valueRef.current = start;
    startTimeRef.current = undefined;
    requestRef.current = undefined;
    
    const animate = (timestamp: number) => {
      if (startTimeRef.current === undefined) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      
      valueRef.current = start + progress * (end - start);
      setValue(valueRef.current);

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    requestRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [start, end, duration]);

  return (
    <>
      {prefix}
      {value.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      {suffix}
    </>
  );
}