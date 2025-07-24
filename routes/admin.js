const express=require("express");
const app=express();
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const { JWT_ADMIN_SECRET } = require("../config");
const { adminauth }=require("../middlewares/adminauth");
app.use(express.json());

const adminRouter=express.Router();

const { AdminModel }=require("../database");
const { CourseModel} =require("../database");
const course = require("./course");


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


adminRouter.post("/create-course",adminauth,async(req,res)=>{
    const adminId=req.userid;
    const { title,description,price,imageUrl}=req.body;
   const course= await CourseModel.create({
        title: title,
        description: description,
        price: price,
        imageUrl: imageUrl,
        creatorId:adminId
    })
    res.send({
        msg:"Course created successfully",
        courseId:course._id
    });
});


adminRouter.put("/update-course",adminauth,async(req,res)=>{
    const adminId=req.userid;
    const { title, description, price, imageUrl,courseId} = req.body;
    const course=await CourseModel.updateOne({
        _id:courseId,
        creatorId:adminId
    },{
        title:title,
        description:description,
        price:price,
        imageUrl:imageUrl,
    });
    res.send({
        msg:"Course updated successfully",
        courseId:course._id
    })
});


adminRouter.get("/List-courses",adminauth,async(req,res)=>{
    const adminId=req.userid;
    const courses=await CourseModel.find({
        creatorId:adminId
    })
    res.send({
        msg:"Here is the list of courses created by admin",
        courses:courses
    });
});

module.exports={
    adminRouter:adminRouter
}