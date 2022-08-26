import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import FooterV2 from "../../components/Footer/FooterV2";
import Header from "../../components/Header/Header";

const Activity = () => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Activity|| Tokenmart - Largest online marketplace</title>
            </Helmet>
      <Header />
      <section className="hero-section relative mt-2 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto relative px-4 z-10">
          <h2 className="font-display text-4xl lg:text-6xl text-blueGray-900 font-bold mb-4">
            Activity
          </h2>
          <ul className="hero-breadcrumb font-body text-blueGray-600 flex flex-wrap items-center">
            <li className="flex items-center mr-2">
              <Link
                className="transition duration-500 hover:text-indigo-500 underline-hover"
                to="//"
              >
                Home
              </Link>
            </li>
            <li className="flex items-center text-indigo-500 mr-2">
              <img
                className="w-3 h-3 inline-block mr-2"
                src="assets/images/right-arrow.svg"
                alt="title"
              />
              Activity
            </li>
          </ul>
        </div>
      </section>
      {/*  ====================== activity Section =============================  */}
      <section className="activity-section relative mb-20 lg:mb-32">
        <div className="container mx-auto relative px-4 z-10">
          <div className="flex justify-between mb-8 lg:mb-14">
            <div className="w-full flex flex-wrap items-center border-b border-blue">
              <Link
                to="/#"
                className="block border border-indigo-500 text-white font-body font-bold rounded py-2 px-4 mr-4 mb-4 transition duration-500 bg-indigo-500 border-blue"
              >
                All
              </Link>
              <Link
                to="/#"
                className="block border border-blueGray-300 hover:border-indigo-500 text-blueGray-900 hover:text-white font-body font-bold rounded py-2 px-4 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-blue"
              >
                Listing
              </Link>
              <Link
                to="/#"
                className="block border border-blueGray-300 hover:border-indigo-500 text-blueGray-900 hover:text-white font-body font-bold rounded py-2 px-4 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-blue"
              >
                Following
              </Link>
              <Link
                to="/#"
                className="block border border-blueGray-300 hover:border-indigo-500 text-blueGray-900 hover:text-white font-body font-bold rounded py-2 px-4 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-blue"
              >
                Bidding
              </Link>
              <Link
                to="/#"
                className="block border border-blueGray-300 hover:border-indigo-500 text-blueGray-900 hover:text-white font-body font-bold rounded py-2 px-4 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-blue"
              >
                Unfollow
              </Link>
              <Link
                to="/#"
                className="block border border-blueGray-300 hover:border-indigo-500 text-blueGray-900 hover:text-white font-body font-bold rounded py-2 px-4 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-blue"
              >
                Sales
              </Link>
            </div>
          </div>
          <div className="activity-infinite m-auto grid grid-cols-1 gap-4">
            <div
              className="activity-box bg-purple-50 border border-purple-100 sm:flex p-4 rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="flex-shrink-0	activity-image relative rounded">
                <img
                  className="w-full sm:h-28 sm:w-28 rounded object-cover mb-4 sm:mb-0"
                  src="assets/images/product/18.jpg"
                  alt="title"
                />
                <span className="flex items-center justify-center absolute top-4 -right-4 bg-purple-100 rounded-lg w-8 h-8 mx-auto mb-1">
                  <img
                    className="w-4 h-4"
                    src="assets/images/activity-icon.svg"
                    alt="title"
                  />
                </span>
              </div>
              <div className="activity-content flex flex-col flex-grow justify-center sm:pl-6">
                <div className="mb-2">
                  <h4 className="font-display text-xl text-blueGray-900 font-bold">
                    Top VIP Pass #12
                  </h4>
                </div>
                <p className="font-body font-semibold text-sm text-blueGray-600 mb-2">
                  Listed by{" "}
                  <Link
                    className="text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500 underline-hover"
                    to="/creator-published"
                  >
                    @Nikky_Smith
                  </Link>
                </p>
                <p className="font-body text-sm text-blueGray-600">
                  <img
                    className="w-4 h-4 inline-block mr-2 mb-1"
                    src="assets/images/clock-icon.svg"
                    alt="title"
                  />
                  1 mins ago
                </p>
              </div>
            </div>
            <div
              className="activity-box bg-amber-50 border border-amber-100 sm:flex p-4 rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="flex-shrink-0	activity-image relative rounded">
                <img
                  className="w-full sm:h-28 sm:w-28 rounded object-cover mb-4 sm:mb-0"
                  src="assets/images/product/19.jpg"
                  alt="title"
                />
                <span className="flex items-center justify-center absolute top-4 -right-4 bg-amber-100 rounded-lg w-8 h-8 mx-auto mb-1">
                  <img
                    className="w-4 h-4"
                    src="assets/images/activity-icon2.svg"
                    alt="title"
                  />
                </span>
              </div>
              <div className="activity-content flex flex-col flex-grow justify-center sm:pl-6">
                <div className="mb-2">
                  <h4 className="font-display text-xl text-blueGray-900 font-bold">
                    Jhon_Doe
                  </h4>
                </div>
                <p className="font-body font-semibold text-sm text-blueGray-600 mb-2">
                  Started following{" "}
                  <Link
                    className="text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500 underline-hover"
                    to="/creator-published"
                  >
                    {" "}
                    @Nikky_Smith
                  </Link>
                </p>
                <p className="font-body text-sm text-blueGray-600">
                  <img
                    className="w-4 h-4 inline-block mr-2 mb-1"
                    src="assets/images/clock-icon.svg"
                    alt="title"
                  />
                  1 mins ago
                </p>
              </div>
            </div>
            <div
              className="activity-box bg-amber-50 border border-amber-100 sm:flex p-4 rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="flex-shrink-0	activity-image relative rounded">
                <img
                  className="w-full sm:h-28 sm:w-28 rounded object-cover mb-4 sm:mb-0"
                  src="assets/images/product/20.jpg"
                  alt="title"
                />
                <span className="flex items-center justify-center absolute top-4 -right-4 bg-amber-100 rounded-lg w-8 h-8 mx-auto mb-1">
                  <img
                    className="w-4 h-4"
                    src="assets/images/activity-icon2.svg"
                    alt="title"
                  />
                </span>
              </div>
              <div className="activity-content flex flex-col flex-grow justify-center sm:pl-6">
                <div className="mb-2">
                  <h4 className="font-display text-xl text-blueGray-900 font-bold">
                    Jhon Doe
                  </h4>
                </div>
                <p className="font-body font-semibold text-sm text-blueGray-600 mb-2">
                  Started following{" "}
                  <Link
                    className="text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500 underline-hover"
                    to="/creator-published"
                  >
                    {" "}
                    @Nikky_Smith
                  </Link>
                </p>
                <p className="font-body text-sm text-blueGray-600">
                  <img
                    className="w-4 h-4 inline-block mr-2 mb-1"
                    src="assets/images/clock-icon.svg"
                    alt="title"
                  />
                  1 mins ago
                </p>
              </div>
            </div>
            <div
              className="activity-box bg-blueGray-50 border border-blueGray-100 sm:flex p-4 rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="flex-shrink-0	activity-image relative rounded">
                <img
                  className="w-full sm:h-28 sm:w-28 rounded object-cover mb-4 sm:mb-0"
                  src="assets/images/product/21.jpg"
                  alt="title"
                />
                <span className="flex items-center justify-center absolute top-4 -right-4 bg-blueGray-100 rounded-lg w-8 h-8 mx-auto mb-1">
                  <img
                    className="w-4 h-4"
                    src="assets/images/activity-icon3.svg"
                    alt="title"
                  />
                </span>
              </div>
              <div className="activity-content flex flex-col flex-grow justify-center sm:pl-6">
                <div className="mb-2">
                  <h4 className="font-display text-xl text-blueGray-900 font-bold">
                    Top VIP Pass #12
                  </h4>
                </div>
                <p className="font-body font-semibold text-sm text-blueGray-600 mb-2">
                  Removed following{" "}
                  <Link
                    className="text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500 underline-hover"
                    to="/creator-published"
                  >
                    @Nikky_Smith
                  </Link>
                </p>
                <p className="font-body text-sm text-blueGray-600">
                  <img
                    className="w-4 h-4 inline-block mr-2 mb-1"
                    src="assets/images/clock-icon.svg"
                    alt="title"
                  />
                  1 mins ago
                </p>
              </div>
            </div>
            <div
              className="activity-box bg-green-50 border border-green-100 sm:flex p-4 rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="flex-shrink-0	activity-image relative rounded">
                <img
                  className="w-full sm:h-28 sm:w-28 rounded object-cover mb-4 sm:mb-0"
                  src="assets/images/product/22.jpg"
                  alt="title"
                />
                <span className="flex items-center justify-center absolute top-4 -right-4 bg-green-100 rounded-lg w-8 h-8 mx-auto mb-1">
                  <img
                    className="w-4 h-4"
                    src="assets/images/activity-icon4.svg"
                    alt="title"
                  />
                </span>
              </div>
              <div className="activity-content flex flex-col flex-grow justify-center sm:pl-6">
                <div className="mb-2">
                  <h4 className="font-display text-xl text-blueGray-900 font-bold">
                    Untitled
                  </h4>
                </div>
                <p className="font-body font-semibold text-sm text-blueGray-600 mb-2">
                  Purchased by{" "}
                  <Link
                    className="text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500 underline-hover"
                    to="/creator-published"
                  >
                    @Jhon_Doe{" "}
                  </Link>{" "}
                  for 0.11 ETH from{" "}
                  <Link
                    className="text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500 underline-hover"
                    to="/creator-published"
                  >
                    {" "}
                    @Robert
                  </Link>
                </p>
                <p className="font-body text-sm text-blueGray-600">
                  <img
                    className="w-4 h-4 inline-block mr-2 mb-1"
                    src="assets/images/clock-icon.svg"
                    alt="title"
                  />
                  10 mins ago
                </p>
              </div>
            </div>
            <div
              className="activity-box bg-green-50 border border-green-100 sm:flex p-4 rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="flex-shrink-0	activity-image relative rounded">
                <img
                  className="w-full sm:h-28 sm:w-28 rounded object-cover mb-4 sm:mb-0"
                  src="assets/images/product/23.jpg"
                  alt="title"
                />
                <span className="flex items-center justify-center absolute top-4 -right-4 bg-green-100 rounded-lg w-8 h-8 mx-auto mb-1">
                  <img
                    className="w-4 h-4"
                    src="assets/images/activity-icon4.svg"
                    alt="title"
                  />
                </span>
              </div>
              <div className="activity-content flex flex-col flex-grow justify-center sm:pl-6">
                <div className="mb-2">
                  <h4 className="font-display text-xl text-blueGray-900 font-bold">
                    Untitled
                  </h4>
                </div>
                <p className="font-body font-semibold text-sm text-blueGray-600 mb-2">
                  Purchased by{" "}
                  <Link
                    className="text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500 underline-hover"
                    to="/creator-published"
                  >
                    @Jhon_Doe{" "}
                  </Link>{" "}
                  for 0.11 ETH from{" "}
                  <Link
                    className="text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500 underline-hover"
                    to="/creator-published"
                  >
                    {" "}
                    @Robert
                  </Link>
                </p>
                <p className="font-body text-sm text-blueGray-600">
                  <img
                    className="w-4 h-4 inline-block mr-2 mb-1"
                    src="assets/images/clock-icon.svg"
                    alt="title"
                  />
                  10 mins ago
                </p>
              </div>
            </div>
            <div
              className="activity-box bg-indigo-50 border border-indigo-100 sm:flex p-4 rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="flex-shrink-0	activity-image relative rounded">
                <img
                  className="w-full sm:h-28 sm:w-28 rounded object-cover mb-4 sm:mb-0"
                  src="assets/images/product/24.jpg"
                  alt="title"
                />
                <span className="flex items-center justify-center absolute top-4 -right-4 bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                  <img
                    className="w-4 h-4"
                    src="assets/images/activity-icon5.svg"
                    alt="title"
                  />
                </span>
              </div>
              <div className="activity-content flex flex-col flex-grow justify-center sm:pl-6">
                <div className="mb-2">
                  <h4 className="font-display text-xl text-blueGray-900 font-bold">
                    Top VIP Pass #12
                  </h4>
                </div>
                <p className="font-body font-semibold text-sm text-blueGray-600 mb-2">
                  Bid Placed by{" "}
                  <Link
                    className="text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500 underline-hover"
                    to="/creator-published"
                  >
                    {" "}
                    @Nikky_Smith
                  </Link>{" "}
                  for 0.0021 ETH{" "}
                </p>
                <p className="font-body text-sm text-blueGray-600">
                  <img
                    className="w-4 h-4 inline-block mr-2 mb-1"
                    src="assets/images/clock-icon.svg"
                    alt="title"
                  />
                  1 mins ago
                </p>
              </div>
            </div>
            <div
              className="activity-box bg-indigo-50 border border-indigo-100 sm:flex p-4 rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="flex-shrink-0	activity-image relative rounded">
                <img
                  className="w-full sm:h-28 sm:w-28 rounded object-cover mb-4 sm:mb-0"
                  src="assets/images/product/25.jpg"
                  alt="title"
                />
                <span className="flex items-center justify-center absolute top-4 -right-4 bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                  <img
                    className="w-4 h-4"
                    src="assets/images/activity-icon5.svg"
                    alt="title"
                  />
                </span>
              </div>
              <div className="activity-content flex flex-col flex-grow justify-center sm:pl-6">
                <div className="mb-2">
                  <h4 className="font-display text-xl text-blueGray-900 font-bold">
                    Top VIP Pass #12
                  </h4>
                </div>
                <p className="font-body font-semibold text-sm text-blueGray-600 mb-2">
                  Bid Placed by{" "}
                  <Link
                    className="text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500 underline-hover"
                    to="/creator-published"
                  >
                    {" "}
                    @Nikky_Smith
                  </Link>{" "}
                  for 0.0021 ETH{" "}
                </p>
                <p className="font-body text-sm text-blueGray-600">
                  <img
                    className="w-4 h-4 inline-block mr-2 mb-1"
                    src="assets/images/clock-icon.svg"
                    alt="title"
                  />
                  1 mins ago
                </p>
              </div>
            </div>
            <div
              className="activity-box bg-red-50 border border-red-100 sm:flex p-4 rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="flex-shrink-0	activity-image relative rounded">
                <img
                  className="w-full sm:h-28 sm:w-28 rounded object-cover mb-4 sm:mb-0"
                  src="assets/images/product/26.jpg"
                  alt="title"
                />
                <span className="flex items-center justify-center absolute top-4 -right-4 bg-red-100 rounded-lg w-8 h-8 mx-auto mb-1">
                  <img
                    className="w-4 h-4"
                    src="assets/images/activity-icon6.svg"
                    alt="title"
                  />
                </span>
              </div>
              <div className="activity-content flex flex-col flex-grow justify-center sm:pl-6">
                <div className="mb-2">
                  <h4 className="font-display text-xl text-blueGray-900 font-bold">
                    Eye for an Eye Platinum Lil Bitcoin
                  </h4>
                </div>
                <p className="font-body font-semibold text-sm text-blueGray-600 mb-2">
                  Liked by
                  <Link
                    className="text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500 underline-hover"
                    to="/creator-published"
                  >
                    {" "}
                    @Jhon_Doe
                  </Link>
                </p>
                <p className="font-body text-sm text-blueGray-600">
                  <img
                    className="w-4 h-4 inline-block mr-2 mb-1"
                    src="assets/images/clock-icon.svg"
                    alt="title"
                  />
                  Just now
                </p>
              </div>
            </div>
           
          </div>
        </div>
      </section>
      <FooterV2 />
    </div>
  );
};

export default Activity;
