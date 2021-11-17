const authorModels = require("../models/authorModels.js"); 
const author = require("../models/authorBookModels.js");

// CRUD OPERATION - TASK 1- if author_id is not available at the time of input then don't accept the entry in neither bookCollection nor authorCollection.
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const entryCreation = async function (req , res){ 
    console.log(req.body);
    let data = req.body;
    if(data.author_id==null){ 
        res.send({msg: "author_id must be there"})
    }else{
        let savedData = await authorModels.create(data)
        res.send({msg: savedData})
    }
}
 
// To store the data of book containing book name, author id, price and ratings in database.
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const authorBookCreation = async function (req , res){
    console.log(req.body);
    let data = req.body;
    let savedData = await author.create(data)
    res.send({msg: savedData})
}

// CRUD OPERATION - TASK 2- To list out all the books written by Chetan bhagat.
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const authorFind = async function(req , res){
    let allbooks = await author.find({author_name:"Chetan Bhagat"}).select({author_id:1,_id:0});
    let id =allbooks[0].author_id;
    let books = await author.find({author_id:id}).select({name:1,_id:0});
    res.send({msg:books});
}

//CRUD OPERATION - TASK 3- Find the author of "Two states" and update its price to 100 and return its author_name and updated price
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const changePrice = async function(req,res){
    let allBooks = await author.findOneAndUpdate({"newBooks_details.name":"Two States"},{$set:{price:100}});
    let authorId=allBooks.author_id; //1
    let name= await authorModels.find({author_id:authorId}).select({author_name:1,_id:0});
    let price = allBooks.price;
    res.send({authorname:name,updatedPrice:price});

}

//CRUD OPERATION - TASK 4- Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const findBook = async function(req,res){
    let allBooks=await author.find({ "prices" : {$gte:50,$lte:100 } } ).select({author_id:1,_id:0});
    let len=allBooks.length;
    console.log(len);
    let arr=[];
    for(let i=0;i<len;i++) // performing array traversal
    {
        let id=allBooks[i].author_id;
        let books=await authorModels.find({author_id:id}).select({ author_name:1,_id:0});
        arr.push(books);
    }
    res.send({Authors_Name:arr});
}

module.exports.findBook=findBook;
module.exports.changePrice=changePrice;
module.exports.authorFind=authorFind;
module.exports.authorBookCreation=authorBookCreation;
module.exports.authorCreation=entryCreation;