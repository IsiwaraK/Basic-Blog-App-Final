import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";

import "../CSS/header.css";

export default function Header() {
  const userID = useSelector((state) => state.auth.internID);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="logo">
          <img className="img1" src={logo} width="160" height="auto" />
        </div>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="item">
              <Link to="/" className="sign">
                {" "}
                {userID ? "Profile" : "By Dr. Aruna Pieris"}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
