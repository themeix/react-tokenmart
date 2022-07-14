import React from "react";
import { Link } from "react-router-dom";

const ExploreTabs = () => {
  return (
    <div className="hidden lg:flex flex-wrap items-center">
      <Link
        to="/explore"
        className="btn inline-block text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
      >
        All
      </Link>
      <Link
        to="/explore"
        className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
      >
        Art
      </Link>
      <Link
        to="/explore"
        className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
      >
        Music
      </Link>
      <Link
        to="/explore"
        className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
      >
        Domain Names
      </Link>
      <Link
        to="/explore"
        className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
      >
        Virtual Worlds
      </Link>
      <Link
        to="/explore"
        className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
      >
        Trading Cards
      </Link>
      <Link
        to="/explore"
        className="block border border-blueGray-300 text-blueGray-900 hover:text-white font-body font-bold rounded py-3 px-6 mr-4 mb-4 transition duration-500 hover:bg-indigo-500 hover:border-indigo-500"
      >
        Trading Cards
      </Link>
    </div>
  );
};

export default ExploreTabs;
