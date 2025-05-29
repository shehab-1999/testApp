"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../ui/Button";

const projects = [
  {
    title: "Arslan Tiefbau",
    image: "/images/ArslanTiefbau_Customer.png",
    description: (
      <>
        Für unseren langjährigen Kunden <strong>Arslan Tiefbau</strong> durften
        wir das komplette Design– und Marketingpaket umsetzen. Vom modernen
        Logo- und Visitenkartendesign, über eine professionelle Website mit
        SEO-Optimierung, bis hin zu Flyern, Fahrzeugbeschriftung und
        Online-Marketing – wir haben alle Maßnahmen aufeinander abgestimmt, um
        einen starken und einheitlichen Markenauftritt zu gewährleisten. Dank
        gezielter Suchmaschinenoptimierung (SEO) ist Arslan Tiefbau auch digital
        bestens sichtbar – regional und darüber hinaus.
      </>
    ),
    label: "Aktuelles Projekt",
  },
  {
    title: "Yüksel Bauverputz",
    image: "/images/yuksel1.png",
    description: (
      <>
                  Handwerk trifft Design: Für Yüksel Bauverputz haben wir den
              gesamten Markenauftritt neu gedacht und visuell auf ein neues
              Level gehoben. Ziel war es, nicht nur gut auszusehen, sondern die
              Qualität und Verlässlichkeit des Unternehmens spürbar zu machen –
              auf den ersten Blick. Das neue Logo bringt die Werte von Yüksel
              klar auf den Punkt. Passend dazu entstand ein stimmiges Branding
              mit klaren Farben, starken Schriften und modernen Designelementen.
              Ein echtes Highlight ist die neue Website: mobil optimiert,
              nutzerfreundlich aufgebaut und mit suchmaschinenoptimierten
              Inhalten versehen. So finden Interessierte schnell, was sie suchen
              – und Yüksel Bauverputz bleibt im Kopf. Was bleibt, ist ein
              Auftritt mit Wirkung: authentisch, hochwertig und bereit für den
              nächsten Schritt. So wird aus solidem Handwerk eine Marke, die
              überzeugt – digital wie im echten Leben.
      </>
    ),
    label: "Aktuelles Projekt",
  },
];

export default function ProjectSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[current];

  return (
    <section className="bg-black text-white   py-20 text-[18px] lg:px-[10vw] max-lg:px-[6vw] max-md:px-[4vw]">
      <div className=" space-y-12">
        {/* Title + Button */}
        <div className="flex  justify-between align-middle ">
          <div className="text-xl md:text-4xl font-bold">Unser Impact</div>

          <Button className=" max-[30rem]:text-[15px]" text="Zu allen Projekten"/>
        </div>

        {/* Description */}
        <p className="text-gray-300  md:text-lg leading-relaxed">
          Jede Marke erzählt ihre eigene Geschichte – unsere Aufgabe ist es, ihr
          eine visuelle Stimme zu geben. In unserem Portfolio findest du eine
          Auswahl an Projekten, die wir mit Herz, Strategie und Präzision
          umgesetzt haben: Logo-Designs, Webauftritte und Printlösungen, die
          nicht nur gut aussehen, sondern wirken. Ob Handwerksbetrieb, Start-up
          oder regionales Unternehmen – wir gestalten Identitäten, die Eindruck
          hinterlassen und langfristig bestehen.
        </p>

        {/* Project content */}
        <div className="max-md:flex flex-col  md:flex-row gap-10 items-center md:items-start relative">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute -left-6 md:-left-10 top-1/2 max-md:top-[125px] max-md:left-0 -translate-y-1/2 bg-yellow-400 hover:bg-white text-black p-3 rounded-full transition z-10"
          >
            <ChevronLeft />
          </button>

          {/* Image */}

          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="w-[300px]  float-left  object-contain rounded-2xl md:mx-7 shadow-xl max-md:w-[250px] max-sm:w-[200px]"
          />

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute -right-6 md:-right-10 max-md:right-0 top-1/2 max-md:top-[125px] -translate-y-1/2 bg-yellow-400 hover:bg-white text-black p-3 rounded-full transition z-10"
          >
            <ChevronRight />
          </button>

          {/* Text */}
          <div className="">
            <p className="text-yellow-400 font-semibold text-sm mb-2">
              {project.label}
            </p>
            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
            <p className="text-gray-200  leading-relaxed mb-4">
              {project.description}
            </p>
            
             <Button text="Zum Projekt"/>
          </div>
        </div>
      </div>
    </section>
  );
}
