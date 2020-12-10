import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login__box">
        <h2>
          Login <span className="material-icons">person_add</span>
        </h2>
        <form className="form__control">
          <div className="email">
            <input type="text" placeholder="Email" />
            <p className="error"></p>
          </div>
          <div className="password">
            <input type="password" placeholder="password" />
            <p className="error"></p>
          </div>
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
