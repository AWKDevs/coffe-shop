import React from 'react';
import FeatureCard from '../cards/FeatureCard';

interface FeatureListProps {
    items: Array<{
        id: number;
        name: string;
        image: string;
        price: string;
        isPromo?: boolean;
        isNew?: boolean;
        originalPrice?: string;
        details: string;
        description: string;
        onClick?: () => void; // Nueva propiedad para manejar el clic
    }>;
}

const FeatureList: React.FC<FeatureListProps> = ({ items }) => {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '5px',
            }}
        >
            {items.map((item) => (
                <div
                    key={item.id}
                    onClick={item.onClick} // Manejar el clic desde aquí
                    style={{
                        cursor: 'pointer', // Cambiar el cursor a puntero para indicar interactividad
                    }}
                >
                    <FeatureCard
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        isPromo={item.isPromo}
                        isNew={item.isNew}
                        originalPrice={item.originalPrice}
                        details={item.details}
                        description={item.description}
                    />
                </div>
            ))}
        </div>
    );
};

export default FeatureList;
