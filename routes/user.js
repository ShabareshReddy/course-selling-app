const express = require("express");
const userRouter=express.Router();

userRouter.post("/signup",(req,res)=>{
    res.send({
        msg:"Succesfully signed up"
    })
})

userRouter.post("/signin",(req,res)=>{
    res.send({
        msg:"Succesfully signed in"
    })
})
userRouter.get("/purchases",(req,res)=>{
    res.send({
        msg:"here are the purchases"
    })
})
module.exports={
    userRouter:userRouter
}