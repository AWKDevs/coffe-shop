import React from 'react';
import { Button } from 'antd';
import Image from 'next/image';
import { PiShoppingCartSimpleFill } from 'react-icons/pi';

interface ProductHighlightProps {
    product: {
        name: string;
        image: string;
        price: string;
        details: string;
        description: string;
    };
    isReverse?: boolean;
}

const ProductHighlight: React.FC<ProductHighlightProps> = ({ product, isReverse }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: isReverse ? 'row-reverse' : 'row',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '60px',
            }}
        >
            <div
                style={{
                    flex: 1,
                    position: 'relative',
                    width: '100%',
                    maxWidth: '600px',
                    borderRadius: '15px',
                    overflow: 'hidden',
                }}
            >
                <Image src={product.image} alt={product.name} width={600} height={400}
                style={{
                    objectFit: 'cover',
                    borderRadius: '15px',
                }}
                />
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
                    <PiShoppingCartSimpleFill size={20} style={{ color: '#FFE4AA' }} />
                    {product.price}
                </Button>
            </div>
            <div style={{ flex: 2, fontFamily: 'Judson, serif', color: '#7C593C' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{product.name}</h3>
                <p>{product.details}</p>
                <p>{product.description}</p>
            </div>
        </div>
    );
};

export default ProductHighlight;
