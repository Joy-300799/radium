const express = require('express');
const router = express.Router();


//------------------------Product selling-----------------------

const compOrder=require('../controller/compOrder.js');
const middle=require('../Middleware/middleware.js');

router.post('/user',middle.mid1,compOrder.userCreation);
router.post('/product',compOrder.productEntry);
router.post('/order',middle.mid1,compOrder.takingOrder);



module.exports = router;