"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const words = ["Geschichte", "Marke", "Strategie", "Identität", "Botschaft"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const sectionRef = useRef<HTMLElement>(null); // Added proper type

  useEffect(() => {
    const scrollToAlignBottom = () => {
      if (sectionRef.current) {
        const section = sectionRef.current;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const screenHeight = window.innerHeight;

        const scrollTarget = sectionTop + sectionHeight - screenHeight;

        window.scrollTo({
          top: scrollTarget,
          behavior: 'smooth',
        });
      }
    };

    scrollToAlignBottom();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(true);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const logos = [
    "/images/ArslanTiefbauWeiß.png",
    "/images/AYBASService.png",
    "/images/HellnicClean.png",
    "/images/SchwarzLogoWeiß.png",
    "/images/SDHBau.png",
    "/images/YükselBauverputzWeiß.png",
    "/images/TurtleArmoringWeiß.png",
  ];

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video-hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-0" />

      <div className="relative z-10 h-[calc(100vh-80px)] flex flex-col mt-[80px] lg:px-[10vw] max-lg:px-[6vw] max-md:px-[4vw]">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-white text-center flex flex-col w-full">
            <div className="containers text-white w-full">
              <div className="justify-items-start">
                <div className="headline text-[3rem] max-md:text-[2.5rem] max-sm:text-[2rem] max-[30rem]:text-[1.8rem] max-[25rem]:text-[1.5rem]">
                  Nicht nur Design.
                </div>
                <div className="highlight w-full text-[11rem] max-[95rem]:text-[10rem] max-[90rem]:text-[9rem] max-[80rem]:text-[7rem] max-[55rem]:text-[6rem] max-md:text-[5rem] max-sm:text-[4rem] max-[30rem]:text-[3rem] max-[25rem]:text-[2.5rem]">
                  Eine{" "}
                  <span
                    className={`transition-opacity duration-300 ease-in-out ${
                      fade ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {words[index]}
                  </span>
                </div>
                <div className="subtext text-[3rem] max-md:text-[2.5rem] max-sm:text-[2rem] max-[30rem]:text-[1.8rem] max-[25rem]:text-[1.5rem]">
                  die Eindruck macht.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white">
          <p className="text-xl xl:text-4xl lg:text-3xl">
            Branding, Marketing & Webdesign
            <br />
            mit Langzeitwirkung.
          </p>
          <button className="bg-[#fed701] my-[4vh] text-[] xl:text-2xl lg:text-xl text-black px-6 py-2 w-auto rounded-lg font-medium hover:bg-[#fed701] transition">
            Erstgespräch buchen
          </button>
          <div className="overflow-hidden whitespace-nowrap mb-[4vh]">
            <div className="inline-flex animate-marquee-right gap-12">
              {[...logos, ...logos].map((logo, index) => (
                <Image
                  key={index}
                  src={logo}
                  alt={`Client logo ${index}`}
                  width={120}
                  height={60}
                  className="object-contain h-12 w-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}