const bookModel = require("../models/bookModel")
const validator = require('../validators/validator')
const validateDate = require("validate-date");
const aws = require("aws-sdk");

aws.config.update({
    accessKeyId: "AKIAY3L35MCRRMC6253G", // id
    secretAccessKey: "88NOFLHQrap/1G2LqUy9YkFbFRe/GNERsCyKvTZA", // like your secret password
    region: "ap-south-1" // Mumbai region
});

// this function uploads file to AWS and gives back the url for the file
let uploadFile = async(file) => {
    return new Promise(function(resolve, reject) { // exactly 

        // Create S3 service object
        let s3 = new aws.S3({ apiVersion: "2006-03-01" });
        var uploadParams = {
            ACL: "public-read", // this file is publically readable
            Bucket: "classroom-training-bucket", // HERE
            Key: "Joy1/" + new Date() + file.originalname, // HERE    "pk_newFolder/harry-potter.png" pk_newFolder/harry-potter.png
            Body: file.buffer,
        };

        // Callback - function provided as the second parameter ( most oftenly)
        s3.upload(uploadParams, function(err, data) {
            if (err) {
                return reject({ "error": err });
            }
            console.log(data)
            console.log(`File uploaded successfully. ${data.Location}`);
            return resolve(data.Location); //HERE 
        });
    });
};
const addLink = async function(req, res) {
    try {
        let files = req.files;
        if (files && files.length > 0) {
            //upload to s3 and return true..incase of error in uploading this will goto catch block( as rejected promise)
            let uploadedFileURL = await uploadFile(files[0]); // expect this function to take file as input and give url of uploaded file as output 
            res.status(201).send({ status: true, data: uploadedFileURL });
        } else {
            res.status(400).send({ status: false, msg: "No file to write" });
        }
    } catch (err) {
        console.log("error is: ", err);
        res.status(500).send({ status: false, msg: "Error in uploading file to s3" });
    }
};

//creating book
const bookCreation = async function(req, res) {
    try {
        let requestBody = req.body;
        const { title, excerpt, ISBN, category, subcategory, releasedAt, coverLink } = requestBody

        //Validation starts
        if (!validator.isValidRequestBody(requestBody)) { //for empty req body.
            return res.status(400).send({ status: false, message: 'Invalid request parameters. Please provide book details' })
        }

        if (!validator.isValid(title)) {
            return res.status(400).send({ status: false, message: "Title must be present" })
        };
        if (!validator.isValid(excerpt)) {
            return res.status(400).send({ status: false, message: "excerpt must be present" })
        };
        if (!validator.isValid(ISBN)) {
            return res.status(400).send({ status: false, message: "ISBN must be present" })
        };
        if (!validator.isValid(category)) {
            return res.status(400).send({ status: false, message: "category must be present" })
        };
        if (!validator.isValid(subcategory)) {
            return res.status(400).send({ status: false, message: "subcategory must be present" })
        };
        if (!validator.isValid(releasedAt)) {
            return res.status(400).send({ status: false, message: "releasedAt must be present" })
        };
        if (!validator.isValid(coverLink)) {
            return res.status(400).send({ status: false, message: "coverLink must be present" })
        };

        if (!validateDate(releasedAt, responseType = "boolean")) {
            return res.status(400).send({ status: false, message: `Invalid date format. Please provide date as 'YYYY-MM-DD'.` })
        }
        //validation ends.

        //searching title & ISBN in database to maintain their uniqueness.
        const titleAlreadyUsed = await bookModel.findOne({ title: title })
        if (titleAlreadyUsed) {
            return res.status(400).send({ status: false, message: "Title is already used. Try a new title." })
        }
        const isbnAlreadyUsed = await bookModel.findOne({
            ISBN: ISBN
        });
        if (isbnAlreadyUsed) {
            return res.status(400).send({ status: false, message: "ISBN already used. Try a new ISBN." })
        }
        const newBook = await bookModel.create(requestBody);
        return res.status(201).send({ status: true, message: "Book created successfully", data: newBook })
    } catch (err) {
        return res.status(500).send({ status: false, message: "Something went wrong", Error: err.message })
    }
}

module.exports.addLink = addLink
module.exports.bookCreation = bookCreation