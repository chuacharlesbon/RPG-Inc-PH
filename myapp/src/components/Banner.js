import {Link} from 'react-router-dom'
import { Row, Col, Container, Button, Carousel } from 'react-bootstrap';
import townhouse from './images/townhouse.jpg'
import malltenant from './images/malltenant.jpg'
import multiunit from './images/multiunitroom.jpg'
import roomrent from './images/roomrent.jpeg'

export default function Banner(){

	return (
		<Row className="mt-4 banner row align-items-center justify-content-center banner-fade bg-clear">
		<Col lg={4} xs={12} className="">
			<Container className="my-3 p-3">
				<h1 className="text-white">RPG Inc Philippines</h1>
				<p className="text-white ">“Move to What Moves You”</p>
				<Button variant="primary" className="bg-tomato text-dark" as={Link} to="/">View Units!</Button>
			</Container>
		</Col>
		<Col  lg={8}  xs={12}>
			<Container className="my-3 p-3">
				<Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block mx-auto text-center image-banner"
      src={roomrent}
      alt="First slide"
      
    />
    <Carousel.Caption>
      <h3 className="text-dark carousel-desc p-1 bg-light">Available Rooms for Rent</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item  interval={2000}>
    <img
      className="d-block mx-auto text-center image-banner "
      src={multiunit}
      alt="Second slide"
      
    />

    <Carousel.Caption>
      <h3 className="text-dark carousel-desc p-1 bg-light">Multi-Unit Rooms for Rent</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item  interval={2000}>
    <img
      className="d-block mx-auto text-center image-banner"
      src={malltenant}
      alt="Third slide"
      
    />

    <Carousel.Caption>
      <h3  className="text-dark carousel-desc p-1 bg-light">Looking for Mall Space ?</h3>
    </Carousel.Caption>
  </Carousel.Item>
   <Carousel.Item  interval={2000}>
    <img
      className="d-block mx-auto text-center image-banner"
      src={townhouse}
      alt="Fourth slide"
      
    />
    <Carousel.Caption>
      <h3  className="text-dark carousel-desc p-1 bg-light">See Newly Built Townhouses</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
			</Container>
		</Col>
		</Row>


		)
}
