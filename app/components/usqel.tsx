import Image from "next/image";

export default function YukselBauverputz() {
  return (
    <div className="min-h-screen bg-black bg-grid text-white px-4 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Yüksel Bauverputz
          </h1>
          <p className="text-yellow-400 font-semibold mb-4">
            Logodesign, Branding, Webdesign
          </p>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base space-y-2">
            Handwerk trifft Design: Für Yüksel Bauverputz haben wir den gesamten Markenauftritt neu gedacht [...]
            <br />
            <br />
            So wird aus solidem Handwerk eine Marke, die überzeugt – digital wie im echten Leben.
          </p>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
          <div className="col-span-2">
            <Image
              src="/images/aybas1.png"
              alt="Van"
              width={600}
              height={400}
              className="rounded-md w-full h-auto object-cover"
            />
          </div>
          <Image
            src="/images/aybas2.png"
            alt="Logo"
            width={300}
            height={300}
            className="rounded-md w-full h-auto object-contain"
          />
          <Image
            src="/images/aybas3.png"
            alt="Shirt"
            width={300}
            height={300}
            className="rounded-md w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
