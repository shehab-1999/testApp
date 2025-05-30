'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDownCircle, ShoppingCart, PenTool, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg",
    "https://images.pexels.com/photos/7376/startup-photos.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 500); // Bildwechsel alle 1.5 Sekunden

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToNextSection = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-background md:pt-20 pb-16 overflow-hidden">
      <div className="md:container-custom ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bild ohne Animation - zuerst auf Mobile */}
          <div className="relative order-1 lg:order-2 ">
            <div className="aspect-[9/16] w-full max-w-md max-md:h-[60vh] md:mx-auto overflow-hidden md:rounded-3xl rounded-sm">
              <Image
              height={700}
              width={1000}
                src={images[currentImageIndex]}
                alt="Unsere Dienstleistungen: Webdesign, E-Commerce und Logo-Design"
                className="w-full h-full object-cover "
              />
            </div>
          </div>

          {/* Textinhalt - zweitens auf Mobile */}
          <div className="space-y-8 order-2 max-md:px-[5%] lg:order-1">
            <h1 className="heading-xl">
              Professionelle <span className="text-primary">Webdesign</span> & <br/>Markenentwicklung
            </h1>
            
            <p className="body-lg md:text-xl text-muted-foreground">
              Wir erstellen moderne Websites, erfolgreiche E-Commerce-Lösungen und einprägsame Logos - maßgeschneidert für Ihren Geschäftserfolg.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <PenTool className="h-6 w-6 text-primary" />
                </div>
                <span className="text-lg">Individuelle Webdesign-Lösungen</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <span className="text-lg">E-Commerce & Online-Shops</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <span className="text-lg">Corporate Design & Logos</span>
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                size="lg" 
                className="w-full md:w-auto"
              >
                Kostenlose Beratung
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary"
        onClick={scrollToNextSection}
      >
        <ArrowDownCircle className="h-8 w-8" />
      </Button>
      
      <div className="decorative-circle -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full"></div>
      <div className="decorative-circle -bottom-20 -left-20 w-80 h-80 bg-secondary/20 rounded-full"></div>
    </section>
  );
}