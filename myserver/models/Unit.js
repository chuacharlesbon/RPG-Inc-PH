const mongoose = require('mongoose');

let unitSchema = new mongoose.Schema({
	unitOwner: {
		type: String,
		required: [true, "Unit Name is required"]
	},
	unitType: {
		type: String,
		required: [true, "Unit Type is required"]
		/*Bedspace,Single Room, Multi-unit*/
	},
	unitLoc: {
		type: String,
		required: [true, "Unit Location is required"]
		/*Location, City, Region*/
	},
	unitPrice: {
		type: Number,
		required: [true, "Unit Price is required"]
	},
	unitSize: {
		type: String,
		required: [true, "Unit Size is required"]
	},
	unitLink: {
		type: String
	},
	postedBy: {
		type: String,
		required: [true, "Name is required"]
	},
	agentName: {
		type: String,
		required: [true, "Mobile Number is required"]
		/*user.username*/
	},
	agentNo: {
		type: String,
		required: [true, "Residential Address is required"]
		/*user.contactNo*/
	},
	status: {
		type: String,
		default: "For Sale"
		/*For Sale|Unit Sold*/
	},
	description: {
		type: String,
		required: [true, "Description is required"]
	},
	remarks: {
		type: String
	},
	datePosted: {
		type: String
	},
	dateModified: {
		type: String
	}

});




module.exports = mongoose.model("Unit", unitSchema)