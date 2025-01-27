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
    }>;
}

const FeatureList: React.FC<FeatureListProps> = ({ items }) => {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '16px',
            }}
        >
            {items.map((item) => (
                <FeatureCard
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    isPromo={item.isPromo}
                    isNew={item.isNew}
                    originalPrice={item.originalPrice}
                />
            ))}
        </div>
    );
};

export default FeatureList;
