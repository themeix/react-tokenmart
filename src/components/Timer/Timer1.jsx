import React, { useEffect } from "react";
import { useState } from "react";

const Timer1 = () => {
  const [time, settime] = useState(1657992697076);
  const [date, setdate] = useState(null);
  const [minutes, setminutes] = useState("");
  const [days, setdays] = useState("");
  const [hours, sethours] = useState("");
  const [seconds, setseconds] = useState("");

  useEffect(() => {
    setdate(new Date(time));
    setdays(new Date(time).getDay());
    sethours(new Date(time).getHours());
    setminutes(new Date(time).getMinutes());
    setseconds(new Date(time).getSeconds());
  }, [time]);

  useEffect(() => {
    const timer = setInterval(() => {
      settime(time - 1000);
      setdate(new Date(time));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);
  return (
    <div className="product-meta text-white leading-4 font-body font-medium countdown-time4 absolute bottom-4 right-4 grid grid-cols-4 gap-4 text-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded p-3">
      <p className="text-white leading-4 font-opens font-medium">
        <span>{days} </span>
        <br />
        <span className="text-sm">Days</span>
      </p>
      <p className="text-white leading-4 font-opens font-medium">
        <span>{hours}</span>
        <br />
        <span className="text-sm">Hrs</span>
      </p>
      <p className="text-white leading-4 font-opens font-medium">
        <span>{minutes}</span>
        <br />
        <span className="text-sm">Min</span>
      </p>
      <p className="text-white leading-4 font-opens font-medium">
        <span> {seconds} </span>
        <br />
        <span className="text-sm">Sec</span>
      </p>
    </div>
  );
};

export default Timer1;
