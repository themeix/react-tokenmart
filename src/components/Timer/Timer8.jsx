import React from "react";

const Timer8 = () => {
  return (
    <div className="countdown-time8">
      <div class="p-3 flex items-center justify-center border-gradient">
        <p class="text-blueGray-600 bg-clip-text bg-gradient-to-br from-blue-500 to-purple-500">
          <span class="font-bold text-blueGray-900">%d</span>
          <br />
          <span class="text-sm font-light">Days</span>
        </p>
      </div>
      <div class="p-3 flex items-center justify-center border-gradient">
        <p class="text-blueGray-600 bg-clip-text bg-gradient-to-br from-blue-500 to-purple-500">
          <span class="font-bold text-blueGray-900">%H</span>
          <br />
          <span class="text-sm font-light">Hrs</span>
        </p>
      </div>
      <div class="p-3 flex items-center justify-center border-gradient">
        <p class="text-blueGray-600 bg-clip-text bg-gradient-to-br from-blue-500 to-purple-500">
          <span class="font-bold text-blueGray-900">%M</span>
          <br />
          <span class="text-sm font-light">Min</span>
        </p>
      </div>
      <div class="p-3 flex items-center justify-center border-gradient">
        <p class="text-blueGray-600 bg-clip-text bg-gradient-to-br from-blue-500 to-purple-500">
          <span class="font-bold text-blueGray-900">%S</span>
          <br />
          <span class="text-sm font-light">Sec</span>
        </p>
      </div>
    </div>
  );
};

export default Timer8;
