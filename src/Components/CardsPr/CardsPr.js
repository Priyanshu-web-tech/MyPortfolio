import React from "react";
import "./CardsPr.css";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const CardsPr = (props) => {
  return (
    <div className="CardsPg">
      <h1>{props.name}</h1>
      <p>{props.intro}</p>
      <a href={props.link}>
        <BsFillArrowUpRightCircleFill size={30} />
      </a>
    </div>
  );
};

export default CardsPr;
