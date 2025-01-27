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
    details: string;
    description: string;
    onClick?: () => void; // Nueva prop para manejar clics
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    name,
    image,
    price,
    isNew = false,
    isPromo = false,
    originalPrice,
    onClick = () => {},
}) => {
    // Estilos comunes
    const containerStyle: React.CSSProperties = {
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
        cursor: 'pointer', // Indicar que es clicable
    };

    const imageContainerStyle: React.CSSProperties = {
        position: 'relative',
        width: '100%',
        height: '200px',
        borderRadius: '10px',
        overflow: 'hidden',
    };

    const iconStyle: React.CSSProperties = {
        position: 'absolute',
        top: '10px',
        left: '10px',
        fontSize: '24px',
        color: '#FFE4AA',
        zIndex: 10,
    };

    const buttonStyle: React.CSSProperties = {
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
    };

    return (
        <div style={containerStyle} onClick={onClick}>
            {/* Imagen con íconos */}
            <div style={imageContainerStyle}>
                {isPromo && <MdDiscount style={iconStyle} />}
                {isNew && <MdOutlineNewReleases style={iconStyle} />}
                <Image
                    src={image}
                    alt={name}
                    width={280}
                    height={200}
                    style={{
                        width: '100%',
                        height: '100%',
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
            <Button type="primary" size="large" style={buttonStyle}
            onClick={(event) => {
                event.stopPropagation(); // Detener la propagación del evento
                console.log('Compra realizada');
            }}
            >
                <PiShoppingCartSimpleFill size={20} style={{ color: '#FFE4AA' }} />
                {price}
            </Button>
        </div>
    );
};

export default FeatureCard;
