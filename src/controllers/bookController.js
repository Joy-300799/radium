const author = require("../models/authorModel");
const book = require("../models/bookModel");
const publisher = require("../models/publisherModel");

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// creates the model and added the author details into DB

const addAuthor = async function (req, res) {
    let data = req.body;
    let authorSaved = await author.create(data)
    res.send({ data: authorSaved })
}

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//To add data of books into DB .

const addBook = async function (req, res) {
    let data = req.body;
    let authorId = req.body.author
    let request = await author.findById(authorId)
    let pubId = req.body.publisher
    let pubRequest = await publisher.findById(pubId)

    if (request && pubRequest) {
        let createBook = await book.create(data)
        res.send({ data: createBook })
    } else {
        res.send("The author Id or publisher Id provided is not valid")
    }
};

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//fetch all books along with their author details.

const fetchBooks = async function (req, res) {
    let getBook = await book.find().populate({ path: 'author', select: { 'author_name': 1, age: 1 } })
    res.send(getBook)
}

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//Add publisher details into the database.

const addPublisher = async function (req, res) {
    let data = req.body
    let publisherSaved = await publisher.create(data)
    res.send(publisherSaved)
}

module.exports.addAuthor = addAuthor
module.exports.addBook = addBook
module.exports.fetchBooks = fetchBooks
module.exports.addPublisher = addPublisher


