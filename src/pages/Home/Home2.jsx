import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import FooterV2 from "../../components/Footer/FooterV2";
import Header from "../../components/Header/Header";
import { products } from "../Explore/itemdata";
import ProductItem from "../Explore/ProductItem";
import ProductItem2 from "../Explore/ProductItem2";
import VerticalProduct from "../Explore/VerticalProduct";
import FeaturedAuctions from "./FeaturedAuctions";
import ProductSlider from "./ProductSlider";
import SwiperSlider from "./SwiperSlider";

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
      <section className="product-section relative">
        <div className="container mx-auto relative px-4 z-10">
          <div className="section-title flex flex-wrap items-center justify-between mb-8 lg:mb-14">
            <div className="flex items-center mb-3">
              <span className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg w-10 h-10 mr-4">
                <img
                  className="w-4 h-4"
                  src="assets/images/sec-icon3.svg"
                  alt="title"
                />
              </span>
              <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">
                Hot Auctions
              </h3>
            </div>
            <Link
              to="/explore"
              className="arrow-btn block bg-indigo-100 text-indigo-500 text-sm text-sm font-body font-bold rounded py-2 px-4 ml-14 transition duration-500 hover:bg-indigo-50"
            >
              See All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {products.slice(8).map((product, index) => (
              <VerticalProduct item={product} key={index} />
            ))}
          </div>
        </div>
      </section>
      {/*  ====================== Product Section =============================  */}
      <section className="product-section relative my-20 lg:my-32">
        <div className="container mx-auto relative px-4 z-10">
          <div className="section-title flex flex-wrap items-center justify-between mb-8 lg:mb-14">
            <div className="flex items-center mb-3">
              <span className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg w-10 h-10 mr-4">
                <img
                  className="w-4 h-4"
                  src="assets/images/sec-icon3.svg"
                  alt="title"
                />
              </span>
              <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">
                Seller Leaderboard
              </h3>
            </div>
            <Link
              to="/leaderboard"
              className="arrow-btn block bg-indigo-100 text-indigo-500 text-sm text-sm font-body font-bold rounded py-2 px-4 ml-14 transition duration-500 hover:bg-indigo-50"
            >
              See All
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            <div
              className="seller-box text-center rounded transition duration-500 hover:shadow-lg p-6"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <img
                    className="w-20 h-20 object-cover rounded-lg"
                    src="assets/images/author/1.jpg"
                    alt="title"
                  />
                  <span className="absolute bottom-2 -right-0">
                    <img
                      className="w-5 h-5"
                      src="assets/images/verified-icon.svg"
                      alt="title"
                    />
                  </span>
                </div>
              </div>
              <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                <Link to="/creator-published">Steven Robart</Link>
              </h6>
              <p className="font-body text-sm text-blueGray-600 mt-2">
                <img
                  className="w-4 h-4 inline-block mr-1"
                  src="assets/images/diamond-icon.svg"
                  alt="title"
                />{" "}
                Diamond Seller
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="font-body text-sm text-blueGray-400">Level</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    <img
                      className="w-3 h-3 mr-1"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />{" "}
                    8{" "}
                  </h5>
                </div>
                <div>
                  <p className="font-body text-sm text-blueGray-400">Items</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    {" "}
                    17{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div
              className="seller-box text-center rounded transition duration-500 hover:shadow-lg p-6"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <img
                    className="w-20 h-20 object-cover rounded-lg"
                    src="assets/images/author/2.jpg"
                    alt="title"
                  />
                  <span className="absolute bottom-2 -right-0">
                    <img
                      className="w-5 h-5"
                      src="assets/images/verified-icon.svg"
                      alt="title"
                    />
                  </span>
                </div>
              </div>
              <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                <Link to="/creator-published">Jenny Wilson</Link>
              </h6>
              <p className="font-body text-sm text-blueGray-600 mt-2">
                <img
                  className="w-6 h-6 inline-block mr-1"
                  src="assets/images/new-icon.svg"
                  alt="title"
                />{" "}
                New Seller
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="font-body text-sm text-blueGray-400">Level</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    <img
                      className="w-3 h-3 mr-1"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />{" "}
                    4{" "}
                  </h5>
                </div>
                <div>
                  <p className="font-body text-sm text-blueGray-400">Items</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    {" "}
                    15{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div
              className="seller-box text-center rounded transition duration-500 hover:shadow-lg p-6"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <img
                    className="w-20 h-20 object-cover rounded-lg"
                    src="assets/images/author/3.jpg"
                    alt="title"
                  />
                  <span className="absolute bottom-2 -right-0">
                    <img
                      className="w-5 h-5"
                      src="assets/images/verified-icon.svg"
                      alt="title"
                    />
                  </span>
                </div>
              </div>
              <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                <Link to="/creator-published">Guy Hawkins</Link>
              </h6>
              <p className="font-body text-sm text-blueGray-600 mt-2">
                <img
                  className="w-6 h-6 inline-block mr-1"
                  src="assets/images/new-icon.svg"
                  alt="title"
                />{" "}
                New Seller
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="font-body text-sm text-blueGray-400">Level</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    <img
                      className="w-3 h-3 mr-1"
                      src="assets/images/down-icon.svg"
                      alt="title"
                    />{" "}
                    7{" "}
                  </h5>
                </div>
                <div>
                  <p className="font-body text-sm text-blueGray-400">Items</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    {" "}
                    2{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div
              className="seller-box text-center rounded transition duration-500 hover:shadow-lg p-6"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <img
                    className="w-20 h-20 object-cover rounded-lg"
                    src="assets/images/author/4.jpg"
                    alt="title"
                  />
                  <span className="absolute bottom-2 -right-0">
                    <img
                      className="w-5 h-5"
                      src="assets/images/verified-icon.svg"
                      alt="title"
                    />
                  </span>
                </div>
              </div>
              <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                <Link to="/creator-published">Robert Fox</Link>
              </h6>
              <p className="font-body text-sm text-blueGray-600 mt-2">
                <img
                  className="w-4 h-4 inline-block mr-1"
                  src="assets/images/diamond-icon.svg"
                  alt="title"
                />{" "}
                Diamond Seller
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="font-body text-sm text-blueGray-400">Level</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    <img
                      className="w-3 h-3 mr-1"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />{" "}
                    8{" "}
                  </h5>
                </div>
                <div>
                  <p className="font-body text-sm text-blueGray-400">Items</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    {" "}
                    14{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div
              className="seller-box text-center rounded transition duration-500 hover:shadow-lg p-6"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <img
                    className="w-20 h-20 object-cover rounded-lg"
                    src="assets/images/author/5.jpg"
                    alt="title"
                  />
                  <span className="absolute bottom-2 -right-0">
                    <img
                      className="w-5 h-5"
                      src="assets/images/verified-icon.svg"
                      alt="title"
                    />
                  </span>
                </div>
              </div>
              <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                <Link to="/creator-published">Cody Fisher</Link>
              </h6>
              <p className="font-body text-sm text-blueGray-600 mt-2">
                <img
                  className="w-6 h-6 inline-block mr-1"
                  src="assets/images/new-icon.svg"
                  alt="title"
                />{" "}
                New Seller
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="font-body text-sm text-blueGray-400">Level</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    <img
                      className="w-3 h-3 mr-1"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />{" "}
                    2{" "}
                  </h5>
                </div>
                <div>
                  <p className="font-body text-sm text-blueGray-400">Items</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-900">
                    {" "}
                    23{" "}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  ====================== Product Section =============================  */}
      <section className="product-section relative py-20 lg:py-32 bg-blueGray-100">
        <div className="container mx-auto relative px-4 z-10">
          <div className="section-title flex flex-wrap items-center justify-between mb-8 lg:mb-14">
            <div className="flex items-center mb-3">
              <span className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg w-10 h-10 mr-4">
                <img
                  className="w-5 h-5"
                  src="assets/images/sec-icon2.svg"
                  alt="title"
                />
              </span>
              <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">
                Live Auctions
              </h3>
            </div>
            <Link
              to="/explore"
              className="arrow-btn block bg-indigo-100 text-indigo-500 text-sm text-sm font-body font-bold rounded py-2 px-4 ml-14 transition duration-500 hover:bg-indigo-50"
            >
              See All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductItem2 key={index} item={product} />
            ))}
          </div>
        </div>
      </section>
      {/*  ====================== Blog Section =============================  */}
      <section className="blog-section relative my-20 lg:my-32">
        <div className="container mx-auto relative px-4 z-10">
          <div className="section-title flex flex-wrap items-center justify-between mb-8 lg:mb-14">
            <div className="flex items-center mb-3">
              <span className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg w-10 h-10 mr-4">
                <img
                  className="w-4 h-4"
                  src="assets/images/sec-icon3.svg"
                  alt="title"
                />
              </span>
              <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">
                Latest Blog
              </h3>
            </div>
            <Link
              to="/blog"
              className="arrow-btn block bg-indigo-100 text-indigo-500 text-sm text-sm font-body font-bold rounded py-2 px-4 ml-14 transition duration-500 hover:bg-indigo-50"
            >
              See All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            <div
              className="blog-box shadow bg-white md:flex p-6 rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="flex-shrink-0 blog-image relative rounded overflow-hidden mb-4 md:mb-0">
                <img
                  className="w-full md:h-40 md:w-40 rounded object-cover"
                  src="assets/images/product/5.jpg"
                  alt="title"
                />
              </div>
              <div className="blog-content flex flex-col flex-grow justify-center md:pl-6">
                <div>
                  <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/single">
                      Top 10 NFT Projects That the Internet
                    </Link>
                  </h4>
                </div>
                <div className="mt-4">
                  <Link
                    className="readmore-btn font-body font-normal text-indigo-500 transition duration-500 hover:text-indigo-500 underline-hover"
                    to="/single"
                  >
                    Read More
                    <img
                      className="inline-block w-3 ml-2 mb-1"
                      src="assets/images/readmore-icon.svg"
                      alt="title"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="blog-box shadow bg-white md:flex p-6 rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="flex-shrink-0 blog-image relative rounded overflow-hidden mb-4 md:mb-0">
                <img
                  className="w-full md:h-40 md:w-40 rounded object-cover"
                  src="assets/images/product/6.jpg"
                  alt="title"
                />
              </div>
              <div className="blog-content flex flex-col flex-grow justify-center md:pl-6">
                <div>
                  <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/single">
                      Honoring Black History with Toddlers
                    </Link>
                  </h4>
                </div>
                <div className="mt-4">
                  <Link
                    className="readmore-btn font-body font-normal text-indigo-500 transition duration-500 hover:text-indigo-500 underline-hover"
                    to="/single"
                  >
                    Read More
                    <img
                      className="inline-block w-3 ml-2 mb-1"
                      src="assets/images/readmore-icon.svg"
                      alt="title"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="blog-box shadow bg-white md:flex p-6 rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="flex-shrink-0 blog-image relative rounded overflow-hidden mb-4 md:mb-0">
                <img
                  className="w-full md:h-40 md:w-40 rounded object-cover"
                  src="assets/images/product/8.jpg"
                  alt="title"
                />
              </div>
              <div className="blog-content flex flex-col flex-grow justify-center md:pl-6">
                <div>
                  <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/single">NFT Market – A Big Benefits</Link>
                  </h4>
                </div>
                <div className="mt-4">
                  <Link
                    className="readmore-btn font-body font-normal text-indigo-500 transition duration-500 hover:text-indigo-500 underline-hover"
                    to="/single"
                  >
                    Read More
                    <img
                      className="inline-block w-3 ml-2 mb-1"
                      src="assets/images/readmore-icon.svg"
                      alt="title"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  ====================== Product Section =============================  */}
      <FeaturedAuctions products={products} />

      {/*  ====================== Footer Section =============================  */}
      <FooterV2 />
    </div>
  );
};

export default Home2;
