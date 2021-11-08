function log(message)
{
    console.log(message);
}
function welcome()
{
    console.log("Welcome to my application.I am Function up");
}
const url='http://mylogging.com/';
module.exports.loggingfunction=log;
module.exports.endpoint=url;
module.exports.welcomeText=welcome;