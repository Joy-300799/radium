const express = require('express');
const router = express.Router();

const cowinController= require("../controllers/cowinAndWeatherController")

router.get("/cowin/states", cowinController.getStatesList)
router.get("/cowin/districts/:stateId", cowinController.getDistrictsList)
router.get("/cowin/centers", cowinController.getByPin)
router.post("/cowin/getOtp", cowinController.getOtp)
router.get("/cowin/london", cowinController.londonWeather)             
router.get("/cowin/londonTemp", cowinController.londonTemp)
router.get("/cowin/sortedCities", cowinController.getWeather)

module.exports = router;