const express = require("express")
const router = express.Router()
const postControler = require("../controler/post.controler")

// get all posts
router.route("/")
    .get(postControler.getAllPost)
// console.log("up")
    .post(postControler.createPost)

// get post by id
router.route("/:id")
    .get(postControler.getPostByUserId)
    .delete(postControler.deleteWithId)
    .patch(postControler.updatePost)

// get spacifiq post by id
router.route("/singel/:id")
    .get(postControler.singelPost)

module.exports = router

