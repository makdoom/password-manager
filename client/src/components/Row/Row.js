import React from "react";
import "./row.css";

const Row = () => {
  const handlePassword = (e) => {
    const passwordField = e.target.previousSibling.previousSibling;
    console.log(passwordField);
    // passwordField.map((password) => {
    if (passwordField.type === "password") {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
    // });
  };
  return (
    <div className="dashboardTable__row">
      <div>Amazon</div>
      <div>makdoomShaikh</div>
      <div>
        <input
          type="password"
          className="passwordField"
          value="makdoomshaikh"
        />{" "}
        <i className="far fa-eye eyeBtn" onClick={handlePassword}></i>
        {/* <i class="far fa-eye-slash"></i> */}
      </div>
      <div>added</div>
    </div>
  );
};

export default Row;
