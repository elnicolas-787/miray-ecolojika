import React from "react";

const Cta = () => {
  return (
    <section className="relative bg-primary-container" id="contact">
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-fixed/10 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary-fixed/10 rounded-full -ml-32 -mb-32"></div>
      <div className="max-w-7xl mx-auto max-xl:px-5 py-10 sm:py-16 text-center text-on-primary overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-4xl text-bold mb-4 sm:mb-6 text-primary-fixed">
            Prêt à faire la différence ?
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto opacity-90 text-primary-fixed-dim">
            {`Rejoignez le mouvement de l'économie circulaire à Madagascar dès
            aujourd'hui.`}
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-6">
            <a href="a-propos" className="max-[530px]:w-full cursor-pointer bg-secondary-fixed text-on-secondary-fixed px-6 py-3 rounded max-sm:text-sm font-bold transition-all duration-300 hover:scale-105 shadow-xl">
              Contactez-nous
            </a>
            <a
              href="impact"
              className="max-[530px]:w-full cursor-pointer border-2 border-primary-fixed text-primary-fixed px-6 py-3 rounded max-sm:text-sm font-bold transition-all duration-300 hover:scale-105 hover:bg-primary-fixed/10"
            >
              {`Voir le rapport d'impact`}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
