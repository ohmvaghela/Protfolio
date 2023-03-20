import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
import Techstack from "../About/Techstack";
// import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
import Toolstack from "../About/Toolstack";
import YouTubeTest from "../youtube/YouTubeTest"
import Stanley from "../../Assets/Projects/DairyBike/Stanley.jpeg";
import StanleyPredicitve from "../../Assets/Projects/DairyBike/StanleyPredicitve.jpeg";
import ArmIK1 from "../../Assets/Projects/DairyBike/ArmIK1.jpeg";
import ArmIK2 from "../../Assets/Projects/DairyBike/ArmIK2.jpeg";
function DairyBikeModal() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                    Autonomous Self balancing bike
                </h1>
                <YouTubeTest YTlink="HKetiTpKIkg" />

                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={6}
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
                                    ◉ Coppeliasim was used to simulate and solidworks for CAD modeling
                                </li>
                                <li className="about-activity"><br></br></li>
                                <li className="about-activity">
                                    ◉ For Autonomous navigation stanley predicitve controller was used
                                </li>
                                <li className="about-activity"><br></br></li>
                                <li className="about-activity">
                                    ◉ Frist image corrosponds to stanley controls and second to predicitve control
                                </li>
                                <li className="about-activity"><br></br></li>

                                <li className="about-activity">
                                    ◉ Controller takes lateral and angular error as input and provide speed and steering angle as output
                                </li>
                            </ul>
                        </div>

                    </Col>
                    <Col
                        md={6}
                        style={{ paddingTop: "120px", paddingBottom: "0px" }}
                        className="about-img"
                    >
                        <ul>
                            <li className="about-activity">
                                <img src={Stanley} alt="about" style={{ maxWidth: "500px", position: "relative", marginBottom: "20px", right: "-80px" }} />
                            </li>
                            <li className="about-activity">
                                <img src={StanleyPredicitve} alt="about" style={{ maxWidth: "500px", position: "relative", right: "40px" }} />
                            </li>
                        </ul>
                    </Col>
                </Row>


                <div className="quote-card-view" style={{ justifyContent: "center", padding: "10px", fontSize: "50px" }}>
                    <div className="purple">Add image of bike's front view from pdf of task 2</div>
                </div>


                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={5}
                        style={{ paddingTop: "120px", paddingBottom: "50px" }}
                        className="about-img"
                    >
                        <img src={Stanley} alt="about" style={{ maxWidth: "500px", width: "400px", position: "relative", marginBottom: "20px" }} />
                    </Col>
                    <Col
                        md={7}
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
                                    ◉ LQR controller was implemented for balancing bike with bike's angle and angular velocity and gyrowheel's angle and angular velocity as input
                                </li>

                                <li className="about-activity"><br></br></li>

                                <li className="about-activity">
                                    ◉ Gyrowheel's torque was the output parameter which was controlled using LRQ controller
                                </li>

                                <li className="about-activity"><br></br></li>

                                <li className="about-activity">
                                    ◉ Additionally robotic arm's position was also taken as LQR weight for maximun stabilisation
                                </li>
                            </ul>
                        </div>

                    </Col>
                </Row>


                <div className="quote-card-view" style={{fontSize:"1.5em"}}>


                    <ul>
                        <li className="about-activity">
                            ◉ DH-parameters were calculated and were to feed to Coppeliasim
                        </li>
                        <li className="about-activity"><br></br></li>

                        <li className="about-activity">
                            ◉ inbuild IK library was used for controlling robotic arm
                        </li>
                        <li className="about-activity"><br></br></li>
                    </ul>

                </div>
                <Row style={{ justifyContent: "center" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            marginTop: "-100px",
                            paddingBottom: "50px",
                        }}>
                        <div className="quote-card-view"
                            style={{
                                marginTop: "70px",
                                fontSize: "20px"
                            }}>
                        </div>
                        <img src={ArmIK2} alt="about" style={{ width: "500px", position: "relative" }} />

                    </Col>
                    <Col
                        md={5}
                        style={{ paddingTop: "50px", paddingBottom: "50px" }}
                        className="about-img"
                    >
                        <img src={ArmIK1} alt="about" style={{ maxWidth: "500px", position: "relative" }} />
                    </Col>

                </Row>

            </Container>
        </Container >
    );
}

export default DairyBikeModal;
