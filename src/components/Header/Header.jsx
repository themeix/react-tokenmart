import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const Header = () => {
  const [active, setactive] = useState(false);
  const [scrolled, setscrolled] = useState(false);

  useEffect(() => {
    const listener = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 120) {
        setscrolled(true);
      }
    });
  }, []);

  return (
    <header
      className={`header-area  absolute w-full top-0 pt-4 pb-10 ${
        scrolled && "header-sticky"
      }`}
    >
      <div className="container mx-auto relative px-4 z-20">
        <nav className="flex items-center justify-between relative">
          <Link to="/" className="flex items-center flex-shrink-0 mr-6">
            <img
              className="h-10"
              src="assets/images/header-logo.svg"
              alt="title"
            />
          </Link>
          <Dropdown active={active} setactive={setactive} />
          <button
            className={`bg-blueGray-50 mobile-toggle block lg:hidden ${
              active && "open"
            }`}
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

export default Header;
