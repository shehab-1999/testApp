"use client";

import { useState, useRef, useEffect } from "react";
import { services } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-700",
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            Our Comprehensive Services
          </h2>
          <p className={cn(
            "text-lg text-gray-600 dark:text-gray-300 transition-all duration-700 delay-200",
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            We deliver end-to-end solutions tailored to your unique business needs, helping you navigate the digital landscape with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const delay = 200 + index * 100;
            
            return (
              <div 
                key={service.title}
                className={cn(
                  "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700",
                  hoveredIndex === index ? "transform -translate-y-2" : "",
                  isInView 
                    ? "translate-y-0 opacity-100" 
                    : "translate-y-12 opacity-0"
                )}
                style={{ 
                  transitionDelay: `${delay}ms`,
                  transitionProperty: "transform, opacity, box-shadow, translate"
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="h-12 w-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-primary hover:underline cursor-pointer font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}