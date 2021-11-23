const express = require('express');
const controller = require("../controllers/userController");
const router = express.Router();
const middleWare = require("../middlewares/auth")

router.post('/user', controller.userCreation)
router.post('/login',controller.login)
router.get('/user/:userId',middleWare.tokenCheck,controller.getDetails)
router.put('/updateUser/:userId',middleWare.tokenCheck,controller.updateUser)

module.exports = router;