const express = require('express');
const router = express.Router();
const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const bookController = require("../controllers/bookController")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post("/addAuthor", bookController.addAuthor)
router.post("/addBook", bookController.addBook)
router.get("/fetchAllBooks", bookController.fetchBooks)
router.post("/addPublisher", bookController.addPublisher) //to enter publisher data in database


module.exports = router;