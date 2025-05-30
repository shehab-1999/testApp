"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    content: "Das Team von NIDAVI hat unsere Erwartungen weit übertroffen. Sie haben nicht nur eine erstklassige Software geliefert, sondern waren auch während des gesamten Prozesses äußerst professionell und reaktionsschnell.",
    author: "Martin Schmidt",
    title: "CEO, TechVision GmbH",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    content: "Die Zusammenarbeit mit NIDAVI war eine hervorragende Erfahrung. Ihr Team verstand genau, was wir brauchten, und setzte unsere Anforderungen präzise um. Die neue Software hat unsere Effizienz um mehr als 40% gesteigert.",
    author: "Laura Müller",
    title: "COO, InnovateTech",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    content: "NIDAVI hat für uns eine mobile App entwickelt, die unsere Kundeninteraktion revolutioniert hat. Dank ihrer Expertise und ihrem Engagement konnten wir die App pünktlich und innerhalb des Budgets einführen.",
    author: "Thomas Weber",
    title: "Marketing Direktor, RetailPlus",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const prevTestimonial = () => {
    setActiveIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    )
  }

  const nextTestimonial = () => {
    setActiveIndex((current) => 
      current === testimonials.length - 1 ? 0 : current + 1
    )
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Was unsere Kunden sagen</h2>
          <p className="text-lg text-muted-foreground">
            Erfahren Sie, was unsere Kunden über die Zusammenarbeit mit uns denken.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card rounded-2xl p-8 md:p-10 shadow-md">
                    <Quote className="h-12 w-12 text-primary/20 mb-6" />
                    <blockquote className="text-lg md:text-xl mb-8">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={prevTestimonial}
              aria-label="Vorheriges Testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={cn(
                  "w-2.5 h-2.5 p-0 rounded-full",
                  index === activeIndex ? "bg-primary" : "bg-primary/20"
                )}
                onClick={() => setActiveIndex(index)}
                aria-label={`Gehe zu Testimonial ${index + 1}`}
              />
            ))}
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={nextTestimonial}
              aria-label="Nächstes Testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}