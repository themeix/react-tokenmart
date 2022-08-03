import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import FooterV2 from "../../components/Footer/FooterV2";
import HeaderV2 from "../../components/Header/HeaderV2";

const CreatorActivity = () => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Activity || Tokenmart - Largest online marketplace</title>
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
      {/*  ====================== activity Section =============================  */}
      <section className="activity-section relative mb-20 lg:mb-32">
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
              className="btn inline-block text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
            >
              Activity
            </Link>
            <Link
              to="/creator-follower"
              className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
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
          <div className="activity-infinite max-w-3xl m-auto grid grid-cols-1 gap-8">
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
                    className="text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
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
                    Jhon Doe
                  </h4>
                </div>
                <p className="font-body font-semibold text-sm text-blueGray-600 mb-2">
                  Started following{" "}
                  <Link
                    className="text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
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
                    className="text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
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
                    className="text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
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
                    className="text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                    to="/creator-published"
                  >
                    @Jhon_Doe{" "}
                  </Link>{" "}
                  for 0.11 ETH from{" "}
                  <Link
                    className="text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
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
                    className="text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                    to="/creator-published"
                  >
                    @Jhon_Doe{" "}
                  </Link>{" "}
                  for 0.11 ETH from{" "}
                  <Link
                    className="text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
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
                    className="text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
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
                    className="text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
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
                    className="text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
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
            <div
              className="activity-box bg-red-50 border border-red-100 sm:flex p-4 rounded transition duration-500 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="flex-shrink-0	activity-image relative rounded">
                <img
                  className="w-full sm:h-28 sm:w-28 rounded object-cover mb-4 sm:mb-0"
                  src="assets/images/product/27.jpg"
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
                    className="text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
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
      {/*  ====================== Footer Section =============================  */}
      <FooterV2 />
    </div>
  );
};

export default CreatorActivity;
