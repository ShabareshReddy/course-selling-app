const express = require("express");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const { JWT_USER_SECRET } = require("../config");

const userRouter=express.Router();
const { UserModel }=require("../database");

const app=express();
app.use(express.json());

userRouter.post("/signup",async(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const hashedPassword= await bcrypt.hash(password,10);

    await UserModel.create({
        name:name,
        email:email,
        password:hashedPassword,
    });
    res.send({
        msg:"Succesfully signed up"
    })
})

userRouter.post("/signin",async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const user= await UserModel.findOne({
        email:email,
    })
    if(!user){
        return res.status(400).send({
            msg:"user not found"
        })
    }
    const isPasswordValid=await bcrypt.compare(password,user.password);
    if(isPasswordValid){
        const token=jwt.sign({
            id:user._id
        },JWT_USER_SECRET)
        return res.json({
            msg:"Succesfully signed In",
            token:token,
        })
    }else{
         res.status(404).send({
        msg:"Invalid credentials"
    })
    }
   
})
userRouter.get("/purchases",(req,res)=>{
    res.send({
        msg:"here are the purchases"
    })
})
module.exports={
    userRouter:userRouter
}