import React from "react";
import Header from '../../components/Header/Header'
import FooterV2 from '../../components/Footer/FooterV2'
import { Helmet } from "react-helmet";

const LeaderBoard = () => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Leader Board || Tokenmart - Largest online marketplace</title>
            </Helmet>
     <Header/>
        <section className="hero-section relative mt-2 pt-32 pb-20 lg:pt-48 lg:pb-32">
          <div className="container mx-auto relative px-4 z-10">
            <h2 className="font-display text-4xl lg:text-6xl text-blueGray-900 font-bold mb-4">
              Leaderboard
            </h2>
            <ul className="hero-breadcrumb font-body text-blueGray-600 flex flex-wrap items-center">
              <li className="flex items-center mr-2">
                <a
                  className="transition duration-500 hover:text-indigo-500 underline-hover"
                  href="index"
                >
                  Home
                </a>
              </li>
              <li className="flex items-center mr-2">
                <img
                  className="w-3 h-3 inline-block mr-2"
                  src="assets/images/right-arrow.svg"
                  alt="title"
                />
                <a
                  className="transition duration-500 hover:text-indigo-500 underline-hover"
                  href="explore"
                >
                  {" "}
                  Explore
                </a>
              </li>
              <li className="flex items-center text-indigo-500 mr-2">
                <img
                  className="w-3 h-3 inline-block mr-2"
                  src="assets/images/right-arrow.svg"
                  alt="title"
                />
                Leaderboard
              </li>
            </ul>
          </div>
        </section>
        {/*  ====================== Top Seller Section =============================  */}
        <section className="top-seller-section mb-20 lg:mb-32">
          <div className="container mx-auto relative px-4 z-10">
            <div
              className="infinite-seller-box-table seller-box-table"
              data-aos="fade-up"
            >
              <div className="table-wrapper justify-self-auto grid grid-cols-12 gap-8 mb-8 transition duration-500 hover:shadow-sm rounded p-5">
                <div className="flex items-center col-span-4">
                  <h2 className="flex items-center font-display text-3xl text-blueGray-600 font-medium mr-6">
                    <img
                      className="w-4 h-4 mr-2"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />{" "}
                    1{" "}
                  </h2>
                  <div className="flex-shrink-0 relative mr-6">
                    <img
                      className="w-20 h-20 object-cover rounded-lg"
                      src="assets/images/author/1.jpg"
                      alt="title"
                    />
                    <span className="absolute bottom-3 -right-1">
                      <img
                        className="w-5 h-5"
                        src="assets/images/verified-icon.svg"
                        alt="title"
                      />
                    </span>
                  </div>
                  <div className="relative block">
                    <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                      <a href="creator-published">Steven Robart</a>
                    </h6>
                    <p className="flex items-center font-body text-blueGray-600 text-sm mt-1">
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/diamond-icon.svg"
                        alt="title"
                      />{" "}
                      Diamond Seller
                    </p>
                  </div>
                </div>
                <div className="grid items-center grid-cols-3 gap-4 lg:w-60 col-span-3">
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-5 h-5"
                        src="assets/images/level-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      8 Level
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-4 h-4"
                        src="assets/images/like-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      290 Likes
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-4 h-4"
                        src="assets/images/item-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      150 Items
                    </p>
                  </div>
                </div>
                <div className="thumbnail grid gap-4 items-center grid-cols-5 col-span-5 md:col-span-5">
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/1.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/2.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/3.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/4.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/5.jpg"
                      alt="title"
                    />
                  </a>
                </div>
              </div>
              <div className="table-wrapper justify-self-auto grid grid-cols-12 gap-8 mb-8 transition duration-500 hover:shadow-sm rounded p-5">
                <div className="flex items-center col-span-4">
                  <h2 className="flex items-center font-display text-3xl text-blueGray-600 font-medium mr-6">
                    <img
                      className="w-4 h-4 mr-2"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />{" "}
                    2{" "}
                  </h2>
                  <div className="flex-shrink-0 relative mr-6">
                    <img
                      className="w-20 h-20 object-cover rounded-lg"
                      src="assets/images/author/2.jpg"
                      alt="title"
                    />
                    <span className="absolute bottom-3 -right-1">
                      <img
                        className="w-5 h-5"
                        src="assets/images/verified-icon.svg"
                        alt="title"
                      />
                    </span>
                  </div>
                  <div className="relative block">
                    <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                      <a href="creator-published">Madison Harper</a>
                    </h6>
                    <p className="flex items-center font-body text-blueGray-600 text-sm mt-1">
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/diamond-icon.svg"
                        alt="title"
                      />{" "}
                      Diamond Seller
                    </p>
                  </div>
                </div>
                <div className="grid items-center grid-cols-3 gap-4 lg:w-60 col-span-3">
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-5 h-5"
                        src="assets/images/level-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      8 Level
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-4 h-4"
                        src="assets/images/like-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      290 Likes
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-4 h-4"
                        src="assets/images/item-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      150 Items
                    </p>
                  </div>
                </div>
                <div className="thumbnail grid gap-4 items-center grid-cols-5 col-span-5 md:col-span-5">
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/6.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/7.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/8.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/9.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/10.jpg"
                      alt="title"
                    />
                  </a>
                </div>
              </div>
              <div className="table-wrapper justify-self-auto grid grid-cols-12 gap-8 mb-8 transition duration-500 hover:shadow-sm rounded p-5">
                <div className="flex items-center col-span-4">
                  <h2 className="flex items-center font-display text-3xl text-blueGray-600 font-medium mr-6">
                    <img
                      className="w-4 h-4 mr-2"
                      src="assets/images/down-icon.svg"
                      alt="title"
                    />{" "}
                    3{" "}
                  </h2>
                  <div className="flex-shrink-0 relative mr-6">
                    <img
                      className="w-20 h-20 object-cover rounded-lg"
                      src="assets/images/author/3.jpg"
                      alt="title"
                    />
                    <span className="absolute bottom-3 -right-1">
                      <img
                        className="w-5 h-5"
                        src="assets/images/verified-icon.svg"
                        alt="title"
                      />
                    </span>
                  </div>
                  <div className="relative block">
                    <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                      <a href="creator-published">Joana Black</a>
                    </h6>
                    <p className="flex items-center font-body text-blueGray-600 text-sm mt-1">
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/diamond-icon.svg"
                        alt="title"
                      />{" "}
                      Diamond Seller
                    </p>
                  </div>
                </div>
                <div className="grid items-center grid-cols-3 gap-4 lg:w-60 col-span-3">
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-5 h-5"
                        src="assets/images/level-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      8 Level
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-4 h-4"
                        src="assets/images/like-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      290 Likes
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-4 h-4"
                        src="assets/images/item-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      150 Items
                    </p>
                  </div>
                </div>
                <div className="thumbnail grid gap-4 items-center grid-cols-5 col-span-5 md:col-span-5">
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/11.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/12.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/14.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/15.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/16.jpg"
                      alt="title"
                    />
                  </a>
                </div>
              </div>
              <div className="table-wrapper justify-self-auto grid grid-cols-12 gap-8 mb-8 transition duration-500 hover:shadow-sm rounded p-5">
                <div className="flex items-center col-span-4">
                  <h2 className="flex items-center font-display text-3xl text-blueGray-600 font-medium mr-6">
                    <img
                      className="w-4 h-4 mr-2"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />{" "}
                    4{" "}
                  </h2>
                  <div className="flex-shrink-0 relative mr-6">
                    <img
                      className="w-20 h-20 object-cover rounded-lg"
                      src="assets/images/author/4.jpg"
                      alt="title"
                    />
                    <span className="absolute bottom-3 -right-1">
                      <img
                        className="w-5 h-5"
                        src="assets/images/verified-icon.svg"
                        alt="title"
                      />
                    </span>
                  </div>
                  <div className="relative block">
                    <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                      <a href="creator-published">Lea Morrow</a>
                    </h6>
                    <p className="flex items-center font-body text-blueGray-600 text-sm mt-1">
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/diamond-icon.svg"
                        alt="title"
                      />{" "}
                      Diamond Seller
                    </p>
                  </div>
                </div>
                <div className="grid items-center grid-cols-3 gap-4 lg:w-60 col-span-3">
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-5 h-5"
                        src="assets/images/level-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      8 Level
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-4 h-4"
                        src="assets/images/like-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      290 Likes
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-4 h-4"
                        src="assets/images/item-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      150 Items
                    </p>
                  </div>
                </div>
                <div className="thumbnail grid gap-4 items-center grid-cols-5 col-span-5 md:col-span-5">
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/17.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/18.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/19.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/21.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/22.jpg"
                      alt="title"
                    />
                  </a>
                </div>
              </div>
              <div className="table-wrapper justify-self-auto grid grid-cols-12 gap-8 mb-8 transition duration-500 hover:shadow-sm rounded p-5">
                <div className="flex items-center col-span-4">
                  <h2 className="flex items-center font-display text-3xl text-blueGray-600 font-medium mr-6">
                    <img
                      className="w-4 h-4 mr-2"
                      src="assets/images/down-icon.svg"
                      alt="title"
                    />{" "}
                    5{" "}
                  </h2>
                  <div className="flex-shrink-0 relative mr-6">
                    <img
                      className="w-20 h-20 object-cover rounded-lg"
                      src="assets/images/author/5.jpg"
                      alt="title"
                    />
                    <span className="absolute bottom-3 -right-1">
                      <img
                        className="w-5 h-5"
                        src="assets/images/verified-icon.svg"
                        alt="title"
                      />
                    </span>
                  </div>
                  <div className="relative block">
                    <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                      <a href="creator-published">Melanie Cox</a>
                    </h6>
                    <p className="flex items-center font-body text-blueGray-600 text-sm mt-1">
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/diamond-icon.svg"
                        alt="title"
                      />{" "}
                      Diamond Seller
                    </p>
                  </div>
                </div>
                <div className="grid items-center grid-cols-3 gap-4 lg:w-60 col-span-3">
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-5 h-5"
                        src="assets/images/level-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      8 Level
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-4 h-4"
                        src="assets/images/like-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      290 Likes
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-4 h-4"
                        src="assets/images/item-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      150 Items
                    </p>
                  </div>
                </div>
                <div className="thumbnail grid gap-4 items-center grid-cols-5 col-span-5 md:col-span-5">
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/23.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/24.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/25.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/26.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/27.jpg"
                      alt="title"
                    />
                  </a>
                </div>
              </div>
              <div className="table-wrapper justify-self-auto grid grid-cols-12 gap-8 mb-8 transition duration-500 hover:shadow-sm rounded p-5">
                <div className="flex items-center col-span-4">
                  <h2 className="flex items-center font-display text-3xl text-blueGray-600 font-medium mr-6">
                    <img
                      className="w-4 h-4 mr-2"
                      src="assets/images/down-icon.svg"
                      alt="title"
                    />{" "}
                    6{" "}
                  </h2>
                  <div className="flex-shrink-0 relative mr-6">
                    <img
                      className="w-20 h-20 object-cover rounded-lg"
                      src="assets/images/author/6.jpg"
                      alt="title"
                    />
                    <span className="absolute bottom-3 -right-1">
                      <img
                        className="w-5 h-5"
                        src="assets/images/verified-icon.svg"
                        alt="title"
                      />
                    </span>
                  </div>
                  <div className="relative block">
                    <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                      <a href="creator-published">Trinity Levesque</a>
                    </h6>
                    <p className="flex items-center font-body text-blueGray-600 text-sm mt-1">
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/diamond-icon.svg"
                        alt="title"
                      />{" "}
                      Diamond Seller
                    </p>
                  </div>
                </div>
                <div className="grid items-center grid-cols-3 gap-4 lg:w-60 col-span-3">
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-5 h-5"
                        src="assets/images/level-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      8 Level
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-4 h-4"
                        src="assets/images/like-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      290 Likes
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-4 h-4"
                        src="assets/images/item-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      150 Items
                    </p>
                  </div>
                </div>
                <div className="thumbnail grid gap-4 items-center grid-cols-5 col-span-5 md:col-span-5">
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/5.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/6.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/7.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/8.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/9.jpg"
                      alt="title"
                    />
                  </a>
                </div>
              </div>
              <div className="table-wrapper justify-self-auto grid grid-cols-12 gap-8 mb-8 transition duration-500 hover:shadow-sm rounded p-5">
                <div className="flex items-center col-span-4">
                  <h2 className="flex items-center font-display text-3xl text-blueGray-600 font-medium mr-6">
                    <img
                      className="w-4 h-4 mr-2"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />{" "}
                    7{" "}
                  </h2>
                  <div className="flex-shrink-0 relative mr-6">
                    <img
                      className="w-20 h-20 object-cover rounded-lg"
                      src="assets/images/author/7.jpg"
                      alt="title"
                    />
                    <span className="absolute bottom-3 -right-1">
                      <img
                        className="w-5 h-5"
                        src="assets/images/verified-icon.svg"
                        alt="title"
                      />
                    </span>
                  </div>
                  <div className="relative block">
                    <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                      <a href="creator-published">Joaquin Allison</a>
                    </h6>
                    <p className="flex items-center font-body text-blueGray-600 text-sm mt-1">
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/diamond-icon.svg"
                        alt="title"
                      />{" "}
                      Diamond Seller
                    </p>
                  </div>
                </div>
                <div className="grid items-center grid-cols-3 gap-4 lg:w-60 col-span-3">
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-5 h-5"
                        src="assets/images/level-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      8 Level
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-4 h-4"
                        src="assets/images/like-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      290 Likes
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-4 h-4"
                        src="assets/images/item-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      150 Items
                    </p>
                  </div>
                </div>
                <div className="thumbnail grid gap-4 items-center grid-cols-5 col-span-5 md:col-span-5">
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/10.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/11.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/12.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/13.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/20.jpg"
                      alt="title"
                    />
                  </a>
                </div>
              </div>
              <div className="table-wrapper justify-self-auto grid grid-cols-12 gap-8 mb-8 transition duration-500 hover:shadow-sm rounded p-5">
                <div className="flex items-center col-span-4">
                  <h2 className="flex items-center font-display text-3xl text-blueGray-600 font-medium mr-6">
                    <img
                      className="w-4 h-4 mr-2"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />{" "}
                    8{" "}
                  </h2>
                  <div className="flex-shrink-0 relative mr-6">
                    <img
                      className="w-20 h-20 object-cover rounded-lg"
                      src="assets/images/author/8.jpg"
                      alt="title"
                    />
                    <span className="absolute bottom-3 -right-1">
                      <img
                        className="w-5 h-5"
                        src="assets/images/verified-icon.svg"
                        alt="title"
                      />
                    </span>
                  </div>
                  <div className="relative block">
                    <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                      <a href="creator-published">Xavier Malone</a>
                    </h6>
                    <p className="flex items-center font-body text-blueGray-600 text-sm mt-1">
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/diamond-icon.svg"
                        alt="title"
                      />{" "}
                      Diamond Seller
                    </p>
                  </div>
                </div>
                <div className="grid items-center grid-cols-3 gap-4 lg:w-60 col-span-3">
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-5 h-5"
                        src="assets/images/level-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      8 Level
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-4 h-4"
                        src="assets/images/like-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      290 Likes
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-4 h-4"
                        src="assets/images/item-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      150 Items
                    </p>
                  </div>
                </div>
                <div className="thumbnail grid gap-4 items-center grid-cols-5 col-span-5 md:col-span-5">
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/16.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/17.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/19.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/12.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/2.jpg"
                      alt="title"
                    />
                  </a>
                </div>
              </div>
              <div className="table-wrapper justify-self-auto grid grid-cols-12 gap-8 mb-8 transition duration-500 hover:shadow-sm rounded p-5">
                <div className="flex items-center col-span-4">
                  <h2 className="flex items-center font-display text-3xl text-blueGray-600 font-medium mr-6">
                    <img
                      className="w-4 h-4 mr-2"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />{" "}
                    9{" "}
                  </h2>
                  <div className="flex-shrink-0 relative mr-6">
                    <img
                      className="w-20 h-20 object-cover rounded-lg"
                      src="assets/images/author/9.jpg"
                      alt="title"
                    />
                    <span className="absolute bottom-3 -right-1">
                      <img
                        className="w-5 h-5"
                        src="assets/images/verified-icon.svg"
                        alt="title"
                      />
                    </span>
                  </div>
                  <div className="relative block">
                    <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                      <a href="creator-published">Jaclyn Hampton</a>
                    </h6>
                    <p className="flex items-center font-body text-blueGray-600 text-sm mt-1">
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/diamond-icon.svg"
                        alt="title"
                      />{" "}
                      Diamond Seller
                    </p>
                  </div>
                </div>
                <div className="grid items-center grid-cols-3 gap-4 lg:w-60 col-span-3">
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-5 h-5"
                        src="assets/images/level-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      8 Level
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-4 h-4"
                        src="assets/images/like-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      290 Likes
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-4 h-4"
                        src="assets/images/item-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      150 Items
                    </p>
                  </div>
                </div>
                <div className="thumbnail grid gap-4 items-center grid-cols-5 col-span-5 md:col-span-5">
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/15.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/16.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/17.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/11.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/21.jpg"
                      alt="title"
                    />
                  </a>
                </div>
              </div>
              <div className="table-wrapper justify-self-auto grid grid-cols-12 gap-8 mb-8 transition duration-500 hover:shadow-sm rounded p-5">
                <div className="flex items-center col-span-4">
                  <h2 className="flex items-center font-display text-3xl text-blueGray-600 font-medium mr-6">
                    <img
                      className="w-4 h-4 mr-2"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />{" "}
                    10{" "}
                  </h2>
                  <div className="flex-shrink-0 relative mr-6">
                    <img
                      className="w-20 h-20 object-cover rounded-lg"
                      src="assets/images/author/10.jpg"
                      alt="title"
                    />
                    <span className="absolute bottom-3 -right-1">
                      <img
                        className="w-5 h-5"
                        src="assets/images/verified-icon.svg"
                        alt="title"
                      />
                    </span>
                  </div>
                  <div className="relative block">
                    <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                      <a href="creator-published">Christina Meadows</a>
                    </h6>
                    <p className="flex items-center font-body text-blueGray-600 text-sm mt-1">
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/diamond-icon.svg"
                        alt="title"
                      />{" "}
                      Diamond Seller
                    </p>
                  </div>
                </div>
                <div className="grid items-center grid-cols-3 gap-4 lg:w-60 col-span-3">
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-5 h-5"
                        src="assets/images/level-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      8 Level
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-4 h-4"
                        src="assets/images/like-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      290 Likes
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-4 h-4"
                        src="assets/images/item-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      150 Items
                    </p>
                  </div>
                </div>
                <div className="thumbnail grid gap-4 items-center grid-cols-5 col-span-5 md:col-span-5">
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/1.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/2.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/3.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/4.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/5.jpg"
                      alt="title"
                    />
                  </a>
                </div>
              </div>
              <div className="table-wrapper justify-self-auto grid grid-cols-12 gap-8 mb-8 transition duration-500 hover:shadow-sm rounded p-5">
                <div className="flex items-center col-span-4">
                  <h2 className="flex items-center font-display text-3xl text-blueGray-600 font-medium mr-6">
                    <img
                      className="w-4 h-4 mr-2"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />{" "}
                    11{" "}
                  </h2>
                  <div className="flex-shrink-0 relative mr-6">
                    <img
                      className="w-20 h-20 object-cover rounded-lg"
                      src="assets/images/author/11.jpg"
                      alt="title"
                    />
                    <span className="absolute bottom-3 -right-1">
                      <img
                        className="w-5 h-5"
                        src="assets/images/verified-icon.svg"
                        alt="title"
                      />
                    </span>
                  </div>
                  <div className="relative block">
                    <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                      <a href="creator-published">Karla Hicks</a>
                    </h6>
                    <p className="flex items-center font-body text-blueGray-600 text-sm mt-1">
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/diamond-icon.svg"
                        alt="title"
                      />{" "}
                      Diamond Seller
                    </p>
                  </div>
                </div>
                <div className="grid items-center grid-cols-3 gap-4 lg:w-60 col-span-3">
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-5 h-5"
                        src="assets/images/level-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      8 Level
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-4 h-4"
                        src="assets/images/like-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      290 Likes
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                      <img
                        className="w-4 h-4"
                        src="assets/images/item-icon.svg"
                        alt="title"
                      />
                    </span>
                    <p className="font-display text-sm text-blueGray-600 font-bold">
                      150 Items
                    </p>
                  </div>
                </div>
                <div className="thumbnail grid gap-4 items-center grid-cols-5 col-span-5 md:col-span-5">
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/6.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/7.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/8.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/9.jpg"
                      alt="title"
                    />
                  </a>
                  <a href="item-single">
                    <img
                      className="w-20 h-20 rounded object-cover"
                      src="assets/images/product/10.jpg"
                      alt="title"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterV2/>
      </div>
  
  );
};

export default LeaderBoard;
