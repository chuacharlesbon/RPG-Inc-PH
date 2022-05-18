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

	Unit.find({unitType: "Bedspace",unitLoc: {$regex: req.params.id, $options: '$i'}})
	.then(unit => res.send(unit))
	.catch(error => res.send(error))
}