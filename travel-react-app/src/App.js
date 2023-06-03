import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Destination from "./components/destinations/Destination";
import Search from "./components/search/Search";
import Select from "./components/selects/Select";
import ImgCarousel from "./components/carousel/ImgCarousel";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destination />
      <Search />
      <Select />
      <ImgCarousel />
      <Footer />
    </div>
  );
}

export default App;
