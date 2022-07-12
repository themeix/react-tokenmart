import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../../Explore/itemdata'
import ProductItem3 from '../../Explore/ProductItem3'

const ProductsSection = () => {
  return (
    <section className="product-section relative py-20 lg:py-32 bg-indigo-50">
        <div className="container mx-auto relative px-4 z-10">
          <div className="section-title relative flex flex-wrap items-center justify-between border-b border-blueGray-300 pb-6 mb-8 lg:mb-14">
            <div>
              <h3 className="font-display text-blueGray-900 font-bold text-2xl lg:text-4xl">
                News Arrivals
              </h3>
              <span className="w-20	h-1.5	absolute -bottom-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg" />
            </div>
            <Link
              to="/explore"
              className="arrow-btn block bg-indigo-100 text-indigo-500 text-sm text-sm font-body font-bold rounded py-2 px-4 transition duration-500 hover:bg-indigo-50"
            >
              See All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductItem3 key={index} item={product} />
            ))}
          </div>
        </div>
      </section>
  )
}

export default ProductsSection