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

function ExoModal() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                    LowerLimb Exoskeleton<br></br>
                </h1>
                <YouTubeTest YTlink="Bk5_FyOsx_M" />

                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}>
                        <div className="quote-card-view"
                            style={{
                                marginTop: "170px",
                                fontSize: "20px"
                            }}>
                            <ul>
                                <li className="about-activity">
                                    ◉ The lowerlimb Exoskeleton(LLE) is to be used for Gait rehabilitation
                                    and Assistive LLE for load bearing in military and factories
                                </li>

                                <li className="about-activity"><br></br></li>

                                <li className="about-activity">
                                    ◉ Entire Structure is machined out of aluminium
                                </li>
                                <li className="about-activity"><br></br></li>

                                <li className="about-activity">
                                    ◉ Maxon Flat BLDC motors ( 160W ) are used for actuation
                                </li>
                            </ul>
                        </div>

                    </Col>
                    <Col
                        md={5}
                        style={{ paddingTop: "120px", paddingBottom: "50px", marginBottom: "300px" }}
                        className="about-img"
                    >
                        {/* <YouTubeTest YTlink="iZGUXmR9zIY" /> */}
                        <img src={SideImage} alt="about" style={{ maxHeight: "400px", position: "absolute", right: "180px" }} />

                    </Col>
                </Row>



                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{ paddingTop: "120px", paddingBottom: "50px" }}
                        className="about-img"
                    >
                        <ul>
                            <li className="about-activity">
                                <img src={WiredDiagram} alt="about" style={{ maxWidth: "500px", position: "relative" }} />
                            </li>
                            <li className="about-activity">
                                <img src={WiredSetup} alt="about" style={{ maxWidth: "500px", position: "relative" }} />
                            </li>
                        </ul>
                    </Col>
                    <Col
                        md={5}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}>
                        <div className="quote-card-view"
                            style={{
                                marginTop: "150px",
                                fontSize: "20px"
                            }}>
                            <ul>
                                <li className="about-activity">
                                    ◉ Infineon BLDC motor shield IFX007T is used to control motor
                                </li>

                                <li className="about-activity"><br></br></li>
                                <li className="about-activity">
                                    ◉ Arduino mega is used as microcontroller and serial communication for communication with main system

                                </li>

                                <li className="about-activity"><br></br></li>

                                <li className="about-activity">
                                    ◉ For testing algorithm SMPS is used as power supply
                                </li>
                                <li className="about-activity"><br></br></li>

                                <li className="about-activity">
                                    ◉ Currently position control is used with feedback from inbuild encoder
                                </li>
                            </ul>

                        </div>

                    </Col>
                </Row>

                <Row style={{ justifyContent: "center", padding: "10px",marginTop:"-100px" }}>
                    <Col
                        md={5}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}>
                        <div className="quote-card-view"
                            style={{
                                marginTop: "150px",
                                fontSize: "20px"
                            }}>
                            <ul>
                                <li className="about-activity">
                                    ◉ Parallely work on making wireless is going on
                                </li>

                                <li className="about-activity"><br></br></li>
                                <li className="about-activity">
                                    ◉ For it LiPo as a power supply is been tested 
                                </li>

                                <li className="about-activity"><br></br></li>

                                <li className="about-activity">
                                    ◉ For communication ESP32 microcontroller with MQTT protocal is used
                                </li>
                                <li className="about-activity"><br></br></li>

                                <li className="about-activity">
                                    ◉ ROS environment is configured for furthur development of control system and RViZ is used for visual representation 

                                </li>
                            </ul>

                        </div>

                    </Col>
                    <Col
                        md={7}
                        style={{ paddingTop: "120px", paddingBottom: "50px" }}
                        className="about-img"
                    >
                        <ul>
                            <li className="about-activity">
                                <img src={MQTT} alt="about" style={{ maxWidth: "500px", position: "relative" }} />
                            </li>
                            <li className="about-activity">
                                <img src={MQTT1} alt="about" style={{ maxWidth: "500px", position: "relative" }} />
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={6}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}>
                        <img src={ESP32} alt="about" style={{ maxWidth: "500px", position: "relative" }} />

                    </Col>
                    <Col
                        md={6}
                        style={{ paddingTop: "120px", paddingBottom: "50px" }}
                        className="about-img"
                    >
                        <img src={ROS} alt="about" style={{ maxWidth: "500px", position: "relative" }} />
                    </Col>
                </Row>




            </Container>
        </Container>
    );
}

export default ExoModal;
