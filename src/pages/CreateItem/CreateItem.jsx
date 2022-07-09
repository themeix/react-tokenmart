import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import FooterV2 from "../../components/Footer/FooterV2";
import Header from "../../components/Header/Header";

const CreateItem = () => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Create Product || Tokenmart - Largest online marketplace</title>
            </Helmet>
      <Header />
      {/*  ====================== Hero Section =============================  */}
      <section className="hero-section relative mt-2 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto relative px-4 z-10">
          <h2 className="font-display text-4xl lg:text-6xl text-blueGray-900 font-bold mb-4">
            Create Item{" "}
          </h2>
          <ul className="hero-breadcrumb font-body text-blueGray-600 flex flex-wrap items-center">
            <li className="flex items-center mr-2">
              <Link
                className="transition duration-500 hover:text-indigo-500 underline-hover"
                to="/"
              >
                {" "}
                Home
              </Link>
            </li>
            <li className="flex items-center mr-2">
              <img
                className="w-3 h-3 inline-block mr-2"
                src="assets/images/right-arrow.svg"
                alt="title"
              />
              <Link
                className="transition duration-500 hover:text-indigo-500 underline-hover"
                to="/explore"
              >
                {" "}
                Explore
              </Link>
            </li>
            <li className="flex items-center text-indigo-500 mr-2">
              <img
                className="w-3 h-3 inline-block mr-2"
                src="assets/images/right-arrow.svg"
                alt="title"
              />{" "}
              Create Item
            </li>
          </ul>
        </div>
      </section>
      {/*  ====================== Blog Section =============================  */}
      <div className="blog-section relative mb-20 lg:mb-32">
        <div className="container mx-auto relative px-4 z-10">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            <div className="md:col-span-4">
              <form>
                <div className="mb-4">
                  <label
                    className="block font-display text-blueGray-600 font-bold mb-4"
                    htmlFor="Title"
                  >
                    Title
                  </label>
                  <input
                    className="border border-blueGray-300 rounded w-full px-4 py-3 font-body text-blueGray-600 placeholder-blueGray-600 transition duration-500 focus:shadow-lg focus:border-indigo-500 focus:outline-none"
                    id="Title"
                    type="text"
                    placeholder="eg: Cybar Boss & Mega Boss #3 "
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block font-display text-blueGray-600 font-bold mb-4"
                    htmlFor="Description"
                  >
                    Description
                  </label>
                  <textarea
                    rows={4}
                    className="border border-blueGray-300 rounded w-full px-4 py-3 font-body text-blueGray-600 placeholder-blueGray-600 transition duration-500 focus:shadow-lg focus:border-indigo-500 focus:outline-none"
                    id="Description"
                    placeholder="eg: Cybar Boss & Mega Boss #3 "
                    defaultValue={""}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block font-display text-blueGray-600 font-bold mb-4"
                    htmlFor="Upload"
                  >
                    Upload File
                  </label>
                  <div className="cursor-pointer relative w-full h-52 rounded border-dashed border-2 border-blueGray-300 flex justify-center items-center">
                    <div className="cursor-pointer absolute">
                      <div className="flex flex-col items-center justify-center">
                        <span className="text-center block font-body text-blueGray-600 mb-2">
                          PNG, JPG, GIF, WEBP or MP4, MAX 300mb.{" "}
                        </span>
                        <div className="flex items-center px-6 py-3 bg-blueGray-300 rounded">
                          <span className="font-display text-blueGray-600 font-bold mr-2">
                            Chosse File
                          </span>{" "}
                          <img
                            className="w-4 h-4"
                            src="assets/images/upload-icon.svg"
                            alt="title"
                          />
                        </div>
                      </div>
                    </div>
                    <input
                      type="file"
                      className="h-full w-full opacity-0"
                      id="Upload"
                      name="Upload"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block font-display text-blueGray-600 font-bold mb-4"
                    htmlFor="Price"
                  >
                    Price
                  </label>
                  <div className="relative">
                    <input
                      className="border border-blueGray-300 rounded w-full px-4 py-3 font-body text-blueGray-600 placeholder-blueGray-600 transition duration-500 focus:shadow-lg focus:border-indigo-500 focus:outline-none"
                      id="Price"
                      type="text"
                      placeholder="Enter Your Price"
                    />
                    <select
                      className="font-body text-blueGray-600 absolute bottom-3 right-2"
                      name="Price"
                    >
                      <option value={1}>ETH</option>
                      <option value={1}>DAR</option>
                      <option value={1}>DRL</option>
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block font-display text-blueGray-600 font-bold mb-4"
                    htmlFor="Offer"
                  >
                    Offer Price
                  </label>
                  <input
                    className="border border-blueGray-300 rounded w-full px-4 py-3 font-body text-blueGray-600 placeholder-blueGray-600 transition duration-500 focus:shadow-lg focus:border-indigo-500 focus:outline-none"
                    id="Offer"
                    type="text"
                    placeholder="Suggested 0, 10%, 20% 30% Maximum is 70% "
                  />
                </div>
                <div className="mb-10">
                  <div className="flex flex-wrap items-center">
                    <div className="flex items-center cursor-pointer mr-4 my-2">
                      <input
                        type="checkbox"
                        id="checkbox"
                        className="checkbox mr-2"
                        defaultChecked
                      />
                      <label
                        className="block font-body text-blueGray-600"
                        htmlFor="checkbox"
                      >
                        Put on Sale
                      </label>
                    </div>
                    <div className="flex items-center cursor-pointer	mr-4 my-2">
                      <input
                        type="checkbox"
                        id="checkbox2"
                        className="checkbox mr-2"
                      />
                      <label
                        className="block font-body text-blueGray-600"
                        htmlFor="checkbox2"
                      >
                        Instant Sale Price
                      </label>
                    </div>
                    <div className="flex items-center cursor-pointer	mr-4 my-2">
                      <input
                        type="checkbox"
                        id="checkbox3"
                        className="checkbox mr-2"
                      />
                      <label
                        className="block font-body text-blueGray-600"
                        htmlFor="checkbox3"
                      >
                        Unlock Purchased
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn inline-block text-white font-body font-medium rounded py-3 px-6 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  Create Item{" "}
                  <img
                    className="w-4 h-4 inline-block ml-2 mb-1"
                    src="assets/images/check-white-icon.svg"
                    alt="title"
                  />
                </button>
              </form>
            </div>
            <div className="md:col-span-2">
              <span className="block font-display text-blueGray-600 font-bold mb-4">
                Preview
              </span>
              <div className="relative w-full h-full border border-blueGray-300 rounded lg:h-96">
                <img
                  className="w-full rounded object-cover"
                  src="assets/images/product/5.jpg"
                  alt="title"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  ====================== Footer Section =============================  */}
      <FooterV2 />
    </div>
  );
};

export default CreateItem;
