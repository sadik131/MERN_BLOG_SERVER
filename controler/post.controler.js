const Post = require("../modal/post.modal")

// find all of the posts 
exports.getAllPost = async (req, res) => {
    try {
        const result = await Post.find({}).populate("user")
        res.status(200).json({
            success: true,
            result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Some think went wrong"
        })
    }
}

// find post with user id
exports.getPostByUserId = async (req, res) => {
    const id = req.params.id
    try {
        const result = await Post.find({ user: id }).populate("user")
        res.status(200).json({
            success: true,
            message:"successfuly got data",
            result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Some think went wrong"
        })
    }
}


// delete post with user id
exports.deleteWithId = async (req, res) => {
    const id = req.params.id
    try {
        const result = await Post.deleteOne({ _id: id })
        res.status(200).json({
            success: true,
            result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Can't delete your post"
        })
    }
}