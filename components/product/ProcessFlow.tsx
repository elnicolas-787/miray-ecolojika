import { MdOutlineDeleteSweep, MdOutlineSettingsSuggest, MdOutlineVerified } from "react-icons/md";

const ProcessFlow = () => {
  return (
    <section className="bg-primary text-white py-xl overflow-hidden">
      <div className="max-w-7xl mx-auto max-xl:px-8">
        <div className="text-center mb-xl">
          <h2 className="text-3xl text-bold mb-5">
            De la Collecte à la Valeur
          </h2>
          <p className="max-w-2xl mx-auto opacity-80">
            Notre méthodologie rigoureuse garantit que chaque déchet collecté
            trouve une seconde vie productive.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/20 -translate-y-1/2 z-0"></div>
          <div className="relative z-10 bg-primary-container p-lg rounded-2xl border border-white/10 text-center">
            <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-md shadow-xl">
              <MdOutlineDeleteSweep size={30} />
            </div>
            <h3 className="font-headline-md text-headline-md mb-xs">
              Tri &amp; Collecte
            </h3>
            <p className="text-on-primary-container text-sm">
              Séparation méticuleuse des flux de déchets à la source par nos
              équipes locales.
            </p>
          </div>
          <div className="relative z-10 bg-primary-container p-lg rounded-2xl border border-white/10 text-center">
            <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-md shadow-xl">
              <MdOutlineSettingsSuggest size={30} />
            </div>
            <h3 className="font-headline-md text-headline-md mb-xs">
              Transformation
            </h3>
            <p className="text-on-primary-container text-sm">
              Processus industriels et biologiques pour convertir les matières
              en intrants bruts.
            </p>
          </div>
          <div className="relative z-10 bg-primary-container p-lg rounded-2xl border border-white/10 text-center">
            <div
              className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-md shadow-xl"
              data-weight="fill"
            >
              <MdOutlineVerified size={30} />
            </div>
            <h3 className="font-headline-md text-headline-md mb-xs">
              Valorisation
            </h3>
            <p className="text-on-primary-container text-sm">
              Création de produits finis prêts pour le marché, réduisant
              l'empreinte carbone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
