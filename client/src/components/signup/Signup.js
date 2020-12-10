import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  return (
    <div className="login">
      <div className="login__box">
        <h2>Signup</h2>
        <form className="form__control">
          <div className="name">
            <input type="text" placeholder="Name" />
            <p className="error"></p>
          </div>
          <div className="email">
            <input type="text" placeholder="Email" />
            <p className="error"></p>
          </div>
          <div className="password">
            <input type="password" placeholder="password" />
            <p className="error"></p>
          </div>
          <button type="submit">Signup</button>
        </form>
        <p className="sign">
          Have an account ?{" "}
          <Link to="/" className="log">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
