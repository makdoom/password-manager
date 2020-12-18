import React from "react";
import "./row.css";

const Row = () => {
  return (
    <div className="dashboardTable__row">
      <div>Amazon</div>
      <div>makdoomShaikh</div>
      <div>
        <input type="text" className="passwordField" />{" "}
        <i class="far fa-eye"></i>
        {/* <i class="far fa-eye-slash"></i> */}
      </div>
      <div>added</div>
    </div>
  );
};

export default Row;
