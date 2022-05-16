import React from 'react'
import {Row, Col, FormControl, Form, Navbar, Nav, Container, Button, NavDropdown} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import rpg from './images/rpg-logo.png'

export default function NavBar() {

	return(

	<Navbar className="bg-tomato" expand="lg">
	  <Container fluid>
	    <Navbar.Brand href="#" className="align-items-end d-flex">
	    	<Image src={rpg} alt="RPG logo" className="brand-logo"/>
	    	<span className="text-dark text-garamond">Incorporated</span>
	    </Navbar.Brand>
	    <Navbar.Toggle aria-controls="navbarScroll" />
	    <Navbar.Collapse id="navbarScroll">
	      <Nav
	        className="me-auto my-2 my-lg-0"
	        style={{ maxHeight: '100px' }}
	        navbarScroll
	      >
	        <Nav.Link href="#action1"  className="text-white text-mulish m-1 nav-btn">Home</Nav.Link>
	        <Nav.Link href="#action2" className="text-white  text-mulish m-1 nav-btn">Locations</Nav.Link>
	        <NavDropdown title="Rentals" id="navbarScrollingDropdown"  className="text-white m-1 nav-btn">
	          <NavDropdown.Item href="#action3" className="text-mulish">Bedspace Type</NavDropdown.Item>
	          <NavDropdown.Item href="#action3" className="text-mulish">Single-Room Type</NavDropdown.Item>
	          <NavDropdown.Item href="#action4" className="text-mulish">Multi-Unit Rent Type</NavDropdown.Item>
	          <NavDropdown.Divider />
	          <NavDropdown.Item href="#action5" className="text-mulish">Condo For Rent</NavDropdown.Item>
	          <NavDropdown.Item href="#action3" className="text-mulish">House For Rent</NavDropdown.Item>
	        </NavDropdown>
	         <NavDropdown title="Others" id="navbarScrollingDropdown"  className="text-white m-1 nav-btn">
	          <NavDropdown.Item href="#action3">Hotels</NavDropdown.Item>
	          <NavDropdown.Item href="#action3">Townhouse for Sale</NavDropdown.Item>
	          <NavDropdown.Divider />
	          <NavDropdown.Item href="#action5">Condo For Sale</NavDropdown.Item>
	          <NavDropdown.Divider />
	          <NavDropdown.Item href="#action3">Be A Mall Tenant</NavDropdown.Item>
	        </NavDropdown>
	        <Nav.Link href="#" className="text-white text-mulish m-1 nav-btn">Register</Nav.Link>
	        <Nav.Link href="#" className="text-white text-mulish m-1 nav-btn">Login</Nav.Link>
	      </Nav>
	      <Form className="d-flex">
	        <FormControl
	          type="search"
	          placeholder="Search by Location"
	          className="me-2"
	          aria-label="Search"
	        />
	        <Button variant="outline-danger">Search</Button>
	      </Form>
	    </Navbar.Collapse>
	  </Container>
	</Navbar>

		)
}