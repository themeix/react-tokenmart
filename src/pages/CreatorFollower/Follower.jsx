import React from 'react'
import { Link } from 'react-router-dom'

const Follower = ({item}) => {
  return (
    <div
              className="seller-box text-center rounded transition duration-500 hover:shadow-lg p-6"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <img
                    className="w-20 h-20 object-cover rounded-lg"
                    src={item.img}
                    alt="title"
                  />
                  <span className="absolute bottom-2 -right-0">
                    <img
                      className="w-5 h-5"
                      src="assets/images/verified-icon.svg"
                      alt="title"
                    />
                  </span>
                </div>
              </div>
              <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                <Link to="/creator-published">{item.name} </Link>
              </h6>
              <p className="font-body text-sm text-blueGray-600 mt-2">
                <img
                  className="w-4 h-4 inline-block mr-1"
                  src="assets/images/diamond-icon.svg"
                  alt="title"
                />{" "}
                Diamond Seller
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="font-body text-sm text-blueGray-400">Level</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-600">
                    <img
                      className="w-3 h-3 mr-1"
                      src="assets/images/up-icon.svg"
                      alt="title"
                    />{" "}
                    4{" "}
                  </h5>
                </div>
                <div>
                  <p className="font-body text-sm text-blueGray-400">Items</p>
                  <h5 className="flex items-center justify-center text-xl font-body font-bold text-blueGray-600">
                    {" "}
                    15{" "}
                  </h5>
                </div>
              </div>
            </div>
  )
}

export default Follower