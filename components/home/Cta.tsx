import React from "react";

const Cta = () => {
  return (
    <section className="bg-surface" id="contact">
      <div className="max-w-container-max mx-auto px-16 text-center bg-primary-container p-16 text-on-primary overflow-hidden relative shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-fixed/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary-fixed/10 rounded-full -ml-32 -mb-32"></div>
        <div className="relative z-10">
          <h2 className="text-4xl text-bold mb-6 text-primary-fixed">
            Prêt à régénérer vos terres ?
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90 text-primary-fixed-dim">
            Que vous soyez agriculteur, partenaire ou citoyen engagé, rejoignez
            le mouvement MIRAY pour une gestion durable des déchets à
            Madagascar.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="cursor-pointer bg-secondary-fixed text-on-secondary-fixed px-6 py-3 rounded font-label-md text-label-md font-bold transition-all duration-300 hover:scale-105 shadow-xl">
              Demander un devis compost
            </button>
            <button className="cursor-pointer border-2 border-primary-fixed text-primary-fixed px-6 py-3 rounded font-label-md text-label-md font-bold transition-all duration-300 hover:scale-105 hover:bg-primary-fixed/10">
              Devenir partenaire
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
