"use client";

import React from 'react';
import { motion } from 'framer-motion'; // Changed import
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const steps = [
  "Erstgespräch",
  "Analyse",
  "Strategie",
  "Gestaltung",
  "Testen",
  "Perfektion"
];

export const CollaborationSection: React.FC = () => {
  return (
    <div className="relative min-h-[60vh] bg-yellow-400 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-400"></div>
      
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12">
            Der Weg zur<br />Zusammenarbeit
          </h2>

          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-8 md:mb-12">
            {steps.map((step, index) => (
              <React.Fragment key={step}>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-lg md:text-xl font-medium"
                >
                  {step}
                </motion.span>
                {index < steps.length - 1 && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.05, duration: 0.5 }}
                    className="w-2 h-2 rounded-full bg-black"
                  >
                    •
                  </motion.span>
                )}
              </React.Fragment>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button
              variant="outline"
              className="bg-white hover:bg-gray-100 text-black border-2 border-black rounded-full px-6 py-2 text-lg font-medium"
            >
              Jetzt kontaktieren
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,_#000_0%,_transparent_50%)]"
      />
    </div>
  );
};