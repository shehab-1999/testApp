"use client"

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background pt-24 pb-16 sm:pb-20 lg:pb-28 xl:pb-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-x-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
              Innovative Lösungen für Ihr Unternehmen
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <span className="block leading-tight">Wir entwickeln</span>
              <span className="block text-primary leading-tight">
                beeindruckende Softwarelösungen
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              NIDAVI ist eine führende Softwareagentur, die maßgeschneiderte Lösungen für Unternehmen entwickelt. 
              Wir verbinden kreatives Design mit fortschrittlicher Technologie, um digitale Produkte zu schaffen, 
              die Ihr Unternehmen voranbringen.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="gap-2">
              <a href="#services">
                Unsere Leistungen
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Kontakt aufnehmen</a>
            </Button>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="relative mt-16 sm:mt-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Teamarbeit an digitalen Projekten"
              width={1920}
              height={1080}
              priority
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
          </div>
        </div>
      </motion.div>
      
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-background to-background/0" />
    </section>
  )
}