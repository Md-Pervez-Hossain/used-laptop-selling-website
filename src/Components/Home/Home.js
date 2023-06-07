import React from "react";
import Advertisement from "./Advertisement/Advertisement";
import HeroBanner from "./HeroBanner";
import LaptopCategories from "./LaptopCategories";
import Contact from "../Contact/Contact";
import TrastedBatch from "../TrastedBatch/TrastedBatch";
import ShowLaptopBlog from "../LaptopBlog/ShowLaptopBlog";
import Transportation from "../Transportation/Transportation";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import FAQSection from "../FAQSection/FAQSection";
import TestimonialSlider from "../Testimonial/TestimonialSlider";

const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <LaptopCategories></LaptopCategories>
      <Advertisement></Advertisement>
      <TrastedBatch></TrastedBatch>
      <ShowLaptopBlog></ShowLaptopBlog>
      <Transportation></Transportation>
      <FeaturedProduct></FeaturedProduct>
      <FAQSection></FAQSection>
      <TestimonialSlider></TestimonialSlider>
      <Contact></Contact>
    </div>
  );
};

export default Home;
