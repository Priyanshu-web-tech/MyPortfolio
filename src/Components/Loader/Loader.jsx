import { useEffect } from "react";
import "./Loader.css";

const Loader = () => {
  useEffect(() => {
    const text = "LOADING AWESOMENESS...";
    const loaderText = document.querySelector(".loader-text");

    for (let i = 0; i < text.length; i++) {
      const span = document.createElement("span");
      if (text[i] === " ") {
        span.innerHTML = "&nbsp;";
      } else {
        span.textContent = text[i];
      }
      span.style.animationDelay = `${i * 0.1}s`;
      loaderText.appendChild(span);
    }
  }, []);

  return (
    <div className="loader">
      <div className="loader-text"></div>
      <div className="loader-bar"></div>
    </div>
  );
};

export default Loader;
