"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import React, {
  MdOutlineHealthAndSafety,
  MdOutlinePayments,
  MdOutlineSchool,
} from "react-icons/md";
import Equipe from "@/public/images/equipe.jpg";

const Sociale = () => {
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-xl max-md:px-4 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center"
      >
        {/* IMAGE */}
        <motion.div className="relative" variants={fadeUp}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <Image
              className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
              alt="Equipe"
              src={Equipe}
            />
          </motion.div>

          {/* BADGE */}
          <motion.div
            variants={scaleIn}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-8 -right-8 bg-secondary-container p-5 rounded-2xl shadow-lg"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="text-bold text-3xl text-on-secondary-container"
            >
              13/15
            </motion.div>

            <div className="text-sm text-on-secondary-container text-bold uppercase tracking-widest">
              Femmes employées
            </div>
          </motion.div>
        </motion.div>

        {/* TEXTE */}
        <motion.div className="pl-12" variants={fadeUp}>
          <motion.h2
            variants={fadeUp}
            className="text-3xl text-bold text-primary mb-6"
          >
            L'Inclusion Sociale : Notre Cœur
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-body-lg text-body-lg text-on-surface-variant mb-8"
          >
            Plus qu'une entreprise de gestion de déchets, nous sommes un moteur
            de dignité. Nos employés bénéficient de conditions de travail
            stables et d'une sécurité totale.
          </motion.p>

          <motion.div className="space-y-6" variants={container}>
            {[
              {
                icon: <MdOutlineHealthAndSafety size={23} />,
                text: "Assurance médicale AMIT pour tous",
              },
              {
                icon: <MdOutlinePayments size={23} />,
                text: "Revenu stable et au-dessus de la moyenne",
              },
              {
                icon: <MdOutlineSchool size={23} />,
                text: "Programmes de formation continue",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center gap-4 cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-primary"
                >
                  {item.icon}
                </motion.div>

                <span className="text-semibold">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Sociale;
