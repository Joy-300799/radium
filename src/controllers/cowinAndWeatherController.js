const axios = require("axios");

// res.status(200). send( { data: userDetails } )
// Stored all the data in a specifies key called "data" , Which we are using while sending the response in the JSON format as data.

const getStatesList = async function (req, res) {         //Get the states list of India
  try {
    let options = {
      method: "get",
      url: "https://cdn-api.co-vin.in/api/v2/admin/location/states",
    };
    const cowinStates = await axios(options);

    let states = cowinStates.data;
    res.status(200).send({ msg: "Successfully fetched data", data: states });
}
  catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: "Some error occured" });
  }
};


const getDistrictsList = async function (req, res) {              // Districts list with particular state's id

  try {
    let id = req.params.stateId
    console.log(" state: ", id)

    let options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}` //Back tick used for template literals.
    }
    let response = await axios(options)
    let districts = response.data
    console.log(response.data)
    res.status(200).send({ msg: "Success", data: districts })
 }
  catch (err) {
    console.log(err.message)
    res.status(500).send({ msg: "Something went wrong" })
  }
}


const getByPin = async function (req, res) {                               // searching by PINCODE

  try {

    let pin = req.query.pincode
    let date = req.query.date

    let options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
    }
    let response = await axios(options)
    
    let centers = response.data
    console.log(centers)
    res.status(200).send({ msg: "Success", data: centers })

  }
  catch (err) {
    console.log(err.message)
    res.status(500).send({ msg: "Something went wrong" })
  }
}


const getOtp = async function (req, res) {                       //Generating OTP by entering mobile number

  try {

    let options = {
      method: "get",
      url: "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP",
      data: {
        "mobile": req.body.mobile    // sending the json body in the data 
      }
    }
    let response = await axios(options)

    let id = response.data
    res.status(200).send({ msg: "Success", data: id })

  }
  catch (err) {
    console.log(err.message)
    res.status(500).send({ msg: "Something went wrong" })
  }
}
/*     Date- 25/11/2021   =====   Assignment    =====     Date- 25/11/2021    =====      Assignment    =====    Date- 25/11/2021   =====    Assignment     */

// Problem 1- Get the weather of london.
const londonWeather = async function (req, res) {

  try {

    let city = req.query.city;
    let appid = req.query.appid;

    let options = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
    }
    let response = await axios(options);
    res.status(200).send({ message: "successfully fetched weather", data: response.data })
  }
  catch (err) {
    res.status(500).send({ message: "Something went wrong" })
  }
}

// problem 2 - Get the temperature of london.
const londonTemp = async function (req, res) {
  try {
    let city = req.query.city;
    let appid = req.query.appid;

    let options = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
    }
    let response = await axios(options);
    let temperature = response.data.main.temp;
    res.status(200).send({ message: "successfully fetched temperature", data: temperature })

  }
  catch (err) {
    res.status(500).send({ message: "Something went wrong" })
  }
}

// problem 3 - sort the cities with their temperature in increasing order

const getWeather = async function (req, res) {
  try {
    let arrCities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    let objOfCities = [];

    len = arrCities.length;
    for (let i = 0; i < len; i++) {
      let obj = { city: arrCities[i] }

      let options = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${arrCities[i]}&appid=45bc30c02d0410d8ed14e3ac4095d63f`
      }
      let response = await axios(options);
      //console.log(response.data.main.temp)
      temp = response.data.main.temp;
      obj.temp = response.data.main.temp;
      objOfCities.push(obj);
    }
    let increasingTempOrder = objOfCities.sort(function (a, b) { return a.temp - b.temp })
    console.log(increasingTempOrder)
    res.status(200).send({ message: "Successfully fetched the temp of all cities", data: increasingTempOrder })
  }
  catch (err) {
    res.status(500).send({ message: "something went wrong" })
  }
}

module.exports.getStatesList = getStatesList;
module.exports.getDistrictsList = getDistrictsList;
module.exports.getByPin = getByPin;
module.exports.getOtp = getOtp;
module.exports.londonWeather = londonWeather;
module.exports.londonTemp = londonTemp;
module.exports.getWeather = getWeather;

