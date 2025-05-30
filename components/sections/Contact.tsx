'use client';

import { useRef, useEffect } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  details: string;
  delay: string;
}

function ContactInfo({ icon, title, details, delay }: ContactInfoProps) {
  return (
    <div 
      className="flex items-start gap-4 opacity-0 animate-slide-up"
      style={{ animationDelay: delay }}
    >
      <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-full  flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground">{details}</p>
      </div>
    </div>
  );
}

export default function Contact() {
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
    <section id="contact" ref={sectionRef} className="section-padding bg-background opacity-0 transition-opacity duration-1000">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="heading-lg mb-6 opacity-0 animate-slide-up">Kontakt</h2>
            <p className="body-lg mb-8 text-muted-foreground opacity-0 animate-slide-up [animation-delay:200ms]">
              Haben Sie Fragen oder möchten Sie ein Projekt besprechen? Wir freuen uns, von Ihnen zu hören!
            </p>
            
            <div className="space-y-8 mb-12">
              <ContactInfo 
                icon={<Mail className="h-5 w-5 text-primary" />}
                title="E-Mail"
                details="info@Nidavi.de"
                delay="300ms"
              />
              <ContactInfo 
                icon={<Phone className="h-5 w-5 text-primary" />}
                title="Telefon"
                details="+49 (0) 123 456 789"
                delay="400ms"
              />
              <ContactInfo 
                icon={<MapPin className="h-5 w-5 text-primary" />}
                title="Adresse"
                details="Musterstraße 123, 10115 Berlin, Deutschland"
                delay="500ms"
              />
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border opacity-0 animate-slide-right [animation-delay:300ms]">
            <h3 className="heading-sm mb-6">Nachricht senden</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Ihr Name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    E-Mail
                  </label>
                  <Input id="email" type="email" placeholder="ihre-email@beispiel.de" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Betreff
                </label>
                <Input id="subject" placeholder="Worum geht es?" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Nachricht
                </label>
                <Textarea id="message" placeholder="Ihre Nachricht..." rows={6} />
              </div>
              
              <Button size="lg" className="w-full md:w-auto">
                Nachricht senden
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}