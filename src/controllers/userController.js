const mongoose = require("mongoose")
const userModel = require("../models/userModel")
const jwt = require('jsonwebtoken')
const mid = require("../middlewares/auth")

//problem 1-  To Register a user
const userCreation = async function (req, res) {
    let data = req.body;
    let savedData = await userModel.create(data);
    res.send({ message: savedData })
}

//problem 2- Validate credentials of the user- If valid user then create a json web token.
const login = async function (req, res) {
    userName = req.body.name;
    userPassword = req.body.password;

    let user = await userModel.findOne({ name: userName, password: userPassword, isDeleted: false })
    if (user) {
        const tokenGeneration = jwt.sign({ userId: user._id }, "radium")
        res.header('x-auth-token', tokenGeneration) //to send the token in response header
        res.send({ status: true, data: user._id })
    } else {
        res.send({ status: false, message: "Invalid User name or password" })
    }
};

//problem 3- return the user's details if found else return a response with an error message 
const getDetails = async function (req, res) {
    try {
        if (req.token.userId == req.params.userId) {
            let userId = req.params.userId
            let userDetails = await userModel.findOne({ _id: userId, isDeleted: false });

            if (userDetails) {
                res.status(200).send({ status: true, data: userDetails })
            } else {
                res.status(404).send({ status: false, message: 'User not found' })
            }
        }
        else {
            res.status(401).send({ status: false, message: "Not authorized" })
        }
        console.log(req.token.userId);
    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}
//problem 4- update an user's email. 
const updateUser = async function (req, res) {
    try {
        if (req.token.userId == req.params.userId) {
            let userId = req.params.userId
            let email = req.body.email
            let userDetails = await userModel.findOneAndUpdate({ _id: userId }, { email: email }, { new: true })
            if (userDetails) {
                res.status(200).send({ status: true, message: userDetails })
            } else {
                res.status(404).send({ status: false, msg: "Incorrect credentials !" })
            }
        } else {
            res.status(404).send({ status: false, msg: "Not authorized" })
        }
    }
    catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
};

module.exports.userCreation = userCreation;
module.exports.login = login;
module.exports.getDetails = getDetails;
module.exports.updateUser = updateUser;