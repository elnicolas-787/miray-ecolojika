import Image from "next/image";
import Equipe from "@/public/images/equipe.jpg";

const Sociale = () => {
  return (
    <section className="bg-primary py-10 sm:py-16 md:py-20">
      <div className="max-sm:px-6 max-xl:px-5 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-lg">
        <div className="flex-1 space-y-md">
          <h2 className="text-bold text-4xl text-secondary-fixed">
            {`L'Humain au Cœur de l'Action`}
          </h2>
          <p className="text-lg text-white/80">
            {`Notre impact ne s'arrête pas à l'environnement. Nous construisons
            une structure sociale solide et équitable.`}
          </p>
          <div className="flex flex-wrap gap-lg pt-md">
            <div className="space-y-2">
              <div className="text-bold text-4xl text-white">
                21
              </div>
              <div className="text-white/60">
                Collaborateurs Passionnés
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-bold text-4xl text-secondary-fixed">
                86%
              </div>
              <div className="text-white/60">
                Effectif Féminin
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 relative group">
          <div className="absolute inset-0 bg-secondary rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <Image
            alt="Our female workforce"
            className="relative rounded-xl shadow-2xl border-4 border-white/10"
            src={Equipe}
          />
          <div className="absolute -bottom-6 -left-6 bg-secondary-container p-md rounded-lg shadow-lg">
            <p className="font-bold text-on-secondary-container uppercase">
              14 femmes leaders
            </p>
            <p className="text-xs text-on-secondary-container/80 uppercase">
              moteur de notre croissance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sociale;
