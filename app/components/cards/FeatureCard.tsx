import React from 'react';
import { Button } from 'antd';
import { PiShoppingCartSimpleFill } from 'react-icons/pi';
import { MdDiscount, MdOutlineNewReleases } from 'react-icons/md';
import Image from 'next/image';

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
            style={{
                borderRadius: '10px',
                padding: '16px',
                textAlign: 'center',
                fontFamily: 'Judson, serif',
                color: '#7C593C',
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                maxWidth: '300px',
                margin: '0 auto',
                cursor: 'pointer',
            }}
            onClick={onClick}
        >
            {/* Contenedor para mantener la relación de aspecto */}
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    paddingBottom: '56.25%', // Relación de aspecto 16:9
                    borderRadius: '10px',
                    overflow: 'hidden',
                }}
            >
                {isPromo && (
                    <MdDiscount
                        style={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            fontSize: '24px',
                            color: '#FFE4AA',
                            zIndex: 10,
                        }}
                    />
                )}
                {isNew && (
                    <MdOutlineNewReleases
                        style={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            fontSize: '24px',
                            color: '#FFE4AA',
                            zIndex: 10,
                        }}
                    />
                )}
                <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                        objectFit: 'cover',
                        borderRadius: '10px',
                    }}
                />
            </div>

            {/* Información del producto */}
            {isPromo && originalPrice && (
                <div style={{ marginBottom: '10px' }}>
                    <span
                        style={{
                            textDecoration: 'line-through',
                            color: '#a0a0a0',
                            marginRight: '8px',
                            fontSize: '0.9rem',
                        }}
                    >
                        {originalPrice}
                    </span>
                </div>
            )}

            {/* Botón */}
            <Button
                type="primary"
                size="large"
                onClick={(event) => {
                    event.stopPropagation();
                    console.log('Compra realizada');
                }}
                style={{
                    backgroundColor: '#433409',
                    color: '#fff',
                    fontFamily: 'Judson, serif',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    border: 'none',
                    marginTop: '10px',
                    width: '40%',
                }}
            >
                <PiShoppingCartSimpleFill size={20} style={{ color: '#FFE4AA' }} />
                {price}
            </Button>
        </div>
    );
};

export default FeatureCard;
