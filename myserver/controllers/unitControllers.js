const bcrypt = require("bcrypt")

const User = require("../models/User");

const Unit = require("../models/Unit");

const auth = require("../auth")

module.exports.createUnit = (req, res) => {

let nd = new Date()

let wk = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"]

let mt = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

	let newUnit = new Unit({

		unitOwner: req.body.unitOwner,
		unitType:  req.body.unitType,
		unitLoc:  req.body.unitLoc,
		unitPrice:  req.body.unitPrice,
		unitSize:  req.body.unitSize,
		unitLink: req.body.unitLink,
		imageLink: req.body.imageLink,
		postedBy: req.user.username,
		agentName:  req.body.agentName,
		agentNo:  req.body.agentNo,
		description:  req.body.description,
		datePosted: `${mt[nd.getMonth()]} ${nd.getDate()},${nd.getFullYear()} ${wk[nd.getDay()]} ${nd.getHours()-12}:${(nd.getMinutes().length === 1)? `0`+`${nd.getMinutes()}` : `${nd.getMinutes()}`} ${
		(nd.getHours() >= 12)? "PM" : "AM"
	}`

	})
	newUnit.save()
	.then(unit => res.send(unit))
	.catch(error => res.send(error))

}

module.exports.viewBedspace = (req, res) => {

	Unit.find({unitType: "Bedspace"})
	.then(unit => res.send(unit))
	.catch(error => res.send(error))
}

module.exports.viewUnit = (req, res) => {

	Unit.find({_id: req.params.id})
	.then(unit => res.send(unit))
	.catch(error => res.send(error))
}

module.exports.searchByLocation = (req, res) => {

	Unit.find({unitType: {$regex: "Bedspace", $options: '$i'},unitLoc: {$regex: req.params.id, $options: '$i'}})
	.then(unit => res.send(unit))
	.catch(error => res.send(error))
}

module.exports.roomsByLocation = (req, res) => {

	Unit.find({unitType: {$regex: "Single", $options: '$i'},unitLoc: {$regex: req.params.id, $options: '$i'}})
	.then(unit => res.send(unit))
	.catch(error => res.send(error))
}

module.exports.multiByLocation = (req, res) => {

	Unit.find({unitType: {$regex: "Multi", $options: '$i'},unitLoc: {$regex: req.params.id, $options: '$i'}})
	.then(unit => res.send(unit))
	.catch(error => res.send(error))
}

module.exports.condoByLocation = (req, res) => {

	Unit.find({unitType: {$regex: "Condo", $options: '$i'},unitLoc: {$regex: req.params.id, $options: '$i'}})
	.then(unit => res.send(unit))
	.catch(error => res.send(error))
}

module.exports.updateUnit = (req, res) => {

	Unit.find0ne({_id: req.params.id})
	.then(unit => {
		if(unit.postedBy === req.user.username){

		let nd = new Date()

		let wk = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"]

		let mt = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

		let updates = {
					unitOwner: req.body.unitOwner,
					unitType:  req.body.unitType,
					unitLoc:  req.body.unitLoc,
					unitPrice:  req.body.unitPrice,
					unitSize:  req.body.unitSize,
					unitLink: req.body.unitLink,
					imageLink: req.body.imageLink,
					postedBy: req.user.username,
					agentName:  req.body.agentName,
					agentNo:  req.body.agentNo,
					description:  req.body.description,
					status: req.body.status,
					dateModified: `${mt[nd.getMonth()]} ${nd.getDate()},${nd.getFullYear()} ${wk[nd.getDay()]} ${nd.getHours()-12}:${(nd.getMinutes().length === 1)? `0`+`${nd.getMinutes()}` : `${nd.getMinutes()}`} ${
					(nd.getHours() >= 12)? "PM" : "AM"
				}`
		}

		Unit.findByIdAndUpdate(req.params.id, updates, {new:true})
		.then(result => res.send(result))
		.catch(error => res.send(error))


		}else{
			return res.send("Action to update unit forbidden")
			/*return res.send(false)*/
		}
	})
	.catch(error => res.send(error))
	
}

module.exports.unitSold = (req, res) => {

	Unit.find0ne({_id: req.params.id})
	.then(unit => {
		if(unit.postedBy === req.user.username){

		let nd = new Date()

		let wk = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"]

		let mt = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

		let updates = {
					
					status: "Unit Sold",
					dateModified: `${mt[nd.getMonth()]} ${nd.getDate()},${nd.getFullYear()} ${wk[nd.getDay()]} ${nd.getHours()-12}:${(nd.getMinutes().length === 1)? `0`+`${nd.getMinutes()}` : `${nd.getMinutes()}`} ${
					(nd.getHours() >= 12)? "PM" : "AM"
				}`
		}

		Unit.findByIdAndUpdate(req.params.id, updates, {new:true})
		.then(result => res.send(result))
		.catch(error => res.send(error))


		}else{
			return res.send("Action to update unit forbidden")
			/*return res.send(false)*/
		}
	})
	.catch(error => res.send(error))
	
}

module.exports.unitForSale = (req, res) => {

	Unit.find0ne({_id: req.params.id})
	.then(unit => {
		if(unit.postedBy === req.user.username){

		let nd = new Date()

		let wk = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"]

		let mt = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

		let updates = {
					
					status: "For Sale",
					dateModified: `${mt[nd.getMonth()]} ${nd.getDate()},${nd.getFullYear()} ${wk[nd.getDay()]} ${nd.getHours()-12}:${(nd.getMinutes().length === 1)? `0`+`${nd.getMinutes()}` : `${nd.getMinutes()}`} ${
					(nd.getHours() >= 12)? "PM" : "AM"
				}`
		}

		Unit.findByIdAndUpdate(req.params.id, updates, {new:true})
		.then(result => res.send(result))
		.catch(error => res.send(error))


		}else{
			return res.send("Action to update unit forbidden")
			/*return res.send(false)*/
		}
	})
	.catch(error => res.send(error))
	
}