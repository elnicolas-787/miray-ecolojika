import Cta from "@/components/home/Cta";
import Distinctions from "@/components/home/Distinctions";
import Hero from "@/components/home/Hero";
import Impact from "@/components/home/Impact";
import Mission from "@/components/home/Mission";
import Sociale from "@/components/home/Sociale";
import Solutions from "@/components/home/Solutions";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Solutions />
      <Impact />
      <Sociale />
      <Distinctions />
      <Cta />
    </>
  );
}
