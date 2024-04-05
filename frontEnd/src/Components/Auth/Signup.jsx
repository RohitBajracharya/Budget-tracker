import React, { useState } from "react";
import { Link } from "react-router-dom";

import api from "../..";
import "./LoginSignup.css";

export const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/users/signup", {
        fullName: fullName,
        email: email,
        password: password,
      });

      console.log("Data submitted successfully:", response.data);
      const { success, message } = response.data;

      if (success) {
        setSuccessMessage(message);
        // setTimeout(() => {
        //   history.push("/login");
        // }, 2000);
      } else {
        setErrorMessage(message);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      setErrorMessage("Error submitting data. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleSubmit} method="post">
        <div className="inputs">
          <div className="input">
            <img src="images/person.png" alt="" />
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="input">
            <img src="images/email.png" alt="" />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <img src="images/password.png" alt="" />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="submit-container no-underline">
          Sign Up
        </button>
        <div className="divider"></div>
        <div className="have-account-container">
          Already Have An Account?{" "}
          <span>
            <Link to="/login" className="login">
              Login
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
