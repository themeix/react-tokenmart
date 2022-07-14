import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import FooterV2 from "../../components/Footer/FooterV2";
import Header from "../../components/Header/Header";
import BlogCard from "./BlogCard";
import { blogs } from "./blogdata";

const BlogTag = () => {
  const [num, setnum] = useState(9);
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Tag -NFT || Tokenmart - Largest online marketplace</title>
            </Helmet>
      <Header />
      <section className="hero-section relative mt-2 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto relative px-4 z-10">
          <h2 className="font-display text-4xl lg:text-6xl text-blueGray-900 font-bold mb-4">
            Tag - NFT
          </h2>
        </div>
      </section>
      {/*  ====================== Blog Section =============================  */}
      <section className="blog-section mb-20 lg:mb-32">
        <div className="container mx-auto relative px-4 z-10">
          <div className="blog-infinite grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {blogs.slice(0, num).map((item, index) => (
              <BlogCard key={index} item={item} />
            ))}
          </div>

          <div className="flex justify-center mt-8 lg:mt-14">
            {num === 9 && (
              <button onClick={()=>setnum(20)} className="btn load-more-btn flex items-center text-white font-body font-bold rounded px-6 py-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100">
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
      <FooterV2 />
    </div>
  );
};

export default BlogTag;
