import React from 'react';
import FeatureList from '../lists/FeatureList';
import ProductHighlight from '../highlights/ProductHighlight';
import { products, promotions, newProducts } from '../../constants/productData';

const FeaturesSection: React.FC = () => {
    return (
        <div
            style={{
                margin: '0 auto',
                maxWidth: '1200px',
                padding: '40px 20px',
            }}
        >
            {/* Especialidad del mes */}
            <section
                style={{
                    marginBottom: '60px',
                }}
            >
                <h2
                    style={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        fontFamily: 'Judson, serif',
                        color: '#7C593C',
                    }}
                >
                    Especialidad del mes
                </h2>
                <ProductHighlight product={products[0]} />
            </section>

            {/* El más vendido */}
            <section
                style={{
                    marginBottom: '60px',
                }}
            >
                <h2
                    style={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        fontFamily: 'Judson, serif',
                        color: '#7C593C',
                        textAlign: 'right', // Alineado a la derecha
                    }}
                >
                    El más vendido
                </h2>
                <ProductHighlight product={products[1]} isReverse />
            </section>

            {/* Promociones */}
            <section
                style={{
                    marginBottom: '60px',
                }}
            >
                <h2
                    style={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        fontFamily: 'Judson, serif',
                        color: '#7C593C',
                    }}
                >
                    Promociones
                </h2>
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

            {/* Los Nuevos */}
            <section
                style={{
                    marginBottom: '60px',
                     // Margen izquierdo para alinear con el título
                }}
            >
                <h2
                    style={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        fontFamily: 'Judson, serif',
                        color: '#7C593C',
                    }}
                >
                    Los Nuevos
                </h2>
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
