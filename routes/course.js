const express =require("express");
const courseRouter=express.Router();


courseRouter.post("/purchase",(req,res)=>{
    res.send({
        msg:"Course purchased successfully"
    });
});
courseRouter.get("/List",(req,res)=>{
    res.send({
        msg:"Here is the list of courses"
    });
});

module.exports={
    courseRouter:courseRouter
}
