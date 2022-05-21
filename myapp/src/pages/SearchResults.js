import React, { useState, useEffect,useContext} from 'react'
import {Row, Col, Container, Nav, Navbar, NavDropdown, Form, Button} from 'react-bootstrap'
import {Link, Navigate, useParams} from 'react-router-dom'
import Image from "react-bootstrap/Image";
import UserContext from '../UserContext'
import UnitCard from '../components/UnitCard'


export default function SearchResults(){

	const [searchNum, setSearchNum] = useState('')
	const [units, setUnits] = useState([])
	const {unitId} = useParams()

	const [loading, setLoading] = useState(true);

	  useEffect(() => {
	    setTimeout(() => {
	      setLoading(false);
	    }, 2000);
	  }, []);

	useEffect(() => {
		//fetch('http://localhost:4000/courses')
		fetch(`https://glacial-meadow-34891.herokuapp.com/units/searchAll/${unitId}`)
		.then(res => res.json())
		.then(data => {
			setSearchNum(data.length)
			setUnits(data.map(unit => {
	
	return (
		//key used to identify each child
		<UnitCard key={unit._id} unitProp={unit}/>

	)
	}))
	})
	}, [])

	

	return(

	<>

	<Container className="mx-auto bg-clear my-4">
	<Row className="justify-content-center align-items-center py-5">
	
	<h3 className="text-white">Welcome to RPG Incorporated PH</h3>
	<h5 className="text-white">See Search Results of Units</h5>
	<h5 className="text-white text-banner pb-3">Results found ({searchNum} units)</h5>

	</Row>

	</Container>

	{
		loading?

		<>
		<Container className="errorpage text-center d-flex align-items-center justify-content-center">
		<div className="bg-light p-4 rounded">
		<h3>Page is Loading...</h3>
		<p>Please wait</p>
		<Image src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" className="img-fluid image-loading" />
		</div>
		</Container>
		</>

		:

		<>
		{
		(searchNum !== 0)?

		<Row className="justify-content-md-center">	
		{units}
		</Row>

		:

		<>
		<Container className="errorpage text-center d-flex align-items-center justify-content-center">
		<div className="bg-light p-2 rounded">
		<h3>No Results found.</h3>
		<p>Please try another keyword.</p>
		<Form.Text className="text-muted">TIP: Use single keyword of Street or City</Form.Text>
		</div>
		</Container>
		</>

		}
		</>
		

	}

	</>


		)
}