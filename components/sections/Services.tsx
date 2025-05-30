'use client';

import { useRef, useEffect } from 'react';
import { Palette, Globe, LineChart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: string;
}

function ServiceCard({ title, description, icon, delay }: ServiceCardProps) {
  return (
    <div 
      className={cn(
        "bg-card p-8 rounded-lg shadow-sm border border-border hover:border-primary/20 transition-all duration-300",
        "transform hover:-translate-y-1 opacity-0 animate-slide-up"
      )}
      style={{ animationDelay: delay }}
    >
      <div className="w-12 h-12 rounded-full  flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="heading-sm mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            const cards = entry.target.querySelectorAll('.animate-slide-up');
            cards.forEach((card) => {
              card.classList.add('opacity-100');
            });
          }
        });
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
    <section id="services" ref={sectionRef} className="section-padding bg-background opacity-0 transition-opacity duration-1000">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-4 opacity-0 animate-slide-up">Unsere Leistungen</h2>
          <p className="body-lg text-muted-foreground opacity-0 animate-slide-up [animation-delay:200ms]">
            Wir bieten maßgeschneiderte Lösungen, die Ihr Unternehmen auf die nächste Stufe heben.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Markengestaltung"
            description="Wir entwickeln einzigartige, ausdrucksstarke Markenidentitäten, die Ihr Unternehmen von der Konkurrenz abheben und einen bleibenden Eindruck hinterlassen."
            icon={<Palette className="h-6 w-6 text-primary" />}
            delay="300ms"
          />
          <ServiceCard
            title="Webdesign"
            description="Moderne, benutzerfreundliche Websites, die nicht nur gut aussehen, sondern auch konvertieren und Ihre Marke optimal repräsentieren."
            icon={<Globe className="h-6 w-6 text-primary" />}
            delay="400ms"
          />
          <ServiceCard
            title="Strategisches Marketing"
            description="Durchdachte Marketingstrategien, die Ihre Zielgruppe erreichen und messbare Ergebnisse für Ihr Unternehmen liefern."
            icon={<LineChart className="h-6 w-6 text-primary" />}
            delay="500ms"
          />
        </div>
      </div>
    </section>
  );
}