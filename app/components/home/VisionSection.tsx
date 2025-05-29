'use client';

import Image from 'next/image';

export default function VisionSection() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col md:flex-row lg:px-[10vw] max-lg:px-[6vw] max-md:px-[4vw]  items-center justify-center   py-20 gap-12">
      {/* Left Content */}
      <div className="flex-1">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Wurzeln & Vision</h2>
        <p className="text-lg leading-relaxed mb-4">
          NIDAVI ist deine Designagentur aus Miesbach, spezialisiert auf modernes Branding, Webdesign und strategisches Marketing für Handwerksbetriebe und kleine Unternehmen.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Wir glauben an Gestaltung mit Bedeutung. Unsere Entwürfe sehen nicht nur gut aus – sie lösen Aufgaben. Sichtbarkeit, Wiedererkennung, Vertrauen – alles beginnt mit dem richtigen Design.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Unser Ansatz ist bewusst anders: keine 08/15-Designs, keine Templates von der Stange, keine Floskeln.
        </p>
        <p className="text-lg leading-relaxed">
          Wir verbinden Ästhetik mit Funktion, Gefühl mit Struktur – damit deine Marke nicht nur schön aussieht, sondern auch verstanden wird, wirkt und bleibt.
        </p>
      </div>

      {/* Right Visual (Image of the N with faces) */}
      <div className="flex-1 relative flex justify-end">
        <Image
          src="/images/HappyCustomerNidaviLogo.png" // 🟡 ملاحظة: استبدل هذا بالمسار الصحيح
          alt="NIDAVI Logo with faces"
          width={400}
          height={400}
          className="max-w-full h-auto"
        />
        {/* الخلفية الخطية (Grid) والحدود البيضاء الخلفية إن أردت */}
        <div className="absolute border-white border-2 w-[110%] h-[110%] -z-10 rounded-xl opacity-10"></div>
      </div>
    </section>
  );
}
