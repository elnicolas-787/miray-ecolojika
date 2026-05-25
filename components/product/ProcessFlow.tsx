import {
  MdOutlineAccountTree,
  MdOutlineChair,
  MdOutlineCompost,
  MdOutlineDeleteSweep,
  MdOutlineEco,
  MdOutlineEnergySavingsLeaf,
  MdOutlineLocalShipping,
  MdOutlineRecycling,
  MdOutlineSettingsSuggest,
  MdOutlineVerified,
  MdOutlineWaterDrop,
  MdOutlineWbSunny,
} from "react-icons/md";

const ProcessFlow = () => {
  return (
    <section className="bg-primary text-white py-xl overflow-hidden">
      <div className="max-w-7xl mx-auto max-xl:px-5">
        <div className="text-center mb-xl">
          <h2 className="text-bold text-2xl sm:text-3xl mb-base">
            Chaîne de Valorisation des Déchets
          </h2>
          <div className="flex items-center justify-center gap-sm opacity-80">
            <MdOutlineEco size={23} className="text-secondary-container" />
            <p className="text-italic">
              Moins de déchets, plus de valeur, un avenir durable !
            </p>
            <MdOutlineEco size={23} className="text-secondary-container" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
          <div className="lg:col-span-3 space-y-md">
            <div className="bg-surface-container-lowest text-on-surface p-md rounded-xl border-l-4 border-secondary">
              <h3 className="text-bold text-primary mb-sm flex items-center gap-2.5">
                <MdOutlineLocalShipping size={23} />
                1.{" "}ARRIVÉE DES DÉCHETS
              </h3>
              <p className="text-sm opacity-80">
                Déchets livrés par camion et pré-triés à la source par nos
                agents.
              </p>
            </div>
            <div className="bg-surface-container-lowest text-on-surface p-md rounded-xl border-l-4 border-primary">
              <h3 className="text-bold text-primary mb-sm flex items-center gap-2.5">
                <MdOutlineAccountTree size={23} />
                2.{" "}TRI / SÉPARATION
              </h3>
              <ul className="text-sm space-y-xs opacity-80">
                <li className="flex items-center gap-xs">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  Déchet organique
                </li>
                <li className="flex items-center gap-xs">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Déchet plastique
                </li>
                <li className="flex items-center gap-xs">
                  <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                  Papier et carton
                </li>
                <li className="flex items-center gap-xs">
                  <span className="w-2 h-2 rounded-full bg-zinc-800"></span>{" "}
                  Boue de charbon
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 bg-surface-container-lowest text-on-surface p-md rounded-xl border-t-4 border-secondary">
            <h3 className="text-bold text-primary mb-md flex items-center gap-2.5">
              <MdOutlineCompost size={23} /> 3.
              DÉCHET ORGANIQUE
            </h3>
            <div className="space-y-md">
              <div className="flex items-center gap-md border-b border-outline-variant/20 pb-sm">
                <div className="w-12 h-12 bg-secondary/10 rounded flex items-center justify-center text-bold text-secondary">
                  50%
                </div>
                <div>
                  <p className="text-bold">Vermi Composte</p>
                  <p className="text-xs opacity-70">
                    Croissance racinaire optimale
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-md border-b border-outline-variant/20 pb-sm">
                <div className="w-12 h-12 bg-secondary/10 rounded flex items-center justify-center text-bold text-secondary">
                  30%
                </div>
                <div>
                  <p className="text-bold">Co-Composte</p>
                  <p className="text-xs opacity-70">
                    Jacinthe d'eau, boue de vidange
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-md">
                <div className="w-12 h-12 bg-secondary/10 rounded flex items-center justify-center text-bold text-secondary">
                  20%
                </div>
                <div>
                  <p className="text-bold">Lombri-Composte</p>
                  <p className="text-xs opacity-70">
                    Fertilisant premium biologique
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-md pt-md border-t-2 border-dashed border-secondary/30 text-center">
              <p className="text-semibold text-secondary uppercase text-xs tracking-widest">
                Destination: Agriculture &amp; Pisciculture
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-md">
            <div className="bg-surface-container-lowest text-on-surface p-md rounded-xl border-t-4 border-primary">
              <h3 className="text-bold text-primary mb-sm flex items-center gap-2.5">
                <MdOutlineRecycling size={23} /> 4.
                DÉCHET PLASTIQUE
              </h3>
              <div className="grid grid-cols-2 gap-sm">
                <div className="flex flex-col justify-center items-center gap-1 p-xs bg-blue-50 rounded">
                  <MdOutlineWaterDrop size={23} className="text-blue-400" />
                  <p className="text-[10px] text-bold">Lavage (Sasana)</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-1 p-xs bg-blue-50 rounded">
                  <MdOutlineChair size={23} className="text-blue-400" />
                  <p className="text-[10px] text-bold">Réemploi (Mobilier)</p>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest text-on-surface p-md rounded-xl border-t-4 border-zinc-800">
              <h3 className="text-bold text-primary mb-sm flex items-center gap-2.5">
                <MdOutlineEnergySavingsLeaf size={23} className="text-zinc-800" />
                5. DÉCHET DE CHARBON
              </h3>
              <div className="flex items-center gap-md">
                <MdOutlineWbSunny size={23} className="text-zinc-800" />
                <div>
                  <p className="text-semibold">Charbon Écologique</p>
                  <p className="text-xs opacity-70">
                    Solution de cuisson propre
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
