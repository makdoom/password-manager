import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import { UserContext } from "../../context/UserContext";

const Dashboard = () => {
  const { globalUser } = useContext(UserContext);
  console.log("Context", globalUser);

  if (!globalUser.isAuthenticated) return <Redirect to="/" />;
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
