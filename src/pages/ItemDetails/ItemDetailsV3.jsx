import React from "react";
import FooterV2 from "../../components/Footer/FooterV2";
import Header from "../../components/Header/Header";

const ItemDetailsV3 = () => {
  return (
    <div>
 <Header/>
      {/*  ====================== Hero Section =============================  */}
      <section className="hero-section relative mt-2 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto relative px-4 z-10">
          <h2 className="font-display text-4xl lg:text-6xl text-blueGray-900 font-bold mb-4">
            Item Details{" "}
          </h2>
          <ul className="hero-breadcrumb font-body text-blueGray-600 flex flex-wrap items-center">
            <li className="flex items-center mr-2">
              <a
                className="transition duration-500 hover:text-indigo-500 underline-hover"
                href="index"
              >
                {" "}
                Home
              </a>
            </li>
            <li className="flex items-center mr-2">
              <img
                className="w-3 h-3 inline-block mr-2"
                src="assets/images/right-arrow.svg"
                alt="title"
              />
              <a
                className="transition duration-500 hover:text-indigo-500 underline-hover"
                href="explore"
              >
                {" "}
                Explore
              </a>
            </li>
            <li className="flex items-center text-indigo-500 mr-2">
              <img
                className="w-3 h-3 inline-block mr-2"
                src="assets/images/right-arrow.svg"
                alt="title"
              />{" "}
              Item Details
            </li>
          </ul>
        </div>
      </section>
      {/*  ====================== Product Section =============================  */}
      <section className="product-section relative mb-20 lg:mb-32">
        <div className="container mx-auto relative px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-20">
            <div className="lg:col-span-2">
              <img
                className="w-full mb-10 rounded"
                data-aos="fade-up"
                src="assets/images/product/26.jpg"
                alt="title"
              />
              <p
                className="font-body text-blueGray-600 mb-10"
                data-aos="fade-up"
              >
                Auctions ends in{" "}
                <span className="font-display countdown-time9 text-blueGray-900 font-bold" />
              </p>
              <div
                className="border border-blueGray-300 rounded p-6"
                data-aos="fade-up"
              >
                <h6 className="font-display text-blueGray-900 font-bold mb-2">
                  Contract Address
                </h6>
                <p className="font-body text-indigo-500 break-all mb-2">
                  1x1dDB2C0817daF18632662E71fdD2dbDC0eB3a9Ec
                </p>
                <h6 className="font-display text-blueGray-900 font-bold mb-2">
                  Token ID
                </h6>
                <p className="font-body text-blueGray-600 break-all mb-2">
                  100300041083
                </p>
                <h6 className="font-display text-blueGray-900 font-bold mb-2">
                  Metadata
                </h6>
                <p className="font-body text-blueGray-600">Editable</p>
              </div>
            </div>
            <div className="lg:col-span-3">
              <h3 className="font-display text-4xl text-blueGray-900 font-bold mb-10">
                Water Color War Paint
              </h3>
              <p className="font-body text-blueGray-600 mb-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum obcaecati dignissimos quae quo ad iste ipsum officiis
                deleniti asperiores sit.
              </p>
              <div className="flex flex-wrap items-center relative mb-10">
                <div className="flex flex-wrap items-center border-r-none lg:border-r border-blueGray-300 pr-10 mb-2 mr-10">
                  <img
                    className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                    src="assets/images/author/8.jpg"
                    alt="title"
                  />
                  <div className="ml-2">
                    <p className="font-body text-sm text-blueGray-600">
                      Creator
                    </p>
                    <h6 className="font-display text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500">
                      <a href="creator-published">Darrell Steward</a>
                    </h6>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <img
                    className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                    src="assets/images/author/6.jpg"
                    alt="title"
                  />
                  <div className="ml-2">
                    <p className="font-body text-sm text-blueGray-600">Owner</p>
                    <h6 className="font-display text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500">
                      <a href="creator-published">Leslie Alexander</a>
                    </h6>
                  </div>
                </div>
              </div>
              <h4 className="font-display text-blueGray-900 font-bold">
                Highest Price
              </h4>
              <div className="flex items-center mb-10">
                <p className="flex items-center font-body font-bold text-blueGray-900 text-2xl my-1">
                  <img
                    className="w-6 h-6 inline-block mr-1"
                    src="assets/images/cryptocurrency-icon.svg"
                    alt="title"
                  />{" "}
                  0.008 ETH
                </p>
                <p className="font-body text-sm text-blueGray-600 ml-4">
                  ≈$26.69
                </p>
              </div>
              <a
                href="#popup-modal"
                className="popup-modal btn inline-block text-xl text-white font-body font-medium rounded py-3 px-8 mb-10 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
              >
                <img
                  className="w-5 h-5 inline-block mb-1 mr-1"
                  src="assets/images/cart-icon.svg"
                  alt="title"
                />{" "}
                Buy Now
              </a>
              <div
                id="popup-modal"
                className="max-w-xl m-auto bg-white rounded shadow zoom-anim-dialog mfp-hide p-10"
              >
                <img
                  className="w-14 h-14 block m-auto mb-4"
                  src="assets/images/transaction-icon.svg"
                  alt="title"
                />
                <p className="font-body  font-bold text-center text-blueGray-600 ml-4">
                  You will pay
                </p>
                <div className="flex items-center justify-center mb-2">
                  <p className="flex items-center font-body font-bold text-blueGray-900 text-4xl my-1">
                    <img
                      className="w-8 h-8 inline-block mr-1"
                      src="assets/images/cryptocurrency-icon.svg"
                      alt="title"
                    />{" "}
                    0.008 ETH
                  </p>
                </div>
                <p className="font-body text-sm text-blueGray-600 text-center mb-8">
                  ≈$26.69
                </p>
                <div className="flex items-center justify-between mb-4">
                  <p className="font-display text-blueGray-600 font-bold">
                    Available
                  </p>
                  <p className="font-display text-blueGray-900 font-medium">
                    20 ETH
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 items-center justify-center">
                  <button
                    type="submit"
                    className="btn block bg-indigo-50 text-center font-body font-bold rounded py-4 px-7 transition duration-500 hover:text-white hover:bg-blueGray-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn block bg-indigo-500 text-white text-center font-body font-bold rounded py-4 px-7 transition duration-500 hover:bg-blueGray-900"
                  >
                    Confirm
                  </button>
                </div>
              </div>
              <nav className="tabs-nav">
                <ul className="flex items-center">
                  <li className="font-display text-blueGray-900 font-bold mb-2 mr-4 lg:mr-8 active">
                    <a href="#tab2">History</a>
                  </li>
                  <li className="font-display text-blueGray-900 font-bold mb-2 mr-4 lg:mr-8">
                    <a href="#tab3">Additional Info</a>
                  </li>
                </ul>
              </nav>
              <div className="tabs-content">
                <div className="tabs-item" id="tab2">
                  <div className="flex flex-wrap items-center border-b border-blueGray-300 pt-4 pb-4 mb-4">
                    <img
                      className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                      src="assets/images/author/1.jpg"
                      alt="title"
                    />
                    <div className="ml-2">
                      <h6 className="font-display text-blueGray-600 font-bold mb-1">
                        <a
                          className="transition duration-500 hover:text-indigo-500 underline-hover"
                          href="creator-published"
                        >
                          Cameron Williamson
                        </a>
                        <span className="font-body font-bold text-sm text-blueGray-600 ml-2">
                          edited item description
                        </span>
                      </h6>
                      <p className="font-body text-xs text-blueGray-600">
                        10 mins ago
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center border-b border-blueGray-300 pb-4 mb-4">
                    <img
                      className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                      src="assets/images/author/2.jpg"
                      alt="title"
                    />
                    <div className="ml-2">
                      <h6 className="font-display text-blueGray-600 font-bold mb-1">
                        <a
                          className="transition duration-500 hover:text-indigo-500 underline-hover"
                          href="creator-published"
                        >
                          Erbar Williamson
                        </a>
                        <span className="font-body font-bold text-sm text-blueGray-600 ml-2">
                          listed item
                        </span>
                      </h6>
                      <p className="font-body text-xs text-blueGray-600">
                        1 hours ago
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center">
                    <img
                      className="border-2 border-white w-10 h-10 object-cover rounded-lg"
                      src="assets/images/author/3.jpg"
                      alt="title"
                    />
                    <div className="ml-2">
                      <h6 className="font-display text-blueGray-600 font-bold mb-1">
                        <a
                          className="transition duration-500 hover:text-indigo-500 underline-hover"
                          href="creator-published"
                        >
                          Cameron Rasars
                        </a>
                        <span className="font-body font-bold text-sm text-blueGray-600 ml-2">
                          listed item
                        </span>
                      </h6>
                      <p className="font-body text-xs text-blueGray-600">
                        2 days ago
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tabs-item hidden typofix" id="tab3">
                  <div className="mt-6">
                    <table>
                      <tbody>
                        <tr>
                          <td className="font-display text-blueGray-900 font-bold">
                            Contact Address
                          </td>
                          <td className="font-body text-blueGray-600">
                            #23grhg4542
                          </td>
                        </tr>
                        <tr>
                          <td className="font-display text-blueGray-900 font-bold">
                            Token ID
                          </td>
                          <td className="font-body text-blueGray-600">
                            343trgt23grhg4542
                          </td>
                        </tr>
                        <tr>
                          <td className="font-display text-blueGray-900 font-bold">
                            Token Standard
                          </td>
                          <td className="font-body text-blueGray-600">
                            ERC-1155
                          </td>
                        </tr>
                        <tr>
                          <td className="font-display text-blueGray-900 font-bold">
                            Blockchain
                          </td>
                          <td className="font-body text-blueGray-600">
                            Ethereum
                          </td>
                        </tr>
                        <tr>
                          <td className="font-display text-blueGray-900 font-bold">
                            Metadata
                          </td>
                          <td className="font-body text-blueGray-600">
                            Centralized
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  ====================== Footer Section =============================  */}
      <FooterV2 />
    </div>
  );
};

export default ItemDetailsV3;