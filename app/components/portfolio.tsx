"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null)
  
    
    useEffect(() => {
      const scrollToAlignBottom = () => {
        if (sectionRef.current) {
          const section = sectionRef.current;
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const screenHeight = window.innerHeight;
  
          // المسافة المطلوبة حتى تصبح نهاية السيكشن في نهاية الشاشة
          const scrollTarget = sectionTop + sectionHeight - screenHeight;
  
          window.scrollTo({
            top: scrollTarget,
            behavior: 'smooth',
          });
        }
      };
  
      // نفّذ عند تحميل الصفحة
      scrollToAlignBottom();
    }, []);
  return (
    <div className="">
      <section ref={sectionRef} className="relative h-screen overflow-hidden">
        {/* فيديو الخلفية */}
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

        <div className="relative z-10 h-[calc(100vh-80px)] flex flex-col mt-[80px] lg:px-[10vw] max-lg:px-[6vw] max-md:px-[4vw]  ">
          <div className="flex-1 flex items-center justify-center">
            {" "}
            {/* الديف الأول */}
            <div className="text-white text-center flex flex-col w-full">
              <div className="containers text-white w-full">
                <div className="justify-items-start ">
                  <div
                    className="headline text-[3rem] max-md:text-[2.5rem] max-sm:text-[2rem] 
                      max-[30rem]:text-[1.7rem] max-[25rem]:text-[1.3rem]"
                  >
                    Entdecke unsere
                  </div>
                  <div
                    className="highlight w-full text-[8.5rem] max-[95rem]:text-[8rem] max-[90rem]:text-[7rem]  
                      max-[80rem]:text-[6rem] max-lg:text-[5rem]  max-[55rem]:text-[4.5rem] 
                       max-md:text-[3rem]  max-[30rem]:text-[2.5rem] max-[25rem]:text-[2rem] "
                  >
                    erfolgreichenProjekte
                  </div>
                  <div
                    className="subtext text-[3rem] max-md:text-[2.5rem] max-sm:text-[2rem] 
                      max-[30rem]:text-[1.7rem] max-[25rem]:text-[1.3rem]"
                  >
                    mit echter Wirkung.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" text-white">
            {" "}
            {/* الديف الثاني */}
            <p className="text-xl xl:text-4xl  lg:text-3xl">
              Du hast selber eine Idee?
              <br />
              Warte nicht lange, kontaktiere uns!
            </p>
            <button className="bg-[#fed701] my-[4vh] text-[] xl:text-2xl  lg:text-xl text-black px-6 py-2 w-auto rounded-lg font-medium hover:bg-[#fed701] transition">
              Erastgesprach buchen
            </button>
          </div>
        </div>
      </section>
      <div className=" bg-black bg-grid text-white py-12">
        <div className="  grid md:grid-cols-10  lg:px-[10vw] max-lg:px-[6vw] max-md:px-[4vw]">
          {/* Text Section */}
          <div className="md:col-span-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Yüksel Bauverputz
            </h1>
            <p className="text-yellow-400 font-semibold mb-4">
              Logodesign, Webdesign, Branding, SEO-Optimierung
            </p>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base space-y-2 mb-8">
              Für unseren langjährigen Kunden Arslan Tiefbau durften wir ein
              ganzheitliches Design- und Marketingpaket umsetzen, das nicht nur
              gut aussieht, sondern vor allem eins tut: wirken. Von Anfang an
              war das Ziel klar – eine starke, einheitliche Markenidentität, die
              Vertrauen schafft und Professionalität ausstrahlt – offline wie
              online. Den Auftakt machte ein modernes Logo, das die Werte des
              Unternehmens – Stabilität, Verlässlichkeit und Präzision – auf den
              Punkt bringt. Darauf aufbauend entwickelten wir passende
              Visitenkarten und Flyer, die sich nahtlos ins Corporate Design
              einfügen und für Wiedererkennung sorgen – egal ob auf dem
              Schreibtisch oder an der Baustelle. Auch online haben wir
              mitgedacht: Mit SEO-optimierten Inhalten, einer klar
              strukturierten Website und durchdachten Marketingmaßnahmen ist
              Arslan Tiefbau nun nicht nur sichtbar, sondern auffindbar –
              regional und darüber hinaus. Das Ergebnis: Ein Auftritt, der
              professionell wirkt, Vertrauen weckt und bleibt. Ein Projekt, auf
              das wir gemeinsam stolz sind – weil es zeigt, was möglich ist,
              wenn Gestaltung auf Strategie trifft.
            </p>
          </div>

          {/* Images Section */}
          <div className="grid grid-cols-1 md:col-span-4 max-md: max-md:grid-cols-6 gap-4  w-full justify-items-end">
            <div className="w-full md:max-w-[300px] max-md:col-span-4">
              <Image
                src="/images/arslantiefbau1.png"
                alt="Fahrzeug"
                width={300}
                height={300}
                className="rounded-md w-full h-auto object-contain"
              />
            </div>

            <div className="grid md:grid-cols-2 max-md:col-span-2 w-full h-full  md:max-w-[300px]   gap-2">
              <Image
                src="/images/arslantiefbau2.png"
                alt="Logo"
                width={250}
                height={250}
                className="rounded-md w-full h-auto object-cover"
              />

              <Image
                src="/images/arslantiefbau3.png"
                alt="Shirt"
                width={250}
                height={250}
                className="rounded-md w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------- */}
      <div className="">
        <div className=" bg-white py-12   flex flex-col md:flex-row gap-12 lg:px-[10vw] max-lg:px-[6vw] max-md:px-[4vw] items-start relative">
          <div className="md:w-[50%]">
            <h1 className="text-4xl font-bold text-black mb-4">
              AYBAS Service
            </h1>
            <p className="text-lg font-semibold text-black mb-4">
              Logodesign, Branding, Webdesign, Flyerdesign
            </p>
            <p className="text-gray-700 leading-relaxed text-base ">
              Für unseren Kunden AYBAS Service durften wir ein rundum stimmiges
              Markenpaket entwickeln – bestehend aus Logo, Website, Flyern und
              einem klaren, modernen Designkonzept. Ziel war es, einen Auftritt
              zu gestalten, der professionell wirkt, sympathisch rüberkommt und
              in Erinnerung bleibt. Alles begann mit einem Logo, das die
              wichtigsten Werte von AYBAS Service widerspiegelt:
              Zuverlässigkeit, Energie und Nähe zum Kunden. Darauf aufbauend
              haben wir ein einheitliches Erscheinungsbild entworfen – mit
              passenden Farben, Schriften und Gestaltungselementen, die sich
              überall wiederfinden: auf der Website, in den Flyern und im
              gesamten Markenauftritt. Durch die enge und unkomplizierte
              Zusammenarbeit mit dem Team von AYBAS Service ist ein starker
              Auftritt entstanden, der Vertrauen schafft und langfristig
              überzeugt.
            </p>
          </div>

          <div className=" flex md:justify-end  md:w-1/2 ">
            <div className="justify-between grid grid-cols-2">
              <div className=" md:h-[500px] rounded-2xl  w-[100%]  overflow-hidden mr-[2%] ">
                <Image
                  src="/images/aybas1.png"
                  alt="AYBAS Worker"
                  width={400}
                  height={450}
                  className=" md:h-[500px] hover:scale-105 transition-transform duration-500 w-[100%]"
                />
              </div>
              <div className="h-full w-[100%] grid grid-rows-3 gap-[1%] pl-[6%]">
                <div className=" md:h-[100%] md:w-[100%] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/aybas2.png"
                    alt="AYBAS Worker"
                    width={400}
                    height={150}
                    className=" md:h-[100%] md:w-[100%] hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className=" md:h-[100%] md:w-[100%] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/aybas3.png"
                    alt="AYBAS Worker"
                    width={400}
                    height={150}
                    className=" md:h-[100%] md:w-[100%] hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className=" md:h-[100%] md:w-[100%] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/aybas4.png"
                    alt="AYBAS Worker"
                    width={400}
                    height={150}
                    className=" md:h-[100%] md:w-[100%] hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------------- */}
      <div className=" bg-black bg-grid text-white py-12">
        <div className=" grid md:grid-cols-10  gap-8 items-start  lg:px-[10vw] max-lg:px-[6vw] max-md:px-[4vw]">
          {/* Text Section */}
          <div className="md:col-span-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Yüksel Bauverputz
            </h1>
            <p className="text-yellow-400 font-semibold mb-4">
              Logodesign, Branding, Webdesign
            </p>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base space-y-2">
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
            </p>
          </div>

          {/* Images Section */}
          <div className="grid grid-cols-1 md:col-span-4 max-md: max-md:grid-cols-6 gap-4  w-full justify-items-end">
            <div className="w-full md:max-w-[300px] max-md:col-span-4">
              <Image
                src="/images/yuksel1.png"
                alt="Fahrzeug"
                width={300}
                height={300}
                className="rounded-md w-full h-auto object-contain"
              />
            </div>

            <div className="grid md:grid-cols-2 max-md:col-span-2 w-full h-full  md:max-w-[300px]   gap-2">
              <Image
                src="/images/yuksel2.png"
                alt="Logo"
                width={250}
                height={250}
                className="rounded-md w-full h-auto object-cover"
              />

              <Image
                src="/images/yuksel3.png"
                alt="Shirt"
                width={250}
                height={250}
                className="rounded-md w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      {/* ------------------- ------------------------------------*/}
      <div className=" bg-white bg-grid text-black lg:px-[10vw] max-lg:px-[6vw] max-md:px-[4vw] py-12">
        <div className=" grid md:grid-cols-10  gap-8 items-start ">
          {/* Text Section */}
          <div className="md:col-span-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">SCHWARZ Bau</h1>
            <p className=" font-semibold mb-4">
              Logodesign, Webdesign, Branding
            </p>
            <p className=" leading-relaxed text-sm md:text-base space-y-2">
              Klar. Stark. Verlässlich. Für SCHWARZ Hoch- & Tiefbau durften wir
              einen Markenauftritt entwickeln, der genau das ausdrückt, wofür
              das Unternehmen steht: Struktur, Vertrauen und Bodenständigkeit.
              Herzstück ist ein kraftvolles Logo, das Klarheit und Charakter
              vereint. Dazu haben wir ein durchgängiges Designsystem geschaffen
              – mit passenden Farben, moderner Typografie und einer klaren
              visuellen Sprache. Die neue Website bringt alles zusammen: mobil
              optimiert, benutzerfreundlich und auf Sichtbarkeit getrimmt. Das
              Ergebnis? Ein Markenauftritt, der nicht nur gut aussieht, sondern
              strategisch durchdacht ist und den Grundstein für langfristigen
              Erfolg legt. Ein weiteres Beispiel dafür, wie bei NIDAVI Design
              zur Sprache der Marke wird – klar, authentisch und wirkungsvoll.
            </p>
          </div>

          {/* Images Section */}
          <div className="grid grid-cols-1 md:col-span-4 max-md: max-md:grid-cols-6 gap-4  w-full justify-items-end">
            <div className="w-full md:max-w-[300px] max-md:col-span-4">
              <Image
                src="/images/yuksel1.png"
                alt="Fahrzeug"
                width={300}
                height={300}
                className="rounded-md w-full h-auto object-contain"
              />
            </div>

            <div className="grid md:grid-cols-2 max-md:col-span-2 w-full h-full  md:max-w-[300px]   gap-2">
              <Image
                src="/images/yuksel2.png"
                alt="Logo"
                width={250}
                height={250}
                className="rounded-md w-full h-auto object-cover"
              />

              <Image
                src="/images/yuksel3.png"
                alt="Shirt"
                width={250}
                height={250}
                className="rounded-md w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------- */}
      <div className="relative bg-[#fed701] py-16 pl-[10vw]  overflow-hidden text-black">
        {/* العنوان على سطرين */}
        <div className="text-3xl md:text-5xl font-bold grid grid-cols-2 justify-between z-10 relative">
          Der Weg zur{" "}
        </div>
        <div className="text-3xl md:text-5xl font-bold grid  grid-cols-2 justify-between z-10 relative">
          <div>Zusammenarbeit</div>
          <div className=" flex align-bottom justify-center  relative ">
            <Image
              src="/images/BlackNidaviLine.png"
              alt="Arrow Line"
              height={300}
              width={500}
              className=" absolute top-[50%] right-0 w-full"
            />
          </div>
        </div>
        {/* 
        السهم الملتصق بأقصى اليمين */}
        {/* <div className=" top-24 right-0  h-5 md:h-7 z-0">
          <Image
            src="/images/BlackNidaviLine.png"
            alt="Arrow Line"
            fill
            className="object-contain object-left"
          />
        </div> */}

        {/* خطوات */}
        <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-lg md:text-xl font-medium z-10 relative">
          {[
            "Erstgespräch",
            "Analyse",
            "Strategie",
            "Gestaltung",
            "Testen",
            "Perfektion",
          ].map((step, i, arr) => (
            <span key={i}>
              {step}
              {i < arr.length - 1 && <span className="mx-2">●</span>}
            </span>
          ))}
        </div>

        {/* الزر */}
        <button className="mt-6 bg-white text-black px-5 py-2 rounded-md shadow hover:bg-gray-100 transition z-10 relative">
          Jetzt kontaktieren
        </button>
      </div>
    </div>
  );
}
