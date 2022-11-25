import React from "react";
import About from "./About";
import Advertisement from "./Advertisement/Advertisement";
import HeroBanner from "./HeroBanner";
import LaptopCategories from "./LaptopCategories";

const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <Advertisement></Advertisement>
      <LaptopCategories></LaptopCategories>
      <About></About>
    </div>
  );
};

export default Home;
