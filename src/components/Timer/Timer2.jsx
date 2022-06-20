import React from "react";

const Timer2 = () => {
  return (
    <div className="countdown-time2 flex w-auto">
      <p class="text-white leading-4 font-opens font-medium">
        <span>%d</span>
        <br />
        <span class="text-sm">Days</span>
      </p>
      <p class="text-white leading-4 font-opens font-medium">
        <span>%H</span>
        <br />
        <span class="text-sm">Hrs</span>
      </p>
      <p class="text-white leading-4 font-opens font-medium">
        <span>%M</span>
        <br />
        <span class="text-sm">Min</span>
      </p>
      <p class="text-white leading-4 font-opens font-medium">
        <span>%S</span>
        <br />
        <span class="text-sm">Sec</span>
      </p>
    </div>
  );
};

export default Timer2;
