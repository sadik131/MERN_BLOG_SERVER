const Post = require("../modal/post.modal")

exports.savePost = async (doc) => {
    const result = await Post.create(doc)
    return result
}

