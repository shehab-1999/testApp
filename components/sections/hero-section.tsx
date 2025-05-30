"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-950 dark:to-gray-900 z-0" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className={cn(
            "flex-1 max-w-3xl transition-all duration-1000 ease-out transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              Building <span className="text-primary">Innovative</span> Digital Solutions For Tomorrow
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We craft exceptional software experiences that help businesses transform, scale, and succeed in the digital landscape.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {["Web Development", "Mobile Apps", "Cloud Solutions", "AI Integration"].map((item) => (
                <div key={item} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" className="rounded-full text-base">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base">
                View Portfolio
              </Button>
            </div>
          </div>

          <div className={cn(
            "flex-1 relative transition-all duration-1000 delay-300 ease-out transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}>
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl transform rotate-3 dark:from-primary/10 dark:to-secondary/10" />
              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Software development team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}