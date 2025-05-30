"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/common/AnimatedText";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "lucide-react";

// Team data
const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Creative Director",
    image: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Sarah brings over 10 years of experience in design leadership and brand strategy.",
    social: {
      twitter: "#",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Michael is a full-stack developer with expertise in the latest web technologies.",
    social: {
      twitter: "#",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Emily specializes in creating intuitive user experiences that delight customers.",
    social: {
      twitter: "#",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    name: "David Wilson",
    role: "Marketing Strategist",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "David helps brands connect with their audience through innovative marketing strategies.",
    social: {
      twitter: "#",
      linkedin: "#",
      facebook: "#",
    },
  },
];

export function Team() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="team" className="py-20 md:py-32 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedText
            element="span"
            animation="fade"
            className="text-primary font-medium mb-2 block"
            text="Our Team"
          />
          
          <AnimatedText
            element="h2"
            animation="reveal"
            className="text-3xl md:text-4xl font-bold mb-6"
            text="Meet the talented individuals behind our success"
          />
          
          <AnimatedText
            element="p"
            animation="fade"
            delay={0.2}
            className="text-muted-foreground"
            text="Our diverse team of creative professionals is passionate about delivering exceptional results for our clients. Each member brings unique skills and expertise to the table."
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm h-full">
                <CardContent className="p-0">
                  <div className="relative group overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-[3/4] object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                      <div className="p-6 w-full">
                        <div className="flex justify-center space-x-2">
                          <Button variant="ghost" size="icon" className="text-white bg-black/20 hover:bg-black/40 rounded-full">
                            <FacebookIcon className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-white bg-black/20 hover:bg-black/40 rounded-full">
                            <TwitterIcon className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-white bg-black/20 hover:bg-black/40 rounded-full">
                            <LinkedinIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-primary text-sm mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}