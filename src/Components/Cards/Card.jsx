import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="work">
      <div className="image-container">
        <img  src={props.image} alt="" />
        <div className="overlay">
          <h3>{props.name}</h3>
          <p>{props.intro}</p>
          <a rel="noopener noreferrer" href={props.link} target="_blank">
            <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
