import React from "react";
import { Helmet } from "react-helmet-async";
import FooterV2 from "../../components/Footer/FooterV2";
import Header from "../../components/Header/Header";

const NotFound = () => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>404 Not Found || Tokenmart - Largest online marketplace</title>
            </Helmet>
      <Header />
      <div className="blog-section relative lg:mt-80 lg:mb-64">
        <div className="container mx-auto relative px-4 z-10">
          <img
            className="w-20 m-auto mb-10"
            src="assets/images/error-logo.png"
            alt="title"
          />
          <div className="font-display text-center font-bold text-8xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-purple-500 mb-4">
            404
          </div>
          <h4 className="font-display text-xl text-blueGray-900 font-semibold text-center mb-4">
            Error 404 : Page Not Found
          </h4>
          <div className="text-center">
            <a
              href="/"
              className="btn inline-block text-white font-body font-bold rounded py-4 px-7 mx-3 mt-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
            >
              Back To Home
            </a>
          </div>
        </div>
      </div>

      <FooterV2 />
    </div>
  );
};

export default NotFound;
