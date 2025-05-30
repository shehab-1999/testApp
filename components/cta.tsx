"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-primary text-primary-foreground"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--chart-1),0.15),transparent_50%)]"></div>
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Bereit, Ihr nächstes digitales Projekt zu starten?
              </h2>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Kontaktieren Sie uns noch heute für eine kostenlose Beratung und erfahren Sie, 
                wie wir Ihnen helfen können, Ihre digitalen Ziele zu erreichen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  variant="secondary"
                  asChild
                  className="gap-2"
                >
                  <a href="#contact">
                    Jetzt Kontakt aufnehmen
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild
                  className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <a href="#services">Unsere Leistungen</a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}