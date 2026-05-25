import React from "react";
import Logo from "@/public/logo_miray.png"
import Image from 'next/image'
import { MdOutlineLinkedCamera, MdOutlineMail, MdOutlinePublic } from "react-icons/md"

const Footer = () => {
  return (
    <footer className="bg-surface-container-high w-full py-16 border-t border-outline-variant">
      <div className="flex flex-col md:flex-row justify-between items-start gap-gutter px-16 max-w-container-max mx-auto">
        <div className="mb-8 md:mb-0 md:w-1/3">
          <Image
            alt="MIRAY Logo"
            className="h-12 w-auto object-contain mb-6"
            src={Logo}
          />
          <p className="md:text-lg text-on-surface-variant">
            {`Restauration environnementale et inclusion sociale par l'économie
            circulaire à Tanjombato.`}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-16 mb-8 md:mb-0">
          <div className="flex flex-col gap-4">
            <span className="text-semibold text-primary uppercase tracking-wider">
              Projet
            </span>
            <a
              className="text-body-md text-on-surface-variant hover:text-secondary transition-colors"
              href="#"
            >
              Impact
            </a>
            <a
              className="text-body-md text-on-surface-variant hover:text-secondary transition-colors"
              href="#"
            >
              Produits
            </a>
            <a
              className="text-body-md text-on-surface-variant hover:text-secondary transition-colors"
              href="#"
            >
              Équipe
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-semibold text-primary uppercase tracking-wider">
              Légal
            </span>
            <a
              className="text-body-md text-on-surface-variant hover:text-secondary transition-colors"
              href="#"
            >
              Vie privée
            </a>
            <a
              className="text-body-md text-on-surface-variant hover:text-secondary transition-colors"
              href="#"
            >
              Conditions
            </a>
            <a
              className="text-body-md text-on-surface-variant hover:text-secondary transition-colors"
              href="#"
            >
              Presse
            </a>
          </div>
        </div>
        <div className="text-left md:text-right">
          <p className="font-caption text-caption text-on-surface-variant mb-6">
            © 2024 Malagasy Circular. Tous droits réservés.
          </p>
          <div className="flex justify-start md:justify-end gap-6 text-primary">
            <MdOutlinePublic size={25} className="cursor-pointer hover:text-secondary hover:scale-110 transition-all" />
            <MdOutlineLinkedCamera size={25} className="cursor-pointer hover:text-secondary hover:scale-110 transition-all" />
            <MdOutlineMail size={25} className="cursor-pointer hover:text-secondary hover:scale-110 transition-all" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
