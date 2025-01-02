import React from "react";
import Image from "next/legacy/image";

const FloatingImageContentBlock = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center ">
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-3xl font-bold mb-4 text-orange-500">
        You Wanna Pizza Me
        </h2>
        <p className="text-stone-400 mb-4">
        Dive into our irresistible range of pizzas, ready to be devoured!
        </p>
        <button className="bg-lime-600 text-stone-300 px-4 py-2 rounded hover:bg-emerald-800 transition duration-200">
          Order Now
        </button>
        <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-stone-400">
        Coming Soon: Our Exciting New Pizza Launch!
        </h3>

        <ul className="text-stone-400">
          <li>
            {" "}
            <strong className="text-yellow-600">Summer Blaze: </strong> Get a taste of the heat with our bold new summer-inspired pizza!
          </li>
          <br />

          <li>
            {" "}
            <strong className="text-orange-700">BBQ Bonanza: </strong> Sweet, smoky, and sizzling—our BBQ pizza will hit all the right notes!
          </li>
          <br />

          <li>
            {" "}
            <strong className="text-green-700">Tropical Escape: </strong> Escape to paradise with our tropical fruit and ham pizza!
          </li>
          <br />

          <li>
            {" "}
            <strong className="text-gray-500">Truffle Temptation: </strong> Indulge in luxury with our rich and decadent truffle pizza!
          </li>
          <br />

          <li>
            {" "}
            <strong className="text-red-700">Meat Lovers’ Dream: </strong> For the carnivores—packed with every meat you crave!
          </li>
          <br />
        </ul>
      </div>

      <div className="md:w-1/2 mt-6 md:mt-0">
        <Image
          src="/d-burger.jpeg"
          alt="delicious burger"
          layout="responsive"
          width={1200}
          height={800}
          className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7"
        />
      </div>
    </section>
  );
};

export default FloatingImageContentBlock;
