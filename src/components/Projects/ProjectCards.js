import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg";
// import { BsGithub } from "react-icons/bs";
import MyModal from "../modal/MyModal"

function ProjectCards(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const completedStatement = (completed) =>{
    if(completed)
      return "(completed)";
    else
      return "(in progress)";
  }
  return (
    <Card className="project-card-view">
      <Card.Img className="project-card-view-image" variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title} <br></br> {completedStatement(props.completed)}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* ------------------------- Extra Buttons ------------------------------------ */}
        {/* <Button variant="primary" id={props.id} target="_blank"> */}
          {/* Know More */}
          {/* <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"} */}
        {/* </Button> */}
        {/* ------------------------- Extra Buttons End -------------------------------- */}

        {props.name!=="CTT" &&
        <Button variant="primary" onClick={() => setModalShow(true)}>
         Know More
       </Button>
      }
       <MyModal
         show={modalShow}
         onHide={() => setModalShow(false)}
         modalheading = {props.title}
         modaltext = {props.description}
         modalname = {props.name}
       >
        </MyModal>


      </Card.Body>
    </Card>
  );
}

ProjectCards.defaultProps = {
  modaltext:'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
  ,modalheading:"Modal heading"
};

export default ProjectCards;
