import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import FooterV2 from "../../components/Footer/FooterV2";
import Header from "../../components/Header/Header";
import { products } from "../Explore/itemdata";
import ProductItem from "../Explore/ProductItem";

const CreatorFeatured = () => {
  const [num, setnum] = useState(4);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Featured|| Tokenmart - Largest online marketplace</title>
      </Helmet>
      <Header />
      <div>
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
                  <span className="absolute bottom-0 right-1">
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
                We create high quality, seo friendly and fast loading ghost
                themes in affordable price. Buy ghost theme from us and get 24/7
                free customer support
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
                <a
                  href="#"
                  className="block font-body font-bold text-blueGray-600 bg-indigo-100 rounded py-2 px-4 transition duration-500 hover:bg-indigo-200"
                >
                  <img
                    className="w-4 h-4 inline-block mr-1 mb-1"
                    src="assets/images/comment-icon.svg"
                    alt="title"
                  />{" "}
                  Send Message
                </a>
                <a
                  href="#"
                  className="block font-body font-bold text-blueGray-600 bg-indigo-100 rounded py-2 px-4 transition duration-500 hover:bg-indigo-200"
                >
                  <img
                    className="w-4 h-4 inline-block mr-1 mb-1"
                    src="assets/images/author-icon.svg"
                    alt="title"
                  />{" "}
                  Follow
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*  ====================== Product Section =============================  */}
        <section className="product-section relative mb-20 lg:mb-32">
          <div className="container mx-auto relative px-4 z-10">
            <div className="flex flex-wrap items-center justify-center mb-8 lg:mb-14">
              <a
                href="creator-featured"
                className="btn inline-block text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
              >
                Featured (4)
              </a>
              <a
                href="creator-published"
                className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
              >
                Published (10)
              </a>
              <a
                href="creator-published"
                className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
              >
                Pending (12)
              </a>
              <a
                href="creator-activity"
                className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
              >
                Activity
              </a>
              <a
                href="creator-follower"
                className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
              >
                Followers(6)
              </a>
              <a
                href="edit-profile"
                className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
              >
                Edit Profile
              </a>
              <a
                href="#"
                className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
              >
                Logout
              </a>
            </div>
            <div className="product-infinite grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.slice(0,num).map((item,index)=><ProductItem key={index} item={item} />)}


        
             
           
            
            </div>
            <div className="flex justify-center mt-8 lg:mt-14">
             {num==4 &&  <button  onClick={()=>setnum(12)} className="btn load-more-btn flex items-center text-white font-body font-bold rounded px-6 py-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100">
                Load More{" "}
                <img
                  className="w-4 h-4 flex-shrink-0 animate-spin ml-2"
                  src="assets/images/spinner-icon.svg"
                  alt="title"
                />
              </button>}
             
            </div>
          </div>
        </section>
      </div>
      <FooterV2 />
    </div>
  );
};

export default CreatorFeatured;
