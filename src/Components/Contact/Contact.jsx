import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
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
        <div className="inner-container">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7, type: "tween" }}
          whileInView={{ opacity: 1, x: 0 }}
          className="column1"
        >
          <h3>Connect Directly</h3>
          <br />
          <div className="cards">
            <motion.a
              target="_blank"
              href="mailto:priyanshusharma6666@gmail.com"
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              className="card"
            >
              <i className="fas fa-envelope"></i>
              <p>Email</p>
              <i className="fas fa-arrow-right"></i>
            </motion.a>
            <br />
            <br />
           

            <motion.a
              target="_blank"
              href="http://wa.me/918279707568"
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              className="card"
            >
              <i className="fab fa-whatsapp"></i>
              <p>Whatsapp</p>
              <i className="fas fa-arrow-right"></i>
            </motion.a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.7, type: "tween" }}
          whileInView={{ opacity: 1, x: 0 }}
          ref={form}
          className="column2"
          onSubmit={sendEmail}
        >
          <h3>Write Your Query</h3>
          <div className="inputs">
            <input name="name" type="text" placeholder="Full Name" required />
            <input name="mail" type="email" placeholder="Email" required />
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
              Send
            </motion.button>
          </div>
          <span id="msg"></span>
        </motion.form>
      </div>
      </div>
    </div>
  );
};

export default Contact;
