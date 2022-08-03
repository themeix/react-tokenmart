import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import FooterV2 from "../../components/Footer/FooterV2";
import HeaderV2 from "../../components/Header/HeaderV2";
import Loadmore from "../../components/Loadmore";
import Follower from "./Follower";
import { followers } from "./followerdata";

const CreatorFollower = () => {
  const [num, setnum] = useState(10);
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Follower || Tokenmart - Largest online marketplace</title>
            </Helmet>
      <HeaderV2 />
      {/*  ====================== Hero Section =============================  */}
      <section className="hero-section relative mt-2 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto relative px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <span className="relative">
                <img
                  className="border-2 border-white w-32 h-32 object-cover rounded-full"
                  src="assets/images/author/3.jpg"
                  alt="title"
                />{" "}
                <span className="absolute bottom-2 right-1">
                  <img
                    className="w-8 h-8"
                    src="assets/images/verified-icon.svg"
                    alt="title"
                  />
                </span>
              </span>
            </div>
            <h2 className="font-display text-4xl text-blueGray-900 font-bold mb-2">
              Steven Robart{" "}
            </h2>
            <p className="font-body text-blueGray-600 mb-4">
              <img
                className="w-4 h-4 inline-block mr-1"
                src="assets/images/diamond-icon.svg"
                alt="title"
              />{" "}
              Diamond Seller
            </p>
            <p className="font-body text-blueGray-600 mb-4">
              We create high quality, seo friendly and fast loading ghost themes
              in affordable price. Buy ghost theme from us and get 24/7 free
              customer support
            </p>
            <div className="flex flex-wrap items-center justify-center mb-4">
              <div className="flex items-center m-2">
                <span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8">
                  <img src="assets/images/level-icon.svg" alt="title" />
                </span>
                <p className="font-body font-bold text-blueGray-600 ml-2">
                  Level 8s
                </p>
              </div>
              <div className="flex items-center m-2">
                <span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8">
                  <img src="assets/images/heart-icon2.svg" alt="title" />
                </span>
                <p className="font-body font-bold text-blueGray-600 ml-2">
                  90 Likes
                </p>
              </div>
              <div className="flex items-center m-2">
                <span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8">
                  <img src="assets/images/item-icon.svg" alt="title" />
                </span>
                <p className="font-body font-bold text-blueGray-600 ml-2">
                  150 Items
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-sm m-auto flex-wrap justify-center">
              <Link
                to="/#"
                className="block font-body font-bold text-blueGray-600 bg-indigo-100 rounded py-2 px-4 transition duration-500 hover:bg-indigo-200"
              >
                <img
                  className="w-4 h-4 inline-block mr-1 mb-1"
                  src="assets/images/comment-icon.svg"
                  alt="title"
                />{" "}
                Send Message
              </Link>
              <Link
                to="/#"
                className="block font-body font-bold text-blueGray-600 bg-indigo-100 rounded py-2 px-4 transition duration-500 hover:bg-indigo-200"
              >
                <img
                  className="w-4 h-4 inline-block mr-1 mb-1"
                  src="assets/images/author-icon.svg"
                  alt="title"
                />{" "}
                Follow
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*  ====================== Product Section =============================  */}
      <section className="product-section relative mb-20 lg:mb-32">
        <div className="container mx-auto relative px-4 z-10">
          <div className="flex flex-wrap items-center justify-center mb-8 lg:mb-14">
            <Link
              to="/creator-featured"
              className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
            >
              Featured (4)
            </Link>
            <Link
              to="/creator-published"
              className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
            >
              Published (10)
            </Link>
            <Link
              to="/creator-published"
              className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
            >
              Pending (12)
            </Link>
            <Link
              to="/creator-activity"
              className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
            >
              Activity
            </Link>
            <Link
              to="/creator-follower"
              className="btn inline-block text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
            >
              Followers(6)
            </Link>
            <Link
              to="/edit-profile"
              className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
            >
              Edit Profile
            </Link>
            <Link
              to="/#"
              className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
            >
              Logout
            </Link>
          </div>
          <div className="activity-infinite grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {followers.slice(0,num).map((follower, index) => (
              <Follower key={index} item={follower} />
            ))}
          </div>
          <div className="flex justify-center mt-8 lg:mt-14">
            {num === 10 &&    <Loadmore onClick={()=>setnum(18)} />}
        
    
          </div>
        </div>
      </section>
      {/*  ====================== Footer Section =============================  */}
      <FooterV2 />
    </div>
  );
};

export default CreatorFollower;
