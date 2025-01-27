import React from 'react';
import FeatureList from '../lists/FeatureList';
import ProductHighlight from '../highlights/ProductHighlight';
import { products, promotions, newProducts } from '../../constants/productData';

const FeaturesSection: React.FC = () => {
    return (
        <div style={{ margin: '0 auto', maxWidth: '1200px', padding: '40px 20px' }}>
            <section>
                <h2>Especialidad del mes</h2>
                <ProductHighlight product={products[0]} />
            </section>
            <section>
                <h2>El más vendido</h2>
                <ProductHighlight product={products[1]} isReverse />
            </section>
            <section>
                <h2>Promociones</h2>
                <FeatureList
                    items={promotions.map((promo) => ({
                        id: promo.id,
                        name: promo.name,
                        image: promo.image,
                        price: promo.discountedPrice, // Asignar discountedPrice como price
                        isPromo: true,
                        originalPrice: promo.originalPrice,
                    }))}
                />
            </section>
            <section>
                <h2>Los Nuevos</h2>
                <FeatureList
                    items={newProducts.map((newProduct) => ({
                        ...newProduct,
                        isNew: true,
                    }))}
                />
            </section>
        </div>
    );
};

export default FeaturesSection;
