import Image from "next/image";
import MissionImg from "@/public/images/mission.jpg";
import { MdOutlineCompost, MdOutlineDeleteSweep, MdOutlineEnergySavingsLeaf } from "react-icons/md";

const Mission = () => {
  return (
    <section className="py-10 sm:py-16 md:py-24 bg-surface leaf-vein" id="mission">
      <div className="max-w-7xl mx-auto max-sm:px-6 max-xl:px-5 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 xl:gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary-fixed/50 rounded-full z-0"></div>
          <Image
            className="rounded-xl shadow-2xl relative z-10 max-sm:max-h-80 max-lg:max-h-100 object-cover"
            alt="Close-up of human hands carefully sorting through organic waste."
            src={MissionImg}
          />
        </div>
        <div className="space-y-6 xl:space-y-8">
          <span className="text-secondary sm:text-lg uppercase tracking-widest block mb-4">
            Notre Vision
          </span>
          <h2 className="text-2xl sm:text-3xl text-bold text-primary">
            De la décharge à la valeur : une approche systématique
          </h2>
          <p className="max-sm:text-sm text-on-surface-variant">
            Face aux défis de gestion des déchets à Tanjombato, nous intervenons
            à la source. Nous éduquons les ménages au tri sélectif pour
            préserver la valeur des matériaux et garantir des conditions de
            travail dignes.
          </p>
          <div className="space-y-4 xl:space-y-6">
            <div className="flex gap-3 sm:gap-4">
              <div className="w-12 h-9 sm:h-11 md:h-10 lg:h-12 bg-secondary-container/30 flex items-center justify-center rounded-full text-secondary">
                <MdOutlineDeleteSweep className="text-2xl lg:text-3xl" />
              </div>
              <div>
                <h4 className="max-sm:text-sm text-bold text-primary">Tri sélectif</h4>
                <p className="max-sm:text-sm text-caption text-on-surface-variant">
                  Collecte optimisée et sensibilisation porte-à-porte.
                </p>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <div className="w-12 h-9 sm:h-11 md:h-10 lg:h-12 bg-secondary-container/30 flex items-center justify-center rounded-full text-secondary">
                <MdOutlineCompost className="text-2xl lg:text-3xl" />
              </div>
              <div>
                <h4 className="max-sm:text-sm text-bold text-primary">Compostage aérobie</h4>
                <p className="max-sm:text-sm text-caption text-on-surface-variant">
                  Valorisation des biodéchets en fertilisant organique
                  certifiable.
                </p>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <div className="w-12 h-9 sm:h-11 md:h-10 lg:h-12 bg-secondary-container/30 flex items-center justify-center rounded-full text-secondary">
                <MdOutlineEnergySavingsLeaf className="text-2xl lg:text-3xl" />
              </div>
              <div>
                <h4 className="max-sm:text-sm text-bold text-primary">
                  Valorisation énergétique
                </h4>
                <p className="max-sm:text-sm text-caption text-on-surface-variant">
                  Production de charbon écologique et matériaux de construction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
