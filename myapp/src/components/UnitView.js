import {useState, useEffect, useContext} from 'react'
import {Container, Row, Col, Card, Button, Form} from 'react-bootstrap'
import {useParams, Navigate} from 'react-router-dom'
import Image from "react-bootstrap/Image";
import UserContext from '../UserContext'
import Swal from 'sweetalert2'

export default function UnitView(){

const {user} = useContext(UserContext)
const [unitOwner, setUnitOwner] = useState('')
const [unitType, setUnitType] = useState('');
const [description, setDescription] = useState('');
const [unitPrice, setUnitPrice] = useState('')
const [unitLoc, setUnitLoc] = useState('')
const [status, setStatus] = useState('')
const [postedBy, setPostedBy] = useState('')
const [datePosted, setDatePosted] = useState('')
const [agentName, setAgentName] = useState('')
const [agentNo, setAgentNo] = useState('')
const [unitLink, setUnitLink] = useState('')
const [unitSize, setUnitSize] = useState('')
const [imageLink, setImageLink] = useState('')

/*

const [height] =useState({

		minHeight: "30rem",
		backgroundColor: "lightyellow"
	})*/

//useParams hook allows us to retrieve the courseId via the url
const {unitId} = useParams()

const enroll = (unitId) => {
	/*fetch(`https://immense-lake-17505.herokuapp.com/viewUnit/${unitId}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`
		},
		body: JSON.stringify({
			quantity: quantity
		})
	})
	.then(res => res.json())
	.then(data => {
		const { quantity } = data

		if( data.quantity === quantity && user.id !== undefined){
			Swal.fire({
				title: "Added to Cart",
				icon: "success",
				text: `You have added the ${name} (${quantity} pcs) to your cart`
			})
			setQuantity('')
			setAdded(true)
		}else {
			Swal.fire({
				title: "Something went wrong",
				icon: "error",
				text: "Please contact Admin"
			})
		}
	})*/
}

useEffect(() => {
	//console.log(courseId)
fetch(`http://localhost:4000/units/viewUnit/${unitId}`)
.then(res => res.json())
.then(data => {

	setUnitOwner(data[0].unitOwner)
	setDescription(data[0].description)
	setStatus(data[0].status)
	setUnitPrice(data[0].unitPrice)
	setUnitLoc(data[0].unitLoc)
	setUnitSize(data[0].unitSize)
	setUnitLink(data[0].unitLink)
	setUnitType(data[0].unitType)
	setAgentNo(data[0].agentNo)
	setAgentName(data[0].agentName)
	setPostedBy(data[0].postedBy)
	setDatePosted(data[0].datePosted)
	setImageLink(data[0].imageLink)


})

}, [unitId, unitType, unitLink, datePosted, unitOwner, description, status, unitPrice, unitLoc, agentName, agentNo, postedBy])

	return(
		/*(user.isAdmin === true)?

		<Navigate to="/orders/searchOrder"/>

		: ( added === true && user.id !== null)?

		<Navigate to="/products"/>

		:  (user.id === null)?

		<Navigate to="/login"/>

		:*/

		<Container className="mt-5 bg-light">
		<Row className="justify-content-center align-items-center">
		<Col lg={6} md={10} xs={12} className="mx-auto text-center">
		<Card.Body  className="d-flex flex-column  justify-content-between">
			<Card.Title>
				{unitOwner}
			</Card.Title>
			<Container className=" p-0 mt-0 mb-4">
			<p><strong>Unit Type: </strong>{unitType}</p>
			<p><strong>Location: </strong>{unitLoc}</p>
			<p><strong>Price: </strong>{unitPrice}</p>
			<p><strong>Status: </strong>{status}</p>
			
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

			

			<Button variant="outline-secondary" className="nav-btn" onClick={()=> enroll(unitId)}>Chat Agent</Button>	
		</Card.Body>
		</Col>

		<Col  lg={6} md={10} xs={12} className="mx-auto text-center p-2">

		{/*<Image src={imageLink} className="img-fluid mx-auto d-block unit-image"/>*/}

		<Image src="https://q-xx.bstatic.com/images/hotel/max500/945/94569344.jpg" className="img-fluid mx-auto d-block unit-image"/>
		<p><strong>Unit Size: </strong>{unitSize}</p>
		<p><strong>Description: </strong>{description}</p>
		
		</Col>


		</Row>
		</Container>
		)
}