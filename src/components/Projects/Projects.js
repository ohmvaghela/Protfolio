import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

import Flipkart from "../../Assets/Projects/flipkart.jpg";
import DroneBase from "../../Assets/Projects/DroneBase.png";
import CTT from "../../Assets/Projects/CTT.jpg";
import Exoskeleton from "../../Assets/Projects/exoskeleton.jpeg";
import DairyBike from "../../Assets/Projects/dairybike.jpeg";
// import Modal from "../modal/Modal"

import data from "./data.json"

function Projects() {

  const FlipkartProp = data.projects.find(project => project.name === 'Flipkart');
  const ExoProp = data.projects.find(project => project.name === 'Exoskeleton')
  const DairyBikeProp = data.projects.find(project => project.name === 'DairyBike')
  const CTTProp = data.projects.find(project => project.name === 'CTT')
  const DroneBaseProp = data.projects.find(project => project.name === 'DroneBase')

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card" >
            <ProjectCard
              name={FlipkartProp.name}
              imgPath={Flipkart}
              isBlog={false}
              title={FlipkartProp.Title + " (Completed)"}
              // title="Autonomous Robots for warehouse comissioning tasks"
              description={FlipkartProp.Description}
            // ghLink="https://github.com/soumyajit4419/Chatify"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              name={ExoProp.name}
              imgPath={Exoskeleton}
              isBlog={false}
              title={ExoProp.Title+ " (In Progress)"}
              description={ExoProp.Description}
            // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
            // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              name={DairyBikeProp.name}
              imgPath={DairyBike}
              isBlog={false}
              title={DairyBikeProp.Title + " (Completed)"}
              description={DairyBikeProp.Description}
            // ghLink="https://github.com/soumyajit4419/Editor.io"
            // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              name={CTTProp.name}
              imgPath={CTT}
              isBlog={false}
              title={CTTProp.Title+ " (Completed)"}
              description={CTTProp.Description}
            // ghLink="https://github.com/soumyajit4419/Plant_AI"
            // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              name={DroneBaseProp.name}
              imgPath={DroneBase}
              isBlog={false}
              title={DroneBaseProp.Title+ " (In Progress)"}
              description={DroneBaseProp.Description}
            // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

        </Row>
      </Container>
    </Container >
  );
}

export default Projects;
