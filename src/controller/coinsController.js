const coinsModel = require('../models/coinsModel')
const axios = require('axios')

let coinsData;

const fetchCoins = async function (req, res) {
    try {
      let options = {
        method: "get",
        url: "http://api.coincap.io/v2/assets",
        headers: {
          Authorization: 'Bearer ' + "cf79ca27-6ae8-483a-a20f-70f56588b502"
        }
      }
      let resp = await axios(options);    
      coinsData = resp.data.data;     // fetching data from a key named "data".
  
      // console.log(resp.data)
  
      let sortedArr = coinsData.sort(function (a, b) {
        return b.changePercent24Hr - a.changePercent24Hr;      //sort in Decreasing order
      })
      let savedData = await coinsModel.create(sortedArr)
      res.status(200).send({ msg: "succesfully fetched sorted crypto currencies", data: savedData })
     }
    catch (err) {
      res.status(500).send({ msg: "Something went wrong", err: err })
    }
  }
  
  module.exports.fetchCoins = fetchCoins;   // 26 NOv - assignment
