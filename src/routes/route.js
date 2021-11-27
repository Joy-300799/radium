const express = require('express');

const router = express.Router();
const coinsController = require('../controller/coinsController')
router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
router.get("/assets",coinsController.fetchCoins) 

module.exports = router;