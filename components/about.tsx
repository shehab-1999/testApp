// "use client"

// import Image from 'next/image'
// import { motion } from 'framer-motion'
// import { CheckCircle } from 'lucide-react'

// const benefits = [
//   "Erfahrene Entwickler mit Branchenexpertise",
//   "Transparente Kommunikation während des gesamten Projekts",
//   "Agile Entwicklungsmethodik für flexible Anpassungen",
//   "Langfristige Partnerschaft und kontinuierliche Unterstützung"
// ]

// export function About() {
//   return (
//     <section id="about" className="py-24">
//       <div className="container px-4 md:px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div className="relative aspect-square overflow-hidden rounded-2xl">
//               <Image
//                 src="https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//                 alt="Unser Team bei der Arbeit"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="absolute -right-6 -bottom-6 w-3/4 aspect-video rounded-2xl overflow-hidden border-8 border-background shadow-xl">
//               <Image
//                 src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//                 alt="Kollaboration im Team"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold tracking-tight mb-6">Über NIDAVI</h2>
//             <p className="text-lg text-muted-foreground mb-6">
//               NIDAVI wurde 2015 gegründet und hat sich seitdem als führende Softwareagentur 
//               etabliert. Mit einem Team von über 50 erfahrenen Entwicklern, Designern und 
//               Projektmanagern haben wir bereits mehr als 200 erfolgreiche Projekte für Kunden 
//               aus verschiedenen Branchen umgesetzt.
//             </p>
//             <p className="text-lg text-muted-foreground mb-8">
//               Unsere Mission ist es, innovative und maßgeschneiderte Softwarelösungen zu entwickeln, 
//               die Unternehmen dabei helfen, ihre digitale Transformation erfolgreich zu gestalten und 
//               ihre Geschäftsziele zu erreichen.
//             </p>
            
//             <h3 className="text-xl font-semibold mb-4">Warum NIDAVI wählen?</h3>
//             <ul className="space-y-3">
//               {benefits.map((benefit, index) => (
//                 <motion.li 
//                   key={index}
//                   initial={{ opacity: 0, x: 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
//                   viewport={{ once: true }}
//                   className="flex gap-3"
//                 >
//                   <CheckCircle className="h-6 w-6 text-primary shrink-0" />
//                   <span>{benefit}</span>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }