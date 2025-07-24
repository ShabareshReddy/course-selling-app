const express=require("express");
const mongoose=require("mongoose");

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const app=express();
app.use(express.json());


app.use("/user",userRouter);
app.use("/course",courseRouter);
app.use("/admin",adminRouter);


async function connectiondb(){
    const connection= await  mongoose.connect("mongodb+srv://milkabhau87:TzHQ9RuMGLHembNJ@namastenode.e5moccv.mongodb.net/CourseSellingApp");
    console.log("Connected to MongoDB");
    app.listen(3000,()=>{
    console.log("server is running in the port 3000");
})
}
connectiondb();
