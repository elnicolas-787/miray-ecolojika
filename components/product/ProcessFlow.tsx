import { MdOutlineAutoFixHigh, MdOutlineGridView, MdOutlineLocalShipping, MdOutlinePrecisionManufacturing, MdOutlineScience } from "react-icons/md";

const ProcessFlow = () => {
  return (
    <section className="py-xl px-16 mx-auto overflow-hidden bg-[#f6f9f7]">
      <div className="text-center mb-xl">
        <h2 className="text-bold text-3xl text-headline-lg text-primary mb-xs">
          De la Collecte à la Valeur
        </h2>
        <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap justify-between items-start gap-md relative">
        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-outline-variant/30 -z-10"></div>
        {/* <!-- Step 1 --> */}
        <div className="flex flex-col items-center text-center group w-full md:w-1/5">
          <div className="w-24 h-24 rounded-full bg-surface-container-high flex items-center justify-center mb-md border-4 border-background group-hover:bg-primary-container group-hover:text-on-primary-container transition-all duration-300">
            <MdOutlineLocalShipping size={32} />
          </div>
          <h4 className="text-bold text-primary mb-xs">
            Collecte
          </h4>
          <p className="text-sm text-on-surface-variant px-sm">
            Récupération des biodéchets et plastiques.
          </p>
        </div>
        {/* <!-- Step 2 --> */}
        <div className="flex flex-col items-center text-center group w-full md:w-1/5">
          <div className="w-24 h-24 rounded-full bg-surface-container-high flex items-center justify-center mb-md border-4 border-background group-hover:bg-primary-container group-hover:text-on-primary-container transition-all duration-300">
            <MdOutlinePrecisionManufacturing size={32} />
          </div>
          <h4 className="text-bold text-primary mb-xs">
            Prétraitement
          </h4>
          <p className="font-caption text-[12px] text-on-surface-variant px-sm">
            Tri rigoureux et nettoyage industriel.
          </p>
        </div>
        {/* <!-- Step 3 --> */}
        <div className="flex flex-col items-center text-center group w-full md:w-1/5">
          <div className="w-24 h-24 rounded-full bg-surface-container-high flex items-center justify-center mb-md border-4 border-background group-hover:bg-primary-container group-hover:text-on-primary-container transition-all duration-300">
            <MdOutlineScience size={32} />
          </div>
          <h4 className="text-bold text-primary mb-xs">
            Transformation
          </h4>
          <p className="font-caption text-[12px] text-on-surface-variant px-sm">
            Conversion thermique ou bio-chimique.
          </p>
        </div>
        {/* <!-- Step 4 --> */}
        <div className="flex flex-col items-center text-center group w-full md:w-1/5">
          <div className="w-24 h-24 rounded-full bg-surface-container-high flex items-center justify-center mb-md border-4 border-background group-hover:bg-primary-container group-hover:text-on-primary-container transition-all duration-300">
            <MdOutlineAutoFixHigh size={32} />
          </div>
          <h4 className="text-bold text-primary mb-xs">
            Affinement
          </h4>
          <p className="font-caption text-[12px] text-on-surface-variant px-sm">
            Optimisation de la qualité finale.
          </p>
        </div>
        {/* <!-- Step 5 --> */}
        <div className="flex flex-col items-center text-center group w-full md:w-1/5">
          <div className="w-24 h-24 rounded-full bg-surface-container-high flex items-center justify-center mb-md border-4 border-background group-hover:bg-primary-container group-hover:text-on-primary-container transition-all duration-300">
            <MdOutlineGridView size={32} />
          </div>
          <h4 className="text-bold text-primary mb-xs">
            Criblage
          </h4>
          <p className="font-caption text-[12px] text-on-surface-variant px-sm">
            Calibrage pour une performance parfaite.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
