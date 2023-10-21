import React from "react";
import "./Card.css";
import {BsBoxArrowUpRight} from "react-icons/bs";

const Card = (props) => {
  return (
    <div className="work">
      <div className="image-container">
        <img  src={props.image} alt="" />
        <div className="overlay">
          <h3>{props.name}</h3>
          <p>{props.intro}</p>
          <a rel="noopener noreferrer" href={props.link} target="_blank">
          <BsBoxArrowUpRight/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
