let mid1=function(req,res,next){
    let validation=req.headers.freeuserapp;
    console.log(req.headers);
    if(validation){
        next();
    }
    else{
        res.send("The required header  is empty missing");
    }
}
module.exports.mid1 =mid1;