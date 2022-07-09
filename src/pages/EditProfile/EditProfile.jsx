import React from "react";
import { Helmet } from "react-helmet";
import FooterV2 from "../../components/Footer/FooterV2";
import Header from "../../components/Header/Header";

const EditProfile = () => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Edit Profile || Tokenmart - Largest online marketplace</title>
            </Helmet>
      <Header />
      <section className="hero-section relative mt-2 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto relative px-4 z-10">
          <h2 className="font-display text-4xl lg:text-6xl text-blueGray-900 font-bold mb-4">
            Edit Profile{" "}
          </h2>
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
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="border border-blueGray-300 rounded w-full px-4 py-3 font-body text-blueGray-600 placeholder-blueGray-600 transition duration-500 focus:shadow-lg focus:border-indigo-500 focus:outline-none"
                    id="name"
                    type="text"
                    placeholder="Add Name "
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block font-display text-blueGray-600 font-bold mb-4"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="border border-blueGray-300 rounded w-full px-4 py-3 font-body text-blueGray-600 placeholder-blueGray-600 transition duration-500 focus:shadow-lg focus:border-indigo-500 focus:outline-none"
                    id="email"
                    type="email"
                    placeholder="Add Email "
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block font-display text-blueGray-600 font-bold mb-4"
                    htmlFor="Description"
                  >
                    Bio
                  </label>
                  <textarea
                    rows={4}
                    className="border border-blueGray-300 rounded w-full px-4 py-3 font-body text-blueGray-600 placeholder-blueGray-600 transition duration-500 focus:shadow-lg focus:border-indigo-500 focus:outline-none"
                    id="Description"
                    placeholder=" Add Bio "
                    defaultValue={""}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block font-display text-blueGray-600 font-bold mb-4"
                    htmlFor="Upload"
                  >
                    Upload Picture
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
                  <select
                    className="border border-blueGray-300 rounded w-full px-4 py-3 font-body text-blueGray-600 placeholder-blueGray-600 transition duration-500 focus:shadow-lg focus:border-indigo-500"
                    name="Currency"
                  >
                    <option value={1}>ETH</option>
                    <option value={1}>DAR</option>
                    <option value={1}>DRL</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    className="block font-display text-blueGray-600 font-bold mb-4"
                    htmlFor="facebook"
                  >
                    Facebook Username
                  </label>
                  <input
                    className="border border-blueGray-300 rounded w-full px-4 py-3 font-body text-blueGray-600 placeholder-blueGray-600 transition duration-500 focus:shadow-lg focus:border-indigo-500 focus:outline-none"
                    id="facebook"
                    type="text"
                    placeholder="Add Facebook Account"
                  />
                </div>
                <div className="mb-10">
                  <label
                    className="block font-display text-blueGray-600 font-bold mb-4"
                    htmlFor="twitter"
                  >
                    Twitter Username
                  </label>
                  <input
                    className="border border-blueGray-300 rounded w-full px-4 py-3 font-body text-blueGray-600 placeholder-blueGray-600 transition duration-500 focus:shadow-lg focus:border-indigo-500 focus:outline-none"
                    id="twitter"
                    type="text"
                    placeholder="Add Facebook Account"
                  />
                </div>
                <button
                  type="submit"
                  className="btn inline-block text-white font-body font-medium rounded py-3 px-6 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  Update Profile{" "}
                  <img
                    className="w-4 h-4 inline-block ml-2 mb-1"
                    src="assets/images/check-white-icon.svg"
                    alt="title"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*  ====================== Footer Section =============================  */}
      <FooterV2 />
    </div>
  );
};

export default EditProfile;
