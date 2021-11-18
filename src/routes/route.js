const express = require('express');
const router = express.Router();

//---------------My Author---------------------
const myAuthorcon=require("../controller/myAuthorcon");

router.post('/myAuthorCreation',myAuthorcon.myAuthorCreation);
router.post('/myBookCreation',myAuthorcon.myBookCreation);
router.post('/myPublisher',myAuthorcon.myPublisherCreation);
router.get('/getBookData',myAuthorcon.getBookData);
router.get('/getSpecificData',myAuthorcon.getSpecificData);




module.exports = router;