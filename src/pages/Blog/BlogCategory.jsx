import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import FooterV2 from "../../components/Footer/FooterV2";
import Header from "../../components/Header/Header";

const BlogCategory = () => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Category NFT || Tokenmart - Largest online marketplace</title>
            </Helmet>
      <Header />
      <section className="hero-section relative mt-2 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto relative px-4 z-10">
          <h2 className="font-display text-4xl lg:text-6xl text-blueGray-900 font-bold mb-4">
            Category - NFT
          </h2>
        </div>
      </section>
      {/*  ====================== Blog Section =============================  */}
      <section className="blog-section mb-20 lg:mb-32">
        <div className="container mx-auto relative px-4 z-10">
          <div className="blog-infinite grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            <div
              className="blog-box flex justify-between flex-col rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="content-top">
                <div className="blog-image pmd:h-64 relative rounded overflow-hidden mb-6">
                  <img
                    className="w-full md:h-64 object-cover"
                    src="assets/images/blog/5.jpg"
                    alt="title"
                  />
                </div>
                <div className="blog-content px-6">
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/single">
                      Mindfulness Activities for Kids &amp; Toddlers with NFT
                    </Link>
                  </h3>
                  <div className="flex flex-wrap font-body text-sm text-blueGray-600 mt-3 mb-5">
                    <p className="mr-4">
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/date-icon.svg"
                        alt="title"
                      />{" "}
                      02 Feb 2022
                    </p>
                    <p>
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/comment-icon.svg"
                        alt="title"
                      />{" "}
                      04 Comments
                    </p>
                  </div>
                  <p className="font-body text-blueGray-600 mb-5">
                    Poster to so only as who go accompany texts recommendation
                  </p>
                </div>
              </div>
              <div className="content-bottom px-6 pb-6">
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
            <div
              className="blog-box flex justify-between flex-col rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="content-top">
                <div className="blog-image pmd:h-64 relative rounded overflow-hidden mb-6">
                  <img
                    className="w-full md:h-64 object-cover"
                    src="assets/images/blog/6.jpg"
                    alt="title"
                  />
                </div>
                <div className="blog-content px-6">
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/single">
                      Save Thousands Of Lives Through This NFT
                    </Link>
                  </h3>
                  <div className="flex flex-wrap font-body text-sm text-blueGray-600 mt-3 mb-5">
                    <p className="mr-4">
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/date-icon.svg"
                        alt="title"
                      />{" "}
                      02 Feb 2022
                    </p>
                    <p>
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/comment-icon.svg"
                        alt="title"
                      />{" "}
                      04 Comments
                    </p>
                  </div>
                  <p className="font-body text-blueGray-600 mb-5">
                    Poster to so only as who go accompany texts recommendation
                  </p>
                </div>
              </div>
              <div className="content-bottom px-6 pb-6">
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
            <div
              className="blog-box flex justify-between flex-col rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="content-top">
                <div className="blog-image pmd:h-64 relative rounded overflow-hidden mb-6">
                  <img
                    className="w-full md:h-64 object-cover"
                    src="assets/images/blog/7.jpg"
                    alt="title"
                  />
                </div>
                <div className="blog-content px-6">
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/single">
                      NFT Market – A Compact Trike with the Big Benefits
                    </Link>
                  </h3>
                  <div className="flex flex-wrap font-body text-sm text-blueGray-600 mt-3 mb-5">
                    <p className="mr-4">
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/date-icon.svg"
                        alt="title"
                      />{" "}
                      02 Feb 2022
                    </p>
                    <p>
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/comment-icon.svg"
                        alt="title"
                      />{" "}
                      04 Comments
                    </p>
                  </div>
                  <p className="font-body text-blueGray-600 mb-5">
                    Poster to so only as who go accompany texts recommendation
                  </p>
                </div>
              </div>
              <div className="content-bottom px-6 pb-6">
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
            <div
              className="blog-box flex justify-between flex-col rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="content-top">
                <div className="blog-image pmd:h-64 relative rounded overflow-hidden mb-6">
                  <img
                    className="w-full md:h-64 object-cover"
                    src="assets/images/blog/8.jpg"
                    alt="title"
                  />
                </div>
                <div className="blog-content px-6">
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/single">
                      Honoring Black History Month with Toddlers
                    </Link>
                  </h3>
                  <div className="flex flex-wrap font-body text-sm text-blueGray-600 mt-3 mb-5">
                    <p className="mr-4">
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/date-icon.svg"
                        alt="title"
                      />{" "}
                      02 Feb 2022
                    </p>
                    <p>
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/comment-icon.svg"
                        alt="title"
                      />{" "}
                      04 Comments
                    </p>
                  </div>
                  <p className="font-body text-blueGray-600 mb-5">
                    Poster to so only as who go accompany texts recommendation
                  </p>
                </div>
              </div>
              <div className="content-bottom px-6 pb-6">
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
            <div
              className="blog-box flex justify-between flex-col rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="content-top">
                <div className="blog-image pmd:h-64 relative rounded overflow-hidden mb-6">
                  <img
                    className="w-full md:h-64 object-cover"
                    src="assets/images/blog/9.jpg"
                    alt="title"
                  />
                </div>
                <div className="blog-content px-6">
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/single">
                      Setting Intentions Instead of Resolutions for 2021
                    </Link>
                  </h3>
                  <div className="flex flex-wrap font-body text-sm text-blueGray-600 mt-3 mb-5">
                    <p className="mr-4">
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/date-icon.svg"
                        alt="title"
                      />{" "}
                      02 Feb 2022
                    </p>
                    <p>
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/comment-icon.svg"
                        alt="title"
                      />{" "}
                      04 Comments
                    </p>
                  </div>
                  <p className="font-body text-blueGray-600 mb-5">
                    Poster to so only as who go accompany texts recommendation
                  </p>
                </div>
              </div>
              <div className="content-bottom px-6 pb-6">
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
            <div
              className="blog-box flex justify-between flex-col rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="content-top">
                <div className="blog-image pmd:h-64 relative rounded overflow-hidden mb-6">
                  <img
                    className="w-full md:h-64 object-cover"
                    src="assets/images/blog/10.jpg"
                    alt="title"
                  />
                </div>
                <div className="blog-content px-6">
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/single">
                      Clever Ways to Purchase Extraordinart Items from NFT
                      Market
                    </Link>
                  </h3>
                  <div className="flex flex-wrap font-body text-sm text-blueGray-600 mt-3 mb-5">
                    <p className="mr-4">
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/date-icon.svg"
                        alt="title"
                      />{" "}
                      02 Feb 2022
                    </p>
                    <p>
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/comment-icon.svg"
                        alt="title"
                      />{" "}
                      04 Comments
                    </p>
                  </div>
                  <p className="font-body text-blueGray-600 mb-5">
                    Poster to so only as who go accompany texts recommendation
                  </p>
                </div>
              </div>
              <div className="content-bottom px-6 pb-6">
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
            <div
              className="blog-box flex justify-between flex-col rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="content-top">
                <div className="blog-image pmd:h-64 relative rounded overflow-hidden mb-6">
                  <img
                    className="w-full md:h-64 object-cover"
                    src="assets/images/blog/11.jpg"
                    alt="title"
                  />
                </div>
                <div className="blog-content px-6">
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/single">
                      How to Save Money on Baby Essentials for NFT
                    </Link>
                  </h3>
                  <div className="flex flex-wrap font-body text-sm text-blueGray-600 mt-3 mb-5">
                    <p className="mr-4">
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/date-icon.svg"
                        alt="title"
                      />{" "}
                      02 Feb 2022
                    </p>
                    <p>
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/comment-icon.svg"
                        alt="title"
                      />{" "}
                      04 Comments
                    </p>
                  </div>
                  <p className="font-body text-blueGray-600 mb-5">
                    Poster to so only as who go accompany texts recommendation
                  </p>
                </div>
              </div>
              <div className="content-bottom px-6 pb-6">
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
            <div
              className="blog-box flex justify-between flex-col rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="content-top">
                <div className="blog-image pmd:h-64 relative rounded overflow-hidden mb-6">
                  <img
                    className="w-full md:h-64 object-cover"
                    src="assets/images/blog/12.jpg"
                    alt="title"
                  />
                </div>
                <div className="blog-content px-6">
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/single">
                      Liki Trike – A Compact Trike with the Big Benefits
                    </Link>
                  </h3>
                  <div className="flex flex-wrap font-body text-sm text-blueGray-600 mt-3 mb-5">
                    <p className="mr-4">
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/date-icon.svg"
                        alt="title"
                      />{" "}
                      02 Feb 2022
                    </p>
                    <p>
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/comment-icon.svg"
                        alt="title"
                      />{" "}
                      04 Comments
                    </p>
                  </div>
                  <p className="font-body text-blueGray-600 mb-5">
                    Poster to so only as who go accompany texts recommendation
                  </p>
                </div>
              </div>
              <div className="content-bottom px-6 pb-6">
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
            <div
              className="blog-box flex justify-between flex-col rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="content-top">
                <div className="blog-image pmd:h-64 relative rounded overflow-hidden mb-6">
                  <img
                    className="w-full md:h-64 object-cover"
                    src="assets/images/blog/13.jpg"
                    alt="title"
                  />
                </div>
                <div className="blog-content px-6">
                  <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                    <Link to="/single">NFT Market – A Compact the Big Benefits</Link>
                  </h3>
                  <div className="flex flex-wrap font-body text-sm text-blueGray-600 mt-3 mb-5">
                    <p className="mr-4">
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/date-icon.svg"
                        alt="title"
                      />{" "}
                      02 Feb 2022
                    </p>
                    <p>
                      <img
                        className="w-4 h-4 inline-block mr-1"
                        src="assets/images/comment-icon.svg"
                        alt="title"
                      />{" "}
                      04 Comments
                    </p>
                  </div>
                  <p className="font-body text-blueGray-600 mb-5">
                    Poster to so only as who go accompany texts recommendation
                  </p>
                </div>
              </div>
              <div className="content-bottom px-6 pb-6">
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
          <div className="flex justify-center mt-8 lg:mt-14">
            <button className="btn load-more-btn flex items-center text-white font-body font-bold rounded px-6 py-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100">
              Load More{" "}
              <img
                className="w-4 h-4 flex-shrink-0 animate-spin ml-2"
                src="assets/images/spinner-icon.svg"
                alt="title"
              />
            </button>
          </div>
        </div>
      </section>
      <FooterV2 />
    </div>
  );
};

export default BlogCategory;
