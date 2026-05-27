"use client";

import React, { useState } from "react";
import Logo from "@/public/logo_miray.png";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { MdMenu, MdOutlineMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "accueil" },
    { href: "/produits", label: "produits" },
    { href: "/services", label: "services" },
    { href: "/impact", label: "impact" },
    { href: "/a-propos", label: "à propos" },
  ];

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className="bg-surface/80 dark:bg-surface/80 backdrop-blur-md w-full top-0 sticky z-50 shadow-sm">
      <nav className="flex justify-between items-center h-20 max-sm:px-6 max-xl:px-5 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Image
            alt="MIRAY Logo"
            className="h-12 w-auto object-contain"
            src={Logo}
          />
        </div>
        <div className="hidden md:flex gap-8 items-center text-bold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative capitalize transition-colors ${
                isActive(link.href)
                  ? "text-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.label}

              {/* underline animation */}
              {isActive(link.href) && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-primary"
                />
              )}
            </Link>
          ))}
        </div>
        {/* Desktop button */}
        {/* <div className="hidden md:block">
          <button className="bg-primary text-on-primary px-6 py-3 rounded-lg hover:scale-105 active:scale-95 transition">
            Rejoignez-nous
          </button>
        </div> */}

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary cursor-pointer"
        >
          {!open && <MdOutlineMenu size={28} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-full z-50 mt-7 flex flex-col gap-6 shadow-xl"
            >
              <div className="flex justify-end px-6">
                <button className="cursor-pointer" onClick={() => setOpen(false)}>
                  <FaTimes size={28} />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-2 text-lg text-semibold bg-surface">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`uppercase text-center py-3.5 ${
                      isActive(link.href)
                        ? "text-primary bg-secondary-container"
                        : "text-on-surface-variant"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                {/* <button className="mt-auto bg-primary text-on-primary py-3 rounded-lg">
                  Rejoignez-nous
                </button> */}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
