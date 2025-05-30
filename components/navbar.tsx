"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { useTheme } from "next-themes";
import Image from "next/image";
const navLinks = [
  { name: "Startseite", href: "#home" },
  { name: "Dienstleistungen", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Über uns", href: "#about" },
  { name: "Team", href: "#team" },
  { name: "Kontakt", href: "#contact" },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
 if(window.screen.availWidth>777){
     const handleScroll = () => {
      setScrolled(window.scrollY > window.screen.availHeight);
        
    };

  window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
 }
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-40 max-md:bg-black transition-all duration-300 max-h-screen",
        scrolled 
          ? " bg-black/80 text-white backdrop-blur-md shadow-sm" 
          : " bg-transparent"
      )}
    >
      <div className="container mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex z-50 items-center">
            <Link href="/" className="flex items-center">
    <Image height={100} width={1000} alt="" src={`/images/${!scrolled&&theme=="light"?'logo_black.png':'logo.png'} `} className={`w-[150px]`}/>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium  hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <Button size="sm" className="rounded-full">
              Loslegen
            </Button>
            <ThemeToggle />
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center z-50 space-x-4">
            <ThemeToggle  />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              className="relative z-50"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 max-md:text-white max-md:bg-black w-5" />}
              <span className="sr-only">Menü umschalten</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white dark:bg-gray-950 z-40 flex flex-col justify-center p-8 md:hidden transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-800 hover:text-primary dark:text-gray-200 dark:hover:text-white"
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          <Button size="lg" className="rounded-full w-full mt-4">
            Loslegen
          </Button>
        </nav>
      </div>
    </header>
  );
}