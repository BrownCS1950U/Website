import React from "react";
import SplineScene from "./SplineScene";

const Hero = ({transition, onSky, onHome, value}) => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <SplineScene transition={transition} onSky={onSky} onHome={onHome} value={value} />

      
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href=''>
        <div className="w-[36px] h-[64px] rounded-3xl border-4 border-[#00ccff] flex justify-center items-start p-2">
      <div
        className="w-3 h-3 rounded-full bg-[#00ccff] mb-1"
        style={{
          animation: 'float 1.5s infinite ease-in-out',
        }}
      />
    </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
