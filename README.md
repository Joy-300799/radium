# AXIOS Get request

- ABOUT AXIOS- a package that helps us hit any external api and fetch data from that api


- create options object with method and url
- await axios(options)
- data will be mostly available in response.data

# post request:
- method changed to post
- data field added in options

### Assignment 25 Nov

GOTO  http://api.openweathermap.org => “subscribe” current weather data ==> get api key for Free version ==> create new account and Verify your emailId( Must verify to avoid issues) => go to My APi keys under your account name(top right corner) or https://home.openweathermap.org/api_keys => save the key/appid somewhere. Now proceed further

	
get weather of London from http://api.openweathermap.org/data/2.5/weather?q=London&appid=<useYourOwnAppId>  (NOTE: must use HTTP infront of the url else axios will attempt to hit localhost and give error  ..also use HTTP only and not HTTPS)
	
then change the above to get the temperature only( of London)
	
Sort the cities  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] in order of their increasing temperature


result should look something like this :-

[
{city:"London", temp: 280},
{city:"Moscow", temp: 290},
{city:"Bangalore", temp: 301.2},
......
]
