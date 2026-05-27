import Image from "next/image";
import Fifaliana from "@/public/profils/Fifaliana.jpeg";
import Cindi from "@/public/profils/Cindi.jpeg";
import Nicolas from "@/public/profils/Nicolas.png";
import { MdOutlineAdminPanelSettings, MdOutlinePerson } from "react-icons/md";

const Team = () => {
  return (
    <section className="py-xl max-sm:px-6 max-xl:px-5 max-w-7xl mx-auto">
      <div className="text-center mb-xl">
        <h2 className="text-bold text-2xl sm:text-3xl md:text-4xl text-primary">
          Notre Équipe Dirigeante
        </h2>
        <div className="h-1 w-24 bg-secondary mx-auto mt-sm"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
        <div className="flex flex-col items-center text-center p-lg bg-white rounded-xl border border-primary/10 shadow-sm">
          <div className="w-32 h-32 rounded-full bg-surface-container-high mb-md overflow-hidden">
            <Image
              alt="IRINOMENA Bijou Fifaliana"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
              src={Fifaliana}
            />
          </div>
          <h3 className="text-bold text-lg text-primary mb-1">
            IRINOMENA Bijou Fifaliana
          </h3>
          <p className="font-label-md text-secondary uppercase mb-sm max-sm:text-xs text-sm">
            Fondateur &amp; CEO
          </p>
          <p className="text-body-md text-on-surface-variant">
            Vision globale et stratégie pour une transformation durable.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-lg bg-white rounded-xl border border-primary/10 shadow-sm">
          <div className="w-32 h-32 rounded-full bg-surface-container-high mb-md overflow-hidden">
            <Image
              alt="Hantaniaina Cindi Cooper"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
              src={Cindi}
            />
          </div>
          <h3 className="text-bold text-lg text-primary mb-1">
            HANTANIAINA Cindi Cooper
          </h3>
          <p className="font-label-md text-secondary uppercase mb-sm max-sm:text-xs text-sm">
            Responsable de Production
          </p>
          <p className="max-sm:text-sm text-on-surface-variant">
            Coordination opérationnelle et excellence industrielle.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-lg bg-white rounded-xl border border-primary/10 shadow-sm">
          <div className="w-32 h-32 rounded-full bg-surface-container-high mb-md overflow-hidden">
            <Image
              alt="Nicolas"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
              src={Nicolas}
            />
          </div>
          <h3 className="text-bold max-sm:text-sm text-primary mb-1">
            RANDRIAFANANTENANTSOA Tahirinirina Nicolas
          </h3>
          <p className="text-secondary uppercase mb-sm max-sm:text-xs text-sm">
            Responsable Marketing &amp; IT
          </p>
          <p className="max-sm:text-sm text-on-surface-variant">
            Innovation digitale et rayonnement de l'économie circulaire.
          </p>
        </div>
      </div>

      <div className="mt-lg p-lg bg-surface-container-low rounded-xl border border-outline-variant flex flex-col md:flex-row items-center justify-between gap-md">
        <div className="flex items-center gap-md">
          <MdOutlineAdminPanelSettings size={30} className="text-primary" />
          <div>
            <h4 className="text-semibold text-primary">Support &amp; RH</h4>
            <p className="max-sm:text-sm text-on-surface-variant">
              Une équipe dédiée à l'accompagnement humain et administratif au
              quotidien.
            </p>
          </div>
        </div>
        <div className="flex -space-x-4">
          <div className="w-12 h-12 rounded-full bg-secondary-container border-2 border-white flex items-center justify-center text-on-secondary-container font-bold">
            +
          </div>
          <div className="w-12 h-12 rounded-full bg-primary-container border-2 border-white flex items-center justify-center text-white"><MdOutlinePerson size={20} /></div>
          <div className="w-12 h-12 rounded-full bg-surface-dim border-2 border-white flex items-center justify-center text-primary"><MdOutlinePerson size={20} /></div>
        </div>
      </div>
    </section>
  );
};

export default Team;
