import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import solidworks from "../../Assets/solidworksPurple2.svg"

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I have a passion for robotics and have honed my skills in areas
              such as
              <i>
                <b className="purple"> SolidWorks, ROS, and electronics. </b>
              </i>
              &nbsp; My experience has allowed me to develop innovative solutions
              for autonomous robotic systems, ensuring seamless 
              <i>
                <b className="purple"> integration </b>
              </i>
              between 
              <i>
                <b className="purple"> hardware and software. </b>
              </i>
              <br />
              <br />
              My expertise in 
              <i>
                <b className="purple"> SolidWorks </b>
              </i>
               enables me to design and simulate robotic systems with precision, 
              while my proficiency in 
              <i>
                <b className="purple"> ROS </b>
              </i>
              enables me to develop efficient and 
              <i>
                <b className="purple"> robust software  </b>
              </i>
              solutions 
              for complex robotic tasks. In addition, my knowledge of 
              <i>
                <b className="purple"> electronics  </b>
              </i>
               
              enables me to create circuits and control systems that 
              integrate seamlessly with robotic systems.
              
              <br />
              <br />

              I am constantly seeking to expand my skillset and stay up-to-date 
              with the latest trends and technologies in robotics development. 
              I am excited about the future of robotics and am committed to 
              developing innovative solutions that will transform the industry.
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ohmvaghela"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ohm-vaghela/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://grabcad.com/ohm.vaghela-1/models"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                                <img
                src={solidworks}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
