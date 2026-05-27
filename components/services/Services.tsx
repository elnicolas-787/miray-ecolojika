import Image from "next/image";
import Mission from "@/public/images/mission.jpg";
import {
  MdOutlineCheckCircle,
  MdOutlineCompost,
  MdOutlineEco,
  MdOutlineLocalShipping,
  MdOutlineNature,
  MdOutlinePsychology,
  MdOutlineRecycling,
  MdOutlineSetMeal,
} from "react-icons/md";

const Services = () => {
  return (
    <section
      className="py-xl max-sm:px-6 max-xl:px-5 max-w-7xl mx-auto"
      id="services"
    >
      <div className="flex flex-col md:flex-row justify-between items-end mb-lg gap-md">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl text-bold text-primary">
            Une Expertise Multidimensionnelle
          </h2>
          <p className="text-on-surface-variant mt-xs">
            Nous intervenons à chaque étape du processus de valorisation, de la
            collecte à la création de valeur ajoutée.
          </p>
        </div>
        <div className="flex gap-xs">
          <span className="p-xs bg-surface-container rounded-full">
            <MdOutlineRecycling size={23} className="text-primary" />
          </span>
          <span className="p-xs bg-surface-container rounded-full">
            <MdOutlineEco size={23} className="text-primary" />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-8 bento-card bg-surface-container-lowest border border-outline/10 rounded-xl overflow-hidden flex flex-col md:flex-row group">
          <div className="p-lg flex-1 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-md">
                <MdOutlineLocalShipping size={25} />
              </div>
              <h3 className="text-2xl text-bold text-primary mb-sm">
                Gestion &amp; Collecte des Déchets
              </h3>
              <p className="text-on-surface-variant">
                Sensibilisation active par le porte-à-porte, mise en place du
                tri sélectif à la source et logistique de collecte optimisée au
                cœur de la commune de Tanjombato.
              </p>
            </div>
            <div className="mt-md flex flex-wrap gap-xs">
              <span className="bg-surface-container text-on-surface-variant px-sm py-xs rounded-full text-[12px] font-semibold">
                Tanjombato
              </span>
              <span className="bg-surface-container text-on-surface-variant px-sm py-xs rounded-full text-[12px] font-semibold">
                Tri Sélectif
              </span>
            </div>
          </div>
          <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
            <Image
              alt="Image"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              data-alt="Modern waste collection vehicles and eco-friendly bins organized in a clean urban setting. The scene emphasizes logistics and community involvement, with soft natural lighting and a focus on clean environmental stewardship in Tanjombato."
              src={Mission}
            />
          </div>
        </div>

        <div className="md:col-span-4 bento-card bg-primary text-on-primary rounded-xl p-lg flex flex-col justify-between shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-lg bg-on-primary/10 flex items-center justify-center mb-md border border-on-primary/20">
              <MdOutlineCompost className="text-on-primary" size={25} />
            </div>
            <h3 className="text-2xl text-bold mb-sm">Valorisation Organique</h3>
            <p className="opacity-80">
              Transformation de 7T/mois en compost premium, charbon écologique
              et nouveaux matériaux de construction.
            </p>
          </div>
          <div className="mt-xl relative z-10">
            <div className="flex items-center gap-sm">
              <span className="text-2xl sm:text-4xl text-bold text-secondary-fixed">
                7T
              </span>
              <span className="text-sm opacity-60 leading-tight">
                Valorisation
                <br />
                Mensuelle
              </span>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 opacity-10">
            <MdOutlineNature className="text-[200px]" />
          </div>
        </div>
        {/* <!-- Pisciculture --> */}
        <div className="md:col-span-4 bento-card bg-surface-container-lowest border border-outline/10 rounded-xl overflow-hidden group">
          <div className="h-48 overflow-hidden">
            <Image
              alt="Image"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              data-alt="A serene fish pond integrated into a circular resource cycle, featuring clear water and sustainable infrastructure. Surrounded by lush greenery and built with organic materials, the scene reflects a perfect balance between nature and technical resource management."
              src={Mission}
            />
          </div>
          <div className="p-8">
            <div className="w-12 h-12 rounded-lg bg-tertiary-container text-on-tertiary-container flex items-center justify-center mb-md">
              <MdOutlineSetMeal size={23} />
            </div>
            <h3 className="text-bold text-xl text-primary mb-sm">
              Pisciculture Circulaire
            </h3>
            <p className="text-on-surface-variant">
              Exploitation d'un étang dédié intégré à notre cycle de
              valorisation, utilisant les sous-produits pour nourrir un
              écosystème aquatique sain.
            </p>
          </div>
        </div>
        {/* <!-- Consultance --> */}
        <div className="md:col-span-8 bento-card bg-surface-container-low border border-outline/10 rounded-xl p-lg flex flex-col md:flex-row gap-lg">
          <div className="flex-1">
            <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center mb-md">
              <MdOutlinePsychology size={23} />
            </div>
            <h3 className="text-xl text-bold text-primary mb-sm">
              Consultance &amp; Expertise
            </h3>
            <p className="text-on-surface-variant mb-md">
              Conseil stratégique en environnement et agronomie. Nous
              collaborons avec des chercheurs de renom pour offrir des solutions
              scientifiques aux entreprises.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-sm text-on-surface-variant">
                <MdOutlineCheckCircle size={20} className="text-secondary" />
                Études d'impact environnemental
              </li>
              <li className="flex items-start gap-sm text-on-surface-variant">
                <MdOutlineCheckCircle size={20} className="text-secondary" />
                Optimisation de cycles de production
              </li>
            </ul>
          </div>
          <div className="flex-1 bg-surface-container-lowest rounded-lg p-md border border-outline/5 shadow-sm">
            <div className="flex items-center gap-md mb-md">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-dim">
                <Image
                  alt="Image"
                  className="w-full h-full object-cover"
                  data-alt="Portrait of a professional environmental scientist in a modern laboratory setting. The professional style is academic yet accessible, with soft light and a clean background."
                  src={Mission}
                />
              </div>
              <div>
                <p className="text-bold text-primary">Partenariat Académique</p>
                <p className="text-xs text-on-surface-variant">
                  Expertise certifiée
                </p>
              </div>
            </div>
            <p className="text-sm text-italic text-on-surface-variant">
              "La valorisation scientifique est le pilier de notre approche
              industrielle durable."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
