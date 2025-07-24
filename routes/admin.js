const express=require("express");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const { JWT_ADMIN_SECRET } = require("../config");

const adminRouter=express.Router();
const AdminModel=require("../database");

adminRouter.post("/signup",async(req,res)=>{
    const { name, email, password }=req.body;
    const hashedPassword= await bcrypt.hash(password,10);
      await AdminModel.create({
        name:name,
        email:email,
        password:hashedPassword,
    })
    res.send({
        msg:"Admin successfully signed up"
    });
});


adminRouter.post("/signin",async(req,res)=>{
    const { email, password}=req.body;
    const admin=await AdminModel.findOne({
        email:email
    });
    if(admin){
        const isPasswordValid=await bcrypt.compare(password,admin.password);
        if(isPasswordValid){
            const token=jwt.sign({
                id:admin._id
            },JWT_ADMIN_SECRET);
            return res.status(200).json({
                msg:"Admin successfully signed in",
                token:token
            })
        }
    }else{
        res.status(404).send({
        msg:"Invalid credentials"
    });
    }
    
});


adminRouter.post("/create-course",(req,res)=>{
    res.send({
        msg:"Course created successfully"
    });
});

adminRouter.put("/update-course",(req,res)=>{
    res.send({
        msg:"course updated successfully"
    });
});
adminRouter.get("/List-courses",(req,res)=>{
    res.send({
        msg:"Here is the list of courses created by admin"
    });
});

module.exports={
    adminRouter:adminRouter
}