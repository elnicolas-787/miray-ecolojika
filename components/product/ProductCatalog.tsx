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
      <div className="max-xl:px-8 max-w-7xl mx-auto">
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
                  <h3 className="text-bold text-primary">Vermi Composte</h3>
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
                  Fertilisant organique riche, idal pour rogner la structure des
                  sols et favoriser une croissance saine.
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
                  <span className="bg-primary-container text-on-primary-container px-base py-xs rounded text-xs font-bold uppercase">
                    Eco-Fuel
                  </span>
                </div>
                <p className="text-on-surface-variant">
                  Briquettes à haute valeur calorifique produites à partir de
                  résiduce biomasse.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-xl">
          <div className="flex items-center gap-md mb-6">
            <div className="ps-5 border-s-8 border-s-secondary rounded">
              <h2 className="text-lg text-bold text-primary capitalize">
                matériaux de construction
              </h2>
              <p className="text-on-surface-variant">
                Valorisation des plastiques non-recyclables en matériaux
                durables.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="group rounded-lg border border-outline-variant/30 overflow-hidden shadow-sm transition-all hover:shadow-lg">
              <div className="h-48 overflow-hidden bg-surface-container">
                <Image
                  className="w-full h-full object-contain p-md transition-transform duration-300 hover:scale-110"
                  alt="Brique"
                  src={Brique}
                />
              </div>
              <div className="p-md">
                <div className="flex justify-between items-start mb-xs">
                  <h3 className="text-bold text-primary capitalize">
                    Biriky Plast
                  </h3>
                </div>
                <p className="text-on-surface-variant">
                  Briques autobloquantes ultra-résistantes.
                </p>
              </div>
            </div>
            <div className="group rounded-lg border border-outline-variant/30 overflow-hidden shadow-sm transition-all hover:shadow-lg">
              <div className="h-48 overflow-hidden bg-surface-container">
                <Image
                  className="w-full h-full object-contain p-md transition-transform duration-300 hover:scale-110"
                  alt="Kapila"
                  src={Kapila}
                />
              </div>
              <div className="p-md">
                <div className="flex justify-between items-start mb-xs">
                  <h3 className="text-bold text-primary capitalize">
                    Kapila Plast
                  </h3>
                </div>
                <p className="text-on-surface-variant">
                  Tuiles écologiques pour toitures légères et étanches.
                </p>
              </div>
            </div>
            <div className="group rounded-lg border border-outline-variant/30 overflow-hidden shadow-sm transition-all hover:shadow-lg">
              <div className="h-48 overflow-hidden bg-surface-container">
                <Image
                  className="w-full h-full object-contain p-md transition-transform duration-300 hover:scale-110"
                  alt="Pavet"
                  src={Pavet}
                />
              </div>
              <div className="p-md">
                <div className="flex justify-between items-start mb-xs">
                  <h3 className="text-bold text-primary capitalize">
                    Pavet Plast
                  </h3>
                </div>
                <p className="text-on-surface-variant">
                  Pavés pour aménagements extérieurs et voiries.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-xl">
          <div className="flex items-center gap-md mb-6">
            <div className="ps-5 border-s-8 border-s-secondary rounded">
              <h2 className="text-lg text-bold text-primary capitalize">
                Mobilier &amp; Accessoires
              </h2>
              <p className="text-on-surface-variant">
                L'esthétique de la durabilité au quotidien.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="bg-surface-container rounded-md p-4 flex gap-5 items-center">
              <Image
                alt="Chaise"
                className="w-20 h-20 object-contain"
                src={Chaise}
              />
              <div>
                <h4 className="text-bold text-primary">Seza Plast</h4>
                <p className="text-sm text-on-surface-variant">
                  Chaises pliantes robustes.
                </p>
              </div>
            </div>
            <div className="bg-surface-container rounded-md p-4 flex gap-5 items-center">
              <Image
                alt="Chaise"
                className="w-20 h-20 object-contain"
                src={Table}
              />
              <div>
                <h4 className="text-bold text-primary">Table Plast</h4>
                <p className="text-sm text-on-surface-variant">
                  Mobilier d'appoint circulaire.
                </p>
              </div>
            </div>
            <div className="bg-surface-container rounded-md p-4 flex gap-5 items-center">
              <Image
                alt="Chaise"
                className="w-20 h-20 object-contain"
                src={PorteRideau}
              />
              <div>
                <h4 className="text-bold text-primary">Porte Rideau</h4>
                <p className="text-sm text-on-surface-variant">
                  Accessoires domestiques recyclés.
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
