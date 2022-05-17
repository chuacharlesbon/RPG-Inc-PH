const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: [true, "First Name is required"]
	},
	lastName: {
		type: String,
		required: [true, "Last Name is required"]
	},
	email: {
		type: String,
		required: [true, "Email is required"]
	},
	password: {
		type: String,
		required: [true, "Password is required"]
	},
	mobileNo: {
		type: String,
		required: [true, "Mobile Number is required"]
	},
	residence: {
		type: String,
		required: [true, "Residential Address is required"]
	},
	userType: {
		type: String,
		default: "Client"
		/*Client|Agent|Admin*/
	},
	isAdmin: {
		type: Boolean,
		default: false
	}
});




module.exports = mongoose.model("User", userSchema)