"use client";

import Image from "next/image";
import Composte from "@/public/images/composte.jpg";
import Charbon from "@/public/images/charbon_ecolojika.png";
import MateriauxConst from "@/public/images/materiaux_construction.png";
import { motion, Variants } from "framer-motion";

const Solutions = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // easing plus moderne (Apple style)
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="py-10 sm:py-16 md:py-24 bg-surface-container-low"
      id="solutions"
    >
      <div className="max-w-7xl mx-auto max-xl:px-5">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl text-bold text-primary mb-2 sm:mb-4">
            Nos Solutions Circulaires
          </h2>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="h-1 bg-secondary mx-auto "
          />
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 min-[550px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-gutter"
        >
          {/* <!-- Solution 1 --> */}
          <motion.div
            variants={cardVariants}
            className="relative bg-surface rounded-lg lg:rounded-xl p-4 sm:p-6 md:p-8 border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all group"
          >
            <span className="absolute z-10 inline-block bg-primary-fixed/80 px-2.5 py-0.5 top-0 right-0 rounded-tr-md rounded-bl-md lg:rounded-tr-lg lg:rounded-bl-lg text-xs text-bold text-primary">
              Produit Phare
            </span>
            <div className="mb-4 lg:mb-6 overflow-hidden rounded-lg">
              <Image
                className="w-full h-36 lg:h-48 object-contain transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 opacity-90"
                alt="Nutrient-dense ecological compost."
                priority
                src={Composte}
              />
            </div>
            <h3 className="lg:text-lg text-semibold text-primary mb-2 lg:mb-3">
              Compost Écologique
            </h3>
            <p className="text-sm sm:text-base text-on-surface-variant">
              7 tonnes de compost premium produites chaque mois pour régénérer
              les sols agricoles malgaches.
            </p>
          </motion.div>
          {/* <!-- Solution 2 --> */}
          <motion.div
            variants={cardVariants}
            className="relative bg-surface rounded-lg lg:rounded-xl p-4 sm:p-6 md:p-8 border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all group"
          >
            <span className="absolute z-10 inline-block bg-tertiary-fixed/80 px-2.5 py-0.5 top-0 right-0 rounded-tr-md rounded-bl-md lg:rounded-tr-lg lg:rounded-bl-lg text-xs text-bold text-tertiary">
              Énergie Propre
            </span>
            <div className="relative mb-4 lg:mb-6 overflow-hidden rounded-lg">
              <Image
                className="w-full h-36 lg:h-48 object-contain transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 opacity-90"
                alt="Ecological charcoal briquettes."
                priority
                src={Charbon}
              />
            </div>
            <h3 className="lg:text-lg text-semibold text-primary mb-2 lg:mb-3">
              Charbon Écologique
            </h3>
            <p className="text-sm sm:text-base text-on-surface-variant">
              Une alternative durable pour la cuisson, réduisant la pression sur
              les forêts naturelles.
            </p>
          </motion.div>
          {/* <!-- Solution 3 --> */}
          <motion.div
            variants={cardVariants}
            className="relative bg-surface rounded-lg lg:rounded-xl p-4 sm:p-6 md:p-8 border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all group"
          >
            <span className="absolute z-10 inline-block bg-secondary-fixed/80 px-2.5 py-0.5 top-0 right-0 rounded-tr-md rounded-bl-md lg:rounded-tr-lg lg:rounded-bl-lg text-xs text-bold text-secondary">
              Innovation
            </span>
            <div className="mb-4 lg:mb-6 overflow-hidden rounded-lg">
              <Image
                className="w-full h-36 lg:h-48 object-contain transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 opacity-90"
                alt="Recycled plastic construction blocks."
                priority
                src={MateriauxConst}
              />
            </div>
            <h3 className="lg:text-lg text-semibold text-primary mb-2 lg:mb-3">
              Matériaux de Construction
            </h3>
            <p className="text-sm sm:text-base text-on-surface-variant">
              Valorisation des plastiques non recyclables en solutions durables
              pour le bâtiment.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
