const express = require('express');

const router = express.Router();

const userControllers = require("../controllers/userControllers")

const unitControllers = require("../controllers/unitControllers")

const auth = require("../auth");

const {verify, verifyAdmin} = auth;

router.post('/create', verify, unitControllers.createUnit)

router.get('/bedspace', unitControllers.viewBedspace)

router.get('/viewUnit/:id', unitControllers.viewUnit)

router.get('/searchLoc/:id', unitControllers.searchByLocation)


module.exports = router;