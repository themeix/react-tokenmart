import React from 'react'
import { Link } from 'react-router-dom'
import Timer2 from '../../components/Timer/Timer2'

const ProductItem2 = ({item}) => {
  return (
    <div
    className="product-box bg-white flex justify-between flex-col  rounded overflow-hidden transition duration-500 hover:shadow-lg"
    data-aos="fade-up"
  >
    <div className="product-top">
      <div className="product-image relative rounded overflow-hidden">
        <img
          className="w-full md:h-64 object-cover"
          src={item.img}
          alt="title"
        />

        
        <Timer2/>

      </div>
      <div className="product-content px-6 pt-6">
        <div className="flex items-center justify-between">
          <div>
            {" "}
            <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
              <Link to="/item-single">{item.name} </Link>
            </h3>
          </div>
          <span className="font-body text-blueGray-600 flex items-center flex-shrink-0 ml-4">
            <img
              className="w-5 h-5 mr-2"
              src="assets/images/heart-icon.svg"
              alt="title"
            />
            4k
          </span>
        </div>
        <div className="flex mb-8 mt-2">
          <Link
            to="/creator-published"
            className="relative"
            data-data-tooltip="Steven Robart"
          >
            <img
              className="border-2 border-white w-10 h-10 object-cover rounded-lg"
              src="assets/images/author/1.jpg"
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
          <Link
            to="/creator-published"
            className="relative -left-2"
            data-data-tooltip="Steven Robart"
          >
            <img
              className="border-2 border-white w-10 h-10 object-cover rounded-lg"
              src="assets/images/author/2.jpg"
              alt="title"
            />
          </Link>
          <Link
            to="/creator-published"
            className="relative -left-4"
            data-data-tooltip="Steven Robart"
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
      </div>
    </div>
    <div className="product-bottom flex flex-wrap justify-between px-6 pb-6">
      <div>
        <p className="font-body text-sm text-blueGray-600">
          Current Bid
        </p>
        <p className="flex items-center font-body font-bold text-blueGray-900 my-1">
          <img
            className="w-5 h-5 inline-block mr-1"
            src="assets/images/cryptocurrency-icon.svg"
            alt="title"
          />
          0.005 ETH
        </p>
        <p className="font-body text-sm text-blueGray-600">≈$16.68</p>
      </div>
      <div className="text-center">
        <Link
          to="/item-single"
          className="border-gradient block bg-gradient-to-r text-indigo-500 font-body font-semibold rounded py-2 px-4 hover:text-white hover:from-indigo-500 hover:to-purple-500 mb-2"
        >
          <img
            className="w-4 h-4 inline-block mb-1"
            src="assets/images/bid-icon.svg"
            alt="title"
          />{" "}
          Place a bid
        </Link>
        <p className="font-body text-xs text-blueGray-600">
          14 bids total
        </p>
      </div>
    </div>
  </div>
  )
}

export default ProductItem2