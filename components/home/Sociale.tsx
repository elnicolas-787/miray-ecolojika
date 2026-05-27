"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

import Responsable from "@/public/images/responsable-prod.jpg";
import Impact1 from "@/public/images/impact-1.jpg";
import Impact2 from "@/public/images/impact-2.jpg";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageVariant: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Sociale = () => {
  const [active, setActive] = useState(1);

  return (
    <section className="py-10 sm:py-16 md:py-24 bg-surface overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto max-xl:px-5"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="flex flex-col md:flex-row gap-6 sm:gap-10 items-center">
          {/* LEFT */}
          <motion.div
            className="flex-1 lg:pe-10 space-y-5"
            variants={container}
          >
            <motion.span
              className="text-secondary sm:text-lg uppercase tracking-widest block"
              variants={item}
            >
              Notre Force Humaine
            </motion.span>

            <motion.h2
              className="text-2xl sm:text-3xl text-bold text-primary"
              variants={item}
            >
              Une inclusion sociale forte pour un impact réel
            </motion.h2>

            <motion.p
              className="max-sm:text-sm text-on-surface-variant text-justify"
              variants={item}
            >
              Au cœur de MIRAY se trouvent 15 pionniers, dont 13 femmes issues
              du secteur informel. Nous leur offrons des conditions de travail
              dignes, des équipements de protection et une formation continue.
            </motion.p>

            <motion.blockquote
              className="max-sm:text-sm border-l-4 border-secondary pl-4 sm:pl-6 italic text-primary"
              variants={item}
            >
              "Leur inclusion permet non seulement de renforcer la chaîne de
              valeur, mais aussi d'améliorer radicalement leurs conditions de
              vie."
            </motion.blockquote>

            <motion.div
              className="flex items-center gap-3 sm:gap-4"
              variants={item}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Image
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-secondary"
                  alt="Responsable"
                  src={Responsable}
                />
              </motion.div>

              <div>
                <p className="text-bold text-primary">
                  Hantaniaina Cindi Cooper
                </p>
                <span className="text-caption text-on-surface-variant text-xs sm:text-sm">
                  Responsable de Production
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGES */}
          <div className="relative flex-1 md:min-h-105 lg:min-h-130 w-full">
            {/* IMAGE 1 */}
            <motion.div
              custom={0}
              initial={{ opacity: 0, y: 30, rotate: -6, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3, scale: 1 }}
              whileHover={{
                rotate: 0,
                scale: 1.05,
                transition: { duration: 0.4 },
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              onMouseEnter={() => setActive(1)}
              className={`absolute top-0 left-0 md:w-[72%] xl:w-[68%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer ${
                active === 1 ? "z-20" : "z-10"
              }`}
            >
              <Image
                src={Impact1}
                alt="Workers"
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* IMAGE 2 */}
            <motion.div
              custom={1}
              initial={{ opacity: 0, y: 30, rotate: 6, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, rotate: 3, scale: 1 }}
              whileHover={{
                rotate: 0,
                scale: 1.05,
                transition: { duration: 0.4 },
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              onMouseEnter={() => setActive(2)}
              className={`absolute bottom-0 right-0 md:w-[72%] xl:w-[68%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer ${
                active === 2 ? "z-20" : "z-10"
              }`}
            >
              <Image
                src={Impact2}
                alt="Community work"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Sociale;
