import React, {
  MdOutlineEmojiEvents,
  MdOutlineHistory,
  MdOutlineWorkspacePremium,
} from "react-icons/md";

const History = () => {
  return (
    <section className="py-10 sm:py-16 md:py-20 max-sm:px-6 max-xl:px-5 max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7 bg-white p-5 sm:p-8 rounded-xl border border-primary/10 shadow-sm flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4 text-primary">
            <MdOutlineHistory className="text-2xl sm:text-3xl" />
            <h2 className="text-bold text-xl sm:text-2xl md:text-3xl">
              Notre Histoire
            </h2>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-on-surface-variant leading-relaxed">
            Tout a commencé au cœur de Tanjombato, confronté à la problématique
            grandissante de l’accumulation des déchets municipaux. C’est dans ce
            contexte qu’est née Miray Écolojika, portée par une conviction forte
            : « Rien ne se perd, rien ne se crée, tout se transforme.» Animés
            par la volonté de transformer les déchets en opportunités durables,
            nous nous sommes engagés dès le départ dans une démarche innovante
            et responsable. Cet engagement a été récompensé en 2024 par le
            prestigieux prix de Agence universitaire de la Francophonie « Mon
            Idée Mon Entreprise » à l’échelle internationale, marquant le début
            de notre parcours en tant qu’acteur émergent de l’économie
            circulaire locale.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mt-6 lg:mt-0">
          <div className="bg-primary text-white p-5 rounded-xl flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="bg-white/20 p-3 rounded-full flex items-center justify-center">
              <MdOutlineEmojiEvents size={28} />
            </div>

            <div className="space-y-2.5">
              <h5 className="text-sm sm:text-base text-semibold uppercase">
                Prix AUF 2024
              </h5>
              <p className="text-xs sm:text-sm md:text-base opacity-90">
                Lauréat Nationale à Maurice, Lauréat Inter-régionale en Angola
              </p>
            </div>
          </div>

          <div className="bg-surface-container-high p-5 rounded-xl border border-outline-variant flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center">
              <MdOutlineWorkspacePremium size={28} className="text-primary" />
            </div>

            <div className="space-y-2.5">
              <h5 className="text-sm sm:text-base text-semibold uppercase text-primary">
                Alliance Française
              </h5>
              <p className="text-xs sm:text-sm md:text-base text-on-surface-variant">
                Prix de la meilleure innovation de projet en 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
