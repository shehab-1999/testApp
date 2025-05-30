"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "NIDAVI hat unser Unternehmen mit seiner innovativen Softwarelösung transformiert. Die Expertise und das Engagement des Teams haben unsere Erwartungen in jeder Phase übertroffen.",
    name: "Sarah Johnson",
    title: "CEO, TechVision",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    content: "Die Zusammenarbeit mit NIDAVI war ein Wendepunkt für unser Unternehmen. Ihre Expertise in der App-Entwicklung half uns, neue Kunden zu erreichen und die Engagement-Raten zu steigern.",
    name: "Michael Chen",
    title: "Produktmanager, InnoMobile",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    content: "Das Team von NIDAVI hat unser Projekt termingerecht und im Budgetrahmen geliefert. Ihre Sorgfalt und ihr Qualitätsbewusstsein sind branchenführend.",
    name: "Emma Rodriguez",
    title: "CTO, FinTech Solutions",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    content: "NIDAVIs Cloud-Migrationsdienstleistungen halfen uns, unsere Operationen reibungslos zu skalieren. Ihre Expertise sparte uns unzählige Stunden und Ressourcen.",
    name: "David Wilson",
    title: "Operationsleiter, CloudFirst",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 6000);
      
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-chart-1/10 blur-3xl"></div>
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-chart-3/10 blur-3xl"></div>
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
              Was unsere Kunden sagen
            </h2>
            <p className="text-muted-foreground text-lg">
              Hören Sie nicht nur auf uns. Lesen Sie, was unsere Kunden über ihre Erfahrungen mit NIDAVI berichten.
            </p>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div 
            className={cn(
              "transition-all duration-700",
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="text-chart-2 mb-6">
                  <Quote className="h-12 w-12 opacity-30" />
                </div>
                
                <div className="relative min-h-[200px]">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className={cn(
                        "absolute top-0 left-0 w-full transition-all duration-700",
                        index === activeIndex 
                          ? "opacity-100 translate-x-0" 
                          : index < activeIndex 
                            ? "opacity-0 -translate-x-full" 
                            : "opacity-0 translate-x-full"
                      )}
                    >
                      <blockquote className="text-xl md:text-2xl font-medium mb-8">
                        {testimonial.content}
                      </blockquote>
                      
                      <div className="flex items-center">
                        <div className="mr-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-muted-foreground">{testimonial.title}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === activeIndex 
                      ? "bg-chart-2 w-6" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                  aria-label={`Zum Testimonial ${index + 1} wechseln`}
                ></button>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                aria-label="Vorheriges Testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                aria-label="Nächstes Testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}