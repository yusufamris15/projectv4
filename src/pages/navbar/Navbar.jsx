import React from "react";
import "./navbar.scss";
import logo from "../../favicon.ico";
import bell from "../../images/icon-bell.png";
import profil from "../../images/profil-pict.png";
import { Link } from "react-router-dom";
// import { ReactComponent as Bell } from "../../images/icons8_bell.svg";
// import { ReactComponent as Profil } from "../../images/icon_profil.svg";

function Navbar() {
  return (
    <div className="navbar">
      <header className="navbar-container">
        <h1 className="logo">
          <span>
            <Link to="/">
              <img src={logo} alt="logo-navbar" width="48px" height="48px" />
            </Link>
          </span>
        </h1>
        <ul>
          <li>
            <img src={bell} alt="icon-bell" />
          </li>
          <li>
            <Link to="/Profil">
              <img src={profil} alt="icon-profil" width="48px" height="48px" />
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
