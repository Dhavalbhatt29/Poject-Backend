const  jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utilities/config.js");
const today = require("../models/today_model.js");

const Auth = async(req, res, next) => {
    console.log(req.headers);
    try{

        const token = req.headers.authorization;
        
        if (!token) {
            return res.status(401).json({ message:"Token is empty" });
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        const dbuser = await today.findById({_id:decoded.id});
        if (!dbuser) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.user = dbuser;
        next();

    }
    catch(error){
        console.log(error);

    }   
    
}



module.exports = Auth;