import React from "react";

import { AiOutlineClose } from "react-icons/ai";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const PlaceBidModal = ({ modalIsOpen, setmodalOpen }) => {
  return (
    <Modal
      open={modalIsOpen}
      onClose={() => setmodalOpen(false)}
      center
      classNames={{
        modalAnimationIn: "zoomIn",
      }}
      animationDuration={800}
    >
      <form
        style={{ height: "max-content" }}
        id="popup-modal"
        className="max-w-xl bg-white m-auto bg-white rounded shadow   p-10  zoom   fixed inset-0 z-50 "
      >
        <AiOutlineClose
          onClick={() => setmodalOpen(false)}
          size={24}
          style={{ position: "absolute", top: "20px", right: "20px" }}
        />
        <h3 className="font-display text-2xl text-blueGray-900 font-bold mb-10 text-center">
          Your Bid
        </h3>
        <div className="flex items-center justify-between mb-4">
          <p className="font-display text-blueGray-600 font-bold">
            Current Bid
          </p>
          <p className="font-display text-blueGray-900 font-medium">
            0.008 ETH
          </p>
        </div>
        <div className="flex items-center justify-between mb-8">
          <p className="font-display text-blueGray-600 font-bold">
            Minimum markup
          </p>
          <p className="font-display text-blueGray-900 font-medium">
            0.008 ETH
          </p>
        </div>
        <div className="flex items-center justify-center mb-2">
          <p className="font-display text-blueGray-600 font-bold lg:mr-6">
            Big
          </p>
          <input
            className="appearance-none focus:outline-none w-36 lg:w-44 font-display text-center text-4xl lg:text-6xl text-blueGray-900 font-semibold lg:mr-6"
            defaultValue="0.008"
          />
          <p className="flex items-center font-display text-2xl text-blueGray-600 font-medium">
            <img
              className="w-7 h-7 inline-block mr-1"
              src="assets/images/cryptocurrency-icon.svg"
              alt="title"
            />
            ETH
          </p>
        </div>
        <p className="font-body text-sm text-blueGray-600 text-center mb-8">
          ≈$26.69
        </p>
        <div className="flex bg-indigo-50 rounded p-4 mb-4">
          <img
            className="w-6 h-6 inline-block"
            src="assets/images/cryptocurrency-icon.svg"
            alt="title"
          />
          <div className="ml-4">
            <p className="font-body text-sm text-blueGray-600">
              {" "}
              Don't have enough crypto?
            </p>
            <p className="font-display text-xl text-indigo-500 font-medium mr-6">
              <a href="/">Buy Crypto/Deposit!</a>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <p className="font-display text-blueGray-600 font-bold">Available</p>
          <p className="font-display text-blueGray-900 font-medium">20 ETH</p>
        </div>
        <button
          type="submit"
          className="btn block w-full  text-white text-center font-body font-bold rounded py-4 px-7 transition duration-500 hover:bg-blueGray-900 bg-indigo-500"
        >
          Placed a bid
        </button>
      </form>
    </Modal>
  );
};

export default PlaceBidModal;
