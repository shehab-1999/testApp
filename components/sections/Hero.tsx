'use client';

import { useEffect, useRef } from 'react';
import { ArrowDownCircle, Link as LinkIcon, Rocket, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const scrollToNextSection = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-background pt-20 pb-16">
      <div
        ref={heroRef}
        className="container-custom opacity-0 transition-opacity duration-1000 ease-out"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="heading-xl animate-slide-up [animation-delay:200ms] opacity-0">
              Die <span className="text-primary">#1</span> Webdesign Agentur
            </h1>
            
            <p className="body-lg md:text-xl text-muted-foreground animate-slide-up [animation-delay:400ms] opacity-0">
              Wir sind mehr als eine klassische Webdesign Agentur im Herzen von München, wir machen Ihre Webseite zu Ihrem besten Mitarbeiter.
            </p>

            <div className="space-y-6 animate-slide-up [animation-delay:600ms] opacity-0">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full /20 flex items-center justify-center">
                  <LinkIcon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-lg">Suchmaschinenoptimiert</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full /20 flex items-center justify-center">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <span className="text-lg">Performant & skalierbar</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full /20 flex items-center justify-center">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <span className="text-lg">Auf Ihre Workflows angepasst</span>
              </div>
            </div>
            
            <div className="pt-4 animate-slide-up [animation-delay:800ms] opacity-0">
              
              <Button size="lg" className="w-full md:w-auto">
                Projektanfrage
              </Button>
            </div>
          </div>

          <div className="relative animate-slide-up [animation-delay:600ms] opacity-0">
            <div className="aspect-[9/16] w-full max-w-md mx-auto">
              <img
                src="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg"
                alt="Webdesign Showcase"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="absolute -bottom-8 right-0 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <img
                src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg"
                alt="Award"
                className="w-32 h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-primary"
        onClick={scrollToNextSection}
      >
        <ArrowDownCircle className="h-8 w-8" />
      </Button>
      
      <div className="decorative-circle -top-40 -right-40 w-96 h-96"></div>
      <div className="decorative-circle -bottom-20 -left-20 w-80 h-80"></div>
    </section>
  );
}