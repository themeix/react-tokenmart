import React from 'react'
import { Link } from 'react-router-dom'

const Tags = () => {
  return (
    <div
                className="bg-white rounded border border-blueGray-300 transition duration-500 hover:shadow-lg px-6 py-8 mb-14"
                data-aos="fade-up"
              >
                <h3 className="font-display text-3xl text-blueGray-900 font-bold mb-3">
                  Tags{" "}
                </h3>
                <div className="flex flex-wrap">
                  <Link
                    to="/tag"
                    className="btn block border border-blueGray-300 hover:border-indigo-500 text-blueGray-600 hover:text-white font-body rounded py-3 px-5 mr-4 mt-4 transition duration-500 hover:bg-indigo-500"
                  >
                    Paid Marketing
                  </Link>
                  <Link
                    to="/tag"
                    className="btn block border border-blueGray-300 hover:border-indigo-500 text-blueGray-600 hover:text-white font-body rounded py-3 px-5 mr-4 mt-4 transition duration-500 hover:bg-indigo-500"
                  >
                    Digital Marketing
                  </Link>
                  <Link
                    to="/tag"
                    className="btn block border border-blueGray-300 hover:border-purple-500 text-blueGray-600 hover:text-white font-body rounded py-3 px-5 mr-4 mt-4 transition duration-500 hover:bg-purple"
                  >
                    Blues
                  </Link>
                  <Link
                    to="/tag"
                    className="btn block border border-blueGray-300 hover:border-indigo-500 text-blueGray-600 hover:text-white font-body rounded py-3 px-5 mr-4 mt-4 transition duration-500 hover:bg-indigo-500"
                  >
                    COVID
                  </Link>
                  <Link
                    to="/tag"
                    className="btn block border border-blueGray-300 hover:border-purple-500 text-blueGray-600 hover:text-white font-body rounded py-3 px-5 mr-4 mt-4 transition duration-500 hover:bg-purple"
                  >
                    Web Design
                  </Link>
                  <Link
                    to="/tag"
                    className="btn block border border-blueGray-300 hover:border-indigo-500 text-blueGray-600 hover:text-white font-body rounded py-3 px-5 mr-4 mt-4 transition duration-500 hover:bg-indigo-500"
                  >
                    Content Marketing
                  </Link>
                </div>
              </div>
  )
}

export default Tags