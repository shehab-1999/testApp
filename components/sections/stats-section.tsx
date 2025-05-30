"use client";

import { useRef } from "react";
import { stats } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";
import { CountUp } from "@/components/count-up";

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-gradient-to-r from-primary/90 to-primary/80 dark:from-primary/30 dark:to-primary/20 text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          {stats.map((stat, index) => {
            const delay = 100 + index * 100;
            
            return (
              <div 
                key={stat.label}
                className={cn(
                  "text-center transition-all duration-700",
                  isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {isInView && stat.value.match(/\d+/) ? (
                    <CountUp end={parseInt(stat.value)} suffix={stat.value.includes('+') ? '+' : ''} />
                  ) : (
                    stat.value
                  )}
                </div>
                <p className="text-white/80 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}