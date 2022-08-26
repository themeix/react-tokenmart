import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import AuctionSlider from "../AuctionSlider";
import BlogSection from "./BlogSection";
import CategorySection from "./CategorySection";
import Hero from "./Hero";
import HowWork from "./HowWork";
import ProductsSection from "./ProductsSection";

const Home3 = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home V3|| Tokenmart - Largest online marketplace</title>
      </Helmet>
      <Header />
      {/*  ====================== Hero Section =============================  */}
      <Hero />
      {/*  ====================== Product Section =============================  */}
      <AuctionSlider />

      {/*  ====================== Category Section =============================  */}
      <CategorySection />
      {/*  ====================== Product Section =============================  */}
      <ProductsSection />
      {/*  ====================== How Work Section =============================  */}
      <HowWork />
      {/*  ====================== Blog Section =============================  */}
      <BlogSection />
      {/*  ====================== Footer Section =============================  */}
      <Footer />
    </div>
  );
};

export default Home3;
