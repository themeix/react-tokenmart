import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import ProductItem from "../Explore/ProductItem";
import ProductItem2 from "../Explore/ProductItem2";
const FeaturedAuctions = ({products}) => {
  return (
    <section className="product-section relative mt-20 mb-16 lg:mt-32 lg:mb-24">
      <div className="container mx-auto relative px-4 z-10">
        <div className="section-title flex flex-wrap items-center justify-between mb-6 lg:mb-8">
          <div className="flex items-center mb-3">
            <span className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg w-10 h-10 mr-4">
              <img
                className="w-4 h-4"
                src="assets/images/sec-icon3.svg"
                alt="title"
              />
            </span>
            <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">
              Featured Auctions
            </h3>
          </div>
          <a
            href="/explore"
            className="arrow-btn block bg-indigo-100 text-indigo-500 text-sm text-sm font-body font-bold rounded py-2 px-4 ml-14 transition duration-500 hover:bg-indigo-50"
          >
            See All
          </a>
        </div>

        <div className="relative">
          <div className="swiper-container product-slider">
            <Swiper
              className="swiper-wrapper"
              slidesPerView={4}
              spaceBetween={24}
              speed={1000}
              zoom={true}
              watchOverflow={true}
              autoplayDisableOnInteraction={false}
              paginationClickable={true}
              keyboardControl={true}
              mousewheelControl={true}
              autoplay={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Pagination, Navigation, Autoplay]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
            >
              {products.map((product, index) => (
                <SwiperSlide>
                  <ProductItem2 key={index} item={product} />{" "}
                </SwiperSlide>
              ))}

              <div className="swiper-slide">
                <div
                  className="product-box flex justify-between flex-col bg-white shadow rounded overflow-hidden transition hover:shadow-lg"
                  data-aos="fade-up"
                >
                  <div className="product-top">
                    <div className="product-image relative rounded overflow-hidden m-6">
                      <img
                        className="w-full sm:h-56 rounded object-cover"
                        src="assets/images/product/11.jpg"
                        alt="title"
                      />
                    </div>
                    <div className="product-content px-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Link
                            to="/creator-published"
                            className="relative"
                            data-tooltip="Steven Robart"
                          >
                            <img
                              className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                              src="assets/images/author/1.jpg"
                              alt="title"
                            />
                          </Link>
                          <Link
                            to="/creator-published"
                            className="relative -left-4"
                            data-tooltip="Steven Robart"
                          >
                            <img
                              className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                              src="assets/images/author/3.jpg"
                              alt="title"
                            />{" "}
                            <span className="absolute bottom-0 right-1">
                              <img
                                className="w-3 h-3"
                                src="assets/images/verified-icon.svg"
                                alt="title"
                              />
                            </span>
                          </Link>
                        </div>
                        <div className="flex items-center">
                          <span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8">
                            <img
                              src="assets/images/heart-icon2.svg"
                              alt="title"
                            />
                          </span>
                          <p className="font-body font-bold text-sm text-blueGray-600 ml-2">
                            90 Likes
                          </p>
                        </div>
                      </div>
                      <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                        <Link to="/item-single">Cyber Boss #43</Link>
                      </h3>
                    </div>
                  </div>
                  <div className="product-bottom flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
                    <div>
                      <p className="font-body text-sm text-blueGray-600">
                        Current Bid
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                        <img
                          className="w-5 h-5 inline-block mr-1"
                          src="assets/images/cryptocurrency-icon.svg"
                          alt="title"
                        />{" "}
                        0.008 ETH
                      </p>
                      <p className="font-body text-sm text-blueGray-600">
                        ≈$26.69
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="product-box flex justify-between flex-col bg-white shadow rounded overflow-hidden transition hover:shadow-lg"
                  data-aos="fade-up"
                >
                  <div className="product-top">
                    <div className="product-image relative rounded overflow-hidden m-6">
                      <img
                        className="w-full sm:h-56 rounded object-cover"
                        src="assets/images/product/1.jpg"
                        alt="title"
                      />
                    </div>
                    <div className="product-content px-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Link
                            to="/creator-published"
                            className="relative"
                            data-tooltip="Steven Robart"
                          >
                            <img
                              className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                              src="assets/images/author/1.jpg"
                              alt="title"
                            />
                          </Link>
                          <Link
                            to="/creator-published"
                            className="relative -left-4"
                            data-tooltip="Steven Robart"
                          >
                            <img
                              className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                              src="assets/images/author/3.jpg"
                              alt="title"
                            />{" "}
                            <span className="absolute bottom-0 right-1">
                              <img
                                className="w-3 h-3"
                                src="assets/images/verified-icon.svg"
                                alt="title"
                              />
                            </span>
                          </Link>
                        </div>
                        <div className="flex items-center">
                          <span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8">
                            <img
                              src="assets/images/heart-icon2.svg"
                              alt="title"
                            />
                          </span>
                          <p className="font-body font-bold text-sm text-blueGray-600 ml-2">
                            90 Likes
                          </p>
                        </div>
                      </div>
                      <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                        <Link to="/item-single">Token Art #23</Link>
                      </h3>
                    </div>
                  </div>
                  <div className="product-bottom flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
                    <div>
                      <p className="font-body text-sm text-blueGray-600">
                        Current Bid
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                        <img
                          className="w-5 h-5 inline-block mr-1"
                          src="assets/images/cryptocurrency-icon.svg"
                          alt="title"
                        />{" "}
                        0.008 ETH
                      </p>
                      <p className="font-body text-sm text-blueGray-600">
                        ≈$26.69
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="product-box flex justify-between flex-col bg-white shadow rounded overflow-hidden transition hover:shadow-lg"
                  data-aos="fade-up"
                >
                  <div className="product-top">
                    <div className="product-image relative rounded overflow-hidden m-6">
                      <img
                        className="w-full sm:h-56 rounded object-cover"
                        src="assets/images/product/25.jpg"
                        alt="title"
                      />
                    </div>
                    <div className="product-content px-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Link
                            to="/creator-published"
                            className="relative"
                            data-tooltip="Steven Robart"
                          >
                            <img
                              className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                              src="assets/images/author/1.jpg"
                              alt="title"
                            />
                          </Link>
                          <Link
                            to="/creator-published"
                            className="relative -left-4"
                            data-tooltip="Steven Robart"
                          >
                            <img
                              className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                              src="assets/images/author/3.jpg"
                              alt="title"
                            />{" "}
                            <span className="absolute bottom-0 right-1">
                              <img
                                className="w-3 h-3"
                                src="assets/images/verified-icon.svg"
                                alt="title"
                              />
                            </span>
                          </Link>
                        </div>
                        <div className="flex items-center">
                          <span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8">
                            <img
                              src="assets/images/heart-icon2.svg"
                              alt="title"
                            />
                          </span>
                          <p className="font-body font-bold text-sm text-blueGray-600 ml-2">
                            90 Likes
                          </p>
                        </div>
                      </div>
                      <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                        <Link to="/item-single">Creative Oilpaint #22</Link>
                      </h3>
                    </div>
                  </div>
                  <div className="product-bottom flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
                    <div>
                      <p className="font-body text-sm text-blueGray-600">
                        Current Bid
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                        <img
                          className="w-5 h-5 inline-block mr-1"
                          src="assets/images/cryptocurrency-icon.svg"
                          alt="title"
                        />{" "}
                        0.008 ETH
                      </p>
                      <p className="font-body text-sm text-blueGray-600">
                        ≈$26.69
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="product-box flex justify-between flex-col bg-white shadow rounded overflow-hidden transition hover:shadow-lg"
                  data-aos="fade-up"
                >
                  <div className="product-top">
                    <div className="product-image relative rounded overflow-hidden m-6">
                      <img
                        className="w-full sm:h-56 rounded object-cover"
                        src="assets/images/product/5.jpg"
                        alt="title"
                      />
                    </div>
                    <div className="product-content px-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Link
                            to="/creator-published"
                            className="relative"
                            data-tooltip="Steven Robart"
                          >
                            <img
                              className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                              src="assets/images/author/1.jpg"
                              alt="title"
                            />
                          </Link>
                          <Link
                            to="/creator-published"
                            className="relative -left-4"
                            data-tooltip="Steven Robart"
                          >
                            <img
                              className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                              src="assets/images/author/3.jpg"
                              alt="title"
                            />{" "}
                            <span className="absolute bottom-0 right-1">
                              <img
                                className="w-3 h-3"
                                src="assets/images/verified-icon.svg"
                                alt="title"
                              />
                            </span>
                          </Link>
                        </div>
                        <div className="flex items-center">
                          <span className="bg-indigo-100 flex items-center justify-center rounded-lg w-8 h-8">
                            <img
                              src="assets/images/heart-icon2.svg"
                              alt="title"
                            />
                          </span>
                          <p className="font-body font-bold text-sm text-blueGray-600 ml-2">
                            90 Likes
                          </p>
                        </div>
                      </div>
                      <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                        <Link to="/item-single">Token Art #10 </Link>
                      </h3>
                    </div>
                  </div>
                  <div className="product-bottom flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
                    <div>
                      <p className="font-body text-sm text-blueGray-600">
                        Current Bid
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
                        <img
                          className="w-5 h-5 inline-block mr-1"
                          src="assets/images/cryptocurrency-icon.svg"
                          alt="title"
                        />{" "}
                        0.008 ETH
                      </p>
                      <p className="font-body text-sm text-blueGray-600">
                        ≈$26.69
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Swiper>
          </div>
          <div
            style={{ width: "50px", height: "50px" }}
            className="swiper-button-prev bg-white shadow rounded-full bg-gradient-to-r transition duration-500 hover:from-indigo-500 hover:to-purple-500 2xl:-translate-x-24"
          />
          <div
            style={{
              width: "50px",
              height: "50px",
              dispaly: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
            }}
            className="swiper-button-next  flex align-center justify-center bg-white shadow rounded-full bg-gradient-to-r transition duration-500 hover:from-indigo-500 hover:to-purple-500 2xl:translate-x-24"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedAuctions;
