import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./signup.css";

const Signup = () => {
  const history = useHistory();

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
      const response = await axios.post("/signup", user);
      history.push("/dash");
      console.log(response);
    } catch (error) {
      const err = error.response.data;
      setError(err.errors);
      console.log(err);
    }
  };

  return (
    <div className="login">
      <div className="login__box">
        <h2>Signup</h2>
        <form className="form__control" onSubmit={handleSubmit}>
          <div className="name">
            <input
              name="name"
              type="text"
              placeholder="Name"
              required
              onChange={handleChange}
            />
            <p className="error">{error && error.name}</p>
          </div>
          <div className="email">
            <input
              name="email"
              type="text"
              placeholder="Email"
              required
              onChange={handleChange}
            />
            <p className="error">{error && error.email}</p>
          </div>
          <div className="password">
            <input
              name="password"
              type="password"
              placeholder="password"
              required
              onChange={handleChange}
            />
            <p className="error">{error && error.password}</p>
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
