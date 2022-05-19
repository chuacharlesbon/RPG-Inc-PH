import { useState, useEffect, useContext} from 'react'
import { Form, Button, Row, Col, Modal} from 'react-bootstrap'
import { Navigate, Link } from 'react-router-dom'
import Swal from "sweetalert2"
import UserContext from "../UserContext"
import Banner from '../components/Banner'
import AdsUnits from '../components/AdsUnits'

export default function Register(){

//do not use null for initial state due to server schema type: null might contradict turn to type: string 

//set isnot a keyword, the state is destrcuturing
	const {user} = useContext(UserContext)

  	const [firstName, setFirstName] = useState('')
  	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password1, setPassword1] = useState('')
	const [password2, setPassword2] = useState('')
	const [ isActive, setIsActive] = useState(false)
	const [mobileNo, setMobileNo] = useState('')
	const [registered, setRegistered] = useState(false)
	const [ residence, setResidence] = useState('')
	const [agreed, setAgreed] = useState("No")

	const [newEmail, setNewEmail] = useState('')

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	//console.log(email)
	//console.log(password1)
	//console.log(password2)
	//console.log(agreed)
	//console.log(isActive)
	//console.log(newEmail)


	function registerUser(e){
		e.preventDefault()

		fetch('http://localhost:4000/users/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password2,
				mobileNo: mobileNo,
				residence: residence
			})
		})
		.then(res => {
			//console.log(res)
			return res.json()
		})
		.then(data => {
			//console.log(data)


//access is the properties of console.log(data)
			if( data.firstName === firstName ){
				Swal.fire({
					title: "Registration Successful",
					icon: "success",
					text: `Welcome to RPG Inc Philippines ${firstName}! You will be redirected to the Log In page`,
					showClass: {
    						popup: 'animate__animated animate__fadeInDown'
 	 				},
  							hideClass: {
    						popup: 'animate__animated animate__fadeOutUp'
  					}
				})

				setRegistered(true)
				setFirstName('')
				setLastName('')
				setMobileNo('')
				setEmail('')
				setPassword1('')
				setPassword2('')
				setResidence('')

			}else {
				Swal.fire({
					title: "Authentication",
					icon: "error",
					text: "Please check your credentials"
				})
			}
		})
		/*fetch('https://immense-lake-17505.herokuapp.com/messages', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem("token")}`
			},
			body: JSON.stringify({
				sender: "ShopNetwork Inc",
				receiver: email,
				content: `Hi ${firstName} ${lastName}, Welcome to ShopNetwork! Thank you for accomplishing the Registration. You may click the link to let us give you a tour about the platform, or you may proceed to Products section to Get Started. `
			})
		})
		.then(res => {
			
			return res.json()
		})
		.then(data => {
			if(data.receiver === email){
				console.log("User Welcome message sent.")
			}else {
				console.log("Something went wrong")
			}
		})*/

	}

	useEffect(() => {

	fetch(`http://localhost:4000/users/checkEmailExists/${email}`)
		.then(res => res.json())
		.then(data => {
			if(data === true){
				setNewEmail("Email is available")
			}else{
				setNewEmail("Email is not available")
			}
			
		})

		if((email !== "" && password1 !== "" && password1.length > 6) && (password1 === password2) && (agreed !== "No") && (newEmail === "Email is available")){
			
			setIsActive(true)
		} else {
			setIsActive(false)

		}

	}, [email, password1, password2, agreed, newEmail ])

	function TermsModal() {
	  
	  return (
	    <>
	      <Button variant="primary" onClick={handleShow}>
	        Terms | Conditions
	      </Button>

	      <Modal show={show} onHide={handleClose} centered size="lg">
	        <Modal.Header closeButton>
	          <Modal.Title>Terms | Conditions</Modal.Title>
	        </Modal.Header>
	        <Modal.Body className="termsmodal">

	        <h3 className="text-center">User Agreement</h3>
	        <hr/>

	        <h5>Terms of Use</h5>

	       	<ol>
	       	<li>Test</li>
	       	<li>Test</li>
	       	<li>Test</li>
	       	<li>Test</li>
	       	<li>Test</li>
	       	</ol>


	        <h5>Data Privacy</h5>

	       	<ol>
	       	<li>Test</li>
	       	<li>Test</li>
	       	<li>Test</li>
	       	<li>Test</li>
	       	<li>Test</li>
	       	</ol>


	        </Modal.Body>
	        <Modal.Footer>
	          <Button variant="secondary" onClick={handleClose}>
	            Close
	          </Button>
	        </Modal.Footer>
	      </Modal>
	    </>
	  );
	}



	return(

		( registered === true )?

		<Navigate to="/login"/>

		:

		<>

		<Banner/>

		<Row className="justify-content-center">
		<Col xs={12} md={10} lg={8} xl={6}>
		<Form id="form-register" className="border border-secondary p-3 my-3 mx-auto bg-light" onSubmit={e => registerUser(e)}>
			<h1 className="text-center">Registration Section</h1>
			<Form.Group controlId="firstName">
			<Form.Label>First Name:</Form.Label>
			<Form.Control type="text" placeholder="Enter your First Name here" required value={firstName} onChange={e => setFirstName(e.target.value)}/>
			<Form.Text className="text-muted"> Must not contain special characters ( &#60; 	&#62; &#38;	&#34; &#39; ' "" )
			</Form.Text>
			</Form.Group>

			<Form.Group controlId="lastName">
			<Form.Label>Last Name:</Form.Label>
			<Form.Control type="text" placeholder="Enter your Last Name here" required value={lastName} onChange={e => setLastName(e.target.value)}/>
			<Form.Text className="text-muted">Must not contain special characters ( &#60; 	&#62; &#38;	&#34; &#39; ' " )
			</Form.Text>
			</Form.Group>

			<Form.Group controlId="mobileNo">
			<Form.Label>Mobile Number</Form.Label>
			<Form.Control type="text" placeholder="09xxxxxxxxx {091234567890}" required value={mobileNo} onChange={e => setMobileNo(e.target.value)}/>
			<Form.Text className="text-muted"> You can use your landline number, or include more contacts
			</Form.Text>
			</Form.Group>

			<Form.Group controlId="residence">
			<Form.Label>Residential Address:</Form.Label>
			<Form.Control type="text" placeholder="Enter your delivery address here" required value={residence} onChange={e => setResidence(e.target.value)}/>
			<Form.Text className="text-muted">Must not contain special characters ( &#60; 	&#62; &#38;	&#34; &#39; ' " )
			</Form.Text>
			</Form.Group>

			<Form.Group controlId="userEmail">
			<Form.Label>Email Address</Form.Label>
			<Form.Control type="email" placeholder="Enter your email here" required value={email} onChange={e => setEmail(e.target.value)}/>
			
			{
				(newEmail === "Email is available")?
				<Form.Text className=" text-success">{newEmail}</Form.Text>
				:
				<Form.Text className=" text-danger">{newEmail}</Form.Text>
			}


			
			</Form.Group>

			<Form.Group controlId="password1" className="mt-2">
			<Form.Label>Password:</Form.Label>
			{ (password1 === '')?

			<Form.Text className="bg-secondary text-white py-1 px-2 mx-2 rounded">Empty</Form.Text>

			: (password1.length < 4)  ?

			<Form.Text className="bg-danger text-white py-1 px-2 mx-2 rounded">Weak</Form.Text>

			: (password1.length < 7)  ?

			<Form.Text className="bg-warning text-white py-1 px-2 mx-2 rounded">Moderate</Form.Text>

			: (password1.length > 6 )  ?

			<Form.Text  className="bg-success text-white py-1 px-2 mx-2 rounded">Strong</Form.Text>

			:

			<Form.Text className=" text-white py-1 px-2 mx-2 rounded"></Form.Text>

			}
			<Form.Text className="text-muted">Password must be at least 8 characters</Form.Text>
			<Form.Control type="password" placeholder="Input your password here" required value={password1} onChange={e => setPassword1(e.target.value)}/>
			</Form.Group>

			<Form.Group  controlId="password2">
			<Form.Label>Confirm Password</Form.Label>
			<Form.Control type="password" placeholder="Input your password again" required  value={password2} onChange={e => setPassword2(e.target.value)}/>
			{
				(password1 === password2)?
				<Form.Text className=" text-success">Password matched</Form.Text>
				:
				<Form.Text className=" text-danger">Password not matched</Form.Text>


			}
			</Form.Group>


			<Form.Text className=" text-muted">Please check all information before submitting the form</Form.Text>

			<hr/>

			
			   <div key="checkbox" className="my-3">
			     <Form.Check 
			       type="checkbox"
			       id="checkbox"
			       label="I agree to Terms of Use and Data Privacy"
			       value={agreed}
			       onChange={e => setAgreed((e.target.value === "Yes")? "No" : "Yes" )}
			     />
			   </div>
			   <span className="mx-2 text-primary" >Click Here <TermsModal/></span>
			


			<Form.Group className="text-center d-block">
			{ isActive ? 
				<Button type="submit" id="submitBtn" className="my-3 text-center mx-auto bg-info text-dark">Submit
				</Button>
				:
				<Button variant="secondary" type="submit" id="submitBtn" className="my-3 text-center mx-auto" disabled>Submit
				</Button>
			}
			</Form.Group>
		</Form>

		</Col>
		</Row>


		<AdsUnits/>

		</>
		)
}

