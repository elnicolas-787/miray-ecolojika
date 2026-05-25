import React, { MdOutlineHandshake, MdOutlineShoppingCart } from "react-icons/md";

const Cta = () => {
  return (
    <section className="py-xl">
      <div className="max-xl:px-5 max-w-7xl mx-auto bg-surface-container-high rounded-[2rem] p-lg md:p-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.7,-63.2C61.4,-54.6,71.5,-39.7,76.5,-23.4C81.5,-7,81.4,10.7,74.1,25.8C66.8,40.9,52.3,53.4,36.5,61.9C20.7,70.5,3.7,75.1,-13.3,72.4C-30.3,69.7,-47.2,59.7,-59.5,45.4C-71.8,31.1,-79.4,12.5,-77.8,-5.3C-76.2,-23.1,-65.4,-40.1,-50.4,-49C-35.4,-57.8,-16.2,-58.5,1.5,-60.7C19.2,-62.8,34.1,-71.7,47.7,-63.2Z"
              fill="#003140"
              transform="translate(100 100)"
            ></path>
          </svg>
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl text-bold text-primary mb-md">
            Prêt à régénérer vos terres ?
          </h2>
          <p className="text-lg text-primary opacity-80">
            Engagez-vous dans une démarche durable avec nos solutions
            circulaires haute performance.
          </p>
          {/* <div className="flex flex-col md:flex-row gap-md justify-center">
            <button className="cursor-pointer bg-secondary text-on-secondary px-8 py-4 rounded-full hover:bg-secondary/80 transition-all flex items-center justify-center gap-sm">
              Commander du compost
              <MdOutlineShoppingCart size={20} />
            </button>
            <button className="cursor-pointer bg-primary-container text-on-primary px-8 py-4 rounded-full border border-on-primary-container/30 hover:bg-on-primary-fixed-variant transition-all flex items-center justify-center gap-sm">
              Devenir partenaire
              <MdOutlineHandshake size={20} />
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Cta;
