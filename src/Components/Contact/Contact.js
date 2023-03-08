import React, { useEffect } from "react";
import "./Contact.css";
import {AiOutlineArrowRight,AiOutlineMail} from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import {motion} from "framer-motion";

const Contact = () => {
  useEffect(() => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxa7pthWrIyeoIJ9pwuH4qf8muUBT59bkxngfzJj0G1Jyomuqa7lD4cTMtZhnNGrcIn1A/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg"); 

    const handleSubmit = e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML="Message Sent Successfully"
            setTimeout(function(){
                msg.innerHTML=""
            },2000)
            form.reset()

        })
        .catch(error => console.error('Error!', error.message))
    };

    form.addEventListener('submit', handleSubmit);

    // cleanup function to remove the event listener
    return () => {
      form.removeEventListener('submit', handleSubmit);
    }
  }, []);

  return (
    <div className="contact" id="contact">
        <h1 >
          Contact Me
          </h1>
      <div className="grid2">
        <div className="column1">
          <h3>Connect Directly</h3>
          <div className="cards">
            <motion.div 
            transition={{duration:0.3}}
            whileHover={{scale:1.1}}
            className="card">
                <AiOutlineMail/>
              <p>Email</p>
              <a href="mailto:priyanshusharma6666@gmail.com"><AiOutlineArrowRight/></a>
            </motion.div>
            <motion.div 
            transition={{duration:0.3}}
            whileHover={{scale:1.1}}
            className="card">
              
              <BsWhatsapp/>
              <p>Whatsapp</p>
                <a href="http://wa.me/918279707568"><AiOutlineArrowRight/></a>
            </motion.div>
          </div>
        </div>
        <form name="submit-to-google-sheet" className="column2">
          <h3>Write Your Query</h3>
          <div className="inputs">
            <input name="name" type="Text" placeholder="Name" required/>
            <input name="mail" type="email" placeholder="Mail" required />
            <textarea name="message" className="message" type="Text" placeholder="Message" rows={4} cols={50} required/>
            <motion.button transition={{duration:0.3}}
          whileHover={{scale:1.1}} name="submit" type="submit" className="btn">Send Message</motion.button>
          </div>
          <span 
          
          id="msg"></span>

        </form>

      </div>
    </div>
  );
};

export default Contact;
