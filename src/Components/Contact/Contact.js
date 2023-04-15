import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const msg = document.getElementById("msg");
    emailjs
      .sendForm(
        "service_6ngjn9h",
        "template_1z2vqiw",
        form.current,
        "lreEZdgLbGTfkQ2Vv"
      )
      .then(
        (result) => {
          msg.innerHTML = "Message Sent Successfully";
          setTimeout(function () {
            msg.innerHTML = "";
            form.current.reset(); 
          }, 1000);
        },
        (error) => {
          msg.innerHTML = "Error in Sending Message";
          setTimeout(function () {
            msg.innerHTML = "";
            form.current.reset(); 
          }, 1000);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <h1>Contact Me</h1>
      <div className="grid2">
        <div className="column1">
          <h3>Connect Directly</h3>
          <div className="cards">
            <motion.a
              target="_blank"
              href="mailto:priyanshusharma6666@gmail.com"
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              className="card"
            >
              <AiOutlineMail />
              <p>Email</p>

              <AiOutlineArrowRight />
            </motion.a>
            <motion.a
              target="_blank"
              href="http://wa.me/918279707568"
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              className="card"
            >
              <BsWhatsapp />
              <p>Whatsapp</p>

              <AiOutlineArrowRight />
            </motion.a>
          </div>
        </div>
        <form ref={form} className="column2" onSubmit={sendEmail}>
          <h3>Write Your Query</h3>
          <div className="inputs">
            <input name="name" type="text" placeholder="Name" required />
            <input name="mail" type="email" placeholder="Mail" required />
            <textarea
              name="message"
              className="message"
              type="text"
              placeholder="Message"
              rows={4}
              cols={50}
              required
            />
            <motion.button
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              name="submit"
              type="submit"
              className="btn"
            >
              Send Message
            </motion.button>
          </div>
          <span id="msg"></span>
        </form>
      </div>
    </div>
  );
};
export default Contact;
