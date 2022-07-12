import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BlogCard from '../../Blog/BlogCard'
import { blogs } from '../../Blog/blogdata'

const BlogsSection = () => {
    const [blogCount, setblogCount] = useState(3);
  return (
    <section className="blog-section my-20 lg:my-32">
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
            <div className="blog-infinite grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
              {blogs.slice(0, blogCount).map((item, index) => (
                <BlogCard key={index} item={item} />
              ))}
            </div>
            <div className="flex justify-center mt-8 lg:mt-14">
              {blogCount === 3 && (
                <button
                  onClick={() => setblogCount(6)}
                  className="btn load-more-btn flex items-center text-white font-body font-bold rounded px-6 py-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  Load More{" "}
                  <img
                    className="w-4 h-4 flex-shrink-0 animate-spin ml-2"
                    src="assets/images/spinner-icon.svg"
                    alt="title"
                  />
                </button>
              )}
            </div>
          </div>
        </section>
  )
}

export default BlogsSection