"use client"

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { 
  Building, 
  Building2, 
  Briefcase, 
  Globe, 
  LineChart, 
  ShieldCheck
} from 'lucide-react'

const clients = [
  { icon: Building, name: 'TechCorp GmbH' },
  { icon: LineChart, name: 'DataVision AG' },
  { icon: Globe, name: 'WebSolutions' },
  { icon: Building2, name: 'InnoTech' },
  { icon: ShieldCheck, name: 'SecureNet' },
  { icon: Briefcase, name: 'BusinessPro' },
]

export function Clients() {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Unseren Kunden vertrauen uns</h2>
          <p className="text-muted-foreground">
            Wir arbeiten mit führenden Unternehmen in verschiedenen Branchen zusammen.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className={cn(
                "w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-3",
                "group-hover:bg-primary/10 transition-colors duration-300"
              )}>
                <client.icon className="h-8 w-8 text-muted-foreground" />
              </div>
              <span className="text-sm font-medium">{client.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}