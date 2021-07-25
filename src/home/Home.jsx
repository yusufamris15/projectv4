import "./index.scss";
// import Login from "./pages/Login"
import React, { Component } from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="left-container">
          <p id="logo-home">
            <img src={logo} alt="logo-home" width="100%" position="center" />
          </p>
        </div>
        <div className="right-container">
          <h1>Your Daily Social Media in Treasury Ministry</h1>
          <h2>Join Daisy today.</h2>
          <div className="button-login">
            <Link to="/login">
              <input type="submit" value="LOGIN" />
            </Link>
            <Link to="/signup">
              <input type="button" value="SIGN UP" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
