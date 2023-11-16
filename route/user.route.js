const express = require("express")
const router = express.Router()
const userControler = require("../controler/user.controler")

router.route("/")
// register the new user
.post(userControler.registeruser)
// update user informantion
.patch(userControler.editProfile)


// login the user
router.route("/login")
.post(userControler.loginUser)

module.exports = router

