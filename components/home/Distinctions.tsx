import React from "react";

const Distinctions = () => {
  return (
    <section className="py-16 bg-surface-container-highest">
      <div className="max-w-container-max mx-auto px-16">
        <h4 className="text-center text-lg text-on-surface-variant uppercase tracking-[0.2em] mb-10">
          Reconnu par les plus grandes institutions
        </h4>
        <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60 hover:grayscale-0 transition-all">
          <div className="text-headline-md font-bold text-primary opacity-80">
            Alliance Française
          </div>
          <div className="text-headline-md font-bold text-primary opacity-80">
            AUF
          </div>
          <div className="text-headline-md font-bold text-primary opacity-80">
            China Three Gorges
          </div>
          {/* <div className="text-headline-md font-bold text-primary opacity-80">
            AMIT Madagascar
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Distinctions;
