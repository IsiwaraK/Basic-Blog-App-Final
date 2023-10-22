import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, Image } from "react-bootstrap";
import "../../Styles/navigation.css";

export default class Navigation extends Component {
  render() {
    return (
      <Navbar fixedTop default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <Image className="logo" src="/assets/logo.png" />{" "}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
    );
  }
}
