import { useState, useEffect, useContext } from 'react'
import { Form, Button, Row, Col} from 'react-bootstrap'
import { Navigate } from 'react-router-dom'
import Swal from "sweetalert2"
import UserContext from '../UserContext'

export default function AdminCreateUnit(){

//do not use null for initial state due to server schema type: null might contradict turn to type: string 

//set isnot a keyword, the state is destrcuturing
	
	const {user} = useContext(UserContext)
 

  	const [isActive, setIsActive] = useState(false)
  	const [created, setCreated] = useState(false)
  	const [unitOwner, setUnitOwner] = useState('')
  	const [unitType, setUnitType] = useState('none');
  	const [description, setDescription] = useState('');
  	const [unitPrice, setUnitPrice] = useState('')
  	const [unitLoc, setUnitLoc] = useState('')
  	const [status, setStatus] = useState('')
  	const [postedBy, setPostedBy] = useState('')
  	const [datePosted, setDatePosted] = useState('')
  	const [agentName, setAgentName] = useState('')
  	const [agentNo, setAgentNo] = useState('')
  	const [unitLink, setUnitLink] = useState('')
  	const [unitSize, setUnitSize] = useState('')
  	const [imageLink, setImageLink] = useState('')

	function createItem(e){
		e.preventDefault()

		fetch('https://immense-lake-17505.herokuapp.com/units/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
				/*Authorization: `Bearer ${localStorage.getItem("token")}`*/
			},
			body: JSON.stringify({
				unitOwner: unitOwner,
				unitType: unitType,
				description: description,
				unitPrice: unitPrice,
				unitLoc: unitLoc,
				agentName: agentName,
				agentNo: agentNo,
				unitLink: unitLink,
				unitSize: unitSize,
				imageLink: imageLink
			})
		})
		.then(res => {
			
			return res.json()
		})
		.then(data => {
			
			setCreated(true)
			Swal.fire({
					title: "Unit Uploaded Successful",
					icon: "success",
					text: `You will be redirected to Units Section`,
					showClass: {
    						popup: 'animate__animated animate__fadeInDown'
 	 				},
  							hideClass: {
    						popup: 'animate__animated animate__fadeOutUp'
  					}
				})
		})

	}

		useEffect(()=>{
			if(unitType !== '' && unitPrice !== '' && unitOwner !== '' && description !== '' && agentNo !== '' && agentName !== '' && unitSize !== '' && unitLoc !== ''){
				setIsActive(true)
			}else{
				setIsActive(false)
			}
		}, [setIsActive, unitType, unitPrice, unitOwner, description, agentNo, agentName, unitSize, unitLoc])


//access is the properties of console.log(data)
			
	return (
		/*(user.isAdmin !== true)?

		<Navigate to="/error"/>
		
		: (created === true &&  user.isAdmin === true)?

		<>

		<Navigate to="/products/adminProducts"/>

		</>

		:*/
		
		<>

		<Row className="justify-content-center align-items-center">
		<Col xs={12} md={10} lg={8} xl={6}>
		<Form id="form-create" className="border border-secondary p-3 my-3 mx-auto bg-light" onSubmit={e => createItem(e)}>
			<h1 className="text-center">Post A Unit</h1>
			<hr/>
			{/*<Form.Group controlId="unitType">
			<Form.Label>Unit Type:</Form.Label>
			<Form.Control type="text" placeholder="Bedspace/Single Room/Multi-Unit" required value={unitType} onChange={e => setUnitType(e.target.value)}/>
			</Form.Group>*/}

			<label for="unitType" className="me-2">Choose Unit Type:</label>
			<select id="unitType" name="unitType" required value={unitType} onChange={e => setUnitType(e.target.value)}>
 			<option value="none">--Select Type--</option>
 			<option value="Bedspace">Bedspace Type</option>
  			<option value="Single Room">Single Room for Rent</option>
  			<option value="Multi-Unit">Multi-Unit Room for Rent</option>
  			<option value="Condo">Condo Unit for Rent</option>
  			<option value="House for Rent" disabled>House for Rent</option>
  			<option value="Townhouse" disabled>Townhouse for Sale</option>
  			<option value="Mall Unit" disabled>Mall Unit for Lease</option>
			</select>
			<p>You have chosen: <strong >{unitType}</strong></p>

			<Form.Group controlId="unitOwner">
			<Form.Label>Unit Owner:</Form.Label>
			<Form.Control type="text" placeholder="Unit Owner Ex. Cruz Residence" required value={unitOwner} onChange={e => setUnitOwner(e.target.value)}/>
			</Form.Group>

			<Form.Group controlId="unitPrice">
			<Form.Label>Input Unit Price</Form.Label>
			<Form.Control type="text" placeholder="000.00/month" required value={unitPrice} onChange={e => setUnitPrice(e.target.value)}/>
			</Form.Group>

			<Form.Group controlId="unitLoc">
			<Form.Label>Unit Location:</Form.Label>
			<Form.Text className="text-muted mx-2">Please follow the format use comma</Form.Text>
			<Form.Control type="text" placeholder="Street, Location, City, Region" required value={unitLoc} onChange={e => setUnitLoc(e.target.value)}/>
			</Form.Group>

			<Form.Group controlId="unitSize">
			<Form.Label>Unit Size:</Form.Label>
			<Form.Control type="text" value={unitSize} placeholder="000.00 sqm approx" onChange={e => setUnitSize(e.target.value)}/>
			</Form.Group>

			<Form.Group controlId="agentName">
			<Form.Label>Contact Person</Form.Label>
			<Form.Control type="text" placeholder="Enter Contact person here" required value={agentName} onChange={e => setAgentName(e.target.value)}/>
			</Form.Group>

			<Form.Group controlId="agentNo">
			<Form.Label>Contact Number:</Form.Label>
			<Form.Control type="text" value={agentNo} placeholder="09123456789" onChange={e => setAgentNo(e.target.value)}/>
			</Form.Group>

			<Form.Group controlId="unitLink">
			<Form.Label>Unit Link:</Form.Label>
			<Form.Control type="text" value={unitLink} placeholder="Link to Facebook post, website, https://www.facebook.com/posts/t/3562875482624" onChange={e => setUnitLink(e.target.value)}/>
			</Form.Group>

			<Form.Group controlId="description">
			<Form.Label>Unit Description:</Form.Label>
			<Form.Control type="text" value={description} required placeholder="Ex. near Mall,5persons capacity, installment etc." onChange={e => setDescription(e.target.value)}/>
			</Form.Group>

			<hr/>

			<Form.Group>
			<Form.Label className="my-1">Upload Photo of Unit:</Form.Label>
			<Form.Control type="file" className="my-2" accept="image/png, image/jpg, image/jpeg"/>
			<Form.Text className="bg-secondary p-1 text-light rounded">Max. File size: 3MB (jpg,jpeg,png)</Form.Text>
			</Form.Group>
			<p className="text-danger">Upload failed. Please use image URL address</p>

			<Form.Group controlId="imageLink">
			<Form.Label>Image URL address:</Form.Label>
			<Form.Text className="d-block">Right click the desired image and choose 'Copy image address', do not use 'Copy image link'.</Form.Text>
			<Form.Control type="text" value={imageLink} required placeholder="https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.6435-9/98272854_3301844019834351_7376222747350794240_n.jpg" onChange={e => setImageLink(e.target.value)}/>
			</Form.Group>

			<Form.Group className="text-center d-block">
			{ isActive ? 
				<Button variant="success" type="submit" id="submitBtn" className="my-3 text-center mx-auto">Submit
				</Button>
				:
				<Button variant="secondary" type="submit" id="submitBtn" className="my-3 text-center mx-auto" disabled>Submit
				</Button>
			}
			</Form.Group>
		</Form>
		</Col>
		</Row>

		</>
		)
}