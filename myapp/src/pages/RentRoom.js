import React, { useState, useEffect,useContext} from 'react'
import {Row, Col, Container, Nav, Navbar, NavDropdown, Form, Button} from 'react-bootstrap'
import {Link, Navigate} from 'react-router-dom'
import Image from "react-bootstrap/Image";
import UserContext from '../UserContext'
import UnitCard from '../components/UnitCard'


export default function RentRoom(){

	const [searchItem, setSearchItem] = useState('')
	const [searchNum, setSearchNum] = useState(0)
	const [units, setUnits] = useState([])
	const [searchUnits, setSearchUnits] = useState([])
	const [style, setStyle] =  useState({
		display: "none"
	})
	const [loading, setLoading] = useState(true);

	  useEffect(() => {
	    setTimeout(() => {
	      setLoading(false);
	    }, 2000);
	  }, []);

	

	useEffect(() => {
		//fetch('http://localhost:4000/courses')
		fetch('http://localhost:4000/units/rooms')
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

		fetch(`http://localhost:4000/units/roomsLoc/${searchItem}`)
		.then(res => {
			
			return res.json()
		})
		.then(data => {
			setSearchNum(data.length)
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

	{
	
	loading?

	<>
	<Container className="errorpage text-center d-flex align-items-center justify-content-center">
	<div className="bg-light p-2 rounded">
	<h3>Page is Loading...</h3>
	<p>Please wait</p>
	</div>
	</Container>
	</>

	:
	<>

	<Container className="mx-auto bg-clear my-4 banner-fade">
	<Row className="justify-content-center align-items-center">
	
	<Col xs={12} lg={6}>
	<h3 className="text-white">Welcome to RPG Incorporated PH</h3>
	<h5 className="text-white">See Available Rooms for Rent By Location</h5>


	</Col>
	<Col xs={12} lg={6} className="mx-auto text-center">
	<Image src="https://www.decorilla.com/online-decorating/wp-content/uploads/2020/09/Dark-and-dramatic-botanical-wallpaper-idea.jpg" alt="This is a room" title="This is a room" className="img-bedspace img-fluid"/>
	</Col>
	</Row>

	</Container>

	<Form id="form-search" className="rounded p-3 my-3 mx-auto bg-light" onSubmit={e => searchItems(e)}>
	<h4 className="text-center">Search Rooms for Rent By Location</h4>
			
	<Form.Group controlId="searchItem">
	<Form.Control type="text" placeholder="Search Keyword" required value={searchItem} onChange={e => setSearchItem(e.target.value)}/>
	<Form.Text className="text-muted"> Must not contain special characters ( &#60; 	&#62; &#38;	&#34; &#39; ' "" )
	</Form.Text>
	</Form.Group>
	
	<Button type="submit" variant="outline-secondary"  className="my-3 text-center mx-auto text-dark nav-btn">Search</Button>
	<Button variant="outline-secondary" className="my-3 text-center mx-1 text-dark" onClick={()=>clearUnits()}>Clear</Button> 
	</Form>

	<Row className="justify-content-md-center bg-light m-1 p-1" style={style}>
	<h5>Search Results</h5>
	<h5 className="pb-3">Results found ({searchNum} units)</h5>
	<hr/>
	{searchUnits}
	</Row>

	<Row className="justify-content-md-center">	
	{units}
	</Row>
	</>

	}

	</>


		)
}