import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../../context/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  console.log("Context", user);

  if (!user.isAuthenticated) return <Redirect to="/" />;
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
