"use client";

import React from "react";
import FeatureList from "../lists/FeatureList";
import ProductHighlight from "../highlights/ProductHighlight";
import useProductModal from "../../hooks/useProductModal";
import { products, promotions, newProducts } from "../../constants/productData";
import { sectionTitles } from "../../constants/sectionTitles";
import ProductModal from "../modals/ProductModal"; // Importación directa

const FeaturesSection: React.FC = () => {
    const { isModalOpen, selectedProduct, openModal, closeModal } = useProductModal();

    return (
        <div className="max-w-6xl mx-auto py-10 px-6">
            {/* Especialidad del mes */}
            <section className="mb-14">
                <h2 className="text-3xl font-bold text-primary">{sectionTitles.specialOfTheMonth}</h2>
                <ProductHighlight product={products[0]} onClick={() => openModal(products[0])} />
            </section>

            {/* El más vendido */}
            <section className="mb-14 text-right">
                <h2 className="text-3xl font-bold text-primary">{sectionTitles.bestSeller}</h2>
                <ProductHighlight product={products[1]} isReverse onClick={() => openModal(products[1])} />
            </section>

            {/* Promociones */}
            <section className="mb-14">
                <h2 className="text-3xl font-bold text-primary">{sectionTitles.promotions}</h2>
                <FeatureList
                    items={promotions.map((promo) => ({
                        ...promo,
                        price: promo.discountedPrice,
                        isPromo: true,
                        onClick: () => openModal(promo),
                    }))}
                />
            </section>

            {/* Los Nuevos */}
            <section className="mb-14">
                <h2 className="text-3xl font-bold text-primary">{sectionTitles.newArrivals}</h2>
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
                <ProductModal isOpen={isModalOpen} product={selectedProduct} onClose={closeModal} />
            )}
        </div>
    );
};

export default FeaturesSection;
