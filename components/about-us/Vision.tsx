import { MdOutlineFactory, MdOutlineLocationOn, MdOutlineNaturePeople, MdOutlineVerified } from "react-icons/md";

const Vision = () => {
  return (
    <section className="py-xl bg-surface-container-low overflow-hidden">
      <div className="max-sm:px-6 max-xl:px-5 max-w-7xl mx-auto">
        <div className="text-center mb-xl">
          <h2 className="text-bold text-3xl text-primary">
            {`Vision 2030 : L'Expansion`}
          </h2>
          <div className="h-1 w-24 bg-secondary mx-auto mt-sm"></div>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-outline-variant -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter relative pb-1">
            {/* <!-- Step 1 --> */}
            <div className="flex flex-col items-center text-center group">
              <div className="z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white mb-md ring-8 ring-background group-hover:scale-110 transition-transform">
                <MdOutlineLocationOn size={25} />
              </div>
              <h3 className="mt-3 text-bold md:text-lg text-primary mb-xs">
                Andoharanofotsy
              </h3>
              <p className="text-body-md text-on-surface-variant">
                Centre de tri automatisé
              </p>
            </div>
            {/* <!-- Step 2 --> */}
            <div className="flex flex-col items-center text-center group">
              <div className="z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white mb-md ring-8 ring-background group-hover:scale-110 transition-transform">
                <MdOutlineFactory size={25} />
              </div>
              <h3 className="mt-3 text-bold md:text-lg text-primary mb-xs">
                Soavina
              </h3>
              <p className="text-body-md text-on-surface-variant">
                Unité de valorisation textile
              </p>
            </div>
            {/* <!-- Step 3 --> */}
            <div className="flex flex-col items-center text-center group">
              <div className="z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white mb-md ring-8 ring-background group-hover:scale-110 transition-transform">
                <MdOutlineNaturePeople size={25} />
              </div>
              <h3 className="mt-3 text-bold md:text-lg text-primary mb-xs">
                Ampanefy
              </h3>
              <p className="text-body-md text-on-surface-variant">
                {`Hub d'innovation organique`}
              </p>
            </div>
            {/* <!-- Step 4 - The Goal --> */}
            <div className="flex flex-col items-center text-center group">
              <div className="z-10 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white mb-md ring-8 ring-background group-hover:scale-110 transition-transform shadow-lg">
                <MdOutlineVerified size={30} />
              </div>
              <h3 className="mt-3 text-bold md:text-lg text-secondary font-bold mb-xs">
                -80% Déchets
              </h3>
              <p className="text-body-md text-on-surface-variant font-semibold">
                Objectif Réduction 2030
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
