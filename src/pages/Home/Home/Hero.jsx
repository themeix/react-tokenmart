import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero-section relative hero-shape pt-40 pb-24 lg:pt-64 lg:pb-56">
    <div className="container mx-auto relative px-4 z-10">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl lg:text-6xl font-bold font-display text-blueGray-900 mb-10">
          Largest online marketplace to buy sell NFT items
        </h1>
        <p className="text-xl font-body font-normal text-blueGray-600 mb-4">
          Join the world's biggest NFT marketplace and discover truely
          rare digital artwork, sound, videos etc
        </p>
        <div className="flex flex-wrap items-center justify-center">
          <Link
            to="/explore"
            className="btn block text-white font-body font-bold rounded py-4 px-7 mx-3 mt-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
          >
            Explore Now
          </Link>
          <Link
            to="/create-item"
            className="btn block bg-blueGray-900 text-white font-body font-bold rounded py-4 px-7 mx-3 mt-4 transition duration-500 hover:bg-indigo-500"
          >
            Create Product
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero