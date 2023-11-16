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

// create a new post
exports.createPost = async (req, res) => {
    const { user, postImg, text } = req.body
    try {
        const doc = await Post.create({ user,postImg, text })
        res.status(200).json({
            success: true,
            doc,
            message: "Publish the post"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error,
            message: "Couldn't publish the post"
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
            message: "successfuly got data",
            result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Some think went wrong"
        })
    }
}
// get singel post with id
exports.singelPost = async (req, res) => {
    const id = req.params.id
    try {
        const result = await Post.find({ _id: id }).populate("user")
        res.status(200).json({
            success: true,
            message: "successfuly fetch singel data",
            result
        })
    } catch (error) {
        res.status(400).json({
            err: error.message,
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

// delete post with user id
exports.updatePost = async (req, res) => {
    const id = req.params.id
    try {
        const result = await Post.updateOne({ _id: id }, req.body, { new: true })
        res.status(200).json({
            success: true,
            result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Can't update the post"
        })
    }
}