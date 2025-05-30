"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from '@/components/motion';
import { ProjectGallery } from './ProjectGallery';

export const ProjectShowcase: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        <div className="lg:col-span-7 space-y-6">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            AYBAS Service
          </motion.h1>
          
          <motion.h2 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300"
          >
            Logodesign, Branding, Webdesign, Flyerdesign
          </motion.h2>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="prose prose-lg max-w-none text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            <p>
              Für unseren Kunden AYBAS Service durften wir ein rundum stimmiges Markenpaket entwickeln – bestehend aus Logo, Website, Flyern und einem klaren, modernen Designkonzept. Ziel war es, einen Auftritt zu gestalten, der professionell wirkt, sympathisch rüberkommt und in Erinnerung bleibt. Alles begann mit einem Logo, das die wichtigsten Werte von AYBAS Service widerspiegelt: Zuverlässigkeit, Energie und Nähe zum Kunden. Darauf aufbauend haben wir ein einheitliches Erscheinungsbild entworfen – mit passenden Farben, Schriften und Gestaltungselementen, die sich überall wiederfinden: auf der Website, in den Flyern und im gesamten Markenauftritt. Durch die enge und unkomplizierte Zusammenarbeit mit dem Team von AYBAS Service ist ein starker Auftritt entstanden, der Vertrauen schafft und langfristig überzeugt.
            </p>
          </motion.div>
        </div>
        
        <div className="lg:col-span-5">
          <ProjectGallery />
        </div>
      </div>
    </motion.div>
  );
};