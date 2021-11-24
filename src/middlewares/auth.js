const jwt = require("jsonwebtoken")

const tokenCheck = function (req, res, next) {
    let token = req.headers["x-auth-token"]
    if (token != null) {
        let decodedToken = jwt.verify(token, "radium")
        if (decodedToken) {
            req.token = decodedToken
            next()
        } else {
            res.status(401).send({ status: false, message: "Authentication token is invalid" })
        }
    } else {
        res.status(401).send({ msg: "Request is missing a mandatory token header" })
    }
}
module.exports.tokenCheck = tokenCheck;