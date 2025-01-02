import React from "react";

const ReservationSection = () => {
  return (
    <section className="bg-gradient-to-r from-black to bg-red-900 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-orange-500">
          {" "}
          Make A Reservation{" "}
        </h2>
        <form className="max-w-md mx-auto text-stone-300">
          <div className="mb-4 ">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-stone-700 border border-orange-500 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-stone-700 border border-orange-500 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="date"
              className="w-full p-3 bg-stone-700 border border-orange-500 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="time"
              className="w-full p-3 bg-stone-700 border border-orange-500 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <button className="bg-lime-700 text-stone-300 py-2 px-4 rounded-md hover:bg-red-700">
              Reserved Table
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReservationSection;
