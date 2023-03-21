import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
} from "react-icons/si";
import solidworks from "../../Assets/solidworks.svg"
import ansys from "../../Assets/ansys.svg"
import Coppeliasim from "../../Assets/coppeliasim.png"
import gazebo from "../../Assets/gazebo.png"

function Toolstack() {
  return (
    <>
      import solidworks, matlab,rviz gazebo
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiLinux />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={solidworks} alt="about" style={{ maxHeight: "40px" }} />
          {/* <SiVercel /> */}
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={ansys} alt="about" style={{ maxHeight: "40px", backgroundColor: "white" }} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Coppeliasim} alt="about" style={{ maxHeight: "80px", backgroundColor: "white" }} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={gazebo} alt="about" style={{ maxHeight: "80px", backgroundColor: "white" }} />
        </Col>
      </Row>
    </>
  );
}

export default Toolstack;
