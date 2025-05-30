"use client";

import { useState, useRef } from "react";
import { projects } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

const categories = ["All", "Web Application", "Mobile App", "Data Visualization", "IoT", "Enterprise Solution"];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section 
      id="portfolio" 
      ref={sectionRef}
      className="py-24 bg-white dark:bg-gray-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-700",
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            Our Featured Projects
          </h2>
          <p className={cn(
            "text-lg text-gray-600 dark:text-gray-300 transition-all duration-700 delay-200",
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            Explore our portfolio of successful projects that showcase our expertise and commitment to delivering exceptional solutions.
          </p>
        </div>

        <div className={cn(
          "flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-300",
          isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          {categories.map((category) => (
            <Button 
              key={category} 
              variant={activeCategory === category ? "default" : "outline"} 
              size="sm"
              className="rounded-full"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const delay = 400 + index * 100;
            
            return (
              <div 
                key={project.title}
                className={cn(
                  "group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-800",
                  isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                )}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Button variant="default" size="sm" className="w-full">View Details</Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {activeCategory !== "All" && filteredProjects.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-400">No projects found in this category.</p>
          </div>
        )}

        <div className={cn(
          "text-center mt-12 transition-all duration-700 delay-700",
          isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          <Button variant="outline" size="lg" className="rounded-full">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}