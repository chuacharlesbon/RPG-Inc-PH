import { useState} from 'react'
import { Card, Button, Col, Row, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Image from "react-bootstrap/Image";

export default function UnitCard ({unitProp}) {
	//before using props, destructure the object

	const {unitOwner, description, unitPrice, _id, unitSize, unitLoc, agentName, agentNo, postedBy, unitType, unitLink, dateModified, datePosted, remarks, status} = unitProp

	/*const [image] = useState(source)

	const [style] = useState({

		width: "10rem",
		height: "10rem"
		
	})*/

	

	return (
		<Col lg={4} md={6} xl={3} xs={12}>
		<Card className="my-2">
		<Card.Body  className="d-flex flex-column  justify-content-between card-body">
			<Card.Title className="card-title">
			{unitOwner}
			</Card.Title>
			<hr/>
			<Container className="card-details p-0 mt-0 mb-4">
			<p><strong>Unit Type: </strong>{unitType}</p>
			<p><strong>Location: </strong>{unitLoc}</p>
			<p><strong>Price: </strong>{unitPrice}</p>
			<p><strong>Unit Size: </strong>{unitSize}</p>
			<Card.Text>
			<p>
			<strong>Details:</strong><br/>
			Posted By: {postedBy}<br/>
			Posted Date: {datePosted}<br/>
			Contact Person: {agentName} {agentNo}<br/>
			</p>
			<span>Details Link: </span><a target="_blank" href={unitLink} rel="noopener noreferrer" title="Go to LinkedIn Profile" className="text-dark">Click here</a>

			</Card.Text>
			</Container>
			{/*<Image src={image} style={style} className="mx-auto d-block"/>*/}

			<Row className="justify-content-center">
			<Col xs={6} >
			<Button  as= {Link} to={`/products/${_id}`} className="d-block my-2 bg-info text-dark card-btn" >Chat Agent</Button>
			</Col>

			<Col xs={6} >
			<Button  as= {Link} to={`/products/orderFull/${_id}`} className="d-block my-2 bg-secondary text-light card-btn" disabled>Avail Unit</Button>
			</Col>

			{/*<Link to={name} className="mx-auto">Visit Seller Shop</Link>*/}
			{/*<Link to='/products' className="mx-auto">Visit Seller Shop</Link>*/}

			</Row>
			
		</Card.Body>
		</Card>
		</Col>
		
		)
}