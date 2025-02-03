"use client"

import FeatureCard from "../components/cards/FeatureCard";

const itemsCart = 3;

const Cart: React.FC = () => {
    return(
        <div>
            <span className="flex w-full items-start">Carrito ({itemsCart} artículos)</span>
            <FeatureCard name={"Pastelito"} image={"/images/products/promo1.png"} price={"65"} />
        </div>
    );
};

export default Cart;
