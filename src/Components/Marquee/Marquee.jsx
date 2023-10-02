import React from 'react';
import './Marquee.css';  
const Marquee = () => {
  return (
    <div className="marquee-container">
      <marquee behavior="scroll" direction="left" className="marquee" scrollamount="20">
      Elevating user experiences through creative design and cutting-edge technology
            </marquee>

      <marquee behavior="scroll" direction="right" className="marquee" scrollamount="20">
      Transforming ideas into reality – one line of code at a time.      </marquee>
    </div>
  );
}

export default Marquee;
