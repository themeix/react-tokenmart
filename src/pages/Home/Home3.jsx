import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BlogCard from "../Blog/BlogCard";
import { blogs } from "../Blog/blogdata";
import { products } from "../Explore/itemdata";
import ProductItem3 from "../Explore/ProductItem3";
import AuctionSlider from "./AuctionSlider";

const Home3 = () => {
  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Home V3|| Tokenmart - Largest online marketplace</title>
            </Helmet>
      <Header />
      {/*  ====================== Hero Section =============================  */}
      <section className="hero-section relative hero-shape pt-40 pb-24 lg:pt-64 lg:pb-56">
        <div className="container mx-auto relative px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold font-display text-blueGray-900 mb-10">
              Discover, collect, and sell extraordinary NFTs
            </h1>
            <p className="text-xl font-body font-normal text-blueGray-600 mb-4">
              A peer-to-peer marketplace for NFTs, rare digital items and crypto
              collectibles. Buy, sell, auction, and discover CryptoKitties,
              Decentraland.
            </p>
            <div className="flex flex-wrap items-center justify-center">
              <Link
                to="/explore"
                className="btn block text-white font-body font-bold rounded py-4 px-7 mx-3 mt-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
              >
                Explore Now
              </Link>
              <Link
                to="/create-item"
                className="btn block bg-blueGray-900 text-white font-body font-bold rounded py-4 px-7 mx-3 mt-4 transition duration-500 hover:bg-indigo-500"
              >
                Create Product
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*  ====================== Product Section =============================  */}
      <AuctionSlider />

      {/*  ====================== Category Section =============================  */}
      <section className="category-section relative my-20 lg:my-32">
        <div className="container mx-auto relative px-4 z-10">
          <div className="section-title relative flex flex-wrap items-center justify-between border-b border-blueGray-300 pb-6 mb-8 lg:mb-14">
            <div>
              <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">
                Popular Collections
              </h3>
              <span className="w-20	h-1.5	absolute -bottom-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg" />
            </div>
            <Link
              to="/explore"
              className="arrow-btn block bg-indigo-100 text-indigo-500 text-sm text-sm font-body font-bold rounded py-2 px-4 transition duration-500 hover:bg-indigo-50"
            >
              See All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div
              className="category-box relative rounded overflow-hidden"
              data-aos="fade-up"
            >
              <img
                className="w-full sm:h-72 object-cover"
                src="assets/images/category/1.jpg"
                alt="title"
              />
              <div className="category-content text-center bg-white shadow transition duration-500 hover:shadow-lg rounded absolute bottom-8 right-8 left-8 p-4">
                <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                  <Link to="/explore">Cartoon Art</Link>
                </h4>
                <p className="font-body text-blueGray-600">12 Items</p>
              </div>
            </div>
            <div
              className="category-box relative rounded overflow-hidden"
              data-aos="fade-up"
            >
              <img
                className="w-full sm:h-72 object-cover"
                src="assets/images/category/2.jpg"
                alt="title"
              />
              <div className="category-content text-center bg-white shadow transition duration-500 hover:shadow-lg rounded absolute bottom-8 right-8 left-8 p-4">
                <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                  <Link to="/explore">Superheros</Link>
                </h4>
                <p className="font-body text-blueGray-600">12 Items</p>
              </div>
            </div>
            <div
              className="category-box relative rounded overflow-hidden"
              data-aos="fade-up"
            >
              <img
                className="w-full sm:h-72 object-cover"
                src="assets/images/category/3.jpg"
                alt="title"
              />
              <div className="category-content text-center bg-white shadow transition duration-500 hover:shadow-lg rounded absolute bottom-8 right-8 left-8 p-4">
                <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                  <Link to="/explore">Oilprint</Link>
                </h4>
                <p className="font-body text-blueGray-600">12 Items</p>
              </div>
            </div>
            <div
              className="category-box relative rounded overflow-hidden"
              data-aos="fade-up"
            >
              <img
                className="w-full sm:h-72 object-cover"
                src="assets/images/category/4.jpg"
                alt="title"
              />
              <div className="category-content text-center bg-white shadow transition duration-500 hover:shadow-lg rounded absolute bottom-8 right-8 left-8 p-4">
                <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                  <Link to="/explore">Virtual Worlds</Link>
                </h4>
                <p className="font-body text-blueGray-600">12 Items</p>
              </div>
            </div>
            <div
              className="category-box relative rounded overflow-hidden"
              data-aos="fade-up"
            >
              <img
                className="w-full sm:h-72 object-cover"
                src="assets/images/category/5.jpg"
                alt="title"
              />
              <div className="category-content text-center bg-white shadow transition duration-500 hover:shadow-lg rounded absolute bottom-8 right-8 left-8 p-4">
                <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                  <Link to="/explore">Oil Paint</Link>
                </h4>
                <p className="font-body text-blueGray-600">12 Items</p>
              </div>
            </div>
            <div
              className="category-box relative rounded overflow-hidden"
              data-aos="fade-up"
            >
              <img
                className="w-full sm:h-72 object-cover"
                src="assets/images/category/6.jpg"
                alt="title"
              />
              <div className="category-content text-center bg-white shadow transition duration-500 hover:shadow-lg rounded absolute bottom-8 right-8 left-8 p-4">
                <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                  <Link to="/explore">Collectibles</Link>
                </h4>
                <p className="font-body text-blueGray-600">12 Items</p>
              </div>
            </div>
            <div
              className="category-box relative rounded overflow-hidden"
              data-aos="fade-up"
            >
              <img
                className="w-full sm:h-72 object-cover"
                src="assets/images/category/7.jpg"
                alt="title"
              />
              <div className="category-content text-center bg-white shadow transition duration-500 hover:shadow-lg rounded absolute bottom-8 right-8 left-8 p-4">
                <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                  <Link to="/explore">Trading Card</Link>
                </h4>
                <p className="font-body text-blueGray-600">12 Items</p>
              </div>
            </div>
            <div
              className="category-box relative rounded overflow-hidden"
              data-aos="fade-up"
            >
              <img
                className="w-full sm:h-72 object-cover"
                src="assets/images/category/8.jpg"
                alt="title"
              />
              <div className="category-content text-center bg-white shadow transition duration-500 hover:shadow-lg rounded absolute bottom-8 right-8 left-8 p-4">
                <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                  <Link to="/explore">Rare Collections</Link>
                </h4>
                <p className="font-body text-blueGray-600">12 Items</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  ====================== Product Section =============================  */}
      <section className="product-section relative py-20 lg:py-32 bg-indigo-50">
        <div className="container mx-auto relative px-4 z-10">
          <div className="section-title relative flex flex-wrap items-center justify-between border-b border-blueGray-300 pb-6 mb-8 lg:mb-14">
            <div>
              <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">
                News Arrivals
              </h3>
              <span className="w-20	h-1.5	absolute -bottom-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg" />
            </div>
            <Link
              to="/explore"
              className="arrow-btn block bg-indigo-100 text-indigo-500 text-sm text-sm font-body font-bold rounded py-2 px-4 transition duration-500 hover:bg-indigo-50"
            >
              See All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductItem3 key={index} item={product} />
            ))}
          </div>
        </div>
      </section>
      {/*  ====================== How Work Section =============================  */}
      <section className="how-work-section relative my-20 lg:my-32">
        <div className="container mx-auto relative px-4 z-10">
          <div className="section-title relative flex flex-wrap items-center justify-between border-b border-blueGray-300 pb-6 mb-8 lg:mb-14">
            <div>
              <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">
                How It’s Works
              </h3>
              <span className="w-20	h-1.5	absolute -bottom-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="how-work-box flex flex-col justify-between rounded transition duration-500 hover:shadow-lg p-6">
              <div className="how-work-icon relative rounded overflow-hidden pb-4">
                <img
                  className="w-14 h-14 object-contain"
                  src="assets/images/how-work-icon.svg"
                  alt="title"
                />
              </div>
              <div className="how-work-content">
                <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                  <Link to="/single">Set up your wallet</Link>
                </h3>
                <p className="font-body text-blueGray-600 mt-2">
                  Once you’ve set up your wallet of choice, connect it to
                  OpenSea by click the NFT Marketplace.
                </p>
              </div>
            </div>
            <div className="how-work-box flex flex-col justify-between rounded transition duration-500 hover:shadow-lg p-6">
              <div className="how-work-icon relative rounded overflow-hidden pb-4">
                <img
                  className="w-14 h-14 object-contain"
                  src="assets/images/how-work-icon2.svg"
                  alt="title"
                />
              </div>
              <div className="how-work-content">
                <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                  <Link to="/single">Create your collection</Link>
                </h3>
                <p className="font-body text-blueGray-600 mt-2">
                  Once you’ve set up your wallet of choice, connect it to
                  OpenSea by click the NFT Marketplace.
                </p>
              </div>
            </div>
            <div className="how-work-box flex flex-col justify-between rounded transition duration-500 hover:shadow-lg p-6">
              <div className="how-work-icon relative rounded overflow-hidden pb-4">
                <img
                  className="w-14 h-14 object-contain"
                  src="assets/images/how-work-icon3.svg"
                  alt="title"
                />
              </div>
              <div className="how-work-content">
                <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                  <Link to="/single">Add your NFTs</Link>
                </h3>
                <p className="font-body text-blueGray-600 mt-2">
                  Once you’ve set up your wallet of choice, connect it to
                  OpenSea by click the NFT Marketplace.
                </p>
              </div>
            </div>
            <div className="how-work-box flex flex-col justify-between rounded transition duration-500 hover:shadow-lg p-6">
              <div className="how-work-icon relative rounded overflow-hidden pb-4">
                <img
                  className="w-14 h-14 object-contain"
                  src="assets/images/how-work-icon4.svg"
                  alt="title"
                />
              </div>
              <div className="how-work-content">
                <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                  <Link to="/single">List them for sale</Link>
                </h3>
                <p className="font-body text-blueGray-600 mt-2">
                  Once you’ve set up your wallet of choice, connect it to
                  OpenSea by click the NFT Marketplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  ====================== Blog Section =============================  */}
      <section className="blog-section my-20 lg:my-32">
        <div className="container mx-auto relative px-4 z-10">
          <div className="section-title relative flex flex-wrap items-center justify-between border-b border-blueGray-300 pb-6 mb-8 lg:mb-14">
            <div>
              <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">
                Latest Blog
              </h3>
              <span className="w-20	h-1.5	absolute -bottom-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg" />
            </div>
            <Link
              to="/blog"
              className="arrow-btn block bg-indigo-100 text-indigo-500 text-sm text-sm font-body font-bold rounded py-2 px-4 transition duration-500 hover:bg-indigo-50"
            >
              See All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {blogs.slice(0,4).map((blog, index) => (
            <BlogCard item={blog} key={index} />
          ))}
          </div>
       
        </div>
      </section>
      {/*  ====================== Footer Section =============================  */}
      <Footer />
    </div>
  );
};

export default Home3;
