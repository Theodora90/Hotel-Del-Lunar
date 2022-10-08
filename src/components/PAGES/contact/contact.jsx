import React, { useState } from "react";
import "./contact.css";

import Container from "../../UI/container/container";
import Footer from "../../UI/footer/footer";

const Contact = (props) => {
  return (
    <div>
      <div className="contact-hero">
        <div className="text-container">
          <h1 className="display-2">
            When you stay with us, you’re treated like family
          </h1>
        </div>
      </div>
      <Container>
        <div className="contact">
          <div className="text-center mb-5 mt-4">
            <h2>
              We’ll love to hear your feedback. <br /> Kindly send us a mail
            </h2>
          </div>
          <div className="form-content">
            <form>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  aria-describedby="fullName"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a message here"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                ></textarea>
                <label htmlFor="floatingTextarea2">Message</label>
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-warning" type="button">
                  SEND US A MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
