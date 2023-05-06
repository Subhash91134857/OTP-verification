const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController')


// Public Routes

router.post('/login', UserController.UserLogin);
// router.post('/login', UserController.verifyOTP);

module.exports=router