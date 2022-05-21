import {Row, Col, Container, Button} from	'react-bootstrap'
import {Link} from 'react-router-dom'
import Image from "react-bootstrap/Image";


export default function Options(){


	return(

	<>
	<Container className="bg-light p-2">

	<Container className="mx-auto bg-clear my-4 banner-fade">
	<Row className="justify-content-center align-items-center p-2">
	
	<Col xs={12} lg={6}>
	<h3 >Welcome to RPG Incorporated PH</h3>
	<h5 >See Available Options of Units</h5>
	<hr/>


	</Col>
	<Col xs={12} lg={6} className="mx-auto text-center">
	<Image src="https://thumbs.dreamstime.com/b/concept-housing-young-family-mother-father-child-girl-new-house-cardbox-roof-symbol-protection-property-143492638.jpg" alt="This is a room" title="This is a room" className="img-bedspace img-fluid"/>
	</Col>
	</Row>

	</Container>

	<h1 className="my-5 text-center">Choose your New Dream Home!</h1>
	<blockquote className="text-center text-italic">
	"Home sweet home. This is the place to find happiness. If one doesn’t find it here, one doesn’t find it anywhere."
	<br/>- M.K. Soni
	</blockquote>
	<hr/>


	<Row className="justify-content-center align-items-center my-3">

	<Col xs={12} md={6} lg={4} xl={3} className="m-2 text-center p-2 unit-options">
	<Container  as={Link} to="/bedspace_type" className="card-select d-flex align-items-end bg-bedspace text-center p-2">
	<Button as={Link} to="/bedspace_type" className="text-dark bg-light p-2 rounded nav-btn">Bedspaces</Button>
	</Container>
	</Col>

	<Col xs={12} md={6} lg={4} xl={3} className="m-2 m text-center p-2 unit-options">
	<Container  as={Link} to="/bedspace_type" className="card-select d-flex align-items-end bg-singleroom text-center p-2">
	<Button as={Link} to="/rentroom_type" className="text-dark bg-light p-2 rounded nav-btn">Rooms For Rent</Button>
	</Container>
	</Col>

	<Col xs={12} md={6} lg={4} xl={3} className="m-2 text-center p-2 unit-options">
	<Container  as={Link} to="/bedspace_type" className="card-select d-flex align-items-end bg-multiunit text-center p-2">
	<Button to="/bedspace_type" className="text-dark bg-light p-2 rounded nav-btn">Multi-Unit Room for Rent</Button>
	</Container>
	</Col>

	<Col xs={12} md={6} lg={4} xl={3} className="m-2 text-center p-2 unit-options">
	<Container  as={Link} to="/bedspace_type" className="card-select d-flex align-items-end bg-townhouse text-center p-2">
	<Button to="/bedspace_type" className="text-dark bg-light p-2 rounded nav-btn">Townhouses</Button>
	</Container>
	</Col>

	<Col xs={12} md={6} lg={4} xl={3} className="m-2 text-center p-2 unit-options">
	<Container  as={Link} to="/bedspace_type" className="card-select d-flex align-items-end bg-mall text-center p-2">
	<Button to="/bedspace_type" className="text-dark bg-light p-2 rounded nav-btn">Mall Units for Lease</Button>
	</Container>
	</Col>

	</Row>

	</Container>

	</>
		)
}