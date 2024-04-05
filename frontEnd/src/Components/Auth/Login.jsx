import React, { useState } from "react";
import { Link } from "react-router-dom";

import api from "../..";
import "./LoginSignup.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/users/login", {
        email: email,
        password: password,
      });

      console.log("Data submitted successfully:", response.data);
      const { success, message } = response.data;

      if (success) {
        setSuccessMessage(message);
      } else {
        setErrorMessage(message);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      setErrorMessage("Error submitting data. Please try again.");
    }
  };
  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <form method="post" onSubmit={handleSubmit}>
          <div className="inputs">
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
            Login
          </button>
          <div className="divider"></div>
          <div className="have-account-container">
            Don't Have An Account?{" "}
            <Link to="/signup" className="login">
              Signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
