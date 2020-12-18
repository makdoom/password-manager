import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css";
import Avatar from "@material-ui/core/Avatar";

import { UserContext } from "../../context/UserContext";
import Row from "../Row/Row";

const Dashboard = () => {
  const { globalUser } = useContext(UserContext);
  console.log("Context", globalUser);

  if (!globalUser.isAuthenticated) return <Redirect to="/" />;
  return (
    <div className="dashboard">
      <h2 className="heading">
        Password <span>Manager</span>
      </h2>
      <div className="dashboard__container">
        <div className="dashboard__profile">
          <div className="profile">
            <div className="profile__avatar">
              <Avatar className="avatar">M</Avatar>
            </div>
            <div className="profile__info">
              <h3>Makdoom Shaikh</h3>
              <p>makshaikh99@gmail.com</p>
              <button>Add Password</button>
            </div>
          </div>
          <div className="logout">
            <button>
              Logout <i className="fas fa-sign-out-alt"></i>
            </button>
          </div>
        </div>
        {/* TODO: working on dashboard body (table) */}

        <div className="dashboard__body">
          <div className="dashboardTable__header">
            <div className="title">
              <span>Title</span>
            </div>
            <div className="username">
              <span>Username</span>
            </div>
            <div className="password">
              <span>Password</span>
            </div>
            <div className="options">
              <span>Options</span>
            </div>
          </div>

          {/* Row Array */}
          <Row />
          <Row />
          <Row />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
