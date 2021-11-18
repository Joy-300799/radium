const express = require('express');
const router = express.Router();



//---------------My Author---------------------
const myAuthorcon=require("../controller/myAuthorcon");

router.post('/myAuthorCreation',myAuthorcon.myAuthorCreation);
router.post('/myBookCreation',myAuthorcon.myBookCreation);
router.get('/getBookData',myAuthorcon.getBookData);



module.exports = router;