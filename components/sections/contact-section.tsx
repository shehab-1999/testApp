"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
      });
      if (formRef.current) {
        formRef.current.reset();
      }
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-700",
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            Get In Touch
          </h2>
          <p className={cn(
            "text-lg text-gray-600 dark:text-gray-300 transition-all duration-700 delay-200",
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            Ready to start your next project? Contact us today for a free consultation and let's bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className={cn(
            "transition-all duration-700",
            isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send Us a Message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Full Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      required 
                      className="w-full"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      required 
                      className="w-full"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help you?" 
                    required 
                    className="w-full"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project..." 
                    required 
                    className="min-h-[120px] w-full"
                    disabled={isSubmitting}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full rounded-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                        <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Sent Successfully
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>

          <div className={cn(
            "transition-all duration-700 delay-300",
            isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mr-4 mt-1">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">Our Location</h4>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        123 Innovation Drive<br />
                        Tech Valley, CA 94043
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mr-4 mt-1">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">Phone Number</h4>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        +1 (555) 123-4567<br />
                        Mon-Fri, 9am-6pm PST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mr-4 mt-1">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email Address</h4>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        hello@nidavi.com<br />
                        support@nidavi.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Office Hours</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Need a Quick Response?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Schedule a free 30-minute consultation call with our team to discuss your project.
                </p>
                <Button variant="outline" className="w-full">
                  Book a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}