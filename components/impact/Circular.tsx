import Image from "next/image";
import BgHero from "@/public/images/bg-about.jpg";
import { MdOutlineRecycling } from "react-icons/md";

const Circular = () => {
  return (
    <section className="py-xl bg-surface-container">
      <div className="max-md:px-4 max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-bold text-3xl text-primary mb-4">
            Notre Modèle Circulaire
          </h2>
          <div className="h-1 w-24 bg-secondary mx-auto mt-sm"></div>
        </div>
        <p className="text-lg text-on-surface-variant max-w-3xl mx-auto mb-16">
          {`Une boucle vertueuse où le déchet devient une ressource pour
            l'agriculture locale.`}
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="flex-1 flex flex-col gap-12">
            <div className="flex gap-6 items-start">
              <div className="shrink-0 w-16 h-16 rounded-full bg-secondary-container border-2 border-secondary/40 flex items-center justify-center text-primary font-bold text-headline-md">
                1
              </div>
              <div>
                <h4 className="text-lg text-bold text-primary">
                  Collecte Informelle
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Structuration des collecteurs locaux avec des équipements
                  modernes et sécurisés.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="shrink-0 w-16 h-16 rounded-full bg-secondary-container border-2 border-secondary/40 flex items-center justify-center text-primary font-bold text-headline-md">
                2
              </div>
              <div>
                <h4 className="text-lg text-bold text-primary">
                  Tri &amp; Valorisation
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Séparation rigoureuse à la source pour isoler la matière
                  organique riche.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="shrink-0 w-16 h-16 rounded-full bg-secondary-container border-2 border-secondary/40 flex items-center justify-center text-primary font-bold text-headline-md">
                3
              </div>
              <div>
                <h4 className="text-lg text-bold text-primary">
                  Bio-fertilisant
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Transformation par compostage contrôlé en engrais organique
                  haute performance.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative md:p-10">
            <div className="aspect-square bg-primary-container rounded-full flex items-center justify-center overflow-hidden">
              <Image
                className="w-full h-full object-cover opacity-80"
                alt="Circular"
                data-alt="A macro photograph of rich, dark brown organic compost being held in cupped hands, with small vibrant green sprouts emerging from the soil. The lighting is soft and focused, emphasizing the texture of the fertile earth. The background is a blurred agricultural setting, maintaining a clean and professional aesthetic with a deep teal and leaf green color story."
                src={BgHero}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <MdOutlineRecycling size={150} className="text-secondary/60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Circular;
