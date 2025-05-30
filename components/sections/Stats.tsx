"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
  prefix?: string;
}

function Counter({ end, duration, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<{ start: number; end: number; duration: number; startTime: number | null }>({
    start: 0,
    end,
    duration,
    startTime: null,
  });

  useEffect(() => {
    if (end <= 0) return;
    
    countRef.current = {
      start: 0,
      end,
      duration,
      startTime: null,
    };
    
    let animationFrameId: number;
    
    const animate = (timestamp: number) => {
      if (!countRef.current.startTime) {
        countRef.current.startTime = timestamp;
      }
      
      const progress = Math.min((timestamp - countRef.current.startTime) / countRef.current.duration, 1);
      const currentCount = Math.floor(progress * (countRef.current.end - countRef.current.start) + countRef.current.start);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration]);

  return (
    <span>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { value: 150, suffix: "+", label: "Abgeschlossene Projekte" },
  { value: 10, suffix: "+", label: "Jahre Erfahrung" },
  { value: 98, suffix: "%", label: "Kundenzufriedenheit" },
  { value: 32, prefix: "", label: "Teammitglieder" },
];

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-white/5 blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        <div 
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center space-y-2 transition-all duration-700"
              style={{ transitionDelay: `${150 * index}ms` }}
            >
              <p className="text-4xl md:text-5xl font-bold">
                {isVisible && (
                  <Counter
                    end={stat.value}
                    duration={2000}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                )}
              </p>
              <p className="text-primary-foreground/70 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}