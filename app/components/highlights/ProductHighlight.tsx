import React from "react";
import { Button } from "antd";
import Image from "next/image";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

interface ProductHighlightProps {
  product: {
    name: string;
    image: string;
    price: string;
    details: string;
    description: string;
  };
  isReverse?: boolean;
  onClick?: () => void;
}

const ProductHighlight: React.FC<ProductHighlightProps> = ({
  product,
  isReverse,
  onClick,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: isReverse ? "row-reverse" : "row",
        alignItems: "center",
        gap: "20px",
        marginBottom: "60px",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      {/* Contenedor de Imagen y Botón */}
      <div
        style={{
          flex: 1,
          minWidth: "300px",
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "440px",
            height: "264px",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 440px"
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <Button
          type="primary"
          size="large"
          className="feature-button" // Nueva clase
          style={{
            backgroundColor: "#433409",
            border: "none",
            borderRadius: "20px",
            marginTop: "10px",
            width: "150px",
          }}
          onClick={onClick}
        >
          <PiShoppingCartSimpleFill size={20} style={{ color: "#FFE4AA" }} />
          {product.price}
        </Button>
      </div>

      {/* Contenedor de Descripción */}
      <div
        style={{
          flex: 1,
          minWidth: "300px",
          maxWidth: "600px",
          padding: "0 20px",
          textAlign: isReverse ? "right" : "left",
        }}
      >
        <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "15px" }}>
          {product.name}
        </h3>
        <p style={{ marginBottom: "10px" }}>{product.details}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductHighlight;