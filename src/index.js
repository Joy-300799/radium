const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose')

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://users-open-to-all:hiPassword123@cluster0.uh35t.mongodb.net/Akash_kumar_sah?retryWrites=true&w=majority", {useNewUrlParser: true})
    .then(() => console.log('mongodb running on 27017'))
    .catch(err => console.log(err))


//   mongoose.connect("mongodb+srv://user-open-to-all:hiPassword123@cluster0.xgk0k.mongodb.net/Akash_kumar_sah-database?retryWrites=true&w=majority", {useNewUrlParser: true})
//     .then(() => console.log('mongodb running on 27017'))
//     .catch(err => console.log(err))


const middleware =function(req,res,next){
    const newdate=new Date();
    const fullDate=newdate.getDate()+"/"
                    + (newdate.getMonth()+1)  + "/" 
                    + newdate.getFullYear() + " "  
                    + newdate.getHours() + ":"  
                    + newdate.getMinutes() + ":" 
                    + newdate.getSeconds();
      const ip=req.ip;           // Assigning the local ip  in variable ip
      const url=req.originalUrl; //Assigning the The end point Or url in variable url
      console.log("Date="+fullDate +" "+ "IP =" + ip+ " "+ "URL ="+url);
      next();

}
app.use(middleware);    //Declare miiddel

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});