import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
import Techstack from "../About/Techstack";
// import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
import Toolstack from "../About/Toolstack";
import YouTubeTest from "../youtube/YouTubeTest"
import botImage from "../../Assets/Projects/Flipkart/botImageCroped.jpg";
function FlipkartModal() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                    Autonomous Robots for warehouse comissioning tasks
                </h1>
                <YouTubeTest YTlink="hQCdJO-4wfw" />

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
                                marginTop: "150px",
                                fontSize: "20px",
                                // lineClamp:"80px"
                            }}>
                            <ul>
                                <li className="about-activity">
                                    ◉ Arduino Mega was used as microcontroller
                                </li>
                                <li className="about-activity">
                                    ◉ NRF24L01 radio frequency module to transmit and recieve signals
                                </li>
                                <li className="about-activity">
                                    ◉ Two DC geared motors were used tb6612fng motor driver for controlling both at once
                                </li>
                                <li className="about-activity">
                                    ◉ Servo motor were used for flipping the box which will be placed at the top
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
                        <img src={botImage} alt="about" style={{ maxHeight: "400px", position: "absolute", right: "80px" }} />

                    </Col>
                </Row>

{/* 
                <div className="quote-card-view" style={{ justifyContent: "center", padding: "10px", fontSize: "50px" }}>
                    change youtube video
                </div> */}


                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{ paddingTop: "120px", paddingBottom: "50px" }}
                        className="about-img"
                    >
                        <YouTubeTest YTlink="p6G3ub3R7Qo" />
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
                                marginTop: "70px",
                                fontSize: "20px"
                            }}>
                            <ul>
                            <li className="about-activity">
                                    ◉ An overhead camera sends video feedback which is processed and bot velocity is generated as output
                                </li>

                                <li className="about-activity"><br></br></li>
                                
                                <li className="about-activity">
                                    ◉ Djkastra algorithm was used to find optimum path for each bot in 14x14 grid without colliding with each other
                                </li>

                                <li className="about-activity"><br></br></li>

                            </ul>
                        </div>

                    </Col>
                </Row>



                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={5}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}>
                        <div className="quote-card-view"
                            style={{
                                marginTop: "70px",
                                fontSize: "20px"
                            }}>
                            <ul>
                                <li className="about-activity">
                                    ◉ Initially HSV filters were applied fliter out additional background
                                </li>
                                <li className="about-activity"><br></br></li>

                                <li className="about-activity">
                                    ◉ Then morphological operations were applied to smoothen image
                                </li>
                                <li className="about-activity"><br></br></li>

                                <li className="about-activity">
                                    ◉ Following that canny edge detection was applied to highlight edges of quardilateral
                                </li>
                                <li className="about-activity"><br></br></li>

                                <li className="about-activity">
                                    ◉ Finally contours were extracted and stored
                                </li>
                            </ul>
                        </div>

                    </Col>
                    <Col
                        md={7}
                        style={{ paddingTop: "120px", paddingBottom: "50px" }}
                        className="about-img"
                    >
                        <YouTubeTest YTlink="5Ej_vqSPSwY" />
                    </Col>

                </Row>

                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{ paddingTop: "120px", paddingBottom: "50px" }}
                        className="about-img"
                    >
                        <YouTubeTest YTlink="WYtzD95BN-g" />
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
                                marginTop: "70px",
                                fontSize: "20px"
                            }}>
                            <ul>
                                <li className="about-activity">
                                    ◉ Similar to stage detection minimun box filling bot was extracted
                                </li>
                                <li className="about-activity"><br></br></li>

                                <li className="about-activity">
                                    ◉ LED was used to track orientation of bot
                                </li>
                                <li className="about-activity"><br></br></li>

                            </ul>
                        </div>

                    </Col>
                </Row>



            </Container>
        </Container>
    );
}

export default FlipkartModal;
