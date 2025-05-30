'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { Palette, Globe, LineChart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useRef, ReactNode } from 'react';

// تعريف نوع الـ Props
interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay: number;
}

const ServiceCard = ({ title, description, icon, delay }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        delay: delay,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 10
      }}
      className={cn(
        "bg-card p-8 rounded-lg shadow-sm border border-border hover:border-primary/20",
        "transform hover:-translate-y-1 transition-all duration-300"
      )}
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="heading-sm mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default function Services() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" ref={ref} className="section-padding bg-background">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="container-custom"
      >
        <motion.div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            variants={itemVariants}
            className="heading-lg mb-4"
          >
            Unsere Leistungen
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="body-lg text-muted-foreground"
          >
            Wir bieten maßgeschneiderte Lösungen, die Ihr Unternehmen auf die nächste Stufe heben.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Markengestaltung"
            description="Wir entwickeln einzigartige, ausdrucksstarke Markenidentitäten, die Ihr Unternehmen von der Konkurrenz abheben und einen bleibenden Eindruck hinterlassen."
            icon={<Palette className="h-6 w-6 text-primary" />}
            delay={0.2}
          />
          <ServiceCard
            title="Webdesign"
            description="Moderne, benutzerfreundliche Websites, die nicht nur gut aussehen, sondern auch konvertieren und Ihre Marke optimal repräsentieren."
            icon={<Globe className="h-6 w-6 text-primary" />}
            delay={0.4}
          />
          <ServiceCard
            title="Strategisches Marketing"
            description="Durchdachte Marketingstrategien, die Ihre Zielgruppe erreichen und messbare Ergebnisse für Ihr Unternehmen liefern."
            icon={<LineChart className="h-6 w-6 text-primary" />}
            delay={0.6}
          />
        </div>
      </motion.div>
    </section>
  );
}