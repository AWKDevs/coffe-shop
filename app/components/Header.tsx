import React from "react";
import Link from "next/link";
import { SiCoffeescript } from "react-icons/si";
import { BiSolidCart } from "react-icons/bi";
import { HeaderButtonBronwBorder, HeaderIconButton } from "./HeaderButtons";

const Header = () => {
  return (
    <header className="bg-[rgb(19,14,1)] text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="text-2xl font-bold">
          <SiCoffeescript />
        </Link>
        <nav className="flex items-center justify-center space-x-6">
            <HeaderIconButton href="/cart" icon={<BiSolidCart />} color="249,217,120"/>
            <HeaderButtonBronwBorder href="/menu" insideText="MENÚ"/>
            <HeaderButtonBronwBorder href="/recommendations" insideText="RECOMENDACIONES"/>
            <HeaderButtonBronwBorder href="/promotions" insideText="PROMOCIONES"/>
            <HeaderButtonBronwBorder href="/new" insideText="LO NUEVO"/>
            <HeaderButtonBronwBorder href="/about" insideText="NOSOTROS"/>
            <HeaderButtonBronwBorder href="/contact" insideText="CONTÁCTANOS"/>
        </nav>
      </div>
    </header>
  );
};

export default Header;
