import Image from "next/image";
import Responsable from "@/public/images/responsable-prod.jpg";
import Impact1 from "@/public/images/impact-1.jpg";
import Impact2 from "@/public/images/impact-2.jpg";

const Sociale = () => {
  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="max-w-container-max mx-auto px-16">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 order-2 md:order-1 pe-10">
            <span className="text-secondary text-lg uppercase tracking-widest block mb-4">
              Notre Force Humaine
            </span>
            <h2 className="text-3xl text-bold text-headline-lg text-primary mb-6">
              Une inclusion sociale forte pour un impact réel
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 text-justify">
              {`Au cœur de MIRAY se trouvent 15 pionniers, dont 13 femmes issues
              du secteur informel. Nous leur offrons des conditions de travail
              dignes, des équipements de protection et une formation continue
              pour transformer leur savoir-faire en métier de l'avenir.`}
            </p>
            <blockquote className="border-l-4 border-secondary pl-6 text-italic text-primary mb-8 text-justify">
              {`"Leur inclusion permet non seulement de renforcer la chaîne de
              valeur, mais aussi d'améliorer radicalement leurs conditions de
              vie."`}
            </blockquote>
            <div className="flex items-center gap-4">
              <Image
                className="w-16 h-16 rounded-full object-cover border-2 border-secondary"
                alt="Portrait of Hantaniaina Cindi Cooper."
                src={Responsable}
              />
              <div>
                <p className="font-bold text-primary">
                  Hantaniaina Cindi Cooper
                </p>
                <span className="text-caption text-on-surface-variant text-sm">
                  Responsable de Production
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1 order-1 md:order-2 grid grid-cols-2 gap-4">
            <Image
              className="rounded-xl shadow-lg mt-8"
              alt="Group of workers in safety vests."
              src={Impact1}
            />
            <Image
              className="rounded-xl shadow-lg"
              alt="Women workers engaged in composting."
              src={Impact2}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sociale;
