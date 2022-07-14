import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import FooterV2 from "../../components/Footer/FooterV2";
import Header from "../../components/Header/Header";

const Login = () => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Login || Tokenmart - Largest online marketplace</title>
            </Helmet>
      <Header />
      {/*  ====================== Hero Section =============================  */}
      <section className="hero-section relative mt-2 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto relative px-4 z-10">
          <h2 className="font-display text-4xl lg:text-6xl text-blueGray-900 font-bold ">
            Login Account{" "}
          </h2>
        </div>
      </section>
      {/*  ====================== Blog Section =============================  */}
      <div className="blog-section relative mb-20 lg:mb-32">
        <div className="container mx-auto relative px-4 z-10">
          <div className="max-w-xl">
            <h3 className="block border-b border-blueGray-300 font-display text-3xl text-blueGray-900 font-bold pb-6 mb-6">
              Login
            </h3>
            <form action="#">
              <div className="mb-4">
                <label
                  className="block font-body text-blueGray-600 mb-4"
                  htmlFor="Username"
                >
                  Username or Email Address *
                </label>
                <input
                  className="border border-blueGray-300 rounded w-full px-4 py-3 font-body text-blueGray-600 placeholder-blueGray-600 transition duration-500 focus:shadow-lg focus:border-indigo-500 focus:outline-none"
                  id="Username"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block font-body text-blueGray-600 mb-4"
                  htmlFor="Password"
                >
                  Password *
                </label>
                <input
                  className="border border-blueGray-300 rounded w-full px-4 py-3 font-body text-blueGray-600 placeholder-blueGray-600 transition duration-500 focus:shadow-lg focus:border-indigo-500 focus:outline-none"
                  id="Password"
                  type="password"
                />
              </div>
              <div className="mb-6">
                <div className="flex flex-wrap items-center justify-between">
                  <div className="flex items-center cursor-pointer mr-4 my-2">
                    <input
                      type="checkbox"
                      id="checkbox"
                      className="checkbox mr-2"
                    />
                    <label
                      className="block font-body text-blueGray-600"
                      htmlFor="checkbox"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link
                    className="font-body text-blueGray-600"
                    to="/forget-password"
                  >
                    Forget password?
                  </Link>
                </div>
              </div>
              <button
                type="submit"
                className="btn inline-block text-white font-body font-medium rounded py-3 px-6 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
              >
                Log In{" "}
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
      <FooterV2 />
    </div>
  );
};

export default Login;
