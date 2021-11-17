const express = require('express');
const router = express.Router();
const bookController = require("../controllers/bookController")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/Create',bookController.authorCreation)
router.post('/authorBook',bookController.authorBookCreation)
router.post('/chetanBhagat',bookController.authorFind)
router.post('/NewPrice',bookController.changePrice)
router.post('/findBook',bookController.findBook)


module.exports = router;