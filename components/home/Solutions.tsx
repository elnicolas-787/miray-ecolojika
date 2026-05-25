import Image from "next/image";
import Composte from "@/public/images/composte.jpg";
import Charbon from "@/public/images/charbon_ecolojika.png";
import MateriauxConst from "@/public/images/materiaux_construction.png";

const Solutions = () => {
  return (
    <section className="py-10 sm:py-16 md:py-24 bg-surface-container-low" id="solutions">
      <div className="max-w-7xl mx-auto max-xl:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-4xl text-bold text-primary mb-4">
            Nos Solutions Circulaires
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 min-[550px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-gutter">
          {/* <!-- Solution 1 --> */}
          <div className="bg-surface rounded-lg lg:rounded-xl p-4 sm:p-6 md:p-8 border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all group">
            <div className="relative mb-4 lg:mb-6 overflow-hidden rounded-lg">
              <Image
                className="w-full h-36 lg:h-48 object-contain group-hover:scale-110 transition-transform duration-500 opacity-90"
                alt="Nutrient-dense ecological compost."
                priority
                src={Composte}
              />
              <span className="absolute z-10 top-1 right-1.5 inline-block bg-primary-fixed/80 px-2.5 py-0.5 rounded-full text-xs text-bold text-primary">
                Produit Phare
              </span>
            </div>
            <h3 className="lg:text-lg text-semibold text-primary mb-2 lg:mb-3">
              Compost Écologique
            </h3>
            <p className="text-sm sm:text-base text-on-surface-variant">
              7 tonnes de compost premium produites chaque mois pour régénérer
              les sols agricoles malgaches.
            </p>
          </div>
          {/* <!-- Solution 2 --> */}
          <div className="bg-surface rounded-lg lg:rounded-xl p-4 sm:p-6 md:p-8 border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all group">
            <div className="relative mb-4 lg:mb-6 overflow-hidden rounded-lg">
              <Image
                className="w-full h-36 lg:h-48 object-contain group-hover:scale-110 transition-transform duration-500 opacity-90"
                alt="Ecological charcoal briquettes."
                priority
                src={Charbon}
              />
              <span className="absolute z-10 top-1 right-1.5 inline-block bg-tertiary-fixed/80 px-2.5 py-0.5 rounded-full text-xs text-bold text-tertiary">
                Énergie Propre
              </span>
            </div>
            <h3 className="lg:text-lg text-semibold text-primary mb-2 lg:mb-3">
              Charbon Écologique
            </h3>
            <p className="text-sm sm:text-base text-on-surface-variant">
              Une alternative durable pour la cuisson, réduisant la pression sur
              les forêts naturelles.
            </p>
          </div>
          {/* <!-- Solution 3 --> */}
          <div className="bg-surface rounded-lg lg:rounded-xl p-4 sm:p-6 md:p-8 border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all group">
            <div className="relative mb-4 lg:mb-6 overflow-hidden rounded-lg">
              <Image
                className="w-full h-36 lg:h-48 object-contain group-hover:scale-110 transition-transform duration-500 opacity-90"
                alt="Recycled plastic construction blocks."
                priority
                src={MateriauxConst}
              />
              <span className="absolute z-10 top-1 right-1.5 inline-block bg-secondary-fixed/80 px-2.5 py-0.5 rounded-full text-xs text-bold text-secondary">
                Innovation
              </span>
            </div>
            <h3 className="lg:text-lg text-semibold text-primary mb-2 lg:mb-3">
              Matériaux de Construction
            </h3>
            <p className="text-sm sm:text-base text-on-surface-variant">
              Valorisation des plastiques non recyclables en solutions durables
              pour le bâtiment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
