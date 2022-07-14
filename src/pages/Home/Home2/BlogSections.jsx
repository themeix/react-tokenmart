import React from 'react'
import { Link } from 'react-router-dom'

const BlogSections = () => {
  return (
    <section className="blog-section relative my-20 lg:my-32">
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
            Latest Blog
          </h3>
        </div>
        <Link
          to="/blog"
          className="arrow-btn block bg-indigo-100 text-indigo-500 text-sm text-sm font-body font-bold rounded py-2 px-4 ml-14 transition duration-500 hover:bg-indigo-50"
        >
          See All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        <div
          className="blog-box shadow bg-white md:flex p-6 rounded transition duration-500 hover:shadow-lg"
          data-aos="fade-up"
        >
          <div className="flex-shrink-0 blog-image relative rounded overflow-hidden mb-4 md:mb-0">
            <img
              className="w-full md:h-40 md:w-40 rounded object-cover"
              src="assets/images/product/5.jpg"
              alt="title"
            />
          </div>
          <div className="blog-content flex flex-col flex-grow justify-center md:pl-6">
            <div>
              <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                <Link to="/single">
                  Top 10 NFT Projects That the Internet
                </Link>
              </h4>
            </div>
            <div className="mt-4">
              <Link
                className="readmore-btn font-body font-normal text-indigo-500 transition duration-500 hover:text-indigo-500 underline-hover"
                to="/single"
              >
                Read More
                <img
                  className="inline-block w-3 ml-2 mb-1"
                  src="assets/images/readmore-icon.svg"
                  alt="title"
                />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="blog-box shadow bg-white md:flex p-6 rounded transition duration-500 hover:shadow-lg"
          data-aos="fade-up"
        >
          <div className="flex-shrink-0 blog-image relative rounded overflow-hidden mb-4 md:mb-0">
            <img
              className="w-full md:h-40 md:w-40 rounded object-cover"
              src="assets/images/product/6.jpg"
              alt="title"
            />
          </div>
          <div className="blog-content flex flex-col flex-grow justify-center md:pl-6">
            <div>
              <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                <Link to="/single">
                  Honoring Black History with Toddlers
                </Link>
              </h4>
            </div>
            <div className="mt-4">
              <Link
                className="readmore-btn font-body font-normal text-indigo-500 transition duration-500 hover:text-indigo-500 underline-hover"
                to="/single"
              >
                Read More
                <img
                  className="inline-block w-3 ml-2 mb-1"
                  src="assets/images/readmore-icon.svg"
                  alt="title"
                />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="blog-box shadow bg-white md:flex p-6 rounded transition duration-500 hover:shadow-lg"
          data-aos="fade-up"
        >
          <div className="flex-shrink-0 blog-image relative rounded overflow-hidden mb-4 md:mb-0">
            <img
              className="w-full md:h-40 md:w-40 rounded object-cover"
              src="assets/images/product/8.jpg"
              alt="title"
            />
          </div>
          <div className="blog-content flex flex-col flex-grow justify-center md:pl-6">
            <div>
              <h4 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
                <Link to="/single">NFT Market – A Big Benefits</Link>
              </h4>
            </div>
            <div className="mt-4">
              <Link
                className="readmore-btn font-body font-normal text-indigo-500 transition duration-500 hover:text-indigo-500 underline-hover"
                to="/single"
              >
                Read More
                <img
                  className="inline-block w-3 ml-2 mb-1"
                  src="assets/images/readmore-icon.svg"
                  alt="title"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default BlogSections