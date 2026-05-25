import React, { MdOutlineLocationOn } from "react-icons/md";

const Goal = () => {
  return (
    <section className="py-xl max-md:px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-gutter">
        <div className="max-w-3xl">
          <h2 className="text-3xl text-bold text-primary mb-4">
            Objectif Vision 2030
          </h2>
          <p className="text-lg text-on-surface-variant">
            {`Nous étendons notre modèle pour couvrir l'intégralité des communes
            environnantes, avec une ambition claire de circularité totale.`}
          </p>
        </div>
        <div className="flex gap-12 text-center">
          <div>
            <div className="text-3xl text-bold text-secondary">
              80%
            </div>
            <div className="text-lg text-on-surface-variant">
              RÉDUCTION DÉCHETS
            </div>
          </div>
          <div>
            <div className="text-3xl text-bold text-secondary">
              80%
            </div>
            <div className="text-lg text-on-surface-variant">
              VALORISATION
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="bg-white p-8 rounded-xl border border-outline-variant hover:shadow-lg transition-shadow group">
          <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <MdOutlineLocationOn size={25} />
          </div>
          <h3 className="text-bold text-lg text-primary mb-2">
            Andoharanofotsy
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {`Création d’un nouveau centre de traitement et de valorisation des déchets à 2028.`}
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl border border-outline-variant hover:shadow-lg transition-shadow group">
          <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <MdOutlineLocationOn size={25} />
          </div>
          <h3 className="text-bold text-lg text-primary mb-2">
            Ampanefy
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {`Création d’un nouveau centre de traitement et de valorisation des déchets à 2030.`}
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl border border-outline-variant hover:shadow-lg transition-shadow group">
          <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <MdOutlineLocationOn size={25} />
          </div>
          <h3 className="text-bold text-lg text-primary mb-2">
            Soavina
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {`Création d’un nouveau centre de traitement et de valorisation des déchets à 2032.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Goal;
