import React from 'react'

const Loadmore = ({onClick}) => {
  return (
    <button onClick={onClick} className="btn load-more-btn flex items-center text-white font-body font-bold rounded px-6 py-4 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100">
    Load More{" "}
    <img
      className="w-4 h-4 flex-shrink-0 animate-spin ml-2"
      src="assets/images/spinner-icon.svg"
      alt="title"
    />
  </button>
  )
}

export default Loadmore