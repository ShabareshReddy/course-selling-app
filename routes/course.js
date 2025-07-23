const express =require("express");
const Router=express.Router();
const courseRouter=Router();


courseRouter.post("/purchase",(req,res)=>{
    res.send({
        msg:"Course purchased successfully"
    });
});
courseRouter.ger("/List",(req,res)=>{
    res.send({
        msg:"Here is the list of courses"
    });
});

module.exports={
    courseRouter:CouurseRouter
}
