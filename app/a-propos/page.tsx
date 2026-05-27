import Contact from "@/components/about-us/Contact";
import Hero from "@/components/about-us/Hero";
import History from "@/components/about-us/History";
import Sociale from "@/components/about-us/Sociale";
import Team from "@/components/about-us/Team";
import ValueFondamental from "@/components/about-us/ValueFondamental";
import Vision from "@/components/about-us/Vision";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <Hero />
      <History />
      <Sociale />
      <Team />
      {/* <Vision /> */}
      <ValueFondamental />
      <Contact />
    </>
  );
};

export default AboutUs;
