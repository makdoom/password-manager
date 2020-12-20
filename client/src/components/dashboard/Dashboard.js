import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css";
import Avatar from "@material-ui/core/Avatar";

import { UserContext } from "../../context/UserContext";
import Row from "../Row/Row";
import Modal from "../Modal/Modal";

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const { globalUser } = useContext(UserContext);
  console.log("Context", globalUser);

  // Handle modal state
  const toggleModal = () => {
    setModal(!modal);
  };

  if (!globalUser.isAuthenticated) return <Redirect to="/" />;
  return (
    <div className="dashboard">
      <div className={`modal__background modalShowing-${modal}`}>
        <Modal modal={modal} setModal={setModal} />
      </div>
      <h2 className="heading">
        Password <span>Manager</span>
      </h2>
      <div className="dashboard__container">
        <div className="dashboard__profile">
          <div className="profile">
            <div className="profile__avatar">
              <Avatar className="avatar">
                {globalUser.user.name.charAt(0).toUpperCase()}
              </Avatar>
            </div>
            <div className="profile__info">
              <h3>{globalUser.user.name}</h3>
              <p>{globalUser.user.email}</p>
              <button onClick={toggleModal}>Add Passwords</button>
            </div>
          </div>
          <div className="logout">
            <button>
              Logout <i className="fas fa-sign-out-alt"></i>
            </button>
          </div>
        </div>

        <div className="dashboard__body">
          <div className="dashboardTable__header">
            <div className="title">
              <span>Title</span>
            </div>
            <div className="username">
              <span>Username</span>
            </div>
            <div className="passwordBx">
              <span>Password</span>
            </div>
            <div className="options">
              <span>Options</span>
            </div>
          </div>

          {/* Row Array */}
          <Row />
          <Row />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
