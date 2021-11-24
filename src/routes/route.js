const express = require('express');
const controller = require("../controllers/userController");
const router = express.Router();
const middleWare = require("../middlewares/auth")

router.post('/user', controller.userCreation) //saved the data of user into DB

router.post('/login', controller.login) // user login

router.get('/user/:userId', middleWare.tokenCheck, controller.getDetails) // validate the user 

router.put('/updateUser/:userId', middleWare.tokenCheck, controller.updateUser) //update email of the user    

module.exports = router;