import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import FooterV2 from "../../components/Footer/FooterV2";
import Header from "../../components/Header/Header";
import BlogCard from "./BlogCard";
import { blogs } from "./blogdata";

const BlogGrid = () => {
  const [num, setnum] = useState(9);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog || Tokenmart - Largest online marketplace</title>
      </Helmet>
      <Header />
      <section className="hero-section relative mt-2 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto relative px-4 z-10">
          <h2 className="font-display text-4xl lg:text-6xl text-blueGray-900 font-bold mb-4">
            Blog
          </h2>
          <ul className="hero-breadcrumb font-body text-blueGray-600 flex flex-wrap items-center">
            <li className="flex items-center mr-2">
              <Link
                className="transition duration-500 hover:text-indigo-500 underline-hover"
                to="/index"
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
                className="transition duration-500 hover:text-indigo-500 underline-hover"
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
              />
              Blog
            </li>
          </ul>
        </div>
      </section>
      {/*  ====================== Blog Section =============================  */}
      <section className="blog-section mb-20 lg:mb-32">
        <div className="container mx-auto relative px-4 z-10">
          <div className="blog-infinite grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {blogs.slice(0, num).map((item, index) => (
              <BlogCard item={item} />
            ))}
          </div>
          <div className="flex justify-center mt-8 lg:mt-14">
            {num === 9 && (
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
      <FooterV2 />
    </div>
  );
};

export default BlogGrid;
