import React, { useState, useEffect,useContext} from 'react'
import {Row, Col, Container, Nav, Navbar, NavDropdown, Form, Button} from 'react-bootstrap'
import {Link, Navigate} from 'react-router-dom'
import Image from "react-bootstrap/Image";
import UserContext from '../UserContext'


export default function RentBedspace(rentProp){

	const [searchItem, setSearchItem] = useState('')
	const [units, setUnits] = useState([])

	console.log(searchItem)

	

	function searchItems(e) {
		
		/*e.preventDefault()

		fetch(`https://immense-lake-17505.herokuapp.com/products/getSingleProductParams/${searchItem}`)
		.then(res => {
			
			return res.json()
		})
		.then(data => {
			setUnits(data.map(unit =>{
				return (
		<UnitCard key={unit._id} rentProp={unit}/>

	)
			}))

		})*/
	}

	return(

	<>

	<Container className="mx-auto bg-clear my-4">
	<Row className="justify-content-center align-items-center">
	
	<Col xs={12} lg={6}>
	<h3 className="text-white">Welcome to RPG Incorporated PH</h3>
	<h5 className="text-white">See Available Bedspaces By Location</h5>


	</Col>
	<Col xs={12} lg={6} className="mx-auto text-center">
	<Image src="https://www.decorilla.com/online-decorating/wp-content/uploads/2020/09/Dark-and-dramatic-botanical-wallpaper-idea.jpg" alt="This is a room" title="This is a room" className="img-bedspace img-fluid"/>
	</Col>
	</Row>

	</Container>

	<Form id="form-search" className="rounded p-3 my-3 mx-auto bg-light" onSubmit={e => searchItems(e)}>
	<h4 className="text-center">Search Bedspace Unit By Location</h4>
			
	<Form.Group controlId="searchItem">
	<Form.Control type="text" placeholder="Search Keyword" required value={searchItem} onChange={e => setSearchItem(e.target.value)}/>
	<Form.Text className="text-muted"> Must not contain special characters ( &#60; 	&#62; &#38;	&#34; &#39; ' "" )
	</Form.Text>
	</Form.Group>
	
	<Button type="submit" className="my-3 text-center mx-auto text-dark bg-info">Search</Button>
	</Form>

	<Row className="justify-content-md-center">	
	{units}
	</Row>

	</>


		)
}