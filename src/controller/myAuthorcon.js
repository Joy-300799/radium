const myAuthor=require("../models/myAuthor.js");
const myBook=require("../models/myBook.js");

const myAuthorCreation = async function (req , res){ // For author entry
    let data = req.body;
    let savedData = await myAuthor.create(data);
    res.send({data: savedData})
}

 //For book entry
const myBookCreation = async function (req , res){
    let data = req.body;
    let authorId=req.body.author;
    let validId=await myAuthor.findById(authorId);
    if(validId)
    {
        let savedData = await myBook.create(data)
        res.send({data: savedData})
    }
    else{
        res.send("The given id INVALID");
    }
    
}

const getBookData = async function (req,res){// fetching the data from database
    let allbooks = await myBook.find().populate('author');
    res.send({msg: allbooks});
}

module.exports.myBookCreation=myBookCreation;
module.exports.myAuthorCreation=myAuthorCreation;
module.exports.getBookData=getBookData;