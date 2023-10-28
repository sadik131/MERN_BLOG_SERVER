const express = require("express")
const router = express.Router()
const postControler = require("../controler/post.controler")

// get all posts
router.route("/")
.get(postControler.getAllPost)

// get post by id
router.route("/:id")
    .get(postControler.getPostByUserId)
    .delete(postControler.deleteWithId)

module.exports = router

