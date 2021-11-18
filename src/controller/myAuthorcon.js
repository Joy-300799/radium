const myAuthor=require("../models/myAuthor.js");
const myBook=require("../models/myBook.js");
const myPublisher=require('../models/myPublisher');

//--------------------------------------------------------
const myAuthorCreation = async function (req,res){ // For author entry
    let data = req.body;
    let savedData = await myAuthor.create(data);
    res.send({data: savedData})
}
//-------------------------------------
// For publisher entry-----------
const myPublisherCreation= async function (req,res){
    let data=req.body;
    let savedData=await myPublisher.create(data);
    res.send({data:savedData});
}

//--------------------------------------------------------------------
 //For book entry
const myBookCreation = async function (req , res){
    let data = req.body;
    let authorId=req.body.author;//     Assigned the auther id in variable to check it is valid or not
    let publisherId=req.body.publisher;//     Assigned the publisher id in variable to check it is valid or not
    let validId=await myAuthor.findById(authorId);
    let validId1=await myPublisher.findById(publisherId)

    if(validId && validId1)
    {
        let savedData = await myBook.create(data)
        res.send({data: savedData})
    }
    else{
        res.send("The given id INVALID");
    }
    
}
//------------------------------------------------
const getBookData = async function (req,res){// fetching the data from database
    let allbooks = await myBook.find().populate('author publisher');
    res.send({msg: allbooks});
}
//----------------------------------
const getSpecificData = async function(rq,res){  //This function extract specific data from author object.......
    let allbooks=await myBook.find().populate('author',{author_name:1,age:1});
    res.send({data:allbooks});
}

module.exports.myBookCreation=myBookCreation;
module.exports.myAuthorCreation=myAuthorCreation;
module.exports.getBookData=getBookData;
module.exports. myPublisherCreation=myPublisherCreation;
module.exports. getSpecificData=getSpecificData;