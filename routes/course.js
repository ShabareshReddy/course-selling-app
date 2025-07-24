const express =require("express");
const courseRouter=express.Router();
const { userauth }=require("../middlewares/userauth");
const { UserModel, PurchaseModel ,CourseModel}=require("../database");



courseRouter.post("/purchase",userauth,(req,res)=>{
    const userId=req.userId;
    const courseId=req.body.courseId;

    const purchase=PurchaseModel.create({
        userId,
        courseId
    })
    res.send({
        msg:"Course purchased successfully"
    });
});
courseRouter.get("/Courses-List",async(req,res)=>{
    const courses=await CourseModel.find({});
    res.send({
        courses:courses
    });
});

module.exports={
    courseRouter:courseRouter
}
