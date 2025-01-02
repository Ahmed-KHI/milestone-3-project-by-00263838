import Image from "next/legacy/image";
import React from "react";

export default function Banner() {
  return (
    <div className="relative overflow-hidden font-sans px-6 py-12 mb-7">
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/banner.jpg"
          alt="banner"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-orange-500 sm:text-5xl font-bold mb-4">
        Check Out Our Menu!
        </h2>
        <p className="text-stone-300 text-lg text-center mb-6 max-w-xl">
        Order Now and Enjoy Special Pizza Discounts!
        </p>

        <button
          type="button"
          className="bg-lime-600 text-stone-800 text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-red-600 transition duration-300"
        >
          Lunch Deals Start at 12PM!
        </button>
      </div>
    </div>
  );
}
