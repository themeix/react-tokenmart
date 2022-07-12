import React from 'react'
import { Link } from 'react-router-dom'

const TopSellers = () => {
  return (
    <section className="top-seller-section my-20 lg:my-32">
    <div className="container mx-auto relative px-4 z-10">
      <div className="section-title flex flex-wrap items-center justify-between mb-8 lg:mb-14">
        <div className="flex items-center mb-3">
          <span className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg w-10 h-10 mr-4">
            <img
              className="w-4 h-4"
              src="assets/images/sec-icon3.svg"
              alt="title"
            />
          </span>
          <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">
            Seller Leaderboard
          </h3>
        </div>
        <Link
          to="/leaderboard"
          className="arrow-btn block bg-indigo-100 text-indigo-500 text-sm text-sm font-body font-bold rounded py-2 px-4 ml-14 transition duration-500 hover:bg-indigo-50"
        >
          See All
        </Link>
      </div>
      <div
        className="infinite-seller-box-table seller-box-table"
        data-aos="fade-up"
      >
        <div className="table-wrapper justify-self-auto grid grid-cols-12 gap-8 mb-8 transition duration-500 hover:shadow-sm rounded p-5">
          <div className="flex items-center col-span-4">
            <h2 className="flex items-center font-display text-xl text-blueGray-900 font-semibold mr-6">
              <img
                className="w-4 h-4 mr-2"
                src="assets/images/up-icon.svg"
                alt="title"
              />{" "}
              1{" "}
            </h2>
            <div className="flex-shrink-0 relative mr-6">
              <img
                className="w-20 h-20 object-cover rounded-lg"
                src="assets/images/author/1.jpg"
                alt="title"
              />
              <span className="absolute bottom-3 -right-1">
                <img
                  className="w-5 h-5"
                  src="assets/images/verified-icon.svg"
                  alt="title"
                />
              </span>
            </div>
            <div className="relative block">
              <h6 className="font-display text-lg text-blueGray-900 font-semibold transition hover:text-indigo-500">
                <Link to="/creator-published">Steven Robart</Link>
              </h6>
            </div>
          </div>
          <div className="grid items-center grid-cols-3 gap-4 lg:w-60 col-span-3">
            <div className="text-center">
              <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                <img
                  className="w-5 h-5"
                  src="assets/images/level-icon.svg"
                  alt="title"
                />
              </span>
              <p className="font-display text-sm text-blueGray-900 font-bold">
                8 Level
              </p>
            </div>
            <div className="text-center">
              <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                <img
                  className="w-4 h-4"
                  src="assets/images/like-icon.svg"
                  alt="title"
                />
              </span>
              <p className="font-display text-sm text-blueGray-900 font-bold">
                290 Likes
              </p>
            </div>
            <div className="text-center">
              <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                <img
                  className="w-4 h-4"
                  src="assets/images/item-icon.svg"
                  alt="title"
                />
              </span>
              <p className="font-display text-sm text-blueGray-900 font-bold">
                150 Items
              </p>
            </div>
          </div>
          <div className="thumbnail grid gap-4 items-center grid-cols-5 col-span-5 md:col-span-5">
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/1.gif"
                alt="title"
              />
            </Link>
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/2.jpg"
                alt="title"
              />
            </Link>
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/3.jpg"
                alt="title"
              />
            </Link>
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/4.jpg"
                alt="title"
              />
            </Link>
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/5.jpg"
                alt="title"
              />
            </Link>
          </div>
        </div>
        <div className="table-wrapper justify-self-auto grid grid-cols-12 gap-8 mb-8 transition duration-500 hover:shadow-sm rounded p-5">
          <div className="flex items-center col-span-4">
            <h2 className="flex items-center font-display text-xl text-blueGray-900 font-semibold mr-6">
              <img
                className="w-4 h-4 mr-2"
                src="assets/images/up-icon.svg"
                alt="title"
              />{" "}
              2{" "}
            </h2>
            <div className="flex-shrink-0 relative mr-6">
              <img
                className="w-20 h-20 object-cover rounded-lg"
                src="assets/images/author/2.jpg"
                alt="title"
              />
              <span className="absolute bottom-3 -right-1">
                <img
                  className="w-5 h-5"
                  src="assets/images/verified-icon.svg"
                  alt="title"
                />
              </span>
            </div>
            <div className="relative block">
              <h6 className="font-display text-lg text-blueGray-900 font-semibold transition hover:text-indigo-500">
                <Link to="/creator-published">Madison Harper</Link>
              </h6>
            </div>
          </div>
          <div className="grid items-center grid-cols-3 gap-4 lg:w-60 col-span-3">
            <div className="text-center">
              <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                <img
                  className="w-5 h-5"
                  src="assets/images/level-icon.svg"
                  alt="title"
                />
              </span>
              <p className="font-display text-sm text-blueGray-900 font-bold">
                8 Level
              </p>
            </div>
            <div className="text-center">
              <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                <img
                  className="w-4 h-4"
                  src="assets/images/like-icon.svg"
                  alt="title"
                />
              </span>
              <p className="font-display text-sm text-blueGray-900 font-bold">
                290 Likes
              </p>
            </div>
            <div className="text-center">
              <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                <img
                  className="w-4 h-4"
                  src="assets/images/item-icon.svg"
                  alt="title"
                />
              </span>
              <p className="font-display text-sm text-blueGray-900 font-bold">
                150 Items
              </p>
            </div>
          </div>
          <div className="thumbnail grid gap-4 items-center grid-cols-5 col-span-5 md:col-span-5">
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/6.jpg"
                alt="title"
              />
            </Link>
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/2.gif"
                alt="title"
              />
            </Link>
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/8.jpg"
                alt="title"
              />
            </Link>
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/9.jpg"
                alt="title"
              />
            </Link>
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/10.jpg"
                alt="title"
              />
            </Link>
          </div>
        </div>
        <div className="table-wrapper justify-self-auto grid grid-cols-12 gap-8 mb-8 transition duration-500 hover:shadow-sm rounded p-5">
          <div className="flex items-center col-span-4">
            <h2 className="flex items-center font-display text-xl text-blueGray-900 font-semibold mr-6">
              <img
                className="w-4 h-4 mr-2"
                src="assets/images/down-icon.svg"
                alt="title"
              />{" "}
              3{" "}
            </h2>
            <div className="flex-shrink-0 relative mr-6">
              <img
                className="w-20 h-20 object-cover rounded-lg"
                src="assets/images/author/3.jpg"
                alt="title"
              />
              <span className="absolute bottom-3 -right-1">
                <img
                  className="w-5 h-5"
                  src="assets/images/verified-icon.svg"
                  alt="title"
                />
              </span>
            </div>
            <div className="relative block">
              <h6 className="font-display text-lg text-blueGray-900 font-semibold transition hover:text-indigo-500">
                <Link to="/creator-published">Joana Black</Link>
              </h6>
            </div>
          </div>
          <div className="grid items-center grid-cols-3 gap-4 lg:w-60 col-span-3">
            <div className="text-center">
              <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                <img
                  className="w-5 h-5"
                  src="assets/images/level-icon.svg"
                  alt="title"
                />
              </span>
              <p className="font-display text-sm text-blueGray-900 font-bold">
                8 Level
              </p>
            </div>
            <div className="text-center">
              <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                <img
                  className="w-4 h-4"
                  src="assets/images/like-icon.svg"
                  alt="title"
                />
              </span>
              <p className="font-display text-sm text-blueGray-900 font-bold">
                290 Likes
              </p>
            </div>
            <div className="text-center">
              <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                <img
                  className="w-4 h-4"
                  src="assets/images/item-icon.svg"
                  alt="title"
                />
              </span>
              <p className="font-display text-sm text-blueGray-900 font-bold">
                150 Items
              </p>
            </div>
          </div>
          <div className="thumbnail grid gap-4 items-center grid-cols-5 col-span-5 md:col-span-5">
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/11.jpg"
                alt="title"
              />
            </Link>
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/12.jpg"
                alt="title"
              />
            </Link>
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/3.gif"
                alt="title"
              />
            </Link>
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/15.jpg"
                alt="title"
              />
            </Link>
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/16.jpg"
                alt="title"
              />
            </Link>
          </div>
        </div>
        <div className="table-wrapper justify-self-auto grid grid-cols-12 gap-8 mb-8 transition duration-500 hover:shadow-sm rounded p-5">
          <div className="flex items-center col-span-4">
            <h2 className="flex items-center font-display text-xl text-blueGray-900 font-semibold mr-6">
              <img
                className="w-4 h-4 mr-2"
                src="assets/images/up-icon.svg"
                alt="title"
              />{" "}
              4{" "}
            </h2>
            <div className="flex-shrink-0 relative mr-6">
              <img
                className="w-20 h-20 object-cover rounded-lg"
                src="assets/images/author/4.jpg"
                alt="title"
              />
              <span className="absolute bottom-3 -right-1">
                <img
                  className="w-5 h-5"
                  src="assets/images/verified-icon.svg"
                  alt="title"
                />
              </span>
            </div>
            <div className="relative block">
              <h6 className="font-display text-lg text-blueGray-900 font-semibold transition hover:text-indigo-500">
                <Link to="/creator-published">Lea Morrow</Link>
              </h6>
            </div>
          </div>
          <div className="grid items-center grid-cols-3 gap-4 lg:w-60 col-span-3">
            <div className="text-center">
              <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                <img
                  className="w-5 h-5"
                  src="assets/images/level-icon.svg"
                  alt="title"
                />
              </span>
              <p className="font-display text-sm text-blueGray-900 font-bold">
                8 Level
              </p>
            </div>
            <div className="text-center">
              <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                <img
                  className="w-4 h-4"
                  src="assets/images/like-icon.svg"
                  alt="title"
                />
              </span>
              <p className="font-display text-sm text-blueGray-900 font-bold">
                290 Likes
              </p>
            </div>
            <div className="text-center">
              <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                <img
                  className="w-4 h-4"
                  src="assets/images/item-icon.svg"
                  alt="title"
                />
              </span>
              <p className="font-display text-sm text-blueGray-900 font-bold">
                150 Items
              </p>
            </div>
          </div>
          <div className="thumbnail grid gap-4 items-center grid-cols-5 col-span-5 md:col-span-5">
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/17.jpg"
                alt="title"
              />
            </Link>
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/18.jpg"
                alt="title"
              />
            </Link>
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/4.gif"
                alt="title"
              />
            </Link>
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/21.jpg"
                alt="title"
              />
            </Link>
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/22.jpg"
                alt="title"
              />
            </Link>
          </div>
        </div>
        <div className="table-wrapper justify-self-auto grid grid-cols-12 gap-8 mb-8 transition duration-500 hover:shadow-sm rounded p-5">
          <div className="flex items-center col-span-4">
            <h2 className="flex items-center font-display text-xl text-blueGray-900 font-semibold mr-6">
              <img
                className="w-4 h-4 mr-2"
                src="assets/images/down-icon.svg"
                alt="title"
              />{" "}
              5{" "}
            </h2>
            <div className="flex-shrink-0 relative mr-6">
              <img
                className="w-20 h-20 object-cover rounded-lg"
                src="assets/images/author/5.jpg"
                alt="title"
              />
              <span className="absolute bottom-3 -right-1">
                <img
                  className="w-5 h-5"
                  src="assets/images/verified-icon.svg"
                  alt="title"
                />
              </span>
            </div>
            <div className="relative block">
              <h6 className="font-display text-lg text-blueGray-900 font-semibold transition hover:text-indigo-500">
                <Link to="/creator-published">Melanie Cox</Link>
              </h6>
            </div>
          </div>
          <div className="grid items-center grid-cols-3 gap-4 lg:w-60 col-span-3">
            <div className="text-center">
              <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                <img
                  className="w-5 h-5"
                  src="assets/images/level-icon.svg"
                  alt="title"
                />
              </span>
              <p className="font-display text-sm text-blueGray-900 font-bold">
                8 Level
              </p>
            </div>
            <div className="text-center">
              <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                <img
                  className="w-4 h-4"
                  src="assets/images/like-icon.svg"
                  alt="title"
                />
              </span>
              <p className="font-display text-sm text-blueGray-900 font-bold">
                290 Likes
              </p>
            </div>
            <div className="text-center">
              <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                <img
                  className="w-4 h-4"
                  src="assets/images/item-icon.svg"
                  alt="title"
                />
              </span>
              <p className="font-display text-sm text-blueGray-900 font-bold">
                150 Items
              </p>
            </div>
          </div>
          <div className="thumbnail grid gap-4 items-center grid-cols-5 col-span-5 md:col-span-5">
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/23.jpg"
                alt="title"
              />
            </Link>
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/24.jpg"
                alt="title"
              />
            </Link>
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/25.jpg"
                alt="title"
              />
            </Link>
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/26.jpg"
                alt="title"
              />
            </Link>
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/5.gif"
                alt="title"
              />
            </Link>
          </div>
        </div>
        <div className="table-wrapper justify-self-auto grid grid-cols-12 gap-8 mb-8 transition duration-500 hover:shadow-sm rounded p-5">
          <div className="flex items-center col-span-4">
            <h2 className="flex items-center font-display text-xl text-blueGray-900 font-semibold mr-6">
              <img
                className="w-4 h-4 mr-2"
                src="assets/images/down-icon.svg"
                alt="title"
              />{" "}
              6{" "}
            </h2>
            <div className="flex-shrink-0 relative mr-6">
              <img
                className="w-20 h-20 object-cover rounded-lg"
                src="assets/images/author/6.jpg"
                alt="title"
              />
              <span className="absolute bottom-3 -right-1">
                <img
                  className="w-5 h-5"
                  src="assets/images/verified-icon.svg"
                  alt="title"
                />
              </span>
            </div>
            <div className="relative block">
              <h6 className="font-display text-lg text-blueGray-900 font-semibold transition hover:text-indigo-500">
                <Link to="/creator-published">Trinity Levesque</Link>
              </h6>
            </div>
          </div>
          <div className="grid items-center grid-cols-3 gap-4 lg:w-60 col-span-3">
            <div className="text-center">
              <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                <img
                  className="w-5 h-5"
                  src="assets/images/level-icon.svg"
                  alt="title"
                />
              </span>
              <p className="font-display text-sm text-blueGray-900 font-bold">
                8 Level
              </p>
            </div>
            <div className="text-center">
              <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                <img
                  className="w-4 h-4"
                  src="assets/images/like-icon.svg"
                  alt="title"
                />
              </span>
              <p className="font-display text-sm text-blueGray-900 font-bold">
                290 Likes
              </p>
            </div>
            <div className="text-center">
              <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
                <img
                  className="w-4 h-4"
                  src="assets/images/item-icon.svg"
                  alt="title"
                />
              </span>
              <p className="font-display text-sm text-blueGray-900 font-bold">
                150 Items
              </p>
            </div>
          </div>
          <div className="thumbnail grid gap-4 items-center grid-cols-5 col-span-5 md:col-span-5">
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/5.jpg"
                alt="title"
              />
            </Link>
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/6.jpg"
                alt="title"
              />
            </Link>
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/7.jpg"
                alt="title"
              />
            </Link>
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/6.gif"
                alt="title"
              />
            </Link>
            <Link to="/item-single">
              <img
                className="w-20 h-20 rounded object-cover"
                src="assets/images/product/9.jpg"
                alt="title"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default TopSellers