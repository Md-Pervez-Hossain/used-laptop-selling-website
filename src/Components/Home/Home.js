import React from "react";
import Advertisement from "./Advertisement/Advertisement";
import HeroBanner from "./HeroBanner";
import LaptopCategories from "./LaptopCategories";

const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <Advertisement></Advertisement>
      <LaptopCategories></LaptopCategories>
    </div>
  );
};

export default Home;
