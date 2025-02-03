"use client";
import { useEffect } from "react";
import AboutUs from "./components/aboutus/AboutUs";
import Hero from "./components/Hero";
import FeaturesSection from "./components/sections/FeatureSection";
import { productosData } from "./constants/productsData";

export default function LandingPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("productos", JSON.stringify(productosData));
    }
  }, []);
  return (
    <div>
      {/* Aquí va el Hero */}
      <Hero />
      <FeaturesSection />
      <AboutUs />
      {/* Aquí va la sección Sobre Nosotros y el Footer */}
    </div>
  );
}
