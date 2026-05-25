import Image from "next/image";
import BgHero from "@/public/images/bg-about.jpg";
import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        alt="Bg hero"
        data-alt="An expansive aerial view of a lush, vibrant green Malagasy forest at sunrise, with soft morning mist rolling through the valleys. The lighting is golden and ethereal, highlighting the dense canopy and natural patterns of the landscape. The overall mood is hopeful and serene, emphasizing environmental stewardship and pristine nature in a modern corporate photography style."
        src={BgHero}
      />
      <div className="absolute inset-0 bg-linear-to-r from-primary/80 to-transparent"></div>
      <div className="mx-auto max-md:px-4 max-w-7xl relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <div className="max-w-3xl space-y-9">
          <span className="text-sm tracking-widest uppercase block mb-base text-secondary-fixed">
            Notre impact
          </span>
          <h1 className="text-bold text-[2.8rem] leading-tight text-white">
            Transformer les défis environnementaux en opportunités sociales.
          </h1>
          <p className="text-lg text-regular opacity-90 text-white">
            Chez Malagasy Circular, chaque tonne de déchet collectée est une
            victoire pour la planète et un pas vers la dignité pour nos
            communautés.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
