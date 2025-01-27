import React from "react";
import ResponsiveNav from "./NavBar/ResponsiveNav";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Coffee Shop',
    description: 'Dulces Recuerdos Café - 10 años creando momentos mágicos.'
}

const Header = () => {
  return (
    <header className="bg-[rgb(19,14,1)] text-white shadow-md">
    <ResponsiveNav />
    </header>
  );
};

export default Header;
