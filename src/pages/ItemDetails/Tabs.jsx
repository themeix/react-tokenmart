import { useState } from "react";

const Tabs = ({  }) => {
  const [activeTab, setactiveTab] = useState(0);

  const Bid = () => {
    return (
      <div className="tabs-item block" id="tab1">
        <div className="flex flex-wrap items-center justify-between border-b border-blueGray-300 pt-4">
          <div className="flex flex-wrap items-center mb-4">
            <img
              className="border-2 border-white w-10 h-10 object-cover rounded-lg"
              src="assets/images/author/3.jpg"
              alt="title"
            />
            <div className="ml-2">
              <h6 className="font-display text-blueGray-900 font-medium mb-1">
                <a
                  className="transition duration-500 hover:text-indigo-500 underline-hover"
                  href="creator-published"
                >
                  Jenny Wilson
                </a>
                <span className="font-body   text-sm text-blueGray-600 ml-2">
                  placed a bid
                </span>
              </h6>
              <p className="font-body text-xs text-blueGray-600">15 mins ago</p>
            </div>
          </div>
          <div className="flex items-center ml-10 mb-4">
            <p className="flex items-center font-body font-semibold text-blueGray-900">
              <img
                className="w-5 h-5 inline-block mr-1"
                src="assets/images/cryptocurrency-icon.svg"
                alt="title"
              />
              0.018 ETH
            </p>
            <p className="font-body text-sm text-blueGray-600 ml-4">≈$56.85</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between border-b border-blueGray-300 pt-4">
          <div className="flex flex-wrap items-center mb-4">
            <img
              className="border-2 border-white w-10 h-10 object-cover rounded-lg"
              src="assets/images/author/4.jpg"
              alt="title"
            />
            <div className="ml-2">
              <h6 className="font-display text-blueGray-900 font-medium mb-1">
                <a
                  className="transition duration-500 hover:text-indigo-500 underline-hover"
                  href="creator-published"
                >
                  Ralph Edwards
                </a>
                <span className="font-body   text-sm text-blueGray-600 ml-2">
                  placed a bid
                </span>
              </h6>
              <p className="font-body text-xs text-blueGray-600">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center ml-10 mb-4">
            <p className="flex items-center font-body font-semibold text-blueGray-900">
              <img
                className="w-5 h-5 inline-block mr-1"
                src="assets/images/cryptocurrency-icon.svg"
                alt="title"
              />{" "}
              0.015 ETH
            </p>
            <p className="font-body text-sm text-blueGray-600 ml-4">≈$47.38</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between border-b border-blueGray-300 pt-4">
          <div className="flex flex-wrap items-center mb-4">
            <img
              className="border-2 border-white w-10 h-10 object-cover rounded-lg"
              src="assets/images/author/5.jpg"
              alt="title"
            />
            <div className="ml-2">
              <h6 className="font-display text-blueGray-900 font-medium mb-1">
                <a
                  className="transition duration-500 hover:text-indigo-500 underline-hover"
                  href="creator-published"
                >
                  Ralph Edwards
                </a>
                <span className="font-body  text-sm text-blueGray-600 ml-2">
                  placed a bid
                </span>
              </h6>
              <p className="font-body text-xs text-blueGray-600">4 hours ago</p>
            </div>
          </div>
          <div className="flex items-center ml-10 mb-4">
            <p className="flex items-center font-body font-semibold text-blueGray-900">
              <img
                className="w-5 h-5 inline-block mr-1"
                src="assets/images/cryptocurrency-icon.svg"
                alt="title"
              />{" "}
              0.014 ETH
            </p>
            <p className="font-body text-sm text-blueGray-600 ml-4">≈$44.22</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between border-b border-blueGray-300 pt-4">
          <div className="flex flex-wrap items-center mb-4">
            <img
              className="border-2 border-white w-10 h-10 object-cover rounded-lg"
              src="assets/images/author/6.jpg"
              alt="title"
            />
            <div className="ml-2">
              <h6 className="font-display text-blueGray-900 font-medium mb-1">
                <a
                  className="transition duration-500 hover:text-indigo-500 underline-hover"
                  href="creator-published"
                >
                  Jerome Bell
                </a>
                <span className="font-body  text-sm text-blueGray-600 ml-2">
                  placed a bid
                </span>
              </h6>
              <p className="font-body text-xs text-blueGray-600">
                14 hours ago
              </p>
            </div>
          </div>
          <div className="flex items-center ml-10 mb-4">
            <p className="flex items-center font-body font-semibold text-blueGray-600">
              <img
                className="w-5 h-5 inline-block mr-1"
                src="assets/images/cryptocurrency-icon.svg"
                alt="title"
              />{" "}
              0.011 ETH
            </p>
            <p className="font-body text-sm text-blueGray-600 ml-4">≈$34.74</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between border-b border-blueGray-300 pt-4">
          <div className="flex flex-wrap items-center mb-4">
            <img
              className="border-2 border-white w-10 h-10 object-cover rounded-lg"
              src="assets/images/author/7.jpg"
              alt="title"
            />
            <div className="ml-2">
              <h6 className="font-display text-blueGray-900 font-medium mb-1">
                <a
                  className="transition duration-500 hover:text-indigo-500 underline-hover"
                  href="creator-published"
                >
                  Jacob Jones
                </a>
                <span className="font-body text-sm text-blueGray-600 ml-2">
                  placed a bid
                </span>
              </h6>
              <p className="font-body text-xs text-blueGray-600">1 day ago</p>
            </div>
          </div>
          <div className="flex items-center ml-10 mb-4">
            <p className="flex items-center font-body font-semibold text-blueGray-900">
              <img
                className="w-5 h-5 inline-block mr-1"
                src="assets/images/cryptocurrency-icon.svg"
                alt="title"
              />
              0.010 ETH
            </p>
            <p className="font-body text-sm text-blueGray-600 ml-4">≈$31.58</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between pt-4">
          <div className="flex flex-wrap items-center mb-4">
            <img
              className="border-2 border-white w-10 h-10 object-cover rounded-lg"
              src="assets/images/author/8.jpg"
              alt="title"
            />
            <div className="ml-2">
              <h6 className="font-display text-blueGray-900 font-medium mb-1">
                <a
                  className="transition duration-500 hover:text-indigo-500 underline-hover"
                  href="creator-published"
                >
                  Cameron Williamson
                </a>
                <span className="font-body   text-sm text-blueGray-600 ml-2">
                  placed a bid
                </span>
              </h6>
              <p className="font-body text-xs text-blueGray-600">2 days ago</p>
            </div>
          </div>
          <div className="flex items-center ml-10 mb-4">
            <p className="flex items-center font-body font-semibold text-blueGray-900">
              <img
                className="w-5 h-5 inline-block mr-1"
                src="assets/images/cryptocurrency-icon.svg"
                alt="title"
              />{" "}
              0.008 ETH
            </p>
            <p className="font-body text-sm text-blueGray-600 ml-4">≈$25.27</p>
          </div>
        </div>
      </div>
    );
  };

  const History = () => {
    return (
      <div className="tabs-item " id="tab2">
        <div className="flex flex-wrap items-center border-b border-blueGray-300 pt-4 pb-4 mb-4">
          <img
            className="border-2 border-white w-10 h-10 object-cover rounded-lg"
            src="assets/images/author/1.jpg"
            alt="title"
          />
          <div className="ml-2">
            <h6 className="font-display text-blueGray-900 font-medium mb-1">
              <a
                className="transition duration-500 hover:text-indigo-500 underline-hover"
                href="creator-published"
              >
                Cameron Williamson
              </a>
              <span className="font-body   text-sm text-blueGray-600 ml-2">
                edited item description
              </span>
            </h6>
            <p className="font-body text-xs text-blueGray-600">10 mins ago</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center border-b border-blueGray-300 pb-4 mb-4">
          <img
            className="border-2 border-white w-10 h-10 object-cover rounded-lg"
            src="assets/images/author/2.jpg"
            alt="title"
          />
          <div className="ml-2">
            <h6 className="font-display text-blueGray-900 font-medium mb-1">
              <a
                className="transition duration-500 hover:text-indigo-500 underline-hover"
                href="creator-published"
              >
                Erbar Williamson
              </a>
              <span className="font-body   text-sm text-blueGray-600 ml-2">
                edited item description
              </span>
            </h6>
            <p className="font-body text-xs text-blueGray-600">1 hours ago</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center">
          <img
            className="border-2 border-white w-10 h-10 object-cover rounded-lg"
            src="assets/images/author/3.jpg"
            alt="title"
          />
          <div className="ml-2">
            <h6 className="font-display text-blueGray-900 font-medium mb-1">
              <a
                className="transition duration-500 hover:text-indigo-500 underline-hover"
                href="creator-published"
              >
                Cameron Rasars
              </a>
              <span className="font-body   text-sm text-blueGray-600 ml-2">
                edited item description
              </span>
            </h6>
            <p className="font-body text-xs text-blueGray-600">2 days ago</p>
          </div>
        </div>
      </div>
    );
  };

  const Info = () => {
    return (
      <div className="tabs-item  typofix" id="tab3">
        <div className="mt-6">
          <table>
            <tbody>
              <tr>
                <td className="font-display text-blueGray-900 font-bold">
                  Contact Address
                </td>
                <td className="font-body text-blueGray-600">#23grhg4542</td>
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
                <td className="font-body text-blueGray-600">ERC-1155</td>
              </tr>
              <tr>
                <td className="font-display text-blueGray-900 font-bold">
                  Blockchain
                </td>
                <td className="font-body text-blueGray-600">Ethereum</td>
              </tr>
              <tr>
                <td className="font-display text-blueGray-900 font-bold">
                  Metadata
                </td>
                <td className="font-body text-blueGray-600">Centralized</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const TabItem = () => {
    switch (activeTab) {
      case 0:
        return <Bid />;
      case 1:
        return <History />;
      case 2:
        return <Info />;
      default:
        return <Bid />;
    }
  };

  return (
    <>
      {" "}
      <nav className="tabs-nav">
        <ul className="flex items-center">
          <li
            className={`font-display text-blueGray-900 font-bold mb-2 mr-4 lg:mr-8 ${
              activeTab == 0 ? "active" : " "
            }`}
            onClick={() => setactiveTab(0)}
          >
            <a >Bids (6)</a>
          </li>
          <li
            className={`font-display text-blueGray-900 font-bold mb-2 mr-4 lg:mr-8 ${
              activeTab == 1 ? "active" : " "
            }`}
            onClick={() => setactiveTab(1)}
          >
            <a >History</a>
          </li>
          <li
            className={`font-display text-blueGray-900 font-bold mb-2 mr-4 lg:mr-8 ${
              activeTab == 2 ? "active" : " "
            }`}
            onClick={() => setactiveTab(2)}
          >
            <a >Additional Info</a>
          </li>
        </ul>
      </nav>{" "}
      <div className="tabs-content">{TabItem()}</div>{" "}
    </>
  );
};

export default Tabs;
