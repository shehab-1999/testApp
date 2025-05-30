"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Code, PenTool, BarChart3, Globe, Lightbulb, Users } from 'lucide-react'

const services = [
  {
    title: 'Web-Entwicklung',
    description: 'Maßgeschneiderte Websites und Webanwendungen mit modernen Frameworks und Technologien.',
    icon: Globe,
  },
  {
    title: 'Mobile App-Entwicklung',
    description: 'Native und hybride mobile Anwendungen für iOS und Android mit nahtloser Benutzererfahrung.',
    icon: PenTool,
  },
  {
    title: 'Software-Beratung',
    description: 'Strategische Technologieberatung und Lösungskonzepte für komplexe Geschäftsanforderungen.',
    icon: Lightbulb,
  },
  {
    title: 'UI/UX Design',
    description: 'Benutzerorientiertes Design mit Fokus auf Ästhetik, Benutzerfreundlichkeit und Markenidentität.',
    icon: Users,
  },
  {
    title: 'Datenanalyse',
    description: 'Umfassende Datenanalyse und Visualisierungslösungen für fundierte Geschäftsentscheidungen.',
    icon: BarChart3,
  },
  {
    title: 'Custom Software',
    description: 'Individuelle Softwarelösungen, die genau auf Ihre spezifischen Geschäftsanforderungen zugeschnitten sind.',
    icon: Code,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Unsere Leistungen</h2>
          <p className="text-lg text-muted-foreground">
            Wir bieten eine breite Palette von Dienstleistungen, um Ihren digitalen Erfolg zu sichern.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item} className="h-full">
              <Card className="h-full border-none bg-card shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}