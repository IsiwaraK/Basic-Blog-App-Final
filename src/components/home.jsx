import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { Accordion, Container, Col, Image, Button, Row } from "react-bootstrap";
import "../CSS/home.css";
import pic1 from "../images/frm1.png";
import pic2 from "../images/frm2.png";
import pic3 from "../images/frm3.png";
import bd1 from "../images/bd1.png";
import bd2 from "../images/bd2.png";
import bd3 from "../images/bd3.png";
import bd4 from "../images/bd4.png";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export default function Home() {
  return (
    <div className="homepage-outermain">
      <div className="head">
        <Header />
        <Container style={{ marginLeft: "auto", marginRight: "auto" }}>
          <Accordion>
            <div
              style={{
                flex: 1,
                height: "2px",
                backgroundColor: "white",
                border: "1px solid",
              }}
            />
            <div className="eng">
              <h3>
                <br></br>
                HE WHO HAS HEALTH HAS HOPE, HE WHO HAS HOPE HAS EVERYTHING....
              </h3>
            </div>
            <br></br>
            <div className="sin">
              <h3>
                නිරෝගීකම ඇති තැනැත්තාට බලාපොරොත්තුවක් ඇත, බලාපොරොත්තුව ඇති
                තැනැත්තාට සියල්ල තිබේ....
              </h3>
            </div>
            <br></br>
            <div style={{ flex: 1, height: "2px", backgroundColor: "white" }} />
          </Accordion>
        </Container>
      </div>

      <Row className="show-grid text-center">
        <CardGroup>
          <Card className="cardgroup" border="light">
            <a
              href={require("../docs/doc.pdf")}
              target="_blank"
              rel="noreferrer"
            >
              <Card.Img className="instructions" variant="top" src={bd1} />
              <Card.Body>
                <Card.Title>ඉන්ෆ්ලුවන්සා උන ගැන</Card.Title>
                <Card.Text>
                  මේ දිනවල බොහෝ දෙනා කතා කරන ප්‍රධාන උන රෝගය ගැන අපි කතා කරමු
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
          <Card className="cardgroup" border="light">
            <a
              href={require("../docs/doc2.pdf")}
              target="_blank"
              rel="noreferrer"
            >
              <Card.Img className="instructions" variant="top" src={bd2} />
              <Card.Body>
                <Card.Title>බබා කහ වුනාම ඉර එලියට අල්ලන්න හොඳයිද?</Card.Title>
                <Card.Text>ළමා රෝග විශේෂඥ අරුණ පීරිස්ගෙන් පණිවුඩයක්</Card.Text>
              </Card.Body>
            </a>
          </Card>
          <Card className="cardgroup" border="light">
            <a
              href={require("../docs/doc3.pdf")}
              target="_blank"
              rel="noreferrer"
            >
              <Card.Img className="instructions" variant="top" src={bd3} />
              <Card.Body>
                <Card.Title>දරුවාගේ නින්ද සුවදායකව ලබා දෙමු</Card.Title>
                <Card.Text>ප්‍රශස්ත මානසික හා ශාරීරික වර්ධනයක් සඳහා</Card.Text>
              </Card.Body>
            </a>
          </Card>
          <Card className="cardgroup" border="light">
            <a
              href={require("../images/bd4.png")}
              target="_blank"
              rel="noreferrer"
            >
              <Card.Img className="instructions" variant="top" src={bd4} />
              <Card.Body>
                <Card.Title>දරුවන්ගේ කටයුතු සීමා කරන ඇදුම</Card.Title>
                <Card.Text>සුවබර දිවියක් සඳහා</Card.Text>
              </Card.Body>
            </a>
          </Card>
        </CardGroup>
      </Row>

      <Footer />
    </div>
  );
}
