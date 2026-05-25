import React from 'react'
import Logo from "@/public/logo_miray.png"
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-surface/80 dark:bg-surface/80 backdrop-blur-md w-full top-0 sticky z-50 shadow-sm">
        <nav className="flex justify-between items-center h-20 px-16 max-w-container-max mx-auto">
          <div className="flex items-center">
            <Image
              alt="MIRAY Logo"
              className="h-12 w-auto object-contain"
              src={Logo}
            />
          </div>
          <div className="hidden md:flex gap-8 items-center text-bold">
            <Link
              className="text-primary border-b-2 border-primary pb-1 capitalize"
              href="/"
            >
              accueil
            </Link>
            <Link
              className="text-on-surface-variant hover:text-primary transition-colors capitalize"
              href="produits"
            >
              produits
            </Link>
            <Link
              className="text-on-surface-variant hover:text-primary transition-colors capitalize"
              href="impact"
            >
              impact
            </Link>
            <Link
              className="text-on-surface-variant hover:text-primary transition-colors capitalize"
              href="a-propos"
            >
              à propos
            </Link>
          </div>
          <button className="bg-primary text-on-primary px-6 py-3 rounded scale-95 active:scale-90 transition-transform hover:bg-primary-container hover:text-on-primary-container">
            Rejoignez-nous
          </button>
        </nav>
      </header>
  )
}

export default Header