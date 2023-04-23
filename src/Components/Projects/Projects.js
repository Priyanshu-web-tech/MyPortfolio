import React from 'react'
import Card from '../Cards/Card';
import First from "../../Assets/First.png";
import Second from "../../Assets/Second.png";
import third from "../../Assets/third.png";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import "./Projects.css";
const Projects = () => {
  return (
    <div className='projects' id='project'>
            <h1>My Work</h1>
            <motion.div
            initial={{ opacity: 0, y: 300 }}
            transition={{ duration: 1, type: "tween" }}
            whileInView={{ opacity: 1, y: 0 }}
            className="work-list">
            <Card name="PresentSeek" intro="Attendance Management System with advanced facilities like attendance prediction" link="https://github.com/Priyanshu-web-tech/PresentSeek" image={Second}/>
            <Card name="BitMap" intro="A CryptoCurrency Tracker providing updated information about different cryptocurrencies." link="https://bit-map.netlify.app/" image={First}/>
            <Card name="My Gallery" intro="Image Gallery build with Unsplash API to provide images based on entered topic" link="https://wondrous-pixie-fe47ad.netlify.app/" image={third} />
            </motion.div>
            <Link to="projectspg"><motion.button transition={{duration:0.3}}
          whileHover={{scale:1.1}}>See More</motion.button></Link>
    </div>
  )
}

export default Projects
