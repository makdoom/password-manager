import Signup from "../components/signup/Signup";
import Login from "../components/login/Login";
import Dashboard from "../components/dashboard/Dashboard";
import {BrowserRouter as Router} from 'react-router-dom'
import "./App.css";

function App() {
  return (
    <Router>
    <div className="app">
      <h1>Password manager</h1>
      <Signup />
      <Login />
      <Dashboard />
    </div>

    </Router>
  );
}

export default App;
