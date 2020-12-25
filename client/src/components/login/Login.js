import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./login.css";

import { UserContext } from "../../context/UserContext";

const Login = () => {
  const history = useHistory();
  const { login } = useContext(UserContext);

  // Local user obj
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Error
  const [error, setError] = useState({});

  // Handle Change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({});

    try {
      const { data } = await axios.post("/login", user);
      login(data.user);
      history.push("/dashboard");
    } catch (error) {
      const err = error.response.data;
      setError(err.errors);
    }
  };

  return (
    <div className="login">
      <div className="login__box">
        <h2>Login</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="emailBox">
            <input
              className="email"
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <p className="error">{error && error.email}</p>
          </div>
          <div className="passwordBox">
            <input
              type="password"
              className="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <p className="error">{error && error.password}</p>
          </div>
          <button className="login__btn" type="submit">
            Login
          </button>
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
