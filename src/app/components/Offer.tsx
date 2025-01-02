"use client";
import React from "react";

type Offer = {
  title: string;
  description: string;
};

const SpecialOffers: React.FC = () => {
  const offers: Offer[] = [
    {
      title: "Happy Hour",
      description: "Happiness is a slice of pizza🍕. Grab yours during Happy Hour and save big!🍻",
    },

    {
      title: "Family Meal Deal",
      description:
        "Perfect for the whole family👨‍👩‍👧‍👦 – our Family Meal Deal brings joy, pizza🍕, and great memories!",
    },

    {
      title: "Midnight Munchies Deals",
      description:
        "The night🌙 is young, and so are your cravings! Get a pizza🍕 delivered during our Midnight Munchies hours!",
    },
  ];

  const handleOfferClick = (description: string) => {
    alert(description);
  };

  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-orange-500">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <button
              key={index}
              onClick={() => handleOfferClick(offer.description)}
              className="bg-amber-200 shadow-lg rounded-lg text-center hover:bg-stone-800 transition duration-300 transform hover:scale-105 cursor-grab"
            >
              <h3 className="text-2xl font-semibold text-stone-600">
                {offer.title}
              </h3>
              <p className="text-red-700 mt-3">{offer.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
