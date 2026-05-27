import React from "react";
import Logo from "@/public/logo_miray.png";
import Image from "next/image";
import {
  MdOutlineLinkedCamera,
  MdOutlineMail,
  MdOutlinePublic,
} from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-surface-container w-full py-12 border-t border-outline-variant dark:border-on-surface-variant">
      <div className="flex flex-col md:flex-row justify-between items-center gap-gutter max-xl:px-5 max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-sm">
          <Image
            alt="MIRAY Logo"
            className="h-12 w-auto object-contain mb-3"
            src={Logo}
          />
          <p className="max-sm:text-sm text-on-surface-variant text-center md:text-left max-w-2xl">
            © 2022 <span className="capitalize text-bold">Miray écolojika</span>. Tous droits réservés. Restauration
            environnementale et inclusion sociale.
          </p>
        </div>
        <div className="flex gap-x-6 gap-y-3 flex-wrap justify-end">
          <a
            className="max-sm:text-sm text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Politique de confidentialité
          </a>
          <a
            className="max-sm:text-sm text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Mention légale
          </a>
          <a
            className="max-sm:text-sm text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
            href="a-propos"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
