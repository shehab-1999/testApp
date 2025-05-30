"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { Container } from "../ui/container";

const processSteps = [
  {
    number: "01",
    title: "Analyse",
    description: "Wir beginnen mit dem Verständnis Ihres Unternehmens, Ihrer Ziele und Herausforderungen, um den Projektumfang zu definieren."
  },
  {
    number: "02",
    title: "Planung",
    description: "Unser Team erstellt einen detaillierten Projektplan mit Zeitplänen, Ressourcen und Meilensteinen."
  },
  {
    number: "03",
    title: "Design",
    description: "Wir gestalten intuitive Schnittstellen und Benutzererlebnisse, die auf Ihre Zielgruppe zugeschnitten sind."
  },
  {
    number: "04",
    title: "Entwicklung",
    description: "Unsere Ingenieure entwickeln Ihre Lösung mit modernsten Technologien und Best Practices."
  },
  {
    number: "05",
    title: "Testen",
    description: "Rigoroses Qualitätsmanagement stellt sicher, dass Ihr Produkt auf allen Plattformen einwandfrei funktioniert."
  },
  {
    number: "06",
    title: "Veröffentlichung",
    description: "Wir unterstützen Sie bei der Bereitstellung Ihres Produkts und sorgen für einen reibungslosen Übergang in den Produktivbetrieb."
  }
];

export default function Process() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const cycleSteps = () => {
        setActiveStep((prev) => (prev + 1) % processSteps.length);
        timeoutRef.current = setTimeout(cycleSteps, 3000);
      };

      timeoutRef.current = setTimeout(cycleSteps, 3000);

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, [isVisible]);

  return (
    <section id="process" ref={sectionRef} className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-chart-1/10 blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-chart-3/10 blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className={cn(
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Unser Entwicklungsprozess
            </h2>
            <p className="text-muted-foreground text-lg">
              Wir folgen einem effizienten und transparenten Prozess, um eine erfolgreiche Projektdurchführung zu gewährleisten.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            className={cn(
              "relative transition-all duration-1000 h-[500px]",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Central circle */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-muted-foreground/30 animate-spin-slow"></div>
                
                {/* Step indicators */}
                {processSteps.map((_, index) => {
                  const angle = (index * (360 / processSteps.length) * Math.PI) / 180;
                  const x = 150 * Math.cos(angle) + 150;
                  const y = 150 * Math.sin(angle) + 150;
                  
                  return (
                    <div 
                      key={index}
                      className={cn(
                        "absolute w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500",
                        activeStep === index 
                          ? "bg-chart-2 text- scale-125" 
                          : "bg-muted text-primary"
                      )}
                      style={{
                        left: `${x}px`,
                        top: `${y}px`,
                        transform: `translate(-50%, -50%) ${activeStep === index ? 'scale(1.25)' : 'scale(1)'}`,
                      }}
                      onClick={() => setActiveStep(index)}
                    >
                      {index + 1}
                    </div>
                  );
                })}
                
                {/* Active step content in center */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-48">
                  <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 shadow-lg transition-all duration-500">
                    <div className="text-3xl font-bold text-chart-2 mb-1 text-primary">
                      {processSteps[activeStep].number}
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-1">
                      {processSteps[activeStep].title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div 
            className={cn(
              "space-y-8 transition-all duration-1000",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className={cn(
                  "relative pl-12 cursor-pointer transition-all duration-500",
                  activeStep === index ? "opacity-100" : "opacity-50"
                )}
                onClick={() => setActiveStep(index)}
              >
                <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                  <span className="text-sm font-medium">{step.number}</span>
                </div>
                <div className="absolute left-4 top-10 h-full w-0.5 bg-muted -z-10"></div>
                <div>
                  <h3 className={cn(
                    "text-xl font-semibold mb-2 transition-colors duration-300",
                    activeStep === index && "text-chart-2 text-primary"
                  )}>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}