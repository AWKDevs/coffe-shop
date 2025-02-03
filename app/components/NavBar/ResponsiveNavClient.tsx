"use client"

import { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import type { ReactNode } from 'react';

type ResponsiveNavClientProps = {
  menuDesktop: ReactNode;
  menuMobile: ReactNode;
  logo: ReactNode;
};

const ResponsiveNavClient = ({ menuDesktop, menuMobile, logo }: ResponsiveNavClientProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="border-b w-full">
      <div className="w-full px-8">
        <div className="flex justify-between items-center h-16">
          {logo}

          {/* Menú Desktop */}
          <div className="hidden pre_md:flex items-center space-x-4">
            {menuDesktop}
          </div>

          {/* Botón Hamburguesa */}
          <button
            onClick={toggleMenu}
            className="pre_md:hidden p-2 rounded-md text-[rgb(249,217,120)] hover:bg-[rgb(180,135,100)] focus:outline-none transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <BiX className="h-6 w-6 hover:transition-transform duration-300 hover:rotate-180" />
            ) : (
              <BiMenu className="h-6 w-6 hover:transition-transform duration-50 hover:animate-pulse" />
            )}
          </button>
        </div>

        {/* Menú Móvil */}
        <div
          className={`pre_md:hidden absolute left-0 w-full bg-[rgb(201,186,175)] z-50 shadow-lg
            ${isOpen ? 'motion-preset-slide-left scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}
          style={{
            maxHeight: isOpen ? '1000px' : '0px',
            transformOrigin: 'top',
            overflow: 'hidden'
          }}
        >
          <div className="px-32 py-4 space-y-4">
            {menuMobile}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNavClient;