"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'

const navigation = [
  { name: 'Startseite', href: '#home' },
  { name: 'Leistungen', href: '#services' },
  { name: 'Über uns', href: '#about' },
  { name: 'Projekte', href: '#projects' },
  { name: 'Kontakt', href: '#contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all bg-black/90 duration-300 ease-in-out',
        isScrolled 
          ? ' backdrop-blur-md text-white shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="#home" className="-m-1.5 p-1.5">
            <Logo className="h-8 w-auto" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
            className="rounded-full"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium  hover:text-black hover:bg-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <ThemeToggle />
          <Button asChild>
            <Link href="#contact">Kontakt aufnehmen</Link>
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}>
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link href="#home" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <Logo className="h-8 w-auto" />
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-full"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-border">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 flex flex-col gap-4">
                <ThemeToggle />
                <Button asChild>
                  <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                    Kontakt aufnehmen
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}