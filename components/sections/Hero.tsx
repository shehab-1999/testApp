'use client';

import { useEffect, useRef } from 'react';
import { ArrowDownCircle, Link as LinkIcon, Rocket, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function Hero() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const scrollToNextSection = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // تعريف متغيرات الأنيميشن
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

  const badgeItem = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
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
              Die <span className="text-primary">#1</span> Webdesign Agentur
            </motion.h1>
            
            <motion.p 
              variants={item}
              className="body-lg md:text-xl text-muted-foreground"
            >
              Wir sind mehr als eine klassische Webdesign Agentur im Herzen von München, wir machen Ihre Webseite zu Ihrem besten Mitarbeiter.
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
                  <LinkIcon className="h-6 w-6 text-primary" />
                </motion.div>
                <span className="text-lg">Suchmaschinenoptimiert</span>
              </motion.div>

              <motion.div 
                variants={item}
                className="flex items-center gap-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                >
                  <Rocket className="h-6 w-6 text-primary" />
                </motion.div>
                <span className="text-lg">Performant & skalierbar</span>
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
                <span className="text-lg">Auf Ihre Workflows angepasst</span>
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
                Projektanfrage
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
                src="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg"
                alt="Webdesign Showcase"
                className="w-full h-full object-cover rounded-3xl"
                whileHover={{ scale: 1.03 }}
              />
            </motion.div>
            <motion.div 
              variants={badgeItem}
              className="absolute -bottom-8 right-0 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg"
              whileHover={{ y: -5 }}
            >
              <img
                src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg"
                alt="Award"
                className="w-32 h-auto"
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