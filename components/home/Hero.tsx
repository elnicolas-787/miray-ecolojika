import Image from "next/image";
import BgHero from "@/public/images/bg-hero.jpg";
import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#343e42]">
      <div className="absolute inset-0 z-0">
        <Image
          className="w-full h-full object-cover"
          alt="A panoramic view of lush, green terraced rice fields and sustainable agricultural landscapes in rural Madagascar."
          src={BgHero}
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary/80 to-transparent"></div>
      </div>
      <div className="mx-auto max-xl:px-8 max-w-7xl relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <div className="max-w-4xl space-y-8 md:space-y-7 lg:space-y-9">
          <h1 className="text-bold text-3xl sm:text-4xl md:text-3xl lg:text-[2.8rem] max-md:text-center leading-tight text-white">
            Transformer les déchets en ressources pour Madagascar
          </h1>
          <p className="text-base lg:text-lg max-md:text-center text-regular opacity-90 text-white">
            {`Basé à Tanjombato, le projet MIRAY – ÉCOLOJIKA déploie des solutions
            d'économie circulaire innovantes pour régénérer nos terres et créer
            des emplois durables.`}
          </p>
          <div className="flex max-md:justify-center flex-wrap gap-2 lg:gap-4">
            <a
              className="max-[448px]:w-full text-center bg-secondary-fixed text-on-secondary-fixed px-6 py-3 rounded max-sm:text-sm text-bold transition-all duration-300 hover:scale-105 shadow-xl shadow-black/10"
              href="#solutions"
            >
              Découvrir nos solutions
            </a>
            <a
              className="max-[448px]:w-full text-center border-2 border-primary-fixed text-primary-fixed px-6 py-3 rounded max-sm:text-sm text-bold transition-all duration-300 hover:scale-105 hover:bg-primary-fixed/10"
              href="#contact"
            >
              Nous soutenir
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
