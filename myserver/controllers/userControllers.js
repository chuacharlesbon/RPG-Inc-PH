const bcrypt = require("bcrypt")

const User = require("../models/User");

const auth = require("../auth")


module.exports.checkEmailExists = ( req, res) => {
	console.log(req.body);
	User.findOne({email: req.body.email})
	.then(result => {
		if(result !== null){
			return res.send("Email is already registered")
		} else {
			return res.send(`Email ${req.body.email} is available.`)

		}
	})
	.catch(error => res.send(error))
}


module.exports.registerUser = (req, res) => {

	console.log(req.body);

	const hashedPW = bcrypt.hashSync(req.body.password, 10)

	let newUser = new User({
	
	firstName: req.body.firstName,
	lastName: req.body.lastName,
	email: req.body.email,
	mobileNo: req.body.mobileNo,
	password: hashedPW,
	residence: req.body.residence
	})

	newUser.save()
	.then(user => res.send(user))
	.catch(error => res.send(error))

};