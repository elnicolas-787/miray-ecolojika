import Cta from "@/components/product/Cta";
import Hero from "@/components/product/Hero";
import Innovation from "@/components/product/Innovation";
import ProcessFlow from "@/components/product/ProcessFlow";
import ProductCatalog from "@/components/product/ProductCatalog";
import React from "react";

const ProductPage = () => {
  return (
    <div>
      <Hero />
      <Innovation />
      <ProductCatalog />
      <ProcessFlow />
      <Cta />
    </div>
  );
};

export default ProductPage;
