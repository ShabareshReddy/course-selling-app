const jwt=require("jsonwebtoken");
const JWT_SECRET  ="Kajalpapa";

const auth=async(req,res,next)=>{
    const token=req.headers.token;
    const decoded=await jwt.verify(token,JWT_SECRET);
    if(decoded){
        req.userId=decoded.id;
        next();
    }else{
        res.status(401).json({
            msg:"Unauthorized access"
        })
    }
}

module.exports={
    auth:auth
}