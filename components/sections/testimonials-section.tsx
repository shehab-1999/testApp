"use client";

import { useRef } from "react";
import { testimonials } from "@/lib/constants";
import { QuoteIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-700",
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            What Our Clients Say
          </h2>
          <p className={cn(
            "text-lg text-gray-600 dark:text-gray-300 transition-all duration-700 delay-200",
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            Don't just take our word for it. Hear from the businesses we've helped transform through our innovative software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => {
            const delay = 300 + index * 150;
            
            return (
              <div 
                key={testimonial.author}
                className={cn(
                  "bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm relative transition-all duration-700 border border-gray-100 dark:border-gray-700",
                  isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                )}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <QuoteIcon className="absolute top-6 right-6 h-12 w-12 text-gray-100 dark:text-gray-700" />
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 relative z-10">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-primary/20">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-medium">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}