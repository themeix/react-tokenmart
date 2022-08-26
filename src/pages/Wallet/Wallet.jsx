import { useState } from "react";
import { Link } from "react-router-dom";
import FooterV2 from "../../components/Footer/FooterV2";
import Header from "../../components/Header/Header";
import WalletItem from "./WalletItem";
import ConnectWalletModal from "../../components/Modal/ConnectWalletModal";
import { wallets } from "./walletdata";
import { Helmet } from "react-helmet-async";

const Wallet = () => {
  const [modalOpen, setmodalOpen] = useState(false);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wallet || Tokenmart - Largest online marketplace</title>
      </Helmet>
      <Header />
      {/*  ====================== Hero Section =============================  */}
      <section className="hero-section relative mt-2 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto relative px-4 z-10">
          <h2 className="font-display text-4xl lg:text-6xl text-blueGray-900 font-bold mb-4">
            Wallet{" "}
          </h2>
          <ul className="hero-breadcrumb font-body text-blueGray-600 flex flex-wrap items-center">
            <li className="flex items-center mr-2">
              <Link
                className="transition duration-500 hover:text-indigo-500 underline-hover"
                to="/"
              >
                {" "}
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
              Wallet
            </li>
          </ul>
        </div>
      </section>
      {/*  ====================== Product Section =============================  */}
      <section className="product-section  mb-20 lg:mb-32">
        <div className="container mx-auto  px-4 z-10">
          <ConnectWalletModal
            modalOpen={modalOpen}
            setmodalOpen={setmodalOpen}
          />

          {wallets.map((wallet, index) => (
            <WalletItem
              key={index}
              item={wallet}
              modalOpen={modalOpen}
              setmodalOpen={setmodalOpen}
            />
          ))}
        </div>
      </section>
      {/*  ====================== Footer Section =============================  */}
      <FooterV2 />
    </div>
  );
};

export default Wallet;
