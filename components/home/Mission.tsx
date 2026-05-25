import Image from "next/image";
import MissionImg from "@/public/images/mission.jpg";
import { MdOutlineCompost, MdOutlineDeleteSweep, MdOutlineEnergySavingsLeaf } from "react-icons/md";

const Mission = () => {
  return (
    <section className="py-24 bg-surface leaf-vein" id="mission">
      <div className="max-w-7xl mx-auto max-xl:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 xl:gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary-fixed/50 rounded-full z-0"></div>
          <Image
            className="rounded-xl shadow-2xl relative z-10 max-md:max-h-96 object-cover"
            alt="Close-up of human hands carefully sorting through organic waste."
            src={MissionImg}
          />
        </div>
        <div>
          <span className="text-secondary text-lg uppercase tracking-widest block mb-4">
            Notre Vision
          </span>
          <h2 className="text-3xl text-bold text-primary mb-6">
            De la décharge à la valeur : une approche systématique
          </h2>
          <p className="text-on-surface-variant mb-8">
            Face aux défis de gestion des déchets à Tanjombato, nous intervenons
            à la source. Nous éduquons les ménages au tri sélectif pour
            préserver la valeur des matériaux et garantir des conditions de
            travail dignes.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-secondary-container/30 flex items-center justify-center rounded-lg text-secondary">
                <MdOutlineDeleteSweep size={30} />
              </div>
              <div>
                <h4 className="text-bold text-primary">Tri sélectif</h4>
                <p className="text-caption text-on-surface-variant">
                  Collecte optimisée et sensibilisation porte-à-porte.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-secondary-container/30 flex items-center justify-center rounded-lg text-secondary">
                <MdOutlineCompost size={30} />
              </div>
              <div>
                <h4 className="text-bold text-primary">Compostage aérobie</h4>
                <p className="text-caption text-on-surface-variant">
                  Valorisation des biodéchets en fertilisant organique
                  certifiable.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-secondary-container/30 flex items-center justify-center rounded-lg text-secondary">
                <MdOutlineEnergySavingsLeaf size={30} />
              </div>
              <div>
                <h4 className="text-bold text-primary">
                  Valorisation énergétique
                </h4>
                <p className="text-caption text-on-surface-variant">
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
