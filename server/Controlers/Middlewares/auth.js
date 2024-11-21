var jwt = require('jsonwebtoken');
const { jwtkey } = require('../../config');

async function auth(req, res, next){

    try {

        let token = req.headers.token;
        if(token){
            isValid = jwt.verify(token, jwtkey)
            if(isValid){
                req.tokenData = isValid;
                next();
            }
            else{
                throw('err')
            }
        }
        else{
            throw('err')
        }

    } catch (error) {
        res.status(401);
        console.log(error);
        res.send("Cannot Authenticate Token")
    }

}

module.exports = {auth}