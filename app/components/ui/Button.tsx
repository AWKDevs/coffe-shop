"use client";

// components/ui/Button.tsx
import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, icon, className = "", ...rest }) => {
  return (
    <button
      className={`flex items-center gap-2 justify-center px-4 py-2 rounded-full bg-[#433409] text-white font-[Judson] hover:bg-opacity-90 active:scale-95 transition ${className}`}
      {...rest}
    >
      {icon}
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
