// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-10 lg:px-[10vw] max-lg:px-[6vw] max-md:px-[4vw] max-md:text-center text-[20px] max-md:text-[15px]">
     


      <div className="grid grid-cols-1 md:grid-cols-4   justify-items-center gap-10 mb-16">
        {/* الشعار والوصف */}
        <div className="">
          <Image
            src="/images/logo.png"
            alt="Nidavi Logo"
            width={250}
            height={100}
            className=" object-contain flex justify-items-center"
          />

        </div>
          <p className=" md:hidden leading-relaxed text-center">
            NIDAVI ist eine kreative Designagentur aus Miesbach, die Unternehmen
            dabei unterstützt, starke Markenauftritte zu entwickeln – visuell,
            digital und strategisch.
          </p>
        {/* Unterseiten */}
        <div className="">
          <h3 className=" font-semibold mb-2">Unterseiten</h3>
          <ul className="space-y-1 ">
            <li>
              <Link href="#projekte">Projekte</Link>
            </li>
            <li>
              <Link href="#kunden">Kunden</Link>
            </li>
          </ul>
        </div>

        {/* Rechtliches */}
        <div>
          <h3 className=" font-semibold mb-2">Rechtliches</h3>
          <ul className="space-y-1 ">
            <li>
              <Link href="/impressum">Impressum</Link>
            </li>
            <li>
              <Link href="/datenschutz">Datenschutz</Link>
            </li>
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h3 className=" font-semibold mb-2">Kontakt</h3>
          <p className=" mb-2">
            <a href="mailto:info@nidavi.de">info@nidavi.de</a>
          </p>
          <Link href="/kontakt">
            <button className="bg-[#fed701] text-black px-5 py-1 rounded-lg font-semibold hover:bg-[#fed701] transition">
              Kontakt
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center gap-10 mb-10 ">
        <p className=" max-md:hidden col-span-2 leading-relaxed">
          NIDAVI ist eine kreative Designagentur aus Miesbach, die Unternehmen
          dabei unterstützt, starke Markenauftritte zu entwickeln – visuell,
          digital und strategisch.
        </p>
        {/* Leistungen */}
        <div>
          <h3 className=" font-semibold mb-2">Leistungen</h3>
          <ul className="space-y-1">
            <li>Branding</li>
            <li>Webdesign</li>
            <li>Marketing</li>
          </ul>
        </div>

        {/* Anschrift */}
        <div>
          <h3 className=" font-semibold mb-2">Anschrift</h3>
          <p className="">Straße in Miesbach</p>
          <p>83714 Miesbach</p>
        </div>
      </div>
      {/* الصف الأخير */}
      <div className="grid md:grid-cols-4 grid-cols-1 gap-10 max-md:justify-items-center border-gray-700 pt-6 ">
        <p className="  md:col-span-3 max-md:text-center">
          Copyright © 2025 NIDAVI – Create. Impress. Stay. | Designagentur in
          Miesbach
        </p>
        <div className="flex gap-4 justify-center ">
          <a href="#">
            <Image
              src="/images/Twitter.png"
              alt="Twitter"
              width={20}
              height={20}
            />
          </a>
          <a href="#">
            <Image
              src="/images/YouTube.png"
              alt="YouTube"
              width={20}
              height={20}
            />
          </a>
          <a href="#">
            <Image
              src="/images/Facebook.png"
              alt="Facebook"
              width={20}
              height={20}
            />
          </a>
          <a href="https://www.instagram.com/nidavi.de/">
            <Image
              src="/images/Instagram.png"
              alt="Instagram"
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
