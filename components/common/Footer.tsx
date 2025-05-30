"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  FacebookIcon, 
  TwitterIcon, 
  InstagramIcon, 
  LinkedinIcon,
  ArrowUpIcon
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="bg-background border-t border-border relative">
      <Button
        onClick={scrollToTop}
        variant="outline" 
        size="icon"
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="h-4 w-4" />
      </Button>
      
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          variants={footerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          <motion.div variants={itemAnimation} className="space-y-4">
            <h3 className="text-xl font-bold">NIDAVI</h3>
            <p className="text-muted-foreground">
              Creating digital experiences that inspire and engage.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <FacebookIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <TwitterIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <InstagramIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <LinkedinIcon className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div variants={itemAnimation} className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {["Web Design", "Branding", "UI/UX Design", "Digital Marketing", "Development"].map((service) => (
                <li key={service}>
                  <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemAnimation} className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Team", "Careers", "Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemAnimation} className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <address className="not-italic text-muted-foreground">
              <p>123 Design Street</p>
              <p>Creative City, CD 12345</p>
              <p>contact@nidavi.com</p>
              <p>+1 (123) 456-7890</p>
            </address>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={itemAnimation}
          className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nidavi. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}