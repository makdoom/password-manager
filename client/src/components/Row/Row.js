import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import axios from "axios";
import "tippy.js/dist/tippy.css";
import "./row.css";

const Row = ({ password, edit, passwordList, setPasswordList }) => {
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
    const updatedPasswordList = passwordList.filter(
      (password) => password._id !== passwordId
    );
    setPasswordList(updatedPasswordList);
    await axios.delete("/delete", {
      data: { _id: passwordId },
    });
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
        />
        {""}
        <i
          className={`eyeBtn far fa-eye${show ? "-slash" : ""}`}
          onClick={handlePasswordToggle}
        ></i>
      </div>
      <div className="options">
        <Tippy content="Edit">
          <i className="edit far fa-edit" onClick={() => edit(password)}></i>
        </Tippy>
        <Tippy content="Delete">
          <i className="delete far fa-trash-alt" onClick={handleDelete}></i>
        </Tippy>
      </div>
    </div>
  );
};

export default Row;
