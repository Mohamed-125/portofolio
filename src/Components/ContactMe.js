import React from "react";
import emailjs from "emailjs-com";
const ContactMe = () => {
  const submitHanlder = (e) => {
    emailjs.init("L5sJgVDVSFq6iCge_");

    e.preventDefault();
    emailjs.sendForm("service_5gulm3e", "template_vpkfnjh", e.target);
    e.target.children[1].value = null;
    e.target.children[3].value = null;
    e.target.children[5].value = null;
    alert("success");
  };
  return (
    <section id="contact-me" className="contactMe-section">
      <div className="contactMe-div container">
        {" "}
        <h1
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "30px",
            marginBottom: "20px",
          }}
        >
          Contact Me
        </h1>
        <form className="contact-form" onSubmit={submitHanlder}>
          <label>Name : </label>
          <input
            required
            type="text"
            name="name"
            placeholder="Please Enter Your Name"
          ></input>
          <label>gmail : </label>
          <input
            type="gmail"
            required
            name="gmail"
            placeholder="Please Enter Your Gmail"
          ></input>
          <label>message : </label>
          <textarea
            required
            name="message"
            placeholder="Please Enter Your Message"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
