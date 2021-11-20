const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get("/CreateUser", function (req, res, next) {
    res.send("middleWare assignment")
    next();
});
module.exports = router;