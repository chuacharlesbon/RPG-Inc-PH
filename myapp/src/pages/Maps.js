import React, {useState, useEffect} from 'react'
import {Row, Col, Container, Button, Form, FormControl} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import AdsProp from '../components/AdsProperties'

export default function Maps(){

	const [search, setSearch] = useState("Makati City")
	const [newSearch, setNewSearch] = useState('')
	const [loading, setLoading] = useState(true);

	  useEffect(() => {
	    setTimeout(() => {
	      setLoading(false);
	    }, 2000);
	  }, []);

	search.replace(/\s/g, '%20')



	return(
	<>

	<Container className="text-center my-5 p-2 bg-clear">
	<Row className="align-items-center justify-content-center">
	<Col xs={12} lg={2} xl={4} className="mx-auto">
	<h3 className="text-white">Looking for Something?</h3>
			<Form className="d-flex">
	        <FormControl
	          type="search"
	          placeholder="Search by Location"
	          className="me-2"
	          aria-label="Search"
	          value={newSearch}
	          onChange={e => {
	          	if(e.target.value !== ''){
	          		setSearch(e.target.value)
	          		setNewSearch(e.target.value)
	          	}else{
	          		setSearch("Makati City")
	          		setNewSearch(e.target.value)
	          	}
	          	
	          }
	          }
	        />
	      	</Form>
	</Col>
	<Col xs={12} lg={10} xl={8} className="mx-auto">
	{
		loading?
		<>
		<p>Please wait...</p>
		<h1 className="text-center">Your Map is loading</h1>
		</>
		:
		<iframe title="search_maps" id="gmap_canvas" src={`https://maps.google.com/maps?q=${search}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

	}
	</Col>
	</Row>
	</Container>

	<AdsProp/>

	</>


		)
}