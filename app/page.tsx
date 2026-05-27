import Hero from "@/components/Hero";
import Cta from "@/components/home/Cta";
import Distinctions from "@/components/home/Distinctions";
import Impact from "@/components/home/Impact";
import Mission from "@/components/home/Mission";
import Sociale from "@/components/home/Sociale";
import Solutions from "@/components/home/Solutions";
import BgHero from "@/public/images/bg-hero.jpg";

export default function Home() {
  return (
    <>
      <Hero
        title="Transformer les déchets en ressources pour Madagascar"
        description="Basé à Tanjombato, le projet MIRAY – ÉCOLOJIKA déploie des solutions d'économie circulaire innovantes pour régénérer nos terres et créer des emplois durables."
        btn_title_1="Découvrir nos solutions"
        btn_title_2="Nous soutenir"
        bgImage={BgHero}
        altImg="Madagascar agriculture"
      />
      <Mission />
      <Solutions />
      <Impact />
      <Sociale />
      <Distinctions />
      <Cta />
    </>
  );
}
