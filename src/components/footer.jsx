import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../images/logo.png";
import { Col, Row } from "react-bootstrap";
import "../CSS/footer.css";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function footer() {
  return (
    <MDBFooter className="footer-header text-lg-start text-muted">
      <div className="footer-bottom p-4 border-top">
        © 2023 Arunalla. All Rights Reserved
      </div>
    </MDBFooter>
  );
}
