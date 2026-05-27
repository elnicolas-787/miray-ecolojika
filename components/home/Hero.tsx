"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1] as const,
    },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-160 flex items-center overflow-hidden bg-[#343e42]">
      <div className="absolute inset-0 z-0">
        <Image
          className="w-full h-full object-cover scale-105"
          alt="Madagascar agriculture"
          src={BgHero}
          priority
        />

        {/* Overlay animé */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"
        />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-sm:px-6 max-xl:px-5 max-w-7xl relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-gutter"
      >
        <div className="max-w-4xl space-y-8 md:space-y-7 lg:space-y-9">
          {/* Title */}
          <motion.h1
            variants={item}
            className="text-bold text-2xl sm:text-4xl md:text-3xl lg:text-[2.8rem] max-md:text-center leading-tight text-white"
          >
            Transformer les déchets en ressources pour Madagascar
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={item}
            className="text-sm sm:text-base lg:text-lg max-md:text-center text-regular opacity-90 text-white"
          >
            Basé à Tanjombato, le projet MIRAY – ÉCOLOJIKA déploie des solutions
            d'économie circulaire innovantes pour régénérer nos terres et créer
            des emplois durables.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="flex max-md:justify-center flex-wrap gap-3 lg:gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="max-[448px]:w-full text-center bg-secondary-fixed text-on-secondary-fixed py-2.5 px-6 sm:py-3 rounded max-sm:text-sm text-bold shadow-xl shadow-black/10"
              href="#solutions"
            >
              Découvrir nos solutions
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="max-[448px]:w-full text-center border-2 border-primary-fixed text-primary-fixed py-2.5 px-6 sm:py-3 rounded max-sm:text-sm text-bold hover:bg-primary-fixed/10"
              href="#contact"
            >
              Nous soutenir
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
