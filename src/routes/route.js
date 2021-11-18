const express = require('express');
const router = express.Router();

const UserController= require("../controller/userController");

const bookcontroller=require("../controller/bookcontroller");







router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/newBook', UserController.createUsers);
router.get('/bookList', UserController.getUsersData);

router.post('/newbook1',bookcontroller.bookCreation);
router.post('/booklist1',bookcontroller.getBookData);
router.post('/bookyear',bookcontroller.getBooksInYear);
router.post('/inrbook',bookcontroller.getXINRBooks);
router.post('/patiBook',bookcontroller.getParticularBooks);
router.post('/ranBook',bookcontroller.getRandomBooks);
//--------------------------------------------------------------------
const authorbook=require("../controller/authorbook");

router.post('/authorcreation',authorbook.authorCreation);
router.post('/authorbookcreation',authorbook.authorBookCreation);
router.post('/authorfind',authorbook.authorFind);
router.post('/changeprice',authorbook.changePrice);
router.post('/findbook',authorbook.findBook);

//---------------My Author---------------------
const myAuthorcon=require("../controller/myAuthorcon");

router.post('/myAuthorCreation',myAuthorcon.myAuthorCreation);
router.post('/myBookCreation',myAuthorcon.myBookCreation);
router.post('/myPublisher',myAuthorcon.myPublisherCreation);
router.get('/getBookData',myAuthorcon.getBookData);
router.get('/getSpecificData',myAuthorcon.getSpecificData);




module.exports = router;