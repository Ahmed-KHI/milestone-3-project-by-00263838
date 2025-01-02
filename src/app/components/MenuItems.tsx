"use client";
import { useState, useEffect } from "react";
import Image from "next/legacy/image";
import Productcard from "./Productcard";
import { Product } from "@/pages/types";

const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
 

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();

    // local storage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // cart visibility
  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  // checkout model
  const goToCheckout = () => {
    setIsCheckout(true);
  };

  // cart clear method
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="relative min-h-screen py-6">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
        style={{
          backgroundImage: "url('bg-image.jpg')",
        }}
      ></div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-orange-500 mb-4">
          You Wanna Pizza Me
          </h1>
          <p className="text-xl text-stone-300">
          Indulge in our top-rated pizzas, hot and fresh, just a click away!
          </p>
        </div>

        {/* Product Section */}

        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-orange-500">
          {products.map((product) => (
            <Productcard
              key={product.id}
              {...product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {/* Cart Section */}
        <div className="max-w-6xl mx-auto mt-8">
          <button
            onClick={toggleCart}
            className="bg-lime-700 text-stone-300 py-3 px-6 rounded-lg shadow-md hover:bg-emerald-800 transition duration-300 ease-out transform"
          >
            {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
          </button>

          {showCart && (
            <div className="mt-6 bg-stone-400 p-6 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold mb-4 text-red-700">
                Your Cart Items Includes:
              </h2>
              {cart.length > 0 ? (
                <div>
                  <ul>
                    {cart.map((product, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between mb-6 transform transition-all duration-300 ease-in-out"
                      >
                        <div className="relative w-20 h-40 sm:w-24">
                          <Image
                            src={product.image}
                            alt={product.name}
                            layout="fill"
                            objectFit="cover"
                            className="inline-block transition-transform duration-300 ease-in-out transform text-stone-900"
                          />
                        </div>
                        <span className="ml-4 text-lg font-medium text-stone-800">
                          {product.name} - ${product.price}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center mt-6 text-stone-800">
                    <span className="font-semibold text-xl">
                      Total: ${cart.reduce((total, product) => total + product.price, 0)}
                    </span>
                    <div>
                      <button
                        onClick={goToCheckout}
                        className="bg-lime-700 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-emerald-800 transition duration-300 ease-in-out text-stone-300 transform hover:scale-110"
                      >
                        Proceed To Checkout
                      </button>

                      <button
                        onClick={clearCart}
                        className="bg-red-600 py-3 px-8 rounded-lg ml-4 text-lg shadow-md hover:bg-red-800 transition duration-300 ease-in-out text-stone-300 transform hover:scale-110"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-lg text-red-600"> Your cart is empty</p>
              )}
            </div>
          )}
        </div>
        {/* checkout section */}

        {isCheckout && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-stone-700">
            <div className="bg-amber-100 p-8 rounded-lg shadow-lg w-full sm:w-96">
              <h2 className="text-4xl font-bold text-orange-500 mb-4">
                Checkout
              </h2>
              <p className="text-lg text-red-500">
                Please confirm your order before proceeding
              </p>
              <div className="mt-4">
                <ul>
                  {cart.map((product, index) => (
                    <li key={index} className="flex justify-between mb-4">
                      <span>{product.name}</span>
                      <span>{product.price}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between mt-4">
                  <span className="font-semibold">Total:</span>
                  <span className="font-semibold">
                    ${cart.reduce((total, product) => total + product.price, 0)}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setIsCheckout(false)}
                  className="bg-red-500 text-stone-300 py-2 px-6 rounded-lg text-lg shadow-md hover:bg-red-700 transition duration-300"
                >
                  Close
                </button>

                <button
                  onClick={() =>
                    alert("Order Confirm .. Will Deliver At Your Door Step!")
                  }
                  className="bg-lime-700 text-stone-300 py-2 px-6 rounded-lg text-lg shadow-md hover:bg-emerald-800 transition duration-300"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        )}

        {/* End Section */}
      </div>
    </div>
  );
};

export default Menu;
