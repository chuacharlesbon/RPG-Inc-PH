import React, { useState, useEffect,useContext} from 'react'
import {Row, Col, Container, Nav, Navbar, NavDropdown, Form, Button} from 'react-bootstrap'
import {Link, Navigate} from 'react-router-dom'
import Image from "react-bootstrap/Image";
import UserContext from '../UserContext'
import UnitCard from '../components/UnitCard'


export default function RentBedspace(){

	const [searchItem, setSearchItem] = useState('')
	const [units, setUnits] = useState([])
	const [searchUnits, setSearchUnits] = useState([])
	const [style, setStyle] =  useState({
		display: "none"
	})

	useEffect(() => {
		//fetch('http://localhost:4000/courses')
		fetch('http://localhost:4000/units/bedspace')
		.then(res => res.json())
		.then(data => {
			console.log(data)
			setUnits(data.map(unit => {
	
	return (
		//key used to identify each child
		<UnitCard key={unit._id} unitProp={unit}/>

	)
	}))
	})
	}, [])

	function searchItems(e) {
		
		e.preventDefault()
		setStyle({
			display: "flex"
		})

		fetch(`http://localhost:4000/units/searchLoc/${searchItem}`)
		.then(res => {
			
			return res.json()
		})
		.then(data => {
			setSearchUnits(data.map(unit =>{
				return (
		<UnitCard key={unit._id} unitProp={unit}/>

	)
			}))

		})
	}

	function clearUnits(){
		setSearchUnits([])
		setStyle({
			display: "none"
		})
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
	
	<Button type="submit" variant="outline-info" className="my-3 text-center mx-1 text-dark">Search</Button>
	<Button variant="outline-info" className="my-3 text-center mx-1 text-dark" onClick={()=>clearUnits()}>Clear</Button>
	</Form>

	<Row className="justify-content-md-center bg-light m-1 p-1" style={style}>
	<h3>Search Results</h3>
	<hr/>
	{searchUnits}
	</Row>

	<Row className="justify-content-md-center">	
	{units}
	</Row>

	</>


		)
}