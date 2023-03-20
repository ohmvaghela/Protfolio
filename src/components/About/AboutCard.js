import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ohm Vaghela </span>
            <br />I am a prefinal-year Mechanical engineering undergraduate presuing dual degree 
            with B.Tech in Mechanincal Engineering and M.Tech in Manufacturing Engineering from 
            <span className="purple"> IIT Bhubaneswar. </span>
            <br />
            <br />
            Position Of Responsibility holding/held
          </p>
          <ul>
            <li className="about-activity">
              Governor : Robotics Society at IIT Bhubaneswar
            </li>
            <li className="about-activity">
              Representative for Mechanical Batch of 2019
            </li>
            <li className="about-activity">
              Alma Fiesta : Publicity Team 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The researchers are working hard day and night to excel in the current technologies 
            available in the market, but applying them in the real world also requires interdisciplinary 
            knowledge of various fields. So let{"'"}s bridge the gap between them using my skillset"
          </p>
          <footer className="blockquote-footer">Ohm Vaghela</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
