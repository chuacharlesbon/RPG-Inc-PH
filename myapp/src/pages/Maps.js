import React from 'react'
import {Row, Col, Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import AdsProp from '../components/AdsProperties'

export default function Maps(){


	return(
	<>

	<Container className="text-center my-5 p-2 bg-clear">
	<Row className="align-items-center justify-content-center">
	<Col xs={12} lg={2} xl={4} className="mx-auto">
	<h3 className="text-white">Looking for Something?</h3>
	<span  className="text-white">Click Here</span>
	<Button as={Link}  to="/" className="bg-tomato mx-2">Search</Button>
	</Col>
	<Col xs={12} lg={10} xl={8} className="mx-auto">
	<iframe title="search_maps" id="gmap_canvas" src="https://maps.google.com/maps?q=notre%20dame%20cubao&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
	</Col>
	</Row>
	</Container>

	<AdsProp/>

	</>


		)
}