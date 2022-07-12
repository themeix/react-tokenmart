import React from 'react'

const CommentForm = () => {
  return (
    <form
    className="lg:grid md:grid-cols-2 gap-x-4"
    data-aos="fade-up"
  >
    <div className="col-span-1 mb-4">
      <input
        className="border border-blueGray-300 rounded w-full px-4 py-3 font-body text-blueGray-600 placeholder-blueGray-600 transition duration-500 focus:shadow-lg focus:border-indigo-500 focus:outline-none"
        type="text"
        placeholder="Name..."
      />
    </div>
    <div className="col-span-1 mb-4">
      <input
        className="border border-blueGray-300 rounded w-full px-4 py-3 font-body text-blueGray-600 placeholder-blueGray-600 transition duration-500 focus:shadow-lg focus:border-indigo-500 focus:outline-none"
        type="text"
        placeholder="Email"
      />
    </div>
    <div className="col-span-2 mb-4">
      <input
        className="border border-blueGray-300 rounded w-full px-4 py-3 font-body text-blueGray-600 placeholder-blueGray-600 transition duration-500 focus:shadow-lg focus:border-indigo-500 focus:outline-none"
        type="text"
        placeholder="Subject"
      />
    </div>
    <div className="col-span-2 mb-4">
      <textarea
        rows={4}
        className="border border-blueGray-300 rounded w-full px-4 py-3 font-body text-blueGray-600 placeholder-blueGray-600 transition duration-500 focus:shadow-lg focus:border-indigo-500 focus:outline-none"
        placeholder="Comment"
        defaultValue={""}
      />
    </div>
    <div>
      <button
        type="submit"
        className="btn inline-block text-white font-body font-medium rounded py-3 px-6 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
      >
        Add Comment
      </button>
    </div>
  </form>
  )
}

export default CommentForm