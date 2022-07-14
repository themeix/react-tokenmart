import React from "react";
import { Link } from "react-router-dom";

const VerticalProduct = ({ item }) => {
  return (
    <div
      className="product-box shadow bg-white lg:flex p-6 rounded transition duration-500 hover:shadow-lg"
      data-aos="fade-up"
    >
      <div className="flex-shrink-0 product-image relative rounded mb-4 lg:mb-0 overflow-hidden">
        <img
          className="w-full lg:h-56 lg:w-56 xl:w-72 object-cover"
          src={item.img}
          alt="title"
        />
      </div>
      <div className="product-content flex flex-col flex-grow justify-center md:pl-6">
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
              className="relative -left-2"
              data-tooltip="Steven Robart"
            >
              <img
                className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                src="assets/images/author/2.jpg"
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
              <img src="assets/images/heart-icon2.svg" alt="title" />
            </span>
            <p className="font-body font-bold text-sm text-blueGray-600 ml-2">
              79
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
            <Link to="/item-single2">{item.name} </Link>
          </h3>
        </div>
        <div className="mt-4">
          <p className="font-body text-sm text-blueGray-600">Current Bid</p>
          <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
            <img
              className="w-5 h-5 inline-block mr-1"
              src="assets/images/cryptocurrency-icon.svg"
              alt="title"
            />{" "}
            0.008 ETH
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerticalProduct;
