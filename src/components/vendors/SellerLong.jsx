import React from "react";

const SellerLong = ({ data }) => {
  return (
    <div className="table-wrapper justify-self-auto grid grid-cols-12 gap-8 mb-8 transition duration-500 hover:shadow-sm rounded p-5">
      <div className="flex items-center col-span-4">
        <h2 className="flex items-center font-display text-3xl text-blueGray-600 font-medium mr-6">
          <img
            className="w-4 h-4 mr-2"
            src={
              data.positive
                ? "assets/images/up-icon.svg"
                : "assets/images/down-icon.svg"
            }
            alt="title"
          />{" "}
          {data.level}
        </h2>
        <div className="flex-shrink-0 relative mr-6">
          <img
            className="w-20 h-20 object-cover rounded-lg"
            src={data.avatar}
            alt="title"
          />
          <span className="absolute bottom-3 -right-1">
            <img
              className="w-5 h-5"
              src="assets/images/verified-icon.svg"
              alt="title"
            />
          </span>
        </div>
        <div className="relative block">
          <h6 className="font-display text-xl text-blueGray-900 font-bold transition hover:text-indigo-500">
            <a href="creator-published"> {data.name} </a>
          </h6>
          <p className="flex items-center font-body text-blueGray-600 text-sm mt-1">
            <img
              className="w-4 h-4 inline-block mr-1"
              src={data.levelIcon}
              alt="title"
            />{" "}
            {data.levelName}
          </p>
        </div>
      </div>
      <div className="grid items-center grid-cols-3 gap-4 lg:w-60 col-span-3">
        <div className="text-center">
          <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
            <img
              className="w-5 h-5"
              src="assets/images/level-icon.svg"
              alt="title"
            />
          </span>
          <p className="font-display text-sm text-blueGray-600 font-bold">
            {data.level} Level
          </p>
        </div>
        <div className="text-center">
          <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
            <img
              className="w-4 h-4"
              src="assets/images/like-icon.svg"
              alt="title"
            />
          </span>
          <p className="font-display text-sm text-blueGray-600 font-bold">
            {data.likes} Likes
          </p>
        </div>
        <div className="text-center">
          <span className="flex items-center justify-center bg-indigo-100 rounded-lg w-8 h-8 mx-auto mb-1">
            <img
              className="w-4 h-4"
              src="assets/images/item-icon.svg"
              alt="title"
            />
          </span>
          <p className="font-display text-sm text-blueGray-600 font-bold">
            {data.item} Items
          </p>
        </div>
      </div>
      <div className="thumbnail grid gap-4 items-center grid-cols-5 col-span-5 md:col-span-5">
        {data.items.map((img, index) => (
          <a key={index} href="item-single">
            <img
              className="w-20 h-20 rounded object-cover"
              src={img}
              alt="title"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SellerLong;
