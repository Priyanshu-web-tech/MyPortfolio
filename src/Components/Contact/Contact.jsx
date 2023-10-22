import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { motion } from "framer-motion";
import LottiePlayer from "react-lottie-player";
import contact from "../../Assets/contact.json";

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
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1>Connect with me!</h1>
      </motion.div>
      <div className="grid2">
        <div className="inner-container">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7, type: "tween" }}
            whileInView={{ opacity: 1, x: 0 }}
            className="column1"
          >
            <LottiePlayer
              loop
              play
              animationData={contact}
              style={{ width: "500px", padding: "1rem" }}
            />
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
              <input autoComplete="on" name="name" type="text" placeholder="Full Name" required />
              <input autoComplete="on" name="mail" type="email" placeholder="Email" required />
              <textarea
              autoComplete="on"
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
