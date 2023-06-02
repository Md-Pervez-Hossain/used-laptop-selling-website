import React from "react";
import About from "./About";
import Advertisement from "./Advertisement/Advertisement";
import HeroBanner from "./HeroBanner";
import LaptopCategories from "./LaptopCategories";
import Contact from "../Contact/Contact";
import TrastedBatch from "../TrastedBatch/TrastedBatch";
import ShowLaptopBlog from "../LaptopBlog/ShowLaptopBlog";
import Transportation from "../Transportation/Transportation";

const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <About></About>
      <Advertisement></Advertisement>
      <LaptopCategories></LaptopCategories>
      <TrastedBatch></TrastedBatch>
      <ShowLaptopBlog></ShowLaptopBlog>
      <Transportation></Transportation>
      <Contact></Contact>
    </div>
  );
};

export default Home;
