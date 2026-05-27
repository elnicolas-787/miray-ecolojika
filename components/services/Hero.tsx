import BgHero from "@/public/images/bg-service.png";
import Image from "next/image";
import { MdOutlineArrowDownward } from "react-icons/md";

const Hero = () => {
  return (
    <section className="relative min-h-160 flex items-center overflow-hidden py-xl">
      <div className="absolute inset-0 z-0">
        <Image
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          alt="Service"
          data-alt="A lush aerial view of a sustainable waste processing facility in Madagascar, surrounded by tropical greenery. The morning sun casts a golden glow over orderly composting beds and clean industrial structures. The atmosphere is professional and environmentally conscious, utilizing a palette of deep teals and leaf greens to symbolize growth and renewal."
          src={BgHero}
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary/80 to-transparent"></div>
      </div>
      <div className="mx-auto max-sm:px-6 max-xl:px-5 max-w-7xl relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <div className="max-w-4xl space-y-8 md:space-y-7 lg:space-y-9">
          <span className="text-sm tracking-widest uppercase opacity-90 block mb-base text-secondary-fixed">
            Économie Circulaire
          </span>
          <h1 className="text-bold text-[2.8rem] leading-tight text-white">
            Nos Services de Valorisation
          </h1>
          <p className="text-lg text-regular opacity-90 text-white">
            Chez MIRAY ÉCOLOJIKA, nous transformons les défis environnementaux
            en opportunités économiques. Découvrez comment nous redéfinissons le
            cycle de vie des déchets pour un Madagascar durable.
          </p>
          <div className="flex gap-md pt-base">
            <a
              className="bg-secondary-container text-primary py-2.5 px-6 sm:py-3 rounded max-sm:text-sm text-bold transition-all duration-300 hover:scale-105 shadow-xl shadow-black/10 flex items-center gap-sm"
              href="#services"
            >
              Explorer nos services
              <MdOutlineArrowDownward size={23} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
