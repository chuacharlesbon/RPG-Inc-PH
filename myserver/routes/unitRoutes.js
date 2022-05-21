const express = require('express');

const router = express.Router();

const userControllers = require("../controllers/userControllers")

const unitControllers = require("../controllers/unitControllers")

const auth = require("../auth");

const {verify, verifyAdmin} = auth;

router.post('/create', /*verify,*/ unitControllers.createUnit)

router.get('/bedspace', unitControllers.viewBedspace)

router.get('/rooms', unitControllers.viewRooms)

router.get('/viewUnit/:id', unitControllers.viewUnit)

router.get('/searchAll/:id', unitControllers.searchAll)

router.get('/searchLoc/:id', unitControllers.searchByLocation)

router.get('/roomsLoc/:id', unitControllers.roomsByLocation)


module.exports = router;