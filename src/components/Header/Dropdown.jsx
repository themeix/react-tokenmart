import { useState } from "react";
import { Link } from "react-router-dom";
import { list } from "./list";

const Dropdown = ({ active }) => {
  const [activeItem, setactiveItem] = useState(null);
  const [activeSubItem, setactiveSubItem] = useState(null);

  return (
    <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto">
      <ul
        className={`mobile-menu bg-white lg:bg-transparent shadow lg:shadow-none absolute lg:relative inset-x-0 ${
          !active && "hidden"
        } lg:flex lg:flex-grow items-center text-base text-blueGray-600 font-semibold mt-7 lg:mt-0 mobile-hover`}
      >
        {list.map((listitem, index) => (
          <li
            // style={{display:activeItem==li}}
            className={`relative dropdown lg:mr-4 ${
              activeItem === listitem.id && "active"
            }`}
            key={index}
          >
            <Link
              className={`p-4 flex items-center hover:text-indigo-500 transition duration-500  ${
                listitem.submenu.length > 0 ? "arrow" : ""
              }`}
              to={listitem.link}
            >
              {listitem.title}
              {listitem.submenu.length > 0 && (
                <a>
                  <span
                    onClick={() =>
                      setactiveItem(
                        activeItem === listitem.id ? null : listitem.id
                      )
                    }
                    className="leading-5 text-2xl text-center bg-blueGray-100 w-6 h-6 absolute right-2 top-4 block lg:hidden toggle"
                  >
                    {activeItem !== listitem.id ? "+" : "-"}
                  </span>
                </a>
              )}
            </Link>
            <ul
              className={` ${
                activeItem === listitem.id ? "" : "hidden"
              }  lg:block bg-white lg:absolute top-full lg:shadow lg:w-44 transition duration-500 submenu `}
            >
              {listitem.submenu.map((subitem, index) => (
                <li
                  key={index}
                  className={`relative dropdown  ${
                    activeSubItem === subitem.id && "active"
                  }`}
                >
                  <Link
                    className={`py-3 px-4 flex items-center hover:bg-indigo-100 hover:text-indigo-500 transition duration-500 ${
                      subitem.submenu.length > 0 ? "arrow" : ""
                    }`}
                    to={subitem.link}
                  >
                    {subitem.title}

                    {subitem.submenu.length > 0 && (
                      <span
                        onClick={() =>
                          setactiveSubItem(
                            activeSubItem === subitem.id ? null : subitem.id
                          )
                        }
                        className="leading-5 text-2xl text-center bg-blueGray-100 w-6 h-6 absolute right-2 top-4 block lg:hidden toggle"
                      >
                        {activeSubItem !== subitem.id ? "+" : "-"}
                      </span>
                    )}
                  </Link>
                  <ul
                    className={`${
                      activeSubItem === subitem.id ? "" : "hidden"
                    } lg:block bg-white lg:absolute top-0 left-full lg:shadow lg:w-44 transition duration-500 submenu`}
                  >
                    {subitem.submenu.map((superSubItem, index) => (
                      <li key={index}>
                        <Link
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
      <form className="header-newsletter hidden lg:flex items-center">
        <div className="flex flex-1 items-center xl:w-80 bg-white shadow transition duration-500 hover:shadow-lg rounded h-14 p-4 mr-6">
          <img
            className="w-6 h-6 flex-shrink-0 p-1"
            src="assets/images/search-icon.svg"
            alt="title"
          />
          <input
            className="appearance-none bg-transparent border-none w-full text-blueGray-600 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search items"
            style={{ zIndex: -1 }}
          />
        </div>
      </form>
      <Link
        to="/wallet"
        className="btn hidden xl:flex items-center text-white font-body font-semibold rounded h-14 p-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
        type="submit"
      >
        <img
          className="w-4 h-4 flex-shrink-0 mr-2"
          src="assets/images/wallet-icon.svg"
          title="title"
        />
        Connect Wallet
      </Link>
    </div>
  );
};

export default Dropdown;
