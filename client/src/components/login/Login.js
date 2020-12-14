import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./login.css";

import { UserContext } from "../../context/UserContext";

const Login = () => {
  const history = useHistory();
  const { login } = useContext(UserContext);
  // console.log("Context", user);

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
      const response = await axios.post("/login", user);
      login();
      console.log(response);
      history.push("/dash");
    } catch (error) {
      const err = error.response.data;
      setError(err.errors);
      console.log(err);
    }
  };

  return (
    <div className="login">
      <div className="login__box">
        <h2>
          Login <span className="material-icons">person_add</span>
        </h2>
        <form className="form__control" onSubmit={handleSubmit}>
          <div className="email">
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <p className="error">{error && error.email}</p>
          </div>
          <div className="password">
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
            <p className="error">{error && error.password}</p>
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
