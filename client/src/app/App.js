import Signup from "../components/signup/Signup";
import Login from "../components/login/Login";
import Dashboard from "../components/dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <div className="app">
          <Route exact path="/dash" component={Dashboard} />
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
