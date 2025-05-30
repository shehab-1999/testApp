"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Category = 'all' | 'web' | 'mobile' | 'design'

const projects = [
  {
    title: 'E-Commerce Plattform',
    description: 'Eine moderne Online-Shopping-Plattform mit integriertem Zahlungssystem und Bestandsverwaltung.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'web',
  },
  {
    title: 'Gesundheits-App',
    description: 'Eine mobile Anwendung zur Überwachung von Gesundheitsdaten und Trainingsaktivitäten.',
    image: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'mobile',
  },
  {
    title: 'Unternehmens-Dashboard',
    description: 'Ein umfassendes Dashboard zur Visualisierung von Unternehmensdaten und KPIs.',
    image: 'https://images.pexels.com/photos/7947954/pexels-photo-7947954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'web',
  },
  {
    title: 'Brandenentwicklung',
    description: 'Ein vollständiges Marken-Redesign mit visueller Identität und Designsystem.',
    image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'design',
  },
  {
    title: 'Immobilien-App',
    description: 'Eine mobile App für Immobiliensuche mit AR-Funktionalität und virtuellen Besichtigungen.',
    image: 'https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'mobile',
  },
  {
    title: 'Marketing Website',
    description: 'Eine hochkonvertierende Website mit optimierter User Journey und Analytics-Integration.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'web',
  },
]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Unsere Projekte</h2>
          <p className="text-lg text-muted-foreground">
            Entdecken Sie einige unserer beeindruckendsten Arbeiten und Erfolgsgeschichten.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {['all', 'web', 'mobile', 'design'].map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category as Category)}
              className="capitalize"
            >
              {category === 'all' ? 'Alle' : category}
            </Button>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}