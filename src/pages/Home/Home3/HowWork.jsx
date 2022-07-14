import React from 'react'
import { Link } from 'react-router-dom'

const HowWork = () => {
  return (
    <section className="how-work-section relative my-20 lg:my-32">
    <div className="container mx-auto relative px-4 z-10">
      <div className="section-title relative flex flex-wrap items-center justify-between border-b border-blueGray-300 pb-6 mb-8 lg:mb-14">
        <div>
          <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">
            How It’s Works
          </h3>
          <span className="w-20	h-1.5	absolute -bottom-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div className="how-work-box flex flex-col justify-between rounded transition duration-500 hover:shadow-lg p-6">
          <div className="how-work-icon relative rounded overflow-hidden pb-4">
            <img
              className="w-14 h-14 object-contain"
              src="assets/images/how-work-icon.svg"
              alt="title"
            />
          </div>
          <div className="how-work-content">
            <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
              <Link to="/single">Set up your wallet</Link>
            </h3>
            <p className="font-body text-blueGray-600 mt-2">
              Once you’ve set up your wallet of choice, connect it to
              OpenSea by click the NFT Marketplace.
            </p>
          </div>
        </div>
        <div className="how-work-box flex flex-col justify-between rounded transition duration-500 hover:shadow-lg p-6">
          <div className="how-work-icon relative rounded overflow-hidden pb-4">
            <img
              className="w-14 h-14 object-contain"
              src="assets/images/how-work-icon2.svg"
              alt="title"
            />
          </div>
          <div className="how-work-content">
            <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
              <Link to="/single">Create your collection</Link>
            </h3>
            <p className="font-body text-blueGray-600 mt-2">
              Once you’ve set up your wallet of choice, connect it to
              OpenSea by click the NFT Marketplace.
            </p>
          </div>
        </div>
        <div className="how-work-box flex flex-col justify-between rounded transition duration-500 hover:shadow-lg p-6">
          <div className="how-work-icon relative rounded overflow-hidden pb-4">
            <img
              className="w-14 h-14 object-contain"
              src="assets/images/how-work-icon3.svg"
              alt="title"
            />
          </div>
          <div className="how-work-content">
            <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
              <Link to="/single">Add your NFTs</Link>
            </h3>
            <p className="font-body text-blueGray-600 mt-2">
              Once you’ve set up your wallet of choice, connect it to
              OpenSea by click the NFT Marketplace.
            </p>
          </div>
        </div>
        <div className="how-work-box flex flex-col justify-between rounded transition duration-500 hover:shadow-lg p-6">
          <div className="how-work-icon relative rounded overflow-hidden pb-4">
            <img
              className="w-14 h-14 object-contain"
              src="assets/images/how-work-icon4.svg"
              alt="title"
            />
          </div>
          <div className="how-work-content">
            <h3 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
              <Link to="/single">List them for sale</Link>
            </h3>
            <p className="font-body text-blueGray-600 mt-2">
              Once you’ve set up your wallet of choice, connect it to
              OpenSea by click the NFT Marketplace.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HowWork