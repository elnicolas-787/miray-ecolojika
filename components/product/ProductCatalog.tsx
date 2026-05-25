import Image from "next/image";
import VermiCompost from "@/public/images/vermi_composte.png";
import CoCompost from "@/public/images/co-composte.png";
import Compost from "@/public/images/composte.png";
import Charbon from "@/public/images/charbon-ecolojika.png";
import Plastique from "@/public/images/plastique.jpg";
import Pavet from "@/public/images/pavet.jpg";
import Table from "@/public/images/table.jpg";
import Chaise from "@/public/images/chaize.jpg";
import Brique from "@/public/images/brique.jpg";
import Kapila from "@/public/images/kapila.jpg";
import PorteRideau from "@/public/images/porte_rideau.jpg";
import {
  MdOutlineChevronLeft,
  MdOutlineChevronRight,
  MdOutlineVerified,
} from "react-icons/md";

const ProductCatalog = () => {
  return (
    <section className="py-xl">
      <div className="px-16 mx-auto">
        <div className="flex justify-between items-end mb-lg">
          <div className="space-y-2">
            <h2 className="text-bold text-3xl text-primary">
              Le Catalogue Miray
            </h2>
            <p className="text-on-surface-variant">
              {`Des solutions durables pour l'agriculture, l'énergie et la ville.`}
            </p>
          </div>
        </div>
        <div className="mb-xl">
          <div className="flex items-center gap-md mb-6">
            <div className="ps-5 border-s-8 border-s-secondary rounded">
              <h2 className="text-lg text-bold text-primary">
                Fertilisants Premium
              </h2>
              <p className="text-on-surface-variant">
                Valorisation des déchets organiques pour une terre fertile.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="group rounded-lg border border-outline-variant/30 overflow-hidden shadow-sm transition-all hover:shadow-lg">
              <div className="h-48 overflow-hidden bg-surface-container">
                <Image
                  className="w-full h-full object-contain p-md transition-transform duration-300 hover:scale-110"
                  alt="Vermi Composte"
                  src={VermiCompost}
                />
              </div>
              <div className="p-md">
                <div className="flex justify-between items-start mb-xs">
                  <h3 className="text-bold text-primary">
                    Vermi Composte
                  </h3>
                  <span className="bg-tertiary-container text-on-tertiary-container px-base py-xs rounded text-xs font-bold uppercase">
                    Bio
                  </span>
                </div>
                <p className="text-on-surface-variant">
                  Engrais organique issu de la lombriculture pour une croissance
                  racinaire optimale.
                </p>
              </div>
            </div>
            <div className="product-card group rounded-lg border border-outline-variant/30 overflow-hidden shadow-sm transition-all hover:shadow-lg">
              <div className="h-48 overflow-hidden bg-surface-container">
                <Image
                  className="w-full h-full object-contain p-md transition-transform duration-300 hover:scale-110"
                  alt="Co-Composte"
                  src={CoCompost}
                />
              </div>
              <div className="p-md">
                <div className="flex justify-between items-start mb-xs">
                  <h3 className="font-headline-md text-headline-md text-primary">
                    Co-Composte
                  </h3>
                  <span className="bg-tertiary-container text-on-tertiary-container px-base py-xs rounded text-xs font-bold uppercase">
                    Mix
                  </span>
                </div>
                <p className="text-on-surface-variant">
                  Mélange équilibré de matières organiques pour l'amélioration
                  structurelle des sols.
                </p>
              </div>
            </div>
            <div className="product-card group rounded-lg border border-outline-variant/30 overflow-hidden shadow-sm transition-all hover:shadow-lg">
              <div className="h-48 overflow-hidden bg-surface-container">
                <Image
                  alt="Composte"
                  className="w-full h-full object-contain p-md transition-transform duration-300 hover:scale-110"
                  src={Compost}
                />
              </div>
              <div className="p-md">
                <div className="flex justify-between items-start mb-xs">
                  <h3 className="font-headline-md text-headline-md text-primary">
                    Composte
                  </h3>
                  <span className="bg-tertiary-container text-on-tertiary-container px-base py-xs rounded text-xs font-bold uppercase">
                    Bio
                  </span>
                </div>
                <p className="text-on-surface-variant">
                  Fertilisant organique riche, idal pour rogner la structure des sols et
                  favoriser une croissance saine.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-xl">
          <div className="flex items-center gap-md mb-6">
            <div className="ps-5 border-s-8 border-s-secondary rounded">
              <h2 className="text-lg text-bold text-primary capitalize">
                énergie verte
              </h2>
              <p className="text-on-surface-variant">
                Alteratives écologiques au charbon du bois traditionnel.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="group rounded-lg border border-outline-variant/30 overflow-hidden shadow-sm transition-all hover:shadow-lg">
              <div className="h-48 overflow-hidden bg-surface-container">
                <Image
                  className="w-full h-full object-contain p-md transition-transform duration-300 hover:scale-110"
                  alt="Charbon écologique"
                  src={Charbon}
                />
              </div>
              <div className="p-md">
                <div className="flex justify-between items-start mb-xs">
                  <h3 className="text-bold text-primary capitalize">
                    Charbon écolojika
                  </h3>
                  <span className="bg-tertiary-container text-on-tertiary-container px-base py-xs rounded text-xs font-bold uppercase">
                    Bio
                  </span>
                </div>
                <p className="text-on-surface-variant">
                  Briquettes à haute valeur calorifique produites à partir de résiduce biomasse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
