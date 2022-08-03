import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import FooterV2 from "../../components/Footer/FooterV2";
import Header from "../../components/Header/Header";

const TermCondition = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Terms & Conditions || Tokenmart - Largest online marketplace
        </title>
      </Helmet>
      <Header />
      <section className="hero-section relative mt-2 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto relative px-4 z-10">
          <h2 className="font-display text-4xl lg:text-6xl text-blueGray-900 font-bold mb-4">
            Terms &amp; Condition
          </h2>
          <ul className="hero-breadcrumb font-body text-blueGray-600 flex flex-wrap items-center">
            <li className="flex items-center mr-2">
              <Link
                className="transition duration-500 hover:text-indigo-500 underline-hover"
                to="/"
              >
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
              />
              Terms &amp; Condition
            </li>
          </ul>
        </div>
      </section>
      {/*  ====================== Blog Section =============================  */}
      <div className="blog-section relative mb-20 lg:mb-32">
        <div className="container mx-auto relative px-4 z-10">
          <div className="max-w-3xl m-auto typofix">
            <h3>Information We Collect and Receive</h3>
            <p>
              This Term Conditions applies to all websites that we own and
              operate, including www.clarizent.com, our applications and/or
              APIs, and online services (our “Website”), as well as our other
              services, offerings, and other interactions (e.g., when you send
              us e-mails, subscribe to our newsletter, sign up for special
              reports, purchase products and services, attend our events,
              request information, or otherwise engage with us (together with
              our Website, collectively referred to as our “Services”).
            </p>
            <h3>Information Collected</h3>
            <p>
              This Term Conditions applies to all websites that we own and
              operate, including www.clarizent.com, our applications and/or
              APIs, and online services (our “Website”), as well as our other
              services, offerings, and other interactions (e.g., when you send
              us e-mails, subscribe to our newsletter, sign up for special
              reports, purchase products and services, attend our events,
              request information, or otherwise engage with us (together with
              our Website, collectively referred to as our “Services”).
            </p>
            <h3>How We Use</h3>
            <p>
              This Term Conditions applies to all websites that we own and
              operate, including www.clarizent.com, our applications and/or
              APIs, and online services (our “Website”), as well as our other
              services, offerings, and other interactions (e.g., when you send
              us e-mails, subscribe to our newsletter, sign up for special
              reports, purchase products and services, attend our events,
              request information, or otherwise engage with us (together with
              our Website, collectively referred to as our “Services”).
            </p>
            <h3>How We Share</h3>
            <p>
              This Term Conditions applies to all websites that we own and
              operate, including www.clarizent.com, our applications and/or
              APIs, and online services (our “Website”), as well as our other
              services, offerings, and other interactions (e.g., when you send
              us e-mails, subscribe to our newsletter, sign up for special
              reports, purchase products and services, attend our events,
              request information, or otherwise engage with us (together with
              our Website, collectively referred to as our “Services”).
            </p>
            <h3>1. Information you provide us</h3>
            <p>
              This Term Conditions applies to all websites that we own and
              operate, including www.clarizent.com, our applications and/or
              APIs, and online services (our “Website”), as well as our other
              services, offerings, and other interactions (e.g., when you send
              us e-mails, subscribe to our newsletter, sign up for special
              reports, purchase products and services, attend our events,
              request information, or otherwise engage with us (together with
              our Website, collectively referred to as our “Services”).
            </p>
            <h3>2. Information we collect from others</h3>
            <p>
              This Term Conditions applies to all websites that we own and
              operate, including www.clarizent.com, our applications and/or
              APIs, and online services (our “Website”), as well as our other
              services, offerings, and other interactions (e.g., when you send
              us e-mails, subscribe to our newsletter, sign up for special
              reports, purchase products and services, attend our events,
              request information, or otherwise engage with us (together with
              our Website, collectively referred to as our “Services”).
            </p>
          </div>
        </div>
      </div>
      <FooterV2 />
    </div>
  );
};

export default TermCondition;
