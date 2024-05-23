import React, { useEffect } from "react";
import "./Loader.css";

const Loader = () => {
  useEffect(() => {
    const text = "LOADING AWESOMENESS...";
    const loaderContainer = document.querySelector(".loader");

    for (let i = 0; i < text.length; i++) {
      const span = document.createElement("span");
      if (text[i] === " ") {
        span.innerHTML = "&nbsp;";
      } else {
        span.textContent = text[i];
      }
      span.style.animationDelay = `${i * 0.1}s`;
      loaderContainer.appendChild(span);
    }
  }, []);

  return <div className="loader"></div>;
};

export default Loader;
