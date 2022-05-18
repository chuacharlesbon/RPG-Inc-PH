import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'

export default function ErrorPage() {

	

	return (
		
			<Container className="p-3 mt-4 bg-clear errorpage">
				<h6>RPG Inc Philippines</h6>
				<h3>Oops!</h3>
				<h1>404 Page Not Found</h1>
				<p>It seems the link you are trying to access is not available.</p>
			
				<p>Go back to <Button className="bg-tomato" as={Link} to="/" >Home</Button></p>


			</Container>
		



		)
}
		
