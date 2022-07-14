import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../blogdata";
import slugify from "slugify";

const Popularposts = () => {
  return (
    <div
      className="bg-white rounded border border-blueGray-300 transition duration-500 hover:shadow-lg px-6 py-8 mb-14"
      data-aos="fade-up"
    >
      <h3 className="font-display text-3xl text-blueGray-900 font-bold mb-6">
        Popular Posts{" "}
      </h3>
      {blogs.slice(6, 12).map((blog, index) => (
        <div
          key={index}
          className="flex items-center border-b border-blueGray-300 pb-4 mb-4"
        >
          <img
            className="w-24 h-24 rounded object-cover flex-shrink-0"
            src={blog.img}
            alt="title"
          />
          <div className="pl-4">
            <h6 className="font-display text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500">
              <Link to={`/${slugify(blog.title)}`}>{blog.title}</Link>
            </h6>
            <p className="font-body text-sm text-blueGray-600 mt-2">
              22 July, 2021
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Popularposts;
