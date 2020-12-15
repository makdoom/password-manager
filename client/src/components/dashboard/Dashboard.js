import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import "./dashboard.css";

import { UserContext } from "../../context/UserContext";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  tableHead: {
    background: "#e6ffe0",
  },
  headContent: {
    fontWeight: "bold",
  },
  password: {
    border: "none",
    outline: "none",
  },
});
const Dashboard = () => {
  const { globalUser } = useContext(UserContext);
  console.log("Context", globalUser);
  const classes = useStyles();

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
              Logout <i class="fas fa-sign-out-alt"></i>
            </button>
          </div>
        </div>
        <div className="dashboard__body">
          <TableContainer className="table__container">
            <Table className={classes.table}>
              <TableHead>
                <TableRow className={classes.tableHead}>
                  <TableCell className={classes.headContent}>Title</TableCell>
                  <TableCell className={classes.headContent}>
                    Username
                  </TableCell>
                  <TableCell className={classes.headContent}>
                    Password
                  </TableCell>
                  <TableCell className={classes.headContent}>Options</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Amazon</TableCell>
                  <TableCell>makdoom</TableCell>
                  <TableCell>
                    <input
                      className={classes.password}
                      type="password"
                      value="makdoomshaikh"
                    />
                  </TableCell>
                  <TableCell>Added</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Amazon</TableCell>
                  <TableCell>makdoom</TableCell>
                  <TableCell>
                    <input className="pasword__field" type="password" />
                  </TableCell>
                  <TableCell>Added</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
