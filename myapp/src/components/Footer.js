import { useContext } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Image from "react-bootstrap/Image";
import UserContext from '../UserContext'
import rpglogo from './images/rpg-logo.png'

export default function Footer () {

	const {user} = useContext(UserContext)
  	const isAdmin = user.isAdmin

  	const userId = user.id

	return (
	/*(isAdmin === true && userId !== null)?

		<>
		<Row id="footer" className="mt-3 bg-info pt-1 mx-auto resize-row">

		<Col xs={12}  md={6} lg={4} className="text-center mx-auto my-3">
		<p><Button variant="info" as={Link} to="/about">About the Developer</Button></p>
		<p><Button variant="info" as={Link} to="/">About ShopNetwork</Button></p>
		<p><Button  variant="info" as={Link} to="/">Terms | Data Privacy</Button></p>
		</Col>

		<Col xs={12}  md={6} lg={4}  className="text-center mx-auto my-3">
		<h6>Visit us!</h6>
		<Button className="bg-info btn-border-none"><a target="_blank" href="https://www.linkedin.com/in/charles-chua-12116122a" rel="noopener noreferrer" title="Go to LinkedIn Profile" className="text-dark">LinkedIn</a></Button>

		</Col>

		<Col xs={12} md={6} lg={4}  className="text-center mx-auto my-3" >
			<h6>Contact</h6>
			<p>shopnetwork@gmail.com</p>
			<p>charleschua00@gmail.com</p>
			<p>(+63) 948-3944-738</p>
		</Col>
		<p className="text-center mx-auto">
		Project Zuitt
		<Image src="https://d3ojsfl21hfxhc.cloudfront.net/assets/zuitt/zuittlogo.png" className="mx-2 image-footer"/>
		</p>
		<p className="text-center mx-auto">&copy;All Rights Reserved 2022 Philippines</p>
		</Row>
		</>

		:*/
		<>
		<Row className="mt-3 bg-tomato pt-1 mx-0 text-center justify-content-center footer">

		<Col xs={12}  md={6} lg={4} className="text-center mx-auto my-2">
		<p><Button  as={Link} to="/about" className="bg-tomato text-dark">About the Developer</Button></p>
		<p><Button  as={Link} to="/"  className="bg-tomato text-dark">About RPG Inc</Button></p>
		<p><Button  as={Link} to="/terms"  className="bg-tomato text-dark">Terms | Data Privacy</Button></p>
		</Col>

		<Col xs={12}  md={6} lg={4}  className="text-center mx-auto my-2">
		<h6 className="mb-4">Visit us!</h6>
		<a target="_blank" href="https://www.linkedin.com/in/charles-chua-12116122a" rel="noopener noreferrer" title="Go to LinkedIn Profile" className="text-dark">LinkedIn</a>

		</Col>

		<Col xs={12} md={6} lg={4}  className="text-center mx-auto my-2" >
			<h6>Email Us!</h6>
			<p>charleschua00@gmail.com</p>
			<p>(+63) 912-8744-545</p>
			<p><p><Button as={Link} to="/messages" className="bg-tomato text-dark">Click to Contact Admin</Button></p></p>
			
		</Col>
		
		<p className="align-items-end d-flex justify-content-center ">
		Project RPG
		<Image src={rpglogo} className="mx-2 image-footer brand-logo"/>
		</p>
		
		<p className="text-center mx-auto">&copy;All Rights Reserved 2022 Philippines</p>
		</Row>
		</>
	
		)
}