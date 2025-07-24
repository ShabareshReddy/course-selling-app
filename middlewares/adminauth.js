const jwt=require("jsonwebtoken");
const { JWT_ADMIN_SECRET } = require("../config");


const adminauth= async(req ,res ,next)=>{
    const token=req.headers.token;
    const decoded= await jwt.verify(token,JWT_ADMIN_SECRET);
    if(decoded){
        req.userid=decoded.id;
        next();
    }else{
        return res.status(401).json({
            msg:"Unauthorized access"
        })
    }
}

module.exports={
    adminauth:adminauth
}