import React from "react";
import "./Hero.css";
import mypic from "../../Assets/mypic.jpeg";
import bg from "../../Assets/bg.jpg";
import TypeWriterEffect from "react-typewriter-effect";
import AnimatedCursor from "react-animated-cursor";
import { Parallax } from 'react-parallax';
import {motion} from "framer-motion";
const Hero = () => {
  return (
    <div className="hero" id="hero">
      <AnimatedCursor
        innerSize={15}
        outerSize={8}
        color='204, 255, 255'
        outerAlpha={0.5}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          
          'p',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          '.link'
        ]}
      />
      <Parallax blur={5} bgImage={bg} strength={200}>
        <div className="grid">
          <div className="col1">
            <motion.div 
            initial={{x:-1000}}
            animate={{x:-10}}
            transition={{delay:0.2,duration:1,type:"tween"}}
            className="cont">
              <div className="box">
                <h3 >
                  Welcome to my Portfolio</h3>
                <br />
              </div>
              <div className="intro">
                <h2>Hi I'm Priyanshu </h2>
                <TypeWriterEffect
                  textStyle={{
                    color: "rgb(204, 255, 255)",
                    fontWeight: 800,
                    fontSize: "2rem",
                  }}
                  startDelay={2000}
                  cursorColor="#3F3D56"
                  multiText={[
                    "Student",
                    "Web Developer",
                    "Python Developer",
                    "Data Science Enthusiast",
                  ]}
                  multiTextDelay={1000}
                  typeSpeed={30}
                />
              </div>
            </motion.div>
          </div>
          <div className="col2">
            <img src={mypic} alt="" />
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Hero;
