"use client";

import Image from "next/image";
import Responsable from "@/public/images/responsable-prod.jpg";
import Impact1 from "@/public/images/impact-1.jpg";
import Impact2 from "@/public/images/impact-2.jpg";
import { useState } from "react";

const Sociale = () => {
  const [active, setActive] = useState(1);

  return (
    <section className="py-10 sm:py-16 md:py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto max-xl:px-5">
        <div className="flex flex-col md:flex-row gap-6 sm:gap-10 items-center">
          <div className="flex-1 lg:pe-10">
            <span className="text-secondary sm:text-lg uppercase tracking-widest block mb-3 sm:mb-4">
              Notre Force Humaine
            </span>
            <h2 className="text-2xl sm:text-3xl text-bold text-headline-lg text-primary mb-4 sm:mb-6">
              Une inclusion sociale forte pour un impact réel
            </h2>
            <p className="max-sm:text-sm text-on-surface-variant mb-5 sm:mb-8 text-justify">
              {`Au cœur de MIRAY se trouvent 15 pionniers, dont 13 femmes issues
              du secteur informel. Nous leur offrons des conditions de travail
              dignes, des équipements de protection et une formation continue
              pour transformer leur savoir-faire en métier de l'avenir.`}
            </p>
            <blockquote className="max-sm:text-sm border-l-4 border-secondary pl-4 sm:pl-6 text-italic text-primary mb-5 sm:mb-8">
              {`"Leur inclusion permet non seulement de renforcer la chaîne de
              valeur, mais aussi d'améliorer radicalement leurs conditions de
              vie."`}
            </blockquote>
            <div className="flex items-center gap-3 sm:gap-4">
              <Image
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-secondary"
                alt="Portrait of Hantaniaina Cindi Cooper."
                src={Responsable}
              />
              <div>
                <p className="max-sm:text-sm font-bold text-primary">
                  Hantaniaina Cindi Cooper
                </p>
                <span className="text-caption text-on-surface-variant text-xs sm:text-sm">
                  Responsable de Production
                </span>
              </div>
            </div>
          </div>
          <div className="md:relative flex-1 max-md:grid max-sm:grid-cols-1 max-md:grid-cols-2 max-md:gap-3 md:min-h-105 lg:min-h-130">
            <Image
              src={Impact1}
              alt="Group of workers in safety vests."
              onMouseEnter={() => setActive(1)}
              className={`md:absolute max-sm:hidden top-0 left-0 rounded-2xl shadow-2xl border-4 border-white object-cover transition-all duration-300 ease-in-out hover:scale-[1.02] md:w-[72%] xl:w-[68%] ${active === 1 ? "z-20" : "z-10"}`}
            />
            <Image
              src={Impact2}
              alt="Women workers engaged in composting."
              onMouseEnter={() => setActive(2)}
              className={`md:absolute bottom-0 right-0 rounded-2xl shadow-2xl object-cover border-4 border-white transition-all duration-300 ease-in-out hover:scale-[1.02] md:w-[72%] xl:w-[68%] ${active === 2 ? "z-20" : "z-10"}`}
            />
          </div>
          {/* <div className="flex-1 grid sm:grid-cols-2 md:grid-cols-1 gap-2 lg:gap-4">
            <Image
              className="max-sm:hidden md:rounded-xl shadow-lg lg:mt-8 md:max-h-72 2xl:max-h-full"
              alt="Group of workers in safety vests."
              src={Impact1}
            />
            <Image
              className="md:rounded-xl shadow-lg md:max-h-72 2xl:max-h-full"
              alt="Women workers engaged in composting."
              src={Impact2}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Sociale;
