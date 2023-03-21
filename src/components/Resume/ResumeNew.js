import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Particle from "../Particle";
// import pdf from "../../Assets/ohm_vaghela_resume.pdf";
import pdf from "../../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import resumeImg from "../../Assets/ohm_vaghela_resume_page.jpg"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const resumeLink =
//   // "https://raw.githubusercontent.com/soumyajit4419/portfolio/master/src/Assets/Soumyajit_Behera-BIT_MESRA.pdf";
//   "https://drive.google.com/file/d/1BTEOjeTHv1z-riqfPYyFmPd4psmgUiji/view?usp=share_link";

function ResumeNew() {
  // const [width, setWidth] = useState(1200);

  // useEffect(() => {
  //   setWidth(window.innerWidth);
  // }, []);

  const pdfLink = "https://drive.google.com/file/d/1BTEOjeTHv1z-riqfPYyFmPd4psmgUiji/view?usp=share_link";
  return (
    <div>



      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
            
          >
              &nbsp;Download CV   
            <AiOutlineDownload />
          </Button>
        </Row>

        <Row >
          {/* <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document> */}
          <img src={resumeImg} alt="about" style={{ marginTop: "50px", display: "block", marginLeft: "auto", marginRight: "auto", width: "50%" }} />

        </Row>


      </Container>


    </div>
  );
}

export default ResumeNew;
