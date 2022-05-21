import { useState, useEffect, useContext } from 'react'
import { Form, Button} from 'react-bootstrap'
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
  	const [unitType, setUnitType] = useState('');
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

/*		fetch('https://immense-lake-17505.herokuapp.com/products', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem("token")}`
			},
			body: JSON.stringify({
				name: name,
				description:  description,
				price: price,
				stockAvailable:  stockAvailable,
				category: category, 
				source: source
			})
		})
		.then(res => {
			
			return res.json()
		})
		.then(data => {
			
			setCreated(true)
			Swal.fire({
					title: "Item Uploaded Successful",
					icon: "success",
					text: `You will be redirected to Product Section`,
					showClass: {
    						popup: 'animate__animated animate__fadeInDown'
 	 				},
  							hideClass: {
    						popup: 'animate__animated animate__fadeOutUp'
  					}
				})
		})*/

	}

		/*useEffect(()=>{
			if(name !== '' && price !== '' && stockAvailable !== '' && category !== ''){
				setIsActive(true)
			}else{
				setIsActive(false)
			}
		}, [setIsActive, name, category, price, stockAvailable])*/


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

		<Form id="form-create" className="border border-secondary p-3 my-3 mx-auto" onSubmit={e => createItem(e)}>
			<h1 className="text-center">Post A Unit</h1>
			<Form.Group controlId="unitType">
			<Form.Label>Unit Type:</Form.Label>
			<Form.Control type="text" placeholder="Bedspace/Single Room/Multi-Unit" required value={unitType} onChange={e => setUnitType(e.target.value)}/>
			</Form.Group>

			<Form.Group controlId="unitOwner">
			<Form.Label>Unit Owner:</Form.Label>
			<Form.Control type="text" placeholder="Enter Unit Owner here" required value={unitOwner} onChange={e => setUnitOwner(e.target.value)}/>
			</Form.Group>

			<Form.Group controlId="unitPrice">
			<Form.Label>Input Unit Price</Form.Label>
			<Form.Control type="number" placeholder="000.00" required value={unitPrice} onChange={e => setUnitPrice(e.target.value)}/>
			</Form.Group>

			<Form.Group controlId="unitLoc">
			<Form.Label>Unit Location:</Form.Label>
			<Form.Control type="text" placeholder="Location, City, Region" required value={unitLoc} onChange={e => setUnitLoc(e.target.value)}/>
			</Form.Group>

			<Form.Group controlId="unitSize">
			<Form.Label>Unit Size:</Form.Label>
			<Form.Control type="text" value={unitSize} placeholder="09123456789" onChange={e => setUnitSize(e.target.value)}/>
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
			<Form.Control type="text" value={unitLink} placeholder="Link to Facebook post, website, etc." onChange={e => setUnitLink(e.target.value)}/>
			</Form.Group>

			<Form.Group controlId="description">
			<Form.Label>Unit Description:</Form.Label>
			<Form.Control type="text" value={description} placeholder="Ex. near Landmark, 5 persons cap." onChange={e => setDescription(e.target.value)}/>
			</Form.Group>

			<Form.Group>
			<Form.Label className="my-1">Upload Photo of Unit:</Form.Label>
			<Form.Control type="file" className="my-2" accept="image/png, image/jpg, image/jpeg"/>
			<Form.Text className="bg-secondary p-1 text-light rounded">Max. File size: 3MB (jpg,jpeg,png)</Form.Text>
			</Form.Group>

			<Form.Group controlId="imageLink">
			<Form.Label>Link of Photo:</Form.Label>
			<Form.Control type="text" value={imageLink} placeholder="https://www.facebook.com/posts/t/3562875482624" onChange={e => setImageLink(e.target.value)}/>
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
		</>
		)
}