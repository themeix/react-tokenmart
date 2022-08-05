import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Popup from "reactjs-popup";

const ByenowModal = ({ modalOpen, setmodalOpen }) => {
  return (
    <>
      <Popup
        open={modalOpen}
        closeOnDocumentClick
        onClose={() => setmodalOpen(false)}
      >
        <div
          id=""
          style={{ height: "max-content" }}
          className="max-w-xl m-auto zoom bg-white rounded shadow   p-10    fixed inset-0 z-50 "
        >
          <AiOutlineClose
            onClick={() => setmodalOpen(false)}
            size={24}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              cursor: "pointer",
            }}
          />
          <img
            className="w-14 h-14 block m-auto mb-4"
            src="assets/images/transaction-icon.svg"
            alt="title"
          />
          <p className="font-body  font-bold text-center text-blueGray-600 ml-4">
            You will pay
          </p>
          <div className="flex items-center justify-center mb-2">
            <p className="flex items-center font-body font-bold text-blueGray-900 text-4xl my-1">
              <img
                className="w-8 h-8 inline-block mr-1"
                src="assets/images/cryptocurrency-icon.svg"
                alt="title"
              />{" "}
              0.008 ETH
            </p>
          </div>
          <p className="font-body text-sm text-blueGray-600 text-center mb-8">
            ≈$26.69
          </p>
          <div className="flex items-center justify-between mb-4">
            <p className="font-display text-blueGray-600 font-bold">
              Available
            </p>
            <p className="font-display text-blueGray-900 font-medium">20 ETH</p>
          </div>
          <div className="grid grid-cols-2 gap-4 items-center justify-center">
            <button
              type="submit"
              className="btn block bg-indigo-50 text-center font-body font-bold rounded py-4 px-7 transition duration-500 hover:text-white hover:bg-blueGray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn block bg-indigo-500 text-white text-center font-body font-bold rounded py-4 px-7 transition duration-500 hover:bg-blueGray-900"
            >
              Confirm
            </button>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default ByenowModal;
