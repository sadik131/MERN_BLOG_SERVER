const mongoosh = require("mongoose")

const userSchema = mongoosh.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    userImg:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:[true,"password match"]
    },
    bio:{
        type:String,
        default:"write your bio"
    },
    location:{
        type:String
    },
    city:{
        type:String
    },
    relation:{
        type:String,
        enum:["married" ,"Singel","cenapred"],
        default:"Singel"
    }
},{timestamps:true})

const User = mongoosh.model("Users" , userSchema)


module.exports = User