import React from "react";
import "./Card.css";
import {BsFillArrowUpRightCircleFill} from "react-icons/bs";
const Card = (props) => {
  return (
    <div className="list">
          <div className="work">
            <img src={props.image} alt="" />
            <div className="layer">
              <h3>{props.name}</h3>
              <p>{props.intro}</p>
              <a href={props.link} target="_blank"><BsFillArrowUpRightCircleFill size={30}/></a>
              </div>
          </div>  
    </div>
  );
};

export default Card;
