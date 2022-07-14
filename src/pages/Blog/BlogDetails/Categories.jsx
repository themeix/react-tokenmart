import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div
    className="bg-white rounded border border-blueGray-300 transition duration-500 hover:shadow-lg px-6 py-8 mb-14"
    data-aos="fade-up"
  >
    <h3 className="font-display text-3xl text-blueGray-900 font-bold mb-6">
      Categories{" "}
    </h3>
    <div className="block">
      <Link
        to="/category"
        className="flex justify-between border border-blueGray-300 hover:border-indigo-500 text-blueGray-600 hover:text-white font-body rounded py-3 px-4 mb-4 transition duration-500 hover:bg-indigo-500"
      >
        <span>Creator</span> <span>24</span>
      </Link>
      <Link
        to="/category"
        className="flex justify-between border border-blueGray-300 hover:border-indigo-500 text-blueGray-600 hover:text-white font-body rounded py-3 px-4 mb-4 transition duration-500 hover:bg-indigo-500"
      >
        <span>Auction</span> <span>20</span>
      </Link>
      <Link
        to="/category"
        className="flex justify-between border border-blueGray-300 hover:border-indigo-500 text-blueGray-600 hover:text-white font-body rounded py-3 px-4 mb-4 transition duration-500 hover:bg-indigo-500"
      >
        <span>Marketplace</span> <span>17</span>
      </Link>
      <Link
        to="/category"
        className="flex justify-between border border-blueGray-300 hover:border-indigo-500 text-blueGray-600 hover:text-white font-body rounded py-3 px-4 mb-4 transition duration-500 hover:bg-indigo-500"
      >
        <span>Sports</span> <span>13</span>
      </Link>
      <Link
        to="/category"
        className="flex justify-between border border-blueGray-300 hover:border-indigo-500 text-blueGray-600 hover:text-white font-body rounded py-3 px-4 mb-4 transition duration-500 hover:bg-indigo-500"
      >
        <span>Outing</span> <span>11</span>
      </Link>
    </div>
  </div>
  )
}

export default Categories