import React from "react";

const Impact = () => {
  return (
    <section className="py-10 sm:py-16 md:py-20 bg-primary text-on-primary" id="impact">
      <div className="max-w-7xl mx-auto max-xl:px-8 grid grid-cols-1 min-[550px]:grid-cols-3 gap-gutter text-center">
        <div>
          <div
            className="text-3xl sm:text-4xl text-semibold text-primary-fixed mb-2"
            id="counter-jobs"
          >
            17
          </div>
          <div className="max-sm:text-sm uppercase tracking-widest opacity-70">
            Employées
          </div>
        </div>
        <div>
          <div
            className="text-3xl sm:text-4xl text-semibold text-primary-fixed mb-2"
            id="counter-compost"
          >
            7T
          </div>
          <div className="max-sm:text-sm uppercase tracking-widest opacity-70">
            Composte / Mois
          </div>
        </div>
        <div>
          <div
            className="text-3xl sm:text-4xl text-semibold text-primary-fixed mb-2"
            id="counter-eco"
          >
            100%
          </div>
          <div className="max-sm:text-sm uppercase tracking-widest opacity-70">
            Écologique
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
