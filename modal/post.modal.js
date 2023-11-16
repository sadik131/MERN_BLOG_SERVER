const mongoosh = require("mongoose")

const postSchema = mongoosh.Schema({
    text: {
        type: String,
        required: true,
    },
    postImg: {
        type: String,
    },
    user: {
        type: mongoosh.Schema.Types.ObjectId,
        ref: "Users",
    },
    like:{
        type:Array,
        default:[]
    },
    comment:{
        type:Array,
        default:[]
        
    }

},{timestamps:true})

const Post = mongoosh.model("Post", postSchema)


module.exports = Post