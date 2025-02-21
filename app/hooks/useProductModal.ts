"use client";
import { useState } from "react";
import { Product } from "../constants/Product";

export default function useProductModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const openModal = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    return { isModalOpen, selectedProduct, openModal, closeModal };
}
