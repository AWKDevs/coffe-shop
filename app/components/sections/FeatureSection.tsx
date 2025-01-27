"use client";


import React, { useState } from 'react';
import FeatureList from '../lists/FeatureList';
import ProductHighlight from '../highlights/ProductHighlight';
import { products, promotions, newProducts } from '../../constants/productData';
import ProductModal from '../modals/ProductModal';

const FeaturesSection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Control del modal
    const [selectedProduct, setSelectedProduct] = useState(null); // Producto seleccionado

    // Función para abrir el modal con el producto seleccionado
    const openModal = (product: any) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    // Función para cerrar el modal
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
                <ProductHighlight product={products[0]} onClick={() => openModal(products[0])} />
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
                <ProductHighlight product={products[1]} isReverse onClick={() => openModal(products[1])} />
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
                <h3>Sabor y calidad al mejor precio. Aprovecha nuestras ofertas especiales y disfruta más por menos. ¡Consiente tu antojo sin preocuparte por el bolsillo!</h3>
                <FeatureList
                    items={promotions.map((promo) => ({
                        id: promo.id,
                        name: promo.name,
                        image: promo.image,
                        price: promo.discountedPrice, // Asignar discountedPrice como price
                        isPromo: true,
                        originalPrice: promo.originalPrice,
                        details: promo.details || 'Detalles no disponibles.', // Agrega un valor predeterminado
                        description: promo.description || 'Descripción no disponible.', // Agrega un valor predeterminado
                        onClick: () => openModal(promo), // Abrir modal al hacer clic
                    }))}
                />
            </section>

            {/* Los Nuevos */}
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
                    Los Nuevos
                </h2>
                <h3>Descubre nuestras más recientes creaciones diseñadas para sorprender tu paladar. Innovación, sabor y calidad en cada producto que se suma a nuestra colección. ¡No te quedes sin probarlos!</h3>
                <FeatureList
                    items={newProducts.map((newProduct) => ({
                        ...newProduct,
                        isNew: true,
                        onClick: () => openModal(newProduct), // Abrir modal al hacer clic
                    }))}
                />
            </section>

            {/* Modal para mostrar producto seleccionado */}
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
