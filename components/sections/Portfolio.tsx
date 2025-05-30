'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Handwerksmeister Schmidt',
    category: 'Branding & Webdesign',
    image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    delay: '200ms',
  },
  {
    id: 2,
    title: 'Café Sonnenschein',
    category: 'Identität & Verpackung',
    image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    delay: '300ms',
  },
  {
    id: 3,
    title: 'Naturkosmetik Blüte',
    category: 'Branding & Strategie',
    image: 'https://images.pexels.com/photos/6508308/pexels-photo-6508308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    delay: '400ms',
  },
  {
    id: 4,
    title: 'Architektur Neubau',
    category: 'Webdesign & Marketing',
    image: 'https://images.pexels.com/photos/5086489/pexels-photo-5086489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    delay: '500ms',
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            const projectCards = entry.target.querySelectorAll('.project-card');
            projectCards.forEach((card) => {
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
    <section id="portfolio" ref={sectionRef} className="section-padding bg-muted/50 opacity-0 transition-opacity duration-1000">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="heading-lg mb-4 opacity-0 animate-slide-up">Ausgewählte Projekte</h2>
            <p className="body-lg text-muted-foreground opacity-0 animate-slide-up [animation-delay:200ms]">
              Entdecken Sie eine Auswahl unserer erfolgreichen Projekte, die die Marken unserer Kunden zum Leben erweckt haben.
            </p>
          </div>
          
          <Button 
            variant="ghost" 
            className="group mt-4 md:mt-0 self-start md:self-auto opacity-0 animate-slide-up [animation-delay:300ms]"
          >
            Alle Projekte ansehen
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={cn(
                "project-card group relative overflow-hidden rounded-lg opacity-0 transition-all duration-500 ease-out",
                "transform hover:-translate-y-1 hover:shadow-lg"
              )}
              style={{ animationDelay: project.delay }}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-sm font-medium mb-1">{project.category}</p>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}