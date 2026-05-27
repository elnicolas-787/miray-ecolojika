import Hero from "@/components/Hero";
import Cta from "@/components/product/Cta";
import BgHero from "@/public/images/product.jpg";
import Innovation from "@/components/product/Innovation";
import ProcessFlow from "@/components/product/ProcessFlow";
import ProductCatalog from "@/components/product/ProductCatalog";
import React from "react";

const ProductPage = () => {
  return (
    <div>
      <Hero
        subtitle="Économie Circulaire"
        title="Nos Produits Circulaires"
        description="Transformer les défis environnementaux en ressources fertiles pour Madagascar. Découvrez notre gamme de produits issus d'une valorisation responsable."
        altImg="Madagascar agriculture"
        bgImage={BgHero}
      />
      <Innovation />
      <ProductCatalog />
      <ProcessFlow />
      <Cta />
    </div>
  );
};

export default ProductPage;
