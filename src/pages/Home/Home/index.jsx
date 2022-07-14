import React from "react";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import Hero from "./Hero";
import Category from "./Category";
import TopSellers from "./TopSellers";
import ProductsSection from "./ProductsSection";
import BlogsSection from "./BlogsSection";

const Home = () => {
  return (
    <>
      <div>
        <Header />
        {/*  ====================== Hero Section =============================  */}
        <Hero />

        {/*  ====================== Category Section =============================  */}
        <Category />

        {/*  ====================== Product Section =============================  */}
        <ProductsSection />

        {/*  ====================== Top Seller Section =============================  */}
        <TopSellers />
        {/*  ====================== Blog Section =============================  */}
        <BlogsSection />
        {/*  ====================== Footer Section =============================  */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
