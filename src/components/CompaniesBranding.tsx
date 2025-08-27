import React from "react";

const Marquee: React.FC = () => {
  return (
    <>
      <div className="py-16 bg-white">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{fontFamily: 'inherit'}}>Our Valuable Clients</h2>
          <p className="text-lg text-gray-600">Proudly partnering with industry leaders to deliver exceptional, innovative engineering solutions tailored to their unique visions and goals.</p>
        </div>
        <style>{`
          .marquee-inner {
            animation: marqueeScroll linear infinite;
          }

          @keyframes marqueeScroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>

        <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none">
          {/* Left Gradient Fade */}
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

          {/* Marquee Inner */}
          <div
            className="marquee-inner flex will-change-transform min-w-[200%]"
            style={{ animationDuration: "15s" }}
          >
            <div className="flex">
              {/* Add your company logos here */}
              <img src="/Logo/adanilogo.jpg" alt="Adani" className="h-12 w-auto mx-6 object-contain" draggable={false} />
              <img src="/Logo/ABBlogo.jpg" alt="ABB" className="h-12 w-auto mx-6 object-contain" draggable={false} />
              <img src="/Logo/ABILlogo.jpg" alt="ABIL" className="h-12 w-auto mx-6 object-contain" draggable={false} />
              <img src="/Logo/accusonislogo.jpg" alt="Accusonis" className="h-12 w-auto mx-6 object-contain" draggable={false} />
              <img src="/Logo/Bsnllogo.jpg" alt="BSNL" className="h-12 w-auto mx-6 object-contain" draggable={false} />
              <img src="/Logo/bvglogo.jpg" alt="BVG" className="h-12 w-auto mx-6 object-contain" draggable={false} />
              <img src="/Logo/cotmaclogo.jpg" alt="Cotmac" className="h-12 w-auto mx-6 object-contain" draggable={false} />
              <img src="/Logo/godrejlogo.jpg" alt="Godrej" className="h-12 w-auto mx-6 object-contain" draggable={false} />
              <img src="/Logo/guptapowerlogo.jpg" alt="Gupta Power" className="h-12 w-auto mx-6 object-contain" draggable={false} />
              <img src="/Logo/KEILlogo.jpg" alt="KEIL" className="h-12 w-auto mx-6 object-contain" draggable={false} />
              <img src="/Logo/LTlogo.jpg" alt="L&T" className="h-12 w-auto mx-6 object-contain" draggable={false} />
              <img src="/Logo/mahavitranlogo.jpg" alt="Mahavitran" className="h-12 w-auto mx-6 object-contain" draggable={false} />
              <img src="/Logo/NCClogo1.jpg" alt="NCC" className="h-12 w-auto mx-6 object-contain" draggable={false} />
              <img src="/Logo/polycronelogo.jpg" alt="Polycrone" className="h-12 w-auto mx-6 object-contain" draggable={false} />
              <img src="/Logo/shreemlogo.jpg" alt="Shreem" className="h-12 w-auto mx-6 object-contain" draggable={false} />
              <img src="/Logo/steringlogo.jpg" alt="Sterling" className="h-12 w-auto mx-6 object-contain" draggable={false} />
              <img src="/Logo/Tatapowerlogo.jpg" alt="Tata Power" className="h-12 w-auto mx-6 object-contain" draggable={false} />
              <img src="/Logo/tataprojectlogo.jpg" alt="Tata Project" className="h-12 w-auto mx-6 object-contain" draggable={false} />
            </div>


          </div>
        </div>

        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
      </div>
    </>
  );
};

export default Marquee;
