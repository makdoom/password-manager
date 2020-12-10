import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login__box">
        <h2>Login</h2>
        <form className="form__control">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account ?{" "}
          <Link to="/signup" className="sign">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
