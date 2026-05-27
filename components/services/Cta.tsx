import React from "react";
import { MdOutlineHandshake, MdOutlineTrendingUp } from "react-icons/md";

const Cta = () => {
  return (
    <section className="py-xl bg-surface-container-low relative">
      <div className="px-margin-desktop max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-outline/5 overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-lg md:p-xl space-y-md">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-bold text-primary">
              Accompagnement &amp; Partenariat
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base md:text-lg">
              Vous êtes une entreprise, une collectivité ou une institution ?
              Nous vous accompagnons dans la mise en œuvre de modèles
              circulaires performants.
            </p>
            <div className="space-y-sm pt-md">
              <div className="flex items-start gap-md">
                <div className="bg-secondary-container p-xs rounded-full">
                  <MdOutlineHandshake size={23} className="text-on-secondary-container" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Soutien Technique</h4>
                  <p className="text-sm text-on-surface-variant">
                    Formation de vos équipes aux meilleures pratiques du tri et
                    de la valorisation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-md">
                <div className="bg-secondary-container p-xs rounded-full">
                  <MdOutlineTrendingUp size={23} className="text-on-secondary-container" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Rapports d'Impact</h4>
                  <p className="text-sm text-on-surface-variant">
                    Suivi précis des volumes valorisés et de l'empreinte carbone
                    évitée.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-lg">
              <a href="a-propos" className="bg-primary text-on-primary px-7 py-3.5 rounded-md text-bold hover:bg-primary-container transition-colors shadow-sm">
                Devenir Partenaire
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 min-h-[300px] relative">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              data-alt="A professional business meeting occurring in a sun-drenched, eco-friendly office space filled with green plants. The participants are focused and collaborative, representing a partnership between corporate interests and sustainable environmental practices. High-quality corporate photography style."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3p9Z195wA6-dLP_PPFhfdEaNkglgz-9wqHYgZzzJioha9ZrEL2QhJ2DHYdMQ7uyJA4zOSvRrq3J1kQju3I5VenuoDW81tj1ZiDg51uPbrPQYIefMVF-jQw-8UXNFdYy5O6dm_7Rl8FzFbFNsPSwjWZ_Kkf7e44NZVkQkPqGPHgyG7qPsnWIZG5MFEvusqLWoaoupqx5TW_sYtXqDcDmgZBbDSqiTv8QgoMK3_cYq5jigY2oyytdE8Ljl9dcbUvBv7mRDtS1Z9NzFl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
