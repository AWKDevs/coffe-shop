import React from 'react';
import { Button } from 'antd';
import { FiShoppingCart } from 'react-icons/fi';
import { MdDiscount, MdOutlineNewReleases } from 'react-icons/md';
import Image from 'next/image';

interface FeatureCardProps {
    name: string;
    image: string;
    price: string;
    isNew?: boolean;
    isPromo?: boolean;
    originalPrice?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ name, image, price, isNew, isPromo, originalPrice }) => {
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
            }}
        >
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    paddingBottom: '75%', // Relación de aspecto 4:3
                    borderRadius: '10px',
                    overflow: 'hidden',
                }}
            >
                {isPromo && (
                    <MdDiscount
                        style={{
                            position: 'absolute',
                            bottom: '10px',
                            left: '10px',
                            fontSize: '50px',
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
                            fontSize: '50px',
                            color: '#FFE4AA',
                            zIndex: 10,
                        }}
                    />
                )}
                <Image src={image} alt={name} width={600} height={400}
                style={{
                    objectFit: 'cover',
                    borderRadius: '15px',
                }}
                 />
            </div>
            <h3>{name}</h3>
            {isPromo && originalPrice && (
                <div style={{ marginBottom: '10px' }}>
                    <span style={{ textDecoration: 'line-through', color: '#a0a0a0', marginRight: '8px' }}>
                        {originalPrice} MXN
                    </span>
                </div>
            )}
            <Button
                type="primary"
                size="large"
                style={{
                    backgroundColor: '#433409',
                    color: '#fff',
                    fontFamily: 'Judson, serif',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    border: 'none',
                    width: '30%',
                    justifyContent: 'center',
                    marginTop: '10px',
                    borderRadius: '20px',
                }}
            >
                <FiShoppingCart size={20} style={{ color: '#FFE4AA' }} />
                {price}
            </Button>
        </div>
    );
};

export default FeatureCard;
