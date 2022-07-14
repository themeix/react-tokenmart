import React from "react";
import { Link } from "react-router-dom";

const WalletItem = ({ modalOpen, setmodalOpen, item }) => {
  return (
    <div
      style={{ zIndex: "-1" }}
      className="flex flex-wrap lg:flex-nowrap items-center justify-between bg-indigo-50 rounded px-6 py-4 mb-8"
      data-aos="fade-up"
    >
      <div className="flex items-center flex-grow my-2">
        <img
          className="w-24 h-24 object-cover rounded"
          src={item.img}
          alt="title"
        />
        <div className="pl-4">
          <h3 className="block font-display text-2xl text-blueGray-900 font-bold mb-2">
            {item.title}
          </h3>
          <p className="font-body text-blueGray-600">{item.description}</p>
        </div>
      </div>
      <div className="flex-shrink-0 pl-28 my-2">
        <Link
          onClick={() => setmodalOpen(!modalOpen)}
          to="#popup-modal"
          className="popup-modal btn inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-body font-medium rounded py-3 px-6 transition duration-500 hover:from-indigo-500 hover:to-purple-500"
        >
          Connect{" "}
          <img
            className="w-4 h-4 inline-block ml-2 mb-1"
            src="assets/images/check-white-icon.svg"
            alt="title"
          />
        </Link>
      </div>
    </div>
  );
};

export default WalletItem;
