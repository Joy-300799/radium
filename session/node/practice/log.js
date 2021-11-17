function one(message){
    console.log(message);
}

function two(){
    console.log("This is my second attempt to try")
}

const url= "https://www.facebook.com/"
let new_url = "https://www.google.com/"

module.exports.one= one
module.exports.two= two
module.exports.url= url
module.exports.newurl= new_url