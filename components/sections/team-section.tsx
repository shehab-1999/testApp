"use client";

import { useRef } from "react";
import { team } from "@/lib/constants";
import { Twitter, Linkedin, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

export function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  return (
    <section 
      id="team" 
      ref={sectionRef}
      className="py-24 bg-white dark:bg-gray-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-700",
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            Meet Our Team
          </h2>
          <p className={cn(
            "text-lg text-gray-600 dark:text-gray-300 transition-all duration-700 delay-200",
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            Our diverse team of experts brings a wealth of experience and innovation to every project we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => {
            const delay = 300 + index * 150;
            
            return (
              <div 
                key={member.name}
                className={cn(
                  "group transition-all duration-700",
                  isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                )}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="relative rounded-xl overflow-hidden mb-6 aspect-[3/4]">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center space-x-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <a href={member.social.twitter} className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors">
                      <Twitter className="h-5 w-5 text-white" />
                    </a>
                    <a href={member.social.linkedin} className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors">
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                    <a href={member.social.github} className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors">
                      <Github className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{member.bio}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}