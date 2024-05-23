import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { motion } from "framer-motion";
import LottiePlayer from "react-lottie-player";
import contact from "../../Assets/contact.json";
import Transition from "../Transition/Transition";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const msg = document.getElementById("msg");
    const nameInput = form.current.name.value;
    const nameRegex = /^[A-Za-z\s]+$/; // Regular expression for alphabets and spaces
    if (!nameRegex.test(nameInput)) {
      msg.innerHTML = "Name should contain only alphabets";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 2000);
      return;
    }
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
              <input
                autoComplete="on"
                name="name"
                type="text"
                placeholder="Full Name"
                required
              />
              <input
                autoComplete="on"
                name="mail"
                type="email"
                placeholder="Email"
                required
              />
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
              <button name="submit" type="submit" className="btn">
              <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span>Send</span>
              </button>
            </div>
            <span id="msg"></span>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Transition(Contact);
