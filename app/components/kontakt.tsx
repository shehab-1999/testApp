"use client";
import React, { useEffect, useRef } from "react";
// interface heroParams{
//   label1?:string;
//   label2?:string;
//   headline:string;
//   title1?:string;

// }
export default function Kontakt() {
  const sectionRef = useRef(null);

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
          behavior: "smooth",
        });
      }
    };

    // نفّذ عند تحميل الصفحة
    scrollToAlignBottom();
  }, []);
  return (
    <div>
      {" "}
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
                    Du hast bereits
                  </div>
                  <div
                    className="highlight w-full text-[8.5rem] max-[95rem]:text-[8rem] max-[90rem]:text-[7rem]  
                      max-[80rem]:text-[6rem] max-lg:text-[5rem]  max-[55rem]:text-[4.5rem] 
                       max-md:text-[3rem]  max-[30rem]:text-[2.5rem] max-[25rem]:text-[2rem] "
                  >
                    eine Ideeundmöchtest
                  </div>
                  <div
                    className="subtext text-[3rem] max-md:text-[2.5rem] max-sm:text-[2rem] 
                      max-[30rem]:text-[1.7rem] max-[25rem]:text-[1.3rem]"
                  >
                    uns kontaktieren?
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" text-white">
            {" "}
            {/* الديف الثاني */}
            <p className="text-xl xl:text-4xl  lg:text-3xl">
              Dann warte nicht länger und
              <br />
              kontaktiere uns
            </p>
            <button className="bg-[#fed701] my-[4vh] text-[] xl:text-2xl  lg:text-xl text-black px-6 py-2 w-auto rounded-lg font-medium hover:bg-[#fed701] transition">
              Runter scrollen
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
