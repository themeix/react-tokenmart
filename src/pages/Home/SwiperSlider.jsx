import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import Timer7 from "../../components/Timer/Timer7";
const SwiperSlider = () => {
  return (
    <section className="hero-section relative pt-32 pb-28 lg:pt-32 lg:pb-20">
      <div className="container mx-auto relative px-4 z-10">
        <div className="swiper-container hero-slider">
          <Swiper
            className="swiper-wrapper"
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
            // breakpoints={{
            //   0: {
            //     slidesPerView: 1,
            //   },
            //   640: {
            //     slidesPerView: 2,
            //   },
            //   1024: {
            //     slidesPerView: 3,
            //   },
            //   1280: {
            //     slidesPerView: 4,
            //   },
            // }}
          >
            <SwiperSlide className="swiper-slide">
              <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="text-left lg:col-span-2 lg:order-12">
                  <div
                    className="shadow transition duration-500 hover:shadow-lg p-6 mr-4 rounded"
                    data-aos="fade-up"
                  >
                    <img
                      className="w-full rounded"
                      src="assets/images/product/1.gif"
                      alt="title"
                    />
                    <div className="flex justify-between items-center relative mt-6">
                      <div className="flex flex-wrap items-center">
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />
                        <div className="ml-2">
                          <p className="font-body text-sm text-blueGray-600">
                            Owned By
                          </p>
                          <h6 className="font-display text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500">
                            <Link to="/creator-published">Steven Robart</Link>
                          </h6>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/4.jpg"
                          alt="title"
                        />
                        <div className="ml-2">
                          <p className="font-body text-sm text-blueGray-600">
                            Created By
                          </p>
                          <h6 className="font-display text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500">
                            <Link to="/creator-published">Alex Max</Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:pr-20 text-left lg:col-span-3 lg:order-1">
                  <h1 className="text-4xl lg:text-6xl font-bold font-display text-blueGray-900 mb-10">
                    Pumpkin Everything{" "}
                  </h1>
                  <div className="flex flex-wrap justify-between items-center">
                    <div className="my-2">
                      <p className="flex items-center font-body font-semibold text-blueGray-900 text-3xl my-1">
                        <img
                          className="w-6 h-6 inline-block mr-1"
                          src="assets/images/cryptocurrency-icon.svg"
                          alt="title"
                        />{" "}
                        0.010 ETH
                      </p>
                      <p className="font-body text-sm text-blueGray-600">
                        ≈$26.69
                      </p>
                    </div>
                    <Timer7/>
                  </div>
                  <div className="mt-8">
                    <Link
                      to="/item-single"
                      className="btn inline-block text-2xl text-white font-body font-semibold rounded py-3 px-6 mr-6 mt-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                    >
                      <img
                        className="w-5 h-5 inline-block mb-1"
                        src="assets/images/bid-icon2.svg"
                        alt="title"
                      />{" "}
                      Place a bid
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="text-left lg:col-span-2 lg:order-12">
                  <div
                    className="shadow transition duration-500 hover:shadow-lg mr-4 p-6 rounded"
                    data-aos="fade-up"
                  >
                    <img
                      className="w-full rounded"
                      src="assets/images/product/2.jpg"
                      alt="title"
                    />
                    <div className="flex justify-between items-center relative mt-6">
                      <div className="flex flex-wrap items-center">
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/3.jpg"
                          alt="title"
                        />
                        <div className="ml-2">
                          <p className="font-body text-sm text-blueGray-600">
                            Owned By
                          </p>
                          <h6 className="font-display text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500">
                            <Link to="/creator-published">Steven Robart</Link>
                          </h6>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <img
                          className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                          src="assets/images/author/4.jpg"
                          alt="title"
                        />
                        <div className="ml-2">
                          <p className="font-body text-sm text-blueGray-600">
                            Created By
                          </p>
                          <h6 className="font-display text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500">
                            <Link to="/creator-published">Alex Max</Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:pr-20 text-left lg:col-span-3 lg:order-1">
                  <h1 className="text-4xl lg:text-6xl font-bold font-display text-blueGray-900 mb-10">
                    Mega City Boss #20{" "}
                  </h1>
                  <div className="flex flex-wrap justify-between items-center">
                    <div className="my-2">
                      <p className="flex items-center font-body font-semibold text-blueGray-900 text-3xl my-1">
                        <img
                          className="w-6 h-6 inline-block mr-1"
                          src="assets/images/cryptocurrency-icon.svg"
                          alt="title"
                        />{" "}
                        0.001 ETH
                      </p>
                      <p className="font-body text-sm text-blueGray-600">
                        ≈$26.69
                      </p>
                    </div>
                    <Timer7/>
                  </div>
                  <div className="mt-8">
                    <Link
                      to="/item-single"
                      className="btn inline-block text-2xl text-white font-body font-semibold rounded py-3 px-6 mr-6 mt-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                    >
                      <img
                        className="w-5 h-5 inline-block mb-1"
                        src="assets/images/bid-icon2.svg"
                        alt="title"
                      />{" "}
                      Place a bid
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
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
          className="swiper-button-next flex align-center justify-center bg-white shadow rounded-full bg-gradient-to-r transition duration-500 hover:from-indigo-500 hover:to-purple-500 2xl:translate-x-24 translate-y-24"
        />
      </div>
    </section>
  );
};

export default SwiperSlider;
