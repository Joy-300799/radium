const express = require("express");
const router = express.Router();
const bookController = require('../controllers/bookController')


router.post("/book-cover-link", bookController.addLink)
router.post('/addBook', bookController.bookCreation)

module.exports = router;