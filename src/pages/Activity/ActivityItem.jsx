import React from 'react'

const ActivityItem = () => {
  return (
    <div
    className="activity-box bg-red-50 border border-red-100 sm:flex p-4 rounded transition duration-500 hover:shadow-lg"
    data-aos="fade-up"
  >
    <div className="flex-shrink-0	activity-image relative rounded">
      <img
        className="w-full sm:h-28 sm:w-28 rounded object-cover mb-4 sm:mb-0"
        src="assets/images/product/27.jpg"
        alt="title"
      />
      <span className="flex items-center justify-center absolute top-4 -right-4 bg-red-100 rounded-lg w-8 h-8 mx-auto mb-1">
        <img
          className="w-4 h-4"
          src="assets/images/activity-icon6.svg"
          alt="title"
        />
      </span>
    </div>
    <div className="activity-content flex flex-col flex-grow justify-center sm:pl-6">
      <div className="mb-2">
        <h4 className="font-display text-xl text-blueGray-900 font-bold">
          Eye for an Eye Platinum Lil Bitcoin
        </h4>
      </div>
      <p className="font-body font-semibold text-sm text-blueGray-600 mb-2">
        Liked by
        <Link
          className="text-blueGray-900 font-bold transition duration-500 hover:text-indigo-500 underline-hover"
          to="/creator-published"
        >
          {" "}
          @Jhon_Doe
        </Link>
      </p>
      <p className="font-body text-sm text-blueGray-600">
        <img
          className="w-4 h-4 inline-block mr-2 mb-1"
          src="assets/images/clock-icon.svg"
          alt="title"
        />
        Just now
      </p>
    </div>
  </div>
  )
}

export default ActivityItem