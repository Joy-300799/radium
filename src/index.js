const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});

// 19 NOV assignment - write a api and insert a middlewares and log the data everytime when any API is hit . (give date-time-Ip address-url)

let dateTime = require('node-datetime');

const globMid = function (req , res , next ) {

    let DT = dateTime.create();
    let format = DT.format('d/m/Y H:M:S');
    let ipAdd = req.ip
    let url = req.url
    console.log(`${format} ${ipAdd} ${url}`);  
    next()
}

app.use(globMid); 