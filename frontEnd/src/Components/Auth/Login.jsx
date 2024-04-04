import React from "react";
import { Link } from "react-router-dom";

import "./LoginSignup.css";

export const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <form action="">
          <div className="inputs">
            <div className="input">
              <img src="images/email.png" alt="" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input">
              <img src="images/password.png" alt="" />
              <input type="password" placeholder="Password" />
            </div>
          </div>

          <Link to="/" className="submit-container no-underline">
            Login
          </Link>
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
