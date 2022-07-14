import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section relative footer-shape pb-20 lg:pb-28 pt-40 lg:pt-56">
      <div className="container mx-auto relative px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-8">
          <div className="footer-widget xl:flex xl:flex-col xl:justify-center xl:col-span-2">
            <Link to="/" className="block mb-10">
              <img
                className="h-10"
                src="assets/images/header-logo.svg"
                alt="title"
              />
            </Link>
            <div className="social-share flex items-center">
              <Link
                className="flex items-center justify-center w-10 h-10 bg-blueGray-200 rounded-lg border border-blueGray-200 transition duration-500 hover:bg-indigo-500 mr-2"
                to="/"
              >
                <img
                  className="w-4 h-4"
                  src="assets/images/facebook-icon.svg"
                  alt="title"
                />
              </Link>
              <Link
                className="flex items-center justify-center w-10 h-10 bg-blueGray-200 rounded-lg border border-blueGray-200 transition duration-500 hover:bg-indigo-500 mr-2"
                to="/#"
              >
                <img
                  className="w-4 h-4"
                  src="assets/images/twitter-icon.svg"
                  alt="title"
                />
              </Link>
              <Link
                className="flex items-center justify-center w-10 h-10 bg-blueGray-200 rounded-lg border border-blueGray-200 transition duration-500 hover:bg-indigo-500 mr-2"
                to="/"
              >
                <img
                  className="w-4 h-4"
                  src="assets/images/instagram-icon.svg"
                  alt="title"
                />
              </Link>
              <Link
                className="flex items-center justify-center w-10 h-10 bg-blueGray-200 rounded-lg border border-blueGray-200 transition duration-500 hover:bg-indigo-500 mr-2"
                to="/"
              >
                <img
                  className="w-4 h-4"
                  src="assets/images/linkein-icon.svg"
                  alt="title"
                />
              </Link>
            </div>
          </div>
          <div className="footer-widget pb-4 lg:pb-0 lg:border-b-0 border-b border-indigo-200">
            <h4 className="font-display text-xl text-blueGray-900 font-semibold">
              Navigation
            </h4>
            <ul className="mt-4 xl:mt-10 flex flex-wrap xl:block">
              <li className="mb-4 mr-4">
                <Link
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="mb-4 mr-4">
                <Link
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  to="/explore"
                >
                  Explore
                </Link>
              </li>
              <li className="mb-4 mr-4">
                <Link
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  to="/wallet"
                >
                  Wallet
                </Link>
              </li>
              <li className="mb-4 mr-4">
                <Link
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  to="/creator-published"
                >
                  Author
                </Link>
              </li>
              <li className="mb-4 mr-4">
                <Link
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  to="/term-condition"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-widget pb-4 lg:pb-0 lg:border-b-0 border-b border-indigo-200">
            <h4 className="font-display text-xl text-blueGray-900 font-semibold">
              Explore
            </h4>
            <ul className="mt-4 xl:mt-10 flex flex-wrap xl:block">
              <li className="mb-4 mr-4">
                <Link
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  to="/explore"
                >
                  Explore Artwork
                </Link>
              </li>
              <li className="mb-4 mr-4">
                <Link
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  to="/item-single"
                >
                  Single Artwork
                </Link>
              </li>
              <li className="mb-4 mr-4">
                <Link
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  to="/leaderboard"
                >
                  Explore Creators
                </Link>
              </li>
              <li className="mb-4 mr-4">
                <Link
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  to="/creator-published"
                >
                  Single Creators
                </Link>
              </li>
              <li className="mb-4 mr-4">
                <Link
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  to="/#"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-widget pb-4 lg:pb-0 lg:border-b-0 border-b border-indigo-200">
            <h4 className="font-display text-xl text-blueGray-900 font-semibold">
              Community
            </h4>
            <ul className="mt-4 xl:mt-10 flex flex-wrap xl:block">
              <li className="mb-4 mr-4">
                <Link
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  to="/item-single"
                >
                  Item Details
                </Link>
              </li>
              <li className="mb-4 mr-4">
                <Link
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  to="/item-single2"
                >
                  Item Details v2
                </Link>
              </li>
              <li className="mb-4 mr-4">
                <Link
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  to="/activity"
                >
                  Activity
                </Link>
              </li>
              <li className="mb-4 mr-4">
                <Link
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-widget col-span-1 md:col-span-2">
            <h4 className="font-display text-xl text-blueGray-900 font-semibold">
              Subscribe Us
            </h4>
            <form className="footer-newsletter flex items-center w-full mb-4 mt-4 xl:mt-10">
              <input
                className="bg-transparent border-2 border-r-0 border-indigo-500 transition duration-500 focus:outline-none hover:bg-white rounded-l w-full h-14 p-4"
                type="text"
                placeholder="Your e-mail address"
              />
              <button
                className="flex items-center rounded-r h-14 py-4 px-8 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                type="submit"
              >
                <img
                  className="w-6 h-6"
                  src="assets/images/newsletter-icon.svg"
                  alt="title"
                />
              </button>
            </form>
            <p className="font-body text-sm text-blueGray-600">
              Your privacy protected! We dont disclose Email.
            </p>
          </div>
        </div>
        <div className="lg:text-center mt-8 lg:mt-14">
          <p className="font-body text-sm text-blueGray-600">
            © <span id="spanYear">2021</span> Tokenmart - All Rights Reserved by
            <Link
              to="/https://themeix.com/"
              className="text-indigo-500 underline-hover"
              rel="noopener"
              target="_blank"
            >
              themeix
            </Link>
          </p>
        </div>
      </div>
      <Link
        to="/"
        className="footer-back w-10 h-10  flex fixed bottom-8 right-8 z-50 bg-blueGray-600 rounded-lg items-center justify-center"
      >
        <svg
          width={18}
          height={10}
          viewBox="0 0 18 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 9L9 1L17 9"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </footer>
  );
};

export default Footer;
