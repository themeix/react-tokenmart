import React from "react";

const Intro = () => {
  return (
    <>
      <section className="demo-intro lg:h-screen lg:flex lg:items-center mb-20 lg:mb-0">
        <div className="container mx-auto px-10 lg:px-0">
          <div className="short-info text-center mb-20 mt-20 lg:mt-0">
            <img
              className="inline-block"
              src="assets/images/header-logo.svg"
              alt="header-logo"
            />
            <h3 className="text-xl font-normal font-display text-blueGray-900 ">
              Tokenmart - Largest online marketplace
            </h3>
          </div>
          <div className="grid lg:grid-cols-2 lg:gap-32 gap-10">
            <div className="flex-col transform  hover:-translate-y-2 transition duration-500">
              <a href="#">
                <img
                  className="mb-6 lg:w-96 w-full "
                  src="assets/images/light.png"
                  alt="light"
                />
              </a>
              <a
                className="intro-link text-center  font-body font-bold"
                href="index-dark.html"
                target="_blank"
              >
                <h3 className="title text-xl">Light Demo</h3>
              </a>
            </div>
            <div className="flex-col transform  hover:-translate-y-2 transition duration-500">
              <a href="#">
                <img
                  className="mb-6 lg:w-96 w-full"
                  src="assets/images/light.png"
                  alt="light"
                />
              </a>
              <a
                className="intro-link text-center  font-body font-bold"
                href="index-dark.html"
                target="_blank"
              >
                <h3 className="title text-xl">Dark Demo</h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
