"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { Mail, MapPin, Phone } from 'lucide-react'

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Der Name muss mindestens 2 Zeichen lang sein.',
  }),
  email: z.string().email({
    message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
  }),
  message: z.string().min(10, {
    message: 'Die Nachricht muss mindestens 10 Zeichen lang sein.',
  }),
})

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      form.reset()
      
      toast({
        title: "Nachricht gesendet",
        description: "Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.",
      })
    }, 1000)
  }

  return (
    <section id="contact" className="py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Kontaktieren Sie uns</h2>
          <p className="text-lg text-muted-foreground">
            Haben Sie Fragen oder möchten Sie ein Projekt besprechen? Kontaktieren Sie uns noch heute.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">Nehmen Sie Kontakt auf</h3>
              <p className="text-muted-foreground">
                Füllen Sie das Formular aus und unser Team wird sich innerhalb von 24 Stunden bei Ihnen melden.
              </p>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Ihr Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-Mail</FormLabel>
                      <FormControl>
                        <Input placeholder="ihre.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nachricht</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..." 
                          className="min-h-32"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                </Button>
              </form>
            </Form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8 lg:pl-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">Kontaktinformationen</h3>
              <p className="text-muted-foreground">
                Sie können uns auch direkt über die folgenden Kontaktdaten erreichen.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">E-Mail</h4>
                  <p className="text-muted-foreground mt-1">kontakt@nidavi.de</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Telefon</h4>
                  <p className="text-muted-foreground mt-1">+49 (0) 123 456 7890</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Adresse</h4>
                  <p className="text-muted-foreground mt-1">
                    Technikstraße 1<br />
                    10115 Berlin<br />
                    Deutschland
                  </p>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden h-64 mt-8 border border-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.6950460513373!2d13.37918!3d52.5200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburg%20Gate!5e0!3m2!1sen!2sde!4v1623323670461!5m2!1sen!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="NIDAVI Standort"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}