"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";

const stats = [
  { value: 17, suffix: "", label: "Employées" },
  { value: 7, suffix: "T", label: "Composte / Mois" },
  { value: 100, suffix: "%", label: "Écologique" },
];

const Impact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // reset pour rejouer animation
    }
  }, [inView, controls]);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      className="py-10 sm:py-16 md:py-20 bg-primary text-on-primary overflow-hidden"
      id="impact"
      ref={ref}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-7xl mx-auto max-xl:px-5 grid grid-cols-1 min-[550px]:grid-cols-3 gap-gutter text-center"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-white/5 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl" />

            {/* Counter */}
            <Counter value={stat.value} suffix={stat.suffix} trigger={inView} />

            {/* Label */}
            <div className="max-sm:text-sm uppercase tracking-widest opacity-70 mt-2">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Impact;


const Counter = ({
  value,
  suffix,
  trigger,
}: {
  value: number;
  suffix: string;
  trigger: boolean;
}) => {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const duration = 1200;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [trigger, value]);

  return (
    <div className="text-3xl sm:text-4xl text-semibold text-primary-fixed mb-2">
      {count}
      {suffix}
    </div>
  );
};
