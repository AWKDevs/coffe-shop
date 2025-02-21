"use client";

import React from "react";
import ResponsiveNav from "./ResponsiveNav";

export interface HeaderProps {
  logoText?: string;
  backgroundColor?: string;
  extraContent?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  logoText = "Coffee Shop",
  backgroundColor = "bg-[rgb(19,14,1)]",
  extraContent,
}) => {

  return (

    <header className={`${backgroundColor} text-white shadow-md`} role="banner">
      <ResponsiveNav logoText={logoText} />
      {extraContent && (
        <div className="mt-2" aria-label="Contenido adicional del header">
          {extraContent}
        </div>
      )}

    </header>
  );
};

export default Header;
