import React, { useState } from "react";
import axios from "axios";
import "./row.css";

const Row = ({ password, edit }) => {
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

  const handleDelete = async () => {
    const passwordId = password._id;
    // console.log(passwordId);
    const response = await axios.delete("/delete", {
      data: { id: passwordId },
    });
    // try {
    // } catch (error) {
    //   console.log(error);
    // }
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
        <i className="edit far fa-edit" onClick={() => edit(password)}></i>
        <i className="delete far fa-trash-alt" onClick={handleDelete}></i>
      </div>
    </div>
  );
};

export default Row;
