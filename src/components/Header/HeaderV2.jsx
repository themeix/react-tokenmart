import React, { useState } from "react";
import { Link } from "react-router-dom";
import { list } from "./list";

const HeaderV2 = () => {
  const [active, setactive] = useState(false);
  return (
    <header className="header-area absolute w-full top-0 py-6">
      <div className="relative px-4 2xl:px-28 z-20">
        <nav className="flex items-center justify-between relative">
          <Link
            to="/"
            className="border-r-none lg:border-r border-blueGray-300 flex items-center flex-shrink-0 pr-8 mr-6"
          >
            <img
              className="h-10"
              src="assets/images/header-logo.svg"
              alt="title"
            />
          </Link>
          <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto">
            <ul className="mobile-menu bg-white lg:bg-transparent shadow lg:shadow-none absolute lg:relative inset-x-0 hidden lg:flex lg:flex-grow items-center text-base text-blueGray-600 font-semibold mt-7 lg:mt-0 mobile-hover">
              {list.map((listitem, index) => (
                <li className="relative dropdown lg:mr-4" key={index}>
                  <Link
                    className={`p-4 flex items-center hover:text-indigo-500 transition duration-500  ${
                      listitem.submenu.length > 0 ? "arrow" : ""
                    }`}
                    to={listitem.link}
                  >
                    {listitem.title}
                    <span className="leading-5 text-2xl text-center bg-blueGray-100 w-6 h-6 absolute right-2 top-4 block lg:hidden toggle">
                      +
                    </span>
                  </Link>
                  <ul className="hidden lg:block bg-white lg:absolute top-full lg:shadow lg:w-44 transition duration-500 submenu">
                    {listitem.submenu.map((subitem, index) => (
                      <li
                        key={index}
                        className={`${
                          subitem.submenu.length > 0 ? "relative dropdown" : ""
                        }`}
                      >
                        <Link
                          className={`py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500 ${
                            subitem.submenu.length > 0 ? "arrow" : ""
                          }`}
                          to={subitem.link}
                        >
                          {subitem.title}
                          <span className="leading-5 text-2xl text-center bg-blueGray-100 w-6 h-6 absolute right-2 top-4 block lg:hidden toggle">
                            +
                          </span>
                        </Link>
                        <ul className="hidden lg:block bg-white lg:absolute top-0 left-full lg:shadow lg:w-44 transition duration-500 submenu">
                          {subitem.submenu.map((superSubItem, index) => (
                            <li>
                              <Link
                                key={index}
                                className="py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500"
                                to={superSubItem.link}
                              >
                                {superSubItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            <form className="header-newsletter 2xl:pl-24 w-full hidden lg:flex items-center">
              <div className="flex flex-1 items-center w-full border border-blueGray-300 transition duration-500 hover:shadow-lg rounded h-14 p-4">
                <img
                  className="w-6 h-6 flex-shrink-0 p-1"
                  src="assets/images/search-icon.svg"
                  alt="title"
                />
                <input
                  className="appearance-none bg-transparent border-none w-full text-blueGray-600 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Search items"
                />
              </div>
              <button
                className="btn hidden xl:flex items-center text-white font-body font-semibold rounded h-14 p-4 ml-6 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                type="submit"
              >
                <img
                  className="w-4 h-4 flex-shrink-0 mr-2"
                  src="assets/images/wallet-icon.svg"
                  title="title"
                />{" "}
                Connect Wallet
              </button>
            </form>
            <ul className="mobile-menu flex-shrink-0">
              <li className="relative dropdown">
                <Link
                  to="/#"
                  className="hidden 2xl:flex items-center border border-blueGray-300 from-purple-500 to-indigo-500 text-blueGray-600 font-body font-bold rounded h-14 p-4 ml-6"
                >
                  <img
                    className="w-6 h-6 object-cover rounded-full flex-shrink-0  mr-2"
                    src="assets/images/author/3.jpg"
                    title="ittle"
                  />
                  5.42 ETH
                </Link>
                <ul className="hidden p-4 lg:block bg-white lg:absolute rounded top-full right-0 lg:shadow lg:w-60 transition duration-500 author-submenu">
                  <li>
                    <p className="py-1 px-2 font-display font-semibold text-blueGray-600 hover:bg-indigo-100 hover:text-indigo-500 transition duration-500">
                      S. Robert
                    </p>{" "}
                    <span className="py-2 px-2 flex items-center justify-between break-all font-body text-blueGray-600 hover:bg-indigo-100 hover:text-indigo-500 transition duration-500">
                      1xd071cd262bcd34
                      <img
                        className="w-4 h-4 flex-shrink-0 cursor-pointer ml-4"
                        src="assets/images/profile-copy.svg"
                        title="title"
                      />
                    </span>
                  </li>
                  <li>
                    <Link
                      className="py-1 px-2 flex items-center font-body font-semibold text-blueGray-600 hover:bg-indigo-100 hover:text-indigo-500 transition duration-500"
                      to="/creator-published"
                    >
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="py-1 px-2 flex items-center font-body font-semibold text-blueGray-600 hover:bg-indigo-100 hover:text-indigo-500 transition duration-500"
                      to="/create-item"
                    >
                      Create Item
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="py-1 px-2 flex items-center font-body font-semibold text-blueGray-600 hover:bg-indigo-100 hover:text-indigo-500 transition duration-500"
                      to="/login"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <button
            className="bg-blueGray-50 mobile-toggle block lg:hidden"
            onClick={() => setactive(!active)}
          >
            <span className="bg-blueGray-600" />
            <span className="bg-blueGray-600" />
            <span className="bg-blueGray-600" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default HeaderV2;
