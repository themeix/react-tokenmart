import React from "react";
import { Helmet } from "react-helmet-async";
import FooterV2 from "../../components/Footer/FooterV2";
import Header from "../../components/Header/Header";

const Contact = () => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Contact || Tokenmart - Largest online marketplace</title>
            </Helmet>
        <Header/>
      <section className="hero-section relative mt-2 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto relative px-4 z-10 text-center">
          <h2 className="font-display text-4xl lg:text-6xl text-blueGray-900 font-bold mb-4">
            Contact
          </h2>
        </div>
      </section>
      {/*  ====================== Blog Section =============================  */}
      <div className="blog-section relative mb-20 lg:mb-32">
        <div className="container mx-auto relative px-4 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-1">
              <h3 className="block font-display text-2xl text-blueGray-900 font-bold mb-6">
                Send Message
              </h3>
              <form>
                <div className="mb-4">
                  <input
                    className="border border-blueGray-300 rounded w-full px-4 py-3 font-body text-blueGray-600 placeholder-blueGray-600 transition duration-500 focus:shadow-lg focus:border-indigo-500 focus:outline-none"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="border border-blueGray-300 rounded w-full px-4 py-3 font-body text-blueGray-600 placeholder-blueGray-600 transition duration-500 focus:shadow-lg focus:border-indigo-500 focus:outline-none"
                    type="text"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="border border-blueGray-300 rounded w-full px-4 py-3 font-body text-blueGray-600 placeholder-blueGray-600 transition duration-500 focus:shadow-lg focus:border-indigo-500 focus:outline-none"
                    type="text"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    rows={8}
                    className="border border-blueGray-300 rounded w-full px-4 py-3 font-body text-blueGray-600 placeholder-blueGray-600 transition duration-500 focus:shadow-lg focus:border-indigo-500 focus:outline-none"
                    placeholder="Your Message"
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  className="btn inline-block text-white font-body font-medium rounded py-3 px-6 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  Send Message{" "}
                  <img
                    className="w-4 h-4 inline-block ml-2 mb-1"
                    src="assets/images/check-white-icon.svg"
                    alt="title"
                  />
                </button>
              </form>
            </div>
            <div className="md:col-span-1">
              <div className="bg-blueGray-100 px-14 py-20 rounded">
                <h3 className="block font-display text-2xl text-blueGray-900 font-bold mb-2">
                  Get in touch
                </h3>
                <p className="font-body text-blueGray-600 mb-6">
                  Adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis
                  Etiam porta sem ipsum er malesuada magna mollis Nulla vitae
                  elit libero, a pharetra augue. ibero, a pharetra augue Donec
                  sed odio dui.
                </p>
                <h5 className="block font-display text-blueGray-900 font-bold mb-2">
                  Open Hours
                </h5>
                <p className="font-body text-blueGray-600">
                  Monday-Friday: 07AM - 5PM
                </p>
                <p className="font-body text-blueGray-600 mb-2">
                  Saturday-Sunday: 09AM - 5PM
                </p>
                <h5 className="block font-display text-blueGray-900 font-bold mb-2 pt-4">
                  Here following or contact information
                </h5>
                <p className="font-body text-blueGray-600 mb-2">
                  <img
                    className="w-5 h-5 inline-block mr-2"
                    src="assets/images/contact-icon1.svg"
                    alt=""
                  />{" "}
                  +1 (123) 123 4567
                </p>
                <p className="font-body text-blueGray-600">
                  <img
                    className="w-5 h-5 inline-block mr-2"
                    src="assets/images/contact-icon2.svg"
                    alt=""
                  />{" "}
                  support@themeix.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterV2/>
    </div>
  );
};

export default Contact;
