import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ item }) => {
  return (
    <div
      className="blog-box flex justify-between flex-col rounded transition duration-500 hover:shadow-lg"
      data-aos="fade-up"
    >
      <div className="content-top">
        <div className="blog-image md:h-64 relative rounded overflow-hidden mb-6">
          <img
            className="w-full md:h-64 object-cover"
            src={item.img}
            alt="title"
          />
        </div>
        <div className="blog-content px-6">
          <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
            <Link to="/single">{item.title}</Link>
          </h3>
          <div className="flex flex-wrap font-body text-sm text-blueGray-600 mt-3 mb-5">
            <p className="mr-4">
              <img
                className="w-4 h-4 inline-block mr-1"
                src="assets/images/date-icon.svg"
                alt="title"
              />{" "}
              02 Feb 2022
            </p>
            <p>
              <img
                className="w-4 h-4 inline-block mr-1"
                src="assets/images/comment-icon.svg"
                alt="title"
              />{" "}
              04 Comments
            </p>
          </div>
          <p className="font-body text-blueGray-600 mb-5">
            Poster to so only as who go accompany texts recommendation
          </p>
        </div>
      </div>
      <div className="content-bottom px-6 pb-6">
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
  );
};

export default BlogCard;
