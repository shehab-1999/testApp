'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50  lg:px-[10vw] max-lg:px-[6vw] max-md:px-[4vw] h-[80px] flex items-center justify-between transition-colors duration-500 ${
          scrolled ? 'bg-black' : 'bg-transparent'
        }`}
      >
        {/* الشعار */}
        <div className="z-50">
          <Image
            src="/images/logo.png"
            alt="Nidavi Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>

        {/* الروابط مع زر الاتصال */}
        <div className="hidden md:flex items-center text-[28px] space-x-8 max-lg:text-[20px] text-white font-medium">
            <Link href="/" className="hover:text-yellow-400 transition"> ÜberUns</Link>
          <Link href="#leistungen" className="hover:text-yellow-400 transition">Leistungen</Link>
          <Link href="/portfolio" className="hover:text-yellow-400 transition">Portfolio</Link>
          
          <Link href="#kontakt" className="hover:text-yellow-400 transition">Kunden</Link>

          <Link href="/kontakt">
            <button className="bg-[#fed701] text-black px-4 py-[2px] text-[28px] space-x-8 max-lg:text-[20px] rounded-xl  hover:bg-[#fed701] transition">
              Kontakt
            </button>
          </Link>
        </div>

        {/* زر القائمة في الهاتف */}
        <button
          className="md:hidden z-50 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* قائمة الهاتف تغطي الشاشة */}
      <div
        className={`fixed inset-0 z-40 bg-black text-white flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="space-y-8 text-2xl font-semibold">
         
          <li><Link href="/" onClick={() => setMenuOpen(false)}>ÜberUns</Link></li>
          <li><Link href="#leistungen" onClick={() => setMenuOpen(false)}>Leistungen</Link></li>
          <li><Link href="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
          <li><Link href="#agentur" onClick={() => setMenuOpen(false)}>Agentur</Link></li>
          <li><Link href="/kontakt" onClick={() => setMenuOpen(false)}>Kontakt</Link></li>
        </ul>
       <a href='/kontakt'> <button
          onClick={() => setMenuOpen(false)}
          className="mt-10 bg-[#fed701] text-black px-6 py-3 rounded-full hover:bg-[#fed701] transition"
        >
          Kontakt 
        </button></a>
      </div>
    </>
  );
}
