// components/cards/FeatureCard.tsx
import React from 'react';
import { PiShoppingCartSimpleFill } from 'react-icons/pi';
import { MdDiscount, MdOutlineNewReleases } from 'react-icons/md';
import Image from 'next/image';
import Button from '../../components/ui/Button';

interface FeatureCardProps {
  name: string;
  image: string;
  price: string;
  isNew?: boolean;
  isPromo?: boolean;
  originalPrice?: string;
  onClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  name,
  image,
  price,
  isNew = false,
  isPromo = false,
  originalPrice,
  onClick,
}) => {
  return (
    <div
      className="rounded-lg p-4 text-center font-[Judson] text-[#7C593C] relative overflow-hidden cursor-pointer max-w-[300px] mx-auto w-full"
      onClick={onClick}
    >
      {/* Contenedor para mantener la relación de aspecto */}
      <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden">
        {isPromo && (
          <MdDiscount className="absolute top-2 left-2 z-10 text-[24px] text-[#FFE4AA]" />
        )}
        {isNew && (
          <MdOutlineNewReleases className="absolute top-2 left-2 z-10 text-[24px] text-[#FFE4AA]" />
        )}
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-lg"
        />
      </div>

      {/* Información del producto */}
      {isPromo && originalPrice && (
        <div className="mb-2">
          <span className="line-through text-gray-400 mr-2 text-sm">
            {originalPrice}
          </span>
        </div>
      )}

      {/* Botón de compra utilizando el componente Button reutilizable */}
      <Button
        onClick={(event) => {
          event.stopPropagation();
          console.log('Compra realizada');
        }}
        icon={<PiShoppingCartSimpleFill size={20} style={{ color: '#FFE4AA' }} />}
        text={price}
        className="mt-2 w-[40%]"
      />
    </div>
  );
};

export default FeatureCard;
