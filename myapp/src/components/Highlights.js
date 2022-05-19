/*import { useState, useEffect } from 'react'*/
import { Row, Col, Card, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Image from "react-bootstrap/Image";

export default function Highlights () {

	return (
		<Row className="mt-3 mb-3 highlights-fade">

		<Col xs={12}  md={6} lg={4} className="text-center mx-auto my-3">
			<Card className="cardHighlight p-3">
			<Card.Body>

			<Card.Title className="text-center mx-auto">
				<h2>Effortless Searches</h2>
			</Card.Title>
			<Card.Text  className="text-center mx-auto">
			{/*https://media.istockphoto.com/photos/portrait-of-surprised-beautiful-brunette-young-woman-in-denim-casual-picture-id1134722053?k=20&m=1134722053&s=612x612&w=0&h=JgCd2SOqyHbrHRLa_NULqJcZLwiNqcPl-dSKi2OW-qs=*/}
			<Image src="https://st.depositphotos.com/23170888/53981/i/450/depositphotos_539815168-stock-photo-asian-attractive-woman-use-mobile.jpg?forcejpeg=true" /*style={style}*/ className="mx-auto text-center image-highlights"/>
			</Card.Text>
			<Card.Text className="text-center mx-auto">
				<p>Find your New Home with our platform using a mobile phone or browser.</p>
				<Button className="text-center mx-auto p-3 nav-btn text-dark" variant="outline-secondary" as={Link} to="/login">Fast and Easy with a Tap!</Button>
			</Card.Text>

			</Card.Body>
			</Card>
		</Col>

		<Col xs={12}  md={6} lg={4}  className="text-center mx-auto my-3">
			<Card className="cardHighlight p-3">
			<Card.Body>

			<Card.Title  className="text-center mx-auto">
				<h2>Find Good Rent Deals</h2>
			</Card.Title>
			<Card.Text  className="text-center mx-auto">
			<Image src="https://c0.wallpaperflare.com/preview/331/915/613/toddler-mum-window-house.jpg" /*style={style}*/ className="mx-auto text-center image-highlights"/>
			</Card.Text>
			<Card.Text  className="text-center mx-auto">
				<p>Our platform has optimized searches of your Dream unit!</p>
				<Button className="text-center mx-auto p-3 nav-btn text-dark" variant="outline-secondary" as={Link} to="/login">Search Affordable Units</Button>
			</Card.Text>

			</Card.Body>
			</Card>
		</Col>

		<Col xs={12} md={6} lg={4}  className="text-center mx-auto my-3" >
			<Card className="cardHighlight p-3">
			<Card.Body>

			<Card.Title  className="text-center mx-auto">
				<h3>Make your Property be Recognized!</h3>
			</Card.Title>
			<Card.Text  className="text-center mx-auto">
			{/*https://image.shutterstock.com/image-photo/young-handsome-man-holding-bowl-260nw-1914485956.jpg*/}
			<Image src="https://thumbs.dreamstime.com/b/asian-man-success-working-home-office-happy-smiling-laptop-computer-asian-man-success-working-home-office-happy-183396771.jpg" /*style={style}*/ className="mx-auto text-center image-highlights"/>
			</Card.Text>
			<Card.Text  className="text-center mx-auto">
				<p>Be an Agent. Let RPG Inc PH connect you to people! </p>
				<Button className="text-center mx-auto p-3 nav-btn text-dark" variant="outline-secondary" as={Link} to="/login">Offer Units Today!</Button>
			</Card.Text>

			</Card.Body>
			</Card>
		</Col>

		</Row>
		)
}