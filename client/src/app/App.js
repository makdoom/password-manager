import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Signup from "../components/signup/Signup";
import Login from "../components/login/Login";
import Dashboard from "../components/dashboard/Dashboard";
import UserProvider from "../context/UserContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
