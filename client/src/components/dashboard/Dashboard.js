import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  useEffect(() => {
    const isAuth = async () => {
      try {
        await axios.get("/dash");
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };
    isAuth();
    return () => {
      setIsAuthenticated(); // This worked for me
    };
  }, []);
  if (!isAuthenticated) return <Redirect to="/" />;
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
