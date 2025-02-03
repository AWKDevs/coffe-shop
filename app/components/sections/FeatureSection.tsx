"use client";

import React, { useState } from 'react';
import FeatureList from '../lists/FeatureList';
import ProductHighlight from '../highlights/ProductHighlight';
import { products, promotions, newProducts } from '../../constants/productData';
import ProductModal from '../modals/ProductModal';

const FeaturesSection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const openModal = (product: any) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <div
            style={{
                margin: '0 auto',
                maxWidth: '1200px',
                padding: '40px 20px',
                width: '100%',
            }}
        >
            {/* Especialidad del mes */}
            <section
                style={{
                    marginBottom: '60px',
                    width: '100%',
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
                <ProductHighlight 
                    product={products[0]} 
                    onClick={() => openModal(products[0])} 
                />
            </section>

            {/* El más vendido */}
            <section
                style={{
                    marginBottom: '60px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    width: '100%',
                }}
            >
                <h2
                    style={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        fontFamily: 'Judson, serif',
                        color: '#7C593C',
                        width: '100%',
                    }}
                >
                    El más vendido
                </h2>
                <ProductHighlight 
                    product={products[1]} 
                    isReverse 
                    onClick={() => openModal(products[1])} 
                />
            </section>

            {/* Promociones */}
            <section
                style={{
                    marginBottom: '60px',
                    width: '100%',
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
                <h3 style={{ marginBottom: '30px', fontSize: '1.1rem' }}>
                    Sabor y calidad al mejor precio. Aprovecha nuestras ofertas especiales y disfruta más por menos. 
                    ¡Consiente tu antojo sin preocuparte por el bolsillo!
                </h3>
                <FeatureList
                    items={promotions.map((promo) => ({
                        id: promo.id,
                        name: promo.name,
                        image: promo.image,
                        price: promo.discountedPrice,
                        isPromo: true,
                        originalPrice: promo.originalPrice,
                        details: promo.details || 'Detalles no disponibles.',
                        description: promo.description || 'Descripción no disponible.',
                        onClick: () => openModal(promo),
                    }))}
                />
            </section>

            {/* Los Nuevos */}
            <section
                style={{
                    marginBottom: '60px',
                    width: '100%',
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
                <h3 style={{ marginBottom: '30px', fontSize: '1.1rem' }}>
                    Descubre nuestras más recientes creaciones diseñadas para sorprender tu paladar. 
                    Innovación, sabor y calidad en cada producto que se suma a nuestra colección. 
                    ¡No te quedes sin probarlos!
                </h3>
                <FeatureList
                    items={newProducts.map((newProduct) => ({
                        ...newProduct,
                        isNew: true,
                        onClick: () => openModal(newProduct),
                    }))}
                />
            </section>

            {/* Modal */}
            {selectedProduct && (
                <ProductModal
                    isOpen={isModalOpen}
                    product={selectedProduct}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

export default FeaturesSection;