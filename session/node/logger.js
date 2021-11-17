function log(message) {
    console.log(message);
}

function logSomeMore() {
    console.log('this is my second logging function')
}

const url= "https://www.github.com/"
let newUrl= "https://www.twitter.com/"

module.exports.loggingfunction = log 
module.exports.anotherloggingfunction = logSomeMore
module.exports.endpoint = url 
module.exports.newUrl = newUrl 