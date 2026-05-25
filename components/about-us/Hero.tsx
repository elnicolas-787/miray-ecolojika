import Image from "next/image";
import BgHero from "@/public/images/bg-about.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          className="w-full h-full object-cover"
          alt="A lush and vibrant Madagascar landscape featuring rolling green hills and diverse vegetation under a soft morning sun. The scene captures a pristine environment with high-key lighting that emphasizes a modern, eco-friendly light-mode aesthetic. The visual style is crisp and professional, using deep teals and natural greens to reflect sustainability and environmental stewardship."
          src={BgHero}
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary/80 to-transparent"></div>
      </div>
      <div className="mx-auto px-16 relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <div className="max-w-4xl space-y-9">
          <span className="text-sm tracking-widest uppercase block mb-base text-secondary-fixed">
            Notre mission
          </span>
          <h1 className="text-bold text-[2.8rem] leading-tight text-white">
            Transformer les déchets en ressources durables
          </h1>
          <p className="text-lg text-regular opacity-90 text-white">
            {`Chez Miray Écolojika, nous redéfinissons le cycle de vie des prodults pour batir une économle circulalre résiliente et inclusive à Madagascar.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
