import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import YouTubeTest from "../youtube/YouTubeTest"
function About2() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                    Autonomous Robots for warehouse comissioning tasks
                </h1>
                <YouTubeTest YTlink="iZGUXmR9zIY" />

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
                            Bot description1
                            Bot description2
                            Bot description3
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
                <Col
                    md={7}
                    style={{ paddingTop: "120px", paddingBottom: "50px" }}
                    className="about-img"
                >
                    {/* <img className='img-fluid' src={botImage}></img> */}

                </Col>
                <Col
                    md={5}
                    style={{ paddingTop: "120px", paddingBottom: "50px" }}
                    className="about-img"
                >

                </Col>
                
                <Row style={{ justifyContent: "center", padding: "10px" }}>

                </Row>
                <h1 className="project-heading">
                    Professional <strong className="purple">Skillset </strong>
                </h1>

                <Techstack />

                <h1 className="project-heading">
                    <strong className="purple">Tools</strong> I use
                </h1>
                <Toolstack />

                {/* <Github /> */}
            </Container>
        </Container>
    );
}

export default About2;
