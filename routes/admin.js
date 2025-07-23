const express=require("express");
const adminRouter=express.Router();
const AdminModel=require("../database");

adminRouter.post("/signup",(req,res)=>{
    res.send({
        msg:"Admin successfully signed up"
    });
});
adminRouter.post("/signin",(req,res)=>{
    res.send({
        msg:"Admin successfully signed in"
    });
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