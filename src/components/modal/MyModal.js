import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DairyBikeModal from '../Projects/DairyBike';
import DroneBaseModal from '../Projects/DroneBase';
import ExoModal from '../Projects/Exo';
// import "./Modal.css"
import FlipkartModal from "../Projects/Flipkart";

function MyModal(props) {

  var division;
  if (props.modalname === 'Flipkart') division = <div><FlipkartModal /></div>;
  else if (props.modalname === "Exoskeleton") division = <div><ExoModal/></div>;
  else if (props.modalname === "DairyBike") division = <div><DairyBikeModal/></div>;
  else if (props.modalname === "DroneBase") division = <div><DroneBaseModal/> </div>;
  // else if (props.modalname === 5) division = <div>Division 5</div>;
  // else division = <div>Invalid input</div>;



  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className='vertical-modal' >
        {/* <div Container fluid className="about-section" > */}

        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.modalheading}
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <p>
            {/* {props.modaltext} */}
            {division}
            {/* <FlipkartModal/> */}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}

MyModal.defaultProps = {
  modaltext: 'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
  , modalheading: "Modal heading"
};

export default MyModal;
