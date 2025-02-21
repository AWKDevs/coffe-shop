"use client";
import React from "react";
import { NextSeo, NextSeoProps } from "next-seo";

interface SEOProps extends NextSeoProps {
  // props adicionales si es necesario.
}

const SEO: React.FC<SEOProps> = (props) => {
  return <NextSeo {...props} />;
};

export default SEO;
