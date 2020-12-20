import React, { useState } from "react";
import "./row.css";

const Row = ({ password }) => {
  const [show, setShow] = useState(false);
  // Password Toggle
  const handlePasswordToggle = (e) => {
    const passwordField = e.target.previousSibling.previousSibling;
    if (passwordField.type === "password") {
      passwordField.type = "text";
      setShow(true);
    } else {
      passwordField.type = "password";
      setShow(false);
    }
  };

  const handleChange = () => {};
  return (
    <div className="dashboardTable__row">
      <div>{password.title}</div>
      <div>{password.username}</div>
      <div className="passwordFieldBox">
        <input
          type="password"
          className="passwordField"
          value={password.password}
          onChange={handleChange}
        />{" "}
        <i
          className={`eyeBtn far fa-eye${show ? "-slash" : ""}`}
          onClick={handlePasswordToggle}
        ></i>
      </div>
      <div className="options">
        <i className="edit far fa-edit"></i>
        <i className="delete far fa-trash-alt"></i>
      </div>
    </div>
  );
};

export default Row;
