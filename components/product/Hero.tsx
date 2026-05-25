import React from "react";
import BgHero from "@/public/images/product.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          className="w-full h-full object-cover"
          alt="A lush and vibrant Madagascar landscape featuring rolling green hills and diverse vegetation under a soft morning sun. The scene captures a pristine environment with high-key lighting that emphasizes a modern, eco-friendly light-mode aesthetic. The visual style is crisp and professional, using deep teals and natural greens to reflect sustainability and environmental stewardship."
          src={BgHero}
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary/80 to-transparent"></div>
      </div>
      <div className="mx-auto max-xl:px-5 max-w-7xl relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <div className="max-w-4xl space-y-9">
          <span className="text-sm tracking-widest uppercase opacity-90 block mb-base text-secondary-fixed">
            Économie Circulaire
          </span>
          <h1 className="text-bold text-[2.8rem] leading-tight text-white">
            Nos Produits Circulaires
          </h1>
          <p className="text-lg text-regular opacity-90 text-white">
            {`Transformer les défis environnementaux en ressources fertiles pour
            Madagascar. Découvrez notre gamme de produits issus d'une
            valorisation responsable.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
