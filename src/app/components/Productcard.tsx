import { Product } from "@/types/types";
import React from "react";
import Image from "next/legacy/image";

interface ProductCardProps extends Product {
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  onAddToCart,
}) => {
  return (
    <div className="bg-red-900 bg-opacity-50  p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-grab">
      <div className="relative w-full h-56 mb-4">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-md transform transition-all duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-lg text-slate-400 mb-4">{price}</p>

      <button
        onClick={() => onAddToCart({ id, name, price, image })}
        className="bg-amber-500 text-stone-700 px-4 rounded-lg text-lg shadow-md hover:bg-lime-600 transition duration-300 ease-in-out cursor-grabbing"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
