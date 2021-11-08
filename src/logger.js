function log(name){
    console.log("The name is "+name)
}
function welcome(){
    console.log("Welcome to my application. I am a backend developer trainee at FunctionUp.")
}

let url= "https://www.wikipedia.org/"

module.exports.log=log
module.exports.welcome=welcome
module.exports.url=url