const express=require("express");
const Router=express.Router();
const adminRouter=Router();


adminRouter.post("/signup",(req,res)=>{
    res.send({
        msg:"Admin successfully signed up"
    })
})
adminRouter.post("/signin",(req,res)=>{
    res.send({
        msg:"Admin successfully signed in"
    })
})
adminRouter.post("/create-course",(req,res)=>{
    res.send({
        msg:"Course created successfully"
    })
})

module.exports={
    adminRouter:adminRouter
}