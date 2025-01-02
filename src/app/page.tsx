import React from "react";
import Navbar from "./components/Navbar";
import Progressor from "./components/Progressor";
import Carousel from "./components/Carousel";
import ProductList from "./components/ProductList";
import Banner from "./components/Banner";
import Offer from "./components/Offer";
import Card from "./components/Card";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
import Menu from "./components/MenuItems";


export default function App() {
  return (
    <div className="bg-gradient-to-r from-black to-stone-600 min-h-screen text-stone-200">
      <Navbar />
      <Carousel />
      <Progressor />
      <Banner />
      <ProductList />
      <Menu />
      <Offer />
      <Card />
      <Reservation />
      <Footer />
    </div>
  );
}
