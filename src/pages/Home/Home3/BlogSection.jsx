import React from 'react'
import { Link } from 'react-router-dom'
import BlogCard from '../../Blog/BlogCard'
import { blogs } from '../../Blog/blogdata'

const BlogSection = () => {
  return (
    <section className="blog-section my-20 lg:my-32">
    <div className="container mx-auto relative px-4 z-10">
      <div className="section-title relative flex flex-wrap items-center justify-between border-b border-blueGray-300 pb-6 mb-8 lg:mb-14">
        <div>
          <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">
            Latest Blog
          </h3>
          <span className="w-20	h-1.5	absolute -bottom-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg" />
        </div>
        <Link
          to="/blog"
          className="arrow-btn block bg-indigo-100 text-indigo-500 text-sm text-sm font-body font-bold rounded py-2 px-4 transition duration-500 hover:bg-indigo-50"
        >
          See All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {blogs.slice(0,4).map((blog, index) => (
        <BlogCard item={blog} key={index} />
      ))}
      </div>
   
    </div>
  </section>
  )
}

export default BlogSection