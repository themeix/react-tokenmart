import React from "react";
import Header from "../../components/Header/Header";
import FooterV2 from "../../components/Footer/FooterV2";
import { Helmet } from "react-helmet";
import SellerLong from "../../components/vendors/SellerLong";
import { sellers } from "../../data/sellers";

const LeaderBoard = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Leader Board || Tokenmart - Largest online marketplace</title>
      </Helmet>
      <Header />
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
            {sellers.map((seller, index) => (
              <SellerLong key={index} data={seller} />
            ))}
          </div>
        </div>
      </section>
      <FooterV2 />
    </div>
  );
};

export default LeaderBoard;
