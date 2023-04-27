import React, { useState, useEffect } from "react";
import axios from "axios";

const Signup = () => {
  const [customerSignUp, setCustomerSignUp] = useState({
    email: "",
    password: "",
    phone_number: "",
    name: "",
  });

  const handleChange = (event) => {
    setCustomerSignUp({
      ...customerSignUp,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://fintechceosforum.herokuapp.com/api/users/signup",
        customerSignUp
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text.text-darken-3">Sign Up With Email</h5>
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={customerSignUp.name}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="lastName">email</label>
          <br />
          <input
            type="email"
            name="email"
            value={customerSignUp.email}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="phone_number">phone</label>
          <br />
          <input
            type="text"
            name="phone_number"
            value={customerSignUp.phone_number}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="phone_number">password</label>
          <br />
          <input
            type="password"
            name="password"
            value={customerSignUp.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-field">
          <button className="btn blue darken-3" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
export default Signup;
