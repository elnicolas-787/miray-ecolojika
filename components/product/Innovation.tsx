import React from "react";
import { MdOutlineEco } from "react-icons/md";

const Innovation = () => {
  return (
    <section className="py-xl bg-[#f6f9f7]">
      <div className="max-xl:px-5 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="md:col-span-2 bg-surface-container-low p-lg rounded-xl flex flex-col justify-between border border-outline/10 shadow-soft">
          <div>
            <MdOutlineEco className="text-secondary text-[48px] mb-md" />
            <h2 className="text-2xl sm:text-3xl text-bold text-primary mb-sm">
              Zéro Déchet, Valeur Maximale
            </h2>
            <p className="text-on-surface-variant max-w-2xl">
              {`Notre approche ne se limite pas au recyclage. Nous réinventons le
              cycle de vie des matériaux pour créer des produits à haute valeur
              ajoutée qui régénèrent l'écosystème local.`}
            </p>
          </div>
          <div className="mt-12 flex items-center gap-md">
            <div className="h-1 w-24 bg-secondary rounded-full"></div>
            <span className="font-label-md text-label-md text-secondary">
              INNOVATION SOCIALE
            </span>
          </div>
        </div>
        <div className="bg-secondary p-12 rounded-xl text-on-secondary flex flex-col justify-center items-center text-center shadow-soft">
          <div className="text-6xl text-bold mb-xs">85%</div>
          <p className="text-lg text-semibold opacity-80 uppercase tracking-tighter">
            De réduction des émissions
          </p>
          <p className="text-lg mt-md opacity-80">
            Grâce à nos processus de transformation thermique propre et
            compostage aérobie.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
