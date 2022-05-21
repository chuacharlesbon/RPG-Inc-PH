import React, {useState} from 'react'
import {Modal, Container, Button} from 'react-bootstrap'
import Image from "react-bootstrap/Image";
import {Link} from 'react-router-dom'
import Banner from '../components/Banner'
import Highlights from '../components/Highlights'
import AdsHotel from '../components/AdsHotel'



export default function Home(){


	function AdsZuitt() {
	  const [show, setShow] = useState(true);

	  const handleClose = () => setShow(false);



	  return (
	    <>

	      <Modal
	        show={show}
	        onHide={handleClose}
	        backdrop="static"
	        keyboard={false}
	        centered
	        className="myModal"
	      >
	        <Modal.Header closeButton className="bg-secondary">
	          <Modal.Title className="newfont text-white">Ads</Modal.Title>
	        </Modal.Header>
	        <Modal.Body className="background-play text-center">
	         <h5 className="text-center">Learning Coding is for everyone!</h5>
	         <p className="text-center">Now Accepting Online Boot Campers 2022.</p>

	   			<Container className="p-1 text-center">
	   			<Image src="https://pbs.twimg.com/media/FQv7l8IXoAQ9bNM.jpg" alt="Zuitt Ads" title="Zuitt Brand" className="text-center mx-2 rounded img-fluid image-zuitt" />
	   			</Container>

	   			<Button variant="outline-info" target="_blank" href="https://zuitt.co/global/" title="Go to Zuitt Homepage" className=" m-2 d-block">Visit Us!</Button>
	   			<Button variant="outline-info" target="_blank" href="https://zuitt.co/global/applicationform/"  title="Go to Zuitt Registration Page" className=" m-2 d-block">Enroll Now!</Button>

	        </Modal.Body>
	        <Modal.Footer>
	      
	        <Button variant="info" onClick={handleClose}>
	            Got It!
	          </Button>

	        </Modal.Footer>
	      </Modal>
	    </>
	  );
	}



	return(
		
	<>
	<Banner/>
	<Highlights/>
	<AdsHotel/>
	<AdsZuitt/>
	</>

		)
}