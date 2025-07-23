// const mongoose=require("mongoose");
// const Schema=mongoose.Schema;

// const user=new Schema({
//     name: {
//         type:String,
//         required:true
//     },
//     email:{
//         type:String,
//         required:true,
//         unique:true,
//         lowercase:true,
//         trim:true
//     },
//     password:{
//         typr:String,
//         required:true
//     }   
// });


// const UserModel=mongoose.model("User",user);

// module.exports={
//     UserModel: UserModel
// }

const mongoose=require("mongoose");
const Schema=mongoose.Schema;


const user=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        requires:true,
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



const UserModel=mongoose.model("User",user);
const AdminModel=mongoose.model("Admin",admin);
