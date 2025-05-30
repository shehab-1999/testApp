'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDownCircle, Link as LinkIcon, Rocket, Settings, ShoppingCart, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function Hero() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Bildliste mit Beispielen für Webdesign, E-Commerce und Logos
  const images = [
    "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg", // Webdesign
    "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg", // E-Commerce
    "https://images.pexels.com/photos/7376/startup-photos.jpg", // Logo Design
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Bildwechsel alle 3 Sekunden (besser für Präsentation)

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToNextSection = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animationen
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageItem = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-background pt-20 pb-16 overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={container}
        className="container-custom"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.h1 
              variants={item}
              className="heading-xl"
            >
              Professionelles <span className="text-primary">Webdesign</span> & <br/>Markenentwicklung
            </motion.h1>
            
            <motion.p 
              variants={item}
              className="body-lg md:text-xl text-muted-foreground"
            >
              Wir kreieren moderne Websites, erfolgreiche E-Commerce Lösungen und einprägsame Logos - maßgeschneidert für Ihren Geschäftserfolg.
            </motion.p>

            <motion.div 
              variants={container}
              className="space-y-6"
            >
              <motion.div 
                variants={item}
                className="flex items-center gap-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                >
                  <PenTool className="h-6 w-6 text-primary" />
                </motion.div>
                <span className="text-lg">Individuelle Webdesign-Lösungen</span>
              </motion.div>

              <motion.div 
                variants={item}
                className="flex items-center gap-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                >
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </motion.div>
                <span className="text-lg">E-Commerce & Online-Shops</span>
              </motion.div>

              <motion.div 
                variants={item}
                className="flex items-center gap-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                >
                  <Settings className="h-6 w-6 text-primary" />
                </motion.div>
                <span className="text-lg">Corporate Design & Logos</span>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={item}
              className="pt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="w-full md:w-auto"
              >
                Kostenlose Beratung
              </Button>
            </motion.div>
          </div>

          <motion.div 
            variants={container}
            className="relative"
          >
            <motion.div 
              variants={imageItem}
              className="aspect-[9/16] w-full max-w-md mx-auto overflow-hidden rounded-3xl"
            >
              <motion.img
                src={images[currentImageIndex]}
                alt="Unsere Dienstleistungen: Webdesign, E-Commerce und Logo-Design"
                className="w-full h-full object-cover rounded-3xl"
                whileHover={{ scale: 1.03 }}
                key={images[currentImageIndex]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary"
          onClick={scrollToNextSection}
        >
          <ArrowDownCircle className="h-8 w-8" />
        </Button>
      </motion.div>
      
      <motion.div 
        className="decorative-circle -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.2,
          y: [-20, 20, -20],
          transition: {
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 1 }
          }
        }}
      />
      
      <motion.div 
        className="decorative-circle -bottom-20 -left-20 w-80 h-80 bg-secondary/20 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.2,
          scale: [1, 1.05, 1],
          transition: {
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 1 }
          }
        }}
      />
    </section>
  );
}