import React from "react";
import { Helmet } from "react-helmet-async";

import FooterV2 from "../../../components/Footer/FooterV2";
import Header from "../../../components/Header/Header";
import { products } from "../../Explore/itemdata";
import FeaturedAuctions from "../FeaturedAuctions";
import ProductsSection from "../Home/ProductsSection";
import SwiperSlider from "../SwiperSlider";
import BlogSections from "./BlogSections";
import HotAuctions from "./HotAuctions";
import SellerLeaderBoard from "./SellerLeaderBoard";

const Home2 = () => {
  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Home V2 || Tokenmart - Largest online marketplace</title>
            </Helmet>
      <Header />
      {/*  ====================== Hero Section =============================  */}

      <SwiperSlider />

      {/*  ====================== Product Section =============================  */}
      <HotAuctions/>
      {/*  ====================== Product Section =============================  */}
       <SellerLeaderBoard/>
      {/*  ====================== Product Section =============================  */}
      <ProductsSection/>
      {/*  ====================== Blog Section =============================  */}
      <BlogSections/>
      {/*  ====================== Product Section =============================  */}
      <FeaturedAuctions products={products} />

      {/*  ====================== Footer Section =============================  */}
      <FooterV2 />
    </div>
  );
};

export default Home2;
