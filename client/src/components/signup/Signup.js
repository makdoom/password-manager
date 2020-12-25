import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./signup.css";

import { UserContext } from "../../context/UserContext";

const Signup = () => {
  const history = useHistory();
  const { signup } = useContext(UserContext);

  // Local user obj
  const [user, setUser] = useState({
    name: "",
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
      const { data } = await axios.post("/signup", user);
      signup(data.user);
      history.push("/dashboard");
    } catch (error) {
      const err = error.response.data;
      setError(err.errors);
    }
  };

  return (
    <div className="login">
      <div className="login__box">
        <h2>Signup</h2>
        <form className="signup__form" onSubmit={handleSubmit}>
          <div className="nameBox">
            <input
              name="name"
              className="name"
              type="text"
              value={user.name}
              placeholder="Name"
              required
              onChange={handleChange}
            />
            <p className="error">{error && error.name}</p>
          </div>
          <div className="emailBox">
            <input
              name="email"
              className="email"
              type="text"
              value={user.email}
              placeholder="Email"
              required
              onChange={handleChange}
            />
            <p className="error">{error && error.email}</p>
          </div>
          <div className="passwordBox">
            <input
              className="password"
              name="password"
              type="password"
              value={user.password}
              placeholder="Password"
              required
              onChange={handleChange}
            />
            <p className="error">{error && error.password}</p>
          </div>
          <button className="signup__btn" type="submit">
            Signup
          </button>
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
