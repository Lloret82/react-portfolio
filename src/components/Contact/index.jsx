import emailjs from "emailjs-com";
import "./style.css";
import React from "react";





const About = () => {
  function sendEmail(e) { 
    e.preventDefault()
    ;

    emailjs
      .sendForm(
        "service_rw70k2d",
        "template_apy6h9r",
        e.target,
        "user_etEj26siyXh7iVOifHYMb"
      )
      .then((res) => {
        console.log(res);
        window.location.reload()
      })
      .catch((err) => console.log(err));
  }
  
  
  


  return (
    <div className="contact">
      <div
        className="container"
        style={{
          marginTop: "50px",
          width: "50%",
        }}
      >
        <h1 style={{ marginTop: "25px" }}>Contact Form</h1>
        <form className="form-style-6" onSubmit={sendEmail} >
          <label>name</label>
          <input  type="text" name="name" className="form-control" />

          <label>Email</label>
          <input  type="email" name="user_email" className="form-control"  />

          <label>Message</label>
          <textarea  name="message" rows="4" className="form-control" />
          <input
            type="submit"
            
            className="form-control btn btn-primary"
            style={{ marginTop: "30px" }}
            >
              
          </input>
        </form>
      </div>
      
    </div>
  );
};



export default About;
