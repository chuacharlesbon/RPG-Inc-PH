const express = require('express');

const router = express.Router();

const userControllers = require("../controllers/userControllers")

const auth = require("../auth");

const {verify, verifyAdmin} = auth;

router.post('/register', userControllers.registerUser)

router.get('/checkEmailExists', userControllers.checkEmailExists)

module.exports = router;