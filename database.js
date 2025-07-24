const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const ObjectId=Schema.Types.ObjectId;



const user=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minLength:6,
    }
});

const admin=new Schema({
    name:{
        type:String,
        requires:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    password:{
        type:String,
        required:true,
        minLength:6,
    }
});

const course=new Schema({
    title:{
        type:String,
        required:true,       
    },
    description:{
        type:String,
        required:true,
    },
    price:Number,
    imageURL:String,
    creatorId:{
        type:ObjectId,
        required:true,
    }

})

const purchases=new Schema({
    userId:ObjectId,
    courseId:ObjectId
})

const UserModel=mongoose.model("User",user);
const AdminModel=mongoose.model("Admin",admin);
const CourseModel=mongoose.model("Course",course);
const purchaseModel=mongoose.model("Purchase",purchases);


module.exports={
    UserModel,
    AdminModel,
    CourseModel,
    purchaseModel
}
