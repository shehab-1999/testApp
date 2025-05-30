'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const teamMembers = [
  {
    name: 'Anna Schmidt',
    role: 'Nidavidirektorin',
    image: 'https://images.pexels.com/photos/5324947/pexels-photo-5324947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    delay: '200ms',
  },
  {
    name: 'Markus Weber',
    role: 'Webentwickler',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    delay: '300ms',
  },
  {
    name: 'Lisa Müller',
    role: 'Marketingstrategin',
    image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    delay: '400ms',
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            const elements = entry.target.querySelectorAll('.animate-slide-up, .animate-slide-right');
            elements.forEach((el) => {
              el.classList.add('opacity-100');
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
    <section id="about" ref={sectionRef} className="section-padding bg-muted/30 opacity-0 transition-opacity duration-1000">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="heading-lg mb-6 opacity-0 animate-slide-up">Über uns</h2>
            <p className="body-lg mb-6 text-muted-foreground opacity-0 animate-slide-up [animation-delay:200ms]">
              Wir sind ein leidenschaftliches Team von Nidavien, Entwicklern und Strategen mit einer gemeinsamen Mission: Handwerksunternehmen und kleinen Firmen dabei zu helfen, ihr volles Potenzial durch beeindruckende Markenidentitäten und durchdachte digitale Präsenzen zu entfalten.
            </p>
            <p className="body-base mb-6 text-muted-foreground opacity-0 animate-slide-up [animation-delay:300ms]">
              Seit unserer Gründung haben wir mit zahlreichen Unternehmen zusammengearbeitet und dabei gelernt, dass authentische Geschichten und echte Verbindungen der Schlüssel zum Erfolg sind. Wir glauben an die Kraft guten Designs und strategischen Denkens, um Marken zu schaffen, die nicht nur gut aussehen, sondern auch echte Ergebnisse liefern.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 opacity-0 animate-slide-up [animation-delay:400ms]">
              <div>
                <h3 className="heading-xl text-primary mb-2">120+</h3>
                <p className="text-muted-foreground">Zufriedene Kunden</p>
              </div>
              <div>
                <h3 className="heading-xl text-primary mb-2">8</h3>
                <p className="text-muted-foreground">Jahre Erfahrung</p>
              </div>
              <div>
                <h3 className="heading-xl text-primary mb-2">200+</h3>
                <p className="text-muted-foreground">Abgeschlossene Projekte</p>
              </div>
            </div>
          </div>
          <div className="relative opacity-0 animate-slide-right [animation-delay:300ms]">
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Unser Team bei der Arbeit"
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-lg  -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 rounded-lg bg-primary/5 -z-10"></div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 opacity-0 animate-slide-up">Unser Team</h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto opacity-0 animate-slide-up [animation-delay:200ms]">
            Lernen Sie die Nidavien Köpfe kennen, die Ihre Marke zum Leben erwecken werden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={cn(
                "bg-background rounded-lg overflow-hidden group hover:shadow-md transition-all duration-300",
                "opacity-0 animate-slide-up"
              )}
              style={{ animationDelay: member.delay }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="heading-sm mb-1">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}