import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../../Explore/itemdata'
import ProductItem2 from '../../Explore/ProductItem2'

const ProductsSection = () => {
  return (
    <section className="product-section my-20 lg:my-32">
          <div className="container mx-auto relative px-4 z-10">
            <div className="section-title flex flex-wrap items-center justify-between mb-8 lg:mb-14">
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg w-10 h-10 mr-4">
                  <img
                    className="w-5 h-5"
                    src="assets/images/sec-icon2.svg"
                    alt="title"
                  />
                </span>
                <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">
                  Live Auctions
                </h3>
              </div>
              <Link
                to="/explore"
                className="arrow-btn block bg-indigo-100 text-indigo-500 text-sm text-sm font-body font-bold rounded py-2 px-4 ml-14 transition duration-500 hover:bg-indigo-50"
              >
                See All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <ProductItem2 key={index} item={product} />
              ))}
            </div>
          </div>
        </section>
  )
}

export default ProductsSection