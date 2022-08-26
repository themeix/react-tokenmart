import { useState, useEffect } from "react";

const Timer7 = () => {
  const [time, settime] = useState(1656942667076);
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
    <div className="font-body  font-semibold leading-4 countdown-time7 grid grid-cols-4 gap-4 text-center my-2">
      <div className="p-3 flex items-center justify-center border-gradient">
        <p className="text-blueGray-600 bg-clip-text bg-gradient-to-br from-blue-500 to-purple-500">
          <span className="font-bold text-blueGray-900">{days}</span>
          <br />
          <span className="text-sm font-light">Days</span>
        </p>
      </div>
      <div className="p-3 flex items-center justify-center border-gradient">
        <p className="text-blueGray-600 bg-clip-text bg-gradient-to-br from-blue-500 to-purple-500">
          <span className="font-bold text-blueGray-900">{hours}</span>
          <br />
          <span className="text-sm font-light">Hrs</span>
        </p>
      </div>
      <div className="p-3 flex items-center justify-center border-gradient">
        <p className="text-blueGray-600 bg-clip-text bg-gradient-to-br from-blue-500 to-purple-500">
          <span className="font-bold text-blueGray-900"> {minutes} </span>
          <br />
          <span className="text-sm font-light">Min</span>
        </p>
      </div>
      <div className="p-3 flex items-center justify-center border-gradient">
        <p className="text-blueGray-600 bg-clip-text bg-gradient-to-br from-blue-500 to-purple-500">
          <span className="font-bold text-blueGray-900">{seconds}</span>
          <br />
          <span className="text-sm font-light">Sec</span>
        </p>
      </div>
    </div>
  );
};

export default Timer7;
