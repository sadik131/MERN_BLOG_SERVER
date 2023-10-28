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
},{timestamps:true})

const Post = mongoosh.model("Post", postSchema)


module.exports = Post