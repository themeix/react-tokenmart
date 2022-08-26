import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import FooterV2 from "../../components/Footer/FooterV2";
import Header from "../../components/Header/Header";
import ExploreTabs from "./ExploreTabs";
import { products } from "./itemdata";
import ProductItem from "./ProductItem";
import $ from "jquery";
import { Helmet } from "react-helmet-async";

window.jQuery = window.$ = $;
require("jquery-nice-select");
const ExploreV1 = () => {
  const selectRef = useRef();
  const selectRef2 = useRef();
  const [num, setnum] = useState(12);

  useEffect(() => {
    $(selectRef.current).niceSelect();
    $(selectRef2.current).niceSelect();
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Explore V1 || Tokenmart - Largest online marketplace</title>
      </Helmet>
      <Header />
      {/*  ====================== Hero Section =============================  */}
      <section className="hero-section relative mt-2 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto relative px-4 z-10">
          <h2 className="font-display text-4xl lg:text-6xl text-blueGray-900 font-bold mb-4">
            Explore{" "}
          </h2>
          <ul className="hero-breadcrumb font-body text-blueGray-600 flex flex-wrap items-center">
            <li className="flex items-center mr-2">
              <Link
                className="transition duration-500  hover:text-indigo-500 underline-hover"
                to="/"
              >
                {" "}
                Home
              </Link>
            </li>
            <li className="flex items-center mr-2">
              <img
                className="w-3 h-3 inline-block mr-2"
                src="assets/images/right-arrow.svg"
                alt="title"
              />
              <Link
                className="transition duration-500  hover:text-indigo-500 underline-hover"
                to="/explore"
              >
                {" "}
                Explore
              </Link>
            </li>
            <li className="flex items-center text-indigo-500 mr-2">
              <img
                className="w-3 h-3 inline-block mr-2"
                src="assets/images/right-arrow.svg"
                alt="title"
              />{" "}
              Explore
            </li>
          </ul>
        </div>
      </section>
      {/*  ====================== Product Section =============================  */}
      <section className="product-section relative mb-20 lg:mb-32">
        <div className="container mx-auto relative px-4 z-10">
          <div className="flex justify-between mb-8 lg:mb-14">
            <div className="flex items-center pr-6">
              <select
              style={{display:"none"}}
                ref={selectRef}
                className="multiple-select2 block lg:hidden text-blueGray-600"
              >
                <option>All </option>
                <option>Art </option>
                <option>Music </option>
                <option>Domain Names </option>
                <option>Virtual Worlds </option>
              </select>
              <ExploreTabs />
            </div>
            <div className="flex relative lg:top-4">
              <span className="font-body text-blueGray-600">Token</span>
              <select ref={selectRef2} className="multiple-select  text-blue">
                <option>All Token </option>
                <option>Bitcoin </option>
                <option>Doge Coin </option>
                <option>XRP </option>
                <option>Safemoon </option>
              </select>
            </div>
          </div>
          <div className="product-infinite grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.slice(0, num).map((product, index) => (
              <ProductItem key={index} item={product} />
            ))}
          </div>
          <div className="flex justify-center mt-8 lg:mt-14">
            {num === 12 && (
              <button
                onClick={() => setnum(20)}
                className="btn load-more-btn flex items-center text-white font-body font-bold rounded px-6 py-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
              >
                Load More{" "}
                <img
                  className="w-4 h-4 flex-shrink-0 animate-spin ml-2"
                  src="assets/images/spinner-icon.svg"
                  alt="title"
                />
              </button>
            )}
          </div>
        </div>
      </section>
      {/*  ====================== Footer Section =============================  */}

      <FooterV2 />
    </div>
  );
};

export default ExploreV1;
