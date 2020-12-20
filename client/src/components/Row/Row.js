import React, { useState } from "react";
import "./row.css";

const Row = () => {
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
      <div>Amazon</div>
      <div>makdoomShaikh</div>
      <div>
        <input
          type="password"
          className="passwordField"
          value="Darknight"
          onChange={handleChange}
        />{" "}
        <i
          className={`eyeBtn far fa-eye${show ? "-slash" : ""}`}
          onClick={handlePasswordToggle}
        ></i>
        {/* <i class="far fa-eye-slash"></i> */}
      </div>
      <div className="options">
        <i className="edit far fa-edit"></i>
        <i className="delete far fa-trash-alt"></i>
      </div>
    </div>
  );
};

export default Row;
