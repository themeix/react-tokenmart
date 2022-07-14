import React from "react";
import { Link } from "react-router-dom";

const ProductItem3 = ({ item }) => {
  return (
    <div
      className="product-box flex justify-between flex-col bg-white shadow rounded overflow-hidden transition hover:shadow-lg"
      data-aos="fade-up"
    >
      <div className="product-top">
        <div className="product-image relative rounded overflow-hidden m-6">
          <img
            className="w-full sm:h-56 rounded object-cover"
            src={item.img}
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
                <img src="assets/images/heart-icon2.svg" alt="title" />
              </span>
              <p className="font-body font-bold text-sm text-blueGray-600 ml-2">
                90 Likes
              </p>
            </div>
          </div>
          <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
            <Link to="/item-single"> {item.name} </Link>
          </h3>
        </div>
      </div>
      <div className="product-bottom flex items-center flex-wrap justify-between pt-4 px-6 pb-6">
        <div>
          <p className="font-body text-sm text-blueGray-600">Current Bid</p>
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
          <p className="font-body text-sm text-blueGray-600">≈$26.69</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem3;
