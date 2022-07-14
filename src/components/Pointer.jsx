import { useRef } from "react";
import { useState, useEffect } from "react";

const Pointer = () => {
  const [mouseLocation, setmouseLocation] = useState({ top: null, left: null });

  const cursorRef = useRef();

  useEffect(() => {
    const cursor = document.querySelectorAll(".cursor-direction");

    document.addEventListener("mousemove", (e) => {
      setmouseLocation({
        top: e.clientY - cursor[0].offsetWidth / 2,
        left: e.clientX - cursor[0].offsetWidth / 2,
      });
    });

    document.addEventListener("mouseleave", (e) => {
      cursorRef.current.style.opacity = 0;
    });

    document.addEventListener("mouseenter", (e) => {
      cursorRef.current.style.opacity = 1;
    });

    document.addEventListener("mousedown", (e) => {
      cursorRef.current.style.transform = "scale(.2)";
    });

    document.addEventListener("mouseup", (e) => {
      cursorRef.current.style.transform = "scale(1)";
    });

    const buttons = document.querySelectorAll(" button, a");

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("mouseenter", function () {
        cursorRef.current.style.transform = "scale(3.2)";
      });
    }

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("mouseleave", function () {
        cursorRef.current.style.transform = "scale(1)";
      });
    }
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        top: mouseLocation.top,
        left: mouseLocation.left,
        // position: "absolute",
      }}
      className="cursor-direction bg-indigo-100"
    ></div>
  );
};

export default Pointer;
