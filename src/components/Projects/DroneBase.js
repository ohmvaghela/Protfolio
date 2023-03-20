import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
import Techstack from "../About/Techstack";
// import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";

import YouTubeTest from "../youtube/YouTubeTest"
import SideImage from "../../Assets/Projects/Exo/Exo_image.png";
import WiredDiagram from "../../Assets/Projects/Exo/wiredDiagram.png";
import WiredSetup from "../../Assets/Projects/Exo/wiredSetup.png";
import MQTT from "../../Assets/Projects/Exo/MQTT.png";
import MQTT1 from "../../Assets/Projects/Exo/MQTT1.png";
import ESP32 from "../../Assets/Projects/Exo/wireless_esp.png";
import ROS from "../../Assets/Projects/Exo/ROS.png";
import solidworksModel from "../../Assets/Projects/DroneBase/solidworks.png";
import AnsysSimulation from "../../Assets/Projects/DroneBase/Ansys.png";


function DroneBaseModal() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                    Solar Panel Scanning robot<br></br>
                </h1>
                <img src={solidworksModel} alt="about" style={{ maxHeight: "400px", position: "absolute", marginLeft: "80px" }} />


                <Row style={{ justifyContent: "center", padding: "10px", marginTop: "350px" }}>
                    <Col
                        md={5}
                        style={{
                            justifyContent: "center",
                        }}>
                        <div className="quote-card-view"
                            style={{
                                marginTop: "170px",
                                fontSize: "20px"
                            }}>
                            <ul>
                            <li className="about-activity">
                                    ◉ The robot was designed to scan the solar panel and get it's stats
                                </li>

                                <li className="about-activity"><br></br></li>
                                <li className="about-activity">
                                    ◉ In the above shown the robot is bulging a lot when it stops
                                </li>

                                <li className="about-activity"><br></br></li>

                                <li className="about-activity">
                                    ◉ The Structure very heavy to be carried by human
                                </li>
                                <li className="about-activity"><br></br></li>

                                <li className="about-activity">
                                    ◉ Same model cannot be used on other solar site
                                </li>
                            </ul>
                        </div>

                    </Col>
                    <Col
                        md={7}
                        style={{ paddingTop: "190px" }}
                        className="about-img"
                    >
                        {/* <YouTubeTest YTlink="iZGUXmR9zIY" /> */}
                        {/* <img src={SideImage} alt="about" style={{ maxHeight: "400px", position: "absolute", right: "180px" }} /> */}
                        <YouTubeTest YTlink="FQYfBd2mAlA" />

                    </Col>
                </Row>



                <Row style={{ justifyContent: "center", padding: "10px", paddingTop: "50px" }}>
                    <Col
                        md={6}
                        style={{ paddingTop: "10px", paddingBottom: "50px" }}
                        className="about-img"
                    >
                        <img src={AnsysSimulation} alt="about" style={{ maxWidth: "500px", position: "relative" }} />
                    </Col>
                    <Col
                        md={6}
                        style={{
                            justifyContent: "center",
                            paddingTop: "0px",
                            paddingBottom: "50px",
                        }}>
                        <div className="quote-card-view"
                            style={{
                                marginTop: "0px",
                                fontSize: "20px"
                            }}>
                            <ul>
                                <li className="about-activity">
                                    ◉ To make design lightweight and rigid enough to stop bulging
                                </li>

                                <li className="about-activity"><br></br></li>
                                <li className="about-activity">
                                    ◉ Inverted T-section was used with width of 100mm and thickness 5mm
                                </li>

                                <li className="about-activity"><br></br></li>

                                <li className="about-activity">
                                    ◉ This reduced weight to less then 10kg
                                </li>
                                <li className="about-activity"><br></br></li>

                                <li className="about-activity">
                                    ◉ T-section provided enough flexural rigidity to stop bulging
                                </li>
                            </ul>

                        </div>

                    </Col>
                </Row>



                <div className="quote-card-view" style={{ fontSize: "1.5em" }}>


                    <ul>
                        <li className="about-activity">
                            ◉ To make design modular
                            <li className="about-activity"><br></br></li>

                            <ul>
                            <li className="about-activity">
                                    ◉ divided entire length to 1.5m long sections
                                </li>
                                <li className="about-activity"><br></br></li>
                                <li className="about-activity">
                                    ◉ At the end an screw adjustment mechanism was also added to fit it to solar panel prefectly
                                </li>
                                <li className="about-activity"><br></br></li>
                            </ul>
                        </li>

                        <li className="about-activity">
                            ◉ As workers usually don't place robot with care on solar panel so ATV wheels were used to avoid damage to solar panel
                        </li>
                        <li className="about-activity"><br></br></li>
                    </ul>

                </div>
            </Container>
        </Container>
    );
}

export default DroneBaseModal;
