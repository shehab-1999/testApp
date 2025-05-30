"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function CTA() {
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
      { threshold: 0.1 }
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
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-chart-1/20 via-chart-2/20 to-chart-3/20"></div>
      
      <Container className="relative z-10">
        <div 
          className={cn(
            "max-w-4xl mx-auto text-center transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Bereit, Ihre digitale Präsenz zu transformieren?
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam innovative Lösungen entwickeln, die Ihr Unternehmen voranbringen. Vereinbaren Sie noch heute eine kostenlose Beratung mit unseren Experten.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="text-base group">
              <span>Jetzt starten</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              Portfolio ansehen
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}