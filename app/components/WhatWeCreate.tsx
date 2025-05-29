"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.7, ease: "easeOut" },
  }),
};

const images = [
    {
      src: "/images/BigNidaviSmile.png",
      title: "Branding",
      desc: "Logo, Flyer, Visitenkarten",
 class: "w-[200px] max-md:left-0 h-[200px] max-md:h-[150px] max-md:w-[150px] max-md:right-0 overflow-hidden opacity-0 absolute top-0 left-[80px] z-[1]",
     
    },
    {
      src: "/images/BrandingCircle.png",
      title: "Marketing",
      desc: "SEO- & Ad-Verwaltung",
       class: "w-[200px] max-md:h-[150px] max-md:w-[150px] max-md:top-[85px]  overflow-hidden opacity-0 absolute  h-[200px] top-[100px] right-[60px]",
    },
    {
      src: "/images/MarketingCircle.png",
      title: "Webdesign",
      desc: "Landingpage, Shop, Blog, etc.",
      class: "w-[200px] max-md:h-[150px]  max-md:w-[150px] max-md:top-[200px] max-md:right-[50px]  overflow-hidden opacity-0 absolute transform h-[200px] top-[250px] right-0 z-[1]",
    },
    {
      src: "/images/WebdesignCircle.png",
      title: "UX/UI",
      desc: "Designsysteme & Wireframes",
      class: "w-[200px] max-md:h-[150px] max-md:left-[50px] max-md:w-[150px] overflow-hidden opacity-0 absolute transform h-[200px] left-[185px] bottom-0",
    }, // أضفت صورة رابعة وهمية
  ];

export default function WhatWeCreate() {
  return (
    <section className="bg-white py-16 lg:px-[10vw] max-lg:px-[6vw] max-md:px-[4vw]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* النص */}
        <div className="text-[20px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Was wir kreieren
          </h2>
          <p className="text-gray-700 mb-4">
            Design ist mehr als ein schönes Logo oder eine moderne Website – es
            ist die Grundlage dafür, wie deine Marke wahrgenommen wird. Außerdem
            kreieren wir nicht nur deinen Wunsch in bester Art sondern
            zusätzlich noch ein Lächeln im Gesicht durch unsere
            Professionalität.
          </p>
          <p className="text-gray-700 mb-4">
            Bei NIDAVI, deiner kreativen Designagentur aus Miesbach, entwickeln
            wir ganzheitliche Marken­erlebnisse, die genau auf dich, dein
            Unternehmen und deine Zielgruppe abgestimmt sind. Ob Logo-Design für
            Handwerksbetriebe, Webdesign für kleine Unternehmen oder hochwertige
            Printmedien, wir gestalten nicht nur Oberflächen – wir formen
            Identität.
          </p>
          <p className="text-gray-700">
            Unsere Leistungen sind strategisch, durchdacht und visuell stark.
            Von der ersten Idee bis zum finalen Auftritt begleiten wir dich mit
            Kreativität, Struktur und einem Blick fürs Wesentliche. Dabei denken
            wir nicht in fertigen Produkten, sondern in Lösungen, die sichtbar,
            funktional und unverwechselbar sind. Was wir erstellen, soll bleiben
            – genau wie der Eindruck, den du hinterlässt.
          </p>
        </div>

        {/* الصور */}
        <div className="flex max-md:justify-center justify-end">
          <div className="relative md:w-[450px] md:h-[600px] max-md:w-[300px] max-md:h-[450px] flex justify-center text-center">
            {images.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeUpVariants}
                className={`${item.class} overflow-hidden`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
