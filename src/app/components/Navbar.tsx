import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa6";
import Image from "next/legacy/image";

export default function Navbar() {
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-red-800">
            <div className="flex justify-between items-center">
              <div className="flex justify-items-center items-center gap-2">
                {/* logo burger */}
              
                <Image 
                src="/pizza-logo.png" 
                alt="pizza-logo" 
                width={54} 
                height={54} 
                className="transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-grab"/>

                {/* search icon */}
                <div style={{ position: "relative" }}>
                  <input
                    className="rounded-3xl py-3 px-3 outline-none text-xs bg-neutral-800 font-semibold w-[350px] pr-10 hidden lg:block md:block"
                    placeholder="Dive into the menu to find your favorite pizza."
                  />
                  <FaSearch className="w-5 h-5 text-orange-500 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block " />
                </div>
              </div>
              <div className="flex justify-center items-center gap-2">
                <FaHandPointRight className="w-5 h-5 text-amber-400 lightning-bolt-animation hidden lg:block md:block" />
                <p className="text-sm text-stone-200 hidden lg:block md:block">
                Order now and have it in your hands in
                  <span className="text-amber-400 font-semibold">
                    {" "}
                    15 minutes!
                  </span>
                </p>

                {/* cart icon */}
                <Image 
                src="/cart.png" 
                alt="shopping-cart" 
                width={34} 
                height={34} 
                className="transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-grab"/>
                
                <Image
                  className="inline-block w-8 h-8 pulse-border-glow-multi"
                  src="/avatar.png"
                  alt="user avatar"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
